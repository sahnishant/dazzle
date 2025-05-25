// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Our Team'),
    image: z.string().optional(), // Optional hero image for the article
    tags: z.array(z.string()).default([]),
    // Add other frontmatter fields as needed, e.g., category
  }),
});

export const collections = {
  'articles': articlesCollection,
};