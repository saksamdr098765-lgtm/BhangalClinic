
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
    title: "ECG Test: Full Form, Procedure, Cost & Normal Report | Bhangal Clinical Laboratories",

    description:
      "Learn what an ECG test is, its full form, how the procedure works, cost, preparation tips, and how to read a normal ECG report. Book ECG test in Garhshankar with home sample collection.",

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

  featured: true,

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
    title: "CBC Test: Full Form, Normal Range, Price & What It Detects | DK Bhangal Lab",

    description:
      "Learn what a CBC test checks, its full form, normal ranges by age and gender, price in Garhshankar, fasting requirements, and what high or low results mean.",

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
}

];