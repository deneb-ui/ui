'use client';

/**
 * EditableUniversalCard — DENEB UI Framework
 *
 * Universal, multi-industry listing renderer for non-catalog entities. Fivora
 * products and services should use EditableProductCard/EditableServiceCard so
 * their backend catalog behavior is preserved:
 * - 🚗 Automotive & Equipment: Make/model, year & condition, mileage, fuel, gearbox, price
 * - 📚 Bookshops & Publishers: Cover photo, book title, author, published year, pages, price
 * - 🏋️ Gyms & Fitness: Membership tier, duration, meal plan, 24/7 access, trainer, price
 * - 🍽️ Editorial Menus: Dish photo, title, dietary tags, ingredients, prep time, price
 * - 🏠 Real Estate & Rentals: Property image, location, beds, baths, sqft, price
 * - 💼 Agency Portfolios: Offering title, duration, deliverable checklist, pricing
 *
 * Designed with strict editability architecture:
 * 1. Automatically resolves fields from `useSiteData()` via `itemPath` or explicit field paths.
 * 2. Properly manages z-index layers so title links never block clicks/hovers on inner text/specs.
 * 3. Supports grid, list, compact, and horizontal orientations.
 * 4. Extensible slots for images, badges, custom spec icons, and action buttons.
 */

import React from 'react';
import { useSiteData } from './SiteDataProvider';
import { EditableImage } from './EditableImage';
import { EditableIcon } from './EditableIcon';

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface UniversalCardSpec {
  /** Machine identifier or field key (e.g. "mileage", "author", "duration", "mealPlan") */
  key: string;
  /** Optional human-readable label shown before or above the value (e.g. "Written by", "Validity") */
  label?: string;
  /** Spec display value (e.g. "52,000 km", "Harper Lee", "12 Months", "Vegetarian") */
  value: string;
  /** Optional decorative icon or badge rendered alongside the spec (ReactNode or icon name string) */
  icon?: React.ReactNode | string;
  /** Optional icon name string (e.g. "gauge", "fuel", "settings", "dumbbell", "book", "utensils") */
  iconName?: string;
  /** Explicit custom data-preview-field-path for the icon itself */
  iconFieldPath?: string;
  /** Explicit custom data-preview-field-path override */
  fieldPath?: string;
}

export interface UniversalCardImageProps {
  src?: string;
  alt?: string;
  aspectRatio?: '16/10' | '16/9' | '4/3' | '3/4' | '1/1' | string;
  fit?: 'cover' | 'contain';
  fallbackSrc?: string;
  fieldPath?: string;
}

export interface UniversalCardCTA {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fieldPath?: string;
}

export interface UniversalCardProps {
  /**
   * Root path in site-data.json for this card item.
   * e.g. "cards.vehicles.am-1001", "cards.books.book-42", "cards.plans.gold"
   * All sub-fields inherit this prefix unless individually overridden.
   */
  itemPath?: string;

  /** Primary image configuration or image URL string */
  image?: UniversalCardImageProps | string;
  /** Slot to render a custom image component (e.g. Next Image, VehicleImage, CoverImage) */
  imageSlot?: React.ReactNode;

  /** Top floating badge label (e.g. "Available", "Bestseller", "New", "Chef's Pick") */
  badge?: string;
  badgeVariant?: 'default' | 'success' | 'warning' | 'primary' | 'muted';
  badgeSlot?: React.ReactNode;

  /** Eyebrow / Overline text (e.g. "2018 · Registered", "Science Fiction", "Tier 1") */
  overline?: string;

  /** Main entity title / heading (e.g. "Mercedes-Benz C200", "Dune", "Gold Membership") */
  title: string;
  /** Link URL for the title and card navigation */
  href?: string;

  /** Subtitle / Edition / Summary / Author text */
  subtitle?: string;

  /** Optional longer description or excerpt */
  description?: string;

  /** Dynamic key-value specifications, attributes, or feature pills */
  specs?: UniversalCardSpec[];

  /** Primary price display string (e.g. "LKR 27,500,000", "$19.99", "$49") */
  price?: string;
  /** Compare-at or original strike-through price */
  originalPrice?: string;
  /** Price label shown above the price (e.g. "Price", "Starting from", "Membership") */
  priceLabel?: string;
  /** Suffix appended after the price (e.g. "/mo", "/year", "/person") */
  priceSuffix?: string;

