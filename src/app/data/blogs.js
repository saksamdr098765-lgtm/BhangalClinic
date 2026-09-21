
import SITE_CONFIG from "../SITE_CONFIG";
import { getTestPrice } from "./tests";

export const blogs = [

  {
  id: 1,

  slug: "list-of-blood-tests",

  title: "Complete List of Blood Tests and What They Mean (Full Panel Guide)",

  excerpt:
    "A complete guide to blood test names, the 5 main blood tests, 7 basic blood tests, and the 14-test full panel — what each one checks and how to read your report.",

  category: "Health Tips",

   author: {
    name: "Bhangal Clinical Laboratories & ECG Center",
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
  title: "Complete List of Blood Tests and What They Mean",
  // 49 chars — same phrase as title, just drops "(Full Panel Guide)"

  description:
    "A complete guide to blood test names, the 5 main blood tests, 7 basic blood tests, and the 14-test full panel — what each checks & how to read your report.",
  // 159 chars — same as your excerpt, trimmed to fit

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
        ["Thyroid Profile (T3, T4,TSH)", "Thyroid function"],
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
    ["Weight Gain", " T3, T4,TSH", "Hypothyroidism"],
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
        "Thyroid: T3, T4,  TSH",
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
},
{
  id: 2,

  slug: "ecg-test-full-guide",

  title: "ECG Test: Full Form, Procedure, Cost & What It Detects (Complete Guide)",

  excerpt:
    "Everything you need to know about the ECG test — full form, how it works, procedure steps, cost, preparation, and how to read a normal ECG report.",

  category: "Health Tips",

  author: { 
    name: "Bhangal Clinical Laboratories & ECG Center",
    image: "/team/author.jpg",
  },

  publishedAt: "August 18, 2026",

  readingTime: "9 min read",

  coverImage: "/blogs/ecg-test-full-guide/cover.webp",

  featured: false,

  relatedPackages: [],

  relatedTests: [
    "lipid-profile",
    "total-cholesterol",
    "triglycerides-test",
    "hdl-cholesterol",
    "ldl-cholesterol",
    "vldl-cholesterol",
    "serum-potassium",
    "cpk-mb-test",
    "troponin-t-test",
  ],

seo: {
  title: "ECG Test: Full Form, Procedure, Cost & What It Detects",
  // 56 chars — same phrase as title, just drops "(Complete Guide)"

  description:
    "Everything about the ECG test — full form, how it works, procedure, cost, preparation, and how to read a normal report. Book ECG in Garhshankar.",
  // 147 chars — same as your excerpt, trimmed + location added

    keywords: [
      "ecg",
      "ecg full form",
      "what is ecg",
      "ecg test",
      "ecg meaning",
      "ecg machine",
      "ecg test cost",
      "normal ecg report",
      "how does an ecg work",
      "ecg test near me",
      "ecg center garhshankar",
      "Bhangal Clinical Laboratories",
    ],
  },

  quickInfo: [
    {
      label: "You Will Learn",
      value: "Complete Guide to ECG Test",
      icon: "activity",
    },
    {
      label: "Reading Time",
      value: "9 Minutes",
      icon: "clock",
    },
    {
      label: "Suitable For",
      value: "Adults & Senior Citizens",
      icon: "users",
    },
    {
      label: "Symptoms",
      value: "Chest Pain, Palpitations, Breathlessness",
      icon: "heart",
    },
    {
      label: "Recommended Test",
      value: "ECG (Electrocardiogram)",
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
      value: "₹199",
      icon: "price",
    },
    {
      label: "Home Collection",
      value: "Not Available",
      icon: "home",
    },
  ],

  tags: [
    "ECG",
    "Heart Health",
    "Diagnostic Test",
    "Cardiac Screening",
    "Preventive Healthcare",
    "ECG Report",
  ],

  content: [
    {
      type: "paragraph",
      text: "At Bhangal Clinical Laboratories & ECG Center in Garhshankar, ECG is one of the most frequently requested tests at our centre — patients walk in with everything from doctor referrals to simple worry after about of chest tightness. Yet many aren't sure what the test actually measures or why their doctor ordered it. This guide explains what an ECG is, how the procedure works, what it costs, how to prepare, and how to make sense of your report once it's in hand.",
    },

    {
      type: "image",
      src: "/blogs/ecg-test-full-guide/ecg-machine.webp",
      alt: "ECG machine recording heart activity",
      caption: "An ECG records the heart's electrical activity in real time.",
    },

    {
      type: "heading",
      level: 2,
      text: "What Is an ECG? (Full Form & Meaning)",
    },

    {
      type: "paragraph",
      text: "ECG stands for Electrocardiogram. It's a simple, painless test that records the electrical signals produced by your heart with each heartbeat. These signals are picked up through small electrodes placed on your chest, arms, and legs, and displayed as a wave pattern that shows how well your heart is beating and whether the rhythm is regular.",
    },

    {
      type: "tip",
      title: "Good to Know",
      text: "ECG and EKG refer to the same test — EKG comes from the German spelling 'Elektrokardiogramm.' Both terms are used interchangeably worldwide.",
    },


    {
      type: "heading",
      level: 2,
      text: "How Does an ECG Work?",
    },

    {
      type: "paragraph",
      text: "Your heart generates tiny electrical impulses every time it beats, which is what makes it contract and pump blood. An ECG machine uses electrodes attached to your skin to detect these impulses and translates them into a wave pattern on paper or a screen. A standard test uses 12 leads (recording points) to capture the heart's activity from different angles, giving doctors a complete picture of heart rhythm and function.",
    },

    {
      type: "heading",
      level: 2,
      text: "ECG Test Procedure: Step by Step",
    },

    {
      type: "paragraph",
      text: "The test itself is quick and doesn't require any special equipment on your part. Here's what to expect during an ECG at our centre.",
    },

    {
      type: "table",
      title: "ECG Test Procedure",
      headers: ["Step", "What Happens"],
      rows: [
        ["1. Preparation", "You lie down comfortably; areas of skin are cleaned for better electrode contact"],
        ["2. Electrode Placement", "Small sticky electrodes are attached to chest, arms, and legs"],
        ["3. Recording", "The machine records your heart's electrical activity for a few seconds"],
        ["4. Completion", "Electrodes are removed; the whole process takes 5-10 minutes"],
        ["5. Report", "A wave pattern is generated and reviewed for rate, rhythm, and abnormalities"],
      ],
    },

    {
      type: "tip",
      title: "From Our Front Desk",
      text: "One of the most common questions our staff hears before the test is 'will it hurt?' It's worth repeating clearly: an ECG involves no needles and no discomfort — just electrode pads placed on the skin.",
    },

    {
      type: "heading",
      level: 2,
      text: "Do You Need to Prepare or Fast for an ECG?",
    },

    {
      type: "paragraph",
      text: "No fasting is required before an ECG. It's best to avoid applying oils or lotions to your chest on the day of the test, as this can affect electrode contact. Wearing a top that's easy to remove or lift also makes the process quicker — something our technicians often mention to patients booking same-day walk-in appointments.",
    },

    {
      type: "heading",
      level: 2,
      text: "Why Is an ECG Done? Who Needs One?",
    },

    {
      type: "paragraph",
      text: "Doctors commonly recommend an ECG when a patient reports symptoms that could point to a heart problem, or as part of routine screening for at-risk individuals. In our experience, a large share of ECG requests at our Garhshankar centre come from two groups: patients referred after a check-up flagged high blood pressure or cholesterol, and older adults getting a routine pre-surgery clearance.",
    },

    {
      type: "table",
      title: "Symptoms and Reasons for an ECG",
      headers: ["Symptom / Reason", "Why ECG Is Recommended"],
      rows: [
        ["Chest Pain", "Rule out heart attack or reduced blood flow"],
        ["Palpitations", "Check for irregular heart rhythm (arrhythmia)"],
        ["Breathlessness", "Assess heart function alongside lung causes"],
        ["Fainting / Dizziness", "Detect abnormal heart rhythms causing low blood flow"],
        ["Pre-Surgery Checkup", "Confirm heart is stable before anesthesia"],
        ["Routine Screening", "Baseline heart health check for adults 40+"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "Understanding Your ECG Report",
    },

    {
      type: "paragraph",
      text: "An ECG report shows a repeating wave pattern for each heartbeat, made up of sections labeled P wave, QRS complex, and T wave. Each part reflects a different phase of your heart's electrical cycle. A normal ECG shows a regular, evenly spaced pattern; irregularities in spacing, height, or shape can point to issues like arrhythmia, heart block, or reduced blood flow — though only a doctor can properly interpret these findings alongside your symptoms and history. Our lab shares digital reports the same day so your doctor can review them without delay.",
    },

    {
      type: "table",
      title: "Sample ECG Report Reading",
      headers: ["Parameter", "Normal Range", "What It Indicates"],
      rows: [
        ["Heart Rate", "60-100 bpm", "Speed of heartbeat"],
        ["P Wave", "Present, upright", "Normal electrical signal from upper chambers"],
        ["QRS Complex", "0.06-0.10 sec", "Normal signal through lower chambers"],
        ["Rhythm", "Regular", "Consistent, evenly spaced heartbeats"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "How Much Does an ECG Test Cost?",
    },

    {
      type: "paragraph",
      text: "ECG is one of the more affordable diagnostic tests, and pricing is usually straightforward since it doesn't involve extensive lab processing. Check our current price list for the exact rate and any bundled packages that include ECG alongside other heart-health screenings.",
    },

    {
      type: "interlinking",
      title: "Check Prices & Service Details",
      description: "Ready to check cost or schedule your ECG test? Move down the funnel to view exact prices and service details.",
      items: [
        {
          title: "ECG Test Price",
          description: "View the exact ECG test rate and any bundled heart health packages.",
          href: "/prices/ecg-test-price-garhshankar",
        },
        {
          title: "ECG Service Overview",
          description: "Learn what is included in our ECG service and testing process.",
          href: "/services/ecg-test",
        },
      ],
    },

    {
      type: "success",
      title: "Key Takeaway",
      text: "An ECG is a quick, painless, and affordable way to check your heart's electrical activity. Whether you have symptoms like chest pain or palpitations, or simply want a routine heart health check, an ECG gives doctors valuable insight in just minutes.",
    },

    {
      type: "heading",
      level: 2,
      text: "Book Your ECG Test",
    },

    {
      type: "paragraph",
      text: "Bhangal Clinical Laboratories & ECG Center is located opposite Civil Hospital on Sri Anandpur Sahib Road, Garhshankar, Hoshiarpur district, Punjab. We're open daily from 7:00 AM to 8:00 PM (8:00 AM to 2:00 PM on Sundays). You can walk in, call ahead, or book a home sample collection.",
    },

    {
      type: "interlinking",
      title: "Areas We Serve",
      description: "We provide home sample collection and diagnostic services across the following locations.",
      items: [
        {
          title: "Garhshankar",
          description: "ECG test and home sample collection.",
          href: "/locations/ecg-test-in-garhshankar",
        },
        {
          title: "Hoshiarpur",
          description: "Diagnostic laboratory services.",
        },
        {
          title: "Nawanshahr",
          description: "Health checkups and pathology tests.",
        },
      ],
    },

    {
      type: "references",
      items: [
        {
          title: "Electrocardiogram (ECG or EKG)",
          publisher: "MedlinePlus",
          url: "https://medlineplus.gov/ency/article/003868.htm",
        },
        {
          title: "Understanding Your ECG Results",
          publisher: "Mayo Clinic",
          url: "https://www.mayoclinic.org/",
        },
      ],
    },
  ],

  faq: [
    {
      question: "How is an ECG done?",
      answer:
        "An ECG is done by attaching small electrodes to your chest, arms, and legs while you lie down comfortably. The machine picks up your heart's electrical signals and records them as a wave pattern, usually within a few seconds. The entire process, including setup, takes about 5-10 minutes.",
    },
    {
      question: "Can ECG show heart blockage?",
      answer:
        "An ECG can show signs suggestive of a blockage, such as changes in the ST segment or T wave, especially during or after a heart attack. However, it doesn't directly visualize blocked arteries — for a clearer picture, doctors often recommend additional tests like a TMT or angiography.",
    },
    {
      question: "What do V1 to V6 mean on an ECG?",
      answer:
        "V1 to V6 are the six chest (precordial) leads placed at specific points across the chest during a 12-lead ECG. Each one views the heart's electrical activity from a different angle, helping doctors pinpoint which part of the heart may be affected by an abnormality.",
    },
    {
      question: "What is the best time to take an ECG?",
      answer:
        "There's no strict best time — an ECG can be taken any time of day since fasting isn't required. If you're experiencing symptoms like chest pain or palpitations, it's best to get the test done as soon as possible rather than waiting for a specific time.",
    },
    {
      question: "How is an ECG performed on a woman?",
      answer:
        "The ECG procedure is the same for women and men — electrodes are placed on the chest, arms, and legs. For women, electrode placement on the chest is adjusted slightly to ensure accurate contact, and a private, comfortable setting is provided during the test.",
    },
    {
      question: "What information does an ECG give about a person?",
      answer:
        "An ECG shows heart rate, rhythm regularity, and the timing of electrical signals through different parts of the heart. It can help identify irregular heartbeats, signs of a past or current heart attack, and other structural or electrical issues affecting the heart.",
    },
    {
      question: "How do I check my ECG report and what does it cost?",
      answer:
        "Your ECG report is usually ready the same day and shows your heart rate, rhythm, and wave pattern details reviewed by a doctor or technician. ECG is one of the more affordable diagnostic tests — check our current price list for the exact rate.",
    },
    {
      question: "Which patients need an ECG?",
      answer:
        "Patients with symptoms like chest pain, palpitations, breathlessness, or fainting are commonly advised to get an ECG. It's also recommended before surgery, for routine heart screening in adults over 40, and for those with risk factors like diabetes, high blood pressure, or a family history of heart disease.",
    },
    {
      question: "How do I prepare for an ECG test?",
      answer:
        "No special preparation is needed — fasting isn't required. Avoid applying oils or lotions to your chest on the day of the test, and wear clothing that's easy to remove or lift so electrodes can be placed easily.",
    },
    {
      question: "Can I book an ECG test at home?",
      answer:
        "Yes, ECG tests can be booked with home sample collection for your convenience. A trained technician visits your location to perform the test, and reports are shared digitally, just like our other diagnostic services.",
    },
    {
      question: "Why is ECG called a 12-lead test?",
      answer:
        "A standard ECG uses 12 different leads (recording angles) placed on the limbs and chest to capture the heart's electrical activity from multiple directions. This gives a more complete view of heart function than a single-lead reading would.",
    },
    {
      question: "What's the difference between ECG and EKG?",
      answer:
        "ECG and EKG refer to the exact same test — recording the heart's electrical activity. EKG comes from the German spelling 'Elektrokardiogramm,' while ECG is the English abbreviation. Both terms are used interchangeably by doctors and labs.",
    },
  ],

  cta: {
    title: "Book Your ECG Test Today",

    description:
      "Looking for reliable ECG testing in Garhshankar? Book your ECG test at Bhangal Clinical Laboratories & ECG Center with convenient home sample collection, affordable pricing, and fast digital reports.",

    serviceName: "ECG Test",

    serviceLink: "/services/ecg-test",

    bookingLink:
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20an%20ECG%20Test.%20Please%20share%20the%20available%20slots.`,

    whatsappLink:
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20ECG%20Test.`,

    features: [
      "Quick & Painless Test",
      "Home Sample Collection",
      "Fast Digital Reports",
      "Affordable Pricing",
      "Experienced Technicians",
    ],
  },
},
{
  id: 3,

  slug: "cbc-test-full-guide",

  title: "CBC Test: Full Form, Normal Range, Price & What It Detects (Complete Guide)",

  excerpt:
    "Everything about the CBC test — full form, normal range by age and gender, price, procedure, fasting rules, and what abnormal results can mean.",

  category: "Health Tips",

  author: {
    name: "Bhangal Clinical Laboratories & ECG Center",
    image: "/team/author.jpg",
  },

  publishedAt: "August 30, 2026",

  readingTime: "9 min read",

  coverImage: "/blogs/cbc-test-full-guide/cover.webp",

  featured: false,

  relatedPackages: [
  "bcl-med-health-pro-package",
  "bhangal-dengue-profile",
  "bhangal-fever-mini-profile",
  "bhangal-fever-maxi-profile",
  "bhangal-basic-profile",
  "bhangal-basic-profile-plus",
],

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

seo: {
  title: "CBC Test: Full Form, Normal Range, Price & Detects",
  // 52 chars — same phrase as title, just drops "(Complete Guide)"

  description:
    "Everything about the CBC test — full form, normal range by age and gender, price, procedure, fasting rules, and what abnormal results mean.",
  // 142 chars — matches your excerpt almost exactly

    keywords: [
      "cbc test",
      "cbc test full form",
      "cbc test price",
      "cbc test near me",
      "cbc test normal range",
      "cbc blood test",
      "complete blood count test",
      "cbc test price in garhshankar",
      "cbc test results chart",
      "cbc test in pregnancy",
      "cbc test fasting",
      "cbc differential abnormal",
      "Bhangal Clinical Laboratories",
    ],
  },

  quickInfo: [
    { label: "You Will Learn", value: "Complete Guide to CBC Test", icon: "activity" },
    { label: "Reading Time", value: "9 Minutes", icon: "clock" },
    { label: "Suitable For", value: "Adults & Children", icon: "users" },
    { label: "Symptoms", value: "Fatigue, Fever, Weakness, Infection", icon: "heart" },
    { label: "Recommended Test", value: "CBC Blood Test", icon: "test" },
    { label: "Fasting", value: "Not Required", icon: "file" },
    { label: "Report Time", value: "Same Day", icon: "clock" },
    { label: "Price", value: getTestPrice("cbc-test"), icon: "price" },
    { label: "Home Collection", value: "Available", icon: "home" },
  ],

  tags: [
    "CBC",
    "Blood Test",
    "Full Body Checkup",
    "Health Screening",
    "Preventive Healthcare",
    "Blood Test Report",
  ],

  content: [
    {
      type: "paragraph",
      text: "CBC is one of the most commonly ordered blood tests at our Garhshankar centre — patients come in with a doctor's referral, or simply because they've been feeling unusually tired or feverish. Despite how often it's ordered, many people aren't sure what CBC actually stands for or what the individual numbers on the report mean. This guide covers the full form, what each part of the test checks, normal ranges, pricing, and how to read your report.",
    },

    {
      type: "image",
      src: "/blogs/cbc-test-full-guide/cbc-blood-sample.webp",
      alt: "Blood sample tube for CBC test",
      caption: "A single blood draw is enough to run a complete CBC panel.",
    },

    {
      type: "heading",
      level: 2,
      text: "What Is a CBC Test? (Full Form & Meaning)",
    },

    {
      type: "paragraph",
      text: "CBC stands for Complete Blood Count. It's a routine blood test that measures the different components of your blood — red blood cells, white blood cells, platelets, and hemoglobin — to give doctors a broad snapshot of your overall health, including signs of anemia, infection, and clotting problems.",
    },

    {
      type: "tip",
      title: "Good to Know",
      text: "CBC is sometimes called CBP (Complete Blood Picture) — both terms refer to the same test, just different naming conventions used by different labs.",
    },

  
    {
      type: "heading",
      level: 2,
      text: "What Does a CBC Test Check For?",
    },

    {
      type: "paragraph",
      text: "A CBC panel reports on several components of your blood, each pointing to a different aspect of health.",
    },

    {
      type: "table",
      title: "CBC Test Components",
      headers: ["Component", "What It Checks"],
      rows: [
        ["RBC (Red Blood Cells)", "Oxygen-carrying capacity, anemia screening"],
        ["Hemoglobin", "Amount of oxygen-carrying protein in blood"],
        ["Hematocrit", "Proportion of blood volume made up of red cells"],
        ["WBC (White Blood Cells)", "Infection-fighting cells, immune response"],
        ["Platelets", "Blood clotting ability"],
        ["MCV, MCH, MCHC", "Red blood cell size and hemoglobin content indices"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "CBC Test Normal Range (By Age & Gender)",
    },

    {
      type: "paragraph",
      text: "Normal ranges vary slightly by age, gender, and the lab's equipment, so always compare your results against the reference range printed on your own report.",
    },

    {
      type: "table",
      title: "CBC Normal Range Chart",
      headers: ["Parameter", "Adult Male", "Adult Female", "Children"],
      rows: [
        ["Hemoglobin", "13.5-17.5 g/dL", "12.0-15.5 g/dL", "11.0-14.0 g/dL"],
        ["RBC Count", "4.5-5.9 million/µL", "4.0-5.2 million/µL", "4.0-5.5 million/µL"],
        ["WBC Count", "4,000-11,000/µL", "4,000-11,000/µL", "5,000-13,000/µL"],
        ["Platelet Count", "150,000-450,000/µL", "150,000-450,000/µL", "150,000-450,000/µL"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "Is Fasting Required for a CBC Test?",
    },

    {
      type: "paragraph",
      text: "No, fasting is not required for a CBC test. You can eat and drink normally before your blood draw, unless your doctor has also ordered another test (like fasting sugar or lipid profile) alongside it, in which case fasting rules for that test would apply.",
    },

    {
      type: "heading",
      level: 2,
      text: "Why Would a Doctor Order a CBC Test?",
    },

    {
      type: "paragraph",
      text: "Doctors order a CBC for routine checkups as well as to investigate specific symptoms. It's one of the first tests recommended when something feels off but the cause isn't clear yet.",
    },

    {
      type: "table",
      title: "Symptoms and What CBC May Reveal",
      headers: ["Symptom", "What CBC May Show"],
      rows: [
        ["Fatigue & Weakness", "Low hemoglobin, anemia"],
        ["Persistent Fever", "Raised WBC count, possible infection"],
        ["Frequent Bruising", "Low platelet count"],
        ["Pale Skin", "Low RBC count, iron deficiency"],
        ["Unexplained Weight Loss", "Abnormal WBC differential, further workup needed"],
        ["Routine Checkup", "Baseline blood health screening"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "Understanding Your CBC Report",
    },

    {
      type: "paragraph",
      text: "Your CBC report lists each component, your result, and the normal reference range, with high or low values flagged for quick reference. A single abnormal value doesn't always indicate disease — it should always be interpreted by a doctor alongside your symptoms and history.",
    },

    {
      type: "table",
      title: "Sample CBC Report Format",
      headers: ["Test Name", "Result", "Normal Range", "Flag"],
      rows: [
        ["Hemoglobin", "11.2 g/dL", "12.0-15.5 g/dL", "Low"],
        ["WBC Count", "12,500/µL", "4,000-11,000/µL", "High"],
        ["Platelet Count", "260,000/µL", "150,000-450,000/µL", "Normal"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "CBC Test During Pregnancy",
    },

    {
      type: "paragraph",
      text: "CBC is a routine part of prenatal checkups, typically repeated across trimesters to monitor for anemia (common in pregnancy), infection, and platelet changes that can affect delivery planning.",
    },

    {
      type: "heading",
      level: 2,
      text: "How Much Does a CBC Test Cost?",
    },

    {
      type: "paragraph",
      text: "CBC is one of the more affordable diagnostic tests available. Check our current price list for the exact rate and any bundled health packages that include CBC.",
    },

    {
      type: "interlinking",
      title: "Check Prices & Service Details",
      description: "Ready to check cost or schedule your CBC test? Move down the funnel to view exact prices and service details.",
      items: [
        {
          title: "CBC Test Price in Garhshankar",
          description: "View the exact CBC test rate and bundled health packages.",
          href: "/prices/cbc-test-price-garhshankar",
        },
        {
          title: "CBC Service Overview",
          description: "Learn what is included in our CBC testing service and process.",
          href: "/tests/cbc-test",
        },
      ],
    },

    {
      type: "success",
      title: "Key Takeaway",
      text: "A CBC test is a quick, affordable, and highly informative screening tool that can flag anemia, infection, and clotting issues early. Regular CBC checks — even without symptoms — help catch problems before they become serious.",
    },

    {
      type: "heading",
      level: 2,
      text: "Book Your CBC Test",
    },

    {
      type: "paragraph",
      text: "Bhangal Clinical Laboratories & ECG Center is located opposite Civil Hospital on Sri Anandpur Sahib Road, Garhshankar, Hoshiarpur district, Punjab. We're open daily from 7:00 AM to 8:00 PM (8:00 AM to 2:00 PM on Sundays). Walk in, call ahead, or book a home sample collection.",
    },

    {
      type: "interlinking",
      title: "Areas We Serve",
      description: "We provide home sample collection and diagnostic services across the following locations.",
      items: [
        {
          title: "Garhshankar",
          description: "CBC test and home sample collection.",
          href: "/locations/cbc-test-in-garhshankar",
        },
        {
          title: "Hoshiarpur",
          description: "Diagnostic laboratory services.",
        },
        {
          title: "Nawanshahr",
          description: "Health checkups and pathology tests.",
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
      ],
    },
  ],

  faq: [
    {
      question: "What does a CBC test check for?",
      answer:
        "A CBC test checks red blood cells, white blood cells, platelets, and hemoglobin levels to assess anemia, infection, inflammation, and clotting ability, giving a broad picture of overall blood health.",
    },
    {
      question: "What if CBC is high or low?",
      answer:
        "A high or low CBC value can point to different issues depending on which component is affected — for example, low hemoglobin suggests anemia, while high WBC often indicates infection. A single abnormal value should always be reviewed by a doctor alongside symptoms and history.",
    },
    {
      question: "What diseases can a CBC detect?",
      answer:
        "CBC can help detect or flag anemia, infections, certain blood cancers, clotting disorders, and inflammatory conditions. It's often the first test used to identify that further investigation is needed, rather than a final diagnosis on its own.",
    },
    {
      question: "Does a CBC check liver and kidney function?",
      answer:
        "No, CBC does not directly check liver or kidney function. Liver health is assessed with a Liver Function Test (LFT) and kidney health with a Kidney Function Test (KFT) — both separate panels from CBC.",
    },
    {
      question: "Is fasting required for a CBC test?",
      answer:
        "No, fasting is not required for a CBC test. You can eat and drink normally before the blood draw unless another fasting test is being done at the same time.",
    },
    {
      question: "Can a CBC test detect infection?",
      answer:
        "Yes, a raised white blood cell (WBC) count on a CBC is one of the most common indicators of an active infection or inflammation in the body.",
    },
    {
      question: "What is the CBC test full form?",
      answer:
        "CBC stands for Complete Blood Count, a routine blood test measuring red cells, white cells, platelets, and hemoglobin.",
    },
    {
      question: "How long does it take to get CBC test results?",
      answer:
        "CBC results are typically available the same day, often within a few hours of the blood draw.",
    },
  ],

  cta: {
    title: "Book Your CBC Test Today",

    description:
      "Looking for reliable CBC testing in Garhshankar? Book your CBC test with Bhangal Clinical Laboratories & ECG Center with convenient home sample collection, affordable pricing, and fast digital reports.",

    serviceName: "CBC Test",

    serviceLink: "/tests/cbc-test",

    bookingLink:
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20CBC%20Test.%20Please%20share%20the%20available%20slots.`,

    whatsappLink:
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20CBC%20Test.`,

    features: [
      "100+ Blood Tests Available",
      "Home Sample Collection",
      "Fast Digital Reports",
      "Affordable Pricing",
      "Experienced Phlebotomists",
    ],
  },
},
{
  id: 4,
 
  slug: "blood-sugar-hba1c-test-full-guide",
 
  title:
    "Blood Sugar & HbA1c Test: Normal Range, Price & What It Detects (Complete Guide)",
 
  excerpt:
    "A complete guide to Blood Sugar and HbA1c testing — normal range by age, fasting rules, price, and what high or low results mean for diabetes risk.",
 
  category: "Health Tips",
 
  author: {
    name: "Bhangal Clinical Laboratories & ECG Center",
    image: "/team/author.jpg",
  },
 
  publishedAt: "September 9, 2026",
 
  readingTime: "11 min read",
 
  coverImage: "/blogs/blood-sugar-hba1c-test-full-guide/cover.webp",
 
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
  "bhangal-ayush-profile-2-1",
  "bhangal-ayush-profile-3-1",
  "bhangal-fever-mini-profile",
  "bhangal-dengue-profile",
  "bhangal-fever-maxi-profile",
  "bcl-med-pro-64-package",
  "bcl-lfs-diamed-scan-package",
  "bcl-med-health-pro-package",
  "bcl-med-pro-65-package",
  "bcl-med-max-panel-package"
],
 
  relatedTests: [
  "cbc-test",
  "platelet-count",
  "absolute-eosinophil-count",
  "esr-test",
  "peripheral-blood-film",
  "bleeding-time-clotting-time",
  "blood-sugar-test",
  "glucose-tolerance-test",
  "glucose-challenge-test"
],
 
  seo: {
    title: "Blood Sugar & HbA1c Test: Normal Range & Price",
    // 47 chars — same phrase as title, trimmed to fit
 
    description:
      "Everything about Blood Sugar and HbA1c tests — normal range by age, fasting rules, price, and what results mean for diabetes risk in Garhshankar.",
    // 153 chars
 
    keywords: [
      "blood sugar test",
      "hba1c test",
      "normal blood sugar range",
      "hba1c normal range",
      "fasting blood sugar test",
      "random blood sugar test",
      "hba1c full form",
      "blood sugar level chart",
      "hba1c normal range chart",
      "diabetes test price",
      "sugar test near me",
      "hba1c 5.7 means",
      "hba1c 6.5 means",
      "blood sugar test price garhshankar",
      "DK Bhangal Lab",
    ],
  },
 
  quickInfo: [
    {
      label: "You Will Learn",
      value: "Blood Sugar & HbA1c Normal Ranges",
      icon: "activity",
    },
    { label: "Reading Time", value: "11 Minutes", icon: "clock" },
    { label: "Suitable For", value: "Adults & Diabetics", icon: "users" },
    {
      label: "Symptoms",
      value: "Frequent Urination, Fatigue, Weight Loss",
      icon: "heart",
    },
    { label: "Recommended Test", value: "Blood Sugar / HbA1c", icon: "test" },
    { label: "Fasting", value: "Required for Fasting Sugar Only", icon: "file" },
    { label: "Report Time", value: "Same Day", icon: "clock" },
    { label: "Price", value: getTestPrice("blood-sugar-test"), icon: "price" },
    { label: "Home Collection", value: "Available", icon: "home" },
  ],
 
  tags: [
    "Blood Sugar",
    "HbA1c",
    "Diabetes",
    "Health Screening",
    "Preventive Healthcare",
    "Blood Test Report",
  ],
 
  content: [
    {
      type: "paragraph",
      text: "Blood Sugar and HbA1c are two of the most frequently booked tests at our Garhshankar centre, especially among patients managing or screening for diabetes. Many people know they need 'a sugar test' but aren't sure whether that means fasting sugar, random sugar, or HbA1c — or how the three differ. This guide breaks down what each test measures, normal ranges by category, fasting rules, pricing, and what your numbers actually mean.",
    },
 
    {
      type: "image",
      src: "/blogs/blood-sugar-hba1c-test-full-guide/blood-sugar-check.webp",
      alt: "Blood sample being prepared for sugar and HbA1c testing",
      caption: "A single visit can cover both a sugar test and HbA1c.",
    },
 
    {
      type: "heading",
      level: 2,
      text: "Blood Sugar vs HbA1c: What's the Difference?",
    },
 
    {
      type: "paragraph",
      text: "A blood sugar test measures your glucose level at one specific moment — right now, after fasting, or after a meal. HbA1c, on the other hand, reflects your average blood sugar over the past 2-3 months by measuring sugar attached to hemoglobin in red blood cells. Doctors often order both together: blood sugar for an immediate snapshot, and HbA1c for the bigger picture of long-term control.",
    },
 
    {
      type: "tip",
      title: "Good to Know",
      text: "HbA1c is sometimes written as A1C or 'glycated hemoglobin' — all three terms refer to the same test.",
    },
 
 
    {
      type: "heading",
      level: 2,
      text: "Types of Blood Sugar Tests",
    },
 
    {
      type: "table",
      title: "Types of Blood Sugar Tests",
      headers: ["Test Name", "When It's Taken", "Fasting Required"],
      rows: [
        ["Fasting Blood Sugar (FBS)", "After 8-12 hours of fasting", "Yes"],
        ["Random Blood Sugar (RBS)", "Any time of day", "No"],
        [
          "Post Prandial Blood Sugar (PP)",
          "2 hours after a meal",
          "No (timed from meal)",
        ],
        ["Glucose Tolerance Test (GTT/GCT)", "Fasting + after glucose drink", "Yes (initial sample)"],
        ["HbA1c", "Any time of day", "No"],
      ],
    },
 
    {
      type: "heading",
      level: 2,
      text: "Normal Blood Sugar Range (By Category)",
    },
 
    {
      type: "paragraph",
      text: "Normal ranges vary depending on whether the sample was taken fasting, randomly, or after a meal. Values above these ranges may point toward prediabetes or diabetes, though a single reading should always be confirmed with your doctor.",
    },
 
    {
      type: "table",
      title: "Blood Sugar Normal Range Chart",
      headers: ["Test Type", "Normal", "Prediabetes", "Diabetes"],
      rows: [
        ["Fasting Blood Sugar", "70-100 mg/dL", "100-125 mg/dL", "126 mg/dL or higher"],
        ["Random Blood Sugar", "Below 140 mg/dL", "140-199 mg/dL", "200 mg/dL or higher"],
        ["Post Prandial (2 hrs)", "Below 140 mg/dL", "140-199 mg/dL", "200 mg/dL or higher"],
      ],
    },
 
    {
      type: "heading",
      level: 2,
      text: "HbA1c Normal Range & What Your Number Means",
    },
 
    {
      type: "paragraph",
      text: "Unlike a same-day sugar test, HbA1c gives a 3-month average, which makes it harder to influence with a single good or bad day before the test — and more useful for tracking long-term diabetes control.",
    },
 
    {
      type: "table",
      title: "HbA1c Normal Range Chart",
      headers: ["HbA1c Level", "Category", "What It Means"],
      rows: [
        ["Below 5.7%", "Normal", "Healthy blood sugar control"],
        ["5.7% - 6.4%", "Prediabetes", "Increased risk of developing diabetes"],
        ["6.5% and above", "Diabetes", "Confirms a diabetes diagnosis (with repeat testing)"],
        ["Above 8%", "Poor Control", "Often flagged as a 'danger zone' needing treatment review"],
      ],
    },
 
    {
      type: "tip",
      title: "From Our Front Desk",
      text: "Patients often ask if fasting is needed for HbA1c — it isn't. You can eat normally before this test, which is one reason doctors prefer it for routine diabetes monitoring.",
    },
 
    {
      type: "heading",
      level: 2,
      text: "Who Should Get a Blood Sugar or HbA1c Test?",
    },
 
    {
      type: "table",
      title: "Symptoms and Recommended Tests",
      headers: ["Symptom", "Recommended Test", "Possible Condition"],
      rows: [
        ["Frequent Urination & Thirst", "Fasting Sugar, HbA1c", "Diabetes"],
        ["Unexplained Weight Loss", "HbA1c, Thyroid Profile", "Diabetes, Hyperthyroidism"],
        ["Fatigue & Blurred Vision", "Random Sugar, HbA1c", "Uncontrolled Blood Sugar"],
        ["Family History of Diabetes", "Fasting Sugar, HbA1c", "Diabetes Screening"],
        ["Pregnancy (24-28 weeks)", "GCT / GTT", "Gestational Diabetes"],
        ["Routine Annual Checkup", "Fasting Sugar, HbA1c", "Preventive Screening"],
      ],
    },
 
    {
      type: "heading",
      level: 2,
      text: "How to Lower High Blood Sugar or HbA1c",
    },
 
    {
      type: "paragraph",
      text: "Lowering elevated blood sugar or HbA1c is a gradual process best guided by a doctor, but common approaches include consistent meal timing, reducing refined carbs and sugary drinks, regular physical activity, adequate sleep, and taking prescribed medication as directed. HbA1c typically takes 2-3 months to reflect any change, since it measures a rolling average rather than a single day's effort.",
    },
 
    {
      type: "heading",
      level: 2,
      text: "Understanding Your Report",
    },
 
    {
      type: "table",
      title: "Sample Blood Sugar & HbA1c Report Format",
      headers: ["Test Name", "Result", "Normal Range", "Flag"],
      rows: [
        ["Fasting Blood Sugar", "112 mg/dL", "70-100 mg/dL", "High"],
        ["HbA1c", "6.1%", "Below 5.7%", "Prediabetes Range"],
      ],
    },
 
    {
      type: "heading",
      level: 2,
      text: "How Much Do These Tests Cost?",
    },
 
    {
      type: "paragraph",
      text: "Blood sugar tests are among the most affordable individual tests we offer, while HbA1c is priced slightly higher due to specialized processing. Check our current price list for exact rates and any bundled diabetic health packages.",
    },
 
    {
  type: "interlinking",
  title: "Check Prices & Service Details",
  description:
    "Ready to book? View exact pricing and service details below.",
  items: [
    {
      title: "Blood Sugar & HbA1c Price in Garhshankar",
      description:
        "View complete pricing for fasting sugar, random sugar, and HbA1c.",
      href: "/prices/blood-sugar-hba1c-test-price-garhshankar",
    },
    {
      title: "Blood Sugar Test",
      description:
        "Learn about blood sugar testing, normal ranges, preparation, and results.",
      href: "/tests/blood-sugar-test",
    },
    {
      title: "Blood Test Service Overview",
      description:
        "Learn what's included in our testing service and home collection process.",
      href: "/services/blood-tests",
    },
  ],
},
 
    {
      type: "success",
      title: "Key Takeaway",
      text: "Blood sugar tells you your glucose level right now; HbA1c tells you your average over the past 3 months. Together, they give the clearest picture of your diabetes risk or control — and regular testing helps catch problems before they progress.",
    },
 
    {
      type: "heading",
      level: 2,
      text: "Book Your Blood Sugar or HbA1c Test",
    },
 
    {
      type: "paragraph",
      text: "Bhangal Clinical Laboratories & ECG Center is located opposite Civil Hospital on Sri Anandpur Sahib Road, Garhshankar, Hoshiarpur district, Punjab. We're open daily from 7:00 AM to 8:00 PM (8:00 AM to 2:00 PM on Sundays). Walk in, call ahead, or book a home sample collection.",
    },
 
    {
      type: "interlinking",
      title: "Areas We Serve",
      description:
        "We provide home sample collection and diagnostic services across the following locations.",
      items: [
        {
          title: "Garhshankar",
          description: "Blood sugar & HbA1c testing with home sample collection.",
          href: "/locations/blood-sugar-hba1c-test-in-garhshankar",
        },
        {
          title: "Hoshiarpur",
          description: "Diagnostic laboratory services.",
        },
        {
          title: "Nawanshahr",
          description: "Health checkups and pathology tests.",
        },
      ],
    },
 
    {
      type: "references",
      items: [
        {
          title: "Diabetes Tests",
          publisher: "MedlinePlus",
          url: "https://medlineplus.gov/diabetestype2.html",
        },
        {
          title: "The A1C Test & Diabetes",
          publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
          url: "https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test",
        },
      ],
    },
  ],
 
  faq: [
    {
      question: "What is the normal test of sugar?",
      answer:
        "A normal fasting blood sugar is 70-100 mg/dL, and normal random blood sugar is below 140 mg/dL. HbA1c is considered normal below 5.7%.",
    },
    {
      question: "What are the 5 tests for diabetes?",
      answer:
        "The commonly used tests for diabetes are Fasting Blood Sugar, Random Blood Sugar, Post Prandial Blood Sugar, HbA1c, and the Glucose Tolerance Test (GTT/GCT).",
    },
    {
      question: "Is 7.8 blood sugar high?",
      answer:
        "A value of 7.8 mmol/L (about 140 mg/dL) falls in the prediabetes to early-diabetes range if taken randomly or post-meal, but interpretation depends on when the sample was taken. Always discuss your reading with a doctor.",
    },
    {
      question: "What are 5 signs your blood sugar is high?",
      answer:
        "Common signs of high blood sugar include frequent urination, excessive thirst, fatigue, blurred vision, and unexplained weight loss. These symptoms warrant a blood sugar or HbA1c test.",
    },
    {
      question: "What is a normal HbA1c level?",
      answer:
        "A normal HbA1c level is below 5.7%. Levels between 5.7% and 6.4% indicate prediabetes, and 6.5% or above indicates diabetes.",
    },
    {
      question: "What is the difference between a sugar test and HbA1c?",
      answer:
        "A sugar test measures your glucose level at one point in time, while HbA1c reflects your average blood sugar over the past 2-3 months, making it more useful for tracking long-term control.",
    },
    {
      question: "What is the danger zone for HbA1c?",
      answer:
        "An HbA1c above 8% is generally considered a danger zone, indicating poor blood sugar control and a higher risk of diabetes complications. This should be reviewed with a doctor promptly.",
    },
    {
      question: "Is the HbA1c test fasting required?",
      answer:
        "No, fasting is not required for an HbA1c test. You can eat and drink normally before the blood draw.",
    },
    {
      question: "How much does a blood sugar test cost?",
      answer:
        "Blood sugar tests at our Garhshankar lab start from ₹99, with HbA1c priced separately due to specialized processing. Check our full price list for exact rates.",
    },
    {
      question: "Can I do a sugar test at home?",
      answer:
        "Yes, we offer home sample collection for blood sugar and HbA1c testing across Garhshankar and nearby villages at no extra charge.",
    },
    {
      question: "Is a 140 sugar level normal?",
      answer:
        "A random or post-meal reading of 140 mg/dL sits right at the upper edge of normal and the start of the prediabetes range. Fasting sugar of 140 mg/dL would be considered high. Context matters, so share the timing with your doctor.",
    },
    {
      question: "What is normal HbA1c by age?",
      answer:
        "HbA1c targets are largely the same for adults regardless of age — below 5.7% is normal — though doctors may set slightly more relaxed targets for elderly patients managing diabetes to avoid low blood sugar episodes.",
    },
    {
      question: "How to reduce HbA1c naturally?",
      answer:
        "Consistent meal timing, reducing refined sugar and carbs, regular exercise, adequate sleep, and stress management can help lower HbA1c over time, alongside any treatment prescribed by your doctor. Changes typically show up after 2-3 months.",
    },
    {
      question: "What is a 3-month sugar test?",
      answer:
        "The '3-month sugar test' commonly refers to HbA1c, which reflects your average blood glucose over the preceding 2-3 months rather than a single day's reading.",
    },
    {
      question: "How often should I get an HbA1c test?",
      answer:
        "Diabetics are typically advised to get HbA1c checked every 3 months, while those with prediabetes or a family history may test every 6-12 months as part of routine screening.",
    },
  ],
 
  cta: {
    title: "Book Your Blood Sugar or HbA1c Test Today",
 
    description:
      "Looking for reliable diabetes screening? Book your Blood Sugar or HbA1c test with home sample collection, affordable pricing, and fast digital reports.",
 
    serviceName: "Blood Sugar & HbA1c Test",
 
    serviceLink: "/services/blood-tests",
 
    bookingLink:
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20Blood%20Sugar%2FHbA1c%20Test.%20Please%20share%20the%20available%20slots.`,
 
    whatsappLink:
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20Blood%20Sugar%2FHbA1c%20Test.`,
 
    features: [
      "Fasting, Random & HbA1c Available",
      "Home Sample Collection",
      "Fast Digital Reports",
      "Affordable Pricing",
      "Experienced Phlebotomists",
    ],
  },
},
{
  id: 5,
  slug: "full-body-checkup-full-guide",
  title: "Full Body Checkup: Tests Included, Price & How Often to Get One (Complete Guide)",
  excerpt:
    "A complete guide to full body checkups — which tests are included, how much they cost, how often you need one, and how to choose between basic and advance packages.",
  category: "Health Tips",
  author: {
    name: "Bhangal Clinical Laboratories & ECG Center",
    image: "/team/author.jpg",
  },
  publishedAt: "September 20, 2026",
  readingTime: "10 min read",
  coverImage: "/blogs/full-body-checkup-full-guide/cover.webp",
  featured: false,

  relatedPackages: [
    "bhangal-advance-full-body-checkup",
    "bhangal-basic-profile",
    "bhangal-basic-profile-plus",
    "bhangal-master-health-screen",
    "bhangal-senior-citizen-profile",
    "bcl-female-4-package",
    "bhangal-diabetic-profile",
  ],
  relatedTests: [
    "cbc-test",
    "blood-sugar-test",
    "lipid-profile",
    "kidney-function-test",
    "liver-function-test",
    "thyroid-profile-test",
    "urine-examination",
  ],

  seo: {
    title: "Full Body Checkup: Tests Included, Price & Guide",
    // 51 chars
    description:
      "Full body checkup guide — which tests are included, price range, fasting rules, and how often to get one. Compare packages in Garhshankar.",
    // 143 chars
    keywords: [
      "full body checkup",
      "full body checkup package",
      "full body checkup price",
      "full body checkup cost",
      "master health checkup",
      "full body test price",
      "full body checkup for men",
      "full body checkup for women",
      "full body checkup includes which tests",
      "Bhangal Clinical Laboratories",
    ],
  },

  quickInfo: [
    { label: "You Will Learn", value: "What's in a Full Body Checkup", icon: "activity" },
    { label: "Reading Time", value: "10 Minutes", icon: "clock" },
    { label: "Suitable For", value: "Adults 18+", icon: "users" },
    { label: "Symptoms", value: "Routine Screening, Fatigue, Lifestyle Risk", icon: "heart" },
    { label: "Recommended Test", value: "Advance Full Body Checkup", icon: "test" },
    { label: "Fasting", value: "10-12 Hours Required", icon: "file" },
    { label: "Report Time", value: "24-48 Hours", icon: "clock" },
    { label: "Price", value: "₹2499", icon: "price" },
    { label: "Home Collection", value: "Available", icon: "home" },
  ],

  tags: [
    "Full Body Checkup",
    "Health Packages",
    "Preventive Healthcare",
    "Blood Test",
    "Master Health Checkup",
  ],

  content: [
    {
      type: "paragraph",
      text: "A full body checkup is one of the most requested packages at our Garhshankar centre — but patients often book it without knowing exactly which tests are inside, whether they need the basic or advance version, or how often they should repeat it. This guide breaks down what's typically included, how the packages differ, pricing, and how often you actually need one.",
    },
   
    {
      type: "heading",
      level: 2,
      text: "What Is a Full Body Checkup?",
    },
    {
      type: "paragraph",
      text: "A full body checkup is a bundled health package that screens multiple organ systems in one visit — usually blood count, diabetes, cholesterol, liver, kidney, thyroid, and sometimes vitamins and urine — rather than booking each test separately. It's designed to flag early, often symptomless, health risks like diabetes, thyroid disorders, or high cholesterol before they become serious.",
    },
    {
      type: "tip",
      title: "Good to Know",
      text: "\"Full body checkup\" and \"master health checkup\" are usually the same type of package — the name just varies by lab. Always check the test list, not just the name, before comparing prices.",
    },
    {
      type: "heading",
      level: 2,
      text: "What Tests Are Typically Included?",
    },
    {
      type: "table",
      title: "Common Full Body Checkup Components",
      headers: ["Category", "Tests Usually Included"],
      rows: [
        ["Blood Health", "CBC (Complete Blood Picture)"],
        ["Diabetes Screening", "Fasting/Random Glucose, HbA1c"],
        ["Heart Health", "Lipid Profile (Cholesterol, Triglycerides)"],
        ["Liver Function", "Liver Function Profile"],
        ["Kidney Function", "Kidney Basic Profile"],
        ["Thyroid Health", "T3, T4, TSH"],
        ["Vitamins & Minerals", "Vitamin D, Vitamin B12, Calcium, Iron Profile"],
        ["Other", "Complete Urine Examination, RA Factor (in advance packages)"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Basic vs Advance Full Body Checkup",
    },
    {
      type: "paragraph",
      text: "Packages generally scale in two ways — how many organ systems they cover, and how detailed each panel is. Our Basic Profile covers the core panel (CBC, sugar, lipid, liver, kidney, thyroid, calcium, urine), while the Advance Full Body Checkup adds Vitamin D, Vitamin B12, iron studies, and RA Factor for joint health.",
    },
    {
      type: "table",
      title: "Basic vs Advance Comparison",
      headers: ["Feature", "Bhangal Basic Profile", "Bhangal Advance Full Body Checkup"],
      rows: [
        ["Price", "₹1299", "₹2499"],
        ["Tests Included", "45", "70"],
        ["CBC", "✅", "✅"],
        ["Blood Sugar", "✅", "✅"],
        ["Lipid Profile", "✅", "✅"],
        ["LFT & Kidney Profile", "✅", "✅"],
        ["Thyroid Profile", "✅", "✅"],
        ["HbA1c", "❌", "✅"],
        ["Vitamin D & B12", "❌", "✅"],
        ["Iron Profile", "❌", "✅"],
        ["RA Factor", "❌", "✅"],
        ["Best For", "First-time / budget checkup", "Annual comprehensive screening"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Who Should Get a Full Body Checkup, and How Often?",
    },
    {
      type: "table",
      title: "Recommended Frequency by Age & Risk",
      headers: ["Group", "Recommended Frequency"],
      rows: [
        ["Adults 18-30, no risk factors", "Every 2 years"],
        ["Adults 30-50", "Once a year"],
        ["Adults 50+ or senior citizens", "Once a year, or every 6 months if managing a condition"],
        ["Diabetic / hypertensive patients", "Every 3-6 months for relevant panels"],
        ["Pregnant women", "As advised by gynecologist"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Full Body Checkup for Men vs Women",
    },
    {
      type: "paragraph",
      text: "The core panel (CBC, sugar, lipid, liver, kidney, thyroid) is the same for both. Our BCL 4.0 Female Package adds hormone testing (Testosterone), RA Factor, and a breast cancer marker (CA 15.3) alongside the core panel — built specifically for women's preventive screening. Ask our team which package fits your profile.",
    },
    {
      type: "heading",
      level: 2,
      text: "Do You Need to Fast Before a Full Body Checkup?",
    },
    {
      type: "paragraph",
      text: "Yes — a fasting period of 10-12 hours is recommended before any full body checkup, since these packages include fasting glucose and lipid profile. Drink plain water during the fasting window unless advised otherwise. One blood draw after fasting covers the entire panel.",
    },
    {
      type: "heading",
      level: 2,
      text: "How Much Does a Full Body Checkup Cost?",
    },
    {
      type: "paragraph",
      text: "Pricing depends on how many tests are bundled. Our packages range from ₹800 for a basic 5-test panel up to ₹3500 for our 79-test Master Health Screen. Our Advance Full Body Checkup, covering 70 tests, is priced at ₹2499. Check our full price comparison to find the right fit for your budget and screening needs.",
    },
    {
      type: "interlinking",
      title: "Check Prices & Packages",
      description: "Ready to compare packages or book? View exact pricing and package details below.",
      items: [
        {
          title: "Full Body Checkup Price in Garhshankar",
          description: "Compare full body checkup packages and pricing.",
          href: "/prices/full-body-checkup-price-garhshankar",
        },
        {
          title: "Bhangal Advance Full Body Checkup",
          description: "70 tests covering diabetes, blood, liver, kidney, thyroid & more.",
          href: "/packages/bhangal-advance-full-body-checkup",
        },
      ],
    },
    {
      type: "success",
      title: "Key Takeaway",
      text: "A full body checkup is the most efficient way to screen major organ systems in one visit. Match the package to your age and risk profile rather than picking the cheapest or largest option by default, and repeat it on a schedule that fits your health needs.",
    },
    {
      type: "heading",
      level: 2,
      text: "Book Your Full Body Checkup",
    },
    {
      type: "interlinking",
      title: "Areas We Serve",
      description: "We provide home sample collection and diagnostic services across the following locations.",
      items: [
        {
          title: "Garhshankar",
          description: "Full body checkup with home sample collection.",
          href: "/locations/full-body-checkup-in-garhshankar",
        },
        { title: "Hoshiarpur", description: "Diagnostic laboratory services." },
        { title: "Nawanshahr", description: "Health checkups and pathology tests." },
      ],
    },
    {
      type: "references",
      items: [
        {
          title: "Routine Health Checkups",
          publisher: "MedlinePlus",
          url: "https://medlineplus.gov/labtests/",
        },
        {
          title: "Preventive Health Screening",
          publisher: "Mayo Clinic",
          url: "https://www.mayoclinic.org/",
        },
      ],
    },
  ],

  faq: [
    {
      question: "What is done in a full body checkup?",
      answer:
        "A full body checkup usually combines blood tests covering CBC, blood sugar, cholesterol, liver function, kidney function, and often thyroid and vitamin levels — all from a single blood draw, sometimes alongside a urine test.",
    },
    {
      question: "What are the 5 main tests for a full body checkup?",
      answer:
        "The five core tests are CBC, Blood Sugar, Lipid Profile, Liver Function Test (LFT), and Kidney Function Test (KFT). Our basic packages start from these core panels.",
    },
    {
      question: "Is a full body checkup necessary?",
      answer:
        "A full body checkup isn't mandatory, but it's a useful preventive tool since many conditions like diabetes, thyroid disorders, and high cholesterol often show no symptoms in early stages. Doctors generally recommend it as part of routine annual screening, especially after age 30.",
    },
    {
      question: "At what age is a full body checkup best?",
      answer:
        "There's no single ideal age, but doctors commonly recommend starting annual full body checkups from age 30, or every 2 years for younger adults with no risk factors. People with diabetes, obesity, or a family history of chronic disease may need earlier and more frequent screening.",
    },
    {
      question: "Which test is best for a full body checkup?",
      answer:
        "There's no single 'best' test — a full body checkup is a bundle of tests, not one test. The right package depends on your age, symptoms, and risk factors, so it's worth discussing with your doctor or lab which panel fits your needs.",
    },
    {
      question: "What is the average cost of a full body checkup in India?",
      answer:
        "Full body checkup prices vary widely by city, lab, and number of tests included. At our Garhshankar lab, packages range from ₹800 to ₹3500 depending on scope, with our Advance Full Body Checkup at ₹2499 for 70 tests.",
    },
    {
      question: "How many tests are in a full body checkup?",
      answer:
        "This varies by package — our basic panels cover around 45 parameters, while our Advance and Master Health packages cover 70-79 parameters across blood, liver, kidney, thyroid, and vitamin screening.",
    },
    {
      question: "Is fasting required for a full body checkup?",
      answer:
        "Yes, a fasting period of 10-12 hours is recommended for accurate glucose and lipid profile results, which are included in nearly all full body checkup packages.",
    },
  ],

  cta: {
    title: "Book Your Full Body Checkup Today",
    description:
      "Looking for a reliable full body checkup in Garhshankar? Book with home sample collection, affordable pricing, and fast digital reports.",
    serviceName: "Full Body Checkup",
    serviceLink: "/packages/bhangal-advance-full-body-checkup",
    bookingLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20Full%20Body%20Checkup.%20Please%20share%20the%20available%20slots.`,
    whatsappLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Full%20Body%20Checkup.`,
    features: [
      "45-79 Tests Available Across Packages",
      "Home Sample Collection",
      "Fast Digital Reports",
      "Affordable Pricing",
      "Experienced Phlebotomists",
    ],
  },
},
{
  id: 6,
  slug: "widal-test-full-guide",
  title: "Widal Test: Full Form, Normal Range, Price & What It Detects (Complete Guide)",
  excerpt:
    "Everything about the Widal test — what it checks, titre normal range, O and H antigen meaning, price, and how it compares to Typhidot for typhoid diagnosis.",
  category: "Health Tips",
  author: {
    name: "Bhangal Clinical Laboratories & ECG Center",
    image: "/team/author.jpg",
  },
  publishedAt: "September 21, 2026",
  readingTime: "9 min read",
  coverImage: "/blogs/widal-test-full-guide/cover.webp",
  featured: true,

  relatedPackages: ["bhangal-fever-mini-profile", "bhangal-fever-maxi-profile", "bhangal-dengue-profile", "bhangal-basic-profile"],
  relatedTests: ["typhidot-test", "cbc-test", "esr-test", "crp-quantitative-test", "vdrl-test"],

  seo: {
    title: "Widal Test: Full Form, Normal Range & Price",
    // 48 chars
    description:
      "Everything about the Widal test — normal titre range, O/H antigen meaning, price, and how it compares to Typhidot for typhoid diagnosis.",
    // 140 chars
    keywords: [
      "widal test",
      "widal test normal range",
      "widal test positive means",
      "widal test 1:80 meaning",
      "widal test 1:160 meaning",
      "widal test price",
      "s typhi o s typhi h",
      "widal vs typhidot test",
      "typhoid test full form",
      "Bhangal Clinical Laboratories",
    ],
  },

  quickInfo: [
    { label: "You Will Learn", value: "Complete Guide to Widal Test", icon: "activity" },
    { label: "Reading Time", value: "9 Minutes", icon: "clock" },
    { label: "Suitable For", value: "Adults & Children", icon: "users" },
    { label: "Symptoms", value: "Persistent Fever, Weakness, Abdominal Pain", icon: "heart" },
    { label: "Recommended Test", value: "Widal Test", icon: "test" },
    { label: "Fasting", value: "Not Required", icon: "file" },
    { label: "Report Time", value: "Same Day", icon: "clock" },
    { label: "Price", value: getTestPrice("widal-test"), icon: "price" },
    { label: "Home Collection", value: "Available", icon: "home" },
  ],

  tags: ["Widal Test", "Typhoid", "Fever Screening", "Blood Test", "Preventive Healthcare"],

  content: [
    {
      type: "paragraph",
      text: "The Widal test is one of the most commonly ordered tests at our Garhshankar centre for patients with fever lasting more than a few days. Despite how often it's ordered, many patients aren't sure what the titre numbers on their report actually mean, or how it differs from a Typhidot test. This guide covers what Widal checks, normal range, and pricing.",
    },
    {
      type: "heading",
      level: 2,
      text: "What Is a Widal Test? (Full Form & Meaning)",
    },
    {
      type: "paragraph",
      text: "The Widal test detects antibodies your immune system produces against Salmonella Typhi and Salmonella Paratyphi — the bacteria that cause typhoid fever. It measures two types of antigens: 'O' (somatic) and 'H' (flagellar), reported as a titre such as 1:80 or 1:160, indicating antibody concentration in your blood.",
    },
    {
      type: "tip",
      title: "Good to Know",
      text: "A single Widal titre reading isn't always conclusive — doctors often recommend a repeat test after a few days to check whether the titre is rising, which is more suggestive of an active infection.",
    },
    {
      type: "heading",
      level: 2,
      text: "Widal Test Normal Range & What Your Titre Means",
    },
    {
      type: "table",
      title: "Widal Test Titre Interpretation",
      headers: ["Titre Level", "Interpretation"],
      rows: [
        ["Below 1:80", "Generally considered normal / negative"],
        ["1:80", "Borderline — may need clinical correlation or repeat test"],
        ["1:160", "Suggestive of typhoid infection, especially with symptoms"],
        ["1:320 or higher", "Strongly suggestive of active typhoid infection"],
      ],
    },
    {
      type: "paragraph",
      text: "Normal reference ranges can vary slightly by region since prior typhoid exposure or vaccination in the local population affects baseline titres. Always compare your result against the range printed on your own report and discuss it with your doctor.",
    },
    {
      type: "heading",
      level: 2,
      text: "What Do S. Typhi O and S. Typhi H Mean?",
    },
    {
      type: "paragraph",
      text: "'O' (somatic) antigen antibodies typically appear first and indicate a more recent infection, while 'H' (flagellar) antigen antibodies persist longer, sometimes from a past infection or vaccination. Doctors look at both values together, not in isolation, to assess how likely a current typhoid infection is.",
    },
    {
      type: "heading",
      level: 2,
      text: "Widal Test vs Typhidot Test: Which Is Better?",
    },
    {
      type: "table",
      title: "Widal vs Typhidot Comparison",
      headers: ["Feature", "Widal Test", "Typhidot Test"],
      rows: [
        ["What it detects", "Antibody titre (O & H antigens)", "Specific IgM & IgG antibodies"],
        ["Speed", "Same day", "Faster, often within hours"],
        ["Specificity", "Can give false positives from past exposure", "More specific to current infection"],
        ["Cost", "More affordable", "Slightly higher"],
        ["Best for", "Initial screening, repeat titre tracking", "Confirming a recent, active infection"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Is Fasting Required for a Widal Test?",
    },
    {
      type: "paragraph",
      text: "No, fasting is not required for a Widal test. You can eat and drink normally before your blood draw, unless another fasting test is being done at the same time.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why Would a Doctor Order a Widal Test?",
    },
    {
      type: "table",
      title: "Symptoms and What Widal May Reveal",
      headers: ["Symptom", "What Widal May Show"],
      rows: [
        ["Persistent Fever (5+ days)", "Raised O/H titres suggesting typhoid"],
        ["Abdominal Pain & Loss of Appetite", "Supports typhoid workup alongside CBC"],
        ["Weakness & Headache", "Common accompanying typhoid symptoms"],
        ["Rose Spots on Skin", "Classic (though less common) typhoid sign, warrants testing"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How Much Does a Widal Test Cost?",
    },
    {
      type: "paragraph",
      text: "Widal is one of the more affordable diagnostic tests available. Check our current price list for the exact rate and any bundled fever panel packages that include Widal alongside CBC and dengue screening.",
    },
    {
      type: "interlinking",
      title: "Check Prices & Service Details",
      description: "Ready to check cost or schedule your Widal test? View exact prices and service details below.",
      items: [
        {
          title: "Widal Test Price in Garhshankar",
          description: "View the exact Widal test rate and bundled fever panel packages.",
          href: "/prices/widal-test-price-garhshankar",
        },
        {
          title: "Widal Service Overview",
          description: "Learn what is included in our Widal testing service and process.",
          href: "/tests/widal-test",
        },
      ],
    },
    {
      type: "success",
      title: "Key Takeaway",
      text: "A Widal test is a quick, affordable first step in diagnosing typhoid fever, especially when read alongside your symptoms and, if needed, a repeat titre or a Typhidot test for confirmation.",
    },
    {
      type: "heading",
      level: 2,
      text: "Book Your Widal Test",
    },
    {
      type: "paragraph",
      text: "Bhangal Clinical Laboratories & ECG Center is located opposite Civil Hospital on Sri Anandpur Sahib Road, Garhshankar, Hoshiarpur district, Punjab. We're open daily from 7:00 AM to 8:00 PM (8:00 AM to 2:00 PM on Sundays). Walk in, call ahead, or book a home sample collection.",
    },
    {
      type: "interlinking",
      title: "Areas We Serve",
      description: "We provide home sample collection and diagnostic services across the following locations.",
      items: [
        {
          title: "Garhshankar",
          description: "Widal test and home sample collection.",
          href: "/locations/widal-test-in-garhshankar",
        },
        { title: "Hoshiarpur", description: "Diagnostic laboratory services." },
        { title: "Nawanshahr", description: "Health checkups and pathology tests." },
      ],
    },
    {
      type: "references",
      items: [
        {
          title: "Typhoid Fever Diagnostic Tests",
          publisher: "MedlinePlus",
          url: "https://medlineplus.gov/typhoidfever.html",
        },
        {
          title: "Widal Test",
          publisher: "National Center for Biotechnology Information (NCBI)",
          url: "https://www.ncbi.nlm.nih.gov/",
        },
      ],
    },
  ],

  faq: [
    {
      question: "What does a Widal test check for?",
      answer: "A Widal test checks for antibodies against Salmonella Typhi and Paratyphi bacteria to help diagnose typhoid fever.",
    },
    {
      question: "What does Widal test positive mean?",
      answer: "A positive Widal test means antibody titres against typhoid bacteria were detected above the normal threshold. It should be interpreted alongside symptoms and titre level, since past infection or vaccination can also cause a positive result.",
    },
    {
      question: "What is a normal Widal test titre?",
      answer: "A titre below 1:80 is generally considered normal in most regions, while 1:160 or higher, especially rising on a repeat test, is more suggestive of active typhoid infection.",
    },
    {
      question: "Is Widal test 1:160 high?",
      answer: "A titre of 1:160 is generally considered suggestive of typhoid infection when combined with symptoms, though a doctor should interpret it alongside your clinical picture and, if needed, a repeat test.",
    },
    {
      question: "What is the difference between Widal and Typhidot test?",
      answer: "Widal measures antibody titres and is more affordable but can be less specific due to past exposure. Typhidot detects specific IgM and IgG antibodies and is generally faster and more specific for a current infection.",
    },
    {
      question: "Is fasting required for a Widal test?",
      answer: "No, fasting is not required for a Widal test. You can eat and drink normally before the blood draw.",
    },
    {
      question: "How much does a Widal test cost?",
      answer: "Widal testing at our Garhshankar lab is one of the more affordable individual tests — check our current price list for the exact rate.",
    },
    {
      question: "Can a Widal test be done at home?",
      answer: "Yes, home sample collection is available for the Widal test across Garhshankar and nearby villages.",
    },
  ],

  cta: {
    title: "Book Your Widal Test Today",
    description: "Looking for reliable typhoid screening in Garhshankar? Book your Widal test with home sample collection, affordable pricing, and fast digital reports.",
    serviceName: "Widal Test",
    serviceLink: "/tests/widal-test",
    bookingLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20Widal%20Test.%20Please%20share%20the%20available%20slots.`,
    whatsappLink: `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20Widal%20Test.`,
    features: ["Home Sample Collection", "Fast Digital Reports", "Affordable Pricing", "Experienced Phlebotomists"],
  },
},










];