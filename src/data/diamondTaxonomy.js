export const diamondTaxonomy = {
  root: {
    label: "Laboratory-grown diamond jewellery",
    href: "/laboratory-grown-diamonds/",
    description: "Dazzle catalogue organized by buyer intent, jewellery type, and design family.",
  },
  groups: [
    {
      id: "rings",
      label: "Rings",
      href: "/laboratory-grown-diamond-rings/",
      description: "Solitaire, halo, three-stone, band, and occasion rings.",
      children: [
        { label: "Engagement rings", href: "/laboratory-grown-diamond-engagement-rings/", intent: "High-consideration purchase" },
        { label: "Certified rings", href: "/certified-laboratory-grown-diamond-rings/", intent: "Verification-led shortlist" },
        { label: "Bespoke rings", href: "/bespoke-laboratory-grown-diamond-rings/", intent: "Made-to-order design" },
        { label: "Ring checklist", href: "/diamond-ring-buying-checklist/", intent: "Buyer education" },
      ],
    },
    {
      id: "pendants",
      label: "Pendants",
      href: "/laboratory-grown-diamond-pendants/",
      description: "Solitaire, halo, bar, and custom pendants.",
      children: [
        { label: "Daily pendants", href: "/laboratory-grown-diamond-pendants/", intent: "Everyday wear" },
        { label: "Anniversary pendants", href: "/custom-laboratory-grown-diamond-jewellery/", intent: "Gift consultation" },
      ],
    },
    {
      id: "earrings",
      label: "Earrings",
      href: "/laboratory-grown-diamond-earrings/",
      description: "Stud, hoop, huggie, and drop earrings.",
      children: [
        { label: "Stud earrings", href: "/laboratory-grown-diamond-earrings/", intent: "Daily wear and gifting" },
        { label: "Custom earrings", href: "/custom-laboratory-grown-diamond-jewellery/", intent: "Matched-pair consultation" },
      ],
    },
    {
      id: "bracelets",
      label: "Bracelets",
      href: "/collections/bracelets/",
      description: "Tennis, station, and chain bracelets.",
      children: [
        { label: "Tennis bracelets", href: "/collections/bracelets/", intent: "High-value bracelet" },
        { label: "Custom bracelets", href: "/custom-laboratory-grown-diamond-jewellery/", intent: "Made-to-order fit" },
      ],
    },
    {
      id: "local",
      label: "Local consultation",
      href: "/laboratory-grown-diamonds-in-bhagalpur/",
      description: "Local trust pages for Bhagalpur and Bihar buyers.",
      children: [
        { label: "Bhagalpur", href: "/laboratory-grown-diamonds-in-bhagalpur/", intent: "Local market" },
        { label: "Bihar", href: "/laboratory-grown-diamonds-in-bihar/", intent: "Regional market" },
        { label: "Engagement consultation", href: "/engagement-ring-consultation-bhagalpur/", intent: "Local conversion" },
      ],
    },
  ],
};

export const highIntentRoutes = [
  "/laboratory-grown-diamonds/",
  "/laboratory-grown-diamond-rings/",
  "/laboratory-grown-diamond-engagement-rings/",
  "/laboratory-grown-diamond-pendants/",
  "/laboratory-grown-diamond-earrings/",
  "/custom-laboratory-grown-diamond-jewellery/",
  "/igi-certified-laboratory-grown-diamonds/",
  "/laboratory-grown-diamond-buying-guide/",
  "/laboratory-grown-diamonds-in-bhagalpur/",
  "/laboratory-grown-diamonds-in-bihar/",
  "/merchant-center-readiness/",
  "/google-shopping-readiness/",
  "/diamond-jewellery-catalogue/",
  "/laboratory-grown-diamond-consultation/",
  "/certified-laboratory-grown-diamond-rings/",
  "/bespoke-laboratory-grown-diamond-rings/",
  "/diamond-ring-buying-checklist/",
  "/engagement-ring-consultation-bhagalpur/",
];
