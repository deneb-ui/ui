'use client';

import React from 'react';
import { createWhatsAppUrl, createPhoneUrl, createEmailUrl } from '../utils/urls';

export type ContactType = 'whatsapp' | 'phone' | 'email' | 'contact-form' | 'custom';

export interface ContactButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: ContactType;
  value?: string | null;
  label?: React.ReactNode;
  fieldPath?: string;
  labelFieldPath?: string;
  targetPage?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  message?: string; // Optional default message for WhatsApp
  subject?: string; // Optional default subject for email
}

export function ContactButton({
  type = 'whatsapp',
  value,
  href,
  label,
  children,
  fieldPath,
  labelFieldPath,
  targetPage,
  variant,
  size = 'md',
  icon,
  message,
  subject,
  className = '',
  style,
  ...rest
}: ContactButtonProps) {
  // If no fieldPath and no value/href/label/children, do not render broken button
  if (!fieldPath && !value && !href && !children && !label) {
    return null;
  }

  let resolvedHref = href || '#';
  let shouldOpenNewTab = false;
  let defaultIcon: React.ReactNode = null;
  let resolvedVariant = variant || 'primary';

  switch (type) {
    case 'whatsapp':
      resolvedHref = createWhatsAppUrl(value || href, message);
      shouldOpenNewTab = true;
      if (!variant) resolvedVariant = 'whatsapp';
      defaultIcon = (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      );
      break;

    case 'phone':
      resolvedHref = createPhoneUrl(value || href);
      shouldOpenNewTab = false;
      defaultIcon = (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      );
      break;

    case 'email':
      resolvedHref = createEmailUrl(value || href, subject);
      shouldOpenNewTab = false;
      defaultIcon = (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      );
      break;

    case 'contact-form':
      resolvedHref = value || href || '#contact-form';
      defaultIcon = (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" x2="8" y1="13" y2="13"/>
          <line x1="16" x2="8" y1="17" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      );
      break;

    default:
      resolvedHref = value || href || '#';
      break;
  }

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    ...style,
  };

  const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
    sm: { fontSize: '0.875rem', padding: '0.4rem 0.75rem' },
    md: { fontSize: '0.95rem', padding: '0.6rem 1.25rem' },
    lg: { fontSize: '1.05rem', padding: '0.75rem 1.6rem' },
  };

  const variantStyles: Record<'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp', React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--button-bg, var(--color-primary, #0f172a))',
      color: 'var(--button-text, #ffffff)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    },
    secondary: {
      backgroundColor: 'var(--button-secondary-bg, var(--color-secondary, #f1f5f9))',
      color: 'var(--button-secondary-text, var(--color-text, #0f172a))',
      border: '1px solid var(--button-secondary-border, var(--color-border, transparent))',
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--button-outline-border, var(--color-border, #e2e8f0))',
      color: 'var(--button-outline-text, var(--color-text, #0f172a))',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--button-ghost-text, var(--color-text, #0f172a))',
    },
    whatsapp: {
      backgroundColor: '#25D366',
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(37, 211, 102, 0.2)',
    },
  };

  const mergedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[resolvedVariant],
  };

  const textContent = typeof children === 'string' ? children : (typeof label === 'string' ? label : '');
  const digitsOnly = (str: string) => str.replace(/\D/g, '');
  const matchesValue = Boolean(
    value &&
    textContent &&
    (digitsOnly(textContent) === digitsOnly(String(value)) || textContent.trim().toLowerCase() === String(value).trim().toLowerCase())
  );
  const staticMarker = (rest as Record<string, any>)['data-preview-static'] || `${type}-action`;
  const staticLabelMarker = (rest as Record<string, any>)['data-preview-static'] || `${type}-label`;

  const buttonElement = (
    <a
      href={resolvedHref}
      {...(fieldPath && (matchesValue || labelFieldPath)
        ? { 'data-preview-field-path': fieldPath }
        : { 'data-preview-static': staticMarker })}
      target={shouldOpenNewTab ? '_blank' : undefined}
      rel={shouldOpenNewTab ? 'noopener noreferrer' : undefined}
      className={`deneb-contact-btn deneb-contact-${type} ${className}`.trim()}
      style={mergedStyles}
      {...rest}
    >
      {icon !== undefined ? icon : defaultIcon}
      {labelFieldPath ? (
        <span data-preview-field-path={labelFieldPath}>{children || label}</span>
      ) : fieldPath && matchesValue ? (
        children || label
      ) : (
        <span data-preview-static={staticLabelMarker}>{children || label}</span>
      )}
    </a>
  );

  if (targetPage) {
    return (
      <span data-target-page={targetPage} style={{ display: 'inline-block' }}>
        {buttonElement}
      </span>
    );
  }

  return buttonElement;
}
