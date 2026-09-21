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

      phone: "tel:+918968038602",
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


      phone:
        "tel:+918968038602",


      buttonText:
        "Book CBC Test",

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
 
    phone: "tel:+918968038602",
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
 
    phone: "tel:+918968038602",
 
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
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 5,
  fasting: true,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive cholesterol profile to assess cardiovascular disease risk.",
  price: 450,
  reportTime: "24 Hours",
   status:"draft"
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
    "Comprehensive liver profile that evaluates liver enzymes, bilirubin and protein levels.",
  price: 500,
  reportTime: "24 Hours",
   status:"draft"
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
    title: "Widal Test - Price, Normal Range | Book Typhoid Test",
    // 56 chars
    description:
      "Book a Widal test for typhoid diagnosis with home sample collection. Check Widal test price, normal range, and same-day digital reports.",
    // 139 chars
    keywords: [
      "widal test",
      "widal test price",
      "widal test near me",
      "widal test normal range",
      "widal test positive means",
      "typhoid test",
      "s typhi o s typhi h",
      "widal test 1:80 meaning",
      "widal test 1:160 meaning",
      "typhoid test price",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",
    title: "Widal Test - Typhoid Fever Screening",
    description:
      "Book a Widal Test near you with fast report delivery, professional sample collection, and convenient home collection services. Check Widal test price and book online.",
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
    phone: "tel:+918968038602",
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
          "You can check the latest Widal test price on our pricing page and book online with home sample collection.",
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
    phone: "tel:+918968038602",
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
    "Rapid blood test for detecting IgM and IgG antibodies against typhoid infection.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
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
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects dengue infection for early diagnosis and treatment.",
  price: 600,
  reportTime: "24 Hours",
   status:"draft"
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