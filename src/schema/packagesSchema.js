import { packages } from "@/app/data/packages";
import { tests } from "@/app/data/tests";
import SITE_CONFIG from "@/app/SITE_CONFIG";


export const packagesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": `${SITE_CONFIG.url}/packages#webpage`,

    url: `${SITE_CONFIG.url}/packages`,

    name: "Health Packages",

    description:
      "Browse affordable health checkup packages including full body checkups, diabetes screening, thyroid profiles, heart health packages, and preventive diagnostic tests at Bhangal Clinical Laboratories & ECG Center.",

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

    "@id": `${SITE_CONFIG.url}/packages#breadcrumb`,

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
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "ItemList",

    "@id": `${SITE_CONFIG.url}/packages#itemlist`,

    name: "Health Checkup Packages",

    numberOfItems: packages.length,

    itemListElement: packages.map((pkg, index) => ({
      "@type": "ListItem",

      position: index + 1,

      url: `${SITE_CONFIG.url}/packages/${pkg.slug}`,

      name: pkg.name,
    })),
  },
  {
  "@context": "https://schema.org",
  "@type": "ItemList",

  "@id": `${SITE_CONFIG.url}/packages#tests`,

  name: "Popular Blood Tests",

  numberOfItems: tests.length,

  itemListElement: tests.map((test, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_CONFIG.url}/tests/${test.slug}`,
    name: test.name,
  })),
},
];