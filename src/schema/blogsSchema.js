import { blogs } from "@/app/data/blogs";
import SITE_CONFIG from "@/app/SITE_CONFIG";

export const blogsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": `${SITE_CONFIG.url}/blogs#webpage`,

    url: `${SITE_CONFIG.url}/blogs`,

    name: "Health Blog",

    description:
      "Read expert health articles, wellness tips, disease prevention guides, diagnostic test information, and preventive healthcare insights from Bhangal Clinical Laboratories & ECG Center.",

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

    "@id": `${SITE_CONFIG.url}/blogs#breadcrumb`,

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
        name: "Health Blog",
        item: `${SITE_CONFIG.url}/blogs`,
      },
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "ItemList",

    "@id": `${SITE_CONFIG.url}/blogs#articles`,

    name: "Health Articles",

    numberOfItems: blogs.length,

    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",

      position: index + 1,

      url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,

      name: blog.title,
    })),
  },
];