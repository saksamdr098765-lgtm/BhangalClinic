export const symptoms = [
  // =====================================================
  // GENERAL HEALTH
  // =====================================================

  {
    id: "fatigue",
    label: "Fatigue",
    bodyAreas: ["general", "blood", "thyroid"],
    tests: [
      "cbc-test",
      "hemoglobin-test",
      "thyroid-profile",
      "blood-sugar-test",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "weakness",
    label: "Weakness",
    bodyAreas: ["general", "blood", "kidney"],
    tests: [
      "cbc-test",
      "hemoglobin-test",
      "kidney-function-test",
      "blood-sugar-test",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "frequent-fatigue",
    label: "Always Feeling Tired",
    bodyAreas: ["general", "blood", "thyroid"],
    tests: [
      "cbc-test",
      "hemoglobin-test",
      "thyroid-profile",
      "blood-sugar-test",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "poor-sleep",
    label: "Poor Sleep",
    bodyAreas: ["general"],
    tests: [
      "vitamin-d-b12-combo",
      "thyroid-profile",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 2,
  },

  {
    id: "loss-of-appetite",
    label: "Loss of Appetite",
    bodyAreas: ["general", "digestive", "liver"],
    tests: [
      "cbc-test",
      "liver-function-test",
      "blood-sugar-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "weight-loss",
    label: "Weight Loss",
    bodyAreas: ["general", "thyroid", "digestive"],
    tests: [
      "thyroid-profile",
      "blood-sugar-test",
      "cbc-test",
      "liver-function-test",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "weight-gain",
    label: "Weight Gain",
    bodyAreas: ["general", "thyroid"],
    tests: [
      "thyroid-profile",
      "blood-sugar-test",
      "lipid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "excessive-thirst",
    label: "Excessive Thirst",
    bodyAreas: ["general", "kidney"],
    tests: [
      "blood-sugar-test",
      "glucose-tolerance-test",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "increased-hunger",
    label: "Increased Hunger",
    bodyAreas: ["general"],
    tests: [
      "blood-sugar-test",
      "glucose-tolerance-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  // =====================================================
  // FEVER & INFECTION
  // =====================================================

  {
    id: "fever",
    label: "Fever",
    bodyAreas: ["general", "blood"],
    tests: [
      "cbc-test",
      "crp-test",
      "esr-test",
      "widal-test",
      "typhidot-test",
      "mp-antigen-test",
      "dengue-test",
    ],
    packages: [
      "heat-shield-basic",
      "bhangal-basic-profile",
    ],
    priority: 5,
  },

  {
    id: "chills",
    label: "Chills",
    bodyAreas: ["general", "blood"],
    tests: [
      "cbc-test",
      "crp-test",
      "esr-test",
      "widal-test",
      "mp-antigen-test",
      "dengue-test",
    ],
    packages: [
      "heat-shield-basic",
    ],
    priority: 5,
  },

  {
    id: "body-pain",
    label: "Body Pain",
    bodyAreas: ["general", "bones"],
    tests: [
      "cbc-test",
      "crp-test",
      "esr-test",
      "vitamin-d-b12-combo",
      "dengue-test",
      "chikungunya-igm-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "night-sweats",
    label: "Night Sweats",
    bodyAreas: ["general", "blood"],
    tests: [
      "cbc-test",
      "crp-test",
      "esr-test",
      "mantoux-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "frequent-infections",
    label: "Frequent Infections",
    bodyAreas: ["blood", "general"],
    tests: [
      "cbc-test",
      "total-leukocyte-count",
      "differential-leukocyte-count",
      "crp-test",
      "esr-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  // =====================================================
  // HEAD & BRAIN
  // =====================================================

  {
    id: "headache",
    label: "Headache",
    bodyAreas: ["head"],
    tests: [
      "cbc-test",
      "esr-test",
      "blood-sugar-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "migraine",
    label: "Migraine",
    bodyAreas: ["head"],
    tests: [
      "cbc-test",
      "vitamin-d-b12-combo",
      "blood-sugar-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "dizziness",
    label: "Dizziness",
    bodyAreas: ["head", "blood"],
    tests: [
      "cbc-test",
      "hemoglobin-test",
      "blood-sugar-test",
      "thyroid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "blurred-vision",
    label: "Blurred Vision",
    bodyAreas: ["head", "diabetes"],
    tests: [
      "blood-sugar-test",
      "glucose-tolerance-test",
      "thyroid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "memory-loss",
    label: "Memory Problems",
    bodyAreas: ["head"],
    tests: [
      "vitamin-d-b12-combo",
      "thyroid-profile",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "confusion",
    label: "Confusion",
    bodyAreas: ["head", "general"],
    tests: [
      "cbc-test",
      "blood-sugar-test",
      "kidney-function-test",
      "thyroid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  // =====================================================
  // HAIR & SKIN
  // =====================================================

  {
    id: "hair-loss",
    label: "Hair Loss",
    bodyAreas: ["thyroid", "general"],
    tests: [
      "thyroid-profile",
      "vitamin-d-b12-combo",
      "cbc-test",
      "hemoglobin-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 5,
  },

  {
    id: "hair-thinning",
    label: "Hair Thinning",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "hair-breakage",
    label: "Hair Breakage",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "dry-skin",
    label: "Dry Skin",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "brittle-nails",
    label: "Brittle Nails",
    bodyAreas: ["blood", "thyroid"],
    tests: [
      "cbc-test",
      "hemoglobin-test",
      "thyroid-profile",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "pale-skin",
    label: "Pale Skin",
    bodyAreas: ["blood"],
    tests: [
      "cbc-test",
      "hemoglobin-test",
      "vitamin-d-b12-combo",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 5,
  },

  {
    id: "low-hemoglobin",
    label: "Low Hemoglobin",
    bodyAreas: ["blood"],
    tests: [
      "hemoglobin-test",
      "cbc-test",
      "peripheral-blood-film",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 5,
  },
  // =====================================================
// HEART & CARDIOVASCULAR
// =====================================================

{
  id: "chest-pain",
  label: "Chest Pain",
  bodyAreas: ["heart"],
  tests: [
    "troponin-t-test",
    "cpk-mb-test",
    "lipid-profile",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "palpitations",
  label: "Palpitations",
  bodyAreas: ["heart"],
  tests: [
    "electrolyte-profile",
    "serum-potassium",
    "serum-sodium",
    "thyroid-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "high-blood-pressure",
  label: "High Blood Pressure",
  bodyAreas: ["heart", "kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "lipid-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "low-blood-pressure",
  label: "Low Blood Pressure",
  bodyAreas: ["heart", "blood"],
  tests: [
    "cbc-test",
    "hemoglobin-test",
    "electrolyte-profile",
    "serum-sodium",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "rapid-heart-rate",
  label: "Rapid Heart Rate",
  bodyAreas: ["heart"],
  tests: [
    "thyroid-profile",
    "electrolyte-profile",
    "serum-potassium",
    "cbc-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "irregular-heartbeat",
  label: "Irregular Heartbeat",
  bodyAreas: ["heart"],
  tests: [
    "electrolyte-profile",
    "serum-potassium",
    "serum-sodium",
    "troponin-t-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "high-cholesterol",
  label: "High Cholesterol",
  bodyAreas: ["heart"],
  tests: [
    "lipid-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "leg-swelling",
  label: "Leg Swelling",
  bodyAreas: ["heart", "kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "fainting",
  label: "Fainting",
  bodyAreas: ["heart", "brain"],
  tests: [
    "cbc-test",
    "blood-sugar-test",
    "electrolyte-profile",
    "troponin-t-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

// =====================================================
// RESPIRATORY SYSTEM
// =====================================================

{
  id: "persistent-cough",
  label: "Persistent Cough",
  bodyAreas: ["lungs"],
  tests: [
    "cbc-test",
    "crp-test",
    "sputum-afb-test",
    "gram-stain-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "dry-cough",
  label: "Dry Cough",
  bodyAreas: ["lungs"],
  tests: [
    "cbc-test",
    "crp-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "wet-cough",
  label: "Wet Cough",
  bodyAreas: ["lungs"],
  tests: [
    "cbc-test",
    "crp-test",
    "gram-stain-test",
    "sputum-afb-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "difficulty-breathing",
  label: "Difficulty Breathing",
  bodyAreas: ["lungs", "heart"],
  tests: [
    "cbc-test",
    "troponin-t-test",
    "cpk-mb-test",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "shortness-of-breath",
  label: "Shortness of Breath",
  bodyAreas: ["lungs", "heart"],
  tests: [
    "cbc-test",
    "troponin-t-test",
    "cpk-mb-test",
    "hemoglobin-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "wheezing",
  label: "Wheezing",
  bodyAreas: ["lungs"],
  tests: [
    "cbc-test",
    "crp-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "chest-tightness",
  label: "Chest Tightness",
  bodyAreas: ["lungs", "heart"],
  tests: [
    "troponin-t-test",
    "cpk-mb-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "coughing-blood",
  label: "Coughing Blood",
  bodyAreas: ["lungs"],
  tests: [
    "sputum-afb-test",
    "cbc-test",
    "crp-test",
    "mantoux-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "recurrent-chest-infection",
  label: "Recurrent Chest Infection",
  bodyAreas: ["lungs"],
  tests: [
    "cbc-test",
    "crp-test",
    "sputum-afb-test",
    "gram-stain-test",
    "mantoux-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},
// =====================================================
// DIGESTIVE SYSTEM
// =====================================================

{
  id: "stomach-pain",
  label: "Stomach Pain",
  bodyAreas: ["digestive"],
  tests: [
    "cbc-test",
    "stool-examination",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "abdominal-pain",
  label: "Abdominal Pain",
  bodyAreas: ["digestive", "liver"],
  tests: [
    "cbc-test",
    "liver-function-test",
    "stool-examination",
    "crp-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "acidity",
  label: "Acidity",
  bodyAreas: ["digestive"],
  tests: [
    "liver-function-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 2,
},

{
  id: "heartburn",
  label: "Heartburn",
  bodyAreas: ["digestive"],
  tests: [
    "liver-function-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 2,
},

{
  id: "indigestion",
  label: "Indigestion",
  bodyAreas: ["digestive"],
  tests: [
    "liver-function-test",
    "stool-examination",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "nausea",
  label: "Nausea",
  bodyAreas: ["digestive", "liver"],
  tests: [
    "liver-function-test",
    "cbc-test",
    "stool-examination",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "vomiting",
  label: "Vomiting",
  bodyAreas: ["digestive"],
  tests: [
    "cbc-test",
    "electrolyte-profile",
    "stool-examination",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "diarrhea",
  label: "Diarrhea",
  bodyAreas: ["digestive"],
  tests: [
    "stool-examination",
    "cbc-test",
    "electrolyte-profile",
    "crp-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "constipation",
  label: "Constipation",
  bodyAreas: ["digestive"],
  tests: [
    "thyroid-profile",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "bloating",
  label: "Bloating",
  bodyAreas: ["digestive"],
  tests: [
    "stool-examination",
    "liver-function-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "gas",
  label: "Excessive Gas",
  bodyAreas: ["digestive"],
  tests: [
    "stool-examination",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 2,
},

{
  id: "blood-in-stool",
  label: "Blood in Stool",
  bodyAreas: ["digestive"],
  tests: [
    "cbc-test",
    "stool-examination",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "black-stool",
  label: "Black Stool",
  bodyAreas: ["digestive"],
  tests: [
    "cbc-test",
    "hemoglobin-test",
    "stool-examination",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "difficulty-swallowing",
  label: "Difficulty Swallowing",
  bodyAreas: ["digestive"],
  tests: [
    "cbc-test",
    "crp-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

// =====================================================
// LIVER & GALLBLADDER
// =====================================================

{
  id: "jaundice",
  label: "Jaundice",
  bodyAreas: ["liver"],
  tests: [
    "liver-function-test",
    "bilirubin-total",
    "bilirubin-direct",
    "bilirubin-indirect",
    "hbsag-test",
    "hcv-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "yellow-eyes",
  label: "Yellow Eyes",
  bodyAreas: ["liver"],
  tests: [
    "bilirubin-total",
    "bilirubin-direct",
    "bilirubin-indirect",
    "liver-function-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "dark-urine",
  label: "Dark Urine",
  bodyAreas: ["liver", "kidney"],
  tests: [
    "urine-examination",
    "bilirubin-total",
    "liver-function-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "itchy-skin",
  label: "Itchy Skin",
  bodyAreas: ["liver"],
  tests: [
    "liver-function-test",
    "bilirubin-total",
    "alkaline-phosphatase-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "swollen-abdomen",
  label: "Swollen Abdomen",
  bodyAreas: ["liver"],
  tests: [
    "liver-function-test",
    "albumin-test",
    "total-protein-test",
    "globulin-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "fatty-liver",
  label: "Fatty Liver",
  bodyAreas: ["liver"],
  tests: [
    "liver-function-test",
    "sgot-test",
    "sgpt-test",
    "lipid-profile",
    "blood-sugar-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "abnormal-liver-function",
  label: "Abnormal Liver Function",
  bodyAreas: ["liver"],
  tests: [
    "liver-function-test",
    "sgot-test",
    "sgpt-test",
    "alkaline-phosphatase-test",
    "bilirubin-total",
    "albumin-test",
    "globulin-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},
// =====================================================
// KIDNEY & URINARY SYSTEM
// =====================================================

{
  id: "burning-urination",
  label: "Burning During Urination",
  bodyAreas: ["kidney", "urinary"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
    "gram-stain-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "frequent-urination",
  label: "Frequent Urination",
  bodyAreas: ["kidney", "urinary"],
  tests: [
    "urine-examination",
    "blood-sugar-test",
    "kidney-function-test",
    "serum-creatinine",
  ],
  packages: [
    "bhangal-basic-profile",
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "blood-in-urine",
  label: "Blood in Urine",
  bodyAreas: ["kidney", "urinary"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
    "cbc-test",
    "kidney-function-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "foamy-urine",
  label: "Foamy Urine",
  bodyAreas: ["kidney"],
  tests: [
    "urine-examination",
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "cloudy-urine",
  label: "Cloudy Urine",
  bodyAreas: ["kidney"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
    "gram-stain-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "bad-smelling-urine",
  label: "Foul Smelling Urine",
  bodyAreas: ["kidney"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "kidney-pain",
  label: "Kidney Pain",
  bodyAreas: ["kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "urine-examination",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "flank-pain",
  label: "Flank Pain",
  bodyAreas: ["kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "urine-examination",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "reduced-urine-output",
  label: "Reduced Urine Output",
  bodyAreas: ["kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "difficulty-urinating",
  label: "Difficulty Urinating",
  bodyAreas: ["kidney"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
    "kidney-function-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "swollen-feet",
  label: "Swollen Feet",
  bodyAreas: ["kidney", "heart"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "swollen-ankles",
  label: "Swollen Ankles",
  bodyAreas: ["kidney", "heart"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "swelling-around-eyes",
  label: "Swelling Around Eyes",
  bodyAreas: ["kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "urine-examination",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "kidney-stone-symptoms",
  label: "Kidney Stone Symptoms",
  bodyAreas: ["kidney"],
  tests: [
    "urine-examination",
    "kidney-function-test",
    "serum-calcium",
    "serum-creatinine",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "urinary-tract-infection",
  label: "Urinary Tract Infection",
  bodyAreas: ["kidney", "urinary"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
    "gram-stain-test",
    "cbc-test",
    "crp-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "recurrent-uti",
  label: "Recurrent UTI",
  bodyAreas: ["kidney", "urinary"],
  tests: [
    "urine-examination",
    "urine-culture-sensitivity",
    "gram-stain-test",
    "kidney-function-test",
    "blood-sugar-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "dehydration",
  label: "Dehydration",
  bodyAreas: ["kidney", "general"],
  tests: [
    "electrolyte-profile",
    "serum-sodium",
    "serum-potassium",
    "blood-urea",
    "kidney-function-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "electrolyte-imbalance",
  label: "Electrolyte Imbalance",
  bodyAreas: ["kidney"],
  tests: [
    "electrolyte-profile",
    "serum-sodium",
    "serum-potassium",
    "serum-chloride",
    "serum-calcium",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},
// =====================================================
// BONES, JOINTS & MUSCLES
// =====================================================

{
  id: "joint-pain",
  label: "Joint Pain",
  bodyAreas: ["bones", "joints"],
  tests: [
    "ra-factor-test",
    "ra-factor-quantitative-test",
    "crp-test",
    "esr-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "joint-swelling",
  label: "Joint Swelling",
  bodyAreas: ["bones", "joints"],
  tests: [
    "ra-factor-test",
    "crp-test",
    "crp-quantitative-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "joint-stiffness",
  label: "Joint Stiffness",
  bodyAreas: ["bones", "joints"],
  tests: [
    "ra-factor-test",
    "ra-factor-quantitative-test",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "morning-stiffness",
  label: "Morning Joint Stiffness",
  bodyAreas: ["bones", "joints"],
  tests: [
    "ra-factor-test",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "arthritis",
  label: "Arthritis Symptoms",
  bodyAreas: ["bones", "joints"],
  tests: [
    "ra-factor-test",
    "ra-factor-quantitative-test",
    "crp-test",
    "crp-quantitative-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "bone-pain",
  label: "Bone Pain",
  bodyAreas: ["bones"],
  tests: [
    "serum-calcium",
    "vitamin-d-b12-combo",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "back-pain",
  label: "Back Pain",
  bodyAreas: ["bones"],
  tests: [
    "vitamin-d-b12-combo",
    "serum-calcium",
    "esr-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "neck-pain",
  label: "Neck Pain",
  bodyAreas: ["bones"],
  tests: [
    "vitamin-d-b12-combo",
    "esr-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "muscle-pain",
  label: "Muscle Pain",
  bodyAreas: ["muscles"],
  tests: [
    "crp-test",
    "esr-test",
    "vitamin-d-b12-combo",
    "serum-calcium",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "muscle-weakness",
  label: "Muscle Weakness",
  bodyAreas: ["muscles"],
  tests: [
    "vitamin-d-b12-combo",
    "serum-calcium",
    "electrolyte-profile",
    "thyroid-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "muscle-cramps",
  label: "Muscle Cramps",
  bodyAreas: ["muscles"],
  tests: [
    "electrolyte-profile",
    "serum-calcium",
    "serum-potassium",
    "serum-sodium",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "leg-cramps",
  label: "Leg Cramps",
  bodyAreas: ["muscles"],
  tests: [
    "electrolyte-profile",
    "serum-potassium",
    "serum-calcium",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "difficulty-walking",
  label: "Difficulty Walking",
  bodyAreas: ["bones", "muscles"],
  tests: [
    "ra-factor-test",
    "crp-test",
    "vitamin-d-b12-combo",
    "serum-calcium",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "frequent-fractures",
  label: "Frequent Fractures",
  bodyAreas: ["bones"],
  tests: [
    "serum-calcium",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "osteoporosis-risk",
  label: "Risk of Osteoporosis",
  bodyAreas: ["bones"],
  tests: [
    "serum-calcium",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "gout-symptoms",
  label: "Gout Symptoms",
  bodyAreas: ["joints"],
  tests: [
    "uric-acid-test",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "swollen-fingers",
  label: "Swollen Fingers",
  bodyAreas: ["joints"],
  tests: [
    "ra-factor-test",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
 priority: 4,
},

{
  id: "heel-pain",
  label: "Heel Pain",
  bodyAreas: ["bones"],
  tests: [
    "vitamin-d-b12-combo",
    "serum-calcium",
    "crp-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "shoulder-pain",
  label: "Shoulder Pain",
  bodyAreas: ["joints"],
  tests: [
    "crp-test",
    "esr-test",
    "ra-factor-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "knee-pain",
  label: "Knee Pain",
  bodyAreas: ["joints"],
  tests: [
    "ra-factor-test",
    "crp-test",
    "esr-test",
    "serum-calcium",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},
// =====================================================
// BLOOD DISORDERS
// =====================================================

{
  id: "anemia",
  label: "Anemia",
  bodyAreas: ["blood"],
  tests: [
    "cbc-test",
    "hemoglobin-test",
    "packed-cell-volume-test",
    "peripheral-blood-film",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-basic-profile",
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "low-hemoglobin",
  label: "Low Hemoglobin",
  bodyAreas: ["blood"],
  tests: [
    "hemoglobin-test",
    "cbc-test",
    "packed-cell-volume-test",
    "peripheral-blood-film",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "easy-bruising",
  label: "Easy Bruising",
  bodyAreas: ["blood"],
  tests: [
    "cbc-test",
    "platelet-count-test",
    "bleeding-time-test",
    "clotting-time-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "bleeding-gums",
  label: "Bleeding Gums",
  bodyAreas: ["blood"],
  tests: [
    "platelet-count-test",
    "bleeding-time-test",
    "clotting-time-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "nose-bleeding",
  label: "Frequent Nose Bleeding",
  bodyAreas: ["blood"],
  tests: [
    "platelet-count-test",
    "bleeding-time-test",
    "clotting-time-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "slow-wound-healing",
  label: "Slow Wound Healing",
  bodyAreas: ["blood"],
  tests: [
    "blood-sugar-test",
    "cbc-test",
    "crp-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "frequent-bleeding",
  label: "Frequent Bleeding",
  bodyAreas: ["blood"],
  tests: [
    "platelet-count-test",
    "bleeding-time-test",
    "clotting-time-test",
    "cbc-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "high-blood-sugar",
  label: "High Blood Sugar",
  bodyAreas: ["blood", "diabetes"],
  tests: [
    "blood-sugar-test",
    "glucose-tolerance-test",
    "glucose-challenge-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "low-blood-sugar",
  label: "Low Blood Sugar",
  bodyAreas: ["blood", "diabetes"],
  tests: [
    "blood-sugar-test",
    "glucose-tolerance-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "frequent-thirst",
  label: "Frequent Thirst",
  bodyAreas: ["diabetes"],
  tests: [
    "blood-sugar-test",
    "glucose-tolerance-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "frequent-hunger",
  label: "Frequent Hunger",
  bodyAreas: ["diabetes"],
  tests: [
    "blood-sugar-test",
    "glucose-tolerance-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

// =====================================================
// THYROID & HORMONAL
// =====================================================

{
  id: "cold-intolerance",
  label: "Cold Intolerance",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "heat-intolerance",
  label: "Heat Intolerance",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "excessive-sweating",
  label: "Excessive Sweating",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "cold-hands-feet",
  label: "Cold Hands & Feet",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
    "cbc-test",
    "hemoglobin-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "fast-metabolism",
  label: "Fast Metabolism",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "slow-metabolism",
  label: "Slow Metabolism",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
    "lipid-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "thyroid-swelling",
  label: "Neck Swelling (Thyroid)",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "voice-change",
  label: "Voice Change",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "irritability",
  label: "Irritability",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "anxiety",
  label: "Anxiety",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 3,
},

{
  id: "depression",
  label: "Depression",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
    "vitamin-d-b12-combo",
    "cbc-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "constantly-sleepy",
  label: "Constant Sleepiness",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
    "cbc-test",
    "vitamin-d-b12-combo",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},
// =====================================================
// WOMEN'S HEALTH
// =====================================================

{
  id: "irregular-periods",
  label: "Irregular Periods",
  bodyAreas: ["women"],
  tests: [
    "cbc-test",
    "hemoglobin-test",
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "heavy-menstrual-bleeding",
  label: "Heavy Menstrual Bleeding",
  bodyAreas: ["women", "blood"],
  tests: [
    "cbc-test",
    "hemoglobin-test",
    "platelet-count-test",
    "bleeding-time-test",
    "clotting-time-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "missed-period",
  label: "Missed Period",
  bodyAreas: ["women"],
  tests: [
    "pregnancy-test",
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 5,
},

{
  id: "painful-periods",
  label: "Painful Periods",
  bodyAreas: ["women"],
  tests: [
    "cbc-test",
    "crp-test",
    "esr-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "white-discharge",
  label: "White Vaginal Discharge",
  bodyAreas: ["women"],
  tests: [
    "gram-stain-test",
    "urine-examination",
    "cbc-test",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "pelvic-pain",
  label: "Pelvic Pain",
  bodyAreas: ["women"],
  tests: [
    "cbc-test",
    "crp-test",
    "esr-test",
    "urine-examination",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "pregnancy-check",
  label: "Pregnancy Check",
  bodyAreas: ["women"],
  tests: [
    "pregnancy-test",
  ],
  packages: [],
  priority: 5,
},

{
  id: "gestational-diabetes-screening",
  label: "Gestational Diabetes Screening",
  bodyAreas: ["women"],
  tests: [
    "glucose-challenge-test",
    "glucose-tolerance-test",
  ],
  packages: [],
  priority: 5,
},

{
  id: "recurrent-miscarriage",
  label: "Recurrent Miscarriage",
  bodyAreas: ["women"],
  tests: [
    "cbc-test",
    "thyroid-profile",
    "blood-group-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

// =====================================================
// MEN'S HEALTH
// =====================================================

{
  id: "frequent-night-urination",
  label: "Frequent Night Urination",
  bodyAreas: ["men", "kidney"],
  tests: [
    "urine-examination",
    "blood-sugar-test",
    "kidney-function-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "difficulty-starting-urination",
  label: "Difficulty Starting Urination",
  bodyAreas: ["men"],
  tests: [
    "urine-examination",
    "kidney-function-test",
    "psa-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

{
  id: "weak-urine-flow",
  label: "Weak Urine Flow",
  bodyAreas: ["men"],
  tests: [
    "urine-examination",
    "psa-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "blood-in-semen",
  label: "Blood in Semen",
  bodyAreas: ["men"],
  tests: [
    "cbc-test",
    "urine-examination",
    "psa-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 5,
},

// =====================================================
// GENERAL SCREENING
// =====================================================

{
  id: "routine-health-check",
  label: "Routine Health Checkup",
  bodyAreas: ["general"],
  tests: [
    "cbc-test",
    "blood-sugar-test",
    "kidney-function-test",
    "liver-function-test",
    "thyroid-profile",
    "lipid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
    "bhangal-master-health-screen",
    "bhangal-advance-full-body-checkup",
  ],
  priority: 3,
},

{
  id: "senior-citizen-screening",
  label: "Senior Citizen Health Screening",
  bodyAreas: ["general"],
  tests: [
    "cbc-test",
    "blood-sugar-test",
    "kidney-function-test",
    "liver-function-test",
    "thyroid-profile",
    "lipid-profile",
    "urine-examination",
  ],
  packages: [
    "bhangal-senior-citizen-profile",
  ],
  priority: 4,
},

{
  id: "diabetes-screening",
  label: "Diabetes Screening",
  bodyAreas: ["diabetes"],
  tests: [
    "blood-sugar-test",
    "glucose-tolerance-test",
    "glucose-challenge-test",
    "urine-examination",
  ],
  packages: [
    "bhangal-diabetic-profile",
  ],
  priority: 5,
},

{
  id: "thyroid-screening",
  label: "Thyroid Screening",
  bodyAreas: ["thyroid"],
  tests: [
    "thyroid-profile",
  ],
  packages: [
    "bhangal-basic-profile",
  ],
  priority: 4,
},

{
  id: "heart-health-screening",
  label: "Heart Health Screening",
  bodyAreas: ["heart"],
  tests: [
    "lipid-profile",
    "troponin-t-test",
    "cpk-mb-test",
    "electrolyte-profile",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "liver-screening",
  label: "Liver Health Screening",
  bodyAreas: ["liver"],
  tests: [
    "liver-function-test",
    "bilirubin-total",
    "sgot-test",
    "sgpt-test",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

{
  id: "kidney-screening",
  label: "Kidney Health Screening",
  bodyAreas: ["kidney"],
  tests: [
    "kidney-function-test",
    "serum-creatinine",
    "blood-urea",
    "urine-examination",
  ],
  packages: [
    "bhangal-master-health-screen",
  ],
  priority: 4,
},

];
export const tests = {
  "cbc-test": {
    name: "Complete Blood Count (CBC)",
    slug: "cbc-test",
    price: 250,
  },

  "hemoglobin-test": {
    name: "Hemoglobin (Hb)",
    slug: "hemoglobin-test",
    price: 100,
  },

  "thyroid-profile": {
    name: "Thyroid Profile (T3, T4, TSH)",
    slug: "thyroid-profile",
    price: 360,
  },

  "blood-sugar-test": {
    name: "Blood Sugar (Random)",
    slug: "blood-sugar-test",
    price: 80,
  },

  "glucose-tolerance-test": {
    name: "Glucose Tolerance Test (GTT)",
    slug: "glucose-tolerance-test",
    price: 450,
  },

  "glucose-challenge-test": {
    name: "Glucose Challenge Test (GCT)",
    slug: "glucose-challenge-test",
    price: 350,
  },

  "vitamin-d-b12-combo": {
    name: "Vitamin D & Vitamin B12",
    slug: "vitamin-d-b12-combo",
    price: 1280,
  },

  "liver-function-test": {
    name: "Liver Function Test (LFT)",
    slug: "liver-function-test",
    price: 350,
  },

  "kidney-function-test": {
    name: "Kidney Function Test (KFT)",
    slug: "kidney-function-test",
    price: 350,
  },

  "lipid-profile": {
    name: "Lipid Profile",
    slug: "lipid-profile",
    price: 400,
  },

  "routine-urine-analysis": {
    name: "Routine Urine Examination",
    slug: "routine-urine-analysis",
    price: 110,
  },

  "urine-culture-sensitivity": {
    name: "Urine Culture & Sensitivity",
    slug: "urine-culture-sensitivity",
    price: 350,
  },

  "stool-examination": {
    name: "Stool Examination",
    slug: "stool-examination",
    price: 150,
  },

  "electrolyte-profile": {
    name: "Electrolyte Profile",
    slug: "electrolyte-profile",
    price: 450,
  },

  "serum-sodium": {
    name: "Serum Sodium",
    slug: "serum-sodium",
    price: 180,
  },

  "serum-potassium": {
    name: "Serum Potassium",
    slug: "serum-potassium",
    price: 180,
  },

  "serum-chloride": {
    name: "Serum Chloride",
    slug: "serum-chloride",
    price: 180,
  },

  "serum-calcium": {
    name: "Serum Calcium",
    slug: "serum-calcium",
    price: 220,
  },

  "serum-creatinine": {
    name: "Serum Creatinine",
    slug: "serum-creatinine",
    price: 120,
  },

  "blood-urea": {
    name: "Blood Urea",
    slug: "blood-urea",
    price: 120,
  },

  "widal-test": {
    name: "Widal Test",
    slug: "widal-test",
    price: 200,
  },

  "typhidot-test": {
    name: "Typhidot Test",
    slug: "typhidot-test",
    price: 450,
  },

  "dengue-test": {
    name: "Dengue Test",
    slug: "dengue-test",
    price: 800,
  },

  "chikungunya-igm-test": {
    name: "Chikungunya IgM",
    slug: "chikungunya-igm-test",
    price: 700,
  },

  "mp-antigen-test": {
    name: "Malarial Parasite (MP)",
    slug: "mp-antigen-test",
    price: 150,
  },

  "esr-test": {
    name: "ESR Test",
    slug: "esr-test",
    price: 90,
  },

  "crp-test": {
    name: "C-Reactive Protein (CRP)",
    slug: "crp-test",
    price: 350,
  },

  "crp-quantitative-test": {
    name: "CRP Quantitative",
    slug: "crp-quantitative-test",
    price: 450,
  },

  "ra-factor-test": {
    name: "RA Factor",
    slug: "ra-factor-test",
    price: 350,
  },

  "ra-factor-quantitative-test": {
    name: "RA Factor Quantitative",
    slug: "ra-factor-quantitative-test",
    price: 450,
  },

  "troponin-t-test": {
    name: "Troponin-T",
    slug: "troponin-t-test",
    price: 900,
  },

  "cpk-mb-test": {
    name: "CPK-MB",
    slug: "cpk-mb-test",
    price: 650,
  },

  "bilirubin-total": {
    name: "Bilirubin Total",
    slug: "bilirubin-total",
    price: 150,
  },

  "bilirubin-direct": {
    name: "Bilirubin Direct",
    slug: "bilirubin-direct",
    price: 120,
  },

  "bilirubin-indirect": {
    name: "Bilirubin Indirect",
    slug: "bilirubin-indirect",
    price: 120,
  },

  "sgot-test": {
    name: "SGOT (AST)",
    slug: "sgot-test",
    price: 150,
  },

  "sgpt-test": {
    name: "SGPT (ALT)",
    slug: "sgpt-test",
    price: 150,
  },

  "alkaline-phosphatase-test": {
    name: "Alkaline Phosphatase (ALP)",
    slug: "alkaline-phosphatase-test",
    price: 180,
  },

  "albumin-test": {
    name: "Albumin",
    slug: "albumin-test",
    price: 150,
  },

  "globulin-test": {
    name: "Globulin",
    slug: "globulin-test",
    price: 150,
  },

  "total-protein-test": {
    name: "Total Protein",
    slug: "total-protein-test",
    price: 180,
  },

  "gram-stain-test": {
    name: "Gram Stain",
    slug: "gram-stain-test",
    price: 250,
  },

  "mantoux-test": {
    name: "Mantoux Test",
    slug: "mantoux-test",
    price: 300,
  },

  "sputum-afb-test": {
    name: "Sputum for AFB",
    slug: "sputum-afb-test",
    price: 350,
  },

  "platelet-count-test": {
    name: "Platelet Count",
    slug: "platelet-count-test",
    price: 120,
  },

  "packed-cell-volume-test": {
    name: "Packed Cell Volume (PCV)",
    slug: "packed-cell-volume-test",
    price: 100,
  },

  "peripheral-blood-film": {
    name: "Peripheral Blood Film",
    slug: "peripheral-blood-film",
    price: 250,
  },

  "bleeding-time-test": {
    name: "Bleeding Time",
    slug: "bleeding-time-test",
    price: 120,
  },

  "clotting-time-test": {
    name: "Clotting Time",
    slug: "clotting-time-test",
    price: 120,
  },

  "pregnancy-test": {
    name: "Pregnancy Test",
    slug: "pregnancy-test",
    price: 150,
  },

  "blood-group-test": {
    name: "Blood Group & Rh Typing",
    slug: "blood-group-test",
    price: 150,
  },

  "psa-test": {
    name: "PSA Test",
    slug: "psa-test",
    price: 700,
  },

  "hbsag-test": {
    name: "HBsAg Test",
    slug: "hbsag-test",
    price: 350,
  },

  "hcv-test": {
    name: "HCV Test",
    slug: "hcv-test",
    price: 500,
  },
};
export const packages = {
  "bhangal-basic-profile": {
    name: "Bhangal Basic Profile",
    price: 1499,
  },

  "bhangal-master-health-screen": {
    name: "Bhangal Master Health Screen",
    price: 2999,
  },

  "bhangal-senior-citizen-profile": {
    name: "Bhangal Senior Citizen Profile",
    price: 2499,
  },

  "bhangal-ayush-profile-3": {
    name: "Bhangal Ayush Profile 3",
    price: 1999,
  },

  "bcl-female-4-package": {
    name: "BCL Female Health Package",
    price: 2499,
  },

  "bcl-med-pro-65-package": {
    name: "BCL MED Pro 65+ Package",
    price: 3499,
  },

  "bcl-med-health-pro-package": {
    name: "BCL MED Health Pro Package",
    price: 1999,
  },

  "heat-shield-basic": {
    name: "Heat Shield Basic",
    price: 960,
  },
};