import { jewelryItems } from '../data/jewelry.js';
import { siteConfig } from '../data/siteConfig.js';
import {
  getMerchantEligibleProducts,
  buildMerchantTitle,
  buildMerchantDescription,
  buildProductType,
  formatMerchantPrice,
} from '../utils/merchantFeed.js';

const escapeXml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const baseUrl = siteConfig.url.replace(/\/$/, '');

export function GET() {
  const eligibleProducts = getMerchantEligibleProducts(jewelryItems);

  const items = eligibleProducts.map((product) => {
    const link = `${baseUrl}/collections/${product.category}/${product.id}/`;
    const image = new URL(product.mainImage, baseUrl).toString();

    return `
      <item>
        <g:id>${escapeXml(product.id)}</g:id>
        <g:title>${escapeXml(buildMerchantTitle(product))}</g:title>
        <g:description>${escapeXml(buildMerchantDescription(product))}</g:description>
        <g:link>${escapeXml(link)}</g:link>
        <g:image_link>${escapeXml(image)}</g:image_link>
        <g:availability>in_stock</g:availability>
        <g:condition>new</g:condition>
        <g:price>${escapeXml(formatMerchantPrice(product))}</g:price>
        <g:brand>Dazzle</g:brand>
        <g:material>${escapeXml([product.diamondOrigin, product.material].filter(Boolean).join(', '))}</g:material>
        <g:product_type>${escapeXml(buildProductType(product))}</g:product_type>
        <g:custom_label_0>${escapeXml(product.category)}</g:custom_label_0>
        <g:custom_label_1>${escapeXml(product.certificationLab || product.details?.certification || 'Certification guidance')}</g:custom_label_1>
        <g:custom_label_2>${escapeXml(product.leadTime || 'Consultation required')}</g:custom_label_2>
      </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Dazzle Laboratory-Grown Diamond Jewellery</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>Merchant-eligible Dazzle laboratory-grown diamond jewellery catalogue.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
