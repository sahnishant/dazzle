# Business Launch Data Brief

Use this checklist to close the remaining business-data launch warnings with real values.

## Required values before public launch

### 1. Business email

Source file:

```txt
src/content/settings/business-contact.json
```

Field:

```json
"email": ""
```

Use an address on the production domain if possible, for example `contact@<final-domain>` or `hello@<final-domain>`.

### 2. Address or service-area copy

The site now supports either a physical address or service-area copy.

Use `address` if a public shop or office address should be visible.

Use `serviceArea` if consultations are private, appointment-based, or region-based.

Example service-area style:

```txt
Private jewellery consultations available by appointment. Service area and visit details are confirmed during inquiry.
```

Do not use fake street addresses.

### 3. Social links

Source field:

```json
"socials": []
```

Expected shape:

```json
"socials": [
  {
    "label": "Instagram",
    "href": "https://www.instagram.com/<official-profile>"
  }
]
```

Only add official live profiles.

### 4. Production domain

Source file:

```txt
src/content/settings/site-config.json
```

Field:

```json
"url": "https://mydazzle.netlify.app"
```

Replace with the final canonical production URL. This value is used by sitemap, robots, canonical URLs, and structured data.

## Validation

After updating values, run:

```bash
npm run sync:content
npm run build
npm run check:launch
npm run check:generated-content
git diff --check
```

When all launch warnings should block release, run:

```bash
npm run check:launch:strict
```

## Do not fill with placeholders

Leave values blank until real data exists. The audit warning is preferable to publishing misleading business identity data.
