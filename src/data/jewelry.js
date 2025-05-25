// src/data/jewelry.js
export const jewelryItems = [
  {
    id: 'solitaire-round-ring',
    name: 'Classic Solitaire Round Diamond Ring',
    category: 'rings', // <-- IMPORTANT: Must be a string and present for every item
    mainImage: '/images/products/solitaire-round-1.png',
    additionalImages: [
      '/images/products/solitaire-round-2.png',
      '/images/products/solitaire-round-3.png',
      '/images/products/solitaire-round-4.png'
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
    price: '₹5,50,000', // Display price
    priceValue: 550000, // Numeric value for sorting and range filtering
    material: 'Platinum', // For filtering (e.g., Platinum, Yellow Gold, White Gold, Rose Gold, Silver)
    stoneType: 'Diamond', // For filtering (e.g., Diamond, Emerald, Ruby, Sapphire)
    style: 'Solitaire', // For filtering (e.g., Solitaire, Halo, Pave, Stud, Hoop, Pendant, Tennis, Bangle, Custom, Cocktail)
    dimensions: 'Diamond: 6.5mm, Band Width: 2mm, Weight: 4.5g',
    careInstructions: 'Clean with mild soap and soft brush. Store separately to prevent scratches. Avoid harsh chemicals and extreme temperatures.',
    uniqueFeatures: 'Ethically sourced, GIA certified diamond. Hand-polished to a brilliant shine. Comes with a complimentary luxury velvet box.',
    dateAdded: new Date('2024-07-01T10:00:00Z'), // For 'Newest' sort. Ensure it's a valid Date object.
    popularityScore: 5 // Example for 'Popularity' sort (1-10 scale, higher is more popular)
  },
  {
    id: 'emerald-cut-pendant',
    name: 'Emerald Cut Diamond Pendant Necklace',
    category: 'necklaces', // <-- IMPORTANT
    mainImage: '/images/products/emerald-pendant-1.png',
    additionalImages: [
      '/images/products/emerald-pendant-2.png',
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
    price: '₹3,80,000',
    priceValue: 380000,
    material: 'White Gold',
    stoneType: 'Diamond',
    style: 'Pendant',
    dimensions: 'Pendant: 10mm x 7mm, Chain Length: 18 inches, Weight: 3.2g',
    careInstructions: 'Avoid harsh chemicals. Store in a soft pouch to prevent tangling. Professional cleaning recommended annually.',
    uniqueFeatures: 'Unique emerald cut, perfect for layering or as a statement piece. Secure clasp for daily wear.',
    dateAdded: new Date('2024-06-15T11:00:00Z'),
    popularityScore: 7
  },
  {
    id: 'bracelet-large-diamonds',
    name: 'Diamond Chain Bracelet',
    category: 'bracelets', // <-- IMPORTANT
    mainImage: '/images/products/bracelet1.png',
    additionalImages: [
      // If you add more images for this bracelet, put their paths here:
      // '/images/products/bracelet1-2.png',
    ],
    description: 'An elegant diamond chain bracelet featuring delicately set diamonds in 18K white gold. Sophisticated and versatile.',
    details: {
      metal: '18K White Gold',
      mainStone: '0.75 Carat Total Weight Round Diamonds',
      cut: 'Very Good',
      color: 'F-G',
      clarity: 'VS2',
      certification: 'IGI Certified'
    },
    price: '₹2,50,000',
    priceValue: 250000,
    material: 'White Gold',
    stoneType: 'Diamond',
    style: 'Chain', // Adjusted style to be more specific than just 'Bracelet'
    dimensions: 'Length: 7 inches, Width: 2mm, Weight: 5.8g',
    careInstructions: 'Wipe with a soft cloth after each wear. Avoid contact with perfumes and lotions. Inspect clasps periodically.',
    uniqueFeatures: 'Flexible chain for comfortable fit. Ideal for stacking with other bracelets or wearing on its own.',
    dateAdded: new Date('2024-07-18T12:00:00Z'),
    popularityScore: 6
  },
  {
    id: 'diamond-stud-earrings',
    name: 'Classic Diamond Stud Earrings',
    category: 'earrings', // <-- IMPORTANT: New category
    mainImage: '/images/products/diamond-studs-1.png',
    additionalImages: [
      '/images/products/diamond-studs-2.png',
      '/images/products/diamond-studs-3.png'
    ],
    description: 'Timeless diamond stud earrings, a versatile staple for every jewelry collection. Available in various carat weights.',
    details: {
      metal: '14K Yellow Gold',
      mainStone: '0.50 Carat Total Weight Round Diamonds',
      cut: 'Excellent',
      color: 'G',
      clarity: 'VS2',
      certification: 'GIA Certified'
    },
    price: '₹1,50,000',
    priceValue: 150000,
    material: 'Yellow Gold',
    stoneType: 'Diamond',
    style: 'Stud',
    dimensions: 'Each Diamond: 4.5mm diameter, Weight: 2.1g (pair)',
    careInstructions: 'Clean regularly with a mild jewelry cleaner. Ensure backs are secure before wearing. Store in a padded box.',
    uniqueFeatures: 'Perfect for daily wear or formal occasions, available with secure screw-back or push-back options. Hypoallergenic posts.',
    dateAdded: new Date('2024-07-10T13:00:00Z'),
    popularityScore: 8
  },
  {
    id: 'cocktail-ring-floral',
    name: 'Sparkling Floral Cocktail Ring',
    category: 'rings', // <-- IMPORTANT: Existing category
    mainImage: '/images/products/cocktail-ring-1.png',
    additionalImages: [
      '/images/products/cocktail-ring-2.png',
    ],
    description: 'An exquisite cocktail ring featuring a captivating floral design adorned with brilliant diamonds, perfect for making a statement.',
    details: {
      metal: '18K Rose Gold',
      mainStone: '2.00 Carat Total Weight Mixed Cut Diamonds',
      cut: 'Very Good',
      color: 'G-H',
      clarity: 'VS2-SI1',
      certification: 'IGI Certified'
    },
    price: '₹4,90,000',
    priceValue: 490000,
    material: 'Rose Gold',
    stoneType: 'Diamond',
    style: 'Cocktail',
    dimensions: 'Top Surface: 20mm diameter, Weight: 9.8g',
    careInstructions: 'Avoid harsh chemicals and impact. Professional cleaning recommended. Store in a separate compartment to avoid scratches.',
    uniqueFeatures: 'Intricate floral motif, ideal for special occasions. Features a comfortable wide band design.',
    dateAdded: new Date('2024-07-25T14:00:00Z'),
    popularityScore: 9
  },
  {
    id: 'simple-silver-necklace',
    name: 'Delicate Silver Diamond Necklace',
    category: 'necklaces', // <-- IMPORTANT: Existing category
    mainImage: '/images/products/silver-necklace-1.png',
    additionalImages: [],
    description: 'A charming necklace featuring a small, brilliant diamond set in pure sterling silver, perfect for minimalist everyday wear.',
    details: {
      metal: '925 Sterling Silver',
      mainStone: '0.10 Carat Round Diamond',
      cut: 'Good',
      color: 'H-I',
      clarity: 'SI2',
      certification: 'In-house Certified'
    },
    price: '₹15,000',
    priceValue: 15000,
    material: 'Silver',
    stoneType: 'Diamond',
    style: 'Pendant',
    dimensions: 'Pendant: 5mm diameter, Chain Length: 16-18 inches (adjustable), Weight: 2.0g',
    careInstructions: 'Polish with a silver cleaning cloth. Avoid prolonged exposure to moisture to prevent tarnishing.',
    uniqueFeatures: 'Hypoallergenic, perfect for gifting. Adjustable chain length for versatile styling.',
    dateAdded: new Date('2024-08-01T15:00:00Z'),
    popularityScore: 4
  },
  {
    id: 'custom-engagement-ring',
    name: 'Bespoke Diamond Engagement Ring',
    category: 'custom', // <-- IMPORTANT: New category
    mainImage: '/images/products/custom-ring-1.png',
    additionalImages: [
      '/images/products/custom-ring-2.png',
    ],
    description: 'Design the engagement ring of your dreams with our bespoke service. Choose your diamond and setting to create a truly unique symbol of love.',
    details: {
      metal: 'Customizable (Platinum, 18K Gold)',
      mainStone: 'Client\'s Choice',
      cut: 'Client\'s Choice',
      color: 'Client\'s Choice',
      clarity: 'Client\'s Choice',
      certification: 'GIA/IGI Certified'
    },
    price: 'Price Upon Request',
    priceValue: 0,
    material: 'Customizable',
    stoneType: 'Diamond',
    style: 'Custom',
    dimensions: 'Customizable based on design',
    careInstructions: 'Care instructions provided upon finalization of design and materials.',
    uniqueFeatures: 'One-on-one design consultation, 3D rendering included. Crafting your unique love story.',
    dateAdded: new Date('2024-07-28T16:00:00Z'),
    popularityScore: 3
  }
];