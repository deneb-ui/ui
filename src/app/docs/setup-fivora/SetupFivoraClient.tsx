'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Terminal,
  Layers,
  Zap,
  ShieldCheck,
  PackageCheck,
  RefreshCw,
  Cpu,
  HelpCircle,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Bookmark,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';
import { COMPONENT_DOCS } from '@/components/docs/component-registry';

export function SetupFivoraClient() {
  const [activePathway, setActivePathway] = useState<'convert' | 'scratch'>('convert');
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const AI_MASTER_PROMPT = "# SYSTEM PROMPT FOR AI ASSISTANTS (ChatGPT, Claude, Cursor, Antigravity)\n# Task: Convert an existing Next.js storefront or build a new template for the Fivora DENEB UI v2.0 Platform\n# Framework: Next.js 14/15/16 App Router, React 18/19, Tailwind CSS, TypeScript\n# Core Packages: @deneb-ui/ui, @deneb-ui/core, @deneb-ui/cli\n# Documentation: https://deneb.fivora.site\n\nYou are an expert Frontend Architect specializing in the Fivora DENEB UI ecosystem.\nWhen converting an existing storefront or building a new template, you MUST strictly adhere to the following architecture, component rules, visual editing annotations, and static export constraints:\n\n---\n\n## 1. The Core Architecture & Fundamental Rules\n\nA Fivora template is a modern Next.js App Router storefront that renders inside an iframe inside the Fivora Merchant Studio.\n- The parent window communicates with the template via a bidirectional `postMessage` protocol:\n  - Child notifies parent when ready: `FIVORA_PREVIEW_READY`\n  - Parent streams live field updates: `FIVORA_PREVIEW_SITE_DATA`\n- **NEVER** write manual `window.addEventListener('message')` listeners. Always use `<SiteDataProvider>` from `@deneb-ui/ui`.\n- All dynamic data (products, business info, hero copy, theme tokens) MUST be sourced from `src/data/site-data.json`.\n- The template must support static export: `output: \"export\"` in `next.config.ts`.\n- Always access nested fields using nullish coalescing (`??`) rather than logical OR (`||`):\n  ```tsx\n  const title = content?.hero?.title ?? \"Handcrafted Footwear\";\n  const products = content?.products ?? [];\n  ```\n\n---\n\n## 2. Complete Installation & Project Setup\n\n### 2.1 Install Core Packages\nInstall the required packages in your Next.js project:\n```bash\n# npm\nnpm install @deneb-ui/ui @deneb-ui/core lucide-react\nnpm install -D @deneb-ui/cli tailwindcss postcss autoprefixer typescript\n\n# yarn\nyarn add @deneb-ui/ui @deneb-ui/core lucide-react\nyarn add -D @deneb-ui/cli tailwindcss postcss autoprefixer typescript\n\n# pnpm\npnpm add @deneb-ui/ui @deneb-ui/core lucide-react\npnpm add -D @deneb-ui/cli tailwindcss postcss autoprefixer typescript\n\n# bun\nbun add @deneb-ui/ui @deneb-ui/core lucide-react\nbun add -d @deneb-ui/cli tailwindcss postcss autoprefixer typescript\n```\n\n### 2.2 Configure Tailwind CSS (`tailwind.config.ts`)\nTailwind must scan the `@deneb-ui/ui` library so all component styles are compiled:\n```typescript\nimport type { Config } from \"tailwindcss\";\n\nconst config: Config = {\n  content: [\n    \"./src/pages/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./src/components/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./src/app/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./node_modules/@deneb-ui/ui/**/*.{js,ts,jsx,tsx}\",\n  ],\n  theme: {\n    extend: {\n      colors: {\n        primary: \"var(--color-primary, #6366F1)\",\n        background: \"var(--color-background, #090D1A)\",\n      },\n    },\n  },\n  plugins: [],\n};\n\nexport default config;\n```\n\n---\n\n## 3. Mandatory Project Configuration Files\n\n### 3.1 `package.json` Scripts & Dependencies\n```json\n{\n  \"name\": \"fivora-storefront-template\",\n  \"version\": \"2.0.0\",\n  \"private\": true,\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"start\": \"next start\",\n    \"lab\": \"deneb lab .\",\n    \"validate\": \"deneb validate .\",\n    \"validate-and-zip\": \"deneb validate-and-zip .\",\n    \"zip\": \"deneb zip .\"\n  },\n  \"dependencies\": {\n    \"@deneb-ui/ui\": \"latest\",\n    \"@deneb-ui/core\": \"latest\",\n    \"lucide-react\": \"^1.0.0\",\n    \"next\": \"^14.2.0\",\n    \"react\": \"^18.3.0\",\n    \"react-dom\": \"^18.3.0\"\n  },\n  \"devDependencies\": {\n    \"@deneb-ui/cli\": \"latest\",\n    \"tailwindcss\": \"^3.4.0\",\n    \"typescript\": \"^5.0.0\"\n  }\n}\n```\n\n### 3.2 `next.config.ts` (Static Export Configuration)\n```typescript\nimport type { NextConfig } from \"next\";\n\nconst nextConfig: NextConfig = {\n  output: \"export\",\n  trailingSlash: true,\n  images: {\n    unoptimized: true,\n  },\n  basePath: process.env.NEXT_PUBLIC_BASE_PATH || \"\",\n  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || \"\",\n};\n\nexport default nextConfig;\n```\n\n### 3.3 `fivora-template.json` (Template Manifest v2)\n```json\n{\n  \"manifestVersion\": 2,\n  \"id\": \"template-artisan-boutique\",\n  \"name\": \"Artisan Boutique Storefront\",\n  \"version\": \"2.0.0\",\n  \"category\": \"retail\",\n  \"listingTier\": \"premium\",\n  \"author\": \"Your Studio Name\",\n  \"visualEditing\": {\n    \"contractVersion\": 1,\n    \"mode\": \"strict\"\n  },\n  \"themeSchema\": {\n    \"tokens\": [\n      { \"key\": \"primaryColor\", \"type\": \"color\", \"label\": \"Primary Accent\", \"default\": \"#6366F1\" },\n      { \"key\": \"backgroundColor\", \"type\": \"color\", \"label\": \"Background\", \"default\": \"#090D1A\" },\n      { \"key\": \"fontFamily\", \"type\": \"font\", \"label\": \"Heading Font\", \"default\": \"Inter\" }\n    ],\n    \"defaults\": {\n      \"primaryColor\": \"#6366F1\",\n      \"backgroundColor\": \"#090D1A\"\n    }\n  },\n  \"pages\": [\n    { \"key\": \"home\", \"title\": \"Storefront\", \"route\": \"/\" },\n    { \"key\": \"catalog\", \"title\": \"Products\", \"route\": \"/#products\" }\n  ]\n}\n```\n\n### 3.4 `src/data/site-data.json` (Single Source of Truth)\n```json\n{\n  \"project\": { \"id\": \"demo-store\", \"slug\": \"demo-store\", \"title\": \"Artisan Footwear\" },\n  \"shop\": {\n    \"name\": \"Artisan Footwear\",\n    \"tagline\": \"Handcrafted Daily Distinction\",\n    \"whatsapp\": \"+15550192834\",\n    \"phone\": \"+15550192834\",\n    \"email\": \"concierge@artisanfootwear.com\",\n    \"address\": \"452 Broadway Avenue, New York, NY\"\n  },\n  \"content\": {\n    \"hero\": {\n      \"badge\": \"Spring 2026\",\n      \"title\": \"Bespoke Footwear Engineered for Daily Distinction\",\n      \"subtitle\": \"Handcrafted micro-batch leather shoes with active cushioning.\",\n      \"primaryCta\": \"Shop Collection\",\n      \"image\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"\n    },\n    \"products\": [\n      {\n        \"id\": \"vanta-runner\",\n        \"title\": \"Vanta Velocity Sneaker\",\n        \"price\": 149.99,\n        \"compareAtPrice\": 189.99,\n        \"currency\": \"$\",\n        \"category\": \"Running\",\n        \"image\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\",\n        \"rating\": 4.9,\n        \"reviewsCount\": 38,\n        \"inStock\": true,\n        \"description\": \"Featherweight engineered mesh with adaptive dual-density foam.\"\n      }\n    ],\n    \"businessHours\": [\n      { \"day\": \"Monday - Friday\", \"hours\": \"9:00 AM - 7:00 PM\", \"isOpen\": true },\n      { \"day\": \"Saturday\", \"hours\": \"10:00 AM - 5:00 PM\", \"isOpen\": true },\n      { \"day\": \"Sunday\", \"hours\": \"Closed\", \"isOpen\": false }\n    ]\n  },\n  \"theme\": {\n    \"primary\": \"#6366F1\",\n    \"primaryGlow\": \"rgba(99, 102, 241, 0.4)\",\n    \"background\": \"#090D1A\",\n    \"cardBackground\": \"#0E1220\",\n    \"border\": \"#1E2438\",\n    \"text\": \"#F8FAFC\",\n    \"textMuted\": \"#94A3B8\"\n  }\n}\n```\n\n---\n\n## 4. Strict Rules for Visual Editing Attributes (`data-preview-*`)\n\n1. **Leaf Elements Only**:\n   - `data-preview-field-path` and `data-preview-image-path` MUST only be attached to leaf visual tags: `<h1>-<h6>`, `<p>`, `<span>`, `<a>`, `<button>`, `<img>`.\n   - **NEVER** place field markers on `<div>`, `<section>`, `<article>`, `<main>`, or `<ul>`.\n2. **Never Beneath Static Ancestors**:\n   - Elements marked with `data-preview-static` declare their entire subtree non-editable.\n   - **NEVER** put `data-preview-field-path` inside a container marked with `data-preview-static`.\n3. **Repeated Lists & Loops**:\n   - The container must have: `data-preview-list-path=\"content.products\"`\n   - Each item in the loop must have: `data-preview-item-path={`content.products.${index}`}`\n   - Leaf values inside the card must have: `data-preview-field-path={`content.products.${index}.title`}`\n4. **Defensive Defaults**:\n   - Always use nullish coalescing (`??`) rather than `||` for text values.\n   - Always default array lists: `const products = content?.products ?? [];` so probe testing never throws `Cannot read properties of undefined (reading 'map')`.\n5. **Platform Additional Pages (`additionalPages`)**:\n   - Merchants configure policy and custom pages (Privacy Policy, Terms of Service, Return Policy, Shipping Info) from the Fivora Merchant Studio.\n   - Every template MUST render these in the Footer (or Navigation menu).\n   - Container element: `data-preview-list-path=\\\"additionalPages\\\"` (must stay mounted even if array is empty).\n   - Item element: `data-preview-item-path={\\`additionalPages[\\${index}]\\`}`\n   - Title link text: `data-preview-field-path={\\`additionalPages[\\${index}].title\\`}`\n   - Non-visual routing attributes (`id`, `slug`, `url`, `content`, `isPublished`) MUST NOT have field markers.\n   - Or use `<PlatformAdditionalPages pages={siteData?.additionalPages} />` from `@deneb-ui/ui`.\n6. **Platform-Managed Fields & `controlOnlyPaths`**:\n   - Fields like `__fivoraIntake` and internal metadata belong to the platform.\n   - Always run `node scripts/merge-platform-contract.js` in `package.json` before validate/build so platform `controlOnlyPaths` are auto-merged.\n\n---\n\n## 5. Master DENEB UI Component Catalog (All 40 Components with Props & Real Code)\n\nEvery single component below is imported directly from `@deneb-ui/ui`:\n\n### Core Primitives (7 Components)\n\n#### 1. `Button`\n**Import**: `import { Button } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: An interactive button primitive with celestial glows, glassmorphic variants, loading states, and visual editing support.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `variant` | `'default' | 'glow' | 'secondary' | 'outline' | 'ghost'` | `'default'` | The visual styling variant of the button. |\n| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Controls button padding, font size, and height. |\n| `disabled` | `boolean` | `false` | Whether the button is interactable. |\n| `onClick` | `() => void` | `-` | Click event handler. |\n| `className` | `string` | `''` | Additional Tailwind or CSS class names. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Button } from \"@deneb-ui/ui\";\nimport { ArrowRight, ShoppingBag } from \"lucide-react\";\n\nexport function ActionButtons() {\n  return (\n    <div className=\"flex flex-wrap gap-4 items-center\">\n      <Button variant=\"glow\" size=\"lg\" onClick={() => console.log('Order initiated')}>\n        <ShoppingBag className=\"w-5 h-5 mr-2\" />\n        Order Now\n      </Button>\n      <Button variant=\"outline\" size=\"lg\">\n        Explore Catalog\n        <ArrowRight className=\"w-5 h-5 ml-2\" />\n      </Button>\n    </div>\n  );\n}\n```\n\n#### 2. `Card`\n**Import**: `import { Card } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: A versatile container card with obsidian glass styling, luminous borders, and structured content slots.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `variant` | `'default' | 'glass' | 'glow' | 'outline'` | `'default'` | Visual surface treatment with obsidian and luminous borders. |\n| `padding` | `'sm' | 'md' | 'lg' | 'none'` | `'md'` | Internal padding of the card container. |\n| `hoverEffect` | `boolean` | `true` | Enable celestial border illumination on hover. |\n| `className` | `string` | `''` | Additional Tailwind utility classes. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Card } from \"@deneb-ui/ui\";\nimport { Sparkles } from \"lucide-react\";\n\nexport function FeatureCard() {\n  return (\n    <Card variant=\"glass\" padding=\"lg\" hoverEffect className=\"space-y-4\">\n      <div className=\"w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400\">\n        <Sparkles className=\"w-6 h-6\" />\n      </div>\n      <h3 className=\"text-xl font-bold text-white\">Mastercrafted Durability</h3>\n      <p className=\"text-sm text-slate-400 leading-relaxed\">\n        Full-grain Italian calfskin with Goodyear-welted construction engineered for decades of wear.\n      </p>\n    </Card>\n  );\n}\n```\n\n#### 3. `Badge`\n**Import**: `import { Badge } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: Status indicator tags with celestial starlight glows, pulsing dots, and color tiers.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `variant` | `'default' | 'glow' | 'outline' | 'success' | 'warning'` | `'default'` | Color and glow palette of the tag. |\n| `size` | `'sm' | 'md'` | `'md'` | Padding and typography size. |\n| `pulse` | `boolean` | `false` | Renders an animated glowing pulse dot. |\n| `children` | `React.ReactNode` | `required` | Tag text or element content. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Badge } from \"@deneb-ui/ui\";\n\nexport function ProductBadges() {\n  return (\n    <div className=\"flex items-center gap-2\">\n      <Badge variant=\"glow\" pulse>In Stock</Badge>\n      <Badge variant=\"warning\">-25% OFF</Badge>\n      <Badge variant=\"outline\">Handmade</Badge>\n    </div>\n  );\n}\n```\n\n#### 4. `Typography`\n**Import**: `import { Typography } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: Semantic text primitives (Heading, Paragraph, Text) connected directly to Fivora theme font tokens and visual click-to-edit markers.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `level` | `1 | 2 | 3 | 4 | 5 | 6` | `1` | Heading hierarchy level (h1-h6). |\n| `data-preview-field-path` | `string` | `-` | Click-to-edit path binding (e.g. 'content.home.title'). |\n| `className` | `string` | `''` | Tailwind styling classes. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Heading, Paragraph, Text } from \"@deneb-ui/ui\";\n\nexport function SectionHeader({ title, subtitle }: { title?: string; subtitle?: string }) {\n  return (\n    <div className=\"text-center space-y-3\">\n      <Text className=\"text-xs uppercase font-bold tracking-widest text-indigo-400\">\n        Artisanal Heritage\n      </Text>\n      <Heading level={2} data-preview-field-path=\"content.home.catalogTitle\" className=\"text-3xl font-extrabold text-white\">\n        {title ?? \"Bespoke Collection\"}\n      </Heading>\n      <Paragraph data-preview-field-path=\"content.home.catalogSubtitle\" className=\"text-sm text-slate-400 max-w-xl mx-auto\">\n        {subtitle ?? \"Each pair is individually numbered and conditioned before leaving our workshop.\"}\n      </Paragraph>\n    </div>\n  );\n}\n```\n\n#### 5. `Dialog`\n**Import**: `import { Dialog } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: Accessible modal dialog with backdrop blur, keyboard ESC dismissal, sizing tiers, and live visual editing.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `isOpen` | `boolean` | `false` | Controls dialog visibility. |\n| `onClose` | `() => void` | `required` | Callback when user closes dialog or clicks backdrop. |\n| `title` | `string` | `''` | Dialog header title. |\n| `size` | `'sm' | 'md' | 'lg' | 'xl'` | `'md'` | Modal width tier. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Dialog, Button } from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport function SizeGuideModal() {\n  const [open, setOpen] = useState(false);\n  return (\n    <>\n      <Button variant=\"outline\" size=\"sm\" onClick={() => setOpen(true)}>\n        View Size Chart\n      </Button>\n      <Dialog isOpen={open} onClose={() => setOpen(false)} title=\"Footwear Sizing Guide\" size=\"md\">\n        <div className=\"space-y-4 text-sm text-slate-300\">\n          <p>Our shoes fit true to European standards. If between sizes, choose the smaller size.</p>\n          <table className=\"w-full text-left text-xs border border-slate-800\">\n            <thead><tr className=\"bg-slate-900\"><th className=\"p-2\">EU</th><th className=\"p-2\">US</th><th className=\"p-2\">CM</th></tr></thead>\n            <tbody>\n              <tr className=\"border-t border-slate-800\"><td className=\"p-2\">41</td><td className=\"p-2\">8.0</td><td className=\"p-2\">26.5</td></tr>\n              <tr className=\"border-t border-slate-800\"><td className=\"p-2\">42</td><td className=\"p-2\">9.0</td><td className=\"p-2\">27.0</td></tr>\n              <tr className=\"border-t border-slate-800\"><td className=\"p-2\">43</td><td className=\"p-2\">10.0</td><td className=\"p-2\">28.0</td></tr>\n            </tbody>\n          </table>\n        </div>\n      </Dialog>\n    </>\n  );\n}\n```\n\n#### 6. `Grid`\n**Import**: `import { Grid } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: Layout containers featuring auto-balancing columns, responsive device breakpoints, and flex alignment.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `cols` | `1 | 2 | 3 | 4` | `3` | Number of columns on desktop viewports. |\n| `gap` | `'sm' | 'md' | 'lg'` | `'md'` | Spacing between grid cells. |\n| `children` | `React.ReactNode` | `required` | Grid child elements. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Grid, Card } from \"@deneb-ui/ui\";\n\nexport function FeaturesSection() {\n  return (\n    <Grid cols={3} gap=\"lg\" className=\"max-w-7xl mx-auto px-4 py-12\">\n      <Card variant=\"glass\" padding=\"md\"><h4>Italian Leather</h4></Card>\n      <Card variant=\"glass\" padding=\"md\"><h4>Goodyear Welt</h4></Card>\n      <Card variant=\"glass\" padding=\"md\"><h4>Free Returns</h4></Card>\n    </Grid>\n  );\n}\n```\n\n#### 7. `Image`\n**Import**: `import { Image } from \"@deneb-ui/ui\";`  \n**Category**: `Core Primitives`  \n**Description**: Responsive storefront image component supporting preset aspect ratios, border radii, zoom hover, and visual editing upload triggers.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `src` | `string` | `required` | Image source URL. |\n| `alt` | `string` | `''` | Accessibility alternative text. |\n| `aspectRatio` | `'square' | '16/9' | '4/3' | 'portrait'` | `'auto'` | Fixed aspect ratio container. |\n| `radius` | `'sm' | 'md' | 'lg' | 'xl' | 'full'` | `'md'` | Border radius curvature. |\n| `fieldPath` | `string` | `''` | Visual click-to-edit path for image replacement. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Image } from \"@deneb-ui/ui\";\n\nexport function ShowcaseImage({ url, path }: { url: string; path?: string }) {\n  return (\n    <Image\n      src={url ?? \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"}\n      alt=\"Hero Sneaker\"\n      aspectRatio=\"16/9\"\n      radius=\"xl\"\n      fieldPath={path ?? \"content.hero.image\"}\n      className=\"shadow-2xl border border-slate-800\"\n    />\n  );\n}\n```\n\n\n### Smart Commerce Actions (5 Components)\n\n#### 8. `ContactActions`\n**Import**: `import { ContactActions } from \"@deneb-ui/ui\";`  \n**Category**: `Smart Commerce Actions`  \n**Description**: Multi-channel instant commerce action bar providing 1-tap WhatsApp, phone call, email, and Google Maps routing.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `whatsapp` | `string` | `''` | Target international WhatsApp number (digits only). |\n| `phone` | `string` | `''` | Telephone number for direct dialing. |\n| `email` | `string` | `''` | Inquiry recipient email address. |\n| `address` | `string` | `''` | Physical street address for map routing. |\n| `variant` | `'compact' | 'expanded' | 'minimal'` | `'expanded'` | Action bar visual layout style. |\n| `orientation` | `'horizontal' | 'vertical'` | `'horizontal'` | Arrangement axis. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ContactActions, useSiteData } from \"@deneb-ui/ui\";\n\nexport function StoreContactBar() {\n  const siteData = useSiteData();\n  const shop = siteData?.shop;\n  return (\n    <div className=\"p-6 rounded-2xl bg-[#0E1220] border border-slate-800 space-y-3\">\n      <h3 className=\"text-lg font-bold text-white\">Instant Concierge Support</h3>\n      <ContactActions\n        whatsapp={shop?.whatsapp}\n        phone={shop?.phone}\n        email={shop?.email}\n        address={shop?.address?.street}\n        variant=\"expanded\"\n        orientation=\"horizontal\"\n      />\n    </div>\n  );\n}\n```\n\n#### 9. `WhatsAppButton`\n**Import**: `import { WhatsAppButton } from \"@deneb-ui/ui\";`  \n**Category**: `Smart Commerce Actions`  \n**Description**: High-converting WhatsApp conversion launcher with pre-filled order or inquiry message templates.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `phoneNumber` | `string` | `required` | E.164 formatted telephone number without plus. |\n| `message` | `string` | `''` | Pre-filled WhatsApp message text. |\n| `variant` | `'solid' | 'outline' | 'floating'` | `'solid'` | Button visual variant. |\n| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Button sizing tier. |\n| `label` | `string` | `'Chat on WhatsApp'` | Action text. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { WhatsAppButton, useSiteData } from \"@deneb-ui/ui\";\n\nexport function InstantProductOrder({ title, price }: { title: string; price: number }) {\n  const siteData = useSiteData();\n  return (\n    <WhatsAppButton\n      phoneNumber={siteData?.shop?.whatsapp ?? \"94771234567\"}\n      message={`Hi! I would like to order the ${title} (Rs. ${price}). Is it currently available?`}\n      variant=\"solid\"\n      size=\"lg\"\n      label=\"Order via WhatsApp\"\n    />\n  );\n}\n```\n\n#### 10. `PhoneButton`\n**Import**: `import { PhoneButton } from \"@deneb-ui/ui\";`  \n**Category**: `Smart Commerce Actions`  \n**Description**: One-tap telephone dialer with international number formatting.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `phoneNumber` | `string` | `required` | Telephone number to dial. |\n| `label` | `string` | `'Call Now'` | Button label text. |\n| `variant` | `'solid' | 'outline' | 'minimal'` | `'solid'` | Button style. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { PhoneButton } from \"@deneb-ui/ui\";\n\nexport function TelephoneSupport({ phone }: { phone: string }) {\n  return <PhoneButton phoneNumber={phone} label=\"Call Atelier: +94 11 234 5678\" variant=\"outline\" size=\"md\" />;\n}\n```\n\n#### 11. `EmailButton`\n**Import**: `import { EmailButton } from \"@deneb-ui/ui\";`  \n**Category**: `Smart Commerce Actions`  \n**Description**: Pre-filled mailto trigger with automatic subject and body encoding.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `email` | `string` | `required` | Inquiry recipient email address. |\n| `subject` | `string` | `''` | Pre-filled email subject line. |\n| `label` | `string` | `'Email Us'` | Button label text. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { EmailButton } from \"@deneb-ui/ui\";\n\nexport function EmailConcierge({ email }: { email: string }) {\n  return (\n    <EmailButton\n      email={email}\n      subject=\"Bespoke Order Inquiry - Artisan Store\"\n      label=\"Send Email Inquiry\"\n      variant=\"outline\"\n    />\n  );\n}\n```\n\n#### 12. `FloatingContactWidget`\n**Import**: `import { FloatingContactWidget } from \"@deneb-ui/ui\";`  \n**Category**: `Smart Commerce Actions`  \n**Description**: Corner-docked interactive drawer presenting WhatsApp, Call, and Email triggers with zero layout shift.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `whatsapp` | `string` | `''` | WhatsApp contact number. |\n| `phone` | `string` | `''` | Direct phone number. |\n| `email` | `string` | `''` | Support email address. |\n| `position` | `'bottom-right' | 'bottom-left'` | `'bottom-right'` | Screen docking corner. |\n| `storeName` | `string` | `'Store Concierge'` | Title displayed on the widget popover. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { FloatingContactWidget, useSiteData } from \"@deneb-ui/ui\";\n\nexport function GlobalSupportWidget() {\n  const siteData = useSiteData();\n  return (\n    <FloatingContactWidget\n      whatsapp={siteData?.shop?.whatsapp}\n      phone={siteData?.shop?.phone}\n      email={siteData?.shop?.email}\n      position=\"bottom-right\"\n      storeName={siteData?.shop?.name ?? \"Artisan Footwear\"}\n    />\n  );\n}\n```\n\n\n### Location & Navigation (4 Components)\n\n#### 13. `LocationCard`\n**Import**: `import { LocationCard } from \"@deneb-ui/ui\";`  \n**Category**: `Location & Navigation`  \n**Description**: Flagship store address, city, hours, and direct directions button.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `'Flagship Store'` | Location name. |\n| `address` | `string` | `required` | Street address. |\n| `city` | `string` | `''` | City or province name. |\n| `googleMapsUrl` | `string` | `''` | Direct Google Maps URL. |\n| `hours` | `string` | `''` | Operating hours summary. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { LocationCard } from \"@deneb-ui/ui\";\n\nexport function StoreAddressCard() {\n  return (\n    <LocationCard\n      title=\"Colombo Flagship Store\"\n      address=\"42 Heritage Boulevard, Ward Place\"\n      city=\"Colombo 07, Sri Lanka\"\n      hours=\"Mon - Sat: 9:00 AM - 7:00 PM\"\n      googleMapsUrl=\"https://maps.google.com/?q=Colombo\"\n    />\n  );\n}\n```\n\n#### 14. `LocationLink`\n**Import**: `import { LocationLink } from \"@deneb-ui/ui\";`  \n**Category**: `Location & Navigation`  \n**Description**: Smart directions link opening Google Maps or Apple Maps.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `address` | `string` | `required` | Target destination address. |\n| `provider` | `'google' | 'apple'` | `'google'` | Map provider. |\n| `label` | `string` | `'Get Directions'` | Link text. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { LocationLink } from \"@deneb-ui/ui\";\n\nexport function MapDirectionsButton({ address }: { address: string }) {\n  return <LocationLink address={address} provider=\"google\" label=\"Open Google Maps \u2197\" />;\n}\n```\n\n#### 15. `MapEmbed`\n**Import**: `import { MapEmbed } from \"@deneb-ui/ui\";`  \n**Category**: `Location & Navigation`  \n**Description**: Responsive map iframe embed with rounded corners and zero layout shift.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `address` | `string` | `required` | Address string to center map. |\n| `height` | `string | number` | `'350px'` | Height of map container. |\n| `zoom` | `number` | `15` | Default map zoom level. |\n| `aspectRatio` | `string` | `'16/9'` | Aspect ratio. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { MapEmbed } from \"@deneb-ui/ui\";\n\nexport function EmbeddedMapSection({ address }: { address: string }) {\n  return <MapEmbed address={address} height={350} zoom={15} aspectRatio=\"16/9\" />;\n}\n```\n\n#### 16. `Address`\n**Import**: `import { Address } from \"@deneb-ui/ui\";`  \n**Category**: `Location & Navigation`  \n**Description**: Local SEO Schema.org microdata address formatter.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `street` | `string` | `required` | Street name and number. |\n| `city` | `string` | `required` | City or town. |\n| `region` | `string` | `''` | State or province. |\n| `postalCode` | `string` | `''` | Postal code. |\n| `country` | `string` | `''` | Country name. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Address, useSiteData } from \"@deneb-ui/ui\";\n\nexport function StructuredAddress() {\n  const siteData = useSiteData();\n  const a = siteData?.shop?.address;\n  return (\n    <Address\n      street={a?.street ?? \"42 Heritage Blvd\"}\n      city={a?.city ?? \"Colombo\"}\n      region={a?.region ?? \"Western Province\"}\n      postalCode={a?.postalCode ?? \"00700\"}\n      country={a?.country ?? \"Sri Lanka\"}\n    />\n  );\n}\n```\n\n\n### Social & Business (3 Components)\n\n#### 17. `BusinessHours`\n**Import**: `import { BusinessHours } from \"@deneb-ui/ui\";`  \n**Category**: `Social & Business`  \n**Description**: Live open/closed timetable with real-time open status indicators.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `schedule` | `Array<{ day: string; open: string; close: string }>` | `[]` | Weekly operating schedule. |\n| `showStatus` | `boolean` | `true` | Show live 'Open Now' or 'Closed' tag. |\n| `variant` | `'card' | 'list' | 'compact'` | `'card'` | Display format. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { BusinessHours, useSiteData } from \"@deneb-ui/ui\";\n\nexport function StoreHoursDisplay() {\n  const siteData = useSiteData();\n  return (\n    <BusinessHours\n      schedule={siteData?.content?.businessHours ?? [\n        { day: \"Monday - Friday\", open: \"09:00 AM\", close: \"07:00 PM\" },\n        { day: \"Saturday\", open: \"10:00 AM\", close: \"05:00 PM\" },\n        { day: \"Sunday\", open: \"Closed\", close: \"\" }\n      ]}\n      showStatus={true}\n      variant=\"card\"\n    />\n  );\n}\n```\n\n#### 18. `SocialLinks`\n**Import**: `import { SocialLinks } from \"@deneb-ui/ui\";`  \n**Category**: `Social & Business`  \n**Description**: Branded social media network icons with customizable layouts.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `links` | `Record<string, string>` | `{}` | Object with platform URLs (instagram, facebook, etc.). |\n| `variant` | `'icon' | 'pill' | 'colored'` | `'icon'` | Visual presentation. |\n| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Icon size. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { SocialLinks } from \"@deneb-ui/ui\";\n\nexport function SocialRow() {\n  return (\n    <SocialLinks\n      links={{\n        instagram: \"https://instagram.com/artisan\",\n        facebook: \"https://facebook.com/artisan\",\n        tiktok: \"https://tiktok.com/@artisan\"\n      }}\n      variant=\"pill\"\n      size=\"md\"\n    />\n  );\n}\n```\n\n#### 19. `SocialButton`\n**Import**: `import { SocialButton } from \"@deneb-ui/ui\";`  \n**Category**: `Social & Business`  \n**Description**: Single branded social channel follower trigger.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `platform` | `'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'x'` | `'instagram'` | Target platform. |\n| `url` | `string` | `required` | Profile destination URL. |\n| `label` | `string` | `''` | Optional custom label. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { SocialButton } from \"@deneb-ui/ui\";\n\nexport function InstagramFollow() {\n  return <SocialButton platform=\"instagram\" url=\"https://instagram.com/artisan\" label=\"Follow on Instagram\" />;\n}\n```\n\n\n### Storefront Sections (19 Components)\n\n#### 20. `Hero`\n**Import**: `import { Hero } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: High-conversion storefront hero showcase supporting Split, Centered, and Minimal layouts.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `layout` | `'split' | 'centered' | 'minimal'` | `'split'` | Hero visual composition. |\n| `title` | `string` | `required` | Main headline text. |\n| `description` | `string` | `''` | Sub-headline description text. |\n| `image` | `string` | `''` | Featured image asset URL. |\n| `badge` | `string` | `''` | Top announcement pill kicker. |\n| `primaryCta` | `{ label: string; href: string }` | `-` | Primary action button. |\n| `secondaryCta` | `{ label: string; href: string }` | `-` | Secondary action button. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Hero, useSiteData } from \"@deneb-ui/ui\";\n\nexport function MainHero() {\n  const siteData = useSiteData();\n  const hero = siteData?.content?.hero;\n  return (\n    <Hero\n      layout=\"split\"\n      title={hero?.title ?? \"Bespoke Footwear Engineered for Distinction\"}\n      description={hero?.subtitle ?? \"Micro-batch leather shoes crafted by fourth-generation artisans.\"}\n      badge={hero?.badge ?? \"New Season 2026\"}\n      image={hero?.image ?? \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"}\n      primaryCta={{ label: hero?.primaryCta ?? \"Shop Collection\", href: \"#products\" }}\n      secondaryCta={{ label: \"Our Heritage\", href: \"#about\" }}\n    />\n  );\n}\n```\n\n#### 21. `ProductCard`\n**Import**: `import { ProductCard } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: The primary commerce catalog card with pricing, compare-at discounts, star reviews, stock badges, and WhatsApp checkout.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `required` | Product name. |\n| `price` | `number` | `required` | Current retail price. |\n| `compareAtPrice` | `number` | `undefined` | Original price for strike-through discount. |\n| `currency` | `string` | `'$'` | Currency symbol prefix. |\n| `image` | `string` | `required` | Product photo URL. |\n| `category` | `string` | `''` | Category badge tag. |\n| `whatsappNumber` | `string` | `''` | WhatsApp merchant number for direct order. |\n| `itemPath` | `string` | `''` | Fivora visual editing marker (e.g. 'content.products.0'). |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ProductCard, useSiteData } from \"@deneb-ui/ui\";\n\nexport function ProductItemView({ product, index }: { product: any; index: number }) {\n  const siteData = useSiteData();\n  return (\n    <ProductCard\n      itemPath={`content.products.${index}`}\n      title={product.title}\n      price={product.price}\n      compareAtPrice={product.compareAtPrice}\n      currency={product.currency ?? \"Rs.\"}\n      image={product.image}\n      category={product.category}\n      badge={product.badge}\n      whatsappNumber={siteData?.shop?.whatsapp}\n    />\n  );\n}\n```\n\n#### 22. `ProductDetail`\n**Import**: `import { ProductDetail } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Elite single product showcase with multi-angle gallery, live size & color selectors, direct WhatsApp order CTA, and Fivora visual editing synchronization.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `product` | `ProductItem` | `required` | Comprehensive product record. |\n| `whatsappNumber` | `string` | `''` | WhatsApp target number. |\n| `showReviews` | `boolean` | `true` | Render customer review summary. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ProductDetail, useSiteData } from \"@deneb-ui/ui\";\n\nexport function SingleProductDetail({ product }: { product: any }) {\n  const siteData = useSiteData();\n  return (\n    <main className=\"max-w-6xl mx-auto px-4 py-12\">\n      <ProductDetail\n        product={product}\n        whatsappNumber={siteData?.shop?.whatsapp}\n        showReviews={true}\n      />\n    </main>\n  );\n}\n```\n\n#### 23. `ProductQuickView`\n**Import**: `import { ProductQuickView } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Instant lightbox inspection modal for products with thumbnail switcher, quantity counter, and 1-click purchase.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `product` | `ProductItem` | `required` | Product data object. |\n| `isOpen` | `boolean` | `false` | Modal open state. |\n| `onClose` | `() => void` | `required` | Close callback. |\n| `whatsappNumber` | `string` | `''` | WhatsApp order number. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ProductQuickView, useSiteData } from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport function QuickViewInspection({ product }: { product: any }) {\n  const [open, setOpen] = useState(false);\n  const siteData = useSiteData();\n  return (\n    <>\n      <button onClick={() => setOpen(true)} className=\"text-xs text-indigo-400 underline\">\n        Quick View\n      </button>\n      <ProductQuickView\n        product={product}\n        isOpen={open}\n        onClose={() => setOpen(false)}\n        whatsappNumber={siteData?.shop?.whatsapp}\n      />\n    </>\n  );\n}\n```\n\n#### 24. `ProductGrid`\n**Import**: `import { ProductGrid } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Responsive commerce catalog grid with category filter tabs and configurable columns per device.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `cols` | `1 | 2 | 3 | 4` | `3` | Desktop column count. |\n| `gap` | `'sm' | 'md' | 'lg'` | `'md'` | Grid cell spacing. |\n| `children` | `React.ReactNode` | `required` | List of ProductCard components. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ProductGrid, ProductCard, useProducts, useSiteData } from \"@deneb-ui/ui\";\n\nexport function StoreCatalog() {\n  const products = useProducts();\n  const siteData = useSiteData();\n\n  return (\n    <section id=\"products\" data-preview-list-path=\"content.products\">\n      <ProductGrid cols={3} gap=\"lg\">\n        {products.map((p, idx) => (\n          <ProductCard\n            key={p.id || idx}\n            itemPath={`content.products.${idx}`}\n            title={p.title}\n            price={p.price}\n            compareAtPrice={p.compareAtPrice}\n            currency={p.currency ?? \"$\"}\n            image={p.image}\n            whatsappNumber={siteData?.shop?.whatsapp}\n          />\n        ))}\n      </ProductGrid>\n    </section>\n  );\n}\n```\n\n#### 25. `CartDrawer`\n**Import**: `import { CartDrawer } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: High-converting slide-over shopping cart drawer with quantity steppers, free shipping progress bar, and 1-click WhatsApp order dispatch.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `whatsappNumber` | `string` | `required` | WhatsApp number to send completed order to. |\n| `storeName` | `string` | `'Store'` | Store title included in order message. |\n| `freeShippingThreshold` | `number` | `0` | Free shipping threshold amount. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { CartDrawer, useSiteData } from \"@deneb-ui/ui\";\n\nexport function StoreCartDrawer() {\n  const siteData = useSiteData();\n  return (\n    <CartDrawer\n      whatsappNumber={siteData?.shop?.whatsapp ?? \"94771234567\"}\n      storeName={siteData?.shop?.name ?? \"Artisan Boutique\"}\n      freeShippingThreshold={15000}\n    />\n  );\n}\n```\n\n#### 26. `FilterSidebar`\n**Import**: `import { FilterSidebar } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Faceted catalog filtering sidebar with category chips, price range slider, and size swatches.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `categories` | `string[]` | `[]` | Available category options. |\n| `priceRange` | `[number, number]` | `[0, 1000]` | Min and max price boundaries. |\n| `onFilterChange` | `(filters: any) => void` | `required` | Filter change event callback. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { FilterSidebar } from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport function CatalogFilters({ onUpdate }: { onUpdate: (f: any) => void }) {\n  return (\n    <FilterSidebar\n      categories={[\"All\", \"Formal\", \"Lifestyle\", \"Sneakers\", \"Boots\"]}\n      priceRange={[0, 50000]}\n      onFilterChange={onUpdate}\n    />\n  );\n}\n```\n\n#### 27. `CustomerReviews`\n**Import**: `import { CustomerReviews } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Social proof review showcase with aggregate star score, verified buyer tags, and rating filters.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `averageRating` | `number` | `5.0` | Overall star rating. |\n| `totalReviews` | `number` | `0` | Total customer count. |\n| `reviews` | `Array<ReviewItem>` | `[]` | List of review testimonials. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { CustomerReviews } from \"@deneb-ui/ui\";\n\nexport function ReviewsSection() {\n  return (\n    <CustomerReviews\n      averageRating={4.9}\n      totalReviews={84}\n      reviews={[\n        { id: \"1\", author: \"Kamal D.\", rating: 5, date: \"3 days ago\", comment: \"The leather quality and packaging were incredible.\", verified: true },\n        { id: \"2\", author: \"Nirosha F.\", rating: 5, date: \"1 week ago\", comment: \"Fast WhatsApp communication and perfect fit.\", verified: true }\n      ]}\n    />\n  );\n}\n```\n\n#### 28. `TrustBadges`\n**Import**: `import { TrustBadges } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Conversion-boosting security strip featuring Free Shipping, SSL Checkout, Warranty, and 30-Day Returns badges.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `layout` | `'row' | 'grid'` | `'row'` | Display arrangement. |\n| `badges` | `Array<TrustBadgeItem>` | `defaultBadges` | Custom badge definitions. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { TrustBadges } from \"@deneb-ui/ui\";\n\nexport function TrustSection() {\n  return (\n    <div className=\"max-w-7xl mx-auto px-4 py-8\">\n      <TrustBadges layout=\"row\" />\n    </div>\n  );\n}\n```\n\n#### 29. `StickyMobileBar`\n**Import**: `import { StickyMobileBar } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Sticky bottom checkout and WhatsApp action bar for mobile devices, boosting mobile conversion rates.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `whatsappNumber` | `string` | `required` | WhatsApp order telephone. |\n| `phone` | `string` | `''` | Direct phone call option. |\n| `primaryCtaText` | `string` | `'Order via WhatsApp'` | Action button label. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { StickyMobileBar, useSiteData } from \"@deneb-ui/ui\";\n\nexport function MobileActionBar() {\n  const siteData = useSiteData();\n  return (\n    <StickyMobileBar\n      whatsappNumber={siteData?.shop?.whatsapp}\n      phone={siteData?.shop?.phone}\n      primaryCtaText=\"Order on WhatsApp\"\n    />\n  );\n}\n```\n\n#### 30. `ServiceCard`\n**Import**: `import { ServiceCard } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Service offering card with duration, pricing, and direct booking triggers.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `required` | Service title. |\n| `price` | `number` | `required` | Starting price. |\n| `duration` | `string` | `''` | Service time duration. |\n| `description` | `string` | `''` | Service description. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ServiceCard } from \"@deneb-ui/ui\";\n\nexport function RestorationService() {\n  return (\n    <ServiceCard\n      title=\"Leather Conditioning & Resole\"\n      price={6500}\n      duration=\"48 Hours\"\n      description=\"Deep hydration with Saphir Medaille d'Or creams and Goodyear heel replacement.\"\n    />\n  );\n}\n```\n\n#### 31. `PricingCard`\n**Import**: `import { PricingCard } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Tier comparison card with feature checklists and popular glow styling.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `tier` | `string` | `required` | Package name. |\n| `price` | `number | string` | `required` | Price tag. |\n| `features` | `string[]` | `[]` | Checklist items. |\n| `isPopular` | `boolean` | `false` | Highlight card. |\n| `ctaText` | `string` | `'Choose Plan'` | Button text. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { PricingCard } from \"@deneb-ui/ui\";\n\nexport function VipClubCard() {\n  return (\n    <PricingCard\n      tier=\"Atelier Patron\"\n      price=\"Rs. 20,000 / yr\"\n      features={[\n        \"Unlimited annual leather re-polishing\",\n        \"Priority access to bespoke releases\",\n        \"Free cedar shoe trees with every order\"\n      ]}\n      isPopular={true}\n      ctaText=\"Join Atelier Club\"\n    />\n  );\n}\n```\n\n#### 32. `TestimonialCard`\n**Import**: `import { TestimonialCard } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Customer review card with star ratings, quote body, and avatar.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `name` | `string` | `required` | Client name. |\n| `role` | `string` | `''` | Job title or city. |\n| `content` | `string` | `required` | Testimonial text. |\n| `rating` | `number` | `5` | Star score. |\n| `avatar` | `string` | `''` | Profile picture URL. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { TestimonialCard } from \"@deneb-ui/ui\";\n\nexport function ClientQuote() {\n  return (\n    <TestimonialCard\n      name=\"Malik Perera\"\n      role=\"Architect, Colombo\"\n      content=\"The craftsmanship on these Oxfords rivals anything from Northampton at a fraction of the cost.\"\n      rating={5}\n      avatar=\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d\"\n    />\n  );\n}\n```\n\n#### 33. `FAQAccordion`\n**Import**: `import { FAQAccordion } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Expandable FAQ accordion with smooth animations and accessibility.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `items` | `Array<{ question: string; answer: string }>` | `[]` | Questions and answers. |\n| `allowMultiple` | `boolean` | `false` | Allow multiple open items. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { FAQAccordion } from \"@deneb-ui/ui\";\n\nexport function StoreFAQ() {\n  return (\n    <FAQAccordion\n      items={[\n        { question: \"How do I care for full-grain leather?\", answer: \"Apply wax-based shoe cream monthly and store with cedar shoe trees.\" },\n        { question: \"What is your delivery timeframe?\", answer: \"Colombo orders deliver next business day; islandwide delivers in 2-3 days.\" }\n      ]}\n    />\n  );\n}\n```\n\n#### 34. `AnnouncementBar`\n**Import**: `import { AnnouncementBar } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Dismissible header announcement ticker with CTA links.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `message` | `string` | `required` | Announcement text. |\n| `linkText` | `string` | `''` | CTA link label. |\n| `href` | `string` | `''` | CTA destination URL. |\n| `dismissible` | `boolean` | `true` | Show close button. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { AnnouncementBar } from \"@deneb-ui/ui\";\n\nexport function HeaderAnnouncement() {\n  return (\n    <AnnouncementBar\n      message=\"Free islandwide express delivery on orders over Rs. 15,000\"\n      linkText=\"Shop Collection\"\n      href=\"#products\"\n      dismissible={true}\n    />\n  );\n}\n```\n\n#### 35. `CategoryPills`\n**Import**: `import { CategoryPills } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Horizontal catalog filter pills for instant category switching.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `categories` | `string[]` | `[]` | Category names. |\n| `activeCategory` | `string` | `'All'` | Selected category. |\n| `onSelect` | `(category: string) => void` | `required` | Selection callback. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { CategoryPills } from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport function CategoryBar() {\n  const [active, setActive] = useState(\"All\");\n  return (\n    <CategoryPills\n      categories={[\"All\", \"Formal\", \"Loafers\", \"Boots\", \"Sneakers\"]}\n      activeCategory={active}\n      onSelect={setActive}\n    />\n  );\n}\n```\n\n#### 36. `ContactForm`\n**Import**: `import { ContactForm } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Direct customer inquiry form with input validation and zero SMTP config.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `recipientEmail` | `string` | `''` | Destination email. |\n| `whatsappFallback` | `string` | `''` | WhatsApp fallback number. |\n| `submitLabel` | `string` | `'Send Message'` | Submit button text. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ContactForm, useSiteData } from \"@deneb-ui/ui\";\n\nexport function SupportForm() {\n  const siteData = useSiteData();\n  return (\n    <ContactForm\n      recipientEmail={siteData?.shop?.email}\n      whatsappFallback={siteData?.shop?.whatsapp}\n      submitLabel=\"Send Message to Artisan\"\n    />\n  );\n}\n```\n\n#### 37. `Navbar`\n**Import**: `import { Navbar } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Top header navigation bar with brand name, navigation links, and mobile drawer menu.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `brandName` | `string` | `required` | Brand or store title. |\n| `links` | `Array<{ label: string; href: string }>` | `[]` | Navigation menu items. |\n| `logoUrl` | `string` | `''` | Brand logo asset URL. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Navbar, useSiteData } from \"@deneb-ui/ui\";\n\nexport function HeaderNav() {\n  const siteData = useSiteData();\n  return (\n    <Navbar\n      brandName={siteData?.shop?.name ?? \"Artisan Boutique\"}\n      links={[\n        { label: \"Home\", href: \"/\" },\n        { label: \"Collection\", href: \"#products\" },\n        { label: \"Reviews\", href: \"#reviews\" },\n        { label: \"Contact\", href: \"#contact\" }\n      ]}\n    />\n  );\n}\n```\n\n#### 38. `Footer`\n**Import**: `import { Footer } from \"@deneb-ui/ui\";`  \n**Category**: `Storefront Sections`  \n**Description**: Multi-column footer with quick navigation links, store summary, and copyright notice.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `brandName` | `string` | `required` | Brand name. |\n| `copyright` | `string` | `''` | Copyright notice text. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { Footer, useSiteData } from \"@deneb-ui/ui\";\n\nexport function SiteFooter() {\n  const siteData = useSiteData();\n  return (\n    <Footer\n      brandName={siteData?.shop?.name ?? \"Artisan Boutique\"}\n      copyright={`(c) ${new Date().getFullYear()} ${siteData?.shop?.name ?? \"Artisan Boutique\"}. All rights reserved.`}\n    />\n  );\n}\n```\n\n\n### Data & Theme Engine (2 Components)\n\n#### 39. `SiteDataProvider`\n**Import**: `import { SiteDataProvider } from \"@deneb-ui/ui\";`  \n**Category**: `Data & Theme Engine`  \n**Description**: Central headless state provider managing siteData, products, cart, and postMessage visual click-to-edit synchronization.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `initialSiteData` | `SiteData` | `required` | Initial JSON seed data loaded from src/data/site-data.json. |\n| `children` | `React.ReactNode` | `required` | App component tree. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { SiteDataProvider, CartProvider } from \"@deneb-ui/ui\";\nimport initialSiteData from \"@/data/site-data.json\";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          <CartProvider>\n            {children}\n          </CartProvider>\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}\n```\n\n#### 40. `ThemeStyles`\n**Import**: `import { ThemeStyles } from \"@deneb-ui/ui\";`  \n**Category**: `Data & Theme Engine`  \n**Description**: Dynamic CSS variable injector resolving primary accents, backgrounds, glows, and typography tokens.\n\n##### Props Table\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `theme` | `ThemeTokens` | `required` | Theme configuration object. |\n\n##### Copy-Paste Usage Example\n```tsx\nimport { ThemeStyles } from \"@deneb-ui/ui\";\nimport initialSiteData from \"@/data/site-data.json\";\n\nexport function ThemeInjector() {\n  return <ThemeStyles theme={initialSiteData.theme} />;\n}\n```\n\n\n---\n\n## 6. Complete Production Storefront Architecture Examples\n\n### 6.1 Root Layout Setup (`src/app/layout.tsx`)\n```tsx\nimport \"./globals.css\";\nimport { SiteDataProvider, ThemeStyles, ResponsiveBaseStyles, CartProvider } from \"@deneb-ui/ui\";\nimport initialSiteData from \"@/data/site-data.json\";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\" className=\"scroll-smooth\">\n      <head>\n        <ThemeStyles theme={initialSiteData.theme} />\n        <ResponsiveBaseStyles />\n      </head>\n      <body className=\"bg-[#090D1A] text-slate-100 antialiased min-h-screen\">\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          <CartProvider>\n            {children}\n          </CartProvider>\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}\n```\n\n### 6.2 Main Storefront Page (`src/app/page.tsx`)\n```tsx\n\"use client\";\n\nimport {\n  useSiteData,\n  useProducts,\n  Navbar,\n  Footer,\n  Hero,\n  ProductGrid,\n  ProductCard,\n  CartDrawer,\n  FilterSidebar,\n  CustomerReviews,\n  TrustBadges,\n  StickyMobileBar,\n  BusinessHours,\n  ContactActions,\n  AnnouncementBar\n} from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport default function HomePage() {\n  const siteData = useSiteData();\n  const products = useProducts();\n  const content = siteData?.content ?? {};\n  const [activeCategory, setActiveCategory] = useState(\"All\");\n\n  const filteredProducts = activeCategory === \"All\"\n    ? products\n    : products.filter(p => p.category === activeCategory);\n\n  return (\n    <div className=\"flex flex-col min-h-screen\">\n      {/* Top Announcement */}\n      <AnnouncementBar\n        message=\"Free express delivery on all orders over $100\"\n        linkText=\"Shop Now\"\n        href=\"#products\"\n      />\n\n      {/* Header Navigation */}\n      <Navbar\n        brandName={siteData?.shop?.name ?? \"Artisan Store\"}\n        links={[\n          { label: \"Home\", href: \"/\" },\n          { label: \"Products\", href: \"#products\" },\n          { label: \"Reviews\", href: \"#reviews\" },\n          { label: \"Contact\", href: \"#contact\" }\n        ]}\n      />\n\n      {/* Hero Showcase */}\n      <Hero\n        layout=\"split\"\n        title={content?.hero?.title ?? \"Bespoke Footwear Engineered for Distinction\"}\n        description={content?.hero?.subtitle ?? \"Handcrafted micro-batch leather shoes.\"}\n        image={content?.hero?.image ?? \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"}\n      />\n\n      {/* Trust & Guarantee Strip */}\n      <div className=\"max-w-7xl mx-auto px-4 py-8 w-full\">\n        <TrustBadges />\n      </div>\n\n      {/* Commerce Catalog with Filter Sidebar */}\n      <section id=\"products\" className=\"max-w-7xl mx-auto px-4 py-16 w-full space-y-8\">\n        <div className=\"text-center space-y-3\">\n          <h2 className=\"text-3xl font-bold text-white tracking-tight\">Curated Collection</h2>\n          <p className=\"text-sm text-slate-400\">Discover handpicked styles designed to last.</p>\n        </div>\n\n        <div className=\"grid grid-cols-1 lg:grid-cols-4 gap-8 items-start\">\n          <FilterSidebar\n            categories={[\"All\", \"Running\", \"Lifestyle\", \"Formal\"]}\n            onFilterChange={(f) => setActiveCategory(f.selectedCategories[0] || \"All\")}\n          />\n\n          <div className=\"lg:col-span-3\">\n            <ProductGrid cols={3} gap=\"lg\">\n              {filteredProducts.map((product, idx) => (\n                <ProductCard\n                  key={product.id || idx}\n                  title={product.title}\n                  price={product.price}\n                  compareAtPrice={product.compareAtPrice}\n                  currency={product.currency ?? \"$\"}\n                  image={product.image}\n                  whatsappNumber={siteData?.shop?.whatsapp}\n                />\n              ))}\n            </ProductGrid>\n          </div>\n        </div>\n      </section>\n\n      {/* Reviews & Social Proof */}\n      <section id=\"reviews\" className=\"bg-[#0C0F1A] py-16 border-y border-slate-800/60\">\n        <div className=\"max-w-7xl mx-auto px-4\">\n          <CustomerReviews />\n        </div>\n      </section>\n\n      {/* Business Hours & Support */}\n      <section id=\"contact\" className=\"max-w-7xl mx-auto px-4 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8\">\n        <BusinessHours schedule={content?.businessHours} />\n        <div className=\"p-8 rounded-2xl border border-slate-800 bg-[#0E1220] flex flex-col justify-center space-y-4\">\n          <h3 className=\"text-xl font-bold text-white\">Instant Concierge Support</h3>\n          <p className=\"text-sm text-slate-400\">Order directly with our personal shoppers via WhatsApp or phone.</p>\n          <ContactActions\n            whatsapp={siteData?.shop?.whatsapp}\n            phone={siteData?.shop?.phone}\n            email={siteData?.shop?.email}\n          />\n        </div>\n      </section>\n\n      {/* Cart Drawer */}\n      <CartDrawer\n        whatsappNumber={siteData?.shop?.whatsapp ?? \"15550192834\"}\n        storeName={siteData?.shop?.name ?? \"Artisan Store\"}\n      />\n\n      {/* Sticky Mobile Bar */}\n      <StickyMobileBar\n        whatsappNumber={siteData?.shop?.whatsapp}\n        phone={siteData?.shop?.phone}\n      />\n\n      {/* Footer */}\n      <Footer\n        brandName={siteData?.shop?.name ?? \"Artisan Store\"}\n        copyright=\"(c) 2026 Artisan Store. All rights reserved.\"\n      />\n    </div>\n  );\n}\n```\n\n### 6.3 Static Route for Dynamic Product Pages (`src/app/products/[id]/page.tsx`)\n```tsx\nimport initialSiteData from \"@/data/site-data.json\";\nimport { ProductDetail } from \"@deneb-ui/ui\";\n\n// REQUIRED FOR STATIC EXPORT:\nexport function generateStaticParams() {\n  const products = initialSiteData.content?.products || [];\n  return products.map((p) => ({ id: p.id }));\n}\n\nexport default async function ProductPage({\n  params,\n}: {\n  params: Promise<{ id: string }>;\n}) {\n  const { id } = await params;\n  const products = initialSiteData.content?.products || [];\n  const product = products.find((p) => p.id === id) || products[0];\n\n  return (\n    <main className=\"max-w-6xl mx-auto px-4 py-12\">\n      <ProductDetail product={product} />\n    </main>\n  );\n}\n```\n\n---\n\n## 7. CLI Tooling & Validation Workflow\n\nBefore submitting your template or testing in the local studio:\n1. **Run Local Visual Editor Simulation**:\n   ```bash\n   npx @deneb-ui/cli lab .\n   ```\n   This spins up the Fivora Merchant Studio simulation canvas on `http://localhost:4300`.\n2. **Run Strict Preflight Validation**:\n   ```bash\n   npx @deneb-ui/cli validate .\n   ```\n   Checks static export conformance, manifest tokens, and DOM preview markers.\n3. **Generate Certified Submission Archive**:\n   ```bash\n   npx @deneb-ui/cli validate-and-zip .\n   ```\n   Outputs a certified `fivora-template.zip` archive ready for upload to the Fivora Developer Portal.\n\n---\n\n## 8. Step-by-Step AI Conversion Workflow\n\nWhen using an AI assistant (ChatGPT, Claude, Cursor, Antigravity) to convert an existing storefront into a Fivora template:\n\n1. **Step 1: Content Extraction**:\n   Extract all static store text, photos, categories, and products into `src/data/site-data.json`.\n2. **Step 2: Component Replacement**:\n   Replace custom buttons, cards, headers, grids, drawers, reviews, and filters with the corresponding `@deneb-ui/ui` components from the Master Catalog above.\n3. **Step 3: Attach Visual Markers**:\n   Add `data-preview-field-path`, `data-preview-list-path`, and `data-preview-item-path` to all editable text and lists.\n4. **Step 4: Dynamic State Binding**:\n   Replace static hardcoded data with `useProducts()`, `useSiteData()`, or `siteData.content.*`.\n5. **Step 5: Static Export Validation**:\n   Ensure `output: 'export'` in `next.config.ts`, `generateStaticParams()` on all dynamic `[id]` pages, and no server-side secrets.\n6. **Step 6: Preflight & Package**:\n   ```bash\n   npx @deneb-ui/cli validate\n   npx @deneb-ui/cli package\n   ```\n";

  const SAFE_AI_MASTER_PROMPT = `IMPORTANT — this rule supersedes any older dynamic product-route example below:

- Catalog price amounts MUST be JSON numbers (for example, \`price: 1000\`) and editorSchema price fields MUST use \`type: "number"\`.
- Keep currency as separate text (for example, \`currency: "LKR"\` or \`currencySymbol: "Rs."\`). NEVER store \`"Rs. 1000"\` in the numeric price field.
- Static-export storefronts MUST export src/app/products/detail/page.tsx.
- That page should render <PlatformProductDetail /> from @deneb-ui/ui.
- Product cards MUST use platformProductDetailHref(product.id), which produces /products/detail/?id=PRODUCT_ID.
- NEVER link merchant-managed products to /products/\${product.id}; products created after build time will 404.
- Use PlatformProductDetail.renderProduct or usePlatformProductDetail() when the template needs a custom design.
- Next.js <Link> and useRouter() apply next.config basePath automatically. Pass logical routes directly, such as router.push(pageRoute(pageKey)). NEVER use router.push(withBasePath(...)), router.replace(withBasePath(...)), or <Link href={withBasePath(...)}>; reserve withBasePath() for local asset URLs and direct window.location navigation.

${AI_MASTER_PROMPT}`;

  const handleCopyPage = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(SAFE_AI_MASTER_PROMPT);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = SAFE_AI_MASTER_PROMPT;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy AI prompt:', err);
    }
  };

  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Architecture & Stack' },
    { id: 'pathways', title: 'Choose Setup Pathway' },
    { id: 'conversion-steps', title: 'Convert Existing Frontend' },
    { id: 'visual-markers', title: 'Visual Marker Rules' },
    { id: 'platform-contract', title: 'Platform Features & Additional Pages' },
    { id: 'component-catalog', title: 'All 40 Components & Props' },
    { id: 'full-templates', title: 'Complete Storefront Example' },
    { id: 'standard-vs-premium', title: 'Standard vs. Premium' },
    { id: 'testing-lab', title: 'Local Visual Lab & Validation' },
    { id: 'packaging', title: 'Packaging & Upload' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  return (
    <div suppressHydrationWarning className="flex w-full min-h-full">
      <div ref={contentRef} className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/introduction" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">Set Up Fivora</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Set Up Fivora Templates
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1 shadow-[0_0_12px_rgba(129,140,248,0.2)]">
              <DenebStarIcon className="w-2.5 h-2.5" />
              v2.0 Spec
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The definitive developer guide to authoring storefront templates for <strong className="text-white">Fivora</strong> using the <strong className="text-white">DENEB UI</strong> ecosystem. Learn how to build new templates or convert an existing Next.js frontend into a fully editable visual storefront.
          </p>
        </div>

        {/* Quick AI Prompt Copy Hero Box */}
        <div data-no-copy className="p-4 sm:p-5 rounded-2xl border border-[#6366F1]/30 bg-gradient-to-r from-[#6366F1]/10 via-[#0A0D17] to-[#818CF8]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>Convert Existing Template with AI in Seconds</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl">
              Copy the exhaustive DENEB UI v2.0 specification—including installation, architecture, visual editing rules, and complete code examples & props for all 40 components—directly into <strong className="text-white">ChatGPT, Claude, Cursor, or Antigravity</strong> to convert or generate your storefront template instantly.
            </p>
          </div>
          <button
            onClick={handleCopyPage}
            className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'AI Prompt & Guide Copied!' : 'Copy AI Prompt & Guide'}</span>
          </button>
        </div>

        {/* Architecture & Stack Overview */}
        <section id="overview" className="space-y-5">
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/25">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">The Fivora Developer Stack</h2>
                <p className="text-xs text-[#94A3B8]">Understanding the relationship between Fivora, DENEB UI, and your Next.js storefront.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              A <strong className="text-white">Fivora Template</strong> is a modern Next.js static storefront. When a merchant purchases your template in Fivora, they can click directly on any headline, description, product card, or photo in a live iframe preview to customize it in real time, or use Fivora&apos;s AI assistant to restyle the site.
            </p>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 dark:border-[#23283B] dark:bg-[#0E1220] font-mono text-xs text-[#94A3B8] overflow-x-auto space-y-1">
              <div className="text-[#818CF8] font-bold">┌── Fivora Merchant Application / Website Agent</div>
              <div>│   └── Visual click-to-edit canvas (Iframe Parent)</div>
              <div>▼   (Bidirectional postMessage handshake: FIVORA_PREVIEW_READY)</div>
              <div className="text-emerald-400 font-bold">├── Your Next.js Storefront (Iframe Child)</div>
              <div>│   ├── @deneb-ui/ui (SiteDataProvider + Click-to-Edit Primitives)</div>
              <div>│   ├── src/data/site-data.json (Single source of truth)</div>
              <div>│   └── fivora-template.json (Manifest v2 specification)</div>
              <div className="text-indigo-400 font-bold">└── @deneb-ui/cli (deneb lab, deneb validate, deneb package)</div>
            </div>

            {/* Official Package Warning Callout */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-amber-200/90 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Why You Must Use the Official DENEB Packages</span>
              </div>
              <p className="leading-relaxed">
                Do <strong>NOT</strong> attempt to handwrite custom <code className="bg-black/40 px-1 py-0.5 rounded text-amber-100 font-mono">window.addEventListener(&apos;message&apos;)</code> listeners or custom DOM marker attributes. Handcrafted protocols fail Fivora origin verification, drop rapid keystrokes during live editing, and will be automatically rejected by the preflight ingest validator.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Pathway Selector */}
        <section id="pathways" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Choose Your Setup Pathway
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Select whether you are converting an existing running React/Next.js frontend or scaffolding a new project from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActivePathway('convert')}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                activePathway === 'convert'
                  ? 'border-indigo-600 bg-indigo-50/70 text-slate-900 dark:border-[#818CF8] dark:bg-[#121625] dark:text-white shadow-md dark:shadow-[0_0_24px_rgba(129,140,248,0.2)]'
                  : 'border-slate-200 bg-white hover:border-indigo-400 dark:border-[#23283B] dark:bg-[#0A0D17] dark:hover:border-[#818CF8]/40 shadow-xs'
              }`}
            >
              {activePathway === 'convert' && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                  Active View
                </span>
              )}
              <div className="space-y-2">
                <div className="p-2 w-fit rounded-xl bg-[#818CF8]/15 text-[#818CF8]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Convert Existing Frontend</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  You already have a running Next.js / Tailwind storefront and want to integrate DENEB UI and wire it for Fivora live visual editing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-[#23283B] text-xs font-semibold text-[#818CF8] flex items-center gap-1">
                <span>View Step-by-Step Conversion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => setActivePathway('scratch')}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                activePathway === 'scratch'
                  ? 'border-indigo-600 bg-indigo-50/70 text-slate-900 dark:border-[#818CF8] dark:bg-[#121625] dark:text-white shadow-md dark:shadow-[0_0_24px_rgba(129,140,248,0.2)]'
                  : 'border-slate-200 bg-white hover:border-indigo-400 dark:border-[#23283B] dark:bg-[#0A0D17] dark:hover:border-[#818CF8]/40 shadow-xs'
              }`}
            >
              {activePathway === 'scratch' && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                  Active View
                </span>
              )}
              <div className="space-y-2">
                <div className="p-2 w-fit rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Start Fresh (Greenfield)</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Scaffold a complete, pre-configured Next.js template in seconds using the official DENEB scaffolding CLI.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-[#23283B] text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span>View Scaffolding Command</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </section>

        {/* Greenfield Quick Section (Shown when scratch selected) */}
        {activePathway === 'scratch' && (
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-[#0A0D17] to-emerald-950/20 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Scaffolding a New Fivora Template</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              Run this single command in your terminal. It creates a Next.js App Router project with pre-configured <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">fivora-template.json</code>, <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">site-data.json</code>, and DENEB smart action components:
            </p>
            <CodeBlock code="npx @deneb-ui/create-template my-store" language="bash" />
            <p className="text-xs text-[#94A3B8]">
              Once scaffolded, run <code className="text-[#818CF8] font-mono">cd my-store && npm install && npm run dev</code> to launch your storefront.
            </p>
          </div>
        )}

        {/* Step-by-Step Conversion Guide (Core Focus) */}
        <section id="conversion-steps" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Converting an Existing Running Frontend
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Follow these sequential steps to convert your existing React / Next.js frontend into a fully compliant Fivora template, or use the 1-command automated converter.
            </p>
          </div>

          {/* Automated Conversion Quick Callout */}
          <div className="p-5 rounded-2xl border border-[#818CF8]/30 bg-gradient-to-r from-[#818CF8]/10 via-[#0A0D17] to-[#818CF8]/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>Instant 1-Command Auto-Conversion with <code className="text-[#A5B4FC] font-mono">deneb init</code> (Recommended)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              If your storefront is already built with <strong className="text-white">shadcn/ui</strong>, <strong className="text-white">HeroUI</strong>, or <strong className="text-white">Tailwind CSS</strong>, you do not have to write markers manually. Simply run <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">npx @deneb-ui/cli init</code>. The DENEB converter engine automatically detects your UI framework, mounts <code className="text-white font-mono">SiteDataProvider</code> in your root layout, extracts all hardcoded text, images, and search placeholders into <code className="text-white font-mono">site-data.json</code>, and instruments your JSX elements with <code className="text-white font-mono">data-preview-field-path</code> markers in seconds!
            </p>
            <CodeBlock code="npx @deneb-ui/cli init" language="bash" />
          </div>

          {/* STEP 1 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                1
              </span>
              <h3 className="text-base font-bold text-white">Install Official Packages</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Install the runtime visual editing framework in <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">dependencies</code> and the CLI tools in <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">devDependencies</code>:
            </p>
            <CodeBlock
              code={`# Runtime framework:\nnpm install @deneb-ui/ui\n\n# CLI validator & packaging tools:\nnpm install -D @deneb-ui/cli`}
              language="bash"
            />
            <p className="text-xs text-[#94A3B8]">
              Next, add the authoring and validation scripts to your <code className="text-[#818CF8] font-mono">package.json</code>:
            </p>
            <CodeBlock
              filename="package.json"
              code={`"scripts": {\n  "dev": "next dev",\n  "build": "next build",\n  "lab": "deneb lab .",\n  "validate": "deneb validate .",\n  "zip": "deneb zip .",\n  "package:template": "deneb package .",\n  "update:deneb": "deneb update"\n}`}
              language="json"
            />
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                2
              </span>
              <h3 className="text-base font-bold text-white">Create Template Manifest (<code className="text-[#818CF8] font-mono">fivora-template.json</code>)</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Place <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">fivora-template.json</code> at the root of your repository. This is the contract Fivora reads to know your framework version, declared pages, and editing rules:
            </p>
            <CodeBlock
              filename="fivora-template.json"
              code={`{\n  "framework": "nextjs-static-export",\n  "version": 2,\n  "visualEditing": {\n    "contractVersion": 1,\n    "mode": "strict"\n  },\n  "siteDataFile": "src/data/site-data.json",\n  "outputDirectory": "out",\n  "installCommand": "npm install",\n  "buildCommand": "npm run build",\n  "basePathEnvVar": "NEXT_PUBLIC_SITE_BASE_PATH",\n  "pages": [\n    { "id": "home", "label": "Home", "route": "/", "required": true },\n    { "id": "products", "label": "Products", "route": "/products" },\n    { "id": "about", "label": "About Us", "route": "/about" },\n    { "id": "contact", "label": "Contact", "route": "/contact", "required": true }\n  ]\n}`}
              language="json"
            />
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                3
              </span>
              <h3 className="text-base font-bold text-white">Configure Static Export & Base Path</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Fivora storefronts are hosted as static exports with dynamic base paths in merchant subdomains. Configure <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">next.config.ts</code>:
            </p>
            <CodeBlock
              filename="next.config.ts"
              code={`import type { NextConfig } from "next";\n\nconst basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || '';\n\nconst nextConfig: NextConfig = {\n  output: 'export',\n  basePath: basePath ? basePath : undefined,\n  assetPrefix: basePath ? \`\${basePath}/\` : undefined,\n  images: {\n    unoptimized: true,\n  },\n};\n\nexport default nextConfig;`}
              language="typescript"
            />
            <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs sm:text-sm text-amber-100 leading-relaxed">
              Next.js <code className="font-mono">&lt;Link&gt;</code> and{' '}
              <code className="font-mono">useRouter()</code> apply{' '}
              <code className="font-mono">basePath</code> automatically. Use{' '}
              <code className="font-mono">router.push(pageRoute(pageKey))</code>, never{' '}
              <code className="font-mono">router.push(withBasePath(...))</code>. Reserve{' '}
              <code className="font-mono">withBasePath()</code> for local asset URLs and direct{' '}
              <code className="font-mono">window.location</code> navigation.
            </div>
          </div>

          {/* STEP 4 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                4
              </span>
              <h3 className="text-base font-bold text-white">Centralize Content in <code className="text-[#818CF8] font-mono">src/data/site-data.json</code></h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Extract all hardcoded text, demo products, business contact details, and images into <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">src/data/site-data.json</code>. This file represents the merchant&apos;s initial data:
            </p>
            <CodeBlock
              filename="src/data/site-data.json"
              code={`{\n  "project": {\n    "id": "demo-store",\n    "name": "Nova Storefront",\n    "businessEmail": "merchant@example.com"\n  },\n  "requirements": {\n    "requiredPages": ["home", "products", "about", "contact"]\n  },\n  "content": {\n    "common": {\n      "websiteTitle": "Nova Store",\n      "shortDescription": "Engineered for modern living.",\n      "business": {\n        "phone": "+1 (555) 482-9012",\n        "whatsapp": "15554829012",\n        "email": "hello@novastore.com",\n        "location": {\n          "address": "742 Evergreen Celestial Way",\n          "city": "San Francisco",\n          "country": "USA"\n        }\n      }\n    },\n    "home": {\n      "heroBadge": "New Arrivals",\n      "heroTitle": "Engineered for Modern Web Commerce",\n      "heroSubtitle": "Everything you need to craft high-converting storefronts.",\n      "heroCtaText": "Explore Products"\n    }\n  }\n}`}
              language="json"
            />
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-xs sm:text-sm text-emerald-100 leading-relaxed">
              <strong>Commerce price contract:</strong> store the amount as a JSON number,
              such as <code className="font-mono">price: 1000</code>, and declare its
              editor field as <code className="font-mono">type: &quot;number&quot;</code>.
              Keep <code className="font-mono">currency: &quot;LKR&quot;</code> or{' '}
              <code className="font-mono">currencySymbol: &quot;Rs.&quot;</code> as separate
              text. This preserves numeric price filtering, sorting, and totals.
            </div>
          </div>

          {/* STEP 5 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                5
              </span>
              <h3 className="text-base font-bold text-white">Mount the Live Preview Bridge (<code className="text-[#818CF8] font-mono">SiteDataProvider</code>)</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Wrap your root layout with <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">SiteDataProvider</code> from <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">@deneb-ui/ui</code>. This automatically establishes the bidirectional handshake with the Fivora live editor:
            </p>
            <CodeBlock
              filename="src/app/layout.tsx"
              code={`import { SiteDataProvider } from '@deneb-ui/ui';\nimport initialSiteData from '@/data/site-data.json';\nimport '@/app/globals.css';\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en" suppressHydrationWarning>\n      <body suppressHydrationWarning>\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          {children}\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}`}
              language="tsx"
            />
          </div>

          {/* STEP 6 */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                6
              </span>
              <h3 className="text-base font-bold text-white">Wire Visual Markers & Commerce Primitives</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Connect your existing components to live data using <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">useSiteData()</code> and visual editing markers:
            </p>

            {/* Before vs After Tab */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#CBD5E1]">
                Before vs. After Conversion:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/10 space-y-2">
                  <div className="text-xs font-bold text-rose-400">❌ Before: Static Hardcoded JSX</div>
                  <pre className="text-[11px] font-mono text-rose-200/80 leading-relaxed overflow-x-auto">
{`<section className="hero">
  <h1>Engineered for Living</h1>
  <p>Minimalist collection.</p>
  <a href="tel:+15554829012">Call Us</a>
</section>`}
                  </pre>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 space-y-2">
                  <div className="text-xs font-bold text-emerald-400">✔️ After: Fivora-Enabled DENEB UI</div>
                  <pre className="text-[11px] font-mono text-emerald-200/80 leading-relaxed overflow-x-auto">
{`<section className="hero">
  <h1 data-preview-field-path="home.heroTitle">
    {home.heroTitle}
  </h1>
  <p data-preview-field-path="home.heroSubtitle">
    {home.heroSubtitle}
  </p>
  <ContactActions
    phone={business.phone}
    whatsapp={business.whatsapp}
    email={business.email}
  />
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Marker Rules */}
        <section id="visual-markers" className="space-y-6 pt-6 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#818CF8]" />
              <span>Visual Marker Rules for the Live Editor</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Fivora&apos;s live editor highlights elements and focuses sidebar controls based on these DOM data attributes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">1. Route Marker</h4>
              <p className="text-xs text-[#94A3B8]">
                Place <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-page-key=&quot;&lt;id&gt;&quot;</code> on the root <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">&lt;main&gt;</code> of each page:
              </p>
              <CodeBlock code={`<main data-preview-page-key="home">...</main>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">2. Leaf Text / Media</h4>
              <p className="text-xs text-[#94A3B8]">
                Place <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-field-path</code> on the leaf element (<code className="text-white font-mono">h1</code>, <code className="text-white font-mono">p</code>, <code className="text-white font-mono">img</code>), never on a broad <code className="text-white font-mono">div</code>:
              </p>
              <CodeBlock code={`<h2 data-preview-field-path="home.title">{home.title}</h2>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">3. Repeatable Lists</h4>
              <p className="text-xs text-[#94A3B8]">
                Wrap collections with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-list-path</code>. <strong>Must stay mounted even if array is empty</strong>:
              </p>
              <CodeBlock code={`<div data-preview-list-path="home.products">\n  {products.map((p, i) => (\n    <div key={i} data-preview-item-path={\`home.products[\${i}]\`}>\n      <span data-preview-field-path={\`home.products[\${i}].name\`}>{p.name}</span>\n    </div>\n  ))}\n</div>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">4. Decorative Elements</h4>
              <p className="text-xs text-[#94A3B8]">
                Mark non-editable background icons or dividers with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-static</code>. Never put editable children inside static ancestors:
              </p>
              <CodeBlock code={`<span data-preview-static="footer-divider" className="border-t" />`} language="tsx" />
            </div>
          </div>
        </section>


        {/* Platform Features & Additional Pages */}
        <section id="platform-contract" className="space-y-6 pt-6 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Platform Contract System</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#818CF8]" />
              <span>Platform Features &amp; additionalPages</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Understand what <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">additionalPages</code> and platform intake fields are, why they are required, and how to safely implement them without breaking validation.
            </p>
          </div>

          {/* Explanation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-3">
              <h4 className="text-sm font-bold text-[#818CF8] flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                <span>What is additionalPages?</span>
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                When merchants configure their store in the Fivora Merchant Studio, they create custom policy and information pages:
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Legal policies (Privacy Policy, Terms of Service, Return/Refund Policy)</li>
                <li>Customer care (Shipping &amp; Delivery, FAQ, Warranty)</li>
                <li>Store story (About the Founder, Sustainability, Press)</li>
              </ul>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Fivora injects these pages dynamically into <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">site-data.json</code> under <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">additionalPages: [...]</code>.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-3">
              <h4 className="text-sm font-bold text-[#818CF8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>What is the Template&apos;s Responsibility?</span>
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Every certified template <strong>must render navigation links</strong> for these merchant pages (typically in the <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">Footer</code> and/or Mobile Menu) so store visitors can access merchant policies.
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                To pass strict Fivora validation, you must render them with correct visual editing attributes or use the pre-built <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">&lt;PlatformAdditionalPages /&gt;</code> component.
              </p>
            </div>
          </div>

          {/* Usage Methods */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">How to Implement in Your Template</h3>

            {/* Method A */}
            <div className="p-5 rounded-xl border border-[#818CF8]/30 bg-[#818CF8]/5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#818CF8]" />
                  <span>Option A: PlatformAdditionalPages Component (Recommended)</span>
                </h4>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#818CF8]/20 text-[#818CF8]">Zero Config</span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                Import directly from <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">@deneb-ui/ui</code>. It handles list wrapping, item keys, static route links, and preview field markers automatically:
              </p>
              <CodeBlock 
                code={`import { PlatformAdditionalPages } from "@deneb-ui/ui";
import { useSiteData } from "@/lib/siteDataContext";

export function StoreFooter() {
  const siteData = useSiteData();

  return (
    <footer>
      {/* Policy & Additional Pages Navigation */}
      <div className="mt-8">
        <h4 className="text-sm font-semibold text-white mb-3">Company & Policies</h4>
        <PlatformAdditionalPages 
          pages={siteData?.additionalPages} 
          variant="links"
          className="space-y-2 text-sm text-slate-400 hover:text-white"
        />
      </div>
    </footer>
  );
}`} 
                language="tsx" 
              />
            </div>

            {/* Method B */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#94A3B8]" />
                  <span>Option B: Manual JSX Implementation (Strict Validation Markers)</span>
                </h4>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/10 text-slate-300">Custom Markup</span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                If writing custom markup, you must follow the strict contract rules to avoid validation errors:
              </p>
              <CodeBlock 
                code={`<div data-preview-list-path="additionalPages" className="space-y-2">
  {(siteData?.additionalPages || []).map((page, index) => (
    <div 
      key={page.id || index}
      data-preview-item-path={\`additionalPages[\${index}]\`}
      data-preview-field-path={\`additionalPages[\${index}].title\`}
    >
      <Link 
        href={page.url || page.slug || \`/pages/\${page.id}\`}
        className="text-sm text-slate-400 hover:text-white transition-colors"
      >
        {page.title}
      </Link>
    </div>
  ))}
</div>`} 
                language="tsx" 
              />
            </div>
          </div>

          {/* Critical Validation Rules */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Critical Rules to Prevent Template Breakage</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
                <h5 className="text-xs font-bold text-amber-400 font-mono uppercase">1. Only .title is Editable</h5>
                <p className="text-xs text-[#94A3B8]">
                  Attach <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-field-path</code> ONLY to <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">additionalPages[index].title</code>. Never attach it to <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">id</code>, <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">slug</code>, or <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">url</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
                <h5 className="text-xs font-bold text-amber-400 font-mono uppercase">2. Keep Container Mounted</h5>
                <p className="text-xs text-[#94A3B8]">
                  The container element with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-list-path=&quot;additionalPages&quot;</code> must remain mounted in HTML even when the array is empty (<code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">[]</code>) so the visual editor can inject new items.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
                <h5 className="text-xs font-bold text-amber-400 font-mono uppercase">3. No Static Ancestors</h5>
                <p className="text-xs text-[#94A3B8]">
                  Never wrap <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">additionalPages</code> inside a parent that has <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-static</code>. Static ancestors disable all visual editing inside them.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Contract Protection */}
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#818CF8]" />
              <span>Platform-Managed Fields &amp; controlOnlyPaths</span>
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Fivora manages internal platform data in <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">site-data.json</code> such as <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">__fivoraIntake</code> (merchant business questionnaire, summary, onboarding notes) and non-visual fields of <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">additionalPages</code> (id, slug, isPublished).
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              These fields are automatically handled by the <strong>Deneb Platform Contract System</strong>. Your template should include a pre-build merge script (<code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">scripts/merge-platform-contract.js</code>) or run the latest CLI so these 25 platform-managed paths are automatically excluded from visual editing DOM checks, keeping your template 100% compliant.
            </p>
          </div>
        </section>

        {/* Master Component Catalog & Usage Guide (All 40 Components) */}
        <section id="component-catalog" className="space-y-8 pt-8 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Exhaustive Component Reference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Master Component Catalog (All 40 Components)
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
              Complete reference for every component in <code className="text-white font-mono">@deneb-ui/ui</code>. Each component is fully instrumented for Fivora visual click-to-edit synchronization, includes full props definitions, and copy-pasteable JSX usage code.
            </p>
          </div>

          <div className="space-y-12">
            {[
              'Core Primitives',
              'Smart Commerce Actions',
              'Location & Navigation',
              'Social & Business',
              'Storefront Sections',
              'Data & Theme Engine',
            ].map((catName) => {
              const catComponents = Object.entries(COMPONENT_DOCS).filter(
                ([, doc]) => doc.category === catName
              );
              if (catComponents.length === 0) return null;

              return (
                <div key={catName} className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-[#23283B]">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {catName}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20 font-semibold">
                      {catComponents.length} components
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {catComponents.map(([slug, comp]) => (
                      <div
                        key={slug}
                        id={`comp-${slug}`}
                        className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4 shadow-xl hover:border-[#818CF8]/40 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/docs/components/${slug}`}
                              className="text-lg font-bold text-white hover:text-[#818CF8] transition-colors flex items-center gap-2 group"
                            >
                              <span>{comp.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#818CF8] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                            {comp.badge && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#6366F1]/15 text-[#A5B4FC] border border-[#6366F1]/30">
                                {comp.badge}
                              </span>
                            )}
                          </div>
                          <code className="text-xs font-mono text-[#818CF8] bg-[#818CF8]/10 px-2 py-1 rounded border border-[#818CF8]/20">
                            import &#123; {comp.title} &#125; from &quot;@deneb-ui/ui&quot;
                          </code>
                        </div>

                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                          {comp.description}
                        </p>

                        {/* Props Reference Table */}
                        {comp.props && comp.props.length > 0 && (
                          <div className="space-y-2 pt-2">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                              <span>Props Reference</span>
                            </div>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 dark:border-[#23283B] dark:bg-[#0E1220]/60">
                              <table className="w-full text-left text-xs">
                                <thead className="border-b border-slate-200 dark:border-[#23283B] bg-slate-50 dark:bg-[#0E1220] text-slate-700 dark:text-[#CBD5E1] uppercase font-mono tracking-wider text-[11px]">
                                  <tr>
                                    <th className="px-3.5 py-2.5">Prop</th>
                                    <th className="px-3.5 py-2.5">Type</th>
                                    <th className="px-3.5 py-2.5">Default</th>
                                    <th className="px-3.5 py-2.5">Description</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-[#94A3B8]">
                                  {comp.props.map((p) => (
                                    <tr key={p.name} className="hover:bg-white/[0.02] transition-colors">
                                      <td className="px-3.5 py-2 font-mono font-semibold text-[#818CF8]">
                                        {p.name}
                                      </td>
                                      <td className="px-3.5 py-2 font-mono text-[#CBD5E1]">{p.type}</td>
                                      <td className="px-3.5 py-2 font-mono text-[#64748B]">
                                        {p.defaultValue || '—'}
                                      </td>
                                      <td className="px-3.5 py-2 leading-relaxed">{p.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Copyable Usage Code */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Copy-Paste Usage Example</span>
                          </div>
                          <CodeBlock code={comp.usageCode} language="tsx" filename={`${slug}.tsx`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Complete Storefront Architecture Examples */}
        <section id="full-templates" className="space-y-8 pt-8 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Full Production Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Complete Storefront Code Examples
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
              Copy-pasteable full page code integrating all components with Fivora visual markers, static export routes, and live state.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">1. Root Layout (src/app/layout.tsx)</h3>
              <CodeBlock
                language="tsx"
                filename="src/app/layout.tsx"
                code={`import "./globals.css";
import { SiteDataProvider, ThemeStyles, ResponsiveBaseStyles, CartProvider } from "@deneb-ui/ui";
import initialSiteData from "@/data/site-data.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeStyles theme={initialSiteData.theme} />
        <ResponsiveBaseStyles />
      </head>
      <body className="bg-[#090D1A] text-slate-100 antialiased min-h-screen">
        <SiteDataProvider initialSiteData={initialSiteData}>
          <CartProvider>
            {children}
          </CartProvider>
        </SiteDataProvider>
      </body>
    </html>
  );
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">2. Main Storefront Page (src/app/page.tsx)</h3>
              <CodeBlock
                language="tsx"
                filename="src/app/page.tsx"
                code={`"use client";

import {
  useSiteData,
  useProducts,
  Navbar,
  Footer,
  Hero,
  ProductGrid,
  ProductCard,
  CartDrawer,
  FilterSidebar,
  CustomerReviews,
  TrustBadges,
  StickyMobileBar,
  BusinessHours,
  ContactActions,
  AnnouncementBar
} from "@deneb-ui/ui";
import { useState } from "react";

export default function HomePage() {
  const siteData = useSiteData();
  const products = useProducts();
  const content = siteData?.content ?? {};
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Announcement */}
      <AnnouncementBar
        message="Free express delivery on all orders over $100"
        linkText="Shop Now"
        href="#products"
      />

      {/* Header Navigation */}
      <Navbar
        brandName={siteData?.shop?.name ?? "Artisan Store"}
        links={[
          { label: "Home", href: "/" },
          { label: "Products", href: "#products" },
          { label: "Reviews", href: "#reviews" },
          { label: "Contact", href: "#contact" }
        ]}
      />

      {/* Hero Showcase */}
      <Hero
        layout="split"
        title={content?.hero?.title ?? "Bespoke Footwear Engineered for Distinction"}
        description={content?.hero?.subtitle ?? "Handcrafted micro-batch leather shoes."}
        image={content?.hero?.image ?? "https://images.unsplash.com/photo-1542291026-7eec264c27ff"}
      />

      {/* Trust & Guarantee Strip */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <TrustBadges />
      </div>

      {/* Commerce Catalog with Filter Sidebar */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16 w-full space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white tracking-tight">Curated Collection</h2>
          <p className="text-sm text-slate-400">Discover handpicked styles designed to last.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <FilterSidebar
            categories={["All", "Running", "Lifestyle", "Formal"]}
            onFilterChange={(f) => setActiveCategory(f.selectedCategories[0] || "All")}
          />

          <div className="lg:col-span-3">
            <ProductGrid cols={3} gap="lg">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id || idx}
                  title={product.title}
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                  currency={product.currency ?? "$"}
                  image={product.image}
                  whatsappNumber={siteData?.shop?.whatsapp}
                />
              ))}
            </ProductGrid>
          </div>
        </div>
      </section>

      {/* Reviews & Social Proof */}
      <section id="reviews" className="bg-slate-50 dark:bg-[#0C0F1A] py-16 border-y border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4">
          <CustomerReviews />
        </div>
      </section>

      {/* Business Hours & Support */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <BusinessHours schedule={content?.businessHours} />
        <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-[#0E1220] flex flex-col justify-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Instant Concierge Support</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Order directly with our personal shoppers via WhatsApp or phone.</p>
          <ContactActions
            whatsapp={siteData?.shop?.whatsapp}
            phone={siteData?.shop?.phone}
            email={siteData?.shop?.email}
          />
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer
        whatsappNumber={siteData?.shop?.whatsapp ?? "15550192834"}
        storeName={siteData?.shop?.name ?? "Artisan Store"}
      />

      {/* Sticky Mobile Bar */}
      <StickyMobileBar
        whatsappNumber={siteData?.shop?.whatsapp}
        phone={siteData?.shop?.phone}
      />

      {/* Footer */}
      <Footer
        brandName={siteData?.shop?.name ?? "Artisan Store"}
        copyright="(c) 2026 Artisan Store. All rights reserved."
      />
    </div>
  );
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">3. Stable Product Route (src/app/products/detail/page.tsx)</h3>
              <CodeBlock
                language="tsx"
                filename="src/app/products/detail/page.tsx"
                code={`import { PlatformProductDetail } from "@deneb-ui/ui";

export default function ProductDetailPage() {
  return <PlatformProductDetail />;
}`}
              />
              <p className="text-xs leading-relaxed text-[#94A3B8]">
                Product cards must link with <code className="text-white">platformProductDetailHref(product.id)</code>.
                This stable exported route also opens products merchants add after the template build. For a custom
                design, pass <code className="text-white">renderProduct</code> or use{' '}
                <code className="text-white">usePlatformProductDetail()</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Standard vs Premium */}
        <section id="standard-vs-premium" className="space-y-6 pt-6 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Standard vs. Premium Tier: How to Decide
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Both tiers share the <strong>exact same codebase and manifest v2 contract</strong>. You decide whether to list as Standard or Premium based on design tokenization:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-slate-200 dark:border-[#23283B] rounded-xl overflow-hidden bg-white dark:bg-[#0A0D17] shadow-xs">
              <thead className="bg-slate-50 dark:bg-[#0E1220] text-slate-700 dark:text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-slate-200 dark:border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Feature</th>
                  <th className="p-3 sm:p-4">Standard Template</th>
                  <th className="p-3 sm:p-4 text-[#818CF8]">Premium Template</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#23283B] text-slate-600 dark:text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Aesthetic Goal</td>
                  <td className="p-3 sm:p-4">Fixed, opinionated composition</td>
                  <td className="p-3 sm:p-4 text-white">Dynamic, versatile design system</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Merchant Customization</td>
                  <td className="p-3 sm:p-4">Manual design panel (accent colors)</td>
                  <td className="p-3 sm:p-4 text-white">AI-Assisted Design Restyling + Controls</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Design Tokens (<code className="text-[#818CF8] font-mono">themeSchema</code>)</td>
                  <td className="p-3 sm:p-4">Optional</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">Required in fivora-template.json</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Section Targeting</td>
                  <td className="p-3 sm:p-4">Page-level</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">data-design-section on every major section</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Local Visual Lab & Preflight Validation */}
        <section id="testing-lab" className="space-y-6 pt-6 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#818CF8]" />
              <span>Local Visual Lab & Validation</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Test and certify your template locally before uploading to the Developer Portal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-3">
              <div className="flex items-center gap-2 text-[#818CF8] font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>1. Launch Visual Lab</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Opens a local simulation of the Fivora Merchant Editor at <code className="text-white font-mono">http://localhost:3001</code> with an interactive field inspector:
              </p>
              <CodeBlock code="npm run lab\n# Or: deneb lab ." language="bash" />
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Run Preflight Validator</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Verifies manifest integrity, tests probe data injection, audits static markers, and ensures zero broken links:
              </p>
              <CodeBlock code="npm run validate\n# Or: deneb validate ." language="bash" />
            </div>
          </div>
        </section>

        {/* Packaging & Upload */}
        <section id="packaging" className="space-y-6 pt-6 border-t border-slate-200 dark:border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-[#818CF8]" />
              <span>Packaging & Submitting</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Do not use manual OS zip tools. Always package using the DENEB CLI:
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-[#23283B] dark:bg-[#0A0D17] dark:shadow-none space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-white">1-Step Preflight Validation & Clean Packaging (Recommended)</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Runs preflight verification and packages a clean <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">fivora-template.zip</code> only when all platform checks pass:
              </p>
              <CodeBlock code="npm run validate-and-zip\n# Or: deneb validate-and-zip .\n# Or: deneb validate and zip" language="bash" />
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-[#23283B] space-y-2">
              <div className="text-sm font-bold text-white">Quick Clean ZIP (Fast packaging without sandbox)</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Quickly strips <code className="text-white font-mono">node_modules</code>, <code className="text-white font-mono">.next</code>, <code className="text-white font-mono">.git</code>, and <code className="text-white font-mono">.env*</code> to generate <code className="text-white font-mono">fivora-template.zip</code>:
              </p>
              <CodeBlock code="npm run zip\n# Or: deneb zip ." language="bash" />
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-[#23283B] space-y-2">
              <div className="text-sm font-bold text-white">Developer Portal Submission Steps:</div>
              <ol className="list-decimal list-inside text-xs text-[#94A3B8] space-y-1.5 leading-relaxed">
                <li>Log in to the <strong className="text-white">Fivora Developer Portal</strong>.</li>
                <li>Click <strong className="text-white">Create Template</strong>.</li>
                <li>Upload your verified <code className="text-[#818CF8] font-mono">fivora-template.zip</code>.</li>
                <li>Upload a WebP thumbnail preview (16:9 ratio).</li>
                <li>Select your listing tier (<strong className="text-white">Standard</strong> or <strong className="text-white">Premium</strong>).</li>
                <li>Click <strong className="text-white">Submit for Review</strong>.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="space-y-4 pt-6 border-t border-slate-200 dark:border-[#23283B]">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#818CF8]" />
            <span>Troubleshooting Common Preflight Errors</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-slate-200 dark:border-[#23283B] rounded-xl overflow-hidden bg-white dark:bg-[#0A0D17] shadow-xs">
              <thead className="bg-slate-50 dark:bg-[#0E1220] text-slate-700 dark:text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-slate-200 dark:border-[#23283B]">
                <tr>
                  <th className="p-3">Error Message</th>
                  <th className="p-3">Cause</th>
                  <th className="p-3">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#23283B] text-slate-600 dark:text-[#94A3B8]">
                <tr>
                  <td className="p-3 font-mono text-rose-300">Editable marker has static ancestor</td>
                  <td className="p-3">An editable field is inside an element marked <code className="text-white font-mono">data-preview-static</code>.</td>
                  <td className="p-3 text-white">Move static markers exclusively to decorative borders/icons.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">Marker cannot be placed on broad container</td>
                  <td className="p-3">Field marker placed on <code className="text-white font-mono">div</code>, <code className="text-white font-mono">section</code>, or <code className="text-white font-mono">footer</code>.</td>
                  <td className="p-3 text-white">Place <code className="text-white font-mono">data-preview-field-path</code> on leaf <code className="text-white font-mono">h1-h6</code>, <code className="text-white font-mono">p</code>, <code className="text-white font-mono">span</code>, or <code className="text-white font-mono">img</code>.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">Cannot read properties of undefined (reading &apos;map&apos;)</td>
                  <td className="p-3">Component crashes when list is empty during probe testing.</td>
                  <td className="p-3 text-white">Add defensive fallbacks: <code className="text-[#818CF8] font-mono">const items = content?.products || [];</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-slate-200 dark:border-[#23283B] flex items-center justify-between">
          <Link
            href="/docs/installation"
            className="text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Installation
          </Link>
          <Link
            href="/docs/theming"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Theming & Tokens</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right Sidebar Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
