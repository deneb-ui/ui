export interface CatalogMediaItem {
  featuredImage?: unknown;
  imageUrl?: unknown;
  image?: unknown;
  photo?: unknown;
  thumbnail?: unknown;
  productImage?: unknown;
  gallery?: unknown;
  images?: unknown;
  additionalImages?: unknown;
  [key: string]: unknown;
}

function appendImage(
  images: string[],
  seen: Set<string>,
  candidate: unknown,
): void {
  if (typeof candidate !== 'string') return;
  const normalized = candidate.trim();
  if (!normalized || seen.has(normalized)) return;
  seen.add(normalized);
  images.push(normalized);
}

function appendImageList(
  images: string[],
  seen: Set<string>,
  candidate: unknown,
): void {
  if (!Array.isArray(candidate)) return;
  candidate.forEach((value) => appendImage(images, seen, value));
}

/**
 * Resolves Fivora's catalog media contract while retaining legacy template
 * aliases. The primary image stays first and duplicate URLs are removed.
 */
export function resolveCatalogImages(
  item?: CatalogMediaItem | null,
  fallbackImage?: string,
): string[] {
  const images: string[] = [];
  const seen = new Set<string>();
  const source = item || {};

  appendImage(images, seen, source.featuredImage);
  appendImage(images, seen, source.imageUrl);
  appendImage(images, seen, source.image);
  appendImage(images, seen, source.photo);
  appendImage(images, seen, source.thumbnail);
  appendImage(images, seen, source.productImage);
  appendImageList(images, seen, source.gallery);
  appendImageList(images, seen, source.images);
  appendImageList(images, seen, source.additionalImages);
  if (images.length === 0) {
    appendImage(images, seen, fallbackImage);
  }

  return images;
}

export function resolveCatalogPrimaryImage(
  item?: CatalogMediaItem | null,
  fallbackImage?: string,
): string {
  return resolveCatalogImages(item, fallbackImage)[0] || '';
}
