import SITE_CONFIG from "@/app/SITE_CONFIG";

export function getPriceSchema(priceData) {
  const slug = priceData.slug;
  const url = `${SITE_CONFIG.url}${priceData.seo?.canonical || `/prices/${slug}`}`;
  const title = priceData.hero?.title || priceData.seo?.title || "Blood Test Price";
  const description = priceData.seo?.description || priceData.hero?.subtitle || "";
  const offerPrice = priceData.priceCard?.offerPrice || 300;

  const schemas = [
    // Medical WebPage
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: title,
      description: description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
      },
      primaryImageOfPage: priceData.hero?.image ? {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${priceData.hero.image}`,
      } : undefined,
    },

    // MedicalTest with Pricing Offer
    {
      "@context": "https://schema.org",
      "@type": "MedicalTest",
      "@id": `${url}#medicaltest`,
      name: title,
      description: description,
      url: url,
      image: priceData.hero?.image ? `${SITE_CONFIG.url}${priceData.hero.image}` : undefined,
      usedToDiagnose: [
        {
          "@type": "MedicalCondition",
          name: "General Health Screening, Diabetes, Thyroid & Vital Parameters",
        },
      ],
      offers: {
        "@type": "Offer",
        price: offerPrice,
        priceCurrency: "INR",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: url,
        seller: {
          "@type": "MedicalOrganization",
          name: SITE_CONFIG.name,
          "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
          telephone: SITE_CONFIG.phone,
        },
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
          name: "Prices",
          item: `${SITE_CONFIG.url}/prices`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];

  // FAQ Schema
  const faqsList = priceData.faqs || priceData.faq;
  if (faqsList && faqsList.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqsList.map((item) => ({
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
