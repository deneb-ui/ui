'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, BookOpen, Layers, Terminal } from 'lucide-react';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export interface SearchItem {
  title: string;
  category: 'Getting Started' | 'Components' | 'CLI' | 'Guides';
  slug: string;
  description: string;
}

export const SEARCH_INDEX: SearchItem[] = [
  // Getting Started
  { title: 'Introduction', category: 'Getting Started', slug: '/docs/introduction', description: 'Overview of the DENEB UI Framework and philosophy.' },
  { title: 'Installation', category: 'Getting Started', slug: '/docs/installation', description: 'How to install and configure DENEB UI in your project.' },
  { title: 'Theming & Tokens', category: 'Getting Started', slug: '/docs/theming', description: 'Customizing celestial themes, colors, and variables.' },
  { title: 'Responsive Design', category: 'Getting Started', slug: '/docs/responsive-design', description: 'Mobile, tablet, and desktop behavior for every DENEB UI component.' },
  { title: 'CLI Reference', category: 'CLI', slug: '/docs/cli', description: 'All commands for @deneb-ui/cli (add, validate, init).' },
  
  // Core Primitives
  { title: 'Button', category: 'Components', slug: '/docs/components/button', description: 'Interactive button with multiple celestial variants, sizes, and states.' },
  { title: 'Card', category: 'Components', slug: '/docs/components/card', description: 'Container component with cosmic glow and header/content/footer slots.' },
  { title: 'Badge', category: 'Components', slug: '/docs/components/badge', description: 'Status tags, indicator pills, and glowing metadata markers.' },
  { title: 'Typography', category: 'Components', slug: '/docs/components/typography', description: 'Headings, paragraphs, and inline text primitives.' },
  { title: 'Dialog / Modal', category: 'Components', slug: '/docs/components/dialog', description: 'Accessible modal dialog with backdrop blur and smooth transitions.' },
  { title: 'Grid & Box', category: 'Components', slug: '/docs/components/grid', description: 'Responsive layout primitives for fast page composition.' },
  { title: 'Image', category: 'Components', slug: '/docs/components/image', description: 'Optimized responsive image with fallback support.' },
  { title: 'Icon / EditableIcon', category: 'Components', slug: '/docs/components/editable-icon', description: 'Editable built-in SVG icon library with custom maps and safe fallbacks.' },

  // Smart Commerce Actions
  { title: 'ContactActions', category: 'Components', slug: '/docs/components/contact-actions', description: 'Smart multi-channel contact bar (Phone, WhatsApp, Email).' },
  { title: 'WhatsAppButton', category: 'Components', slug: '/docs/components/whatsapp-button', description: 'One-click chat launcher with dynamic link resolution.' },
  { title: 'PhoneButton', category: 'Components', slug: '/docs/components/phone-button', description: 'Direct call action with tel: protocol and visual editing bindings.' },
  { title: 'EmailButton', category: 'Components', slug: '/docs/components/email-button', description: 'Pre-formatted mailto action with subject line support.' },
  { title: 'FloatingContactWidget', category: 'Components', slug: '/docs/components/floating-contact-widget', description: 'Sticky bottom-corner conversion widget.' },

  // Location & Navigation
  { title: 'Map', category: 'Components', slug: '/docs/components/map', description: 'Universal Google Maps responsive iframe embed with intelligent URL and coordinate parsing.' },
  { title: 'LocationCard', category: 'Components', slug: '/docs/components/location-card', description: 'Storefront location card with map directions button.' },
  { title: 'LocationLink', category: 'Components', slug: '/docs/components/location-link', description: 'Interactive map address trigger with directions.' },
  { title: 'MapEmbed', category: 'Components', slug: '/docs/components/map-embed', description: 'Responsive Google Maps iframe embed with fallback.' },
  { title: 'Address', category: 'Components', slug: '/docs/components/address', description: 'Structured semantic address component.' },

  // Social & Business
  { title: 'BusinessHours', category: 'Components', slug: '/docs/components/business-hours', description: 'Weekly schedule renderer with dynamic live Open/Closed badge.' },
  { title: 'SocialLinks', category: 'Components', slug: '/docs/components/social-links', description: 'Filtered social channel container with brand icons.' },
  { title: 'SocialButton', category: 'Components', slug: '/docs/components/social-button', description: 'Individual branded social media buttons.' },

  // Storefront Sections
  { title: 'GoogleFeedback', category: 'Components', slug: '/docs/components/google-feedback', description: 'Official Google Customer Review card section with verified badge and live 1-5 star DOM sync.' },
  { title: 'TestimonialSection', category: 'Components', slug: '/docs/components/testimonial-section', description: 'Editorial critic and connoisseur review showcase with large quotation typography.' },
  { title: 'CartDrawer', category: 'Components', slug: '/docs/components/cart-drawer', description: 'Slide-over shopping cart drawer with quantity steppers, free shipping progress bar, and WhatsApp checkout.' },
  { title: 'Checkout', category: 'Components', slug: '/docs/components/checkout', description: 'Universal e-commerce checkout page with PayHere online payments, COD, and WhatsApp mode.' },
  { title: 'OrderSuccess', category: 'Components', slug: '/docs/components/order-success', description: 'Order confirmation and invoice tracking page with printable receipts.' },
  { title: 'FilterSidebar', category: 'Components', slug: '/docs/components/filter-sidebar', description: 'Faceted catalog filtering sidebar with category chips, price range slider, and size swatches.' },
  { title: 'ProductDetail', category: 'Components', slug: '/docs/components/product-detail', description: 'Complete single product view with multi-image gallery, size/color selector, WhatsApp CTA, and policy tabs.' },
  { title: 'PlatformProductDetail', category: 'Components', slug: '/docs/components/platform-product-detail', description: 'Stable static-export product route controller with live catalog lookup, retries, and customizable rendering.' },
  { title: 'ProductQuickView', category: 'Components', slug: '/docs/components/product-quickview', description: 'Instant lightbox modal product inspection with quantity counter and live editing.' },
  { title: 'ProductGrid', category: 'Components', slug: '/docs/components/product-grid', description: 'Responsive commerce product showcase grid with category filter tabs and quick-view hook.' },
  { title: 'ProductCard', category: 'Components', slug: '/docs/components/product-card', description: 'E-commerce product display with dual pricing (fixed vs range), interactive color swatches, badge, and quick buy.' },
  { title: 'UniversalCard', category: 'Components', slug: '/docs/components/universal-card', description: 'Multi-industry editable listing card for products, services, menus, books, property, and equipment.' },
  { title: 'VehicleCard', category: 'Components', slug: '/docs/components/vehicle-card', description: 'Automotive inventory card with editable vehicle specs and companion listing primitives.' },
  { title: 'Section (EditableSection)', category: 'Components', slug: '/docs/components/section', description: 'Semantic section container with 1-click move up/down section reordering (CSS order), instant centering, and safe hiding (display: none).' },
  { title: 'EditableSection', category: 'Components', slug: '/docs/components/editable-section', description: 'Reorderable, centerable, hideable section container with strict data-design-section and data-section-id visual builder contract compliance.' },
  { title: 'CustomerReviews', category: 'Components', slug: '/docs/components/customer-reviews', description: 'Social proof review showcase with aggregate rating and verified buyer authentication.' },
  { title: 'TrustBadges', category: 'Components', slug: '/docs/components/trust-badges', description: 'Security and conversion guarantee strip (SSL, free delivery, returns).' },
  { title: 'StickyMobileBar', category: 'Components', slug: '/docs/components/sticky-mobile-bar', description: 'Sticky bottom checkout and WhatsApp order bar for mobile commerce.' },
  { title: 'Hero', category: 'Components', slug: '/docs/components/hero', description: 'Centered and split hero banner sections with CTA actions.' },
  { title: 'PricingCard', category: 'Components', slug: '/docs/components/pricing-card', description: 'Tiered pricing card with feature checks and highlights.' },
  { title: 'TestimonialCard', category: 'Components', slug: '/docs/components/testimonial-card', description: 'Customer review card with avatar and 5-star rating.' },
  { title: 'ServiceCard', category: 'Components', slug: '/docs/components/service-card', description: 'Storefront service highlight card with icon and description.' },
  { title: 'FAQAccordion', category: 'Components', slug: '/docs/components/faq-accordion', description: 'Expandable accordion for store policies and questions.' },
  { title: 'AnnouncementBar', category: 'Components', slug: '/docs/components/announcement-bar', description: 'Top promotional banner for flash sales and free shipping.' },
  { title: 'CategoryPills', category: 'Components', slug: '/docs/components/category-pills', description: 'Horizontal scrollable category filter pills.' },
  { title: 'ContactForm', category: 'Components', slug: '/docs/components/contact-form', description: 'Storefront lead generation and inquiry form.' },
  { title: 'Navbar', category: 'Components', slug: '/docs/components/navbar', description: 'Full storefront navigation bar with mobile drawer.' },
  { title: 'Footer', category: 'Components', slug: '/docs/components/footer', description: 'Multi-column storefront footer with copyright and links.' },
  { title: 'SiteDataProvider', category: 'Components', slug: '/docs/components/site-data-provider', description: 'BroadcastChannel and postMessage live preview synchronization provider.' },
  { title: 'ThemeStyles', category: 'Components', slug: '/docs/components/theme-styles', description: 'Dynamic CSS variable injector for Fivora colors, fonts, and border radius tokens.' },
];

