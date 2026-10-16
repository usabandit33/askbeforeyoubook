import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const checklists = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/checklists' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    service: z.string(),
    lastReviewed: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { checklists };
