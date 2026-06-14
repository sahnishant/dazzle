export function buildProductLeadMessage(product, options = {}) {
  const productPath = `/collections/${product.category}/${product.id}/`;
  const sourcePage = options.sourcePage || productPath;

  return [
    'Hi Dazzle, I am interested in this laboratory-grown diamond piece.',
    `Source page: ${sourcePage}`,
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    product.price ? `Displayed price: ${product.price}` : '',
    product.material ? `Material: ${product.material}` : '',
    product.metalPurity ? `Metal purity: ${product.metalPurity}` : '',
    product.leadTime ? `Expected lead time shown: ${product.leadTime}` : '',
    `Product link: ${productPath}`,
    '',
    'Please share:',
    '1. Certificate details',
    '2. Final price and making details',
    '3. Metal hallmarking details',
    '4. Delivery or consultation options',
    '',
    'My budget / city / preferred metal:',
  ].filter(Boolean).join('\n');
}
