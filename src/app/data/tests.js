import { FaBolt, FaNotesMedical, FaSyringe, FaVenusMars } from "react-icons/fa";
import {
  FaDroplet,
  FaHeartPulse,
  FaBrain,
  FaBone,
  FaDna,
  FaVirus,
  FaShieldVirus,
  // FaKidney,
  FaLungs,
  FaFlask,
  FaCapsules,
  FaMicroscope,
  FaBottleDroplet,
  FaStethoscope,
  FaVials,
} from "react-icons/fa6";
import { GiKidneys, GiLungs, GiStomach } from "react-icons/gi";
export const tests = [
  // =========================
  // HAEMATOLOGY
  // =========================


  {
    slug: "mp-antigen-test",
    name: "MP Antigen Test",
    shortName: "MP Antigen",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Detects malaria parasite antigen for early diagnosis of malaria infection.",
    price: 200,
    reportTime: "24 Hours",
    status:"draft"
  },

  {
    slug: "platelet-count",
    name: "Platelet Count",
    shortName: "Platelet",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Measures platelet count to evaluate blood clotting disorders and dengue-related thrombocytopenia.",
    price: 150,
    reportTime: "24 Hours",
  },

  {
    slug: "absolute-eosinophil-count",
    name: "Absolute Eosinophil Count",
    shortName: "AEC",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Measures eosinophil levels to help diagnose allergies, asthma and parasitic infections.",
    price: 150,
    reportTime: "24 Hours",
     status:"draft"
  },

  {
    slug: "esr-test",
    name: "Erythrocyte Sedimentation Rate",
    shortName: "ESR",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Measures inflammation in the body associated with infections and autoimmune diseases.",
    price: 100,
    reportTime: "24 Hours",
       status:"draft"
  },

{
    slug: "cbc-test",
    name: "Complete Blood Count",
    shortName: "CBC",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 24,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "CBC (Complete Blood Count) test checks red blood cells, white blood cells, platelets and hemoglobin levels to evaluate your overall blood health.",
    price: 300,
    reportTime: "24 Hours",
    status: "published",

    seo: {
      title: "CBC Test - Full Form, Price & Normal Range | Book CBC Blood Test",
      description:
        "Book a CBC test (Complete Blood Count) with home sample collection. Check CBC test price, normal range, and same-day digital reports.",
      keywords: [
        "cbc test",
        "cbc test full form",
        "cbc blood test",
        "complete blood count test",
        "cbc test price",
        "cbc test near me",
        "cbc test normal range",
        "cbc test results chart",
        "cbc test fasting",
        "cbc panel test",
      ],
    },

    hero: {
      badge: "Home Sample Collection Available",

      title: "CBC Blood Test - Complete Blood Count",

      description:
        "Book a CBC Test (Complete Blood Count) near you with fast report delivery, professional sample collection, and convenient home collection services. Check CBC test price and book online.",

      image: "/tests/cbc.webp",

      imageAlt: "CBC Blood Test - Complete Blood Count Test",

      reportTime: "24 Hours",

      homeCollection: "Available",

      trustPoints: [
        "Professional Sample Collection",
        "Digital Reports",
        "Affordable CBC Test Price",
        "Quality-Controlled Testing",
      ],

      bookButton: "Book CBC Test",

      bookingUrl: "/prices/cbc-test-price-garhshankar",

      phone: "+918968038602",
    },

    quickFacts: {
      sample: "Blood Sample",

      reportTime: "24 Hours",

      fasting: "Not Required",

      homeCollection: "Available",

      ageGroup: "Adults & Children",
    },

    whyChooseUs: {

      title: "Why Choose Our CBC Blood Test Service?",

      description:
        "Get a reliable CBC test near you with convenient booking, professional sample collection, and easy access to digital reports.",


      items: [

        {
          title: "Professional Sample Collection",

          description:
            "Samples are collected using proper procedures for a comfortable testing experience.",
        },


        {
          title: "Quality Testing Process",

          description:
            "Your CBC test is processed using standardized laboratory procedures for accurate results.",
        },


        {
          title: "Fast Digital Reports",

          description:
            "Receive your CBC test report conveniently after completion of testing.",
        },


        {
          title: "Home Collection Available",

          description:
            "Book CBC test home sample collection from your home at a convenient time.",
        },

      ],

    },

    testDetails: {

      title: "About CBC Blood Test (Full Form: Complete Blood Count)",

      description: [

        "CBC test full form is Complete Blood Count — a common blood test used to check different components of blood, including red blood cells, white blood cells, hemoglobin, hematocrit, and platelets.",

        "This test helps healthcare professionals evaluate general health status, screen for anemia and infection, and identify conditions that may require further medical attention.",

      ],


      included: [

        "Hemoglobin Level",

        "Red Blood Cell (RBC) Count",

        "White Blood Cell (WBC) Count",

        "Platelet Count",

        "Hematocrit (PCV)",

        "MCV, MCH, MCHC Indices",

      ],

    },

    preparation: {

      title: "Preparation Before CBC Blood Test",

      description:
        "Follow these simple instructions before your CBC test to ensure a smooth sample collection experience.",


      items: [

        {
          title: "CBC Test Fasting Requirement",

          description:
            "Fasting is generally not required for a CBC Blood Test. Follow your healthcare provider's instructions if additional tests are included.",
        },


        {
          title: "Stay Hydrated",

          description:
            "Drinking enough water can make the sample collection process more comfortable.",
        },


        {
          title: "Inform About Medications",

          description:
            "Inform the healthcare professional about any medicines or supplements you are taking.",
        },


      ],

    },

    bookingProcess: {

      title: "How to Book Your CBC Blood Test",

      description:
        "Book your CBC test easily with a simple process and get your sample collected at your preferred time.",


      steps: [

        {
          title: "Book Test",

          description:
            "Choose your CBC test and submit your booking request online or contact our team.",
        },


        {
          title: "Sample Collection",

          description:
            "Our trained professional collects the sample safely from your location.",
        },


        {
          title: "Laboratory Testing",

          description:
            "Your sample is processed using standard laboratory procedures.",
        },


        {
          title: "Receive Report",

          description:
            "Get your digital CBC test report after the test is completed.",
        },

      ],

    },

    pricePreview: {

      title: "CBC Blood Test Price",

      description:
        "Check the latest CBC test price near you and book your test with convenient home sample collection.",


      price: 300,

      priceUrl:
        "/prices/cbc-test-price-garhshankar",

    },

    relatedTests :[
  "platelet-count",
  "absolute-eosinophil-count",
  "esr-test",
  "peripheral-blood-film",
  "bleeding-time-clotting-time",
  "blood-group-test",
  "dengue-test",
  "mp-antigen-test",
],

    faq: {

      title: "Frequently Asked Questions",

      description:
        "Find answers to common questions about the CBC test, its price, results, and booking.",


      items: [

        {
          question:
            "What does a CBC test check for?",

          answer:
            "A CBC (Complete Blood Count) test checks red blood cells, white blood cells, platelets, and hemoglobin to evaluate anemia, infection, and overall blood health.",
        },


        {
          question:
            "What if CBC is high or low?",

          answer:
            "High or low CBC values can point to different conditions depending on the component affected — for example, low hemoglobin may indicate anemia, while high WBC often points to infection. Always review abnormal results with a doctor.",
        },


        {
          question:
            "Is fasting required for a CBC Blood Test?",

          answer:
            "CBC Blood Test usually does not require fasting. However, follow any instructions provided by your healthcare professional if multiple tests are booked together.",
        },


        {
          question:
            "How long does it take to receive the CBC test report?",

          answer:
            "CBC reports are usually available within 24 hours after sample collection and laboratory processing.",
        },


        {
          question:
            "Is home sample collection available for CBC test?",

          answer:
            "Yes, home sample collection is available for the CBC test. You can book an appointment and choose a convenient collection time.",
        },


        {
          question:
            "What is the CBC test price?",

          answer:
            "You can check the latest CBC test price on our pricing page and book online with home sample collection.",
        },


        {
          question:
            "How can I book a CBC test?",

          answer:
            "You can book the CBC test online through our booking page or contact our support team for assistance.",
        },

      ],

    },

    cta: {

      title:
        "Book Your CBC Blood Test Today",

      description:
        "Get convenient sample collection, reliable CBC testing, and easy access to your reports.",


      highlights: [

        "Home Sample Collection Available",

        "Fast Report Delivery",

        "Professional Collection Process",

      ],


      price:
        "300",


      priceText:
        "Check detailed CBC test pricing and booking options.",


      bookingUrl:
        "/prices/cbc-test-price-garhshankar",


      phone: "+918968038602",


      buttonText:
        "Book CBC Test",

    },
  },

{
  slug: "thyroid-profile",
  name: "Thyroid Profile (T3, T4, TSH)",
  shortName: "Thyroid Profile",
  category: "Endocrine Diagnostics",
  organ: "Thyroid",
  sampleType: "Blood",
  parameterCount: 3,
  fasting: true,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive thyroid panel evaluating T3, T4, and TSH levels to screen for hypothyroidism, hyperthyroidism, weight changes, fatigue, and hormonal imbalance.",
  price: 400,
  reportTime: "Same Day (12-24 Hrs)",
  status: "published",

  seo: {
    title: "Thyroid Profile Test (T3, T4, TSH) - Price & Normal Range | Garhshankar",
    description:
      "Book Thyroid Profile Test (T3, T4, TSH) in Garhshankar with home collection. Accurate hormone screening at ₹400. Same-day digital reports.",
    keywords: [
      "thyroid profile test",
      "thyroid test price garhshankar",
      "t3 t4 tsh test price",
      "tsh normal range",
      "hypothyroidism test",
      "hyperthyroidism blood test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Thyroid Profile Blood Test (T3, T4, TSH)",
    description:
      "Screen for thyroid disorders, unexplained weight changes, and metabolic imbalance with precision hormone immunoassay and same-day reports in Garhshankar.",
    image: "/tests/thyroid.webp",
    imageAlt: "Thyroid Profile Test - T3 T4 TSH Hormone Blood Test",
    reportTime: "Same Day (12-24 Hrs)",
    homeCollection: "Available",
    trustPoints: [
      "Complete T3, T4 & TSH Trio",
      "Ultra-Sensitive Hormone Assay",
      "Same-Day WhatsApp Delivery",
      "Doorstep Blood Collection",
    ],
    bookButton: "Book Thyroid Profile",
    bookingUrl: "/contact",
    phone: "+918968038602",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "Same Day (12-24 Hrs)",
    fasting: "Recommended (Morning Sample)",
    homeCollection: "Available",
    ageGroup: "Adults, Women & Seniors",
  },

  whyChooseUs: {
    title: "Why Choose Our Thyroid Profile Service?",
    description:
      "Accurate endocrine evaluation with calibrated immunoassay analyzers, dedicated phlebotomists, and prompt digital reports.",
    items: [
      {
        title: "Ultra-Sensitive TSH",
        description: "Detects subtle thyroid dysfunction before severe symptoms develop.",
      },
      {
        title: "Morning Home Collection",
        description: "Convenient doorstep sample pickup at optimal morning peak hormone times.",
      },
      {
        title: "Fast Results",
        description: "Digital reports delivered directly to WhatsApp within 12-24 hours.",
      },
      {
        title: "Affordable Rate",
        description: "Complete 3-hormone thyroid profile for just ₹400.",
      },
    ],
  },

  testDetails: {
    title: "About Thyroid Profile Test (T3, T4, TSH)",
    description: [
      "The thyroid is a butterfly-shaped gland located at the base of your neck that produces hormones controlling metabolism, heart rate, body temperature, and energy expenditure.",
      "A Thyroid Profile measures Triiodothyronine (T3), Thyroxine (T4), and Thyroid Stimulating Hormone (TSH) to diagnose an underactive thyroid (hypothyroidism) or overactive thyroid (hyperthyroidism).",
    ],
    included: [
      "Total Triiodothyronine (T3)",
      "Total Thyroxine (T4)",
      "Thyroid Stimulating Hormone (TSH)",
    ],
  },

  preparation: {
    title: "Preparation for Thyroid Test",
    description: "Follow these recommendations for optimal hormonal evaluation.",
    items: [
      {
        title: "Morning Sample Preferred",
        description: "TSH levels have a diurnal rhythm and are best evaluated between 7:30 AM and 10:00 AM.",
      },
      {
        title: "Thyroid Medication Timing",
        description: "If you take thyroid hormone replacement pills (like Thyronorm or Eltroxin), consult your doctor on whether to take it before or after blood draw.",
      },
      {
        title: "Light Fasting",
        description: "Fasting or a light breakfast without biotin supplements is recommended.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Thyroid Test",
    description: "Fast and easy booking with Bhangal Clinical Laboratories.",
    steps: [
      {
        title: "Select Thyroid Profile",
        description: "Book online, call +91 89680-38602, or send a WhatsApp message.",
      },
      {
        title: "Morning Blood Draw",
        description: "Visit our lab opposite Civil Hospital or request home sample collection.",
      },
      {
        title: "Chemiluminescence Assay",
        description: "Processed using precision hormone immunoassay protocols.",
      },
      {
        title: "Digital Report",
        description: "Receive your PDF report within 12-24 hours on WhatsApp and email.",
      },
    ],
  },

  pricePreview: {
    title: "Thyroid Profile Price",
    description:
      "Check affordable pricing for thyroid testing in Garhshankar.",
    price: 400,
    priceUrl: "/prices/blood-test-price-garhshankar",
  },

  relatedTests: [
    "cbc-test",
    "blood-sugar-test",
    "lipid-profile",
    "vitamin-d-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about thyroid testing and hormone levels.",
    items: [
      {
        question: "What is the difference between hypothyroidism and hyperthyroidism?",
        answer:
          "Hypothyroidism (underactive) occurs when high TSH and low T3/T4 cause fatigue, weight gain, cold sensitivity, and dry skin. Hyperthyroidism (overactive) occurs when low TSH and high T3/T4 cause anxiety, weight loss, and rapid heartbeat.",
      },
      {
        question: "What is the normal TSH range?",
        answer:
          "Normal adult TSH levels typically range between 0.4 to 4.5 µIU/mL, though reference ranges may slightly vary by age and pregnancy status.",
      },
      {
        question: "How much is a Thyroid Profile test in Garhshankar?",
        answer:
          "The complete 3-hormone Thyroid Profile (T3, T4, TSH) is available for ₹400 at Bhangal Clinical Laboratories with same-day reports.",
      },
    ],
  },

  cta: {
    title: "Book Your Thyroid Profile Today",
    description:
      "Assess your metabolism and hormone balance with precision thyroid testing in Garhshankar.",
    highlights: [
      "Complete T3 + T4 + TSH",
      "Home Collection Available",
      "Same-Day Digital Delivery",
    ],
    price: "400",
    priceText: "Full thyroid hormone profile for only ₹400.",
    bookingUrl: "/contact",
    phone: "+918968038602",
    buttonText: "Book Thyroid Test",
  },
},

{
  slug: "vitamin-d-test",
  name: "Vitamin D (25-OH)",
  shortName: "Vitamin D",
  category: "Nutritional Health",
  organ: "Bones & Immunity",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures 25-hydroxy vitamin D levels to assess bone density, calcium absorption, unexplained bone/joint pain, muscle weakness, and immune resistance.",
  price: 900,
  reportTime: "Same Day (12-24 Hrs)",
  status: "published",

  seo: {
    title: "Vitamin D Test (25-OH) - Normal Range & Price | Garhshankar",
    description:
      "Book Vitamin D Test (25-Hydroxy) in Garhshankar with home collection. Check deficiency levels at ₹900. Same-day digital reports.",
    keywords: [
      "vitamin d test",
      "vitamin d price garhshankar",
      "25 hydroxy vitamin d test",
      "vitamin d normal range",
      "vitamin d deficiency symptoms",
      "bone density blood test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Vitamin D (25-OH) Blood Test",
    description:
      "Identify vitamin D deficiency, support bone and joint health, and boost immunity with precision laboratory testing and fast digital reports in Garhshankar.",
    image: "/tests/vitamin-d.webp",
    imageAlt: "Vitamin D 25-Hydroxy Blood Test - Bone Health and Immunity",
    reportTime: "Same Day (12-24 Hrs)",
    homeCollection: "Available",
    trustPoints: [
      "Gold-Standard 25-OH Assay",
      "No Fasting Required",
      "Same-Day WhatsApp Delivery",
      "Doorstep Blood Collection",
    ],
    bookButton: "Book Vitamin D Test",
    bookingUrl: "/contact",
    phone: "+918968038602",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "Same Day (12-24 Hrs)",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "All Age Groups",
  },

  whyChooseUs: {
    title: "Why Choose Our Vitamin D Test?",
    description:
      "Accurate quantitative 25-hydroxy vitamin D measurement with calibrated automated analyzers and prompt clinical reports.",
    items: [
      {
        title: "Clinical Accuracy",
        description: "Measures total 25-OH Vitamin D (D2 + D3) for a true clinical reflection of body stores.",
      },
      {
        title: "Convenient Home Collection",
        description: "Our phlebotomists collect your blood sample comfortably at your home.",
      },
      {
        title: "Fast Turnaround",
        description: "Digital reports delivered within 12-24 hours via WhatsApp and email.",
      },
      {
        title: "Clear Deficiency Categorization",
        description: "Reports display standard deficiency (<20 ng/mL), insufficiency (20-30 ng/mL), and sufficiency (>30 ng/mL) brackets.",
      },
    ],
  },

  testDetails: {
    title: "About Vitamin D (25-OH) Test",
    description: [
      "Vitamin D is a fat-soluble vitamin that is essential for maintaining normal blood levels of calcium and phosphorus, helping to build and keep bones strong.",
      "Deficiency is extremely common and often causes vague symptoms such as chronic fatigue, frequent illness, dull bone pain, hair loss, muscle cramps, and mood depression.",
    ],
    included: [
      "25-Hydroxy Vitamin D (Total D2 + D3)",
    ],
  },

  preparation: {
    title: "Preparation for Vitamin D Test",
    description: "Simple testing process with minimal preparation.",
    items: [
      {
        title: "No Fasting Needed",
        description: "You may eat and drink normally before sample collection.",
      },
      {
        title: "Mention Supplements",
        description: "Inform our staff if you are currently taking high-dose vitamin D3 sachet supplements or injections.",
      },
      {
        title: "Any Time of Day",
        description: "Samples can be drawn at any convenient hour during lab timings.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Vitamin D Test",
    description: "Quick 4-step booking for Garhshankar residents.",
    steps: [
      {
        title: "Book Your Slot",
        description: "Book online, call +91 89680-38602, or WhatsApp us.",
      },
      {
        title: "Sample Collection",
        description: "Visit our lab opposite Civil Hospital or request home collection.",
      },
      {
        title: "Laboratory Assay",
        description: "Serum tested on calibrated quantitative analyzer.",
      },
      {
        title: "Receive Report",
        description: "Delivered to your phone within 12-24 hours on WhatsApp and email.",
      },
    ],
  },

  pricePreview: {
    title: "Vitamin D Test Price",
    description:
      "Check pricing for 25-hydroxy vitamin D testing in Garhshankar.",
    price: 900,
    priceUrl: "/prices/blood-test-price-garhshankar",
  },

  relatedTests: [
    "cbc-test",
    "thyroid-profile",
    "kidney-function-test",
    "blood-sugar-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions regarding vitamin D testing and normal ranges.",
    items: [
      {
        question: "What is a normal Vitamin D level?",
        answer:
          "Levels above 30 ng/mL are considered sufficient. 20 to 30 ng/mL is considered insufficient, and below 20 ng/mL indicates clinical deficiency requiring supplementation.",
      },
      {
        question: "Does Vitamin D testing require fasting?",
        answer:
          "No, fasting is not required for a Vitamin D test. You can have your sample collected at any convenient time.",
      },
      {
        question: "What is the cost of a Vitamin D test in Garhshankar?",
        answer:
          "At Bhangal Clinical Laboratories, the Vitamin D (25-OH) test is available at ₹900 with same-day reports.",
      },
    ],
  },

  cta: {
    title: "Book Your Vitamin D Test Today",
    description:
      "Check your bone strength and immune health with accurate Vitamin D testing in Garhshankar.",
    highlights: [
      "Total 25-OH Measurement",
      "Home Collection Available",
      "Same-Day Digital Delivery",
    ],
    price: "900",
    priceText: "Vitamin D test for only ₹900.",
    bookingUrl: "/contact",
    phone: "+918968038602",
    buttonText: "Book Vitamin D Test",
  },
},

  {
    slug: "peripheral-blood-film",
    name: "Peripheral Blood Film",
    shortName: "PBF",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Microscopic examination of blood cells for diagnosing anemia, leukemia and blood disorders.",
    price: 300,
    reportTime: "24 Hours",
      status:"draft"
  },

  {
    slug: "bleeding-time-clotting-time",
    name: "Bleeding Time & Clotting Time",
    shortName: "BT / CT",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 2,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Evaluates blood clotting function and helps diagnose bleeding disorders.",
    price: 100,
    reportTime: "24 Hours",
     status:"draft"
  },

  // =========================
  // BIOCHEMISTRY
  // =========================

  {
    slug: "glucose-tolerance-test",
    name: "Glucose Tolerance Test",
    shortName: "GTT",
    category: "Biochemistry",
    organ: "Pancreas",
    sampleType: "Blood",
    parameterCount: 4,
    fasting: true,
    homeCollection: true,
    popular: false,
    description:
      "Measures how the body processes glucose to diagnose diabetes and prediabetes.",
    price: 300,
    reportTime: "24 Hours",
     status:"draft"
  },

  {
    slug: "glucose-challenge-test",
    name: "Glucose Challenge Test",
    shortName: "GCT",
    category: "Biochemistry",
    organ: "Pancreas",
    sampleType: "Blood",
    parameterCount: 2,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Screening test for gestational diabetes during pregnancy.",
    price: 100,
    reportTime: "24 Hours",
     status:"draft"
  },

{
  slug: "blood-sugar-test",
 
  name: "Blood Sugar Test",
 
  shortName: "FBS / PPBS / RBS",
 
  category: "Biochemistry",
 
  organ: "Pancreas",
 
  sampleType: "Blood",
 
  parameterCount: 1,
 
  fasting: false,
  // Set at test level as "not always required" since Random Blood
  // Sugar (the most commonly booked variant) needs no fasting.
  // Fasting/PP-specific rules are called out in `preparation` below.
 
  homeCollection: true,
 
  popular: true,
 
  description:
    "Blood Sugar test measures glucose levels in your blood — as Fasting, Post-Prandial, or Random Sugar — to screen for and monitor diabetes.",
 
  price: 30,
 
  reportTime: "24 Hours",
 
  status: "published",
 
  seo: {
    title: "Blood Sugar Test - Price, Normal Range | Book Sugar Test",
    // 58 chars
 
    description:
      "Book a Blood Sugar test (Fasting/Random/PP) with home sample collection. Check blood sugar test price, normal range, and same-day digital reports.",
    // 150 chars
 
    keywords: [
      "blood sugar test",
      "blood sugar test price",
      "fasting blood sugar test",
      "random blood sugar test",
      "post prandial blood sugar test",
      "blood sugar test near me",
      "blood sugar normal range",
      "blood sugar test at home",
      "sugar test price",
      "diabetes blood test",
    ],
  },
 
  hero: {
    badge: "Home Sample Collection Available",
 
    title: "Blood Sugar Test - Fasting, Random & PP",
 
    description:
      "Book a Blood Sugar Test near you with fast report delivery, professional sample collection, and convenient home collection services. Check blood sugar test price and book online.",
 
    image: "/tests/blood-sugar.webp",
 
    imageAlt: "Blood Sugar Test - Fasting, Random & Post-Prandial",
 
    reportTime: "24 Hours",
 
    homeCollection: "Available",
 
    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Blood Sugar Test Price",
      "Quality-Controlled Testing",
    ],
 
    bookButton: "Book Blood Sugar Test",
 
    bookingUrl: "/prices/blood-sugar-hba1c-test-price-garhshankar",
 
    phone: "+918968038602",
  },
 
  quickFacts: {
    sample: "Blood Sample",
 
    reportTime: "24 Hours",
 
    fasting: "Required for Fasting Sugar Only",
 
    homeCollection: "Available",
 
    ageGroup: "Adults & Children",
  },
 
  whyChooseUs: {
    title: "Why Choose Our Blood Sugar Test Service?",
 
    description:
      "Get a reliable blood sugar test near you with convenient booking, professional sample collection, and easy access to digital reports.",
 
    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Samples are collected using proper procedures for a comfortable testing experience.",
      },
      {
        title: "Quality Testing Process",
        description:
          "Your blood sugar test is processed using standardized laboratory procedures for accurate results.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Receive your blood sugar test report conveniently after completion of testing.",
      },
      {
        title: "Home Collection Available",
        description:
          "Book blood sugar test home sample collection from your home at a convenient time.",
      },
    ],
  },
 
  testDetails: {
    title: "About Blood Sugar Test (Fasting, Random & Post-Prandial)",
 
    description: [
      "A Blood Sugar test measures the amount of glucose circulating in your blood at the time of sample collection. It can be taken as Fasting Blood Sugar (FBS, after 8-12 hours without food), Random Blood Sugar (RBS, any time of day), or Post-Prandial Blood Sugar (PPBS, 2 hours after a meal).",
 
      "This test helps healthcare professionals screen for and monitor diabetes and prediabetes, and is often ordered alongside HbA1c for a complete picture of both current and long-term blood sugar control.",
    ],
 
    included: [
      "Fasting Blood Sugar (FBS)",
      "Random Blood Sugar (RBS)",
      "Post-Prandial Blood Sugar (PPBS)",
      "Glucose Level (mg/dL)",
    ],
  },
 
  preparation: {
    title: "Preparation Before Blood Sugar Test",
 
    description:
      "Preparation depends on which type of sugar test is ordered — follow these instructions for a smooth sample collection experience.",
 
    items: [
      {
        title: "Fasting Blood Sugar Requirement",
        description:
          "Fasting for 8-12 hours (water is fine) is required before a Fasting Blood Sugar test. No fasting is needed for Random Blood Sugar or HbA1c.",
      },
      {
        title: "Post-Prandial Timing",
        description:
          "For a Post-Prandial (PP) test, the sample is collected exactly 2 hours after starting a meal — note your meal start time when booking.",
      },
      {
        title: "Inform About Medications",
        description:
          "Inform the healthcare professional about any diabetes medication, insulin, or supplements you are taking, as timing can affect results.",
      },
    ],
  },
 
  bookingProcess: {
    title: "How to Book Your Blood Sugar Test",
 
    description:
      "Book your blood sugar test easily with a simple process and get your sample collected at your preferred time.",
 
    steps: [
      {
        title: "Book Test",
        description:
          "Choose Fasting, Random, or PP Blood Sugar and submit your booking request online or contact our team.",
      },
      {
        title: "Sample Collection",
        description:
          "Our trained professional collects the sample safely from your location, at the correct fasting or post-meal timing.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Get your digital blood sugar test report after the test is completed.",
      },
    ],
  },
 
  pricePreview: {
    title: "Blood Sugar Test Price",
 
    description:
      "Check the latest blood sugar test price near you and book your test with convenient home sample collection.",
 
    price: 30,
 
    priceUrl: "/prices/blood-sugar-hba1c-test-price-garhshankar",
  },
 
  relatedTests: [
    "hba1c-test",
    "lipid-profile",
    "kidney-function-test",
    "liver-function-test",
    "thyroid-profile-test",
    "urine-examination",
  ],
 
  faq: {
    title: "Frequently Asked Questions",
 
    description:
      "Find answers to common questions about the blood sugar test, its price, results, and booking.",
 
    items: [
      {
        question: "What is the normal blood sugar range?",
        answer:
          "Normal Fasting Blood Sugar is 70-100 mg/dL, and normal Random or Post-Prandial Blood Sugar is below 140 mg/dL. Values above these ranges may indicate prediabetes or diabetes.",
      },
      {
        question: "Do I need to fast before a blood sugar test?",
        answer:
          "Fasting for 8-12 hours is required only for a Fasting Blood Sugar test. Random Blood Sugar can be done any time without fasting, and Post-Prandial is timed 2 hours after a meal instead.",
      },
      {
        question: "What is the difference between FBS, RBS, and PPBS?",
        answer:
          "FBS (Fasting Blood Sugar) is measured after 8-12 hours without food, RBS (Random Blood Sugar) can be measured at any time, and PPBS (Post-Prandial Blood Sugar) is measured 2 hours after eating.",
      },
      {
        question: "Is a blood sugar level of 140 normal?",
        answer:
          "A reading of 140 mg/dL sits at the upper edge of normal for a random or post-meal test, but would be considered high if taken fasting. Share the test type and timing with your doctor for accurate interpretation.",
      },
      {
        question: "How long does it take to receive the blood sugar test report?",
        answer:
          "Blood sugar reports are usually available within 24 hours after sample collection and laboratory processing, often much sooner for routine bookings.",
      },
      {
        question: "Is home sample collection available for blood sugar test?",
        answer:
          "Yes, home sample collection is available for Fasting, Random, and Post-Prandial Blood Sugar tests. You can book an appointment and choose a convenient collection time.",
      },
      {
        question: "What is the blood sugar test price?",
        answer:
          "You can check the latest blood sugar test price on our pricing page and book online with home sample collection.",
      },
      {
        question: "Should I get HbA1c along with a blood sugar test?",
        answer:
          "Many doctors recommend HbA1c alongside a blood sugar test since HbA1c reflects your 3-month average, while blood sugar shows your level at that specific moment — together they give a fuller picture of diabetes control.",
      },
    ],
  },
 
  cta: {
    title: "Book Your Blood Sugar Test Today",
 
    description:
      "Get convenient sample collection, reliable blood sugar testing, and easy access to your reports.",
 
    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],
 
    price: "30",
 
    priceText: "Check detailed blood sugar test pricing and booking options.",
 
    bookingUrl: "/prices/blood-sugar-hba1c-test-price-garhshankar",
 
    phone: "+918968038602",
 
    buttonText: "Book Blood Sugar Test",
  },
},
  // =========================
// KIDNEY FUNCTION TEST (KFT)
// =========================

{
  slug: "kidney-function-test",
  name: "Kidney Function Test",
  shortName: "RFT/KFT",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 6,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive kidney profile to evaluate kidney function, electrolyte balance and overall renal health.",
  price: 500,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "blood-urea",
  name: "Blood Urea",
  shortName: "Urea",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures blood urea levels to assess kidney function and protein metabolism.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-creatinine",
  name: "Serum Creatinine",
  shortName: "Creatinine",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures creatinine levels to evaluate kidney filtration and renal function.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "uric-acid-test",
  name: "Uric Acid Test",
  shortName: "Uric Acid",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures uric acid levels to diagnose gout and monitor kidney health.",
  price: 80,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "total-protein-test",
  name: "Total Protein Test",
  shortName: "Protein",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures total protein concentration to assess nutritional status and kidney function.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-albumin",
  name: "Serum Albumin",
  shortName: "Albumin",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures albumin levels to evaluate liver and kidney function and nutritional health.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-globulin",
  name: "Serum Globulin",
  shortName: "Globulin",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures globulin proteins to help diagnose immune, liver and kidney disorders.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// LIPID PROFILE
// =========================

{
  slug: "lipid-profile",
  name: "Lipid Profile",
  shortName: "Lipid Profile",
  category: "Cardiovascular Screening",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 5,
  fasting: true,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive cholesterol panel measuring Total Cholesterol, HDL, LDL, VLDL, and Triglycerides to evaluate cardiac health and cardiovascular risk.",
  price: 450,
  reportTime: "Same Day (12-24 Hrs)",
  status: "published",

  seo: {
    title: "Lipid Profile Test - Cholesterol Normal Range & Price | Garhshankar",
    description:
      "Book a Lipid Profile Test in Garhshankar with home sample collection. Comprehensive cholesterol check (HDL, LDL, Triglycerides) at ₹450. Same-day reports.",
    keywords: [
      "lipid profile test",
      "cholesterol test garhshankar",
      "lipid profile price",
      "lipid profile normal range",
      "triglycerides test",
      "hdl ldl test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Lipid Profile Blood Test (Cholesterol Panel)",
    description:
      "Comprehensive screening for heart disease risk and arterial health with doorstep blood sample collection and fast same-day digital reports in Garhshankar.",
    image: "/tests/lipid-profile.webp",
    imageAlt: "Lipid Profile Test - Cholesterol and Heart Health Screening",
    reportTime: "Same Day (12-24 Hrs)",
    homeCollection: "Available",
    trustPoints: [
      "5 Critical Lipid Parameters",
      "Professional Home Phlebotomy",
      "Same-Day WhatsApp Reports",
      "Certified Quality Diagnostics",
    ],
    bookButton: "Book Lipid Profile",
    bookingUrl: "/contact",
    phone: "+918968038602",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "Same Day (12-24 Hrs)",
    fasting: "Required (10-12 Hours Fasting)",
    homeCollection: "Available",
    ageGroup: "Adults & Seniors",
  },

  whyChooseUs: {
    title: "Why Choose Our Lipid Profile Test Service?",
    description:
      "Accurate cardiovascular risk assessment with certified protocols, daily automated analyzer calibration, and fast digital reports delivered directly to your phone.",
    items: [
      {
        title: "Precision Lipid Calibration",
        description: "Enzymatic testing with strict daily quality control for reliable cholesterol fractions.",
      },
      {
        title: "Doorstep Phlebotomy",
        description: "Convenient morning fasting home collection across Garhshankar and nearby villages.",
      },
      {
        title: "Same-Day Delivery",
        description: "Digital reports sent promptly via WhatsApp and email so you can share with your doctor.",
      },
      {
        title: "Transparent Lab Pricing",
        description: "Affordable full 5-parameter profile at just ₹450 with zero hidden charges.",
      },
    ],
  },

  testDetails: {
    title: "About Lipid Profile Test (Cardiovascular Cholesterol Panel)",
    description: [
      "A Lipid Profile is a panel of blood tests used to find abnormalities in lipids (fats and cholesterol). It is a vital tool for assessing your risk of coronary heart disease, stroke, and peripheral vascular disease.",
      "The test measures circulating cholesterol fractions to evaluate atherosclerosis plaque risk and guide dietary or statin therapy under medical supervision.",
    ],
    included: [
      "Total Cholesterol",
      "High-Density Lipoprotein (HDL - Good Cholesterol)",
      "Low-Density Lipoprotein (LDL - Bad Cholesterol)",
      "Very Low-Density Lipoprotein (VLDL)",
      "Triglycerides",
      "TC/HDL Cholesterol Ratio",
    ],
  },

  preparation: {
    title: "Preparation for Lipid Profile Test",
    description:
      "Accurate cholesterol and triglyceride measurements require proper overnight fasting.",
    items: [
      {
        title: "10-12 Hours Overnight Fasting",
        description: "Do not eat or drink anything except plain water for 10 to 12 hours before morning blood collection.",
      },
      {
        title: "Avoid Alcohol & High-Fat Meals",
        description: "Avoid heavy fatty dinners or alcohol 24 hours prior, as they temporarily spike triglyceride levels.",
      },
      {
        title: "Continue Regular Medication",
        description: "Take prescribed blood pressure or thyroid medications with water unless specifically instructed by your physician.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Lipid Profile Test",
    description: "Quick 4-step process for in-lab or home collection in Garhshankar.",
    steps: [
      {
        title: "Request Appointment",
        description: "Select Lipid Profile online, call +91 89680-38602, or WhatsApp us.",
      },
      {
        title: "Fasting Morning Sample",
        description: "Visit our lab opposite Civil Hospital or request phlebotomist visit to your home.",
      },
      {
        title: "Automated Processing",
        description: "Sample tested on calibrated clinical chemistry analyzers.",
      },
      {
        title: "Receive Report",
        description: "Get verified digital report within 12-24 hours via WhatsApp and email.",
      },
    ],
  },

  pricePreview: {
    title: "Lipid Profile Test Price",
    description:
      "Check transparent pricing for comprehensive 5-parameter lipid testing in Garhshankar.",
    price: 450,
    priceUrl: "/prices/blood-test-price-garhshankar",
  },

  relatedTests: [
    "cbc-test",
    "blood-sugar-test",
    "liver-function-test",
    "kidney-function-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about lipid profile testing, normal cholesterol values, and fasting.",
    items: [
      {
        question: "Why is fasting necessary for a Lipid Profile?",
        answer:
          "Triglyceride and LDL levels are significantly altered by recently consumed food. 10 to 12 hours of overnight fasting ensures an accurate baseline reading.",
      },
      {
        question: "What is a healthy total cholesterol level?",
        answer:
          "Generally, a total cholesterol level below 200 mg/dL is desirable. Levels between 200–239 mg/dL are borderline high, and 240 mg/dL or above is considered high.",
      },
      {
        question: "Can I get home sample collection for Lipid Profile in Garhshankar?",
        answer:
          "Yes, we provide morning home sample collection across Garhshankar and surrounding areas for fasting blood tests at affordable rates.",
      },
      {
        question: "How long does the Lipid Profile report take?",
        answer:
          "Reports are ready on the same day, typically delivered within 12–24 hours via WhatsApp and email.",
      },
    ],
  },

  cta: {
    title: "Book Your Lipid Profile Test Today",
    description:
      "Protect your heart with an accurate 5-parameter cholesterol screening in Garhshankar.",
    highlights: [
      "Complete 5-Parameter Panel",
      "Home Sample Collection Available",
      "Same-Day Digital Delivery",
    ],
    price: "450",
    priceText: "Comprehensive lipid profile for only ₹450.",
    bookingUrl: "/contact",
    phone: "+918968038602",
    buttonText: "Book Lipid Profile",
  },
},

{
  slug: "total-cholesterol",
  name: "Total Cholesterol",
  shortName: "Cholesterol",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures total cholesterol levels to evaluate heart health.",
  price: 90,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "triglycerides-test",
  name: "Triglycerides Test",
  shortName: "Triglycerides",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures triglyceride levels to assess cardiovascular risk.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hdl-cholesterol",
  name: "HDL Cholesterol",
  shortName: "HDL",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures good cholesterol that helps protect against heart disease.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "ldl-cholesterol",
  name: "LDL Cholesterol",
  shortName: "LDL",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures bad cholesterol responsible for plaque formation in arteries.",
  price: 60,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "vldl-cholesterol",
  name: "VLDL Cholesterol",
  shortName: "VLDL",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures very low-density lipoprotein cholesterol associated with triglyceride transport.",
  price: 60,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// LIVER FUNCTION TEST (LFT)
// =========================

{
  slug: "liver-function-test",
  name: "Liver Function Test",
  shortName: "LFT",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 6,
  fasting: true,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive liver profile evaluating bilirubin (Total, Direct, Indirect), enzymes (SGOT, SGPT, ALP), and proteins for jaundice, fatty liver, or hepatic health.",
  price: 500,
  reportTime: "Same Day (12-24 Hrs)",
  status: "published",

  seo: {
    title: "Liver Function Test (LFT) - Normal Range & Price | Garhshankar",
    description:
      "Book Liver Function Test (LFT) in Garhshankar with home collection. Check SGOT, SGPT, Bilirubin & ALP at ₹500. Same-day digital reports.",
    keywords: [
      "liver function test",
      "lft test price garhshankar",
      "sgpt test price",
      "sgot sgot normal range",
      "bilirubin test garhshankar",
      "lft test normal range",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Liver Function Test (LFT Panel)",
    description:
      "Comprehensive evaluation of liver enzymes, bilirubin, and protein levels with comfortable sample collection and same-day digital reports in Garhshankar.",
    image: "/tests/liver-function-test.webp",
    imageAlt: "Liver Function Test LFT - Hepatic Health and Enzymes Screening",
    reportTime: "Same Day (12-24 Hrs)",
    homeCollection: "Available",
    trustPoints: [
      "6 Vital Hepatic Markers",
      "Same-Day WhatsApp Reports",
      "Experienced Phlebotomists",
      "Calibrated Chemistry Analyzers",
    ],
    bookButton: "Book LFT Test",
    bookingUrl: "/contact",
    phone: "+918968038602",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "Same Day (12-24 Hrs)",
    fasting: "Required (8-10 Hours Fasting)",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Our Liver Function Test?",
    description:
      "Detect fatty liver, jaundice, and medication side-effects early with calibrated diagnostic instruments and expert lab review.",
    items: [
      {
        title: "Comprehensive Enzyme Panel",
        description: "Accurate quantification of SGOT/AST, SGPT/ALT, and Alkaline Phosphatase.",
      },
      {
        title: "Bilirubin Breakdown",
        description: "Clear fractionation of Total, Direct, and Indirect Bilirubin to pinpoint causes of jaundice.",
      },
      {
        title: "Home Sample Collection",
        description: "Trained phlebotomists collect fasting samples safely at your home.",
      },
      {
        title: "Affordable ₹500 Pricing",
        description: "Complete 6-test panel priced affordably with fast same-day digital delivery.",
      },
    ],
  },

  testDetails: {
    title: "About Liver Function Test (LFT)",
    description: [
      "The Liver Function Test (LFT) is a group of blood tests that detect inflammation, infection, or damage to the liver. The liver is vital for detoxifying the blood, aiding digestion, and storing essential nutrients.",
      "An LFT is commonly recommended for individuals experiencing yellowing of eyes/skin (jaundice), abdominal discomfort, nausea, unexplained fatigue, or those taking long-term medications.",
    ],
    included: [
      "Serum Bilirubin Total",
      "Serum Bilirubin Direct (Conjugated)",
      "Serum Bilirubin Indirect (Unconjugated)",
      "SGOT / AST (Aspartate Aminotransferase)",
      "SGPT / ALT (Alanine Aminotransferase)",
      "Alkaline Phosphatase (ALP)",
    ],
  },

  preparation: {
    title: "Preparation for LFT Test",
    description: "Follow these simple guidelines before your liver blood test.",
    items: [
      {
        title: "8-10 Hours Fasting",
        description: "Fasting overnight ensures liver enzymes and bilirubin are not influenced by recent meals.",
      },
      {
        title: "Avoid Alcohol",
        description: "Do not consume alcoholic beverages for at least 48 hours prior to testing.",
      },
      {
        title: "Mention Medications",
        description: "Tell the technician about all regular prescription drugs, antibiotics, or herbal supplements.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your LFT Test",
    description: "Simple online or phone booking for Garhshankar residents.",
    steps: [
      {
        title: "Book Test",
        description: "Reserve your slot online, call +91 89680-38602, or message via WhatsApp.",
      },
      {
        title: "Blood Sample Collection",
        description: "Visit our lab opposite Civil Hospital or request home sample pickup.",
      },
      {
        title: "Biochemical Testing",
        description: "Processed on fully automated clinical biochemistry analyzers.",
      },
      {
        title: "Same-Day Report",
        description: "Receive your verified digital report within 12-24 hours via WhatsApp and email.",
      },
    ],
  },

  pricePreview: {
    title: "Liver Function Test Price",
    description:
      "Check pricing for comprehensive LFT screening in Garhshankar.",
    price: 500,
    priceUrl: "/prices/blood-test-price-garhshankar",
  },

  relatedTests: [
    "cbc-test",
    "blood-sugar-test",
    "lipid-profile",
    "kidney-function-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about LFT tests, normal ranges, and liver health.",
    items: [
      {
        question: "What do high SGOT and SGPT levels mean?",
        answer:
          "Elevated SGOT and SGPT enzymes typically indicate liver inflammation or cell irritation, frequently caused by fatty liver, viral hepatitis, certain medications, or alcohol consumption.",
      },
      {
        question: "Is fasting strictly required for LFT?",
        answer:
          "Yes, an 8–10 hour overnight fast is recommended for the most reliable enzyme and bilirubin readings.",
      },
      {
        question: "What is the cost of LFT in Garhshankar?",
        answer:
          "At Bhangal Clinical Laboratories, the complete Liver Function Test is available at an affordable rate of ₹500.",
      },
    ],
  },

  cta: {
    title: "Book Your Liver Function Test Today",
    description:
      "Get accurate liver enzyme and bilirubin insights with same-day reports in Garhshankar.",
    highlights: [
      "Complete 6-Parameter LFT",
      "Home Collection Available",
      "Same-Day Digital Delivery",
    ],
    price: "500",
    priceText: "Comprehensive LFT panel for only ₹500.",
    bookingUrl: "/contact",
    phone: "+918968038602",
    buttonText: "Book LFT Test",
  },
},

{
  slug: "bilirubin-total",
  name: "Serum Bilirubin Total",
  shortName: "Total Bilirubin",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures total bilirubin to assess liver function and jaundice.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "bilirubin-direct",
  name: "Serum Bilirubin Direct",
  shortName: "Direct Bilirubin",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures direct bilirubin to diagnose liver and bile duct disorders.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "bilirubin-indirect",
  name: "Serum Bilirubin Indirect",
  shortName: "Indirect Bilirubin",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures indirect bilirubin to evaluate hemolysis and liver disease.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "sgot-test",
  name: "SGOT (AST)",
  shortName: "SGOT",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures AST enzyme to detect liver and muscle injury.",
  price: 120,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "sgpt-test",
  name: "SGPT (ALT)",
  shortName: "SGPT",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures ALT enzyme to evaluate liver inflammation and damage.",
  price: 120,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "alkaline-phosphatase-test",
  name: "Alkaline Phosphatase",
  shortName: "ALP",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures ALP enzyme to assess liver, bile duct and bone disorders.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},
// =========================
// SEROLOGY
// =========================

{
  slug: "widal-test",
  name: "Widal Test",
  shortName: "Widal",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Widal test detects antibodies against Salmonella Typhi bacteria in your blood to help diagnose typhoid fever.",
  price: 50,
  reportTime: "24 Hours",
  status: "published",

seo: {
  title: "Widal Test: Normal Range, Positive Meaning & Price (₹50)",
  description:
    "Widal test normal range, 1:80 and 1:160 meaning, typhoid positive result explained. Price ₹50 with home collection, no fasting. Book at Bhangal Lab.",
  keywords: [
    "widal test",
    "widal test normal range",
    "widal test positive means",
    "widal test 1:80 meaning",
    "widal test 1:160 meaning",
    "widal test report time",
    "typhidot vs widal test",
    "s typhi o s typhi h",
    "typhoid test",
  ],
},

  hero: {
    badge: "Home Sample Collection Available",
    title: "Widal Test: Normal Range, Positive Meaning & Typhoid Screening",
description:
  "Understand your Widal test result: normal range, what 1:80 and 1:160 mean, and what a positive result indicates. Book a Widal test in Garhshankar for ₹50 with home sample collection, no fasting and digital reports on WhatsApp.",
  image: "/tests/widal.webp",
    imageAlt: "Widal Test - Typhoid Fever Antibody Test",
    reportTime: "24 Hours",
    homeCollection: "Available",
    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Widal Test Price",
      "Quality-Controlled Testing",
    ],
    bookButton: "Book Widal Test",
    bookingUrl: "/prices/widal-test-price-garhshankar",
    phone: "+918968038602",
  },
  resultGuide: {
  title: "Widal Test Normal Range & Result Meaning",
  description:
    "Widal results are reported as titres (such as 1:80 or 1:160) for the O and H antigens. This is how they are commonly interpreted. Reference ranges vary by lab and region, so always read your result with your doctor.",
  rows: [
    { titre: "Below 1:80", meaning: "Usually considered normal or not significant" },
    { titre: "1:80", meaning: "Borderline; interpreted with symptoms and how long the fever has lasted" },
    { titre: "1:160 or higher", meaning: "Suggestive of typhoid, especially when the O titre is raised" },
    { titre: "Rising on a repeat test (after 7–10 days)", meaning: "The most reliable sign of active infection" },
  ],
  note:
    "Past infection, typhoid vaccination and earlier antibiotics can all affect titres. Widal alone does not confirm typhoid, so your doctor may also advise a Typhidot test, blood culture or CBC.",
},

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Our Widal Test Service?",
    description:
      "Get a reliable Widal test near you with convenient booking, professional sample collection, and easy access to digital reports.",
    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Samples are collected using proper procedures for a comfortable testing experience.",
      },
      {
        title: "Quality Testing Process",
        description:
          "Your Widal test is processed using standardized laboratory procedures for accurate results.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Receive your Widal test report conveniently after completion of testing.",
      },
      {
        title: "Home Collection Available",
        description:
          "Book Widal test home sample collection from your home at a convenient time.",
      },
    ],
  },

  testDetails: {
    title: "About Widal Test (Typhoid Fever Screening)",
    description: [
      "The Widal test detects antibodies (agglutinins) produced by the body against Salmonella Typhi and Salmonella Paratyphi bacteria, which cause typhoid fever. It measures two main antigens — 'O' (somatic) and 'H' (flagellar) — and reports results as a titre, such as 1:80 or 1:160.",
      "This test helps healthcare professionals identify a probable typhoid infection, especially in areas where typhoid is common, and is often ordered alongside CBC when a patient has persistent fever.",
    ],
    included: [
      "S. Typhi O Antibody Titre",
      "S. Typhi H Antibody Titre",
      "S. Paratyphi AH Titre",
      "S. Paratyphi BH Titre",
    ],
  },

  preparation: {
    title: "Preparation Before Widal Test",
    description:
      "Follow these simple instructions before your Widal test to ensure a smooth sample collection experience.",
    items: [
      {
        title: "Widal Test Fasting Requirement",
        description:
          "Fasting is not required for a Widal Test. Follow your healthcare provider's instructions if additional tests are included.",
      },
      {
        title: "Best Timing",
        description:
          "The test is usually most reliable after the first week of fever onset, when antibody levels rise. Your doctor may recommend a repeat test to confirm a rising titre.",
      },
      {
        title: "Inform About Medications",
        description:
          "Inform the healthcare professional about any antibiotics or medicines you are taking, as prior antibiotic use can affect results.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Widal Test",
    description:
      "Book your Widal test easily with a simple process and get your sample collected at your preferred time.",
    steps: [
      {
        title: "Book Test",
        description:
          "Choose your Widal test and submit your booking request online or contact our team.",
      },
      {
        title: "Sample Collection",
        description:
          "Our trained professional collects the sample safely from your location.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Get your digital Widal test report after the test is completed.",
      },
    ],
  },

  pricePreview: {
    title: "Widal Test Price",
    description:
      "Check the latest Widal test price near you and book your test with convenient home sample collection.",
    price: 50,
    priceUrl: "/prices/widal-test-price-garhshankar",
  },

  relatedTests: [
    "typhidot-test",
    "cbc-test",
    "esr-test",
    "crp-quantitative-test",
    "vdrl-test",
    "blood-group-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about the Widal test, its price, results, and booking.",
    items: [
      {
        question: "What does a Widal test check for?",
        answer:
          "A Widal test checks for antibodies against Salmonella Typhi and Paratyphi bacteria in the blood, helping diagnose typhoid fever.",
      },
      {
        question: "What does Widal test positive mean?",
        answer:
          "A positive Widal test means antibodies against typhoid-causing bacteria were detected above the normal threshold. A single positive result should be interpreted alongside symptoms, titre level, and sometimes a repeat test, since past infection or vaccination can also raise titres.",
      },
      {
        question: "What is the normal range for a Widal test?",
        answer:
          "A titre below 1:80 is generally considered normal or negative in most regions. A titre of 1:160 or higher, especially when rising on a repeat test, is more suggestive of active typhoid infection. Reference ranges can vary by region and lab.",
      },
      {
        question: "What is the difference between Widal and Typhidot test?",
        answer:
          "Widal detects antibody titres and is more affordable but can give false positives from past exposure. Typhidot detects specific IgM and IgG antibodies and is generally faster and more specific for a current infection.",
      },
      {
        question: "Is fasting required for a Widal test?",
        answer:
          "No, fasting is not required for a Widal test. You can eat and drink normally before your sample is collected.",
      },
      {
        question: "How long does it take to receive the Widal test report?",
        answer:
          "Widal test reports are usually available within 24 hours after sample collection and laboratory processing.",
      },
      {
        question: "Is home sample collection available for Widal test?",
        answer:
          "Yes, home sample collection is available for the Widal test. You can book an appointment and choose a convenient collection time.",
      },
      {
        question: "What is the Widal test price?",
        answer:
         "Widal test price starts from ₹50 at Bhangal Lab, Garhshankar, with free home sample collection."
      },
    ],
  },

  cta: {
    title: "Book Your Widal Test Today",
    description:
      "Get convenient sample collection, reliable typhoid screening, and easy access to your reports.",
    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],
    price: "50",
    priceText: "Check detailed Widal test pricing and booking options.",
    bookingUrl: "/prices/widal-test-price-garhshankar",
    phone: "+918968038602",
    buttonText: "Book Widal Test",
  },
},

{
  slug: "typhidot-test",
  name: "Typhidot Test",
  shortName: "Typhidot",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Typhidot test detects IgM and IgG antibodies against Salmonella Typhi in your blood for accurate, rapid typhoid diagnosis.",
  price: 400,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    title: "Typhidot Test - Price, IgM IgG Meaning | Book Now",
    // 55 chars
    description:
      "Book a Typhidot test for accurate typhoid diagnosis with home sample collection. Check Typhidot test price and same-day digital reports.",
    // 139 chars
    keywords: [
      "typhidot test",
      "typhidot test price",
      "typhidot test near me",
      "typhidot igm positive means",
      "typhidot igg positive means",
      "what is typhidot test",
      "widal vs typhidot test",
      "typhidot test accuracy",
      "typhoid igm igg test",
      "typhidot test cost",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Typhidot Test - Rapid Typhoid Diagnosis",
    description:
      "Book a Typhidot Test near you with fast report delivery, professional sample collection, and convenient home collection services. Check Typhidot test price and book online.",
    image: "/tests/typhidot.webp",
    imageAlt: "Typhidot Test - IgM IgG Typhoid Antibody Test",
    reportTime: "24 Hours",
    homeCollection: "Available",
    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Higher Accuracy Than Widal",
      "Quality-Controlled Testing",
    ],
    bookButton: "Book Typhidot Test",
    bookingUrl: "/prices/typhidot-test-price-garhshankar",
    phone: "+918968038602",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Our Typhidot Test Service?",
    description:
      "Get a reliable Typhidot test near you with convenient booking, professional sample collection, and easy access to digital reports.",
    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Samples are collected using proper procedures for a comfortable testing experience.",
      },
      {
        title: "Quality Testing Process",
        description:
          "Your Typhidot test is processed using standardized rapid immunoassay procedures for accurate results.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Receive your Typhidot test report conveniently after completion of testing.",
      },
      {
        title: "Home Collection Available",
        description:
          "Book Typhidot test home sample collection from your home at a convenient time.",
      },
    ],
  },

  testDetails: {
    title: "About Typhidot Test (IgM & IgG Typhoid Antibody Test)",
    description: [
      "The Typhidot test is a rapid, dot-based immunoassay that detects specific IgM and IgG antibodies produced against the Salmonella Typhi outer membrane protein. IgM antibodies indicate a current, recent infection, while IgG antibodies can indicate either a current infection or past exposure.",
      "This test helps healthcare professionals confirm typhoid fever with greater specificity than Widal, and is often preferred when a doctor needs a faster, more accurate result for a patient with persistent fever.",
    ],
    included: [
      "S. Typhi IgM Antibody Detection",
      "S. Typhi IgG Antibody Detection",
    ],
  },

  preparation: {
    title: "Preparation Before Typhidot Test",
    description:
      "Follow these simple instructions before your Typhidot test to ensure a smooth sample collection experience.",
    items: [
      {
        title: "Typhidot Test Fasting Requirement",
        description:
          "Fasting is not required for a Typhidot Test. Follow your healthcare provider's instructions if additional tests are included.",
      },
      {
        title: "Best Timing",
        description:
          "The test is typically most accurate after the first few days of fever onset, once IgM antibodies have developed.",
      },
      {
        title: "Inform About Medications",
        description:
          "Inform the healthcare professional about any antibiotics or medicines you are taking, as prior treatment can affect antibody detection.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Typhidot Test",
    description:
      "Book your Typhidot test easily with a simple process and get your sample collected at your preferred time.",
    steps: [
      {
        title: "Book Test",
        description:
          "Choose your Typhidot test and submit your booking request online or contact our team.",
      },
      {
        title: "Sample Collection",
        description:
          "Our trained professional collects the sample safely from your location.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard rapid immunoassay procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Get your digital Typhidot test report after the test is completed.",
      },
    ],
  },

  pricePreview: {
    title: "Typhidot Test Price",
    description:
      "Check the latest Typhidot test price near you and book your test with convenient home sample collection.",
    price: 400,
    priceUrl: "/prices/typhidot-test-price-garhshankar",
  },

  relatedTests: [
    "widal-test",
    "cbc-test",
    "esr-test",
    "crp-quantitative-test",
    "vdrl-test",
    "blood-group-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about the Typhidot test, its price, results, and booking.",
    items: [
      {
        question: "What does a Typhidot test check for?",
        answer:
          "A Typhidot test checks for specific IgM and IgG antibodies against Salmonella Typhi, helping confirm typhoid fever with higher accuracy than titre-based tests.",
      },
      {
        question: "What does Typhidot IgM positive mean?",
        answer:
          "A positive Typhidot IgM result indicates a current or recent typhoid infection, since IgM antibodies typically appear early in the illness and decline as it resolves.",
      },
      {
        question: "What does Typhidot IgG positive mean?",
        answer:
          "A positive Typhidot IgG result can indicate either an ongoing infection or a past exposure to typhoid, since IgG antibodies persist longer. Doctors usually interpret it alongside the IgM result and symptoms.",
      },
      {
        question: "What is the difference between Widal and Typhidot test?",
        answer:
          "Widal measures antibody titres and is more affordable but can give false positives from past exposure. Typhidot detects specific IgM and IgG antibodies, offering faster and more specific results for a current infection, at a higher cost.",
      },
      {
        question: "Is fasting required for a Typhidot test?",
        answer:
          "No, fasting is not required for a Typhidot test. You can eat and drink normally before your sample is collected.",
      },
      {
        question: "How long does it take to receive the Typhidot test report?",
        answer:
          "Typhidot test reports are usually available within 24 hours after sample collection and laboratory processing.",
      },
      {
        question: "Is home sample collection available for Typhidot test?",
        answer:
          "Yes, home sample collection is available for the Typhidot test. You can book an appointment and choose a convenient collection time.",
      },
      {
        question: "What is the Typhidot test price?",
        answer:
          "You can check the latest Typhidot test price on our pricing page and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Typhidot Test Today",
    description:
      "Get convenient sample collection, accurate typhoid confirmation, and easy access to your reports.",
    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Higher Accuracy Than Widal",
    ],
    price: "400",
    priceText: "Check detailed Typhidot test pricing and booking options.",
    bookingUrl: "/prices/typhidot-test-price-garhshankar",
    phone: "+918968038602",
    buttonText: "Book Typhidot Test",
  },
},

// {
//   slug: "crp-test",
//   name: "C-Reactive Protein",
//   shortName: "CRP",
//   category: "Serology",
//   organ: "Immune System",
//   sampleType: "Blood",
//   parameterCount: 1,
//   fasting: false,
//   homeCollection: true,
//   popular: true,
//   description:
//     "Measures inflammation in the body caused by infections, autoimmune disorders or tissue injury.",
//   price: 200,
//   reportTime: "24 Hours",
// },

{
  slug: "crp-quantitative-test",
  name: "C-Reactive Protein Quantitative",
  shortName: "CRP Quantitative",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Provides an exact CRP value to evaluate inflammation severity and monitor treatment.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
},

// {
//   slug: "aso-test",
//   name: "Anti Streptolysin O",
//   shortName: "ASO",
//   category: "Serology",
//   organ: "Immune System",
//   sampleType: "Blood",
//   parameterCount: 1,
//   fasting: false,
//   homeCollection: true,
//   popular: false,
//   description:
//     "Detects antibodies produced after Streptococcus infection to help diagnose rheumatic fever.",
//   price: 200,
//   reportTime: "24 Hours",
// },

{
  slug: "aso-quantitative-test",
  name: "Anti Streptolysin O Quantitative",
  shortName: "ASO Quantitative",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures ASO antibody concentration to evaluate recent streptococcal infection.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "vdrl-test",
  name: "VDRL Test",
  shortName: "VDRL",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Screening test used for the detection of syphilis infection.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hiv-1-2-test",
  name: "HIV I & II Test",
  shortName: "HIV I & II",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects antibodies against HIV Type 1 and Type 2 viruses.",
  price: 300,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hbsag-test",
  name: "HBsAg Test",
  shortName: "HBsAg",
  category: "Serology",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects Hepatitis B surface antigen for early diagnosis of Hepatitis B infection.",
  price: 200,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hcv-test",
  name: "Hepatitis C Virus Test",
  shortName: "HCV",
  category: "Serology",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects antibodies against Hepatitis C virus to diagnose HCV infection.",
  price: 350,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "blood-group-test",
  name: "Blood Group Test",
  shortName: "Blood Group",
  category: "Blood Test",
  organ: "Blood",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Determines ABO and Rh blood group for transfusion and medical purposes.",
  price: 50,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "mantoux-test",
  name: "Mantoux Test",
  shortName: "Mantoux",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Skin Test",
  parameterCount: 1,
  fasting: false,
  homeCollection: false,
  popular: false,
  description:
    "Screening test used to detect tuberculosis (TB) infection.",
  price: 200,
  reportTime: "48-72 Hours",
   status:"draft"
},

// {
//   slug: "ra-factor-test",
//   name: "RA Factor Test",
//   shortName: "RA Factor",
//   category: "Serology",
//   organ: "Immune System",
//   sampleType: "Blood",
//   parameterCount: 1,
//   fasting: false,
//   homeCollection: true,
//   popular: true,
//   description:
//     "Detects rheumatoid factor antibodies used in the diagnosis of rheumatoid arthritis.",
//   price: 200,
//   reportTime: "24 Hours",
// },

{
  slug: "ra-factor-quantitative-test",
  name: "RA Factor Quantitative",
  shortName: "RA Quantitative",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures rheumatoid factor concentration for diagnosis and monitoring of autoimmune disorders.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// ELECTROLYTES
// =========================

{
  slug: "electrolyte-profile",
  name: "Electrolyte Profile",
  shortName: "Electrolytes",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 4,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures essential electrolytes to assess hydration, kidney function and acid-base balance.",
  price: 600,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-sodium",
  name: "Serum Sodium",
  shortName: "Sodium",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures sodium levels to evaluate hydration and electrolyte balance.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-potassium",
  name: "Serum Potassium",
  shortName: "Potassium",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures potassium levels to assess muscle, nerve and heart function.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-chloride",
  name: "Serum Chloride",
  shortName: "Chloride",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures chloride levels to monitor fluid and acid-base balance.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-calcium",
  name: "Serum Calcium",
  shortName: "Calcium",
  category: "Electrolytes",
  organ: "Bone",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures calcium levels to evaluate bone, muscle and nerve health.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// ENZYMES
// =========================

{
  slug: "serum-amylase",
  name: "Serum Amylase",
  shortName: "Amylase",
  category: "Enzyme Test",
  organ: "Pancreas",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures amylase enzyme levels to diagnose pancreatic disorders.",
  price: 500,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "cpk-mb-test",
  name: "CPK-MB Test",
  shortName: "CPK-MB",
  category: "Cardiac Marker",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures cardiac muscle enzyme to help diagnose heart muscle injury.",
  price: 600,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "troponin-t-test",
  name: "Troponin-T Test",
  shortName: "Trop-T",
  category: "Cardiac Marker",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Highly sensitive cardiac marker used for diagnosing heart attack.",
  price: 1200,
  reportTime: "6-12 Hours",
   status:"draft"
},

{
  slug: "dengue-test",
  name: "Dengue Test",
  shortName: "Dengue",
  category: "Infectious Disease",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 3,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Dengue test checks NS1 antigen and IgM/IgG antibodies in your blood to confirm dengue infection at the right stage of fever.",
  price: 600,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    title: "Dengue Test - NS1, IgG IgM Price & Report Guide",
    // 47 chars
    description:
      "Book a dengue test (NS1 antigen, IgM, IgG) with home sample collection. Know which test suits your fever day, price, and report time.",
    // 133 chars
    keywords: [
      "dengue test",
      "dengue ns1 antigen test",
      "dengue igm test",
      "dengue igg igm test",
      "dengue rapid test",
      "dengue test accuracy",
      "what is dengue test",
      "dengue test full form",
      "dengue fever test",
      "dengue blood test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Dengue Test - NS1 Antigen, IgM & IgG",
    description:
      "Book a dengue test near you with professional sample collection, digital reports, and home collection. One blood sample checks for both early virus markers and antibodies.",
    image: "/tests/dengue.webp",
    imageAlt: "Dengue Test - NS1 Antigen, IgM and IgG Blood Test",
    reportTime: "24 Hours",
    homeCollection: "Available",
    trustPoints: [
      "NS1 + IgM + IgG Covered",
      "Professional Sample Collection",
      "Digital Reports",
      "Quality-Controlled Testing",
    ],
    bookButton: "Book Dengue Test",
    bookingUrl: "/prices/dengue-test-price-garhshankar",
    phone: "+918968038602",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Our Dengue Test Service?",
    description:
      "Get a dengue test near you without waiting in a crowded hospital queue, with trained staff and reports delivered digitally.",
    items: [
      {
        title: "Early and Late Markers Together",
        description:
          "Testing NS1 and antibodies together means a useful result whether you are on day 2 or day 7 of fever.",
      },
      {
        title: "Gentle Sample Collection",
        description:
          "Trained staff collect the sample carefully, which matters when you are already weak from fever.",
      },
      {
        title: "Digital Reports",
        description:
          "Receive your dengue report on WhatsApp and email so you can share it with your doctor immediately.",
      },
      {
        title: "Home Collection Available",
        description:
          "Stay at home and rest while a technician collects your sample at a time that suits you.",
      },
    ],
  },

  testDetails: {
    title: "About Dengue Test (NS1 Antigen, IgM & IgG)",
    description: [
      "Dengue is a viral infection spread by Aedes mosquitoes. The dengue test looks for two kinds of evidence in one blood sample: the NS1 antigen, a viral protein that appears in blood from the first day of fever, and IgM and IgG antibodies, which your immune system produces as it fights the virus.",
      "Timing matters. NS1 is most useful in roughly the first five days of fever, IgM usually becomes detectable after about day five, and IgG rises later (or earlier in a repeat infection). Checking all three together lowers the chance of a missed result, whichever day you walk in.",
    ],
    included: [
      "Dengue NS1 Antigen",
      "Dengue IgM Antibody",
      "Dengue IgG Antibody",
    ],
  },

  preparation: {
    title: "Preparation Before Dengue Test",
    description:
      "No special preparation is needed, but a few details help your doctor read the report correctly.",
    items: [
      {
        title: "No Fasting Needed",
        description:
          "You can eat and drink normally. Staying hydrated is encouraged, especially if you have a fever.",
      },
      {
        title: "Note Your Fever Day",
        description:
          "Tell the technician how many days ago the fever started. The day of illness decides which marker is most reliable.",
      },
      {
        title: "Keep Earlier Reports Handy",
        description:
          "If you already have a CBC or platelet count from the last few days, keep it ready so the trend can be compared.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Dengue Test",
    description:
      "Book in a few minutes and get your sample collected without leaving home if you prefer.",
    steps: [
      {
        title: "Book Test",
        description:
          "Request your dengue test online or call our team and mention how many days you have had fever.",
      },
      {
        title: "Sample Collection",
        description:
          "A trained technician collects a small blood sample at our lab or at your home.",
      },
      {
        title: "Laboratory Testing",
        description:
          "The sample is tested for NS1 antigen and IgM and IgG antibodies.",
      },
      {
        title: "Receive Report",
        description:
          "Get your digital dengue report on WhatsApp and email, then share it with your doctor.",
      },
    ],
  },

  pricePreview: {
    title: "Dengue Test Price",
    description:
      "See the current dengue test price and what is covered before you book, with no advance payment required.",
    price: 600,
    priceUrl: "/prices/dengue-test-price-garhshankar",
  },

  relatedTests: [
    "platelet-count",
    "cbc-test",
    "esr-test",
    "mp-antigen-test",
    "widal-test",
    "typhidot-test",
    "chikungunya-igm-test",
  ],

  faq: {
    title: "Frequently Asked Questions",
    description:
      "Quick answers about the dengue test, how to read it, and when to get it done.",
    items: [
      {
        question: "What does a dengue test check for?",
        answer:
          "It checks for the dengue virus NS1 antigen and for IgM and IgG antibodies in your blood. Together they show whether you have a current or recent dengue infection.",
      },
      {
        question: "What is the difference between NS1, IgM and IgG?",
        answer:
          "NS1 is a viral protein that appears in the first few days of fever. IgM antibodies appear a few days later and point to a recent infection. IgG antibodies appear later still and can also reflect past exposure.",
      },
      {
        question: "After how many days of fever should I get a dengue test?",
        answer:
          "You can test from day one. NS1 works best in roughly the first five days, and antibody tests become more useful after about day five. If symptoms continue, your doctor may repeat the test.",
      },
      {
        question: "What does NS1 positive with IgM and IgG negative mean?",
        answer:
          "It usually means an early, active dengue infection, because the virus protein is present before antibodies have developed. Your doctor will guide next steps and may ask for a repeat CBC.",
      },
      {
        question: "Do I need a platelet count along with the dengue test?",
        answer:
          "A dengue test confirms infection, while a platelet count or CBC tracks how the illness is affecting your blood. Doctors often order both, and platelets may be rechecked every day or two.",
      },
      {
        question: "Is fasting required for a dengue test?",
        answer:
          "No. You can eat and drink normally before the sample is collected.",
      },
      {
        question: "How long does it take to receive the dengue test report?",
        answer:
          "Reports are usually ready within 24 hours of sample collection, and delivered digitally on WhatsApp and email.",
      },
      {
        question: "Is home sample collection available for the dengue test?",
        answer:
          "Yes. Home collection is available across Garhshankar and nearby villages, which is helpful when the patient is too unwell to travel.",
      },
      {
        question: "What is the dengue test price?",
        answer:
          "Check the current dengue test price on our pricing page. Booking needs no advance payment.",
      },
    ],
  },

  cta: {
    title: "Book Your Dengue Test Today",
    description:
      "One sample, three markers, and a digital report you can show your doctor the same day it is ready.",
    highlights: [
      "NS1 + IgM + IgG Covered",
      "Home Sample Collection Available",
      "Fast Digital Reports",
    ],
    price: "600",
    priceText: "Check detailed dengue test pricing and booking options.",
    bookingUrl: "/prices/dengue-test-price-garhshankar",
    phone: "+918968038602",
    buttonText: "Book Dengue Test",
  },
},

{
  slug: "chikungunya-igm-test",
  name: "Chikungunya IgM Test",
  shortName: "Chikungunya IgM",
  category: "Infectious Disease",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Detects IgM antibodies against Chikungunya virus indicating recent infection.",
  price: 1400,
  reportTime: "24 Hours",
   status:"draft"
},
// =========================
// URINE / STOOL / SPUTUM
// =========================

{
  slug: "urine-examination",
  name: "Urine Examination",
  shortName: "Urine Routine",
  category: "Urine Test",
  organ: "Kidney",
  sampleType: "Urine",
  parameterCount: 18,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Routine urine examination used to detect urinary tract infections, kidney disorders, diabetes and other metabolic conditions.",
  price: 50,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "semen-examination",
  name: "Semen Examination",
  shortName: "Semen Analysis",
  category: "Fertility Test",
  organ: "Reproductive System",
  sampleType: "Semen",
  parameterCount: 12,
  fasting: false,
  homeCollection: false,
  popular: false,
  description:
    "Comprehensive semen analysis to evaluate sperm count, motility, morphology and male fertility.",
  price: 250,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "stool-examination",
  name: "Stool Examination",
  shortName: "Stool Routine",
  category: "Stool Test",
  organ: "Digestive System",
  sampleType: "Stool",
  parameterCount: 12,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Microscopic and physical examination of stool to diagnose infections, parasites, digestive disorders and gastrointestinal diseases.",
  price: 350,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "sputum-afb-test",
  name: "Sputum for AFB",
  shortName: "AFB Test",
  category: "Microbiology",
  organ: "Lungs",
  sampleType: "Sputum",
  parameterCount: 1,
  fasting: false,
  homeCollection: false,
  popular: true,
  description:
    "Detects Acid Fast Bacilli (AFB) in sputum for the diagnosis of tuberculosis (TB).",
  price: 300,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "gram-stain-test",
  name: "Gram Stain",
  shortName: "Gram Stain",
  category: "Microbiology",
  organ: "General",
  sampleType: "Urine / Sputum / Pus / Body Fluid",
  parameterCount: 1,
  fasting: false,
  homeCollection: false,
  popular: false,
  description:
    "Microscopic staining test used to identify bacteria and guide the diagnosis of bacterial infections.",
  price: 300,
  reportTime: "24 Hours",
   status:"draft"
},
];





export const testTheme = {
  Blood: {
    icon: FaDroplet,
    color: "red",
    iconBg: "bg-red-100",
    iconText: "text-red-600",
    badgeBg: "bg-red-50",
    badgeText: "text-red-700",
    cardBg: "bg-gradient-to-br from-red-50 via-white to-red-100",
    border: "hover:border-red-200",
    glow: "hover:shadow-red-100",
  },

  Heart: {
    icon: FaHeartPulse,
    color: "rose",
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
    cardBg: "bg-gradient-to-br from-rose-50 via-white to-rose-100",
    border: "hover:border-rose-200",
    glow: "hover:shadow-rose-100",
  },

  Kidney: {
    icon: GiKidneys,
    color: "cyan",
    iconBg: "bg-cyan-100",
    iconText: "text-cyan-600",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-700",
    cardBg: "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",
    border: "hover:border-cyan-200",
    glow: "hover:shadow-cyan-100",
  },

  Liver: {
    icon: FaBottleDroplet,
    color: "emerald",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    cardBg: "bg-gradient-to-br from-emerald-50 via-white to-emerald-100",
    border: "hover:border-emerald-200",
    glow: "hover:shadow-emerald-100",
  },

  Thyroid: {
    icon: FaDna,
    color: "indigo",
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    cardBg: "bg-gradient-to-br from-indigo-50 via-white to-indigo-100",
    border: "hover:border-indigo-200",
    glow: "hover:shadow-indigo-100",
  },

  Immune: {
    icon: FaShieldVirus,
    color: "orange",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    cardBg: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-100",
  },

  "Immune System": {
    icon: FaShieldVirus,
    color: "orange",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    cardBg: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-100",
  },

  Infection: {
    icon: FaVirus,
    color: "amber",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    cardBg: "bg-gradient-to-br from-amber-50 via-white to-amber-100",
    border: "hover:border-amber-200",
    glow: "hover:shadow-amber-100",
  },

  Nutrition: {
    icon: FaCapsules,
    color: "yellow",
    iconBg: "bg-yellow-100",
    iconText: "text-yellow-700",
    badgeBg: "bg-yellow-50",
    badgeText: "text-yellow-700",
    cardBg: "bg-gradient-to-br from-yellow-50 via-white to-yellow-100",
    border: "hover:border-yellow-200",
    glow: "hover:shadow-yellow-100",
  },

  Brain: {
    icon: FaBrain,
    color: "violet",
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    cardBg: "bg-gradient-to-br from-violet-50 via-white to-violet-100",
    border: "hover:border-violet-200",
    glow: "hover:shadow-violet-100",
  },

  Bone: {
    icon: FaBone,
    color: "stone",
    iconBg: "bg-stone-100",
    iconText: "text-stone-600",
    badgeBg: "bg-stone-50",
    badgeText: "text-stone-700",
    cardBg: "bg-gradient-to-br from-stone-50 via-white to-stone-100",
    border: "hover:border-stone-200",
    glow: "hover:shadow-stone-100",
  },

  Pancreas: {
    icon: FaSyringe,
    color: "pink",
    iconBg: "bg-pink-100",
    iconText: "text-pink-600",
    badgeBg: "bg-pink-50",
    badgeText: "text-pink-700",
    cardBg: "bg-gradient-to-br from-pink-50 via-white to-pink-100",
    border: "hover:border-pink-200",
    glow: "hover:shadow-pink-100",
  },

  Lungs: {
    icon: GiLungs,
    color: "sky",
    iconBg: "bg-sky-100",
    iconText: "text-sky-600",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    cardBg: "bg-gradient-to-br from-sky-50 via-white to-sky-100",
    border: "hover:border-sky-200",
    glow: "hover:shadow-sky-100",
  },

  "Digestive System": {
    icon: GiStomach,
    color: "lime",
    iconBg: "bg-lime-100",
    iconText: "text-lime-700",
    badgeBg: "bg-lime-50",
    badgeText: "text-lime-700",
    cardBg: "bg-gradient-to-br from-lime-50 via-white to-lime-100",
    border: "hover:border-lime-200",
    glow: "hover:shadow-lime-100",
  },

  "Reproductive System": {
    icon: FaVenusMars,
    color: "fuchsia",
    iconBg: "bg-fuchsia-100",
    iconText: "text-fuchsia-600",
    badgeBg: "bg-fuchsia-50",
    badgeText: "text-fuchsia-700",
    cardBg: "bg-gradient-to-br from-fuchsia-50 via-white to-fuchsia-100",
    border: "hover:border-fuchsia-200",
    glow: "hover:shadow-fuchsia-100",
  },

  "General Health": {
    icon: FaNotesMedical,
    color: "blue",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    cardBg: "bg-gradient-to-br from-blue-50 via-white to-blue-100",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-100",
  },

  General: {
    icon: FaStethoscope,
    color: "blue",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    cardBg: "bg-gradient-to-br from-blue-50 via-white to-blue-100",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-100",
  },
  Electrolytes: {
  icon: FaBolt,
  color: "teal",
  iconBg: "bg-teal-100",
  iconText: "text-teal-600",
  badgeBg: "bg-teal-50",
  badgeText: "text-teal-700",
  cardBg: "bg-gradient-to-br from-teal-50 via-white to-teal-100",
  border: "hover:border-teal-200",
  glow: "hover:shadow-teal-100",
},
};

export const defaultTheme = {
  icon: FaVials,
  color: "slate",
  iconBg: "bg-slate-100",
  iconText: "text-slate-600",
  badgeBg: "bg-slate-100",
  badgeText: "text-slate-700",
  cardBg: "bg-gradient-to-br from-slate-50 via-white to-slate-100",
  border: "hover:border-slate-200",
  glow: "hover:shadow-slate-100",
};

export const getTestPrice = (slug) => {
  const test = tests.find((t) => t.slug === slug);
  return test ? test.price : null;
};