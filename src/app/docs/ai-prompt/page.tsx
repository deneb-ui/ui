import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { AiPromptClient } from './AiPromptClient';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'AI Prompt & Template Developer Rules — DENEB UI',
  description:
    'Complete guide for using AI assistants (Claude, ChatGPT, Cursor, Antigravity) with the official DENEB UI AI Master Prompt to build, restructure, and pass Fivora template validation.',
  keywords: [
    'DENEB UI AI Prompt',
    'Fivora template prompt',
    'AI template conversion',
    'visual editing rules',
    'Next.js static export template',
    'data-preview attributes',
    'template developer guide',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/docs/ai-prompt`,
  },
  openGraph: {
    title: 'AI Prompt & Template Developer Rules — DENEB UI',
    description:
      'Master prompt and Golden Rules for using AI coding assistants to build and restructure production-ready Fivora templates.',
    url: `${SITE_CONFIG.url}/docs/ai-prompt`,
    type: 'article',
    images: [SITE_CONFIG.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt & Template Developer Rules — DENEB UI',
    description:
      'Master prompt and Golden Rules for using AI coding assistants to build and restructure production-ready Fivora templates.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default async function AiPromptPage() {
  const promptPath = path.join(process.cwd(), 'prompts', 'fivora-template-master-prompt.md');
  const masterPrompt = await readFile(promptPath, 'utf8');

  return <AiPromptClient masterPrompt={masterPrompt} />;
}
