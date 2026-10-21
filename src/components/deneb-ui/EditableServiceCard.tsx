import React from 'react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { resolveCatalogImages } from './utils/catalogMedia';
import { useCurrency } from './SiteDataProvider';

export interface ServiceItem {
  id?: string | number;
  name?: string;
  title?: string;
  price?: string | number;
  cost?: string | number;
  amount?: string | number;
  rate?: string | number;
  serviceFee?: string | number;
  servicePrice?: string | number;
  compareAtPrice?: string | number;
  originalPrice?: string | number;
  priceLabel?: string;
  showPrice?: boolean;
  currency?: string;
  customData?: Record<string, unknown>;
  description?: string;
  imageUrl?: string;
  image?: string;
  gallery?: string[];
  images?: string[];
  additionalImages?: string[];
  features?: unknown[];
  [key: string]: unknown;
}

export interface EditableServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The item path, e.g. "services[0]".
   */
  itemPath: string;

  /**
   * The service data object.
   */
  service: ServiceItem;

  /**
   * Fallback image URL if image is missing.
   */
  imageFallback?: string;

  /**
   * HTML wrapper tag (default: 'article').
   */
  as?: React.ElementType;

  /**
   * Text/content alignment for the card ('left' | 'center' | 'right').
   */
  align?: 'left' | 'center' | 'right';
  showPrice?: boolean;
  /**
   * Currency code override (e.g. "LKR", "USD"). If omitted, auto-resolves from live shop profile.
   */
  currency?: string;
}

/**
 * EditableServiceCard standardizes service presentation across Home and Services pages.
 * Supports service name, description, image, and repeatable features checklist.
 */
export function EditableServiceCard({
  itemPath,
  service,
  imageFallback = '/placeholder.svg',
  as: Component = 'article',
  align = 'left',
  showPrice = true,
  currency: currencyOverride,
  className = '',
  style,
  children,
  ...props
}: EditableServiceCardProps) {
  const name = String(service?.name || service?.title || '');
  const description = String(service?.description || '');
  const itemShowPrice =
    service.showPrice !== undefined
      ? Boolean(service.showPrice)
      : (service.customData?.showPrice !== undefined
        ? Boolean(service.customData.showPrice)
        : true);
  const effectiveShowPrice = showPrice && itemShowPrice;

  const rawPriceCandidate = service?.price;
  const hasRawPrice = rawPriceCandidate !== undefined && rawPriceCandidate !== null && String(rawPriceCandidate).trim() !== '';
  const priceLabel = service?.priceLabel ? String(service.priceLabel) : '';
  const hasPrice = effectiveShowPrice && (hasRawPrice || Boolean(priceLabel));

  const liveCurrency = useCurrency();
  const currency = currencyOverride || service?.currency as string || liveCurrency;

  const formattedPrice = hasRawPrice
    ? typeof rawPriceCandidate === 'number'
      ? currency + ' ' + rawPriceCandidate.toLocaleString()
      : String(rawPriceCandidate).match(/^[A-Z]{3}\s/) || String(rawPriceCandidate).includes(currency)
        ? String(rawPriceCandidate)
        : currency + ' ' + String(rawPriceCandidate)
    : '';

  const serviceImages = resolveCatalogImages(service);
  const imageUrl = serviceImages[0] || '';
  const features = Array.isArray(service?.features) ? service.features : [];

  const mergedStyle: React.CSSProperties = {
    textAlign: align,
    ...style,
  };

  return (
    <Component
      data-preview-item-path={itemPath}
      className={`editable-service-card ${className}`.trim()}
      style={mergedStyle}
      {...(props as any)}
    >
      {(imageUrl || service?.imageUrl !== undefined || service?.image !== undefined) && (
        <div className="service-card-image-wrap">
          <EditableImage
            id={`${itemPath}.imageUrl`}
            data-preview-field-path={`${itemPath}.imageUrl`}
            src={imageUrl}
            fallbackSrc={imageFallback}
            alt={name}
            className="service-card-image"
          />
        </div>
      )}

      <div className="service-card-body">
        <EditableText
          as="h2"
          id={`${itemPath}.name`}
          data-preview-field-path={`${itemPath}.name`}
          defaultValue={name}
          className="service-card-title"
        />

        <EditableText
          as="p"
          id={`${itemPath}.description`}
          data-preview-field-path={`${itemPath}.description`}
          defaultValue={description}
          className="service-card-description"
        />

        {hasPrice ? (
          <div className="service-card-price-wrap" style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'baseline', gap: '0.375rem', flexWrap: 'wrap' }}>
            {hasRawPrice && (
              <EditableText
                as="span"
                id={`${itemPath}.price`}
                data-preview-field-path={`${itemPath}.price`}
                defaultValue={formattedPrice}
                className="service-card-price"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--brand-color, #2563eb)',
                }}
              />
            )}
            {priceLabel && (
              <EditableText
                as="span"
                id={`${itemPath}.priceLabel`}
                data-preview-field-path={`${itemPath}.priceLabel`}
                defaultValue={priceLabel}
                className="service-card-price-label"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--muted-text, #94a3b8)',
                }}
              />
            )}
          </div>
        ) : !effectiveShowPrice ? (
          <div className="service-card-price-wrap" style={{ margin: '0.5rem 0' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--muted-text, #94a3b8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              Quote on Request
            </span>
          </div>
        ) : null}

        {(features.length > 0 || Array.isArray(service?.features)) && (
          <ul
            data-preview-list-path={`${itemPath}.features`}
            className="service-card-features"
          >
            {features.map((feature, featureIndex) => {
              const featureText =
                typeof feature === 'string'
                  ? feature
                  : typeof (feature as any)?.title === 'string'
                  ? (feature as any).title
                  : String(feature ?? '');

              return (
                <li
                  key={featureIndex}
                  data-preview-item-path={`${itemPath}.features[${featureIndex}]`}
                >
                  <EditableText
                    id={`${itemPath}.features[${featureIndex}]`}
                    data-preview-field-path={`${itemPath}.features[${featureIndex}]`}
                    defaultValue={featureText}
                  />
                </li>
              );
            })}
          </ul>
        )}

        {children}
      </div>
    </Component>
  );
}
