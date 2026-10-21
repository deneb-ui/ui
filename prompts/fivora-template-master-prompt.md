# Fivora Template Master Implementation Prompt

Copy everything inside the block into an AI coding agent. Attach or paste the complete Fivora Template Developer Guide and give the agent access to the template source directory. This prompt is designed to be pasted unchanged; the agent must discover project-specific routes and fields instead of forcing a generic schema.

```text
You are the implementation owner for converting the website in the current template workspace into a production-ready Fivora template. Read the complete attached Fivora Template Developer Guide before taking action. Inspect the whole template repository, implement every required change, validate the result, and produce a clean source ZIP. Do not stop after an audit, explanation, partial page, or first successful build.

OUTCOME
Deliver one strict manifest-v2 Next.js static template that works as either Standard or Premium. Both tiers use the committed base theme and support Fivora project manual design overrides. Premium additionally supports AI-assisted design generation. Preserve the existing design, responsiveness, animations, and legitimate assets unless a targeted contract or static-export correction is necessary.

DISCOVERY — DO THIS BEFORE EDITING
1. Locate the template root and Fivora authoring-kit root from the workspace. Do not ask for paths that can be discovered.
2. Read fivora-template.json, package.json, lock file, next.config.*, TypeScript/ESLint config, the manifest-declared site data file, root layout, every route, every shared component, header, footer, navigation, forms, cards, lists, galleries, carousels, modals, and the existing preview provider.
3. Inventory every merchant-visible text, image, link label, destination, action, contact/social value, list, price, option, and boolean.
4. Produce internal tables for: route -> rendered components -> content paths; list path -> item shape -> demo/min/max counts; image placement -> field path; and selected page -> allowed destinations. Use those tables to implement the complete conversion.

CONTENT CONTRACT
1. Derive siteData.content from this design. Do not impose a generic home/about/services/products/gallery schema when the design differs.
2. Every merchant-visible or behavioral value has one source below siteData.content. Truly shared values belong under content.common.
3. Realistic demo values exist only in the manifest-declared site data JSON. Delete duplicated demo constants and code fallbacks such as title || 'Demo Company' or services.length ? services : DEMO_SERVICES.
4. Use optional/nullable runtime types and defensive helpers. Incoming validation data may contain null, empty strings, false, zero, empty objects, empty arrays, missing optional fields, and replaced arrays.
5. Model one repeated visual/business entity as one atomic object-list item. Never use parallel positional arrays. Primitive image or text lists are allowed only when the item is truly a single primitive.
6. System IDs are not merchant questions. Put nonvisual ID wildcard paths in visualEditing.controlOnlyPaths, use IDs only as internal keys/references, and use current indexes in preview paths.

MANIFEST
1. Keep fivora-template.json at package root.
2. Use framework nextjs-static-export, version 2, visualEditing contractVersion 1, mode strict, outputDirectory out, a real siteDataFile, install/build commands, and the configured basePathEnvVar.
3. Declare every page with a lowercase stable ID and canonical static route. Page ID, editorSchema pageKey, requirements.requiredPages values, route-root data-preview-page-key, and selected-page filtering must agree exactly.
4. Define an accurate editor schema with useful labels/types/options/required rules, list minItems/maxItems, and recommendedWidth/recommendedHeight for every image field. Keep demo cardinality within those bounds. Do not author generated rendered-content metadata.
5. Retain or add themeSchema for precise manual design controls on every tier. Read merged flat theme values from siteData.template.structure.theme, expose CSS variables with safe defaults, and consume them in the actual design. Do not create a separate Standard code branch.

LIVE PREVIEW
1. Wrap the complete site, including header and footer, in SiteDataProvider.
2. Editable UI must read through useSiteData, never a direct JSON UI import.
3. Preserve these exact protocol strings: FIVORA_PREVIEW_SITE_DATA, FIVORA_PREVIEW_READY, and FIVORA_PREVIEW_FOCUS_PAGE.
4. Validate parent message source/origin, announce readiness, deep-merge objects, replace arrays, and focus the exact field target.
5. Use the same components for local demo, merchant editor, admin test, and published export.

EXACT VISUAL-EDITING MARKERS
1. Put data-preview-page-key on each real route root.
2. Put data-preview-field-path on the smallest real visible or behavioral leaf for every editable concrete path.
3. Put data-preview-list-path on each collection container and keep it mounted at zero items.
4. Put data-preview-item-path on each current item. Use dynamic indexed JSX paths such as services[${index}].name. Never use IDs or fixed/sparse demo indexes.
5. Keep targets mounted for cleared strings, empty images, false, zero, required controls, and empty lists. Use neutral empty slots, never demo-business restoration.
6. data-preview-static is only for the smallest genuinely fixed element. NEVER place data-preview-field-path, data-preview-list-path, or data-preview-item-path on a data-preview-static element or anywhere below a data-preview-static ancestor. Never blanket-mark wrappers, pages, layouts, or the HTML/body root static.
7. Never create hidden marker banks, aria-hidden targets, display:none targets, fake duplicates, compiler injection, or post-build HTML rewriting to satisfy validation.
8. For editable links, model and mark label and destination separately when both are editable. For images, mark the real image slot and keep local public assets base-path safe.
9. For React list keys, ALWAYS use safe fallback keys: `key={item.id ?? `${collectionName}-${index}`}`. Never use bare `key={item.id}` without fallback when mapping arrays; lists in `editorSchema` or incoming site data might not declare an `id` field, causing React console errors.
10. NEVER leak non-standard visual editing helper props (e.g. `previewItemPath`, `previewPath`) onto native DOM elements or Framer Motion (`<motion.li {...rest}>`). Always explicitly destructure helper props or pass only valid HTML `data-preview-*` attributes.

SELECTED PAGES
1. requirements.requiredPages is the runtime source of truth.
2. Filter every route destination in headers, heroes, body links, cards, teasers, menus, and footers. Generated HTML must never contain href to an unselected manifest page.
3. Put data-target-page="<exact-manifest-page-id>" on every complete route-control wrapper. Never infer its destination from button text or business-category words.
4. Omit a CTA when its target page is unselected. If strict marker coverage requires a non-navigation fallback wrapper, keep the exact data-target-page on that wrapper so Fivora hides it completely. Never leave visible button-styled fallback text, href="#", or a disabled route control.
5. Keep content genuinely consumed by a selected route. Home-page cards may remain editable even when their dedicated listing page is absent; hide only their controls that navigate to that page. When the page is selected, render those controls again.

ONE-PAGE NAVIGATION
1. First classify the design: a routed multi-page template uses canonical page routes; a one-page design uses in-document section targets. Never mix the two accidentally.
2. For a one-page design, give every navbar destination a unique stable semantic section marker: `<section id="about" data-section-id="about" data-design-section="about">` and link to it with the matching `href="#about"`.
3. Every one-page navigation target must exist in the exported Home document, remain unique, and be visible when its navigation item is visible. Do not use route links such as `/about` for content that only exists as a Home section.
4. Keep navigation labels short neutral UI copy such as Home, About, Services, Gallery, and Contact. Put them in a `navigation`, `nav`, `navbar`, `navLabels`, or `menuLabels` content container; never replace them with AI marketing sentences.
5. Verify section navigation in local preview and the production static export, including sticky-header offset, direct `/#section` loading, mobile navigation, and reduced-motion mode.

