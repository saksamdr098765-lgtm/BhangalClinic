import SITE_CONFIG from "@/app/SITE_CONFIG";
export function getBlogSchema(blog) {
  const schemas = [
    // Blog Article
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",

      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#article`,

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}`,
      },

      headline: blog.title,

      description: blog.excerpt,

      image: [
        `${SITE_CONFIG.url}${blog.coverImage}`,
      ],

      datePublished: blog.publishedAt,

      dateModified: blog.updatedAt || blog.publishedAt,

      inLanguage: "en-IN",

      author: {
        "@type": "Person",
        name: blog.author.name,
      },

      publisher: {
        "@type": "MedicalOrganization",

        "@id": `${SITE_CONFIG.url}/#medicalbusiness`,

        name: SITE_CONFIG.name,

        logo: {
          "@type": "ImageObject",
          url: SITE_CONFIG.logo,
        },
      },

      keywords: blog.tags,

      articleSection: blog.category,

      articleBody: blog.content
        ?.filter((block) => block.type === "paragraph")
        .map((block) => block.text)
        .join("\n\n"),

      url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,
    },

    // Medical WebPage
    {
      "@context": "https://schema.org",

      "@type": "MedicalWebPage",

      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#webpage`,

      url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,

      name: blog.title,

      description: blog.excerpt,

      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },

      about: {
        "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${blog.coverImage}`,
      },

      inLanguage: "en-IN",
    },

    // Breadcrumb
    {
      "@context": "https://schema.org",

      "@type": "BreadcrumbList",

      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#breadcrumb`,

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
        {
          "@type": "ListItem",

          position: 3,

          name: blog.title,

          item: `${SITE_CONFIG.url}/blogs/${blog.slug}`,
        },
      ],
    },
  ];

  // FAQ Schema
  if (blog.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",

      "@type": "FAQPage",

      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#faq`,

      mainEntity: blog.faq.map((item) => ({
        "@type": "Question",

        name: item.question,

        acceptedAnswer: {
          "@type": "Answer",

          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}