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
      "Comprehensive blood test that evaluates red cells, white cells, platelets and hemoglobin.",
    price: 300,
    reportTime: "24 Hours",
     status:"published",
     hero: {
  badge: "Home Sample Collection Available",

  title: "CBC Blood Test",

  description:
    "Book a CBC Blood Test with fast report delivery, professional sample collection, and convenient home collection services.",

  image: "/images/tests/cbc.webp",

  imageAlt: "CBC Blood Test",

  reportTime: "24 Hours",

  homeCollection: "Available",

  trustPoints: [
    "Professional Sample Collection",
    "Digital Reports",
    "Affordable Pricing",
    "Quality-Controlled Testing",
  ],

  bookButton: "Book Test",

  bookingUrl: "/prices/cbc-test-price-chandigarh",

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
    "Get reliable laboratory testing with convenient booking, professional sample collection, and easy access to digital reports.",


  items: [

    {
      title: "Professional Sample Collection",

      description:
        "Samples are collected using proper procedures for a comfortable testing experience.",
    },


    {
      title: "Quality Testing Process",

      description:
        "Tests are processed using standardized laboratory procedures.",
    },


    {
      title: "Fast Digital Reports",

      description:
        "Receive your reports conveniently after completion of testing.",
    },


    {
      title: "Home Collection Available",

      description:
        "Book sample collection from your home at a convenient time.",
    },

  ],

},
testDetails: {

  title: "About CBC Blood Test",

  description: [

    "CBC (Complete Blood Count) is a common blood test used to check different components of blood, including red blood cells, white blood cells, and platelets.",

    "This test helps healthcare professionals evaluate general health status and identify conditions that may require further medical attention.",

  ],


  included: [

    "Hemoglobin Level",

    "Red Blood Cell Count",

    "White Blood Cell Count",

    "Platelet Count",

  ],

},
preparation: {

  title: "Preparation Before CBC Blood Test",

  description:
    "Follow these simple instructions before your test to ensure a smooth sample collection experience.",


  items: [

    {
      title: "Fasting Requirement",

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
    "Book your test easily with a simple process and get your sample collected at your preferred time.",


  steps: [

    {
      title: "Book Test",

      description:
        "Choose your test and submit your booking request online or contact our team.",
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
        "Get your digital report after the test is completed.",
    },

  ],

},
pricePreview: {

  title: "CBC Blood Test Price",

  description:
    "Check the latest CBC Blood Test price and book your test with convenient home sample collection.",


  price: "399",

  priceUrl:
    "/prices/cbc-test-price-chandigarh",

},
relatedTests: {

  title: "Related Tests",

  description:
    "Explore other commonly recommended health tests and profiles.",


  items: [

    {
      name: "HbA1c Test",

      description:
        "A blood test used to monitor average blood sugar levels.",

      url:
        "/tests/hba1c-test",
    },


    {
      name: "Vitamin D Test",

      description:
        "Check vitamin D levels with a simple blood sample.",

      url:
        "/tests/vitamin-d-test",
    },


    {
      name: "Thyroid Profile Test",

      description:
        "Evaluate thyroid hormone levels through blood testing.",

      url:
        "/tests/thyroid-profile-test",
    },


    {
      name: "Lipid Profile Test",

      description:
        "Measure cholesterol and other lipid levels.",

      url:
        "/tests/lipid-profile-test",
    },

  ],

},
faq: {

  title: "Frequently Asked Questions",

  description:
    "Find answers to common questions about this test, booking, and sample collection.",


  items: [

    {
      question:
        "Is fasting required for a CBC Blood Test?",

      answer:
        "CBC Blood Test usually does not require fasting. However, follow any instructions provided by your healthcare professional if multiple tests are booked together.",
    },


    {
      question:
        "How long does it take to receive the report?",

      answer:
        "Reports are usually available within the mentioned turnaround time after sample collection and laboratory processing.",
    },


    {
      question:
        "Is home sample collection available?",

      answer:
        "Yes, home sample collection is available. You can book an appointment and choose a convenient collection time.",
    },


    {
      question:
        "How can I book this test?",

      answer:
        "You can book the test online through our booking page or contact our support team for assistance.",
    },


    {
      question:
        "What sample is required for this test?",

      answer:
        "The required sample depends on the test. For CBC Blood Test, a blood sample is collected by trained professionals.",
    },

  ],

},
cta: {

  title:
    "Book Your CBC Blood Test Today",

  description:
    "Get convenient sample collection, reliable testing, and easy access to your reports.",


  highlights: [

    "Home Sample Collection Available",

    "Fast Report Delivery",

    "Professional Collection Process",

  ],


  price:
    "399",


  priceText:
    "Check detailed pricing and booking options.",


  bookingUrl:
    "/prices/cbc-test-price-chandigarh",


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
    homeCollection: true,
    popular: true,
    description:
      "Measures blood glucose levels for diabetes screening and monitoring.",
    price: 30,
    reportTime: "24 Hours",
     status:"draft"
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
    "Detects antibodies against Salmonella bacteria to help diagnose typhoid fever.",
  price: 50,
  reportTime: "24 Hours",
   status:"draft"
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