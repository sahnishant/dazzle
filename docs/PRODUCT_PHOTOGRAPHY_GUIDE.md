# Dazzle Product Photography Guide

Jewelry photography controls perceived value. Use this guide to replace placeholder or inconsistent product photos before launch.

## Primary Catalogue Image

Every product needs one primary image that works in cards and grids.

Requirements:

- square or consistent landscape crop
- clean background
- centered product
- sharp focus
- balanced exposure
- no harsh shadows
- no visible dust, fingerprints, or scratches
- enough contrast to show metal and stone detail

Recommended ratio:

- 4:3 or 1:1 for catalogue cards
- keep the subject centered so responsive crops do not cut off the piece

## Detail Images

For each product, add detail shots that answer buyer doubts.

Rings:

- top view
- side profile
- setting/prong close-up
- band width or engraving detail
- hand/on-model scale shot

Necklaces:

- pendant close-up
- clasp/chain detail
- full chain length shot
- on-neck scale shot

Earrings:

- front pair shot
- side/profile shot
- backing detail
- on-ear scale shot

Bracelets:

- full bracelet shot
- clasp detail
- wrist scale shot
- stone setting close-up

## Lighting

Use soft, controlled lighting.

Avoid:

- direct flash
- mixed light temperatures
- yellow indoor cast
- dark reflections
- overexposed stones

Prefer:

- diffused side light
- white reflectors
- neutral background
- controlled sparkle highlights

## Lifestyle Images

Add a few editorial images for homepage and collection storytelling.

Examples:

- ring on hand with soft background
- necklace worn with neutral outfit
- earrings shown close-up on model
- bracelet styled with watch or sleeve
- custom ring design/sketch/workbench scene

Lifestyle images should feel elegant, not cluttered.

## File Naming

Use predictable names in `public/images/products/`.

Examples:

- `solitaire-round-1.png`
- `solitaire-round-2.png`
- `emerald-pendant-1.png`
- `diamond-studs-3.png`

When replacing an image, keep the same filename if the product data already points to it.

## Product Data Check

After adding photos, verify each product in `src/data/jewelry.js`:

- `mainImage` points to the best catalogue image
- `additionalImages` includes real supporting shots
- no broken image paths
- alt text will still make sense from product name

## Quality Bar

Do not launch a product image if it is:

- blurry
- pixelated
- poorly cropped
- inconsistent with the rest of the catalogue
- too dark
- too compressed
- visibly edited in a cheap way

A small catalogue with excellent photos is better than a large catalogue with weak product images.
