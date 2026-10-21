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
  badge?: string;
  tag?: string;
  isActive?: boolean;
  active?: boolean;
  isAvailable?: boolean;
  available?: boolean;
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
   * Whether to show active/inactive status badge (default: true).
   */
  showStatusBadge?: boolean;
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
  showStatusBadge = true,
  currency: currencyOverride,
  className = '',
  style,
  children,
  ...props
}: EditableServiceCardProps) {
  const isServiceActive =
    service?.isActive !== false &&
    service?.active !== false &&
    service?.isAvailable !== false &&
    service?.available !== false;
  const badgeCandidate = service?.badge || service?.tag;

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

  const rawCompareCandidate = service?.compareAtPrice || service?.originalPrice;
  const hasComparePrice =
    effectiveShowPrice &&
    rawCompareCandidate !== undefined &&
    rawCompareCandidate !== null &&
    String(rawCompareCandidate).trim() !== '' &&
    Number(rawCompareCandidate) > Number(rawPriceCandidate);

  const formattedComparePrice = hasComparePrice
    ? typeof rawCompareCandidate === 'number'
      ? currency + ' ' + rawCompareCandidate.toLocaleString()
      : String(rawCompareCandidate).match(/^[A-Z]{3}\s/) || String(rawCompareCandidate).includes(currency)
        ? String(rawCompareCandidate)
        : currency + ' ' + String(rawCompareCandidate)
    : '';

  const serviceImages = resolveCatalogImages(service);
  const imageUrl = serviceImages[0] || '';
  const features = Array.isArray(service?.features) ? service.features : [];

  const mergedStyle: React.CSSProperties = {
    textAlign: align,
    opacity: !isServiceActive ? 0.72 : 1,
    ...style,
  };

  const badgeElement = (badgeCandidate || (!isServiceActive && showStatusBadge)) ? (
    <div
      className="service-card-badge-wrap"
      style={{
        position: 'absolute',
        top: '0.75rem',
        left: '0.75rem',
        zIndex: 3,
        display: 'flex',
        gap: '0.375rem',
        pointerEvents: 'none',
      }}
    >
      {!isServiceActive && showStatusBadge ? (
        <span
          className="service-card-status-badge inactive"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
            fontSize: '0.6875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: 'rgba(239, 68, 68, 0.95)',
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'currentColor' }} />
          Unavailable
        </span>
      ) : badgeCandidate ? (
        <EditableText
          as="span"
          id={`${itemPath}.badge`}
          data-preview-field-path={`${itemPath}.badge`}
          defaultValue={String(badgeCandidate)}
          className="service-card-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
            fontSize: '0.6875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: 'var(--brand-color, #2563eb)',
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
            pointerEvents: 'auto',
          }}
        />
      ) : null}
    </div>
  ) : null;

  return (
    <Component
      data-preview-item-path={itemPath}
      className={`editable-service-card ${!isServiceActive ? 'is-inactive is-unavailable' : ''} ${className}`.trim()}
      style={mergedStyle}
      {...(props as any)}
    >
      {(imageUrl || service?.imageUrl !== undefined || service?.image !== undefined) ? (
        <div className="service-card-image-wrap" style={{ position: 'relative' }}>
          {badgeElement}
          <EditableImage
            id={`${itemPath}.imageUrl`}
            data-preview-field-path={`${itemPath}.imageUrl`}
            src={imageUrl}
            fallbackSrc={imageFallback}
            alt={name}
            className="service-card-image"
          />
        </div>
      ) : badgeElement ? (
        <div style={{ position: 'relative', width: '100%', height: '1.75rem', marginBottom: '0.5rem' }}>
          {badgeElement}
        </div>
      ) : null}

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
          <div className="service-card-price-wrap" style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
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
            {hasComparePrice && (
              <span
                className="service-card-compare-price"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--muted-text, #94a3b8)',
                  textDecoration: 'line-through',
                }}
              >
                {formattedComparePrice}
              </span>
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
        ) : (!effectiveShowPrice || (!hasRawPrice && !priceLabel)) ? (
          <div className="service-card-price-wrap" style={{ margin: '0.5rem 0' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--muted-text, #94a3b8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                letterSpacing: '0.01em',
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
