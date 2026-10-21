'use client';

/**
 * EditableIcon — DENEB UI Framework
 *
 * Universal, developer-friendly editable vector icon component for all templates
 * (Automotive, Gym, Restaurant, Bookshop, Real Estate, E-Commerce, etc.).
 *
 * Core capabilities:
 * 1. Dynamic name-to-SVG resolution for 40+ standard business glyphs (speedometer, fuel,
 *    transmission, scale/compare, heart/saved, whatsapp, calculator, check, dumbbell, etc.).
 * 2. Visual Editor Integration: When `fieldPath` is provided, attaches `data-preview-field-path`,
 *    `data-preview-control="icon-picker"`, and `data-preview-icon={name}` so Deneb Studio opens
 *    the Icon Picker modal.
 * 3. Supports Lucide kebab-case ("file-check-2"), camelCase ("fileCheck2"), and PascalCase ("FileCheck2").
 * 4. Extensible via `iconMap` or `customIcon` slot for template-specific graphics.
 * 5. Zero-dependency: Renders crisp, scalable SVGs directly with zero layout shift.
 *
 * Created by Chamika Gayashan & Induranga Kawishwara
 */

import React from 'react';
import { useSiteData } from './SiteDataProvider';

export interface EditableIconProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * The name of the icon (e.g. "gauge", "fuel", "settings", "scale", "heart", "whatsapp",
   * "calculator", "file-check", "dumbbell", "book", "utensils", "clock", "pin", "user").
   */
  name?: string;
  /**
   * Field path in site-data.json (e.g. "cards.vehicles[0].specs.mileage.icon" or "home.benefits[0].icon").
   * When supplied, marks this element as an editable icon in Deneb Studio.
   */
  fieldPath?: string;
  /**
   * Size of the icon in pixels (number) or CSS string (e.g. 16, 20, 24, "1rem", "1.25rem").
   * Defaults to 16.
   */
  size?: number | string;
  /**
   * Stroke width for outline icons. Defaults to 2.
   */
  strokeWidth?: number | string;
  /**
   * Optional custom icon node to render instead of built-in glyphs.
   */
  customIcon?: React.ReactNode;
  /**
   * Fallback icon name if the given name is not found in the icon dictionary. Defaults to 'circle'.
   */
  fallback?: string;
  /**
   * Optional title for accessibility / tooltip.
   */
  title?: string;
  /**
   * Dictionary of custom SVG paths or renderers to merge with standard icons.
   */
  iconMap?: Record<string, React.ReactNode>;
  /**
   * Additional CSS class name.
   */
  className?: string;
  /**
   * Inline styles.
   */
  style?: React.CSSProperties;
}

// ── Built-in SVG Glyphs (Lucide-compatible 24x24 viewBox) ──────────────────────

type IconSvgRenderer = (props: { strokeWidth: number | string }) => React.ReactNode;

