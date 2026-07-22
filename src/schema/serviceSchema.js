import SITE_CONFIG from "@/app/SITE_CONFIG";

export function getServiceSchema(service) {
  const schemas = [
    // Medical WebPage
    {
      "@context": "https://schema.org",

      "@type": "MedicalWebPage",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}#webpage`,

      url: `${SITE_CONFIG.url}/services/${service.slug}`,

      name: service.title,

      description: service.description,

      inLanguage: "en-IN",

      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },

      about: {
        "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: `${SITE_CONFIG.url}${service.coverImage}`,
      },
    },

    // Medical Service
    {
      "@context": "https://schema.org",

      "@type": "MedicalProcedure",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}#service`,

      name: service.title,

      description: service.description,

      image: `${SITE_CONFIG.url}${service.coverImage}`,

      url: `${SITE_CONFIG.url}/services/${service.slug}`,

      provider: {
        "@type": "MedicalOrganization",

        "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
      },

      availableService: {
        "@type": "MedicalTest",

        name: service.title,
      },
    },

    // Breadcrumb
    {
      "@context": "https://schema.org",

      "@type": "BreadcrumbList",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}#breadcrumb`,

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

          name: "Diagnostic Services",

          item: `${SITE_CONFIG.url}/services`,
        },
        {
          "@type": "ListItem",

          position: 3,

          name: service.title,

          item: `${SITE_CONFIG.url}/services/${service.slug}`,
        },
      ],
    },
  ];

  // FAQ Schema
  if (service.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",

      "@type": "FAQPage",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}#faq`,

      mainEntity: service.faq.map((item) => ({
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