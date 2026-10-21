import React from 'react';
import { useFieldStyle } from './SiteDataProvider';
import { useComponentStyle } from './hooks/useComponentStyle';

export type BoxRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | (string & {}) | number;
export type BoxShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {});
export type BoxSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {}) | number;
export type BoxAspectRatio =
  | '1/1'
  | '16/9'
  | '4/3'
  | '3/4'
  | '9/16'
  | '2/3'
  | '3/2'
  | 'square'
  | 'video'
  | 'portrait'
  | 'landscape'
  | (string & {});

const RADIUS_MAP: Record<string, string> = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
};

const SHADOW_MAP: Record<string, string> = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

const SPACING_MAP: Record<string, string> = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
};

const ASPECT_MAP: Record<string, string> = {
  square: '1 / 1',
  '1/1': '1 / 1',
  video: '16 / 9',
  '16/9': '16 / 9',
  portrait: '3 / 4',
  '3/4': '3 / 4',
  '4/3': '4 / 3',
  landscape: '4 / 3',
  '9/16': '9 / 16',
  '2/3': '2 / 3',
  '3/2': '3 / 2',
};

export interface EditableBoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Independent container style target; does not mark child content as one text field. */
  stylePath?: string;

  /**
   * Field path or item path in siteData.
   */
  id?: string;
  'data-preview-field-path'?: string;
  'data-preview-item-path'?: string;
  'data-preview-static'?: string;

  /**
   * Sizing controls
   */
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  aspectRatio?: BoxAspectRatio;

  /**
   * Auto-balance: expands and balances item within flex/grid rows to match available space evenly.
   */
  balance?: boolean;
  grow?: boolean | number;
  shrink?: boolean | number;

  /**
   * Spacing & styling
   */
  padding?: BoxSpacing;
  margin?: BoxSpacing;
  bg?: string;
  color?: string;
  radius?: BoxRadius;
  shadow?: BoxShadow;
  border?: string | boolean;

  /**
   * Visual layout & alignment
   */
  display?: 'block' | 'flex' | 'grid' | 'inline-block' | 'inline-flex';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: BoxSpacing;
  overflow?: 'visible' | 'hidden' | 'auto' | 'scroll';
}

/**
 * EditableBox is a flexible, smart container ("div-like") component with built-in
 * width/height resizing, aspect-ratio controls, and auto-balancing for fivora cards.
 */
