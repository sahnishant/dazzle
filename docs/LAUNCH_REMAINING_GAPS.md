# Remaining Launch Data Gaps

This branch has the launch content architecture in place. The remaining items are real business or media inputs, not placeholder values to invent in code.

## Business identity

- Add a real business email in `src/content/settings/business-contact.json` through `/admin/` or directly.
- Add either a real address or service-area copy in `src/content/settings/business-contact.json`.
- Add live social links once official profiles exist.
- Replace `https://mydazzle.netlify.app` in `src/content/settings/site-config.json` with the final production domain.

## Product media

These products still need real supporting images before strict public launch:

- `bracelet-large-diamonds`
- `simple-silver-necklace`

Avoid satisfying this by duplicating unrelated product images. Use actual product, model, packaging, certificate, or detail shots.

## Validation commands

Run this after filling the real launch data:

```bash
npm run sync:content
npm run build
npm run check:launch
npm run check:generated-content
git diff --check
```

Run this only when all warnings should block launch:

```bash
npm run check:launch:strict
```

## Expected current warnings

Until the business/media items above are filled, the launch audit may warn about:

- missing business email
- missing address or service-area copy
- missing social links
- Netlify preview/default domain
- missing supporting product images
