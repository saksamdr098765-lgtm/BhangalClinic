import SITE_CONFIG from "@/app/SITE_CONFIG";

export function getLocationSchema(location) {
  const url = `${SITE_CONFIG.url}/locations/${location.slug}`;

  const schemas = [
    // Medical Business
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",

      "@id": `${url}#medicalclinic`,

      name: `${SITE_CONFIG.name} - ${location.city}`,

      url,

      image: `${SITE_CONFIG.url}${location.coverImage}`,

      description: location.shortDescription,

      telephone: SITE_CONFIG.phone,

      email: SITE_CONFIG.email,

     address: {
         "@type": "PostalAddress",
         streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.street}`,
         addressLocality: SITE_CONFIG.address.city,
         addressRegion: SITE_CONFIG.address.state,
         postalCode: SITE_CONFIG.address.postalCode,
         addressCountry: "IN",
       },

      openingHours: location.hours,

      areaServed: location.areas,

      priceRange: "₹₹",

      medicalSpecialty: "Diagnostic Laboratory",

    },

    // Medical WebPage
    {
      "@context": "https://schema.org",

      "@type": "MedicalWebPage",

      "@id": `${url}#webpage`,

      url,

      name: location.title,

      description: location.shortDescription,

      inLanguage: "en-IN",

      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },

      about: {
        "@id": `${url}#medicalclinic`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: `${SITE_CONFIG.url}${location.coverImage}`,
      },
    },

    // Breadcrumb
    {
      "@context": "https://schema.org",

      "@type": "BreadcrumbList",

      "@id": `${url}#breadcrumb`,

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

          name: "Locations",

          item: `${SITE_CONFIG.url}/locations`,
        },
        {
          "@type": "ListItem",

          position: 3,

          name: location.city,

          item: url,
        },
      ],
    },

    // Service
    {
      "@context": "https://schema.org",

      "@type": "Service",

      "@id": `${url}#services`,

      serviceType: "Diagnostic Laboratory Services",

      provider: {
        "@id": `${url}#medicalclinic`,
      },

      areaServed: {
        "@type": "City",

        name: location.city,
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Diagnostic Services",

        itemListElement: location.services.map((service) => ({
          "@type": "Offer",

          itemOffered: {
            "@type": "MedicalTest",

            name: service
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase()),
          },
        })),
      },
    },
  ];

  // FAQ Schema

  if (location.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",

      "@type": "FAQPage",

      "@id": `${url}#faq`,

      mainEntity: location.faq.map((item) => ({
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