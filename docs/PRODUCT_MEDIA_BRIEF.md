# Product Media Brief

Use this brief to close the remaining product-image launch warnings without adding fake or unrelated assets.

## Required image standards

- Use real product, model, packaging, certificate, or detail shots.
- Prefer square or 4:5 crops with the product clearly visible.
- Use consistent lighting and background across a product set.
- Avoid reusing another product's photos unless the item is genuinely the same product variant.
- Keep file names lowercase kebab-case.
- Store public storefront images under `public/images/products/`.

## Minimum image set per product

Each launch product should have:

1. `mainImage`: primary catalog image.
2. `additionalImages[0]`: alternate angle, detail, model, packaging, or certificate image.
3. `additionalImages[1]`: optional but recommended supporting image.

The launch audit currently allows products with one main image, but strict commercial readiness should include at least one supporting image per active product.

## Remaining required supporting images

### `bracelet-large-diamonds`

Current main image:

```txt
/images/products/bracelet1.png
```

Recommended supporting shots:

```txt
/images/products/bracelet-large-diamonds-detail.png
/images/products/bracelet-large-diamonds-wrist.png
/images/products/bracelet-large-diamonds-clasp.png
```

Suggested shot list:

- Close-up of diamond setting and chain links.
- Wrist/model shot to show scale.
- Clasp/detail shot to show finish and practicality.

### `simple-silver-necklace`

Current main image:

```txt
/images/products/emerald-pendant-1.png
```

This appears to reuse the emerald pendant image. Replace with a real silver necklace image before public launch.

Recommended product images:

```txt
/images/products/simple-silver-necklace-main.png
/images/products/simple-silver-necklace-detail.png
/images/products/simple-silver-necklace-model.png
```

Suggested shot list:

- Main flat-lay or bust display image.
- Close-up of small diamond pendant and silver setting.
- Model or neck-scale shot.

## Product JSON update pattern

After images are added, update the matching product JSON file in `src/content/products/`:

```json
{
  "mainImage": "/images/products/example-main.png",
  "additionalImages": [
    "/images/products/example-detail.png",
    "/images/products/example-model.png"
  ]
}
```

Then run:

```bash
npm run sync:content
npm run build
npm run check:launch
npm run check:generated-content
git diff --check
```