DENEB UI COMPONENTS — USE THESE, NEVER BUILD FROM SCRATCH
Install:  npm install @deneb-ui/ui @deneb-ui/core
Import:   import { ComponentName } from "@deneb-ui/ui";
Docs:     https://deneb.fivora.site

⚡ GOLDEN RULE — NEVER hardcode static store contact info, map URLs, or hours into JSX:
  BAD:  <a href="https://wa.me/94771234567">WhatsApp</a>
  BAD:  <a href="tel:+94771234567">Call Us</a>
  BAD:  <iframe src="https://maps.google.com/...?q=Colombo" />
  BAD:  <p>Open Mon–Fri 9am–6pm</p>
  GOOD: <WhatsAppButton />   ← auto-uses live registered merchant WhatsApp
  GOOD: <PhoneButton />      ← auto-uses live registered phone
  GOOD: <LocationCard />     ← auto-uses live address + Google Maps link
  GOOD: <BusinessHours />    ← auto-uses live hours + shows "Open Now / Closed"
  GOOD: <SocialLinks />      ← auto-uses live Facebook/Instagram/TikTok/YouTube links
  GOOD: {useCurrency()}      ← auto-uses live store currency (LKR/USD/EUR)
  GOOD: {useShopImage()}     ← auto-uses live shop front / cover image URL
Auto-hydrating components self-populate from the shop owner's live Fivora Portal profile. When the merchant changes their phone, WhatsApp, address, hours, or map URL, their live storefront updates instantly with zero code rebuilds.