const BUILTIN_ICONS: Record<string, IconSvgRenderer> = {
  // Vehicle & Specs
  gauge: ({ strokeWidth }) => (
    <>
      <path d="m12 14 4-4" strokeWidth={strokeWidth} />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" strokeWidth={strokeWidth} />
    </>
  ),
  fuel: ({ strokeWidth }) => (
    <>
      <line x1="3" x2="15" y1="22" y2="22" strokeWidth={strokeWidth} />
      <line x1="4" x2="14" y1="9" y2="9" strokeWidth={strokeWidth} />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" strokeWidth={strokeWidth} />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" strokeWidth={strokeWidth} />
    </>
  ),
  settings: ({ strokeWidth }) => (
    <>
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="12" r="3" strokeWidth={strokeWidth} />
    </>
  ),

  // Action, Social & Utility
  scale: ({ strokeWidth }) => (
    <>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" strokeWidth={strokeWidth} />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" strokeWidth={strokeWidth} />
      <path d="M7 21h10" strokeWidth={strokeWidth} />
      <path d="M12 3v18" strokeWidth={strokeWidth} />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" strokeWidth={strokeWidth} />
    </>
  ),
  whatsapp: ({ strokeWidth }) => (
    <>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" strokeWidth={strokeWidth} />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" strokeWidth={strokeWidth} />
    </>
  ),
  heart: ({ strokeWidth }) => (
    <path
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      strokeWidth={strokeWidth}
    />
  ),
  calculator: ({ strokeWidth }) => (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" strokeWidth={strokeWidth} />
      <line x1="8" x2="16" y1="6" y2="6" strokeWidth={strokeWidth} />
      <line x1="16" x2="16" y1="14" y2="18" strokeWidth={strokeWidth} />
      <path d="M16 10h.01" strokeWidth={strokeWidth} />
      <path d="M12 10h.01" strokeWidth={strokeWidth} />
      <path d="M8 10h.01" strokeWidth={strokeWidth} />
      <path d="M12 14h.01" strokeWidth={strokeWidth} />
      <path d="M8 14h.01" strokeWidth={strokeWidth} />
      <path d="M12 18h.01" strokeWidth={strokeWidth} />
      <path d="M8 18h.01" strokeWidth={strokeWidth} />
    </>
  ),
  'file-check': ({ strokeWidth }) => (
    <>
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" strokeWidth={strokeWidth} />
      <polyline points="14 2 14 8 20 8" strokeWidth={strokeWidth} />
      <path d="m3 15 2 2 4-4" strokeWidth={strokeWidth} />
    </>
  ),
  'file-check-2': ({ strokeWidth }) => (
    <>
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" strokeWidth={strokeWidth} />
      <polyline points="14 2 14 8 20 8" strokeWidth={strokeWidth} />
      <path d="m3 15 2 2 4-4" strokeWidth={strokeWidth} />
    </>
  ),
  'message-circle': ({ strokeWidth }) => (
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" strokeWidth={strokeWidth} />
  ),
  'message-square': ({ strokeWidth }) => (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth={strokeWidth} />
  ),
  'search-check': ({ strokeWidth }) => (
    <>
      <circle cx="11" cy="11" r="8" strokeWidth={strokeWidth} />
      <path d="m21 21-4.3-4.3" strokeWidth={strokeWidth} />
      <path d="m8 11 2 2 4-4" strokeWidth={strokeWidth} />
    </>
  ),
  search: ({ strokeWidth }) => (
    <>
      <circle cx="11" cy="11" r="8" strokeWidth={strokeWidth} />
      <path d="m21 21-4.3-4.3" strokeWidth={strokeWidth} />
    </>
  ),

  // Fitness / Gym
  dumbbell: ({ strokeWidth }) => (
    <>
      <path d="m6.5 6.5 11 11" strokeWidth={strokeWidth} />
      <path d="m21 21-1-1" strokeWidth={strokeWidth} />
      <path d="m3 3 1 1" strokeWidth={strokeWidth} />
      <path d="m18 22 4-4" strokeWidth={strokeWidth} />
      <path d="m2 6 4-4" strokeWidth={strokeWidth} />
      <path d="m3 10 7-7" strokeWidth={strokeWidth} />
      <path d="m14 21 7-7" strokeWidth={strokeWidth} />
    </>
  ),
  'heart-pulse': ({ strokeWidth }) => (
    <>
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        strokeWidth={strokeWidth}
      />
      <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h4.78" strokeWidth={strokeWidth} />
    </>
  ),
  timer: ({ strokeWidth }) => (
    <>
      <line x1="10" x2="14" y1="2" y2="2" strokeWidth={strokeWidth} />
      <line x1="12" x2="15" y1="14" y2="11" strokeWidth={strokeWidth} />
      <circle cx="12" cy="14" r="8" strokeWidth={strokeWidth} />
    </>
  ),

  // Bookshop / Education
  book: ({ strokeWidth }) => (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth={strokeWidth} />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth={strokeWidth} />
    </>
  ),
  'book-open': ({ strokeWidth }) => (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth={strokeWidth} />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth={strokeWidth} />
    </>
  ),
  'pen-tool': ({ strokeWidth }) => (
    <>
      <path d="m12 19 7-7 3 3-7 7-3-3z" strokeWidth={strokeWidth} />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeWidth={strokeWidth} />
      <path d="m2 2 7.586 7.586" strokeWidth={strokeWidth} />
      <circle cx="11" cy="11" r="2" strokeWidth={strokeWidth} />
    </>
  ),

  // Restaurant / Food
  utensils: ({ strokeWidth }) => (
    <>
      <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" strokeWidth={strokeWidth} />
      <path d="M15 11v11" strokeWidth={strokeWidth} />
      <path d="M5 2v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2" strokeWidth={strokeWidth} />
      <path d="M7 2v5" strokeWidth={strokeWidth} />
      <path d="M21 15V2a5 5 0 0 0-5 5v3a2 2 0 0 0 2 2h3Z" strokeWidth={strokeWidth} />
    </>
  ),
  coffee: ({ strokeWidth }) => (
    <>
      <path d="M10 2v2" strokeWidth={strokeWidth} />
      <path d="M14 2v2" strokeWidth={strokeWidth} />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z" strokeWidth={strokeWidth} />
      <path d="M6 2v2" strokeWidth={strokeWidth} />
    </>
  ),

  // Florist / Botanical / Eco
  flower: ({ strokeWidth }) => (
    <>
      <circle cx="12" cy="12" r="3" strokeWidth={strokeWidth} />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" strokeWidth={strokeWidth} />
      <path d="M8 12H4" strokeWidth={strokeWidth} />
      <path d="M12 8V4" strokeWidth={strokeWidth} />
      <path d="M16 12h4" strokeWidth={strokeWidth} />
      <path d="M12 16v4" strokeWidth={strokeWidth} />
    </>
  ),
  'flower-2': ({ strokeWidth }) => (
    <>
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1m3 2a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3h-1m-2 3a3 3 0 1 1-3 3m3-3a3 3 0 1 0-3-3m3 3v-1m-3-2a3 3 0 1 1-3-3m3 3a3 3 0 1 0 3-3m-3 3h1" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" strokeWidth={strokeWidth} />
    </>
  ),
  leaf: ({ strokeWidth }) => (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeWidth={strokeWidth} />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" strokeWidth={strokeWidth} />
    </>
  ),
  sprout: ({ strokeWidth }) => (
    <>
      <path d="M7 20h10" strokeWidth={strokeWidth} />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" strokeWidth={strokeWidth} />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" strokeWidth={strokeWidth} />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" strokeWidth={strokeWidth} />
    </>
  ),

  wallet: ({ strokeWidth }) => (
    <>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" strokeWidth={strokeWidth} />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" strokeWidth={strokeWidth} />
    </>
  ),
  'refresh-cw': ({ strokeWidth }) => (
    <>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" strokeWidth={strokeWidth} />
      <path d="M21 3v5h-5" strokeWidth={strokeWidth} />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" strokeWidth={strokeWidth} />
      <path d="M8 16H3v5" strokeWidth={strokeWidth} />
    </>
  ),
  navigation: ({ strokeWidth }) => (
    <polygon points="3 11 22 2 13 21 11 13 3 11" strokeWidth={strokeWidth} />
  ),
  'arrow-up-right': ({ strokeWidth }) => (
    <>
      <line x1="7" x2="17" y1="17" y2="7" strokeWidth={strokeWidth} />
      <polyline points="7 7 17 7 17 17" strokeWidth={strokeWidth} />
    </>
  ),

  // Common Business & UI
  clock: ({ strokeWidth }) => (
    <>
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
      <polyline points="12 6 12 12 16 14" strokeWidth={strokeWidth} />
    </>
  ),
  'map-pin': ({ strokeWidth }) => (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" strokeWidth={strokeWidth} />
      <circle cx="12" cy="10" r="3" strokeWidth={strokeWidth} />
    </>
  ),
  phone: ({ strokeWidth }) => (
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      strokeWidth={strokeWidth}
    />
  ),
  mail: ({ strokeWidth }) => (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" strokeWidth={strokeWidth} />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeWidth={strokeWidth} />
    </>
  ),
  calendar: ({ strokeWidth }) => (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" strokeWidth={strokeWidth} />
      <line x1="16" x2="16" y1="2" y2="6" strokeWidth={strokeWidth} />
      <line x1="8" x2="8" y1="2" y2="6" strokeWidth={strokeWidth} />
      <line x1="3" x2="21" y1="10" y2="10" strokeWidth={strokeWidth} />
    </>
  ),
  user: ({ strokeWidth }) => (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" strokeWidth={strokeWidth} />
      <circle cx="12" cy="7" r="4" strokeWidth={strokeWidth} />
    </>
  ),
  users: ({ strokeWidth }) => (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeWidth={strokeWidth} />
      <circle cx="9" cy="7" r="4" strokeWidth={strokeWidth} />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeWidth={strokeWidth} />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth={strokeWidth} />
    </>
  ),
  check: ({ strokeWidth }) => (
    <polyline points="20 6 9 17 4 12" strokeWidth={strokeWidth} />
  ),
  'check-circle': ({ strokeWidth }) => (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth={strokeWidth} />
      <polyline points="22 4 12 14.01 9 11.01" strokeWidth={strokeWidth} />
    </>
  ),
  star: ({ strokeWidth }) => (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth={strokeWidth} />
  ),
  shield: ({ strokeWidth }) => (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth={strokeWidth} />
  ),
  zap: ({ strokeWidth }) => (
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth={strokeWidth} />
  ),
  sparkles: ({ strokeWidth }) => (
    <>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" strokeWidth={strokeWidth} />
      <path d="M5 3v4" strokeWidth={strokeWidth} />
      <path d="M19 17v4" strokeWidth={strokeWidth} />
      <path d="M3 5h4" strokeWidth={strokeWidth} />
      <path d="M17 19h4" strokeWidth={strokeWidth} />
    </>
  ),
  award: ({ strokeWidth }) => (
    <>
      <circle cx="12" cy="8" r="7" strokeWidth={strokeWidth} />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" strokeWidth={strokeWidth} />
    </>
  ),
  circle: ({ strokeWidth }) => (
    <circle cx="12" cy="12" r="8" strokeWidth={strokeWidth} />
  ),
  car: ({ strokeWidth }) => (
    <>
      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.64 5H8.36a2 2 0 0 0-1.86 1.3L5 10l-2-2" strokeWidth={strokeWidth} />
      <path d="M7 14h.01" strokeWidth={strokeWidth} />
      <path d="M17 14h.01" strokeWidth={strokeWidth} />
      <rect width="18" height="8" x="3" y="10" rx="2" strokeWidth={strokeWidth} />
      <path d="M5 18v2" strokeWidth={strokeWidth} />
      <path d="M19 18v2" strokeWidth={strokeWidth} />
    </>
  ),
  camera: ({ strokeWidth }) => (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" strokeWidth={strokeWidth} />
      <circle cx="12" cy="13" r="3" strokeWidth={strokeWidth} />
    </>
  ),
  handshake: ({ strokeWidth }) => (
    <>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-3.2-3.2a2 2 0 0 0-2.8 0L11 10.4" strokeWidth={strokeWidth} />
      <path d="m18 11 3-3a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0L13.4 7.6" strokeWidth={strokeWidth} />
      <path d="m2 11 3-3a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L5.4 15.6" strokeWidth={strokeWidth} />
      <path d="m13 17-2 2a1 1 0 0 1-1.4 0L5 14.4a2 2 0 0 1 0-2.8l3.2-3.2a2 2 0 0 1 2.8 0L13 10.4" strokeWidth={strokeWidth} />
    </>
  ),
  eye: ({ strokeWidth }) => (
    <>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="3" strokeWidth={strokeWidth} />
    </>
  ),
  'file-search': ({ strokeWidth }) => (
    <>
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" strokeWidth={strokeWidth} />
      <polyline points="14 2 14 8 20 8" strokeWidth={strokeWidth} />
      <circle cx="11.5" cy="14.5" r="3.5" strokeWidth={strokeWidth} />
      <path d="m14 17 2 2" strokeWidth={strokeWidth} />
    </>
  ),
  'file-text': ({ strokeWidth }) => (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" strokeWidth={strokeWidth} />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" strokeWidth={strokeWidth} />
      <path d="M10 9H8" strokeWidth={strokeWidth} />
      <path d="M16 13H8" strokeWidth={strokeWidth} />
      <path d="M16 17H8" strokeWidth={strokeWidth} />
    </>
  ),
  'clipboard-list': ({ strokeWidth }) => (
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" strokeWidth={strokeWidth} />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" strokeWidth={strokeWidth} />
      <path d="M12 11h4" strokeWidth={strokeWidth} />
      <path d="M12 16h4" strokeWidth={strokeWidth} />
      <path d="M8 11h.01" strokeWidth={strokeWidth} />
      <path d="M8 16h.01" strokeWidth={strokeWidth} />
    </>
  ),
  bell: ({ strokeWidth }) => (
    <>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" strokeWidth={strokeWidth} />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" strokeWidth={strokeWidth} />
    </>
  ),
  landmark: ({ strokeWidth }) => (
    <>
      <line x1="3" x2="21" y1="22" y2="22" strokeWidth={strokeWidth} />
      <line x1="6" x2="6" y1="18" y2="11" strokeWidth={strokeWidth} />
      <line x1="10" x2="10" y1="18" y2="11" strokeWidth={strokeWidth} />
      <line x1="14" x2="14" y1="18" y2="11" strokeWidth={strokeWidth} />
      <line x1="18" x2="18" y1="18" y2="11" strokeWidth={strokeWidth} />
      <polygon points="12 2 20 7 4 7" strokeWidth={strokeWidth} />
    </>
  ),
  'calendar-check': ({ strokeWidth }) => (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" strokeWidth={strokeWidth} />
      <line x1="16" x2="16" y1="2" y2="6" strokeWidth={strokeWidth} />
      <line x1="8" x2="8" y1="2" y2="6" strokeWidth={strokeWidth} />
      <line x1="3" x2="21" y1="10" y2="10" strokeWidth={strokeWidth} />
      <path d="m9 16 2 2 4-4" strokeWidth={strokeWidth} />
    </>
  ),
  trophy: ({ strokeWidth }) => (
    <>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeWidth={strokeWidth} />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeWidth={strokeWidth} />
      <path d="M4 22h16" strokeWidth={strokeWidth} />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" strokeWidth={strokeWidth} />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" strokeWidth={strokeWidth} />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" strokeWidth={strokeWidth} />
    </>
  ),
  wand: ({ strokeWidth }) => (
    <>
      <path d="m15 4-2 2" strokeWidth={strokeWidth} />
      <path d="m15 2 2 2" strokeWidth={strokeWidth} />
      <path d="m12 7 2-2" strokeWidth={strokeWidth} />
      <path d="M9 11 3 17l4 4 6-6" strokeWidth={strokeWidth} />
      <path d="m19 9-2 2" strokeWidth={strokeWidth} />
    </>
  ),
  copy: ({ strokeWidth }) => (
    <>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" strokeWidth={strokeWidth} />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" strokeWidth={strokeWidth} />
    </>
  ),
  info: ({ strokeWidth }) => (
    <>
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
      <path d="M12 16v-4" strokeWidth={strokeWidth} />
      <path d="M12 8h.01" strokeWidth={strokeWidth} />
    </>
  ),
  'rotate-ccw': ({ strokeWidth }) => (
    <>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" strokeWidth={strokeWidth} />
      <path d="M3 3v5h5" strokeWidth={strokeWidth} />
    </>
  ),
  'sliders-horizontal': ({ strokeWidth }) => (
    <>
      <line x1="21" x2="14" y1="4" y2="4" strokeWidth={strokeWidth} />
      <line x1="10" x2="3" y1="4" y2="4" strokeWidth={strokeWidth} />
      <line x1="21" x2="12" y1="12" y2="12" strokeWidth={strokeWidth} />
      <line x1="8" x2="3" y1="12" y2="12" strokeWidth={strokeWidth} />
      <line x1="21" x2="16" y1="20" y2="20" strokeWidth={strokeWidth} />
      <line x1="12" x2="3" y1="20" y2="20" strokeWidth={strokeWidth} />
      <line x1="14" x2="14" y1="2" y2="6" strokeWidth={strokeWidth} />
      <line x1="8" x2="8" y1="10" y2="14" strokeWidth={strokeWidth} />
      <line x1="16" x2="16" y1="18" y2="22" strokeWidth={strokeWidth} />
    </>
  ),
  'layout-grid': ({ strokeWidth }) => (
    <>
      <rect width="7" height="7" x="3" y="3" rx="1" strokeWidth={strokeWidth} />
      <rect width="7" height="7" x="14" y="3" rx="1" strokeWidth={strokeWidth} />
      <rect width="7" height="7" x="14" y="14" rx="1" strokeWidth={strokeWidth} />
      <rect width="7" height="7" x="3" y="14" rx="1" strokeWidth={strokeWidth} />
    </>
  ),
  list: ({ strokeWidth }) => (
    <>
      <line x1="8" x2="21" y1="6" y2="6" strokeWidth={strokeWidth} />
      <line x1="8" x2="21" y1="12" y2="12" strokeWidth={strokeWidth} />
      <line x1="8" x2="21" y1="18" y2="18" strokeWidth={strokeWidth} />
      <line x1="3" x2="3.01" y1="6" y2="6" strokeWidth={strokeWidth} />
      <line x1="3" x2="3.01" y1="12" y2="12" strokeWidth={strokeWidth} />
      <line x1="3" x2="3.01" y1="18" y2="18" strokeWidth={strokeWidth} />
    </>
  ),
};

