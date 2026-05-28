# Dazzle Admin Workflow

Dazzle now has a lightweight Git-backed admin path for product and article content.

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
npm run sync:products
npm run build
npm run check:launch
```

`sync:products` regenerates `src/data/jewelry.js` from the admin-editable JSON records.

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

## Current limitations

The admin panel currently manages:

- Products
- Blog articles

It does not yet safely manage:

- Business contact details
- Site URL/domain
- Policy page copy
- Homepage section copy

Those should be moved from JavaScript/Astro pages into JSON or markdown content files before exposing them through the CMS.

## Recommended next admin pass

1. Move `businessContact.js` to `src/content/settings/business-contact.json`.
2. Move `siteConfig.js` to `src/content/settings/site-config.json`.
3. Add a settings sync/loader layer.
4. Expose settings safely in `/admin/`.
5. Move policies into markdown so admin can edit policy copy without touching code.
