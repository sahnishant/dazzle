# Dazzle Launch Readiness Checklist

Use this checklist before switching the site from preview/demo mode to a public production launch.

## 1. Business Identity

Update the central business files first:

- `src/data/businessContact.js`
- `src/data/siteConfig.js`

Confirm:

- production domain
- public phone number
- WhatsApp/direct message number
- public email address
- address or service area
- business hours
- Instagram/Facebook/social URLs

Do not leave placeholder values such as `yourdomain.com`, `123 Diamond St`, or `yourbusiness` in production.

## 2. Product Photography

Product photography is the largest remaining brand-quality lever.

For every product, prepare:

- one consistent primary catalogue image
- one close-up of stone/setting/clasp/detail
- one angle or side-profile image
- one scale-reference or on-model image where possible
- one lifestyle/editorial image for homepage or collection storytelling

Standards:

- consistent crop ratio
- consistent background
- controlled lighting
- visible sparkle/detail
- no blurry product shots
- no mismatched image aspect ratios on cards

## 3. Product Data

For every item in `src/data/jewelry.js`, confirm:

- stable `id` slug
- correct category
- real price or `Price Upon Request`
- material
- stone type
- style
- dimensions
- care instructions
- certification wording
- unique features
- all image paths exist

If changing a product `id`, add a redirect alias in `public/_redirects`.

## 4. Policies

Before launch, confirm the policy page matches real business rules:

- buyback percentage and exclusions
- exchange terms
- return eligibility
- refund timeline
- custom-order deposit rules
- cancellation policy
- resizing policy
- repair and maintenance policy
- shipping regions
- shipping insurance
- certification and hallmarking promises

## 5. Forms and Inquiry Flow

Test these flows on production preview:

- normal contact form submission
- product inquiry link from product page
- blog article consultation CTA
- custom product inquiry form
- thank-you page links
- WhatsApp/direct message link if enabled

Confirm Netlify receives form fields correctly:

- name
- email
- subject
- message
- productId/productName/productPath where relevant
- consultationTopic where relevant

## 6. SEO and Discovery

Confirm:

- `/sitemap.xml` loads
- `/robots.txt` loads
- product pages emit product structured data
- product FAQs emit FAQ structured data
- blog pages emit article structured data
- pages have canonical URLs
- social preview image works
- redirected aliases do not 404

## 7. Trust and Proof

Only add real proof.

Good proof sources:

- customer testimonials
- consultation stories
- custom-design progress photos
- Instagram posts
- delivery/unboxing photos if permitted
- certification examples where appropriate

Avoid fake reviews or unverifiable claims.

## 8. Final Manual QA

Check on desktop and mobile:

- homepage
- all collections page
- each category page
- each product page
- contact page
- blog index
- each blog article
- policies
- privacy policy
- thank-you page

Pay special attention to:

- image cropping
- tap targets
- filter behavior
- sorting behavior
- modal/zoom behavior
- form submission
- broken links