SMART CONTACT & COMMERCE ACTIONS (all auto-hydrate from live merchant profile when props omitted)
  <WhatsAppButton />           — Click-to-WhatsApp with pre-filled order/inquiry message
  <PhoneButton />              — 1-tap tel: dial button
  <EmailButton />              — mailto: button
  <ContactActions />           — Combined bar: shows WhatsApp/Phone/Email/Maps for whichever channels the merchant has active
  <FloatingContactWidget />    — Fixed-corner slide drawer with WhatsApp/Call/Email. Use on service & restaurant templates.
  <CartDrawer />               — Slide-over cart with quantity steppers, free-shipping bar, 1-click WhatsApp order dispatch. Pair with useCart().

LOCATION & MAPS (all auto-hydrate from live merchant address when props omitted)
  <LocationCard />             — Street address, city, district, postal code, clickable Google Maps directions
  <LocationLink />             — Minimal inline "View on Maps" text link
  <MapEmbed />                 — Static Google Maps tile centered on address
  <Address />                  — Semantic <address> block
  <MapLink />                  — Standalone "Get Directions" button

SOCIAL & BUSINESS
  <BusinessHours />            — Weekly hours grid + live "Open Now / Closed" status based on visitor local time. Auto-uses live hours.
  <SocialLinks />              — Renders all configured social icons from live merchant profile
  <SocialButton platform="instagram" url="..." /> — Single social platform icon link
  <HeritageCollage />          — Multi-image brand story / about collage for Heritage or About sections

STOREFRONT SECTIONS
  <Icon name="car" fieldPath="common.featureIcon" /> — Editable built-in SVG icon; use Icon/EditableIcon instead of hardcoded icon markup when the merchant can change it
  <Hero />                     — Full-width hero with image, headline, subheadline, CTA
  <Navbar />                   — Responsive header with logo, nav links, search, cart icon
  <Footer />                   — Site footer with links, social, contact
  <AnnouncementBar />          — Dismissible top-of-page promotional banner
  <ProductCard />              — Product tile with image, name, price, badge, Add-to-Cart
  <UniversalCard />            — Generic listing renderer for books, menus, property, memberships, equipment, and other non-catalog entities; do not replace ProductCard or ServiceCard with it
  <VehicleCard vehicleId="..." /> — Automotive listing card driven by cards.vehicles.<id>; companion exports: EditableBrandCard, EditableBodyTypeCard, and EditableShowroomCard
  <ProductGrid />              — Paginated product grid with search + category filter. Auto-loads from useSiteCatalog() or accepts products array.
  <ProductDetail />            — Full product detail layout
  <PlatformProductDetail />    — Recommended for /products/detail route; auto-loads product by URL param via useSiteApi()
  <ProductShowcase />          — Featured product carousel / grid section
  <ProductQuickView />         — Modal overlay product preview triggered from grid
  <FilterSidebar />            — Category / price / availability filter panel
  <CategoryPills />            — Horizontal scrollable category filter chips
  <CustomerReviews />          — Auto-pulls live Google + in-app reviews from useReviews()
  <GoogleFeedback />           — Google review widget with star rating and review list
  <TestimonialCard />          — Single testimonial with photo and quote
  <TestimonialCarousel />      — Auto-playing testimonial slider
  <TestimonialSection />       — Full testimonials section block
  <ServiceCard />              — Service offering card with icon, title, description
  <PricingCard />              — Pricing tier card with feature list and CTA
  <FAQAccordion />             — Expandable FAQ list
  <ContactForm />              — Multi-field inquiry form
  <TrustBadges />              — Payment / security / delivery trust badge row
  <StickyMobileBar />          — Bottom-fixed mobile bar with WhatsApp/Call/Cart. Add to every mobile commerce template.
  <BookingModal />             — Appointment booking modal with date/time picker
  <BeforeAfterSlider />        — Drag-to-compare before/after image slider
  <CookieConsentBanner />      — GDPR/cookie consent banner

DATA & THEME ENGINE
  <SiteDataProvider>           — Wraps entire app. Handles FIVORA_PREVIEW_SITE_DATA live-sync. Must wrap header + footer.
  <ThemeStyles />              — Reads theme from siteData, computes WCAG contrast, injects :root CSS variables
  <ThemeToggle />              — Light/dark mode toggle
  <PlatformAdditionalPages />  — Renders Fivora-managed extra pages (Terms, Privacy, etc.)
  useSiteData()                — Access full siteData tree inside any Client Component
  useProducts(fallback?)       — Live product catalog from siteData; falls back to provided array
  useSiteCatalog()             — Advanced catalog hook with search and filter state built in
  useServices(fallback?)       — Live services list
  useSiteApi()                 — Fetches a specific product by URL param for the detail route
  useCart()                    — Cart state: items, totals, add/remove/update. Pair with <CartDrawer />.
  useShop()                    — Live merchant profile: phone, whatsapp, email, address, hours, reviews
  useSocial()                  — Live social links map { facebook, instagram, tiktok, youtube, linkedin, website }. Auto-hydrates from merchant portal.
  useCurrency()                — Live store currency code (e.g. "LKR", "USD"). Auto-hydrates from merchant portal.
  useShopImage()               — Live shop front / cover / banner image URL. Auto-hydrates from merchant portal.
  useReviews()                 — Live Google + in-app reviews array

