import SITE_CONFIG from "@/app/SITE_CONFIG";


export const packageSchema = (pkg) => [
  // Package WebPage
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",

    "@id": `${SITE_CONFIG.url}/packages/${pkg.slug}#webpage`,

    url: `${SITE_CONFIG.url}/packages/${pkg.slug}`,

    name: `${pkg.name} | Bhangal Clinical Laboratories`,

    description: pkg.description,

    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },

    about: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },

    inLanguage: "en-IN",
  },

  // Breadcrumb
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Health Packages",
        item: `${SITE_CONFIG.url}/packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.name,
        item: `${SITE_CONFIG.url}/packages/${pkg.slug}`,
      },
    ],
  },

  // Medical Test
  {
    "@context": "https://schema.org",
    "@type": "MedicalTest",

    name: pkg.name,

    description: pkg.description,

    provider: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },

    offers: {
      "@type": "Offer",

      price: pkg.price,

      priceCurrency: "INR",

      availability: "https://schema.org/InStock",

      url: `${SITE_CONFIG.url}/packages/${pkg.slug}`,
    },
  },

  // Offer
  {
    "@context": "https://schema.org",
    "@type": "Offer",

    url: `${SITE_CONFIG.url}/packages/${pkg.slug}`,

    price: pkg.price,

    priceCurrency: "INR",

    availability: "https://schema.org/InStock",

    seller: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },
  },
  {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: pkg.faqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}
];