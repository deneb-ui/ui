'use client';

import { useSiteData } from './SiteDataProvider';
import { useOptionalCart, parseNumericPrice } from './cart/useCart';
import React, { useState, useEffect, useMemo } from 'react';
import { withBasePath } from './utils';
import {
  resolveProductOptions,
  resolveVariantPrice,
  MeasurementUnit,
  ProductVariant,
} from './utils/productOptions';
import { createWhatsAppUrl } from './utils/urls';
import { resolveCatalogImages } from './utils/catalogMedia';

export interface ProductDetailItem {
  id?: string | number;
  name?: string;
  title?: string;
  brand?: string;
  category?: string;
  price?: string | number;
  compareAtPrice?: string | number;
  originalPrice?: string | number;
  description?: string;
  badge?: string;
  featuredImage?: string;
  imageUrl?: string;
  image?: string;
  gallery?: string[];
  images?: string[];
  additionalImages?: string[];
  addToSelectionLabel?: string;
  specsTitle?: string;
  specs?: Array<{ label: string; value: string }>;
  shippingTitle?: string;
  shippingSummary?: string;
  shippingReturns?: string;
  relatedLabel?: string;
  relatedTitle?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  isAvailable?: boolean;
  showPrice?: boolean;
  isPriceRange?: boolean;
  customData?: Record<string, unknown>;

  // Variants & Measurements System
  unit?: MeasurementUnit;
  measurement?: string;
  optionsLabel?: string;
  options?: (string | number)[];
  optionsText?: string;
  sizes?: (string | number)[] | string;
  sizesText?: string;
  sizesLabel?: string;
  colors?: Array<string | { name: string; hex?: string; image?: string }> | string;
  colorsText?: string;
  colorsLabel?: string;
  variants?: ProductVariant[];
  variantPrices?: Record<string, number | string>;
  minPrice?: string | number;
  maxPrice?: string | number;
  priceMin?: string | number;
  priceMax?: string | number;
  priceRange?: [number | string, number | string] | string;

  [key: string]: unknown;
}

export interface EditableProductDetailProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Field path prefix for live Fivora Visual Editing synchronization (e.g. "product").
   */
  sectionPath?: string;

  /**
   * Product data object.
   */
  product: ProductDetailItem;

  /**
   * Optional custom available sizes or options (e.g. ['S', 'M', 'L'] or ['50ml', '100ml']).
   * If omitted, resolved dynamically from the product object.
   */
  sizes?: string[];

  /**
   * Optional custom color swatches.
   * If omitted, resolved dynamically from the product object.
   */
  colors?: Array<{ name: string; hex: string; image?: string }>;

  /**
   * Callback on adding product to selection or cart.
   */
  onAddToSelection?: (product: ProductDetailItem, selectedSize?: string, selectedColor?: string) => void;

  /**
   * Optional custom WhatsApp order URL.
   */
  whatsappUrl?: string;

  className?: string;
}

/**
 * EditableProductDetail is an elite, fully calibrated Single Product View component
 * engineered for high-conversion commerce and 100% compliant with Fivora Visual Editing.
 *
 * Features:
 * - Truly Adaptive: Seamlessly renders shoes/apparel (sizes), liquids/cosmetics (ml, L),
 *   food/groceries (g, kg), single-dimension items, and simple products without variants.
 * - Multi-image gallery with active thumbnail selector and basePath resolution.
 * - Dynamic color swatches with optional color-to-image auto-switching and variant pricing.
 * - Fixed prices vs price ranges (e.g., LKR 2,500 – LKR 4,500).
 * - Floating badges with conditional rendering (zero hidden marker contract violations).
 * - Live synchronized field paths for Title, Price, Description, CTAs, and Policies.
 * - Direct WhatsApp order link with dynamic variant & option injection.
 */
