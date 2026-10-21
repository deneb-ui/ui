'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  EditableProductDetail,
  type EditableProductDetailProps,
  type ProductDetailItem,
} from './EditableProductDetail';
import {
  isRecord,
  useProducts,
  useSiteData,
  type SiteData,
} from './SiteDataProvider';
import { withBasePath } from './utils';
import { resolveCatalogImages } from './utils/catalogMedia';

const DEFAULT_QUERY_PARAM = 'id';
const DEFAULT_DETAIL_ROUTE = '/products/detail/';
const DEFAULT_RETRY_DELAYS = [0, 750, 2_000] as const;

export type PlatformProductDetailStatus =
  | 'loading'
  | 'ready'
  | 'not-found'
  | 'error';

export interface UsePlatformProductDetailOptions {
  /** Product ID override. When omitted, the ID is read from `?id=` in the browser URL. */
  productId?: string | number | null;
  /** Query-string key used when `productId` is omitted. Defaults to `id`. */
  queryParam?: string;
  /** Optional product seed used when SiteDataProvider has not supplied a catalog yet. */
  products?: ProductDetailItem[];
  /** Optional live catalog endpoint override. Pass `null` to disable the remote lookup. */
  catalogUrl?: string | null;
  /** Retry delays in milliseconds. The default makes three attempts: immediately, 750ms, and 2s. */
  retryDelays?: readonly number[];
}

export interface PlatformProductDetailResult {
  product: ProductDetailItem | null;
  productId: string;
  productIndex: number;
  status: PlatformProductDetailStatus;
  error: Error | null;
  retry: () => void;
}

export interface PlatformProductDetailRenderContext
  extends PlatformProductDetailResult {
  sectionPath: string;
}

export interface PlatformProductDetailProps
  extends Omit<EditableProductDetailProps, 'product'>,
    UsePlatformProductDetailOptions {
  /** Render a template-specific detail design while the platform handles URL and live-data resolution. */
  renderProduct?: (
    product: ProductDetailItem,
    context: PlatformProductDetailRenderContext,
  ) => React.ReactNode;
  /** Custom loading content. */
  loadingFallback?: React.ReactNode;
  /** Custom missing-product content. */
  notFoundFallback?: React.ReactNode;
  /** Custom network-error content. */
  errorFallback?: React.ReactNode;
  /** Destination used by the default Back to products action. */
  backHref?: string;
  /** Label used by the default Back to products action. */
  backLabel?: string;
}

function normalizeId(value: unknown): string {
  if (typeof value !== 'string' && typeof value !== 'number') return '';
  return String(value).trim();
}

function readProductId(queryParam: string): string {
  if (typeof window === 'undefined') return '';
  return normalizeId(new URL(window.location.href).searchParams.get(queryParam));
}

function resolveCatalogUrl(
  siteData: SiteData,
  override: string | null | undefined,
): string | null {
  if (override === null) return null;

  const slug = normalizeId(
    siteData.siteInstance?.slug || siteData.project?.slug || siteData.project?.id,
  );
  const isPreviewMode =
    typeof window !== 'undefined' &&
    (window.location.pathname.includes('/template-preview/') ||
      window.location.pathname.includes('/preview/'));

  if (isPreviewMode || slug === 'template-validation') {
    return null;
  }

  if (typeof override === 'string') {
    const trimmed = override.trim();
    if (trimmed.includes('/template-validation/')) return null;
    return trimmed || null;
  }

  const configured = siteData.api?.catalogUrl;
  if (typeof configured === 'string' && configured.trim()) {
    const trimmed = configured.trim();
    if (trimmed.includes('/template-validation/')) return null;
    return trimmed;
  }

  if (!slug) return null;

  const baseUrl = siteData.api?.baseUrl;
  if (typeof baseUrl === 'string' && baseUrl.trim()) {
    return `${baseUrl.replace(/\/+$/, '')}/site-catalog/${encodeURIComponent(slug)}/live-data`;
  }

  return `/site-catalog/${encodeURIComponent(slug)}/live-data`;
}

