# Dazzle Product Data Guide

The catalogue is currently driven by `src/data/jewelry.js`. Keep this file clean because product pages, collection pages, filters, article recommendations, structured data, and inquiry links all depend on it.

## Required Fields

Every product should include:

- `id`
- `name`
- `category`
- `mainImage`
- `additionalImages`
- `description`
- `details`
- `price`
- `priceValue`
- `material`
- `stoneType`
- `style`
- `dimensions`
- `careInstructions`
- `uniqueFeatures`
- `dateAdded`
- `popularityScore`

## Product ID Rules

The `id` becomes the product URL slug.

Example:

```js
id: 'solitaire-round-ring'
```

Generates:

```txt
/collections/rings/solitaire-round-ring/
```

Rules:

- use lowercase
- use hyphens
- do not use spaces
- do not change an existing ID casually
- if an ID changes, add a redirect in `public/_redirects`

## Category Rules

The `category` controls category pages and URL grouping.

Current categories:

- `rings`
- `necklaces`
- `bracelets`
- `earrings`
- `custom`

If adding a new category, confirm:

- `/collections/[category]/` generates correctly
- filters still work
- collection navigation links include it where needed
- product redirects are added if replacing an old path

## Filter Fields

These fields power collection filtering:

- `material`
- `stoneType`
- `style`
- `priceValue`

Keep values consistent.

Good:

```js
material: 'White Gold'
style: 'Pendant'
stoneType: 'Diamond'
```

Avoid accidental variants:

```js
material: 'white gold'
material: '18k white gold'
material: 'White-Gold'
```

Use display detail in `details.metal`; keep `material` as the normalized filter value.

## Price Rules

Use:

```js
price: '₹5,50,000'
priceValue: 550000
```

For custom or price-on-request pieces:

```js
price: 'Price Upon Request'
priceValue: 0
```

Do not leave `priceValue` blank because sorting and filtering depend on it.

## Details Object

The `details` object appears on product pages and may be used in structured data and trust snippets.

Recommended keys:

- `metal`
- `mainStone`
- `cut`
- `color`
- `clarity`
- `certification`

For custom pieces, use clear placeholders like:

```js
cut: 'Client\'s Choice'
certification: 'GIA/IGI Certified'
```

## Images

Use product images from:

```txt
public/images/products/
```

`mainImage` should be the best catalogue image.

`additionalImages` should include supporting shots:

- side angle
- close-up
- on-model image
- clasp/setting detail

## Article Recommendations

Blog article `ShopTheLook` recommendations currently use product IDs. If an ID changes, update article recommendation logic too.

## Redirects

If a product can be reached by a shorter or older name, add a redirect in:

```txt
public/_redirects
```

Example:

```txt
/collections/rings/solitaire/ /collections/rings/solitaire-round-ring/ 301
```

## Pre-Commit Product Check

Before committing catalogue changes:

- run `npm run build`
- open `/collections/`
- open each changed category page
- open each changed product page
- test filter/sort if material/style/price changed
- test inquiry link
- check generated sitemap if changing slugs
