# Final Launch Commands

Run these commands before a production deploy.

## Standard Validation

```bash
npm run sync:content
npm run build
npm run check:launch
```

`npm run build` and `npm run check:launch` already run `sync:content`, but running it explicitly first makes generated content updates obvious before the final checks.

This confirms:

- admin-editable product JSON generates `src/data/jewelry.js`
- business-contact JSON generates `src/data/businessContact.js`
- the Astro static build works
- product data, contact details, site config, asset paths, and redirects pass the launch-readiness audit

## Strict Launch Validation

```bash
npm run sync:content
npm run build
npm run check:launch:strict
```

Strict mode fails on warnings as well as errors. Use this when preparing the final public launch.

## Expected Warnings Before Final Business Details Are Ready

The audit may warn about:

- missing business email
- missing business address
- missing usable social links
- Netlify preview/default domain
- missing supporting product images

Those warnings are acceptable for development, but they should be resolved before production launch.

## Admin Validation

After deploying this branch, manually open:

```txt
/admin/
```

Confirm that the admin panel exposes:

- Products
- Blog Articles
- Editable Pages → Policies Page

For production admin access, Netlify Identity and Git Gateway must be enabled, and admin users must be invited.

## Required Manual Checks

After the commands pass, manually open:

- `/`
- `/collections/`
- every category page
- every product page
- `/contact/`
- `/blog/`
- a few blog posts
- `/policies/`
- `/privacy-policy/`
- `/thank-you/`
- `/sitemap.xml`
- `/robots.txt`

Also test a redirected alias such as:

```txt
/collections/rings/solitaire/
```

It should redirect to:

```txt
/collections/rings/solitaire-round-ring/
```

## Final Launch Data To Fill

Before public launch, fill these values in the source files or admin content model:

- real business email
- real address, service area, or consultation-area copy
- live social links
- final production domain
- real supporting images for bracelet and simple silver necklace
