# Final Launch Commands

Run these commands before a production deploy.

## Standard Validation

```bash
npm run build
npm run check:launch
```

This confirms the Astro static build works and runs a launch-readiness audit for product data, contact details, site config, asset paths, and redirects.

## Strict Launch Validation

```bash
npm run build
npm run check:launch:strict
```

Strict mode fails on warnings as well as errors. Use this when preparing the final public launch.

## Expected Warnings Before Final Business Details Are Ready

The audit may warn about:

- placeholder email
- placeholder address
- placeholder social links
- Netlify default domain
- missing supporting product images

Those warnings are acceptable for development, but they should be resolved before production launch.

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
