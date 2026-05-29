# Dazzle Admin Workflow

Dazzle now has a lightweight Git-backed admin path for products, articles, policies, and build-safe content generation.

## Admin URL

After deployment, open:

```txt
/admin/
```

The admin panel uses Decap CMS. It writes content back into this repository through Git/Netlify integration.

## Netlify setup required

Before non-technical admins can log in:

1. Deploy this branch to Netlify.
2. Enable Netlify Identity for the site.
3. Enable Git Gateway.
4. Invite the admin user by email.
5. Confirm that `/admin/` opens and prompts for login.

Local editing can use Decap's local backend if needed, but production admin login requires Netlify Identity + Git Gateway.

## Product editing model

Products are stored as JSON records:

```txt
src/content/products/*.json
```

The storefront still reads the generated compatibility file:

```txt
src/data/jewelry.js
```

`sync:content` regenerates generated storefront data from admin-editable content records.

## Adding a product

From `/admin/`:

1. Open **Products**.
2. Click **New Product**.
3. Fill the required fields.
4. Upload or select a main image.
5. Add gallery images if available.
6. Save the entry.
7. Publish or submit for review, depending on editorial workflow settings.

After the product is committed, run the validation commands before deploying.

## Product image rules

Product images should be uploaded through the CMS. The current CMS media destination is:

```txt
public/images/uploads
```

The public URL path will be:

```txt
/images/uploads/<filename>
```

The launch audit checks whether referenced image paths exist. Do not publish a product with missing image paths.

## Blog editing

Blog articles are stored as markdown files:

```txt
src/content/articles/*.md
```

The admin panel supports title, description, publish date, author, hero image, tags, and markdown body.

## Policy editing

The policies page is now sourced from markdown:

```txt
src/content/pages/policies.md
```

The `/policies/` route renders this content through Astro content collections. The admin panel exposes it under **Editable Pages**.

## Business contact settings

Business contact source data now lives in:

```txt
src/content/settings/business-contact.json
```

It generates:

```txt
src/data/businessContact.js
```

This means the contact data has a clean JSON source of truth. The CMS config still needs a final accepted update before business contact fields appear in `/admin/`.

## Build/deploy commands

Use:

```bash
npm run sync:content
npm run build
npm run check:launch
```

`npm run build` and `npm run check:launch` already run `sync:content` first, so deploy builds pick up product and settings changes automatically.

## Current admin coverage

The admin panel currently manages:

- Products
- Blog articles
- Policies page

The content architecture now supports generated settings for:

- Business contact details

## Launch gaps to close

Before public launch, close these items:

- Add real business email.
- Add real address, service-area, or consultation-area copy.
- Add live social profile links.
- Replace the Netlify preview/default domain with the final production domain.
- Add supporting images for `bracelet-large-diamonds`.
- Add supporting images for `simple-silver-necklace`.
- Replace fallback reused images for products that still use another product's images.
- Confirm `/admin/` login works with Netlify Identity and Git Gateway.
- Review final privacy and policy copy with real business details.

## Recommended next admin pass

1. Move `siteConfig.js` to a JSON source.
2. Expose business settings in `/admin/` after the config payload is accepted.
3. Move homepage section copy into content files.
4. Add an automated generated-content drift check when the connector allows the script payload.