export function EditableProductDetail({
  sectionPath = 'product',
  product,
  sizes,
  colors,
  onAddToSelection,
  whatsappUrl,
  className = '',
  style,
  ...props
}: EditableProductDetailProps) {
  // 1. Resolve Images: Support gallery, images array, and single image fields
  const productRecord = (product || {}) as Record<string, unknown>;
  const productPhoto = productRecord.photo as string | undefined;
  const productThumbnail = productRecord.thumbnail as string | undefined;

  const validImages = useMemo(
    () =>
      resolveCatalogImages(
        {
          ...product,
          photo: productPhoto,
          thumbnail: productThumbnail,
        },
        '/products/vanta-aero-x.jpg',
      ),
    [product, productPhoto, productThumbnail],
  );

  // 2. Resolve Options (Sizes, Volumes, Weights, Counts)
  const resolved = resolveProductOptions(product);

  const effectiveOptions: string[] = useMemo(() => {
    const hasProductOptions = Boolean(
      (product.options && product.options.length > 0) ||
      (typeof product.optionsText === 'string' && product.optionsText.trim()) ||
      (product.sizes && (Array.isArray(product.sizes) ? product.sizes.length > 0 : Boolean(product.sizes))) ||
      (typeof product.sizesText === 'string' && product.sizesText.trim()) ||
      (typeof product.measurement === 'string' && product.measurement.trim())
    );

    if (hasProductOptions) {
      return resolved.options;
    }
    if (sizes && sizes.length > 0) {
      return sizes;
    }
    return [];
  }, [product.options, product.optionsText, product.sizes, product.sizesText, product.measurement, resolved.options, sizes]);

  const effectiveOptionsLabel = resolved.optionsLabel || 'Available Options';

  // 3. Resolve Colors
  const effectiveColors: Array<{ name: string; hex?: string; image?: string }> = useMemo(() => {
    if (Array.isArray(product.colors) && product.colors.length > 0) {
      return product.colors.map((c) => {
        if (typeof c === 'string') {
          return { name: c.trim(), hex: undefined };
        }
        return c;
      });
    }

    if (typeof product.colorsText === 'string' && product.colorsText.trim()) {
      return product.colorsText
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((name) => ({ name, hex: undefined }));
    }

    if (colors && colors.length > 0) {
      return colors;
    }

    return [];
  }, [product.colors, product.colorsText, colors]);

  // Component States
  const [activeImage, setActiveImage] = useState(validImages[0] || '');
  const [selectedSize, setSelectedSize] = useState(effectiveOptions[0] || '');
  const [selectedColor, setSelectedColor] = useState(effectiveColors[0]?.name || '');
  const [activeTab, setActiveTab] = useState<'specs' | 'shipping'>('specs');
  const cart = useOptionalCart();
  const siteData = useSiteData() as Record<string, any>;
  const isFullEcommerce =
    (siteData as any)?.checkoutMode === 'FULL_ECOMMERCE' ||
    Boolean((siteData as any)?.ecommerceEnabled);

  // Keep active image in sync when product or images change
  useEffect(() => {
    if (validImages.length > 0 && !validImages.includes(activeImage)) {
      setActiveImage(validImages[0]);
    }
  }, [validImages, activeImage]);

  // Keep selected size in sync when options change
  useEffect(() => {
    if (effectiveOptions.length > 0 && (!selectedSize || !effectiveOptions.includes(selectedSize))) {
      setSelectedSize(effectiveOptions[0]);
    } else if (effectiveOptions.length === 0 && selectedSize) {
      setSelectedSize('');
    }
  }, [effectiveOptions, selectedSize]);

  // Keep selected color in sync when colors change
  useEffect(() => {
    if (effectiveColors.length > 0 && (!selectedColor || !effectiveColors.some((c) => c.name === selectedColor))) {
      setSelectedColor(effectiveColors[0]?.name || '');
    } else if (effectiveColors.length === 0 && selectedColor) {
      setSelectedColor('');
    }
  }, [effectiveColors, selectedColor]);

  // Dynamic Price & Variant Resolution
  const resolvedPrice = useMemo(
    () => resolveVariantPrice(product, selectedSize, selectedColor),
    [product, selectedSize, selectedColor]
  );

  // Sync variant image if variant has a dedicated image
  useEffect(() => {
    if (resolvedPrice.variantImage && resolvedPrice.variantImage !== activeImage) {
      setActiveImage(resolvedPrice.variantImage);
    }
  }, [resolvedPrice.variantImage, activeImage]);

  const handleSelectColor = (c: { name: string; hex?: string; image?: string }) => {
    setSelectedColor(c.name);
    if (c.image) {
      setActiveImage(c.image);
    } else {
      const v = (product.variants as any[])?.find(
        (item) =>
          String(item.color || '').trim().toLowerCase() === c.name.toLowerCase() &&
          (item.image || item.imageUrl || item.photo)
      );
      if (v) {
        setActiveImage(v.image || v.imageUrl || v.photo);
      }
    }
  };

  const name = String(product.name || product.title || (product as any).productName || (product as any).itemTitle || 'Product Title');
  const rawPriceCandidate = product.price ?? (product as any).cost ?? (product as any).amount ?? (product as any).productPrice;
  const isRange = Boolean(
    product.isPriceRange ||
    (product.minPrice !== undefined && product.maxPrice !== undefined) ||
    product.priceRange
  );

  let rangePriceString = '';
  if (isRange) {
    if (product.priceRange) {
      rangePriceString = String(product.priceRange);
    } else {
      const minNum = typeof product.minPrice === 'number' ? product.minPrice : parseFloat(String(product.minPrice || '').replace(/[^0-9.]/g, '')) || 0;
      const maxNum = typeof product.maxPrice === 'number' ? product.maxPrice : parseFloat(String(product.maxPrice || '').replace(/[^0-9.]/g, '')) || 0;
      rangePriceString = `LKR ${minNum.toLocaleString()} – LKR ${maxNum.toLocaleString()}`;
    }
  }

  const basePrice =
    rangePriceString ||
    (rawPriceCandidate !== undefined && rawPriceCandidate !== null
      ? typeof rawPriceCandidate === 'number'
        ? `LKR ${rawPriceCandidate.toLocaleString()}`
        : String(rawPriceCandidate)
      : 'LKR 0');
  const originalPrice = product.originalPrice ?? product.compareAtPrice;

  const itemShowPrice =
    product.showPrice !== undefined
      ? Boolean(product.showPrice)
      : (product.customData?.showPrice !== undefined
        ? Boolean(product.customData.showPrice)
        : true);

  const displayPrice = resolvedPrice.formattedPrice || basePrice;
  const displayOriginalPrice = resolvedPrice.formattedOriginalPrice || (originalPrice ? String(originalPrice) : undefined);

  const isAvailable = product.isAvailable !== false;
  const description = String(product.description || '');
  const badge = String(product.badge || '');
  const addToSelectionLabel = String(product.addToSelectionLabel || 'Add to Selection');
  const specsTitle = String(product.specsTitle || 'Specifications');
  const shippingTitle = String(product.shippingTitle || 'Shipping & Returns');
  const shippingSummary = String(
    product.shippingSummary || 'Free Islandwide Delivery within 2-3 business days. Cash on delivery available.'
  );
  const shippingReturns = String(
    product.shippingReturns || '14-day hassle-free exchanges for unworn items in original packaging.'
  );

  const orderSnippet = resolved.formatOrderSnippet(
    effectiveOptions.length > 0 ? selectedSize : undefined,
    effectiveColors.length > 0 ? selectedColor : undefined
  );

  const resolvedWhatsappUrl = whatsappUrl || (
    product.whatsappNumber
      ? createWhatsAppUrl(
          product.whatsappNumber,
          product.whatsappMessage || (
            itemShowPrice
              ? `Hi, I would like to order ${name}${orderSnippet ? ` ${orderSnippet}` : ''} - ${displayPrice}`
              : `Hi, I am interested in ${name}${orderSnippet ? ` ${orderSnippet}` : ''}. Could you please share the pricing, availability, and details?`
          )
        )
      : ''
  );

  // Dynamic Specs: Use explicit specs if provided, else fallback to available product metadata
  const effectiveSpecs = useMemo(() => {
    if (product.specs && product.specs.length > 0) {
      return product.specs;
    }
    const dynamic: Array<{ label: string; value: string }> = [];
    if (product.brand) dynamic.push({ label: 'Brand', value: String(product.brand) });
    if (product.category) dynamic.push({ label: 'Category', value: String(product.category) });
    if (product.unit && product.unit !== 'size') {
      dynamic.push({ label: 'Measurement Unit', value: String(product.unit).toUpperCase() });
    }
    if (product.measurement) {
      dynamic.push({ label: 'Measurement', value: String(product.measurement) });
    }
    return dynamic;
  }, [product.specs, product.brand, product.category, product.unit, product.measurement]);

  return (
    <section
      data-preview-page-key={sectionPath}
      className={`editable-product-detail max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`.trim()}
      style={style}
      {...(props as any)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Gallery Column */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails (Only rendered when more than 1 image is available) */}
          {validImages.length > 1 && (
            <div className="deneb-product-detail-gallery flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[580px] pb-2 md:pb-0 scrollbar-none">
              {validImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 bg-slate-900/40 p-2 ${
                    activeImage === img
                      ? 'border-lime-400 scale-98 shadow-md ring-2 ring-lime-400/20'
                      : 'border-slate-800/80 opacity-60 hover:opacity-100 hover:border-slate-700'
                  }`}
                >
                  <img
                    src={withBasePath(img)}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Showcase Image */}
          <div className="relative flex-1 aspect-square rounded-3xl bg-gradient-to-b from-slate-900/50 to-slate-950/80 border border-slate-800/80 p-8 flex items-center justify-center overflow-hidden group">
            {badge && (
              <span
                data-preview-field-path={`${sectionPath}.badge`}
                className="absolute top-6 left-6 z-10 px-3.5 py-1 text-xs font-black tracking-wider uppercase rounded-full bg-lime-400 text-slate-950 shadow-lg"
              >
                {badge}
              </span>
            )}

            <img
              data-preview-field-path={`${sectionPath}.featuredImage`}
              src={withBasePath(activeImage)}
              alt={name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Product Information Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1
              data-preview-field-path={`${sectionPath}.name`}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
            >
              {name}
            </h1>

            <span
              data-preview-field-path={`${sectionPath}.isAvailable`}
              className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                isAvailable
                  ? 'bg-emerald-500/15 text-emerald-300'
                  : 'bg-rose-500/15 text-rose-300'
              }`}
            >
              {isAvailable ? 'In Stock' : 'Out of Stock'}
            </span>

            {/* Price (Fixed or Range or Dynamic Variant Price) */}
            {itemShowPrice ? (
              <div className="mt-4 flex items-baseline gap-3">
                <span
                  data-preview-field-path={`${sectionPath}.price`}
                  className="text-3xl font-black text-lime-400 tracking-tight"
                >
                  {displayPrice}
                </span>
                {displayOriginalPrice && !isRange ? (
                  <span className="text-lg font-medium text-slate-500 line-through">
                    {String(displayOriginalPrice)}
                  </span>
                ) : null}
              </div>
            ) : (
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl text-sm font-bold bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  Price on Request
                </span>
              </div>
            )}

            {/* Description */}
            {description && (
              <p
                data-preview-field-path={`${sectionPath}.description`}
                className="mt-6 text-base text-slate-300 leading-relaxed"
              >
                {description}
              </p>
            )}

            {/* Color Swatches (Only rendered when product has colors) */}
            {effectiveColors.length > 0 && (
              <div className="mt-8">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Color — <span className="text-white">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-3">
                  {effectiveColors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => handleSelectColor(c)}
                      className={`w-9 h-9 rounded-full border-2 transition-all p-0.5 relative flex items-center justify-center ${
                        selectedColor === c.name
                          ? 'border-lime-400 ring-2 ring-lime-400/30 scale-105'
                          : 'border-slate-700 hover:border-slate-500'
                      }`}
                      style={{ backgroundColor: c.hex || '#334155' }}
                      title={c.name}
                      aria-label={c.name}
                    >
                      {!c.hex && (
                        <span className="text-[9px] font-bold text-white uppercase px-1 truncate">
                          {c.name.slice(0, 3)}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Options / Size / Measurement Selector (Only rendered when product has options) */}
            {effectiveOptions.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span
                    data-preview-field-path={`${sectionPath}.${product.optionsLabel ? 'optionsLabel' : 'sizesLabel'}`}
                    className="block text-xs font-bold uppercase tracking-wider text-slate-400"
                  >
                    {effectiveOptionsLabel}
                  </span>
                  <span className="text-xs font-semibold text-slate-300">
                    {resolved.formatSelectedDisplay(selectedSize)}
                  </span>
                </div>
                <div className="deneb-product-detail-sizes flex flex-wrap gap-2.5">
                  {effectiveOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`py-2.5 px-3.5 min-w-[48px] rounded-xl font-bold text-sm transition-all duration-150 text-center ${
                        selectedSize === s
                          ? 'bg-white text-slate-950 shadow-md font-extrabold scale-102 ring-2 ring-white/20'
                          : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {resolved.formatOption(s)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                disabled={!isAvailable}
                onClick={() => {
                  const itemPrice = resolvedPrice.numericPrice || parseNumericPrice(product.price);
                  if (onAddToSelection) {
                    onAddToSelection({ ...product, price: itemPrice, showPrice: itemShowPrice }, selectedSize || undefined, selectedColor || undefined);
                  } else if (cart) {
                    cart.addItem({
                      id: String(product.id || name),
                      name,
                      brand: product.brand,
                      price: itemPrice,
                      originalPrice: parseNumericPrice(product.compareAtPrice || product.originalPrice),
                      image: validImages[0] || activeImage,
                      size: selectedSize || undefined,
                      color: selectedColor || undefined,
                      quantity: 1,
                      sku: product.sku ? String(product.sku) : undefined,
                      showPrice: itemShowPrice,
                    });
                    cart.openCart();
                  }
                }}
                className="w-full py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider bg-lime-400 text-slate-950 hover:bg-lime-300 active:scale-98 transition-all duration-150 shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300 disabled:shadow-none cursor-pointer"
              >
                <span data-preview-field-path={`${sectionPath}.addToSelectionLabel`}>
                  {isAvailable ? (isFullEcommerce ? 'Add to Cart' : addToSelectionLabel) : 'Out of Stock'}
                </span>
              </button>

              {/* Direct Checkout / Buy Now Button if full ecommerce is enabled */}
              {isAvailable && isFullEcommerce && (
                <button
                  type="button"
                  onClick={() => {
                    const itemPrice = resolvedPrice.numericPrice || parseNumericPrice(product.price);
                    if (cart) {
                      cart.addItem({
                        id: String(product.id || name),
                        name,
                        brand: product.brand,
                        price: itemPrice,
                        originalPrice: parseNumericPrice(product.compareAtPrice || product.originalPrice),
                        image: validImages[0] || activeImage,
                        size: selectedSize || undefined,
                        color: selectedColor || undefined,
                        quantity: 1,
                        sku: product.sku ? String(product.sku) : undefined,
                        showPrice: itemShowPrice,
                      });
                    }
                    window.location.href = '/checkout';
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/40"
                >
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Buy Now · Proceed to Checkout</span>
                </button>
              )}

              {/* Direct WhatsApp CTA Button */}
              {isAvailable && resolvedWhatsappUrl && (
                <a
                  href={resolvedWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.201.3-.78 0.98-.956 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.635-.93-2.242-.244-.592-.493-.512-.678-.521-.175-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.718.311 1.279.497 1.716.636.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.004 2C6.48 2 2 6.48 2 12c0 1.82.49 3.52 1.34 4.99L2 22l5.14-1.35c1.42.78 3.04 1.22 4.86 1.22 5.52 0 10-4.48 10-10S17.524 2 12.004 2z" />
                  </svg>
                  <span>Order Directly via WhatsApp</span>
                </a>
              )}
            </div>

            {/* Specifications & Shipping Details */}
            <div className="mt-10 border-t border-slate-800/80 pt-6">
              <div className="flex gap-6 border-b border-slate-800 pb-3 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('specs')}
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    activeTab === 'specs' ? 'text-lime-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span data-preview-field-path={`${sectionPath}.specsTitle`}>{specsTitle}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('shipping')}
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    activeTab === 'shipping' ? 'text-lime-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span data-preview-field-path={`${sectionPath}.shippingTitle`}>{shippingTitle}</span>
                </button>
              </div>

              {activeTab === 'specs' ? (
                <div className="space-y-3">
                  {effectiveSpecs.length > 0 ? (
                    effectiveSpecs.map((spec, i) => (
                      <div key={i} className="flex justify-between text-xs py-1 border-b border-slate-900">
                        <span className="text-slate-400 font-medium">{spec.label}</span>
                        <span className="text-slate-200 font-semibold">{spec.value}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-400 space-y-2">
                      <div className="flex justify-between py-1 border-b border-slate-800/50">
                        <span>Status</span>
                        <span className="text-slate-200 font-semibold">{isAvailable ? 'Verified Authentic & In Stock' : 'Out of Stock'}</span>
                      </div>
                      {product.category && (
                        <div className="flex justify-between py-1 border-b border-slate-800/50">
                          <span>Category</span>
                          <span className="text-slate-200 font-semibold">{String(product.category)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                  <p data-preview-field-path={`${sectionPath}.shippingSummary`}>
                    {shippingSummary}
                  </p>
                  <p data-preview-field-path={`${sectionPath}.shippingReturns`} className="text-slate-400">
                    {shippingReturns}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