COMPONENT REPLACEMENT RULES — FOLLOW WITHOUT EXCEPTION
1. Any custom WhatsApp link → <WhatsAppButton />. Never write raw wa.me URLs.
2. Any custom phone link → <PhoneButton />. Never write raw tel: hrefs.
3. Any custom email link → <EmailButton />. Never write raw mailto: hrefs.
4. Any custom map iframe or directions link → <LocationCard />, <MapEmbed />, or <MapLink />.
5. Any custom business hours text block → <BusinessHours />.
6. Any custom product grid/card → <ProductGrid /> + <ProductCard />.
6a. Any Fivora service list/card → <ServiceCard />. ProductCard and ServiceCard consume the canonical backend catalog contract; UniversalCard must not introduce a third product/service schema.
7. Any custom cart UI → <CartDrawer /> + useCart().
8. Any custom review section → <CustomerReviews /> or <GoogleFeedback />.
9. Any custom social icon row → <SocialLinks /> or <SocialButton />.
10. Add <StickyMobileBar /> to every template targeting mobile commerce.
11. Add <FloatingContactWidget /> to every service, restaurant, or hospitality template.
12. Wrap entire app in <SiteDataProvider> in root layout. Add <ThemeStyles /> immediately inside it.
13. MODULAR SECTION ARCHITECTURE (<section> & <Section> / <EditableSection>):
    Every top-level page module MUST be wrapped in a semantic <section> tag or Deneb <Section name="..."> / <EditableSection name="...">:
    - MUST include data-design-section="<section-id>" and data-section-id="<section-id>".
    - MUST include id="<section-id>".
    - Inner content should be wrapped in a centered container (container={true} or <div className="container mx-auto px-4">).
    - HOW TO USE IN TSX:
      ```tsx
      import { EditableSection, EditableText } from "@deneb-ui/ui";

      export function HeroSection() {
        return (
          <EditableSection
            name="hero"
            align="center"
            container={true}
            className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
          >
            <EditableText as="h1" id="hero.title" className="text-4xl sm:text-5xl font-bold">
              Artisan Handcrafted Silhouettes
            </EditableText>
            <EditableText as="p" id="hero.subtitle" className="text-lg text-gray-600 mt-3">
              Ethically sourced fabrics designed for enduring comfort.
            </EditableText>
          </EditableSection>
        );
      }
      ```
    - WHY: Enables shop owners and website agents in Fivora Visual Editor and Developer Portal Lab to:
      a) Delete or hide entire unwanted sections (e.g. Testimonials, FAQ, Promos) with 1 click (sets display: none via section blueprint) without breaking document flow.
      b) Center or align section headings and content instantly (center={true} or align="center" maps to text-align and CSS variables).
      c) Apply section-wide background color, gradients, and custom vertical padding.
      d) Reorder sections with 1-click Move Up (⬆️) and Move Down (⬇️) buttons. The parent page container MUST declare Flexbox column layout:
         ```css
         body > main, main, [data-preview-page-key] {
           display: flex;
           flex-direction: column;
         }
         ```
         Changing CSS `order` (order: 1, order: 2, or --deneb-section-order) moves sections up or down (e.g. moving Contact section below Products and Services) instantly and safely without mutating the DOM tree or causing React hydration mismatches.

