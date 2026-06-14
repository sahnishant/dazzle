import { jewelryItems } from '../data/jewelry.js';
import { siteConfig } from '../data/siteConfig.js';
const baseUrl = siteConfig.url.replace(/\/$/, '');
const csv = (value = '') => `"${String(value).replace(/"/g, '""')}"`;
export function GET() {
  const headers = ['id','title','description','link','image_link','availability','condition','price','brand','material','product_type','custom_label_0','custom_label_1','custom_label_2'];
  const rows = jewelryItems.map((product) => {
    const title = product.name.includes('Laboratory-Grown') ? product.name : `${product.name} - Laboratory-Grown Diamond`;
    return [
      product.id, title.slice(0,150), product.description, `${baseUrl}/collections/${product.category}/${product.id}/`,
      new URL(product.mainImage, baseUrl).toString(), 'in_stock', 'new',
      Number(product.priceValue) > 0 ? `${product.priceValue}.00 INR` : '0.00 INR',
      'Dazzle', [product.diamondOrigin || 'Laboratory-grown diamond', product.material].filter(Boolean).join(', '),
      product.productType || `Jewellery > ${product.category} > ${product.style || 'Laboratory-grown diamond'}`,
      product.category, product.certificationLab || product.details?.certification || 'Certification guidance',
      product.leadTime || 'Consultation required',
    ].map(csv).join(',');
  });
  return new Response(`${headers.join(',')}\n${rows.join('\n')}\n`, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
}
