import SITE_CONFIG from "@/app/SITE_CONFIG";


export const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",

    "@id": `${SITE_CONFIG.url}/about#webpage`,

    url: `${SITE_CONFIG.url}/about`,

    name: "About Us",

    description:
      "Learn about Bhangal Clinical Laboratories & ECG Center, our mission, experienced team, advanced diagnostics, and commitment to accurate healthcare services.",

    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },

    about: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },

    inLanguage: "en-IN",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${SITE_CONFIG.url}/about-us`,
      },
    ],
  },
];