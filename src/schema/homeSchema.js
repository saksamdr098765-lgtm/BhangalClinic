// app/schemas/homeSchema.js

import SITE_CONFIG from "@/app/SITE_CONFIG";



export const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",

    "@id": `${SITE_CONFIG.url}/#homepage`,

    url: SITE_CONFIG.url,

    name: "Home",

    headline: "Affordable Blood Tests & Health Checkups in Garhshankar",

    description: SITE_CONFIG.description,

    inLanguage: "en-IN",

    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },

    about: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    },
  },

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
    ],
  },
];