'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  Layers,
  PhoneCall,
  MapPin,
  Clock,
  LayoutGrid,
  ChevronRight,
  Palette,
} from 'lucide-react';

export interface NavSection {
  title: string;
  icon?: React.ReactNode;
  items: {
    title: string;
    href: string;
    isNew?: boolean;
    badge?: string;
  }[];
}

export const SIDEBAR_NAV: NavSection[] = [
  {
    title: 'Getting Started',
    icon: <Sparkles className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Set Up Fivora & Master Guide', href: '/docs/setup-fivora', badge: '40 Comps', isNew: true },
      { title: 'Theming & Tokens', href: '/docs/theming' },
      { title: 'Responsive Design', href: '/docs/responsive-design', badge: 'New', isNew: true },
      { title: 'CLI Reference', href: '/docs/cli' },
      { title: 'Storefront Scaffolding', href: '/docs/templates' },
      { title: 'E-Commerce Architecture', href: '/docs/templates/e-commerce', badge: 'Static Export', isNew: true },
    ],
  },
  {
    title: 'Core Primitives',
    icon: <Layers className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Typography', href: '/docs/components/typography' },
      { title: 'Dialog / Modal', href: '/docs/components/dialog' },
      { title: 'Grid & Box', href: '/docs/components/grid' },
      { title: 'Section (EditableSection)', href: '/docs/components/section', badge: 'Reorderable', isNew: true },
      { title: 'Image', href: '/docs/components/image' },
      { title: 'Icon / EditableIcon', href: '/docs/components/editable-icon', badge: 'New', isNew: true },
    ],
  },
  {
    title: 'Smart Commerce Actions',
    icon: <PhoneCall className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'ContactActions', href: '/docs/components/contact-actions', isNew: true },
      { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
      { title: 'PhoneButton', href: '/docs/components/phone-button' },
      { title: 'EmailButton', href: '/docs/components/email-button' },
      { title: 'FloatingContactWidget', href: '/docs/components/floating-contact-widget', badge: 'Smart' },
    ],
  },
  {
    title: 'Location & Navigation',
    icon: <MapPin className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'Map', href: '/docs/components/map', badge: 'Smart', isNew: true },
      { title: 'LocationCard', href: '/docs/components/location-card' },
      { title: 'LocationLink', href: '/docs/components/location-link' },
      { title: 'MapEmbed', href: '/docs/components/map-embed' },
      { title: 'Address', href: '/docs/components/address' },
    ],
  },
  {
    title: 'Social & Business',
    icon: <Clock className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'BusinessHours', href: '/docs/components/business-hours', badge: 'Live' },
      { title: 'SocialLinks', href: '/docs/components/social-links' },
      { title: 'SocialButton', href: '/docs/components/social-button' },
    ],
  },
  {
    title: 'Storefront Sections',
    icon: <LayoutGrid className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: 'EditableSection', href: '/docs/components/editable-section', badge: 'Blueprint', isNew: true },
      { title: 'GoogleFeedback', href: '/docs/components/google-feedback', badge: 'Google', isNew: true },
      { title: 'TestimonialSection', href: '/docs/components/testimonial-section', badge: 'Editorial', isNew: true },
      { title: 'CartDrawer', href: '/docs/components/cart-drawer', badge: 'Hot', isNew: true },
      { title: 'Checkout', href: '/docs/components/checkout', badge: 'E-Com', isNew: true },
      { title: 'OrderSuccess', href: '/docs/components/order-success', badge: 'Receipt', isNew: true },
      { title: 'FilterSidebar', href: '/docs/components/filter-sidebar', isNew: true },
      { title: 'ProductDetail', href: '/docs/components/product-detail', badge: 'Hot', isNew: true },
      { title: 'PlatformProductDetail', href: '/docs/components/platform-product-detail', badge: 'Safe', isNew: true },
      { title: 'ProductQuickView', href: '/docs/components/product-quickview', badge: 'Modal', isNew: true },
      { title: 'ProductGrid', href: '/docs/components/product-grid', isNew: true },
      { title: 'ProductCard', href: '/docs/components/product-card' },
      { title: 'UniversalCard', href: '/docs/components/universal-card', badge: 'New', isNew: true },
      { title: 'VehicleCard', href: '/docs/components/vehicle-card', badge: 'Auto', isNew: true },
      { title: 'CustomerReviews', href: '/docs/components/customer-reviews', badge: 'Social', isNew: true },
      { title: 'TrustBadges', href: '/docs/components/trust-badges', badge: 'Conversion' },
      { title: 'StickyMobileBar', href: '/docs/components/sticky-mobile-bar', badge: 'Mobile' },
      { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
      { title: 'CategoryPills', href: '/docs/components/category-pills' },
      { title: 'Hero (Centered & Split)', href: '/docs/components/hero' },
      { title: 'PricingCard', href: '/docs/components/pricing-card' },
      { title: 'TestimonialCard', href: '/docs/components/testimonial-card' },
      { title: 'ServiceCard', href: '/docs/components/service-card' },
      { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
      { title: 'ContactForm', href: '/docs/components/contact-form' },
      { title: 'Navbar', href: '/docs/components/navbar' },
      { title: 'Footer', href: '/docs/components/footer' },
    ],
  },
  {
    title: "Data & Theme Engine",
    icon: <Palette className="w-4 h-4 text-[#818CF8]" />,
    items: [
      { title: "SiteDataProvider", href: "/docs/components/site-data-provider", badge: "State" },
      { title: "ThemeStyles", href: "/docs/components/theme-styles", badge: "Tokens" },
      { title: "useProducts", href: "/docs/components/use-products", badge: "Hook", isNew: true },
      { title: "useSiteApi", href: "/docs/components/use-site-api", badge: "API", isNew: true },
      { title: "useSiteCatalog", href: "/docs/components/use-site-catalog", badge: "Hook", isNew: true },
    ],
  },
];

export function DocsSidebar({
  className = '',
  onItemClick,
}: {
  className?: string;
  onItemClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside className={`w-full pb-12 pt-6 text-sm ${className}`}>
      <div className="space-y-6">
        {SIDEBAR_NAV.map((section) => (
          <div key={section.title} className="space-y-1.5">
            <div className="flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
              {section.icon}
              <span>{section.title}</span>
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? 'text-indigo-600 bg-indigo-50/80 border-l-2 border-indigo-600 font-semibold dark:text-[#818CF8] dark:bg-[#818CF8]/10 dark:border-[#818CF8]'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 dark:text-[#CBD5E1] dark:hover:text-white dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{item.title}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge ? (
                          <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-[#818CF8]/20 dark:text-[#A5B4FC] dark:border-[#818CF8]/30">
                            {item.badge}
                          </span>
                        ) : item.isNew ? (
                          <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30">
                            New
                          </span>
                        ) : null}
                        {isActive && (
                          <ChevronRight className="w-3 h-3 text-indigo-600 dark:text-[#818CF8]" />
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
