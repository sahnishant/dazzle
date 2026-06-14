import { jewelryItems } from './jewelry.js';

export const collectionTree = [
  {
    label: 'Diamond',
    slug: 'diamond',
    children: [
      { label: 'Rings', slug: 'rings', href: '/laboratory-grown-diamond-rings/' },
      { label: 'Engagement Rings', slug: 'engagement-rings', href: '/laboratory-grown-diamond-engagement-rings/' },
      { label: 'Pendants and Necklaces', slug: 'pendants', href: '/laboratory-grown-diamond-pendants/' },
      { label: 'Earrings', slug: 'earrings', href: '/laboratory-grown-diamond-earrings/' },
      { label: 'Bracelets', slug: 'bracelets', href: '/collections/bracelets/' },
      { label: 'Custom Jewellery', slug: 'custom', href: '/custom-laboratory-grown-diamond-jewellery/' },
    ],
  },
];

export function productsForCategory(category) {
  return jewelryItems.filter((item) => item.category === category);
}

export function groupedProducts() {
  return jewelryItems.reduce((groups, item) => {
    const key = item.category || 'other';
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});
}
