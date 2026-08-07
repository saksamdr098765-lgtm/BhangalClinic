// data/blogs.js

import SITE_CONFIG from "../SITE_CONFIG";

export const blogs = [
//   {
//     id: 1,

//     slug: "vitamin-d-deficiency",

//     title: "Vitamin D Deficiency: Symptoms, Causes, Diagnosis & Treatment",

//     excerpt:
//       "Learn everything about Vitamin D deficiency, including symptoms, causes, diagnosis, treatment, and prevention tips to maintain healthy bones and immunity.",

//     category: "Health Tips",

//     author: {
//       name: "DK Bhangal Lab",
//       image: "/team/author.jpg",
//     },

//     publishedAt: "July 19, 2026",

//     readingTime: "8 min read",

//     coverImage: "/blogs/vitamin-d/cover.webp",

//     featured: true,
// relatedPackages: [
//   "bhangal-ayush-profile-3",
//   "bhangal-ayush-profile-3-1",
//   "bhangal-master-health-screen",
//   "bcl-med-pro-65-package",
//   "bhangal-senior-citizen-profile",
//   "bcl-female-4-package",
// ],
//    seo: {
//   title:
//     "Vitamin D Deficiency: Symptoms, Causes, Diagnosis & Treatment | DK Bhangal Lab",

//   description:
//     "Learn about Vitamin D deficiency, including symptoms, causes, diagnosis, Vitamin D blood tests, treatment options, and prevention. Expert health information from DK Bhangal Lab.",

//   keywords: [
//     "Vitamin D deficiency",
//     "Vitamin D symptoms",
//     "Vitamin D test",
//     "Vitamin D blood test",
//     "Low Vitamin D",
//     "Vitamin D diagnosis",
//     "Vitamin D treatment",
//     "Vitamin D supplements",
//     "Bone health",
//     "Preventive healthcare",
//     "Health blog",
//     "Diagnostic laboratory",
//     "DK Bhangal Lab",
//   ],
// },
//  quickInfo: {
//     testName: "Vitamin D (25-OH) Test",
//     price: "₹899",
//     sample: "Blood Sample",
//     fasting: "Not Required",
//     reportTime: "Same Day",
//     homeCollection: "Available",
//     recommendedFor: "Fatigue, Bone Pain, Muscle Weakness",
//     booking: "Online / Phone / WhatsApp",
//   },

// tags: [
//   "Vitamin D Deficiency",
//   "Vitamin D",
//   "Blood Tests",
//   "Nutrition",
//   "Bone Health",
//   "Preventive Healthcare",
// ],

//   content: [
//   {
//     type: "paragraph",
//     text: "Vitamin D deficiency is one of the most common nutritional deficiencies worldwide. Vitamin D plays a vital role in maintaining healthy bones, muscles, teeth, and a strong immune system. Despite abundant sunlight in many regions, a large number of people still experience low Vitamin D levels because of indoor lifestyles, poor dietary intake, increasing use of sunscreen, aging, and certain medical conditions. Since the symptoms often develop gradually, many people remain unaware of the deficiency until it begins affecting their daily lives. Early diagnosis through a simple blood test can help prevent complications and improve overall health.",
//   },

//   {
//     type: "image",
//     src: "/blogs/vitamin-d/image-1.webp",
//     alt: "Vitamin D Rich Foods",
//     caption: "Foods naturally rich in Vitamin D help maintain healthy bones and immunity.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "What is Vitamin D?",
//   },

//   {
//     type: "paragraph",
//     text: "Vitamin D is a fat-soluble vitamin that helps the body absorb calcium and phosphorus, two essential minerals responsible for strong bones and healthy teeth. It also contributes to muscle function, nerve communication, and immune defense. The body naturally produces Vitamin D when the skin is exposed to sunlight, but it can also be obtained through food and supplements. Maintaining adequate Vitamin D levels is important for people of all ages, from growing children to older adults.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "Symptoms of Vitamin D Deficiency",
//   },

//   {
//     type: "paragraph",
//     text: "The signs of Vitamin D deficiency may vary from person to person. Some individuals experience no symptoms at all, while others develop noticeable health problems. Persistent deficiency may affect physical performance, bone strength, and immunity.",
//   },

//   {
//     type: "list",
//     items: [
//       "Persistent tiredness and fatigue",
//       "Bone or lower back pain",
//       "Muscle weakness",
//       "Frequent infections",
//       "Slow wound healing",
//       "Hair loss",
//       "Mood changes or depression",
//       "Difficulty climbing stairs",
//       "Joint discomfort",
//       "Poor bone density",
//     ],
//   },

//   {
//     type: "tip",
//     title: "Health Tip",
//     text: "Morning sunlight exposure for 15–20 minutes several times a week may help your body naturally produce Vitamin D.",
//   },

//   {
//     type: "image",
//     src: "/blogs/vitamin-d/image-2.webp",
//     alt: "Morning Sunlight",
//     caption: "Moderate sunlight exposure is one of the best natural sources of Vitamin D.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "Common Causes of Vitamin D Deficiency",
//   },

//   {
//     type: "paragraph",
//     text: "Several lifestyle and medical factors can contribute to low Vitamin D levels. Understanding these causes helps individuals take preventive measures before serious complications develop.",
//   },

//   {
//     type: "list",
//     items: [
//       "Limited exposure to sunlight",
//       "Working indoors for long hours",
//       "Regular use of sunscreen",
//       "Darker skin pigmentation",
//       "Poor dietary intake",
//       "Obesity",
//       "Kidney or liver disorders",
//       "Digestive diseases affecting nutrient absorption",
//       "Increasing age",
//       "Pregnancy and breastfeeding",
//     ],
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "Who is at Higher Risk?",
//   },

//   {
//     type: "paragraph",
//     text: "Certain individuals have a greater risk of developing Vitamin D deficiency. Older adults produce less Vitamin D through the skin, while infants who are exclusively breastfed may not receive adequate amounts unless supplementation is recommended. Individuals with chronic kidney disease, liver disease, obesity, inflammatory bowel disease, or those following strict vegetarian diets may also require closer monitoring of their Vitamin D levels.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "How is Vitamin D Deficiency Diagnosed?",
//   },
// {
//   type: "heading",
//   level: 2,
//   text: "Normal Vitamin D Levels",
// },
// {
//   type: "table",
//   title: "Vitamin D (25-OH) Blood Test Reference Range",
//   headers: ["Vitamin D Level", "Interpretation"],
//   rows: [
//     ["Below 20 ng/mL", "Deficient"],
//     ["20–29 ng/mL", "Insufficient"],
//     ["30–100 ng/mL", "Normal"],
//     ["Above 100 ng/mL", "High (May Require Evaluation)"],
//   ],
// },
//   {
//     type: "paragraph",
//     text: "The most reliable way to diagnose Vitamin D deficiency is through a 25-hydroxy Vitamin D blood test. This laboratory test measures the amount of Vitamin D circulating in the bloodstream and helps healthcare professionals determine whether your levels are adequate, insufficient, or deficient. Based on the results, your doctor may recommend dietary changes, supplements, or further investigations if an underlying medical condition is suspected.",
//   },

//   {
//     type: "warning",
//     title: "Important",
//     text: "Avoid taking high-dose Vitamin D supplements without proper medical advice. Excess Vitamin D may lead to unwanted side effects and should only be taken according to professional recommendations.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "Best Food Sources of Vitamin D",
//   },

//   {
//     type: "paragraph",
//     text: "Although sunlight is the primary natural source of Vitamin D, several foods can also contribute to maintaining healthy levels. Including these foods regularly in your diet supports overall wellness.",
//   },

//   {
//     type: "list",
//     items: [
//       "Fatty fish such as salmon and sardines",
//       "Egg yolks",
//       "Fortified milk",
//       "Fortified cereals",
//       "Cheese",
//       "Mushrooms exposed to sunlight",
//       "Fortified yogurt",
//     ],
//   },

//   {
//     type: "image",
//     src: "/blogs/vitamin-d/image-3.webp",
//     alt: "Foods containing Vitamin D",
//     caption: "A balanced diet supports healthy Vitamin D levels.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "Treatment Options",
//   },

//   {
//     type: "paragraph",
//     text: "Treatment depends on the severity of the deficiency and the individual's overall health. Mild deficiencies may improve with dietary changes and increased sunlight exposure, while moderate to severe deficiencies often require Vitamin D supplements. Regular monitoring through blood tests helps ensure that Vitamin D levels return to the recommended range and remain stable over time.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "How to Prevent Vitamin D Deficiency",
//   },

//   {
//     type: "paragraph",
//     text: "Maintaining healthy Vitamin D levels is often easier than treating a long-standing deficiency. A combination of healthy lifestyle habits and routine health checkups can significantly reduce your risk.",
//   },

//   {
//     type: "list",
//     items: [
//       "Spend time outdoors regularly",
//       "Eat Vitamin D-rich foods",
//       "Exercise consistently",
//       "Maintain a healthy body weight",
//       "Get routine health checkups",
//       "Consult your doctor before using supplements",
//     ],
//   },

//   {
//     type: "success",
//     title: "Key Takeaway",
//     text: "Vitamin D deficiency is common but easily manageable when detected early. Regular blood testing, balanced nutrition, healthy lifestyle habits, and timely medical guidance help maintain optimal Vitamin D levels and support lifelong bone, muscle, and immune health.",
//   },

//   {
//     type: "heading",
//     level: 2,
//     text: "Conclusion",
//   },

//   {
//     type: "paragraph",
//     text: "Vitamin D is essential for maintaining healthy bones, muscles, and immunity. Because deficiency often develops silently, regular health screening plays an important role in early detection. If you frequently experience fatigue, muscle weakness, bone pain, or recurrent infections, consulting a healthcare professional and undergoing a Vitamin D blood test can provide valuable insight into your overall health. Early diagnosis and appropriate treatment can help prevent long-term complications and improve quality of life.",
//   },
//   {
//   type: "references",
//   items: [
//     {
//       title: "Vitamin D - Fact Sheet for Health Professionals",
//       publisher: "National Institutes of Health (NIH)",
//       url: "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/",
//     },
//     {
//       title: "Vitamin D",
//       publisher: "MedlinePlus",
//       url: "https://medlineplus.gov/vitamind.html",
//     },
//     {
//       title: "Vitamin D",
//       publisher: "Mayo Clinic",
//       url: "https://www.mayoclinic.org/",
//     },
//   ],
// }
// ],

//     faq: [
//       {
//         question: "What causes Vitamin D deficiency?",
//         answer:
//           "Limited sun exposure, poor diet, obesity, aging, and certain medical conditions can contribute to Vitamin D deficiency.",
//       },

//       {
//         question: "How is Vitamin D deficiency diagnosed?",
//         answer:
//           "A blood test measuring 25-hydroxy Vitamin D is commonly used to diagnose deficiency.",
//       },

//       {
//         question: "Can Vitamin D deficiency be prevented?",
//         answer:
//           "Yes. Adequate sunlight exposure, a balanced diet, and medical advice regarding supplements can help prevent deficiency.",
//       },
//     ],
//   },
  {
  id: 2,

  slug: "list-of-blood-tests",

  title: "Complete List of Blood Tests and What They Mean (Full Panel Guide)",

  excerpt:
    "A complete guide to blood test names, the 5 main blood tests, 7 basic blood tests, and the 14-test full panel — what each one checks and how to read your report.",

  category: "Health Tips",

  author: {
    name: "DK Bhangal Lab",
    image: "/team/author.jpg",
  },

  publishedAt: "August 12, 2026",

  readingTime: "10 min read",

  coverImage: "/blogs/list-of-blood-tests/cover.webp",

  featured: false,

  relatedPackages: [
    "bhangal-basic-profile-plus",
    "bhangal-advance-full-body-checkup",
    "bhangal-basic-profile",
    "bcl-female-4-package",
    "bhangal-senior-citizen-profile",
    "bhangal-master-health-screen",
    "bhangal-diabetic-profile",
    "bhangal-ayush-profile-3",
    "bhangal-ayush-profile-2",
    "bhangal-ayush-profile-2-1"
  ],
relatedTests: [
  "cbc-test",
  "blood-sugar-test",
  "lipid-profile",
  "kidney-function-test",
  "liver-function-test",
  "urine-examination",
  "uric-acid-test",
  "blood-group-test",
],
  seo: {
    title:
      "Complete List of Blood Tests and What They Mean | DK Bhangal Lab",

    description:
      "Explore the full list of blood tests, including the 5 main tests, 7 basic tests, and 14-test full panel. Learn what each blood test checks, normal ranges, and how to read your report.",

    keywords: [
      "list of blood tests",
      "blood test names",
      "blood test names and meanings",
      "full blood test check",
      "full panel blood test",
      "5 main blood tests",
      "7 basic blood tests",
      "14 blood tests",
      "blood test report",
      "blood test normal range",
      "blood test results chart",
      "CBC test",
      "full body checkup",
      "diagnostic laboratory",
      "DK Bhangal Lab",
    ],
  },

quickInfo: [
  {
    label: "You Will Learn",
    value: "Complete List of Blood Tests",
    icon: "activity",
  },
 
  {
    label: "Reading Time",
    value: "10 Minutes",
    icon: "clock",
  },
  {
    label: "Suitable For",
    value: "Adults & Children",
    icon: "users",
  },
  {
    label: "Symptoms",
    value: "Fatigue, Fever, Weakness",
    icon: "heart",
  },
  {
    label: "Recommended Test",
    value: "CBC Blood Test",
    icon: "test",
  },
 
  {
    label: "Fasting",
    value: "Not Required",
    icon: "file",
  },
  {
    label: "Report Time",
    value: "Same Day",
    icon: "clock",
  },
  {
    label: "Price",
    value: "₹249",
    icon: "price",
  },
  {
    label: "Home Collection",
    value: "Available",
    icon: "home",
  },

],

  tags: [
    "Blood Tests",
    "Full Body Checkup",
    "Health Screening",
    "CBC",
    "Preventive Healthcare",
    "Blood Test Report",
  ],

  content: [
    {
      type: "paragraph",
      text: "Doctors use blood tests to check almost every system in your body — from blood cell counts to sugar, cholesterol, liver, kidney, and hormone levels. But most people booking a checkup have never heard the exact names of these tests, and the panels are often described differently by different labs and doctors. This guide breaks down the most common blood test panels — the 5 main tests, the 7 basic tests, and the full 14-test panel — so you know exactly what you're getting and what each result means.",
    },

    {
      type: "image",
      src: "/blogs/list-of-blood-tests/Blood-sample-tubes.webp",
      alt: "Blood sample tubes for lab testing",
      caption: "A single blood draw can be split across multiple test panels.",
    },

    {
      type: "heading",
      level: 2,
      text: "What Is a 'Full Blood Test Check'?",
    },

    {
      type: "paragraph",
      text: "A 'full blood test check' or 'full panel blood test' usually refers to a group of tests done together to give a broad picture of your health, rather than a single test. It's often called a full body checkup panel, and it commonly includes blood count, sugar, lipid profile, liver function, kidney function, and thyroid tests. The exact tests included can vary between labs, so it's worth checking the panel details before booking.",
    },

    {
      type: "tip",
      title: "Good to Know",
      text: "'CBC' (Complete Blood Count) is often confused with a full body checkup — CBC is just one test within a larger panel, not the entire checkup.",
    },

    {
      type: "interlinking",
      title: "Explore Our Services & Pricing",
      description: "Now that you understand what blood tests involve, explore our dedicated service offerings and transparent pricing.",
      items: [
        {
          title: "Blood Test Service Details",
          description: "See what's included in our blood testing service, lab standards & processing.",
          href: "/services/blood-tests",
        },
        {
          title: "Blood Test Price List in Garhshankar",
          description: "Check test rates, starting prices from ₹49, and doorstep home sample collection.",
          href: "/prices/blood-test-price-garhshankar",
        },
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "What Are the 5 Main Blood Tests?",
    },

    {
      type: "paragraph",
      text: "These five tests form the foundation of most routine health checkups and are usually the starting point doctors recommend.",
    },

    {
      type: "table",
      title: "5 Main Blood Tests",
      headers: ["Test Name", "What It Checks"],
      rows: [
        ["Complete Blood Count (CBC)", "Red cells, white cells, platelets, hemoglobin"],
        ["Blood Sugar (Fasting/Random)", "Diabetes risk and blood glucose control"],
        ["Lipid Profile", "Cholesterol and triglyceride levels, heart health"],
        ["Liver Function Test (LFT)", "Liver enzymes and overall liver health"],
        ["Kidney Function Test (KFT)", "Creatinine, urea, and kidney health"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "What Are the 7 Basic Blood Tests?",
    },

    {
      type: "paragraph",
      text: "Building on the 5 main tests above, these two additional tests are commonly added to form a more complete basic panel.",
    },

    {
      type: "table",
      title: "7 Basic Blood Tests",
      headers: ["Test Name", "What It Checks"],
      rows: [
        ["CBC", "Blood cell counts and hemoglobin"],
        ["Blood Sugar", "Diabetes risk and glucose control"],
        ["Lipid Profile", "Cholesterol and heart health"],
        ["LFT", "Liver health"],
        ["KFT", "Kidney health"],
        ["Thyroid Test (TSH)", "Thyroid hormone levels and metabolism"],
        ["Vitamin D", "Bone health, immunity, and common deficiency"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "What Are the 14 Blood Tests? (Comprehensive Panel)",
    },

    {
      type: "paragraph",
      text: "For a more thorough annual checkup, labs often combine the 7 basic tests above with additional markers covering inflammation, minerals, and infection screening.",
    },

    {
      type: "table",
      title: "14 Blood Test Full Panel",
      headers: ["Test Name", "What It Checks"],
      rows: [
        ["CBC", "Blood cell counts and hemoglobin"],
        ["ESR", "Inflammation markers in the body"],
        ["Fasting Blood Sugar", "Diabetes screening"],
        ["HbA1c", "Average blood sugar over 3 months"],
        ["Lipid Profile", "Cholesterol and triglycerides"],
        ["LFT", "Liver enzymes and function"],
        ["KFT", "Creatinine, urea, kidney function"],
        ["Thyroid Profile (TSH, T3, T4)", "Thyroid function"],
        ["Vitamin D", "Bone and immune health"],
        ["Vitamin B12", "Nerve function and energy levels"],
        ["Calcium", "Bone health and muscle function"],
        ["Uric Acid", "Gout risk and joint health"],
        ["Iron / Ferritin", "Anemia and iron stores"],
        ["CRP", "Infection and inflammation markers"],
      ],
    },
     {
      type: "heading",
      level: 2,
      text: "Comparision Between Differnt blood Test",
    },
     {
      type: "paragraph",
      text: "Below is Table to describe the differnt between all three tests",
    },
    {
  type: "table",
  title: "5-Test vs 7-Test vs 14-Test Blood Panel Comparison",
  headers: [
    "Feature",
    "5-Test Panel",
    "7-Test Panel",
    "14-Test Panel",
  ],
  rows: [
    ["CBC", "✅", "✅", "✅"],
    ["Blood Sugar", "✅", "✅", "✅"],
    ["Lipid Profile", "✅", "✅", "✅"],
    ["LFT", "✅", "✅", "✅"],
    ["KFT", "✅", "✅", "✅"],
    ["Thyroid (TSH)", "❌", "✅", "✅"],
    ["Vitamin D", "❌", "✅", "✅"],
    ["HbA1c", "❌", "❌", "✅"],
    ["Vitamin B12", "❌", "❌", "✅"],
    ["CRP", "❌", "❌", "✅"],
    ["Iron/Ferritin", "❌", "❌", "✅"],
    ["Best For", "Basic Checkup", "Preventive Health", "Complete Health Assessment"],
  ],
},
{
  type: "heading",
  level: 2,
  text: "Which Blood Test Should You Get Based on Your Symptoms?",
},

{
  type: "paragraph",
  text: "Different symptoms can point to different underlying health conditions, and choosing the right blood test helps doctors identify the cause more quickly. While a single symptom doesn't confirm a diagnosis, the tests below are commonly recommended based on the symptoms you may be experiencing. Always consult a healthcare professional for proper evaluation and interpretation of your results.",
},

{
  type: "table",
  title: "Symptoms and Recommended Blood Tests",
  headers: [
    "Symptom",
    "Recommended Tests",
    "Possible Conditions",
  ],
  rows: [
    ["Fatigue & Weakness", "CBC, Iron, Vitamin B12", "Anemia, Vitamin Deficiency"],
    ["Frequent Urination", "Fasting Sugar, HbA1c", "Diabetes"],
    ["Weight Gain", "TSH, T3, T4", "Hypothyroidism"],
    ["Weight Loss", "HbA1c, Thyroid Profile", "Diabetes, Hyperthyroidism"],
    ["High Cholesterol", "Lipid Profile", "Heart Disease Risk"],
    ["Joint Pain", "Uric Acid, CRP", "Gout, Inflammation"],
    ["Persistent Fever", "CBC, ESR, CRP", "Infection"],
    ["Hair Fall", "Iron, Vitamin D, Vitamin B12, TSH", "Nutritional Deficiency"],
    ["Bone Pain", "Vitamin D, Calcium", "Vitamin D Deficiency"],
    ["Swelling", "KFT, LFT", "Kidney/Liver Disorders"],
  ],
},

    {
      type: "heading",
      level: 2,
      text: "Full List of Blood Tests by Category",
    },

    {
      type: "paragraph",
      text: "Beyond the standard panels above, here is a categorized list of blood tests commonly available, organized by the body system they screen.",
    },

    {
      type: "list",
      items: [
        "Blood Count & General Health: CBC, ESR, CRP",
        "Diabetes & Sugar: Fasting Sugar, HbA1c, Random Sugar",
        "Thyroid: TSH, T3, T4",
        "Heart Health: Lipid Profile, Cholesterol",
        "Liver & Kidney: LFT, KFT",
        "Vitamins & Minerals: Vitamin D, Vitamin B12, Calcium, Iron, Ferritin",
        "Infection Screening: Widal, Dengue, Malaria, Typhoid, HIV, TB",
        "Other: Uric Acid, PSA, Hormone Panel, Allergy Panel",
      ],
    },

    {
      type: "image",
      src: "/blogs/list-of-blood-tests/Lab-technician-reviewing-blood-test-report.webp",
      alt: "Lab technician reviewing blood test report",
      caption: "Understanding your report helps you act on results faster.",
    },

    {
      type: "heading",
      level: 2,
      text: "Understanding Your Blood Test Report",
    },

    {
      type: "paragraph",
      text: "Every blood test report typically shows the same four columns: the test name, your result, the normal reference range, and a flag if your result is high or low. If a value falls outside the normal range, it's marked (often in red or bold) so it's easy to spot — but an out-of-range result doesn't always mean something serious, so it should always be reviewed with a doctor.",
    },

    {
      type: "table",
      title: "Sample Blood Test Report Format",
      headers: ["Test Name", "Result", "Normal Range", "Flag"],
      rows: [
        ["Hemoglobin", "13.5 g/dL", "13.0-17.0 g/dL", "Normal"],
        ["Fasting Sugar", "110 mg/dL", "70-100 mg/dL", "High"],
        ["Vitamin D", "18 ng/mL", "30-100 ng/mL", "Low"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "How Long Does a Blood Test Take & Do You Need to Fast?",
    },

    {
      type: "paragraph",
      text: "Most blood draws take only 5-10 minutes, and results for common tests like CBC, sugar, and lipid profile are usually ready the same day. Fasting for 8-10 hours is recommended for sugar and lipid profile tests to get accurate results, but tests like CBC, thyroid, or Vitamin D generally don't require fasting.",
    },

    {
      type: "heading",
      level: 2,
      text: "How Much Does a Blood Test Cost?",
    },

    {
      type: "paragraph",
      text: "Individual test prices vary depending on what's included, while full panels offer better value than booking tests separately. Check our current price list for exact rates on individual tests and bundled packages.",
    },

    {
      type: "interlinking",
      title: "Check Prices & Service Details",
      description: "Ready to check cost or schedule your blood test? Move down the funnel to view exact prices and service details.",
      items: [
        {
          title: "Blood Test Price in Garhshankar",
          description: "View complete price list for CBC, Thyroid, Diabetes & full body checkup packages.",
          href: "/prices/blood-test-price-garhshankar",
        },
        {
          title: "Blood Test Service Overview",
          description: "Learn what is included in our service, doorstep collection, and lab testing process.",
          href: "/services/blood-tests",
        },
      ],
    },

    {
      type: "success",
      title: "Key Takeaway",
      text: "Whether you need a single test or a full 14-panel checkup, understanding what each blood test measures helps you make sense of your results and take timely action on your health. Regular screening — even when you feel fine — is one of the simplest ways to catch problems early.",
    },

    {
      type: "heading",
      level: 2,
      text: "Book Your Blood Test",
    },
    {
  type: "interlinking",
  title: "Areas We Serve",
  description: "We provide home sample collection and diagnostic services across the following locations.",
  items: [
    {
      title: "Garhshankar",
      description: "Blood tests and home sample collection.",
      href: "/locations/blood-test-in-garhshankar",
    },
    {
      title: "Hoshiarpur",
      description: "Diagnostic laboratory services.",
      // href: "/locations/hoshiarpur",
    },
    {
      title: "Nawanshahr",
      description: "Health checkups and pathology tests.",
      // href: "/locations/nawanshahr",
    },
  ],
},

    {
      type: "references",
      items: [
        {
          title: "Complete Blood Count (CBC)",
          publisher: "MedlinePlus",
          url: "https://medlineplus.gov/labtests/completebloodcountcbc.html",
        },
        {
          title: "Blood Tests",
          publisher: "National Heart, Lung, and Blood Institute (NIH)",
          url: "https://www.nhlbi.nih.gov/health/blood-tests",
        },
        {
          title: "Understanding Your Lab Test Results",
          publisher: "Mayo Clinic",
          url: "https://www.mayoclinic.org/",
        },
      ],
    },
  ],

  faq: [
    {
  question: "What is the main reason for a blood test?",
  answer:
    "The main reason for a blood test is to assess your overall health, detect medical conditions early, monitor existing diseases, and evaluate how well your organs are functioning. Blood tests can help diagnose conditions such as anemia, diabetes, infections, thyroid disorders, liver disease, kidney disease, and high cholesterol before symptoms become severe."
},
{
  question: "What is the purpose of a blood test?",
  answer:
    "The purpose of a blood test is to provide important information about your health by measuring various components in your blood, such as red blood cells, white blood cells, platelets, glucose, cholesterol, hormones, vitamins, and enzymes. Doctors use blood tests for routine health checkups, diagnosing illnesses, monitoring treatment progress, and screening for potential health problems."
},
{
  question: "What is the correct time for a blood test?",
  answer:
    "The correct time depends on the type of blood test. Many routine blood tests can be done at any time of the day, while fasting tests such as Fasting Blood Sugar and Lipid Profile are usually performed in the morning after 8–12 hours of fasting. Always follow the instructions provided by your doctor or laboratory."
},
{
  question: "Can I eat or drink before a blood test?",
  answer:
    "It depends on the test being performed. Tests like CBC usually do not require fasting, so you can eat and drink normally. However, tests such as Fasting Blood Sugar and Lipid Profile require you to avoid food for 8–12 hours before sample collection. Drinking plain water is generally allowed unless your healthcare provider advises otherwise."
},
    {
      question: "What are the 5 main blood tests?",
      answer:
        "The 5 main blood tests are CBC (Complete Blood Count), blood sugar, lipid profile, liver function test (LFT), and kidney function test (KFT).",
    },
    {
      question: "What are the 7 basic blood tests?",
      answer:
        "The 7 basic blood tests build on the 5 main tests by adding a thyroid test (TSH) and a Vitamin D test.",
    },
    {
      question: "What are the 14 blood tests?",
      answer:
        "The 14-test panel typically includes CBC, ESR, fasting blood sugar, HbA1c, lipid profile, LFT, KFT, thyroid profile, Vitamin D, Vitamin B12, calcium, uric acid, iron/ferritin, and CRP.",
    },
    {
      question: "What is a full blood test check?",
      answer:
        "A full blood test check refers to a combined panel of tests — usually covering blood count, sugar, cholesterol, liver, and kidney function — done together to give a broad picture of overall health.",
    },
    {
      question: "Do I need to fast before a blood test?",
      answer:
        "Fasting for 8-10 hours is recommended for sugar and lipid profile tests. Tests like CBC, thyroid, or Vitamin D usually don't require fasting.",
    },
    {
      question: "How long does a blood test take?",
      answer:
        "The blood draw itself takes about 5-10 minutes, and results for most routine tests are available the same day.",
    },
  ],
cta: {
  title: "Book Your Blood Test Today",

  description:
    "Looking for reliable blood testing? Book your blood test with convenient home sample collection, affordable pricing, and fast digital reports.",

  serviceName: "Blood Test",

  serviceLink: "/services/blood-tests",

  bookingLink:
    `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20Blood%20Test.%20Please%20share%20the%20available%20slots.`,

  whatsappLink:
    `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20Blood%20Tests.`,

  features: [
    "100+ Blood Tests Available",
    "Home Sample Collection",
    "Fast Digital Reports",
    "Affordable Pricing",
    "Experienced Phlebotomists",
  ],
},
}
//   {
//   id: 2,

//   slug: "vitamin-b12-deficiency",

//   title:
//     "Vitamin B12 Deficiency: Symptoms, Causes, Diagnosis & Treatment",

//   excerpt:
//     "Learn about Vitamin B12 deficiency, including its symptoms, causes, diagnosis, treatment, prevention, and the importance of early blood testing for better health.",

//   category: "Health Tips",

//   author: {
//     name: "DK Bhangal Lab",
//     image: "/team/author.jpg",
//   },

//   publishedAt: "July 20, 2026",

//   readingTime: "9 min read",

//   coverImage: "/blogs/vitamin-b12/cover.webp",

//   featured: false,

//   relatedPackages: [
//     "bhangal-ayush-profile-3",
//     "bhangal-ayush-profile-3-1",
//     "bhangal-master-health-screen",
//     "bcl-med-pro-65-package",
//     "bhangal-senior-citizen-profile",
//     "bcl-female-4-package",
//   ],

// seo: {
//   title:
//     "Vitamin B12 Deficiency: Symptoms, Causes, Diagnosis & Treatment | DK Bhangal Lab",

//   description:
//     "Learn about Vitamin B12 deficiency, including symptoms, causes, diagnosis, blood tests, treatment options, and prevention. Expert health information from DK Bhangal Lab.",

//   keywords: [
//     "Vitamin B12 deficiency",
//     "Vitamin B12 symptoms",
//     "Vitamin B12 test",
//     "Vitamin B12 blood test",
//     "Low Vitamin B12",
//     "Vitamin B12 treatment",
//     "Vitamin B12 diagnosis",
//     "Health blog",
//     "Diagnostic laboratory",
//     "DK Bhangal Lab",
//   ],
// },

// tags: [
//   "Vitamin B12 Deficiency",
//   "Vitamin B12",
//   "Blood Tests",
//   "Nutrition",
//   "Preventive Healthcare",
// ],

//   content: [{
//   type: "paragraph",
//   text: "Vitamin B12 deficiency is a common nutritional disorder that affects millions of people worldwide. Vitamin B12, also known as cobalamin, is an essential water-soluble vitamin required for healthy red blood cell formation, proper nerve function, DNA synthesis, and energy production. Because the human body cannot produce Vitamin B12 on its own, it must be obtained through food or supplements. When the body does not receive enough Vitamin B12 or cannot absorb it effectively, deficiency develops gradually and may lead to fatigue, weakness, nerve damage, anemia, and cognitive problems. Since the symptoms often appear slowly, many people remain undiagnosed for months or even years. Early detection through a simple blood test allows timely treatment and helps prevent long-term health complications.",
// },

// {
//   type: "image",
//   src: "/blogs/vitamin-b12/image-1.webp",
//   alt: "Foods Rich in Vitamin B12",
//   caption: "Animal-based foods such as eggs, fish, dairy products, and meat are excellent natural sources of Vitamin B12.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "What is Vitamin B12?",
// },

// {
//   type: "paragraph",
//   text: "Vitamin B12 is an essential nutrient that plays a crucial role in maintaining overall health. It helps the body produce healthy red blood cells, supports the nervous system, and assists in DNA production. Adequate Vitamin B12 levels are also important for maintaining brain function, improving concentration, and converting food into energy. Since this vitamin is primarily found in animal-based foods, strict vegetarians and vegans are more likely to develop deficiency unless they consume fortified foods or supplements. Certain digestive disorders, medications, and age-related changes can also reduce Vitamin B12 absorption, making regular health checkups increasingly important.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "Symptoms of Vitamin B12 Deficiency",
// },

// {
//   type: "paragraph",
//   text: "The symptoms of Vitamin B12 deficiency can vary depending on its severity and duration. Initially, many people experience mild fatigue or weakness, but prolonged deficiency may affect the nervous system and lead to more serious health problems. Because these symptoms are often mistaken for stress or aging, laboratory testing is the most reliable way to confirm the diagnosis.",
// },

// {
//   type: "list",
//   items: [
//     "Persistent tiredness and fatigue",
//     "Weakness or reduced stamina",
//     "Pale or yellowish skin",
//     "Shortness of breath",
//     "Dizziness",
//     "Numbness or tingling in hands and feet",
//     "Difficulty walking or poor balance",
//     "Memory problems",
//     "Difficulty concentrating",
//     "Mood changes, anxiety, or depression",
//     "Frequent headaches",
//     "Glossitis (swollen, sore tongue)",
//   ],
// },

// {
//   type: "tip",
//   title: "Health Tip",
//   text: "Persistent fatigue and tingling sensations in your hands or feet should never be ignored. A simple Vitamin B12 blood test can help identify deficiency before permanent nerve damage develops.",
// },
// {
//   type: "heading",
//   level: 2,
//   text: "Common Causes of Vitamin B12 Deficiency",
// },

// {
//   type: "paragraph",
//   text: "Vitamin B12 deficiency develops when the body does not receive enough Vitamin B12 through diet or cannot absorb it efficiently from the digestive tract. While inadequate dietary intake is a common reason, many medical conditions and medications can also interfere with Vitamin B12 absorption. Identifying the underlying cause is important because treatment varies depending on the reason behind the deficiency.",
// },

// {
//   type: "list",
//   items: [
//     "Strict vegetarian or vegan diet",
//     "Poor dietary intake of animal-based foods",
//     "Pernicious anemia",
//     "Long-term use of acid-reducing medications",
//     "Metformin use in people with diabetes",
//     "Crohn's disease",
//     "Celiac disease",
//     "Previous stomach or intestinal surgery",
//     "Digestive disorders affecting nutrient absorption",
//     "Increasing age leading to reduced Vitamin B12 absorption",
//   ],
// },

// {
//   type: "image",
//   src: "/blogs/vitamin-b12/image-2.webp",
//   alt: "Vitamin B12 Blood Test",
//   caption: "A Vitamin B12 blood test is the most reliable way to detect deficiency before serious complications occur.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "Who is at Higher Risk?",
// },

// {
//   type: "paragraph",
//   text: "Although Vitamin B12 deficiency can affect anyone, certain groups have a significantly higher risk. Older adults often absorb less Vitamin B12 because stomach acid production naturally decreases with age. People following vegetarian or vegan diets may not consume enough Vitamin B12 since it is primarily found in animal-derived foods. Individuals with digestive disorders, autoimmune diseases, or those taking medications that reduce stomach acid are also more likely to develop deficiency. Pregnant women, breastfeeding mothers, and patients recovering from stomach surgery should discuss Vitamin B12 monitoring with their healthcare provider.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "How is Vitamin B12 Deficiency Diagnosed?",
// },

// {
//   type: "paragraph",
//   text: "Vitamin B12 deficiency is diagnosed through laboratory investigations combined with a medical evaluation. The primary test is a Vitamin B12 blood test, which measures the amount of Vitamin B12 circulating in the bloodstream. Depending on the symptoms and initial results, healthcare providers may recommend additional tests such as a Complete Blood Count (CBC), Folate Test, Methylmalonic Acid (MMA), or Homocysteine Test. These investigations help determine the severity of the deficiency and identify whether anemia or nerve involvement is present.",
// },

// {
//   type: "paragraph",
//   text: "Your Vitamin D report should always be interpreted by a healthcare professional. Factors such as age, medical conditions, and symptoms may influence the clinical significance of your results.",
// },
// {
//   type: "list",
//   items: [
//     "Vitamin B12 Blood Test",
//     "Complete Blood Count (CBC)",
//     "Folate Level Test",
//     "Methylmalonic Acid (MMA) Test",
//     "Homocysteine Test",
//     "Peripheral Blood Smear (if recommended)",
//   ],
// },

// {
//   type: "warning",
//   title: "Important",
//   text: "Do not start Vitamin B12 supplements without proper evaluation if you have persistent fatigue, numbness, or anemia. Self-treatment may temporarily improve blood test results while delaying the diagnosis of an underlying medical condition requiring specific treatment.",
// },
// {
//   type: "heading",
//   level: 2,
//   text: "Best Food Sources of Vitamin B12",
// },

// {
//   type: "paragraph",
//   text: "A balanced diet is one of the best ways to maintain healthy Vitamin B12 levels. Since Vitamin B12 is naturally found in animal-based foods, individuals who regularly consume these foods are less likely to develop deficiency. Vegetarians and vegans should consider fortified foods or supplements after consulting a healthcare professional. Maintaining a nutritious diet alongside routine health checkups can significantly reduce the risk of deficiency.",
// },

// {
//   type: "list",
//   items: [
//     "Fish such as salmon, tuna, and sardines",
//     "Chicken and lean meat",
//     "Liver and organ meats",
//     "Eggs",
//     "Milk and dairy products",
//     "Cheese",
//     "Yogurt",
//     "Fortified breakfast cereals",
//     "Fortified plant-based milk",
//     "Nutritional yeast fortified with Vitamin B12",
//   ],
// },

// {
//   type: "image",
//   src: "/blogs/vitamin-b12/image-3.webp",
//   alt: "Vitamin B12 Rich Foods",
//   caption: "Including Vitamin B12-rich foods in your daily diet helps support healthy nerves, red blood cells, and energy production.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "Treatment Options",
// },

// {
//   type: "paragraph",
//   text: "Treatment for Vitamin B12 deficiency depends on the underlying cause and the severity of the deficiency. Mild cases caused by poor dietary intake can often be managed with Vitamin B12-rich foods and oral supplements. Moderate or severe deficiency, especially when neurological symptoms are present, may require Vitamin B12 injections followed by maintenance therapy. Individuals with absorption disorders may need lifelong supplementation. Regular blood tests are important to monitor treatment progress and ensure Vitamin B12 levels return to the normal range.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "Possible Complications if Left Untreated",
// },

// {
//   type: "paragraph",
//   text: "Ignoring Vitamin B12 deficiency for a prolonged period can result in serious health complications. While anemia often improves after treatment, long-standing nerve damage may become difficult to reverse. This is why early diagnosis and timely medical intervention are extremely important.",
// },

// {
//   type: "list",
//   items: [
//     "Megaloblastic anemia",
//     "Permanent nerve damage",
//     "Memory impairment",
//     "Difficulty maintaining balance",
//     "Reduced concentration",
//     "Mood disorders",
//     "Muscle weakness",
//     "Increased risk of falls in older adults",
//   ],
// },

// {
//   type: "success",
//   title: "Good News",
//   text: "Most people recover completely when Vitamin B12 deficiency is diagnosed early and treated appropriately. Routine blood testing allows healthcare providers to monitor recovery and adjust treatment whenever necessary.",
// },

// {
//   type: "heading",
//   level: 2,
//   text: "How to Prevent Vitamin B12 Deficiency",
// },

// {
//   type: "paragraph",
//   text: "Preventing Vitamin B12 deficiency is often easier than treating its long-term complications. Eating a balanced diet, understanding personal risk factors, and scheduling regular preventive health checkups can help maintain healthy Vitamin B12 levels throughout life.",
// },

// {
//   type: "list",
//   items: [
//     "Eat Vitamin B12-rich foods regularly",
//     "Choose fortified foods if you follow a vegetarian or vegan diet",
//     "Discuss supplements with your healthcare provider when needed",
//     "Manage digestive disorders appropriately",
//     "Avoid self-medicating with unnecessary supplements",
//     "Schedule routine preventive health screenings",
//     "Monitor Vitamin B12 levels if you take Metformin or acid-reducing medicines long-term",
//   ],
// },
// {
//   type: "heading",
//   level: 2,
//   text: "Conclusion",
// },

// {
//   type: "paragraph",
//   text: "Vitamin B12 deficiency is a common but often overlooked health condition that can significantly affect your quality of life if left untreated. Because the symptoms usually develop gradually, many individuals attribute fatigue, weakness, memory problems, or tingling sensations to stress or aging rather than an underlying nutritional deficiency. Fortunately, Vitamin B12 deficiency can be diagnosed accurately through simple laboratory blood tests and treated effectively when identified early. Maintaining a balanced diet, understanding your personal risk factors, and undergoing regular preventive health screenings are essential steps toward protecting your long-term health. If you experience persistent fatigue, numbness, difficulty concentrating, or symptoms of anemia, consult a healthcare professional and consider getting your Vitamin B12 levels tested. Early diagnosis and timely treatment can help restore energy, improve nerve function, and prevent long-term complications.",
// },

// {
//   type: "success",
//   title: "Key Takeaway",
//   text: "Vitamin B12 deficiency is highly treatable when detected early. Routine blood tests, a balanced diet, appropriate supplementation when required, and regular preventive health checkups are the most effective ways to maintain healthy Vitamin B12 levels and support lifelong brain, nerve, and blood health.",
// },
//   ],

//   faq: [
//     {
//       question: "What are the early signs of Vitamin B12 deficiency?",
//       answer:
//         "Early symptoms commonly include fatigue, weakness, dizziness, pale skin, poor concentration, numbness or tingling in the hands and feet, and reduced stamina. Since these symptoms are not specific, a Vitamin B12 blood test is recommended for accurate diagnosis.",
//     },

//     {
//       question: "How is Vitamin B12 deficiency diagnosed?",
//       answer:
//         "Vitamin B12 deficiency is primarily diagnosed using a Vitamin B12 blood test. Depending on your symptoms, your healthcare provider may also recommend tests such as a Complete Blood Count (CBC), Folate Test, Methylmalonic Acid (MMA), or Homocysteine Test.",
//     },

//     {
//       question: "Who is most likely to develop Vitamin B12 deficiency?",
//       answer:
//         "Older adults, vegetarians, vegans, people with digestive disorders, individuals taking Metformin or acid-reducing medications, and patients who have undergone stomach or intestinal surgery are at increased risk of Vitamin B12 deficiency.",
//     },

//     {
//       question: "Can Vitamin B12 deficiency be cured?",
//       answer:
//         "Yes. Most people recover completely when the deficiency is diagnosed early and treated appropriately with dietary improvements, Vitamin B12 supplements, or injections, depending on the underlying cause.",
//     },

//     {
//       question: "Which foods are rich in Vitamin B12?",
//       answer:
//         "Excellent dietary sources include fish, meat, eggs, milk, cheese, yogurt, fortified cereals, fortified plant-based milk, and other fortified food products.",
//     },

//     {
//       question: "How often should I check my Vitamin B12 levels?",
//       answer:
//         "Individuals with risk factors such as vegetarian diets, digestive disorders, diabetes treated with Metformin, or previous Vitamin B12 deficiency should discuss regular monitoring with their healthcare provider. Routine preventive health checkups can help detect deficiency before complications develop.",
//     },
//   ],
// },
];