function readCatalogProducts(payload: unknown): ProductDetailItem[] {
  if (!isRecord(payload)) return [];
  if (Array.isArray(payload.products)) {
    return payload.products as ProductDetailItem[];
  }
  if (isRecord(payload.content) && Array.isArray(payload.content.products)) {
    return payload.content.products as ProductDetailItem[];
  }
  return [];
}

function findProduct(
  products: ProductDetailItem[],
  productId: string,
): { product: ProductDetailItem | null; index: number } {
  if (!productId) return { product: null, index: -1 };
  const index = products.findIndex(
    (candidate) => normalizeId(candidate?.id) === productId,
  );
  return {
    product: index >= 0 ? products[index] : null,
    index,
  };
}

function normalizeProductForDetail(
  product: ProductDetailItem,
  siteData: SiteData,
): ProductDetailItem {
  const customData = isRecord(product.customData) ? product.customData : {};
  // Public catalog rows keep template-specific variants in customData. Flatten
  // them for custom renderers while preserving explicit top-level fields.
  const mergedProduct = {
    ...customData,
    ...product,
  } as ProductDetailItem;
  const name =
    (typeof mergedProduct.name === 'string' && mergedProduct.name) ||
    (typeof mergedProduct.title === 'string' && mergedProduct.title) ||
    (typeof (mergedProduct as any).productName === 'string' && (mergedProduct as any).productName) ||
    (typeof (mergedProduct as any).itemTitle === 'string' && (mergedProduct as any).itemTitle) ||
    undefined;
  const image =
    (typeof mergedProduct.featuredImage === 'string' && mergedProduct.featuredImage) ||
    (typeof mergedProduct.imageUrl === 'string' && mergedProduct.imageUrl) ||
    (typeof mergedProduct.image === 'string' && mergedProduct.image) ||
    (typeof (mergedProduct as any).photo === 'string' && (mergedProduct as any).photo) ||
    (typeof (mergedProduct as any).thumbnail === 'string' && (mergedProduct as any).thumbnail) ||
    undefined;
  const price =
    mergedProduct.price ?? (mergedProduct as any).cost ?? (mergedProduct as any).amount ?? (mergedProduct as any).productPrice;
  const images = resolveCatalogImages(mergedProduct);
  const compareAtPrice =
    mergedProduct.compareAtPrice ?? mergedProduct.originalPrice;
  const shop = isRecord(siteData.shop) ? siteData.shop : {};
  const merchant = isRecord(siteData.merchant) ? siteData.merchant : {};
  const whatsappNumber =
    (typeof mergedProduct.whatsappNumber === 'string' && mergedProduct.whatsappNumber) ||
    (typeof shop.whatsapp === 'string' && shop.whatsapp) ||
    (typeof shop.whatsappNumber === 'string' && shop.whatsappNumber) ||
    (typeof merchant.whatsapp === 'string' && merchant.whatsapp) ||
    undefined;

  return {
    ...mergedProduct,
    ...(name
      ? {
          name,
          title:
            typeof mergedProduct.title === 'string' && mergedProduct.title
              ? mergedProduct.title
              : name,
        }
      : {}),
    ...(image
      ? { featuredImage: image, imageUrl: image, image }
      : {}),
    ...(price !== undefined ? { price } : {}),
    ...(images.length > 0 ? { gallery: images, images } : {}),
    ...(compareAtPrice !== undefined
      ? { compareAtPrice, originalPrice: compareAtPrice }
      : {}),
    ...(whatsappNumber ? { whatsappNumber } : {}),
  };
}

/**
 * Resolves a product from the stable static route (`/products/detail/?id=...`).
 * It checks the live SiteDataProvider catalog first, then retries the public
 * catalog endpoint so newly-created merchant products work without rebuilding
 * one static route per product.
 */
