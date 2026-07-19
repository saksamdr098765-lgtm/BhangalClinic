export const locations = [
  {
    id: 1,

    slug: "phagwara",

    city: "Phagwara",

    state: "Punjab",

    title: "Diagnostic Laboratory in Phagwara",

    shortDescription:
      "DK Bhangal Laboratory offers accurate blood tests, pathology services, ECG, preventive health checkups, and home sample collection in Phagwara.",

    coverImage: "/locations/phagwara/cover.jpg",

    seo: {
      title:
        "Best Diagnostic Laboratory in Phagwara | Blood Test & Health Packages",

      description:
        "Looking for a trusted diagnostic laboratory in Phagwara? DK Bhangal Laboratory offers blood tests, pathology services, ECG, preventive health packages, and home sample collection.",

      keywords: [
        "Diagnostic Laboratory Phagwara",
        "Blood Test Phagwara",
        "Pathology Lab Phagwara",
        "Health Checkup Phagwara",
        "Home Sample Collection Phagwara",
        "Blood Test Near Me",
      ],
    },

    overview: {
      paragraphs: [
        "DK Bhangal Laboratory & ECG proudly provides reliable diagnostic services to patients across Phagwara and nearby areas. We understand that timely and accurate laboratory testing is essential for early disease detection, routine health monitoring, and effective medical treatment. Our laboratory combines experienced professionals with modern diagnostic technology to deliver dependable results for individuals and families.",

        "Whether you need routine blood investigations, preventive health checkups, ECG services, or specialized pathology testing, our team is committed to maintaining high standards of accuracy, safety, and patient care. We also offer convenient home sample collection for patients who prefer testing from the comfort of their homes.",

        "Over the years, patients from Phagwara and surrounding regions have trusted DK Bhangal Laboratory for quality diagnostic services, transparent pricing, fast report delivery, and personalized healthcare support."
      ],

      highlights: [
        "Advanced Diagnostic Laboratory",
        "Experienced Professionals",
        "500+ Laboratory Tests",
        "Preventive Health Packages",
        "Home Sample Collection",
        "Fast Report Delivery",
        "Affordable Pricing",
        "Patient Focused Care",
      ],
    },

    services: [
      "home-sample-collection",
      "blood-test-at-home",
      "ecg-test",
      "cbc-test",
      "thyroid-profile",
      "vitamin-d-test",
      "vitamin-b12-test",
      "diabetes-testing",
      "liver-function-test",
      "kidney-function-test",
      "lipid-profile",
      "allergy-testing",
    ],

    packages: [
      "bhangal-basic-profile",
      "bhangal-master-health-screen",
      "bhangal-senior-citizen-profile",
      "bhangal-ayush-profile-3",
      "bcl-female-4-package",
      "bcl-med-pro-65-package",
    ],

    whyChoose: {
      features: [
        {
          icon: "activity",
          title: "Advanced Diagnostic Technology",
          description:
            "Modern laboratory equipment delivers accurate and dependable diagnostic reports.",
        },
        {
          icon: "award",
          title: "Experienced Professionals",
          description:
            "Our skilled laboratory team follows strict quality standards for every test.",
        },
        {
          icon: "shield",
          title: "Quality & Safety",
          description:
            "Every sample is processed under standardized laboratory protocols.",
        },
        {
          icon: "clock",
          title: "Fast Reports",
          description:
            "Quick turnaround without compromising report accuracy.",
        },
        {
          icon: "users",
          title: "Patient-Centered Care",
          description:
            "Friendly staff dedicated to providing the best patient experience.",
        },
        {
          icon: "check",
          title: "Affordable Pricing",
          description:
            "Transparent pricing on blood tests and preventive health packages.",
        },
      ],
    },

    areas: [
      "Phagwara City",
      "Satnampura",
      "Model Town",
      "Hargobind Nagar",
      "Green Valley",
      "Urban Estate",
      "Sugar Mill Area",
      "GT Road",
      "Jalandhar Road",
      "Hoshiarpur Road",
      "Banga Road",
      "Chachoki",
      "Palahi",
      "Hardaspur",
      "LPU Campus",
      "Lovely Professional University",
      "Bhularai",
      "Khajurla",
      "Jagatpura",
      "Nangal",
    ],

    blogs: [
      "vitamin-d-deficiency",
      "vitamin-b12-deficiency",
      "thyroid-disorders",
      "diabetes-screening",
      "anemia-symptoms",
      "cbc-test-guide",
    ],

    faq: [
      {
        question:
          "Which is the best diagnostic laboratory in Phagwara?",
        answer:
          "DK Bhangal Laboratory provides comprehensive pathology services including blood tests, preventive health packages, ECG, and home sample collection with reliable reporting.",
      },

      {
        question:
          "Do you provide home sample collection in Phagwara?",
        answer:
          "Yes. Our trained phlebotomists collect blood samples from your home safely and conveniently.",
      },

      {
        question:
          "How can I book a blood test?",
        answer:
          "You can call us, visit our laboratory, or request a home sample collection appointment.",
      },

      {
        question:
          "How long does it take to receive reports?",
        answer:
          "Routine blood tests are generally reported quickly, while specialized investigations may require additional processing time.",
      },

      {
        question:
          "Do you offer preventive health packages?",
        answer:
          "Yes. We offer affordable preventive health packages for men, women, senior citizens, diabetes, thyroid health, and complete wellness screening.",
      },

      {
        question:
          "Are your laboratory reports accurate?",
        answer:
          "Yes. We use modern laboratory technology and strict quality control procedures to ensure dependable diagnostic reports.",
      },
    ],

    address:
      "Near Civil Hospital, GT Road, Phagwara, Punjab 144401",

    phone: "+91 98765 43210",

    email: "info@dkbhangallab.com",

    hours:
      "Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: 9:00 AM – 2:00 PM",

    mapLink:
      "https://maps.google.com/?q=DK+Bhangal+Laboratory+Phagwara",

    mapEmbed:
      "https://www.google.com/maps/embed?pb=YOUR_EMBED_URL",
  },
];

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}