  /** Call-to-action button configuration */
  cta?: UniversalCardCTA;
  /** Custom slot for secondary action buttons (e.g. Save, Compare, Bookmark, Share) */
  actionsSlot?: React.ReactNode;

  /** Layout orientation */
  layout?: 'grid' | 'list' | 'compact' | 'horizontal';

  /** Outer CSS class */
  className?: string;
  /** Outer inline style */
  style?: React.CSSProperties;

  /** Extra children rendered at the bottom of the card */
  children?: React.ReactNode;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveFieldFromPath(content: unknown, fullPath: string): string | undefined {
  if (!content || typeof content !== 'object' || !fullPath) return undefined;
  const parts = fullPath.split('.');
  let curr: unknown = content;
  for (const part of parts) {
    if (curr && typeof curr === 'object' && part in (curr as Record<string, unknown>)) {
      curr = (curr as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof curr === 'string' && curr ? curr : undefined;
}

// ─── Component Implementation ─────────────────────────────────────────────────

export function EditableUniversalCard({
  itemPath,
  image,
  imageSlot,
  badge,
  badgeVariant = 'primary',
  badgeSlot,
  overline,
  title,
  href,
  subtitle,
  description,
  specs = [],
  price,
  originalPrice,
  priceLabel,
  priceSuffix,
  cta,
  actionsSlot,
  layout = 'grid',
  className = '',
  style,
  children,
}: UniversalCardProps): React.ReactElement {
  const siteData = useSiteData();
  const content = siteData?.content;

  // Resolve item-level field paths
  const fp = (subKey: string) => (itemPath ? `${itemPath}.${subKey}` : undefined);

  // Resolved dynamic values with live siteData overrides
  const resolvedOverline =
    (itemPath ? resolveFieldFromPath(content, fp('overline') || '') : undefined) ||
    (itemPath ? resolveFieldFromPath(content, fp('meta') || '') : undefined) ||
    overline;

  const resolvedTitle =
    (itemPath ? resolveFieldFromPath(content, fp('title') || '') : undefined) ||
    (itemPath ? resolveFieldFromPath(content, fp('name') || '') : undefined) ||
    title;

  const resolvedSubtitle =
    (itemPath ? resolveFieldFromPath(content, fp('subtitle') || '') : undefined) ||
    (itemPath ? resolveFieldFromPath(content, fp('details') || '') : undefined) ||
    (itemPath ? resolveFieldFromPath(content, fp('author') || '') : undefined) ||
    subtitle;

  const resolvedDescription =
    (itemPath ? resolveFieldFromPath(content, fp('description') || '') : undefined) ||
    (itemPath ? resolveFieldFromPath(content, fp('summary') || '') : undefined) ||
    description;

  const resolvedBadge =
    (itemPath ? resolveFieldFromPath(content, fp('badge') || '') : undefined) ||
    (itemPath ? resolveFieldFromPath(content, fp('status') || '') : undefined) ||
    badge;

  const resolvedPrice =
    (itemPath ? resolveFieldFromPath(content, fp('price') || '') : undefined) ||
    price;

  const resolvedOriginalPrice =
    (itemPath ? resolveFieldFromPath(content, fp('originalPrice') || '') : undefined) ||
    originalPrice;

  const resolvedPriceLabel =
    (itemPath ? resolveFieldFromPath(content, fp('priceLabel') || '') : undefined) ||
    priceLabel;

  // Image source normalization
  const imageObj: UniversalCardImageProps =
    typeof image === 'string'
      ? { src: image }
      : image || {};

  const isList = layout === 'list' || layout === 'horizontal';

  // Badge variant styling
  const badgeStyles: Record<string, React.CSSProperties> = {
    default: { backgroundColor: 'var(--tag-bg, rgba(255,255,255,0.9))', color: 'var(--text-color, #0f172a)' },
    primary: { backgroundColor: 'var(--brand-accent, #0284c7)', color: '#ffffff' },
    success: { backgroundColor: '#10b981', color: '#ffffff' },
    warning: { backgroundColor: '#f59e0b', color: '#0f172a' },
    muted: { backgroundColor: 'rgba(100, 116, 139, 0.85)', color: '#ffffff' },
  };

  return (
    <article
      data-preview-item-path={itemPath}
      className={`deneb-universal-card ${className}`}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: isList ? 'row' : 'column',
        borderRadius: 'var(--card-radius, 0.75rem)',
        border: '1px solid var(--card-border, rgba(226, 232, 240, 0.8))',
        backgroundColor: 'var(--card-bg, #ffffff)',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        ...style,
      }}
    >
      {/* ── Media / Image Container ── */}
      {(imageSlot || imageObj.src) && (
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            overflow: 'hidden',
            width: isList ? '40%' : '100%',
            flexShrink: 0,
          }}
        >
          {imageSlot ? (
            imageSlot
          ) : imageObj.src ? (
            <EditableImage
              id={imageObj.fieldPath || fp('image') || fp('imageUrl') || 'image'}
              data-preview-field-path={imageObj.fieldPath || fp('image') || fp('imageUrl')}
              src={imageObj.src}
              alt={imageObj.alt || resolvedTitle}
              fallbackSrc={imageObj.fallbackSrc}
              aspectRatio={imageObj.aspectRatio || (isList ? '1/1' : '16/10')}
              fit={imageObj.fit || 'cover'}
              hoverZoom
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          ) : null}

          {/* Floating Badge (with pointer-events-auto so it can be directly clicked & edited) */}
          {(badgeSlot || resolvedBadge) && (
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                zIndex: 20,
                pointerEvents: 'auto',
              }}
            >
              {badgeSlot ? (
                badgeSlot
              ) : (
                <span
                  data-preview-field-path={fp('badge')}
                  data-preview-style-target={fp('badge')}
                  data-preview-style-type="text"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.25rem 0.625rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    borderRadius: '9999px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                    backdropFilter: 'blur(4px)',
                    ...badgeStyles[badgeVariant],
                  }}
                >
                  {resolvedBadge}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── Card Body Wrap ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          padding: '1.25rem',
          gap: '0.875rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {/* Overline / Eyebrow (Year · Condition / Category / Genre) */}
          {resolvedOverline && (
            <p
              style={{
                position: 'relative',
                zIndex: 10,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--muted-text, #64748b)',
                margin: 0,
              }}
              data-preview-field-path={fp('overline') || fp('meta')}
              data-preview-style-target={fp('overline') || fp('meta')}
              data-preview-style-type="text"
            >
              {resolvedOverline}
            </p>
          )}

          {/* Main Title / Heading */}
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: 'var(--heading-color, #0f172a)',
              margin: 0,
            }}
          >
            {href ? (
              <a
                href={href}
                data-preview-field-path={fp('title') || fp('name')}
                data-preview-style-target={fp('title') || fp('name')}
                data-preview-style-type="text"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  outline: 'none',
                }}
              >
                {resolvedTitle}
              </a>
            ) : (
              <span
                data-preview-field-path={fp('title') || fp('name')}
                data-preview-style-target={fp('title') || fp('name')}
                data-preview-style-type="text"
              >
                {resolvedTitle}
              </span>
            )}
          </h3>

          {/* Subtitle / Trim / Author */}
          {resolvedSubtitle && (
            <p
              style={{
                position: 'relative',
                zIndex: 10,
                fontSize: '0.875rem',
                color: 'var(--muted-text, #64748b)',
                margin: 0,
              }}
              data-preview-field-path={fp('subtitle') || fp('details')}
              data-preview-style-target={fp('subtitle') || fp('details')}
              data-preview-style-type="text"
            >
              {resolvedSubtitle}
            </p>
          )}

          {/* Description Excerpt */}
          {resolvedDescription && (
            <p
              style={{
                position: 'relative',
                zIndex: 10,
                fontSize: '0.825rem',
                lineHeight: 1.5,
                color: 'var(--body-text, #334155)',
                margin: '0.25rem 0 0 0',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              data-preview-field-path={fp('description') || fp('summary')}
              data-preview-style-target={fp('description') || fp('summary')}
              data-preview-style-type="text"
            >
              {resolvedDescription}
            </p>
          )}
        </div>

        {/* ── Dynamic Specifications / Key-Value Attributes Grid ── */}
        {specs.length > 0 && (
          <ul
            aria-label="Attributes"
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem 1rem',
              listStyle: 'none',
              padding: 0,
              margin: '0.25rem 0',
            }}
          >
            {specs.map((spec) => {
              const specField = spec.fieldPath || (itemPath ? `${itemPath}.specs.${spec.key}` : spec.key);
              const dynamicVal =
                itemPath
                  ? resolveFieldFromPath(content, specField) ||
                    resolveFieldFromPath(content, `${itemPath}.${spec.key}`) ||
                    spec.value
                  : spec.value;

              return (
                <li
                  key={spec.key}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.825rem',
                    color: 'var(--muted-text, #64748b)',
                  }}
                  data-preview-field-path={specField}
                  data-preview-style-target={specField}
                  data-preview-style-type="text"
                >
                  {spec.icon && (
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                      {typeof spec.icon === 'string' ? (
                        <EditableIcon
                          name={spec.icon}
                          fieldPath={spec.iconFieldPath || (itemPath ? `${itemPath}.specs.${spec.key}.icon` : undefined)}
                          size={14}
                        />
                      ) : (
                        spec.icon
                      )}
                    </span>
                  )}
                  {!spec.icon && spec.iconName && (
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <EditableIcon
                        name={spec.iconName}
                        fieldPath={spec.iconFieldPath || (itemPath ? `${itemPath}.specs.${spec.key}.icon` : undefined)}
                        size={14}
                      />
                    </span>
                  )}
                  {spec.label && <span style={{ fontWeight: 500 }}>{spec.label}:</span>}
                  <span style={{ fontWeight: 600, color: 'var(--body-text, #1e293b)' }}>{dynamicVal}</span>
                </li>
              );
            })}
          </ul>
        )}

        {/* ── Price and Action Section ── */}
        {(resolvedPrice || cta || actionsSlot) && (
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              marginTop: 'auto',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--card-border, rgba(226, 232, 240, 0.7))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Price Column */}
            {resolvedPrice && (
              <div>
                {resolvedPriceLabel && (
                  <p
                    data-preview-field-path={fp('priceLabel')}
                    data-preview-style-target={fp('priceLabel')}
                    data-preview-style-type="text"
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--muted-text, #64748b)',
                      margin: 0,
                    }}
                  >
                    {resolvedPriceLabel}
                  </p>
                )}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span
                    data-preview-field-path={fp('price')}
                    data-preview-style-target={fp('price')}
                    data-preview-style-type="text"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--price-color, var(--heading-color, #0f172a))',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {resolvedPrice}
                  </span>
                  {resolvedOriginalPrice && (
                    <span
                      data-preview-field-path={fp('originalPrice')}
                      data-preview-style-target={fp('originalPrice')}
                      data-preview-style-type="text"
                      style={{
                        fontSize: '0.825rem',
                        textDecoration: 'line-through',
                        color: 'var(--muted-text, #94a3b8)',
                      }}
                    >
                      {resolvedOriginalPrice}
                    </span>
                  )}
                  {priceSuffix && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-text, #64748b)' }}>
                      {priceSuffix}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Actions Wrap */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
              {actionsSlot}

              {cta && (
                cta.href ? (
                  <a
                    href={cta.href}
                    data-preview-field-path={cta.fieldPath || fp('ctaText') || fp('ctaLabel')}
                    data-preview-style-target={cta.fieldPath || fp('ctaText') || fp('ctaLabel')}
                    data-preview-style-type="text"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.45rem 0.875rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      borderRadius: 'var(--button-radius, 0.5rem)',
                      backgroundColor: 'var(--brand-accent, #0284c7)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'opacity 0.15s ease',
                    }}
                  >
                    {cta.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={cta.onClick}
                    data-preview-field-path={cta.fieldPath || fp('ctaText') || fp('ctaLabel')}
                    data-preview-style-target={cta.fieldPath || fp('ctaText') || fp('ctaLabel')}
                    data-preview-style-type="text"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.45rem 0.875rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      borderRadius: 'var(--button-radius, 0.5rem)',
                      backgroundColor: 'var(--brand-accent, #0284c7)',
                      color: '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'opacity 0.15s ease',
                    }}
                  >
                    {cta.label}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {children}
      </div>
    </article>
  );
}

// ─── Export Aliases ───────────────────────────────────────────────────────────

export {
  EditableUniversalCard as UniversalCard,
  EditableUniversalCard as EditableListingCard,
  EditableUniversalCard as ListingCard,
  EditableUniversalCard as EditableEntityCard,
  EditableUniversalCard as EntityCard,
};
