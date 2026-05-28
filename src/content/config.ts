// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Our Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.date().optional(),
  }),
});

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    name: z.string(),
    category: z.enum(['rings', 'necklaces', 'bracelets', 'earrings', 'custom']),
    mainImage: z.string(),
    additionalImages: z.array(z.string()).default([]),
    description: z.string(),
    details: z.object({
      metal: z.string(),
      mainStone: z.string(),
      cut: z.string(),
      color: z.string(),
      clarity: z.string(),
      certification: z.string(),
    }),
    price: z.string(),
    priceValue: z.number().min(0),
    material: z.string(),
    stoneType: z.string(),
    style: z.string(),
    dimensions: z.string(),
    careInstructions: z.string(),
    uniqueFeatures: z.string(),
    dateAdded: z.string(),
    popularityScore: z.number().min(0).max(10),
  }),
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // business-contact.json fields
    telHref: z.string().optional(),
    directMessageNumber: z.string().optional(),
    displayPhone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    serviceArea: z.string().optional(),
    businessHours: z.string().optional(),
    socials: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).default([]).optional(),
    // site-config.json fields
    name: z.string().optional(),
    url: z.string().optional(),
  }),
});

const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      kicker: z.string(),
      primaryCta: z.string(),
      secondaryCta: z.string(),
    }).optional(),
    finalCta: z.object({
      kicker: z.string(),
      title: z.string(),
      description: z.string(),
      actions: z.array(z.object({
        label: z.string(),
        href: z.string(),
        variant: z.string(),
      })),
    }).optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  pages: pagesCollection,
  products: productsCollection,
  settings: settingsCollection,
  homepage: homepageCollection,
};
