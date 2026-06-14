export function isCustomConsultationProduct(product) {
  return product?.category === 'custom' || /consultation/i.test(product?.name || '') || Number(product?.priceValue || 0) <= 0;
}

export function hasMerchantRequiredFields(product) {
  return Boolean(
    product?.id &&
    product?.name &&
    product?.description &&
    product?.category &&
    product?.mainImage?.startsWith('/') &&
    product?.material &&
    product?.diamondOrigin?.toLowerCase().includes('laboratory-grown diamond') &&
    product?.details?.certification &&
    Number(product?.priceValue || 0) > 0
  );
}

export function getMerchantEligibilityReason(product) {
  if (isCustomConsultationProduct(product)) return 'custom_or_price_on_request';
  if (!hasMerchantRequiredFields(product)) return 'missing_required_feed_fields';
  return 'eligible';
}

export function getMerchantEligibleProducts(products) {
  return products.filter((product) => getMerchantEligibilityReason(product) === 'eligible');
}

export function buildMerchantTitle(product) {
  const raw = product.name.includes('Laboratory-Grown')
    ? product.name
    : `${product.name} - Laboratory-Grown Diamond`;
  return raw.slice(0, 150);
}

export function buildMerchantDescription(product) {
  const description = product.description || '';
  const hasOrigin = description.toLowerCase().includes('laboratory-grown diamond');
  const origin = hasOrigin ? '' : ' This piece uses a laboratory-grown diamond.';
  const verification = ' Certificate, metal purity, and lead time are confirmed before order.';
  return `${description}${origin}${verification}`.trim();
}

export function buildProductType(product) {
  return product.productType || `Jewellery > ${product.category} > ${product.style || 'Laboratory-grown diamond'}`;
}

export function formatMerchantPrice(product) {
  return `${Number(product.priceValue).toFixed(2)} INR`;
}
