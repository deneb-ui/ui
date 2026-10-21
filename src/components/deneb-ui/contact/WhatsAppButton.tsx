'use client';

import React from 'react';
import { ContactButton, ContactButtonProps } from './ContactButton';
import { useShop, useSiteData, isPreviewValidation, DUMMY_PREVIEW_WHATSAPP } from '../SiteDataProvider';

export interface WhatsAppButtonProps extends Omit<ContactButtonProps, 'type'> {
  phoneNumber?: string | null;
}

/**
 * WhatsAppButton automatically connects customers directly to the shop's WhatsApp chat.
 * Self-hydrates from live shop registration, contact config, and merchant profile if phoneNumber is omitted.
 * In preview mode, defaults to template dummy preview data.
 */
export function WhatsAppButton({
  phoneNumber,
  value,
  label = 'Chat on WhatsApp',
  fieldPath = 'common.business.whatsapp',
  variant = 'whatsapp',
  message,
  ...rest
}: WhatsAppButtonProps) {
  const liveShop = useShop();
  const siteData = useSiteData();
  const isPreview = isPreviewValidation(siteData);
  const content = (siteData?.content && typeof siteData.content === 'object' ? siteData.content : {}) as Record<string, unknown>;
  const common = (content.common && typeof content.common === 'object' ? content.common : {}) as Record<string, unknown>;
  const business = (common.business && typeof common.business === 'object' ? common.business : {}) as Record<string, unknown>;
  const contact = (content.contact && typeof content.contact === 'object' ? content.contact : (common.contact && typeof common.contact === 'object' ? common.contact : {})) as Record<string, unknown>;
  const home = (content.home && typeof content.home === 'object' ? content.home : {}) as Record<string, unknown>;
  const merchant = (siteData && 'merchant' in siteData && typeof (siteData as Record<string, unknown>).merchant === 'object' ? (siteData as Record<string, unknown>).merchant : {}) as Record<string, unknown>;
  const shop = (siteData && 'shop' in siteData && typeof (siteData as Record<string, unknown>).shop === 'object' ? (siteData as Record<string, unknown>).shop : {}) as Record<string, unknown>;

  const isDemoNumber = (val?: unknown) => {
    if (typeof val !== "string" || !val.trim()) return true;
    const digits = val.replace(/\D/g, "");
    return digits.length < 7 || digits.startsWith("123456") || /^0+$/.test(digits);
  };

  const liveNumber =
    liveShop?.contact?.whatsapp ||
    (typeof liveShop?.businessWhatsapp === "string" ? liveShop.businessWhatsapp : null) ||
    (typeof shop?.businessWhatsapp === "string" ? shop.businessWhatsapp : null) ||
    shop?.whatsapp ||
    merchant?.businessWhatsapp ||
    merchant?.whatsapp ||
    (!isDemoNumber(contact.whatsapp) ? contact.whatsapp : null) ||
    (!isDemoNumber(contact.whatsappNumber) ? contact.whatsappNumber : null) ||
    (!isDemoNumber(common.whatsapp) ? common.whatsapp : null) ||
    (!isDemoNumber(common.whatsappNumber) ? common.whatsappNumber : null) ||
    liveShop?.contact?.phone ||
    (typeof liveShop?.businessPhone === "string" ? liveShop.businessPhone : null) ||
    shop?.phone ||
    merchant?.phone ||
    (!isDemoNumber(business.whatsapp) ? business.whatsapp : null) ||
    business.phone ||
    contact.phone ||
    home.whatsappNumber ||
    home.whatsappCtaUrl;

  const effectiveNumber =
    (!isPreview ? (liveNumber || null) : null) ||
    (!isDemoNumber(phoneNumber) ? phoneNumber : null) ||
    value ||
    liveNumber ||
    (isPreview ? DUMMY_PREVIEW_WHATSAPP : "");

  if (!effectiveNumber && !fieldPath) return null;

  return (
    <ContactButton
      type="whatsapp"
      value={effectiveNumber}
      label={label}
      fieldPath={fieldPath}
      variant={variant}
      message={message}
      {...rest}
    />
  );
}