14. DUAL PRODUCT PRICING (Fixed Price vs. Price Range) & APPAREL VARIANTS:
    - Products support both SINGLE FIXED PRICE (price: 3500, compareAtPrice: 4500) and DYNAMIC PRICE RANGES (minPrice: 2500, maxPrice: 4500, or priceRange: "LKR 2,500 – LKR 4,500", isPriceRange: true).
    - When isPriceRange or minPrice is present, display "LKR min – LKR max" initially, until a customer selects a specific size/color variant.
    - Clothing/apparel items support color swatches that swap product images on click and interactive size chips:
      ```tsx
      import { EditableProductCard } from "@deneb-ui/ui";

      <EditableProductCard
        itemPath="products[0]"
        product={{
          id: "prod-resort-shirt",
          name: "Linen Resort Shirt",
          minPrice: 2800,
          maxPrice: 4800,
          priceRange: "LKR 2,800 – LKR 4,800",
          isPriceRange: true,
          currency: "LKR",
          imageUrl: "/images/shirt-navy.jpg",
          colors: [
            { name: "Navy", hex: "#0f2942", imageUrl: "/images/shirt-navy.jpg" },
            { name: "Olive", hex: "#4d6840", imageUrl: "/images/shirt-olive.jpg" },
            { name: "Terracotta", hex: "#c26d4f", imageUrl: "/images/shirt-terracotta.jpg" },
          ],
          sizes: ["S", "M", "L", "XL"],
          variants: [
            { color: "Navy", size: "S", price: 2800 },
            { color: "Navy", size: "XL", price: 3500 },
            { color: "Olive", size: "L", price: 4800 },
          ],
        }}
        whatsappPhone="+94771234567"
      />
      ```
    - Interactive Color Swatches: Clicking a color swatch immediately swaps the card or product detail hero image to that color variant image.
    - Both "Add to Cart" and "Order via WhatsApp" automatically format messages and cart items with selected variant attributes [Color: Navy, Size: XL].

15. TESTING IN DEVELOPER PORTAL LOCAL TEST LAB:
    - Run `npm run lab` (or `deneb lab .`) inside your template folder.
    - Connect at Fivora Developer Portal -> "Local Test Lab".
    - Click "Test" in the toolbar to run the full automated preflight contract suite:
      * Validates manifest v2 and editor schema
      * Validates semantic <section> tags and data-design-section / data-section-id attributes
      * Validates live visual editing field and item markers (data-preview-field-path, data-preview-item-path)
      * Validates pricing contracts: single price vs dynamic price range formatting and clothing swatch bindings
      * Validates clean static export readiness (Next.js out/ directory)
    - Test interactive section centering, hiding, and product variant photo-swapping in the live frame before packaging.

STATIC BUILD
1. Configure output: 'export', trailingSlash, images.unoptimized: true, and basePath/assetPrefix from the manifest environment variable.
2. Next.js `<Link>` and `useRouter()` apply `next.config` `basePath` automatically. Pass logical routes directly (`router.push(pageRoute(pageKey))` or `<Link href={pageRoute(pageKey)}>`). Never wrap those destinations with `withBasePath(...)`; reserve that helper for `window.location` and local asset URLs.
3. Prefix local public assets and imperative navigation with the base path. Test a non-empty base path.
4. Remove runtime-only APIs, Server Actions, middleware, ISR, runtime database calls, and ungenerated dynamic routes.
5. Do not weaken TypeScript, lint, security, visual markers, or the manifest to force a green build.

PUBLISHED SEO AND TRACKING OWNERSHIP
1. Render meaningful merchant content in semantic exported HTML. Use one descriptive page heading, logical heading levels, crawlable anchor links between selected pages, and accurate image alt text.
2. Keep only safe fallback title/description metadata in the template. The Fivora writes reviewed per-page metadata, canonical URLs, robots rules, social tags, favicon, Search Console verification, structured business data, robots.txt, and sitemap.xml during publishing.
3. Never hardcode or runtime-fetch tenant Google Analytics IDs, Meta/Facebook Pixel IDs, verification tokens, canonical hosts, noindex rules, sitemaps, or tenant structured data in the template. Preview and unpublished builds must not send tenant tracking events.

VERIFICATION — ALL ARE REQUIRED
1. Install from the lock file or generate/update the lock file deterministically.
2. Run lint.
3. Run the normal static build.
4. Run a build with NEXT_PUBLIC_SITE_BASE_PATH=/template-test.
5. From the Fivora authoring-kit directory, run npm run validate -- <template-directory> without --skip-build or --skip-install. This must pass package-policy, selected-page probe, and empty-state phases.
6. Explicitly inspect exported HTML for exact page/field/list/item markers, static-ancestor violations, and links to unselected routes.
7. Test lists at zero, one, min, max when present, and add/duplicate/remove/reorder semantics. Test nulls, missing IDs, cleared text/images, false, zero, and equal visible values at different paths.
8. Run npm run package:template -- <template-directory> --output <package-name>.zip from the authoring kit. Upload only the ZIP it publishes after fresh-extraction validation.
9. Ensure the ZIP just produced is the file reported for upload; do not reuse an older archive.

FINAL RESPONSE
Lead with whether the template is ready. Report: files changed; content-path/page/list/image audit summary; Standard/Premium behavior; exact install/lint/build/base-path/contract-validation results; ZIP absolute path; ZIP integrity/inventory result; and any honest remaining blocker. A partial implementation, recommendations-only answer, validator bypass, or unverified ZIP is not complete.
```
