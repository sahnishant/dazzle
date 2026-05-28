# Dazzle Admin Workflow

Dazzle now has a lightweight Git-backed admin path for products, articles, and build-safe content generation.

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

After editing product JSON files, run:

```bash
npm run sync:content
npm run build
npm run check:launch
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

After the product is committed, run the validation commands above before deploying.

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

## Business contact settings

Business contact source data now lives in:

```txt
src/content/settings/business-contact.json
```

It generates:

```txt
src/data/businessContact.js
```

This means the contact data has a clean JSON source of truth. The admin UI can expose it after the CMS config update is completed.

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

The content architecture now supports generated settings for:

- Business contact details

Still pending:

- Site URL/domain JSON source
- Policy page markdown source
- Homepage section copy source
- CMS config exposure for business contact settings

## Recommended next admin pass

1. Move `siteConfig.js` to a JSON source.
2. Move policies into markdown so admin can edit policy copy without touching code.
3. Expose business settings in `/admin/` after the config payload is accepted.
4. Add an automated drift check so generated files cannot fall behind JSON content.