// ── Aliases & Normalization ───────────────────────────────────────────────────

const ICON_ALIASES: Record<string, string> = {
  speedometer: 'gauge',
  odometer: 'gauge',
  mileage: 'gauge',
  gas: 'fuel',
  petrol: 'fuel',
  diesel: 'fuel',
  electric: 'zap',
  battery: 'zap',
  power: 'zap',
  transmission: 'settings',
  gear: 'settings',
  gearbox: 'settings',
  cog: 'settings',
  compare: 'scale',
  balance: 'scale',
  scales: 'scale',
  saved: 'heart',
  favorite: 'heart',
  like: 'heart',
  document: 'file-check',
  evidence: 'file-check',
  report: 'file-check',
  chat: 'message-circle',
  message: 'message-circle',
  comments: 'message-square',
  calc: 'calculator',
  loan: 'calculator',
  finance: 'calculator',
  sourcing: 'search-check',
  verified: 'check-circle',
  gym: 'dumbbell',
  fitness: 'dumbbell',
  weight: 'dumbbell',
  menu: 'utensils',
  dish: 'utensils',
  food: 'utensils',
  restaurant: 'utensils',
  duration: 'clock',
  time: 'clock',
  location: 'map-pin',
  pin: 'map-pin',
  address: 'map-pin',
  call: 'phone',
  telephone: 'phone',
  email: 'mail',
  directions: 'navigation',
  navigate: 'navigation',
  compass: 'navigation',
  money: 'wallet',
  wallet: 'wallet',
  ownership: 'wallet',
  cycle: 'refresh-cw',
  refresh: 'refresh-cw',
  'trade-in': 'refresh-cw',
  arrow: 'arrow-up-right',
  external: 'arrow-up-right',
  'up-right': 'arrow-up-right',
  rose: 'flower',
  tulip: 'flower',
  bloom: 'flower',
  blossom: 'flower',
  floral: 'flower',
  flowers: 'flower',
  plant: 'sprout',
  seedling: 'sprout',
  nature: 'leaf',
  eco: 'leaf',
  tree: 'leaf',
  'car-front': 'car',
  auto: 'car',
  automobile: 'car',
  vehicle: 'car',
  'wand-2': 'wand',
  magic: 'wand',
  grid: 'layout-grid',
  table: 'layout-grid',
  sliders: 'sliders-horizontal',
  filters: 'sliders-horizontal',
  bank: 'landmark',
  alert: 'bell',
  notification: 'bell',
  'plug-zap': 'zap',
  ev: 'zap',
  hybrid: 'zap',
};