export function usePlatformProductDetail({
  productId: productIdOverride,
  queryParam = DEFAULT_QUERY_PARAM,
  products: fallbackProducts = [],
  catalogUrl: catalogUrlOverride,
  retryDelays = DEFAULT_RETRY_DELAYS,
}: UsePlatformProductDetailOptions = {}): PlatformProductDetailResult {
  const siteData = useSiteData();
  const products = useProducts(fallbackProducts) as ProductDetailItem[];
  const explicitProductId = normalizeId(productIdOverride);
  const [locationState, setLocationState] = useState(() => ({
    initialized: Boolean(explicitProductId),
    productId: explicitProductId,
  }));
  const [requestVersion, setRequestVersion] = useState(0);
  const [remoteState, setRemoteState] = useState<{
    key: string;
    product: ProductDetailItem | null;
    index: number;
    status: 'loading' | 'ready' | 'not-found' | 'error';
    error: Error | null;
  }>({
    key: '',
    product: null,
    index: -1,
    status: 'loading',
    error: null,
  });

  useEffect(() => {
    if (explicitProductId) {
      setLocationState({ initialized: true, productId: explicitProductId });
      return;
    }

    const updateFromLocation = () => {
      setLocationState({
        initialized: true,
        productId: readProductId(queryParam),
      });
    };
    updateFromLocation();
    window.addEventListener('popstate', updateFromLocation);
    return () => window.removeEventListener('popstate', updateFromLocation);
  }, [explicitProductId, queryParam]);

  const productId = explicitProductId || locationState.productId;
  const localMatch = useMemo(
    () => findProduct(products, productId),
    [productId, products],
  );
  const catalogUrl = useMemo(
    () => resolveCatalogUrl(siteData, catalogUrlOverride),
    [catalogUrlOverride, siteData],
  );
  const retryKey = retryDelays.join(',');

  useEffect(() => {
    if (!locationState.initialized || !productId || localMatch.product || !catalogUrl) {
      return;
    }

    const controller = new AbortController();
    const requestKey = `${productId}|${catalogUrl}|${requestVersion}`;
    const parsedDelays = retryKey
      .split(',')
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value));
    const delays = parsedDelays.length > 0 ? parsedDelays : [0];
    let timer: ReturnType<typeof setTimeout> | null = null;

    setRemoteState({
      key: requestKey,
      product: null,
      index: -1,
      status: 'loading',
      error: null,
    });

    const attempt = async (attemptIndex: number): Promise<void> => {
      const delay = Math.max(0, delays[attemptIndex] ?? 0);
      if (delay > 0) {
        await new Promise<void>((resolve) => {
          timer = setTimeout(resolve, delay);
        });
      }
      if (controller.signal.aborted) return;

      try {
        const response = await fetch(catalogUrl, {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Catalog request failed with status ${response.status}.`);
        }

        const remoteProducts = readCatalogProducts(await response.json());
        const match = findProduct(remoteProducts, productId);
        if (match.product) {
          setRemoteState({
            key: requestKey,
            product: match.product,
            index: match.index,
            status: 'ready',
            error: null,
          });
          return;
        }

        if (attemptIndex + 1 < delays.length) {
          await attempt(attemptIndex + 1);
          return;
        }

        setRemoteState({
          key: requestKey,
          product: null,
          index: -1,
          status: 'not-found',
          error: null,
        });
      } catch (cause) {
        if (controller.signal.aborted) return;
        if (attemptIndex + 1 < delays.length) {
          await attempt(attemptIndex + 1);
          return;
        }

        setRemoteState({
          key: requestKey,
          product: null,
          index: -1,
          status: 'error',
          error: cause instanceof Error ? cause : new Error('Unable to load the product.'),
        });
      }
    };

    void attempt(0);
    return () => {
      controller.abort();
      if (timer) clearTimeout(timer);
    };
  }, [
    catalogUrl,
    localMatch.product,
    locationState.initialized,
    productId,
    requestVersion,
    retryKey,
  ]);

  const retry = useCallback(() => setRequestVersion((version) => version + 1), []);
  const requestKey = catalogUrl
    ? `${productId}|${catalogUrl}|${requestVersion}`
    : '';

  if (!locationState.initialized) {
    return { product: null, productId, productIndex: -1, status: 'loading', error: null, retry };
  }
  if (!productId) {
    return { product: null, productId, productIndex: -1, status: 'not-found', error: null, retry };
  }
  if (localMatch.product) {
    return {
      product: normalizeProductForDetail(localMatch.product, siteData),
      productId,
      productIndex: localMatch.index,
      status: 'ready',
      error: null,
      retry,
    };
  }
  if (!catalogUrl) {
    return { product: null, productId, productIndex: -1, status: 'not-found', error: null, retry };
  }
  if (remoteState.key !== requestKey) {
    return { product: null, productId, productIndex: -1, status: 'loading', error: null, retry };
  }

  return {
    product: remoteState.product
      ? normalizeProductForDetail(remoteState.product, siteData)
      : null,
    productId,
    productIndex: remoteState.index,
    status: remoteState.status,
    error: remoteState.error,
    retry,
  };
}

/** Build the only product-detail URL that is safe for newly-created products in a static export. */
export function platformProductDetailHref(
  productId: string | number | null | undefined,
  route = DEFAULT_DETAIL_ROUTE,
  queryParam = DEFAULT_QUERY_PARAM,
): string {
  const normalizedProductId = normalizeId(productId);
  if (!normalizedProductId) return withBasePath('/products/');
  const separator = route.includes('?') ? '&' : '?';
  return withBasePath(
    `${route}${separator}${encodeURIComponent(queryParam)}=${encodeURIComponent(normalizedProductId)}`,
  );
}

/**
 * Ready-made live product page for Fivora templates. Use `renderProduct` when
 * the template needs its own design; URL parsing, live lookup, retries, and
 * fallback states remain owned by this component.
 */
export function PlatformProductDetail({
  productId,
  queryParam = DEFAULT_QUERY_PARAM,
  products,
  catalogUrl,
  retryDelays,
  renderProduct,
  loadingFallback,
  notFoundFallback,
  errorFallback,
  backHref = '/products/',
  backLabel = 'Back to products',
  sectionPath = 'product',
  ...detailProps
}: PlatformProductDetailProps) {
  const result = usePlatformProductDetail({
    productId,
    queryParam,
    products,
    catalogUrl,
    retryDelays,
  });

  if (result.status === 'loading') {
    return loadingFallback ?? (
      <div
        role="status"
        className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-16 text-sm text-slate-400"
      >
        <span data-preview-static="product-detail-loading">Loading product…</span>
      </div>
    );
  }

  if (result.status === 'error') {
    return errorFallback ?? (
      <div className="mx-auto flex min-h-[40vh] max-w-xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-100">Unable to load product</h1>
        <p className="text-sm text-slate-400">Please check your connection and try again.</p>
        <button
          type="button"
          onClick={result.retry}
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-950"
        >
          Try again
        </button>
      </div>
    );
  }

  if (result.status === 'not-found' || !result.product) {
    return notFoundFallback ?? (
      <div className="mx-auto flex min-h-[40vh] max-w-xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-100">Product unavailable</h1>
        <p className="text-sm text-slate-400">
          This product could not be found or is no longer listed.
        </p>
        <a
          href={withBasePath(backHref)}
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-950"
        >
          {backLabel}
        </a>
      </div>
    );
  }

  const context: PlatformProductDetailRenderContext = {
    ...result,
    sectionPath,
  };
  if (renderProduct) {
    return <>{renderProduct(result.product, context)}</>;
  }

  return (
    <EditableProductDetail
      {...detailProps}
      product={result.product}
      sectionPath={sectionPath}
    />
  );
}