export function SearchDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const filtered = useMemo(() => {
    if (!query.trim()) return SEARCH_INDEX.slice(0, 8);
    const q = query.toLowerCase();
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          onClose(); // toggle
        }
        return;
      }

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        router.push(filtered[selectedIndex].slug);
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, filtered, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-20 px-2 sm:px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white text-slate-900 dark:border-[#23283B] dark:bg-[#0C0F1A] dark:text-white shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-colors duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Header */}
        <div className="flex items-center px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-slate-200 dark:border-[#23283B] gap-2.5 sm:gap-3">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-[#818CF8] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search docs, components, CLI..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus:outline-none min-w-0"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:text-[#64748B] dark:hover:text-white dark:hover:bg-white/5 transition-colors shrink-0"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[55vh] sm:max-h-96 overflow-y-auto p-1.5 sm:p-2 divide-y divide-slate-100 dark:divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-slate-500 dark:text-[#64748B] text-xs sm:text-sm">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.slug}
                  onClick={() => {
                    router.push(item.slug);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 sm:px-3.5 py-2.5 sm:py-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-50/80 border border-indigo-200 text-slate-950 dark:bg-[#818CF8]/15 dark:border-[#818CF8]/30 dark:text-white'
                      : 'hover:bg-slate-50 text-slate-700 dark:hover:bg-white/5 dark:text-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                    <div
                      className={`p-2 rounded-lg border shrink-0 ${
                        isSelected
                          ? 'border-indigo-300 bg-indigo-100 text-indigo-600 dark:border-[#818CF8]/40 dark:bg-[#818CF8]/20 dark:text-[#818CF8]'
                          : 'border-slate-200 bg-slate-100 text-slate-500 dark:border-[#23283B] dark:bg-[#121625] dark:text-[#94A3B8]'
                      }`}
                    >
                      {item.category === 'Components' ? (
                        <Layers className="w-4 h-4" />
                      ) : item.category === 'CLI' ? (
                        <Terminal className="w-4 h-4" />
                      ) : (
                        <BookOpen className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white truncate">{item.title}</span>
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-[#94A3B8] shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-[#94A3B8] line-clamp-1 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-indigo-600 dark:text-[#818CF8] translate-x-1' : 'text-transparent'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-3.5 sm:px-4 py-2.5 border-t border-slate-200 dark:border-[#23283B] bg-slate-50 dark:bg-[#0A0D17] flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748B]">
          <div className="hidden sm:flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white">↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white">↵</kbd> to select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white">esc</kbd> to close</span>
          </div>
          <span className="sm:hidden text-[10px]">Tap item to open</span>
          <div className="flex items-center gap-1 text-indigo-600 dark:text-[#818CF8]">
            <DenebStarIcon className="w-3 h-3" />
            <span className="font-mono text-[10px] sm:text-xs">DENEB UI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