export function EditableBox({
  as: Component = 'div',
  stylePath,
  id,
  'data-preview-field-path': previewFieldPath,
  'data-preview-item-path': previewItemPath,
  'data-preview-static': previewStatic,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  aspectRatio,
  balance,
  grow,
  shrink,
  padding,
  margin,
  bg,
  color,
  radius,
  shadow,
  border,
  display,
  direction,
  wrap,
  align,
  justify,
  gap,
  overflow,
  style,
  children,
  className = '',
  ...props
}: EditableBoxProps) {
  const resolvedRadius = radius !== undefined ? (RADIUS_MAP[String(radius)] || String(radius)) : undefined;
  const resolvedShadow = shadow ? (SHADOW_MAP[shadow] || shadow) : undefined;
  const resolvedPadding = padding !== undefined ? (SPACING_MAP[String(padding)] || String(padding)) : undefined;
  const resolvedMargin = margin !== undefined ? (SPACING_MAP[String(margin)] || String(margin)) : undefined;
  const resolvedGap = gap !== undefined ? (SPACING_MAP[String(gap)] || String(gap)) : undefined;
  const resolvedAspect = aspectRatio ? (ASPECT_MAP[aspectRatio] || aspectRatio) : undefined;

  const resolvedAlign =
    align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align;

  const resolvedJustify =
    justify === 'start'
      ? 'flex-start'
      : justify === 'end'
      ? 'flex-end'
      : justify === 'between'
      ? 'space-between'
      : justify === 'around'
      ? 'space-around'
      : justify === 'evenly'
      ? 'space-evenly'
      : justify;

  const resolvedWrap =
    typeof wrap === 'boolean' ? (wrap ? 'wrap' : 'nowrap') : wrap;

  const resolvedBorder =
    border === true
      ? '1px solid var(--border-color, rgba(226, 232, 240, 0.8))'
      : typeof border === 'string'
      ? border
      : undefined;

  const path = previewFieldPath || id || previewItemPath;
  const effectiveStylePath = stylePath ?? path;
  const { cssVars } = useComponentStyle(effectiveStylePath, 'card');
  const variables = cssVars as Record<string, string>;
  const containerStyle: React.CSSProperties = {};
  // Only set persisted values: unedited CSS classes and existing props keep their defaults.
  const bindings = {
    backgroundColor: '--deneb-card-bg',
    paddingTop: '--deneb-card-pt', paddingBottom: '--deneb-card-pb',
    paddingLeft: '--deneb-card-pl', paddingRight: '--deneb-card-pr',
    marginTop: '--deneb-card-margin-top', marginBottom: '--deneb-card-margin-bottom',
    marginLeft: '--deneb-card-margin-left', marginRight: '--deneb-card-margin-right',
    gap: '--deneb-card-gap',
  } as const;
  for (const [property, variable] of Object.entries(bindings)) {
    if (variables[variable] !== undefined) {
      Object.assign(containerStyle, { [property]: `var(${variable})` });
    }
  }
  const dynamicStyle = useFieldStyle(path);
  const dynamicMarginTop = dynamicStyle?.spacingTop !== undefined && dynamicStyle?.spacingTop !== '' ? `${dynamicStyle.spacingTop}px` : undefined;
  const dynamicMarginBottom = dynamicStyle?.spacingBottom !== undefined && dynamicStyle?.spacingBottom !== '' ? `${dynamicStyle.spacingBottom}px` : undefined;
  const dynamicMarginLeft = dynamicStyle?.spacingLeft !== undefined && dynamicStyle?.spacingLeft !== '' ? `${dynamicStyle.spacingLeft}px` : undefined;
  const dynamicMarginRight = dynamicStyle?.spacingRight !== undefined && dynamicStyle?.spacingRight !== '' ? `${dynamicStyle.spacingRight}px` : undefined;

  const boxStyle: React.CSSProperties = {
    ...(width !== undefined ? { width } : {}),
    ...(minWidth !== undefined ? { minWidth } : {}),
    ...(maxWidth !== undefined ? { maxWidth } : {}),
    ...(height !== undefined ? { height } : {}),
    ...(minHeight !== undefined ? { minHeight } : {}),
    ...(maxHeight !== undefined ? { maxHeight } : {}),
    ...(resolvedAspect ? { aspectRatio: resolvedAspect } : {}),
    ...(balance ? { flex: '1 1 0%', minWidth: 0, height: '100%' } : {}),
    ...(grow !== undefined ? { flexGrow: typeof grow === 'boolean' ? (grow ? 1 : 0) : grow } : {}),
    ...(shrink !== undefined ? { flexShrink: typeof shrink === 'boolean' ? (shrink ? 1 : 0) : shrink } : {}),
    ...(bg ? { background: bg } : {}),
    ...(color ? { color } : {}),
    ...(resolvedRadius ? { borderRadius: resolvedRadius } : {}),
    ...(resolvedShadow ? { boxShadow: resolvedShadow } : {}),
    ...(resolvedBorder ? { border: resolvedBorder } : {}),
    ...(resolvedPadding ? { padding: resolvedPadding } : {}),
    ...(resolvedMargin ? { margin: resolvedMargin } : {}),
    ...(display ? { display } : {}),
    ...(direction ? { flexDirection: direction } : {}),
    ...(resolvedWrap ? { flexWrap: resolvedWrap } : {}),
    ...(resolvedAlign ? { alignItems: resolvedAlign } : {}),
    ...(resolvedJustify ? { justifyContent: resolvedJustify } : {}),
    ...(resolvedGap ? { gap: resolvedGap } : {}),
    ...(overflow ? { overflow } : {}),
    ...style,
    ...(dynamicMarginTop ? { marginTop: dynamicMarginTop } : {}),
    ...(dynamicMarginBottom ? { marginBottom: dynamicMarginBottom } : {}),
    ...(dynamicMarginLeft ? { marginLeft: dynamicMarginLeft } : {}),
    ...(dynamicMarginRight ? { marginRight: dynamicMarginRight } : {}),
    ...(dynamicStyle?.color ? { color: String(dynamicStyle.color) } : {}),
    ...cssVars,
    ...containerStyle,
  };

  return (
    <Component
      data-preview-field-path={previewFieldPath || id}
      data-preview-item-path={previewItemPath}
      data-preview-static={previewStatic}
      data-preview-style-target={effectiveStylePath}
      data-preview-style-type={effectiveStylePath ? 'card' : undefined}
      className={`editable-box ${className}`.trim()}
      style={boxStyle}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