function normalizeIconName(name?: string): string {
  if (!name) return 'circle';
  // Strip "Icon" suffix e.g. "GaugeIcon" -> "gauge"
  let clean = name.replace(/Icon$/i, '');
  // Convert PascalCase or camelCase to kebab-case
  clean = clean
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .trim();

  if (ICON_ALIASES[clean]) {
    return ICON_ALIASES[clean];
  }
  return clean;
}

function resolveFieldFromPath(obj: any, pathStr: string): any {
  if (!obj || !pathStr) return undefined;
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

// ── Component Implementation ──────────────────────────────────────────────────

export const EditableIcon: React.FC<EditableIconProps> = ({
  name = 'circle',
  fieldPath,
  size = 16,
  strokeWidth = 2,
  customIcon,
  fallback = 'circle',
  title,
  iconMap,
  className = '',
  style = {},
  ...svgProps
}) => {
  const siteData = useSiteData<any>();
  const content = siteData?.content || siteData;

  // If a fieldPath is provided, check if the data store overrides the icon name string
  const resolvedNameFromStore = fieldPath
    ? (resolveFieldFromPath(content, fieldPath) ?? resolveFieldFromPath(siteData, fieldPath))
    : undefined;
  const activeName = (typeof resolvedNameFromStore === 'string' && resolvedNameFromStore.trim())
    ? resolvedNameFromStore.trim()
    : name;

  const normalized = normalizeIconName(activeName);

  // 1. Custom icon slot
  if (customIcon) {
    return (
      <span
        className={`deneb-editable-icon ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          ...style,
        }}
        {...(fieldPath ? {
          'data-preview-field-path': fieldPath,
          'data-preview-control': 'icon-picker',
          'data-preview-icon-type': 'lucide',
          'data-preview-icon': activeName,
        } : {})}
      >
        {customIcon}
      </span>
    );
  }

  // 2. Custom dictionary override
  if (iconMap && iconMap[normalized]) {
    return (
      <span
        className={`deneb-editable-icon ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          ...style,
        }}
        {...(fieldPath ? {
          'data-preview-field-path': fieldPath,
          'data-preview-control': 'icon-picker',
          'data-preview-icon-type': 'lucide',
          'data-preview-icon': activeName,
        } : {})}
      >
        {iconMap[normalized]}
      </span>
    );
  }

  // 3. Built-in SVG lookup
  const renderer = BUILTIN_ICONS[normalized] || BUILTIN_ICONS[fallback] || BUILTIN_ICONS.circle;

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={`deneb-editable-icon ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
      aria-hidden={!title}
      role={title ? 'img' : undefined}
      {...svgProps}
    >
      {title && <title>{title}</title>}
      {renderer({ strokeWidth })}
    </svg>
  );

  if (!fieldPath) return svg;

  // Match the HTML selection target used by customIcon/iconMap above.
  // SVG descendants bubble into this target even in HTMLElement-only bridges.
  return (
    <span
      data-preview-field-path={fieldPath}
      data-preview-control="icon-picker"
      data-preview-icon-type="lucide"
      data-preview-icon={activeName}
      style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, lineHeight: 1 }}
    >
      {svg}
    </span>
  );
};

// Aliases for developer convenience
export const DynamicIcon = EditableIcon;
export const Icon = EditableIcon;
