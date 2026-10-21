import React, { useState, useEffect } from 'react';
import { withBasePath } from './utils';
import { platformProductDetailHref } from './PlatformProductDetail';
import { resolveCatalogImages } from './utils/catalogMedia';

export interface ProductQuickViewItem {
  id: string;
  title: string;
  price: string | number;
  originalPrice?: string | number;
  currency?: string;
  badge?: string;
  description?: string;
  imageUrl?: string;
  gallery?: string[];
  images?: string[];
  additionalImages?: string[];
  inStock?: boolean;
  isAvailable?: boolean;
  rating?: number;
  reviewCount?: number;
  href?: string;
  detailHref?: string;
  [key: string]: unknown;
}

export interface ProductQuickViewProps {
  product: ProductQuickViewItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: ProductQuickViewItem, quantity: number) => void;
  className?: string;
  /**
   * Field path prefix for live visual editing synchronization in Fivora Lab.
   * e.g. "home.product1" or "product"
   */
  itemPath?: string;
  addToCartLabel?: string;
  showDetailLink?: boolean;
  detailLinkText?: string;
}

/**
 * DENEB UI — Product Quick View Modal
 * 
 * High-converting instant lightbox inspection modal for products.
 * Enables shoppers to inspect details and buy without leaving page flow.
 * Fully synchronized with Fivora Visual Editing contract.
 * 
 * Created by Chamika Gayashan & Induranga Kawishwara
 */
export function ProductQuickView({
  product,
  isOpen,
  onClose,
  onAddToCart,
  className = '',
  itemPath,
  addToCartLabel = 'Add to Selection',
  showDetailLink = true,
  detailLinkText = 'View full product details',
}: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedImage(resolveCatalogImages(product)[0] || '');
    }
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  const images = resolveCatalogImages(product);
  const currency = product.currency || '$';
  const isAvailable = product.isAvailable !== false && product.inStock !== false;

  const handleAddToCart = () => {
    if (!isAvailable) return;
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${className}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/80 hover:bg-white rounded-full shadow-sm backdrop-blur transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Media Column */}
        <div className="md:w-1/2 p-6 flex flex-col items-center justify-center bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center">
            {product.badge && (
              <span
                {...(itemPath ? { 'data-preview-field-path': `${itemPath}.badge` } : {})}
                className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white bg-red-500 rounded-lg shadow-sm"
              >
                {product.badge}
              </span>
            )}
            {selectedImage ? (
              <img
                {...(itemPath ? { 'data-preview-field-path': `${itemPath}.image` } : {})}
                src={withBasePath(selectedImage)}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-slate-300 text-sm">No image available</div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === img ? 'border-primary shadow-sm' : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={withBasePath(img)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Column */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                isAvailable ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
              }`}>
                {isAvailable ? 'In Stock' : 'Out of Stock'}
              </span>
              {product.rating && (
                <span className="text-xs text-amber-500 flex items-center gap-1 font-medium">
                  ★ {product.rating} {product.reviewCount ? `(${product.reviewCount})` : ''}
                </span>
              )}
            </div>

            <h3
              {...(itemPath ? { 'data-preview-field-path': `${itemPath}.name` } : {})}
              className="text-xl font-bold text-slate-900 leading-tight"
            >
              {product.title}
            </h3>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-2">
              <span
                {...(itemPath ? { 'data-preview-field-path': `${itemPath}.price` } : {})}
                className="text-2xl font-black text-slate-900"
              >
                {currency}{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-semibold text-slate-400 line-through">
                  {currency}{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p
                {...(itemPath ? { 'data-preview-field-path': `${itemPath}.description` } : {})}
                className="mt-4 text-sm text-slate-600 leading-relaxed"
              >
                {product.description}
              </p>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-700">Quantity</span>
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 font-bold transition-colors"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-slate-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              type="button"
              disabled={!isAvailable}
              onClick={handleAddToCart}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-lg transition-all duration-200 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 flex items-center justify-center gap-2"
              style={{
                backgroundColor: 'var(--color-primary, #0f172a)',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)',
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span {...(itemPath ? { 'data-preview-field-path': `${itemPath}.addToSelectionLabel` } : {})}>
                {isAvailable ? addToCartLabel : 'Out of Stock'}
              </span>
            </button>

            {showDetailLink && (
              <div className="mt-3 text-center">
                <a
                  href={(product as any).href || (product as any).detailHref || platformProductDetailHref(product.id)}
                  data-preview-static="Open the stable live product detail page"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  <span>{detailLinkText}</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
