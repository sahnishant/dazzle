// src/data/jewelry.js
export const jewelryItems = [
  {
    id: 'solitaire-round-ring',
    name: 'Classic Solitaire Round Diamond Ring',
    category: 'rings',
    mainImage: '/images/products/solitaire-round-1.jpg',
    additionalImages: [
      '/images/products/solitaire-round-2.jpg',
      '/images/products/solitaire-round-3.jpg'
    ],
    description: 'A timeless solitaire ring featuring a brilliant round-cut diamond set in a classic four-prong platinum band. Perfect for an engagement or a cherished gift.',
    details: {
      metal: 'Platinum',
      mainStone: '1.00 Carat Round Brilliant Diamond',
      cut: 'Excellent',
      color: 'D',
      clarity: 'VS1',
      certification: 'GIA Certified'
    },
    price: 'Upon Request'
  },
  {
    id: 'emerald-cut-pendant',
    name: 'Emerald Cut Diamond Pendant Necklace',
    category: 'necklaces',
    mainImage: '/images/products/emerald-pendant-1.jpg',
    additionalImages: [
      '/images/products/emerald-pendant-2.jpg',
    ],
    description: 'An elegant emerald-cut diamond pendant suspended from a delicate 18K white gold chain. Sophisticated and striking.',
    details: {
      metal: '18K White Gold',
      mainStone: '0.75 Carat Emerald Cut Diamond',
      cut: 'Very Good',
      color: 'F',
      clarity: 'VVS2',
      certification: 'IGI Certified'
    },
    price: 'Upon Request'
  },
  // Add more items here!
];