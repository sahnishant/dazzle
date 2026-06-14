import { jewelryItems } from '../data/jewelry.js';
import { siteConfig } from '../data/siteConfig.js';
import {
  getMerchantEligibleProducts,
  buildMerchantTitle,
  buildMerchantDescription,
  buildProductType,
  formatMerchantPrice,
} from '../utils/merchantFeed.js';

const baseUrl = siteConfig.url.replace(/\/$/, '');
const csv = (value = '') => `"${String(value).replace(/"/g, '""')}"`;

export function GET() {
  const headers = [
    'id',
    'title',
    'description',
    'link',
    'image_link',
    'availability',
    'condition',
    'price',
    'brand',
    'material',
    'product_type',
    'custom_label_0',
    'custom_label_1',
    'custom_label_2',
  ];

  const rows = getMerchantEligibleProducts(jewelryItems).map((product) => [
    product.id,
    buildMerchantTitle(product),
    buildMerchantDescription(product),
    `${baseUrl}/collections/${product.category}/${product.id}/`,
    new URL(product.mainImage, baseUrl).toString(),
    'in_stock',
    'new',
    formatMerchantPrice(product),
    'Dazzle',
    [product.diamondOrigin, product.material].filter(Boolean).join(', '),
    buildProductType(product),
    product.category,
    product.certificationLab || product.details?.certification || 'Certification guidance',
    product.leadTime || 'Consultation required',
  ].map(csv).join(','));

  return new Response(`${headers.join(',')}\n${rows.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
    },
  });
}
