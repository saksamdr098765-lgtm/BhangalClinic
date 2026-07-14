import SITE_CONFIG from "@/app/SITE_CONFIG";

const faqs = [
  {
    question: "How can I book a blood test?",
    answer:
      "You can book online through our website, call our laboratory directly, or request a home sample collection at your preferred time.",
  },
  {
    question: "Do you provide home sample collection?",
    answer:
      "Yes. Our trained phlebotomists collect samples safely from your home across our service areas.",
  },
  {
    question: "When will I receive my reports?",
    answer:
      "Most routine diagnostic reports are delivered digitally on the same day, while specialized tests may take longer.",
  },
  {
    question: "Can I download my reports online?",
    answer:
      "Yes. Reports are securely delivered online and can be downloaded anytime after they're available.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept cash, UPI, debit cards, credit cards, and other supported online payment methods.",
  },
];

export const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    "@id": `${SITE_CONFIG.url}/contact#webpage`,
    url: `${SITE_CONFIG.url}/contact`,
    name: "Contact Us",

    description:
      "Contact Bhangal Clinical Laboratories & ECG Center for blood tests, ECG, home sample collection, and diagnostic services.",

    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },

    about: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },

    mainEntity: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },

    inLanguage: "en-IN",
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    "@id": `${SITE_CONFIG.url}/contact#breadcrumb`,

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
        name: "Contact",
        item: `${SITE_CONFIG.url}/contact`,
      },
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    "@id": `${SITE_CONFIG.url}/contact#faq`,

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];