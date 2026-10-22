import SITE_CONFIG from "@/app/SITE_CONFIG";


export const layoutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",

    "@id": `${SITE_CONFIG.url}/#medicalbusiness`,

    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,

    url: SITE_CONFIG.url,

    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,

    description: SITE_CONFIG.description,

    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,

    priceRange: SITE_CONFIG.priceRange,

    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.street}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        name: "Hours for the elderly",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },

    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  },

{
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${SITE_CONFIG.url}/#website`,

  url: SITE_CONFIG.url,

  name: SITE_CONFIG.name,

  description: SITE_CONFIG.description,

  inLanguage: "en-IN",

  publisher: {
    "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
  },

  potentialAction: {
    "@type": "SearchAction",

    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/packages?search={search_term_string}`,
    },

    "query-input": "required name=search_term_string",
  },
},

  {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${SITE_CONFIG.url}/#organization`,

    name: SITE_CONFIG.name,

    url: SITE_CONFIG.url,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "Customer Service",
    },

    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  },
];