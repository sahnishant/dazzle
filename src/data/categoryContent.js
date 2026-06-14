export const categoryContent = {
  rings: {
    title: "Laboratory-grown diamond rings",
    description: "Explore solitaire, halo, three-stone, band, daily-wear, and custom laboratory-grown diamond rings.",
    h1: "Laboratory-grown diamond rings",
    intro: "Shortlist ring designs by style, metal, budget, and verification needs. Confirm certificate path, metal purity, ring size, and lead time before advance payment.",
    buyerNotes: [
      "Best for engagement, gifting, anniversary, daily-wear, and custom family-approved purchases.",
      "Confirm ring size, resizing possibility, certificate details, final price, and metal hallmarking before order.",
      "Use WhatsApp consultation for stone selection and design variations.",
    ],
    guideLinks: [
      { label: "Engagement rings", href: "/laboratory-grown-diamond-engagement-rings/" },
      { label: "Ring checklist", href: "/diamond-ring-buying-checklist/" },
      { label: "Certified rings", href: "/certified-laboratory-grown-diamond-rings/" },
      { label: "Bespoke rings", href: "/bespoke-laboratory-grown-diamond-rings/" },
    ],
  },
  necklaces: {
    title: "Laboratory-grown diamond pendants and necklaces",
    description: "Browse solitaire pendants, halo pendants, bar necklaces, and custom laboratory-grown diamond necklace designs.",
    h1: "Laboratory-grown diamond pendants and necklaces",
    intro: "Pendants and necklaces should be shortlisted by stone size, chain metal, daily-wear comfort, and certificate preference.",
    buyerNotes: [
      "Confirm chain length, metal purity, clasp type, and stone certification path.",
      "For gifts, confirm delivery city and timeline before finalizing the design.",
      "Avoid assuming ready stock; use consultation to verify availability.",
    ],
    guideLinks: [
      { label: "Pendant guide", href: "/laboratory-grown-diamond-pendants/" },
      { label: "Custom jewellery", href: "/custom-laboratory-grown-diamond-jewellery/" },
      { label: "Certification", href: "/igi-certified-laboratory-grown-diamonds/" },
    ],
  },
  earrings: {
    title: "Laboratory-grown diamond earrings",
    description: "Browse stud, oval, huggie, drop, and custom laboratory-grown diamond earrings.",
    h1: "Laboratory-grown diamond earrings",
    intro: "Earrings should be shortlisted by pair matching, comfort, closure type, face-up size, and certificate path.",
    buyerNotes: [
      "Matched pairs need careful colour, clarity, size, and cut confirmation.",
      "Confirm screw-back, push-back, hoop, or drop mechanism before order.",
      "For daily wear, ask about comfort and cleaning guidance.",
    ],
    guideLinks: [
      { label: "Earring guide", href: "/laboratory-grown-diamond-earrings/" },
      { label: "Custom earrings", href: "/custom-laboratory-grown-diamond-jewellery/" },
      { label: "Shipping policy", href: "/shipping-policy/" },
    ],
  },
  bracelets: {
    title: "Laboratory-grown diamond bracelets",
    description: "Explore tennis, station, chain, and custom laboratory-grown diamond bracelet designs.",
    h1: "Laboratory-grown diamond bracelets",
    intro: "Bracelets require fit, clasp security, total carat weight, certificate path, and metal purity confirmation.",
    buyerNotes: [
      "Confirm wrist size, clasp type, safety lock, and total carat range.",
      "Tennis bracelets need clear price and stone specification before order.",
      "Ask for final photos and delivery handling before dispatch.",
    ],
    guideLinks: [
      { label: "Custom bracelet", href: "/custom-laboratory-grown-diamond-jewellery/" },
      { label: "Certification policy", href: "/certification-policy/" },
      { label: "Return and exchange", href: "/return-exchange-policy/" },
    ],
  },
  custom: {
    title: "Custom laboratory-grown diamond jewellery",
    description: "Start a consultation for custom rings, pendants, earrings, bracelets, and occasion jewellery.",
    h1: "Custom laboratory-grown diamond jewellery",
    intro: "Custom jewellery should begin with a clear brief, budget, metal preference, certificate expectation, and delivery timeline.",
    buyerNotes: [
      "Confirm design, estimate, certificate path, metal purity, lead time, and cancellation terms before advance.",
      "Custom products are not standard ready-stock items.",
      "Use consultation to select the exact stone and final making details.",
    ],
    guideLinks: [
      { label: "Custom process", href: "/custom-order-policy/" },
      { label: "Consultation", href: "/laboratory-grown-diamond-consultation/" },
      { label: "Bhagalpur consultation", href: "/laboratory-grown-diamonds-in-bhagalpur/" },
    ],
  },
};

export function getCategoryContent(category) {
  return categoryContent[category] || {
    title: `${category} laboratory-grown diamond jewellery`,
    description: `Browse ${category} laboratory-grown diamond jewellery from Dazzle.`,
    h1: `${category} laboratory-grown diamond jewellery`,
    intro: "Shortlist by design, metal, price, certificate path, and lead time.",
    buyerNotes: [
      "Confirm origin, certificate path, metal purity, final price, and lead time before payment.",
    ],
    guideLinks: [
      { label: "All collections", href: "/collections/" },
      { label: "Consultation", href: "/laboratory-grown-diamond-consultation/" },
    ],
  };
}
