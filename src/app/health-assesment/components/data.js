export const symptoms = [
  {
    id: "fatigue",
    label: "Fatigue",
    bodyAreas: ["general", "blood", "thyroid"],
    tests: ["cbc", "vitamin-d", "vitamin-b12", "thyroid-profile", "hba1c"],
    packages: ["complete-body-checkup", "vitamin-screening"],
    priority: 5,
  },

  {
    id: "weakness",
    label: "Weakness",
    bodyAreas: ["general", "blood", "legs"],
    tests: ["cbc", "vitamin-b12", "vitamin-d", "electrolytes"],
    packages: ["complete-body-checkup"],
    priority: 5,
  },

  {
    id: "fever",
    label: "Fever",
    bodyAreas: ["general", "blood"],
    tests: ["cbc", "crp", "esr", "dengue", "malaria", "typhoid"],
    packages: ["fever-profile"],
    priority: 5,
  },

  {
    id: "chills",
    label: "Chills",
    bodyAreas: ["general", "blood"],
    tests: ["cbc", "crp", "malaria", "dengue"],
    packages: ["fever-profile"],
    priority: 4,
  },

  {
    id: "body-pain",
    label: "Body Pain",
    bodyAreas: ["general", "bones"],
    tests: ["cbc", "crp", "esr", "vitamin-d"],
    packages: ["complete-body-checkup"],
    priority: 4,
  },

  {
    id: "night-sweats",
    label: "Night Sweats",
    bodyAreas: ["general", "blood"],
    tests: ["cbc", "crp", "esr"],
    packages: ["complete-body-checkup"],
    priority: 3,
  },

  {
    id: "loss-of-appetite",
    label: "Loss of Appetite",
    bodyAreas: ["general", "digestive", "liver"],
    tests: ["lft", "cbc", "crp"],
    packages: ["liver-care"],
    priority: 4,
  },

  {
    id: "weight-loss",
    label: "Weight Loss",
    bodyAreas: ["general", "thyroid", "digestive"],
    tests: ["thyroid-profile", "hba1c", "cbc", "lft"],
    packages: ["thyroid-care"],
    priority: 5,
  },

  {
    id: "weight-gain",
    label: "Weight Gain",
    bodyAreas: ["general", "thyroid"],
    tests: ["thyroid-profile", "hba1c", "lipid-profile"],
    packages: ["thyroid-care"],
    priority: 5,
  },

  {
    id: "headache",
    label: "Headache",
    bodyAreas: ["head"],
    tests: ["cbc", "esr", "crp"],
    packages: ["complete-body-checkup"],
    priority: 3,
  },

  {
    id: "migraine",
    label: "Migraine",
    bodyAreas: ["head"],
    tests: ["cbc", "vitamin-b12"],
    packages: [],
    priority: 3,
  },

  {
    id: "dizziness",
    label: "Dizziness",
    bodyAreas: ["head", "blood"],
    tests: ["cbc", "vitamin-b12", "hba1c"],
    packages: ["complete-body-checkup"],
    priority: 4,
  },

  {
    id: "blurred-vision",
    label: "Blurred Vision",
    bodyAreas: ["head", "thyroid"],
    tests: ["hba1c", "thyroid-profile"],
    packages: ["diabetes-care"],
    priority: 4,
  },

  {
    id: "memory-loss",
    label: "Memory Problems",
    bodyAreas: ["head"],
    tests: ["vitamin-b12", "thyroid-profile"],
    packages: ["vitamin-screening"],
    priority: 3,
  },

  {
    id: "confusion",
    label: "Confusion",
    bodyAreas: ["head", "general"],
    tests: ["electrolytes", "cbc", "hba1c"],
    packages: ["complete-body-checkup"],
    priority: 5,
  },

  {
    id: "fainting",
    label: "Fainting",
    bodyAreas: ["head", "heart"],
    tests: ["cbc", "electrolytes", "troponin"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "hair-loss",
    label: "Hair Loss",
    bodyAreas: ["thyroid", "general"],
    tests: [
      "thyroid-profile",
      "ferritin",
      "vitamin-d",
      "vitamin-b12",
    ],
    packages: ["hair-wellness"],
    priority: 5,
  },

  {
    id: "hair-thinning",
    label: "Hair Thinning",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "ferritin",
      "vitamin-d",
    ],
    packages: ["hair-wellness"],
    priority: 4,
  },

  {
    id: "dry-skin",
    label: "Dry Skin",
    bodyAreas: ["thyroid"],
    tests: ["thyroid-profile", "vitamin-d"],
    packages: ["thyroid-care"],
    priority: 3,
  },

  {
    id: "cold-intolerance",
    label: "Feeling Cold Frequently",
    bodyAreas: ["thyroid"],
    tests: ["thyroid-profile", "cbc"],
    packages: ["thyroid-care"],
    priority: 4,
  },
    {
    id: "chest-pain",
    label: "Chest Pain",
    bodyAreas: ["heart", "lungs"],
    tests: ["troponin", "ckmb", "lipid-profile", "crp"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "palpitations",
    label: "Palpitations",
    bodyAreas: ["heart", "thyroid"],
    tests: ["thyroid-profile", "lipid-profile", "electrolytes"],
    packages: ["heart-health", "thyroid-care"],
    priority: 5,
  },

  {
    id: "high-blood-pressure",
    label: "High Blood Pressure",
    bodyAreas: ["heart", "kidney"],
    tests: ["lipid-profile", "kft", "hba1c"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "low-blood-pressure",
    label: "Low Blood Pressure",
    bodyAreas: ["heart", "blood"],
    tests: ["cbc", "electrolytes"],
    packages: ["complete-body-checkup"],
    priority: 4,
  },

  {
    id: "rapid-heart-rate",
    label: "Rapid Heart Rate",
    bodyAreas: ["heart"],
    tests: ["troponin", "ckmb", "thyroid-profile"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "irregular-heartbeat",
    label: "Irregular Heartbeat",
    bodyAreas: ["heart"],
    tests: ["troponin", "ckmb", "electrolytes"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "shortness-of-breath",
    label: "Shortness of Breath",
    bodyAreas: ["heart", "lungs", "blood"],
    tests: ["cbc", "troponin", "crp"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "leg-swelling",
    label: "Leg Swelling",
    bodyAreas: ["heart", "kidney", "legs"],
    tests: ["kft", "cbc"],
    packages: ["kidney-care"],
    priority: 4,
  },

  {
    id: "persistent-cough",
    label: "Persistent Cough",
    bodyAreas: ["lungs"],
    tests: ["cbc", "crp", "esr"],
    packages: [],
    priority: 4,
  },

  {
    id: "dry-cough",
    label: "Dry Cough",
    bodyAreas: ["lungs"],
    tests: ["cbc", "crp"],
    packages: [],
    priority: 3,
  },

  {
    id: "wet-cough",
    label: "Wet Cough",
    bodyAreas: ["lungs"],
    tests: ["cbc", "crp", "esr"],
    packages: [],
    priority: 4,
  },

  {
    id: "difficulty-breathing",
    label: "Difficulty Breathing",
    bodyAreas: ["lungs", "heart"],
    tests: ["cbc", "troponin", "crp"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "wheezing",
    label: "Wheezing",
    bodyAreas: ["lungs"],
    tests: ["cbc", "crp"],
    packages: [],
    priority: 3,
  },

  {
    id: "chest-tightness",
    label: "Chest Tightness",
    bodyAreas: ["lungs", "heart"],
    tests: ["troponin", "crp"],
    packages: ["heart-health"],
    priority: 5,
  },

  {
    id: "coughing-blood",
    label: "Coughing Blood",
    bodyAreas: ["lungs"],
    tests: ["cbc", "crp", "esr"],
    packages: [],
    priority: 5,
  },

  {
    id: "stomach-pain",
    label: "Stomach Pain",
    bodyAreas: ["digestive", "liver"],
    tests: ["lft", "cbc", "crp"],
    packages: ["liver-care"],
    priority: 5,
  },

  {
    id: "acidity",
    label: "Acidity",
    bodyAreas: ["digestive"],
    tests: ["lft"],
    packages: [],
    priority: 3,
  },

  {
    id: "heartburn",
    label: "Heartburn",
    bodyAreas: ["digestive"],
    tests: ["lft"],
    packages: [],
    priority: 3,
  },

  {
    id: "nausea",
    label: "Nausea",
    bodyAreas: ["digestive", "liver"],
    tests: ["lft", "cbc"],
    packages: ["liver-care"],
    priority: 4,
  },

  {
    id: "vomiting",
    label: "Vomiting",
    bodyAreas: ["digestive"],
    tests: ["cbc", "electrolytes"],
    packages: [],
    priority: 4,
  },
    {
    id: "diarrhea",
    label: "Diarrhea",
    bodyAreas: ["digestive"],
    tests: ["cbc", "crp", "electrolytes"],
    packages: [],
    priority: 4,
  },

  {
    id: "constipation",
    label: "Constipation",
    bodyAreas: ["digestive"],
    tests: ["thyroid-profile"],
    packages: ["thyroid-care"],
    priority: 3,
  },

  {
    id: "bloating",
    label: "Bloating",
    bodyAreas: ["digestive"],
    tests: ["lft"],
    packages: [],
    priority: 3,
  },

  {
    id: "gas",
    label: "Excessive Gas",
    bodyAreas: ["digestive"],
    tests: ["lft"],
    packages: [],
    priority: 2,
  },

  {
    id: "blood-in-stool",
    label: "Blood in Stool",
    bodyAreas: ["digestive", "blood"],
    tests: ["cbc", "crp"],
    packages: [],
    priority: 5,
  },

  {
    id: "difficulty-swallowing",
    label: "Difficulty Swallowing",
    bodyAreas: ["digestive"],
    tests: ["cbc"],
    packages: [],
    priority: 4,
  },

  {
    id: "indigestion",
    label: "Indigestion",
    bodyAreas: ["digestive"],
    tests: ["lft"],
    packages: [],
    priority: 3,
  },

  {
    id: "burning-urination",
    label: "Burning Urination",
    bodyAreas: ["kidney"],
    tests: ["urine-routine", "urine-culture", "kft"],
    packages: ["kidney-care"],
    priority: 5,
  },

  {
    id: "frequent-urination",
    label: "Frequent Urination",
    bodyAreas: ["kidney", "thyroid"],
    tests: ["urine-routine", "hba1c", "kft"],
    packages: ["kidney-care", "diabetes-care"],
    priority: 5,
  },

  {
    id: "blood-in-urine",
    label: "Blood in Urine",
    bodyAreas: ["kidney"],
    tests: ["urine-routine", "urine-culture", "kft"],
    packages: ["kidney-care"],
    priority: 5,
  },

  {
    id: "foamy-urine",
    label: "Foamy Urine",
    bodyAreas: ["kidney"],
    tests: ["urine-routine", "kft"],
    packages: ["kidney-care"],
    priority: 4,
  },

  {
    id: "lower-back-pain",
    label: "Lower Back Pain",
    bodyAreas: ["kidney", "bones"],
    tests: ["kft", "cbc", "vitamin-d"],
    packages: ["kidney-care", "bone-health"],
    priority: 4,
  },

  {
    id: "swollen-feet",
    label: "Swollen Feet",
    bodyAreas: ["kidney", "heart", "legs"],
    tests: ["kft", "cbc", "lipid-profile"],
    packages: ["kidney-care", "heart-health"],
    priority: 5,
  },

  {
    id: "yellow-eyes",
    label: "Yellow Eyes",
    bodyAreas: ["liver"],
    tests: ["lft", "cbc"],
    packages: ["liver-care"],
    priority: 5,
  },

  {
    id: "yellow-skin",
    label: "Yellow Skin",
    bodyAreas: ["liver"],
    tests: ["lft", "cbc"],
    packages: ["liver-care"],
    priority: 5,
  },

  {
    id: "dark-urine",
    label: "Dark Urine",
    bodyAreas: ["liver", "kidney"],
    tests: ["lft", "urine-routine", "kft"],
    packages: ["liver-care", "kidney-care"],
    priority: 4,
  },

  {
    id: "abdominal-swelling",
    label: "Abdominal Swelling",
    bodyAreas: ["liver", "digestive"],
    tests: ["lft", "cbc"],
    packages: ["liver-care"],
    priority: 5,
  },

  {
    id: "liver-pain",
    label: "Pain in Upper Right Abdomen",
    bodyAreas: ["liver"],
    tests: ["lft", "crp"],
    packages: ["liver-care"],
    priority: 5,
  },

  {
    id: "itchy-skin",
    label: "Itchy Skin",
    bodyAreas: ["liver", "blood"],
    tests: ["lft", "cbc"],
    packages: ["liver-care"],
    priority: 3,
  },

  {
    id: "easy-bruising",
    label: "Easy Bruising",
    bodyAreas: ["blood", "liver"],
    tests: ["cbc", "lft"],
    packages: ["complete-body-checkup"],
    priority: 4,
  },
    {
    id: "joint-pain",
    label: "Joint Pain",
    bodyAreas: ["bones"],
    tests: ["vitamin-d", "calcium", "ra-factor", "uric-acid", "crp"],
    packages: ["bone-health"],
    priority: 5,
  },

  {
    id: "bone-pain",
    label: "Bone Pain",
    bodyAreas: ["bones"],
    tests: ["vitamin-d", "calcium"],
    packages: ["bone-health"],
    priority: 4,
  },

  {
    id: "muscle-weakness",
    label: "Muscle Weakness",
    bodyAreas: ["bones", "legs"],
    tests: ["vitamin-d", "vitamin-b12", "electrolytes"],
    packages: ["bone-health", "vitamin-screening"],
    priority: 4,
  },

  {
    id: "muscle-cramps",
    label: "Muscle Cramps",
    bodyAreas: ["bones", "legs"],
    tests: ["calcium", "vitamin-d", "electrolytes"],
    packages: ["bone-health"],
    priority: 4,
  },

  {
    id: "back-pain",
    label: "Back Pain",
    bodyAreas: ["bones", "legs"],
    tests: ["vitamin-d", "calcium"],
    packages: ["bone-health"],
    priority: 3,
  },

  {
    id: "leg-pain",
    label: "Leg Pain",
    bodyAreas: ["legs", "bones"],
    tests: ["vitamin-d", "calcium"],
    packages: ["bone-health"],
    priority: 3,
  },

  {
    id: "calf-pain",
    label: "Calf Pain",
    bodyAreas: ["legs"],
    tests: ["cbc"],
    packages: [],
    priority: 3,
  },

  {
    id: "restless-legs",
    label: "Restless Legs",
    bodyAreas: ["legs"],
    tests: ["ferritin", "vitamin-b12"],
    packages: ["vitamin-screening"],
    priority: 3,
  },

  {
    id: "numb-legs",
    label: "Numbness in Legs",
    bodyAreas: ["legs"],
    tests: ["vitamin-b12", "hba1c"],
    packages: ["diabetes-care"],
    priority: 4,
  },

  {
    id: "pale-skin",
    label: "Pale Skin",
    bodyAreas: ["blood"],
    tests: ["cbc", "ferritin", "iron-profile"],
    packages: ["complete-body-checkup"],
    priority: 5,
  },

  {
    id: "low-hemoglobin",
    label: "Low Hemoglobin",
    bodyAreas: ["blood"],
    tests: ["cbc", "ferritin", "iron-profile"],
    packages: ["complete-body-checkup"],
    priority: 5,
  },

  {
    id: "frequent-infections",
    label: "Frequent Infections",
    bodyAreas: ["blood", "general"],
    tests: ["cbc", "crp", "esr"],
    packages: ["complete-body-checkup"],
    priority: 5,
  },

  {
    id: "heat-intolerance",
    label: "Feeling Hot Frequently",
    bodyAreas: ["thyroid"],
    tests: ["thyroid-profile"],
    packages: ["thyroid-care"],
    priority: 4,
  },

  {
    id: "mood-changes",
    label: "Mood Changes",
    bodyAreas: ["thyroid", "head"],
    tests: ["thyroid-profile", "vitamin-b12"],
    packages: ["thyroid-care"],
    priority: 3,
  },

  {
    id: "excessive-thirst",
    label: "Excessive Thirst",
    bodyAreas: ["general", "kidney"],
    tests: ["hba1c", "fasting-sugar", "pp-sugar"],
    packages: ["diabetes-care"],
    priority: 5,
  },

  {
    id: "increased-hunger",
    label: "Increased Hunger",
    bodyAreas: ["general"],
    tests: ["hba1c", "fasting-sugar"],
    packages: ["diabetes-care"],
    priority: 4,
  },

  {
    id: "frequent-fatigue",
    label: "Always Feeling Tired",
    bodyAreas: ["general", "blood", "thyroid"],
    tests: [
      "cbc",
      "thyroid-profile",
      "vitamin-d",
      "vitamin-b12",
    ],
    packages: ["complete-body-checkup"],
    priority: 5,
  },

  {
    id: "poor-sleep",
    label: "Poor Sleep",
    bodyAreas: ["general"],
    tests: ["vitamin-d", "vitamin-b12"],
    packages: ["vitamin-screening"],
    priority: 2,
  },

  {
    id: "hair-breakage",
    label: "Hair Breakage",
    bodyAreas: ["thyroid"],
    tests: ["thyroid-profile", "ferritin"],
    packages: ["hair-wellness"],
    priority: 3,
  },

  {
    id: "brittle-nails",
    label: "Brittle Nails",
    bodyAreas: ["blood", "thyroid"],
    tests: ["ferritin", "cbc", "thyroid-profile"],
    packages: ["hair-wellness"],
    priority: 3,
  },

  // Women's Health

  {
    id: "irregular-periods",
    label: "Irregular Periods",
    bodyAreas: ["women", "thyroid"],
    tests: ["thyroid-profile", "cbc"],
    packages: ["women-health"],
    priority: 5,
  },

  {
    id: "heavy-periods",
    label: "Heavy Periods",
    bodyAreas: ["women", "blood"],
    tests: ["cbc", "ferritin", "iron-profile"],
    packages: ["women-health"],
    priority: 5,
  },

  {
    id: "missed-period",
    label: "Missed Period",
    bodyAreas: ["women"],
    tests: ["pregnancy-test", "thyroid-profile"],
    packages: ["women-health"],
    priority: 5,
  },

  {
    id: "pelvic-pain",
    label: "Pelvic Pain",
    bodyAreas: ["women"],
    tests: ["cbc", "crp"],
    packages: ["women-health"],
    priority: 4,
  },

  // Men's Health

  {
    id: "erectile-dysfunction",
    label: "Erectile Dysfunction",
    bodyAreas: ["men"],
    tests: ["hba1c", "lipid-profile"],
    packages: ["men-health"],
    priority: 4,
  },

  {
    id: "low-libido",
    label: "Low Libido",
    bodyAreas: ["men", "thyroid"],
    tests: ["thyroid-profile"],
    packages: ["men-health"],
    priority: 3,
  },

  {
    id: "frequent-night-urination",
    label: "Frequent Night Urination",
    bodyAreas: ["men", "kidney"],
    tests: ["urine-routine", "kft", "psa"],
    packages: ["men-health", "kidney-care"],
    priority: 4,
  },

  {
    id: "difficulty-urinating",
    label: "Difficulty Urinating",
    bodyAreas: ["men", "kidney"],
    tests: ["urine-routine", "psa"],
    packages: ["men-health"],
    priority: 4,
  },

  {
    id: "prostate-discomfort",
    label: "Prostate Discomfort",
    bodyAreas: ["men"],
    tests: ["psa"],
    packages: ["men-health"],
    priority: 4,
  }

];
export const tests = {
  cbc: {
    name: "Complete Blood Count (CBC)",
    slug: "cbc-test",
    price: 399,
  },

  hba1c: {
    name: "HbA1c",
    slug: "hba1c-test",
    price: 699,
  },

  "thyroid-profile": {
    name: "Thyroid Profile",
    slug: "thyroid-profile-test",
    price: 899,
  },
};
export const packages = {
  "complete-body-checkup": {
    name: "Complete Body Checkup",
    price: 2499,
  },

  "heart-health": {
    name: "Heart Health Package",
    price: 1999,
  },
};