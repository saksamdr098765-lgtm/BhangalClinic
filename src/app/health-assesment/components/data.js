export const symptoms = [
  {
    id: "fatigue",
    label: "Fatigue",
    bodyAreas: ["general", "blood", "thyroid"],
    tests: [
      "cbc-test",
      "thyroid-profile",
      "vitamin-d-test",
      "vitamin-b12-test",
      "hba1c-test",
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
    bodyAreas: ["general", "blood", "bones"],
    tests: [
      "cbc-test",
      "vitamin-b12-test",
      "vitamin-d-test",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-basic-profile",
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "fever",
    label: "Fever",
    bodyAreas: ["general", "blood"],
    tests: [
      "cbc-test",
      "esr-test",
      "malarial-parasite",
      "widal-test",
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
      "malarial-parasite",
      "widal-test",
      "esr-test",
    ],
    packages: [
      "heat-shield-basic",
    ],
    priority: 4,
  },

  {
    id: "body-pain",
    label: "Body Pain",
    bodyAreas: ["general", "bones"],
    tests: [
      "cbc-test",
      "esr-test",
      "vitamin-d-test",
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
      "esr-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "loss-of-appetite",
    label: "Loss of Appetite",
    bodyAreas: ["general", "digestive", "liver"],
    tests: [
      "liver-function-test",
      "cbc-test",
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
      "hba1c-test",
      "cbc-test",
      "liver-function-test",
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
      "hba1c-test",
      "lipid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "headache",
    label: "Headache",
    bodyAreas: ["head"],
    tests: [
      "cbc-test",
      "esr-test",
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
      "vitamin-b12-test",
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
      "vitamin-b12-test",
      "hba1c-test",
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
      "hba1c-test",
      "blood-sugar-fasting",
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
      "vitamin-b12-test",
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
      "hba1c-test",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "fainting",
    label: "Fainting",
    bodyAreas: ["head", "heart"],
    tests: [
      "cbc-test",
      "ecg-test",
      "lipid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "hair-loss",
    label: "Hair Loss",
    bodyAreas: ["thyroid", "general"],
    tests: [
      "thyroid-profile",
      "vitamin-d-test",
      "vitamin-b12-test",
      "cbc-test",
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
      "vitamin-d-test",
      "vitamin-b12-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "dry-skin",
    label: "Dry Skin",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "vitamin-d-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "cold-intolerance",
    label: "Feeling Cold Frequently",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },
    {
    id: "chest-pain",
    label: "Chest Pain",
    bodyAreas: ["heart", "lungs"],
    tests: [
      "ecg-test",
      "lipid-profile",
      "cbc-test",
    ],
    packages: [
      "bhangal-master-health-screen",
      "bcl-med-health-pro-package",
    ],
    priority: 5,
  },

  {
    id: "palpitations",
    label: "Palpitations",
    bodyAreas: ["heart", "thyroid"],
    tests: [
      "ecg-test",
      "thyroid-profile",
      "lipid-profile",
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
      "lipid-profile",
      "kidney-function-test",
      "hba1c-test",
    ],
    packages: [
      "bcl-med-health-pro-package",
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
      "kidney-function-test",
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
      "ecg-test",
      "thyroid-profile",
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
      "ecg-test",
      "cbc-test",
      "thyroid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "shortness-of-breath",
    label: "Shortness of Breath",
    bodyAreas: ["heart", "lungs", "blood"],
    tests: [
      "cbc-test",
      "ecg-test",
    ],
    packages: [
      "bhangal-master-health-screen",
      "bcl-med-health-pro-package",
    ],
    priority: 5,
  },

  {
    id: "leg-swelling",
    label: "Leg Swelling",
    bodyAreas: ["heart", "kidney", "legs"],
    tests: [
      "kidney-function-test",
      "cbc-test",
      "ecg-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "persistent-cough",
    label: "Persistent Cough",
    bodyAreas: ["lungs"],
    tests: [
      "cbc-test",
      "esr-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "dry-cough",
    label: "Dry Cough",
    bodyAreas: ["lungs"],
    tests: [
      "cbc-test",
      "esr-test",
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
      "esr-test",
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
      "ecg-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-master-health-screen",
      "bcl-med-health-pro-package",
    ],
    priority: 5,
  },

  {
    id: "wheezing",
    label: "Wheezing",
    bodyAreas: ["lungs"],
    tests: [
      "cbc-test",
      "esr-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "chest-tightness",
    label: "Chest Tightness",
    bodyAreas: ["lungs", "heart"],
    tests: [
      "ecg-test",
      "cbc-test",
      "lipid-profile",
    ],
    packages: [
      "bcl-med-health-pro-package",
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "coughing-blood",
    label: "Coughing Blood",
    bodyAreas: ["lungs"],
    tests: [
      "cbc-test",
      "esr-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 5,
  },
    {
    id: "stomach-pain",
    label: "Stomach Pain",
    bodyAreas: ["digestive", "liver"],
    tests: [
      "liver-function-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
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
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "heartburn",
    label: "Heartburn",
    bodyAreas: ["digestive"],
    tests: [
      "liver-function-test",
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
      "kidney-function-test",
    ],
    packages: [
      "heat-shield-basic",
    ],
    priority: 4,
  },

  {
    id: "diarrhea",
    label: "Diarrhea",
    bodyAreas: ["digestive"],
    tests: [
      "cbc-test",
      "routine-urine-analysis",
    ],
    packages: [
      "heat-shield-basic",
    ],
    priority: 4,
  },

  {
    id: "constipation",
    label: "Constipation",
    bodyAreas: ["digestive", "thyroid"],
    tests: [
      "thyroid-profile",
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
      "liver-function-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 2,
  },

  {
    id: "blood-in-stool",
    label: "Blood in Stool",
    bodyAreas: ["digestive", "blood"],
    tests: [
      "cbc-test",
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
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "indigestion",
    label: "Indigestion",
    bodyAreas: ["digestive"],
    tests: [
      "liver-function-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "burning-urination",
    label: "Burning Urination",
    bodyAreas: ["kidney"],
    tests: [
      "routine-urine-analysis",
      "urine-culture-sensitivity",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "frequent-urination",
    label: "Frequent Urination",
    bodyAreas: ["kidney", "diabetes"],
    tests: [
      "routine-urine-analysis",
      "kidney-function-test",
      "hba1c-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "blood-in-urine",
    label: "Blood in Urine",
    bodyAreas: ["kidney"],
    tests: [
      "routine-urine-analysis",
      "urine-culture-sensitivity",
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
      "routine-urine-analysis",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "lower-back-pain",
    label: "Lower Back Pain",
    bodyAreas: ["kidney", "bones"],
    tests: [
      "kidney-function-test",
      "cbc-test",
      "vitamin-d-test",
    ],
    packages: [
      "bhangal-master-health-screen",
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "swollen-feet",
    label: "Swollen Feet",
    bodyAreas: ["kidney", "heart", "legs"],
    tests: [
      "kidney-function-test",
      "cbc-test",
      "lipid-profile",
    ],
    packages: [
      "bhangal-master-health-screen",
      "bcl-med-health-pro-package",
    ],
    priority: 5,
  },

  {
    id: "yellow-eyes",
    label: "Yellow Eyes",
    bodyAreas: ["liver"],
    tests: [
      "liver-function-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "yellow-skin",
    label: "Yellow Skin",
    bodyAreas: ["liver"],
    tests: [
      "liver-function-test",
      "cbc-test",
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
      "liver-function-test",
      "routine-urine-analysis",
      "kidney-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "abdominal-swelling",
    label: "Abdominal Swelling",
    bodyAreas: ["liver", "digestive"],
    tests: [
      "liver-function-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "liver-pain",
    label: "Pain in Upper Right Abdomen",
    bodyAreas: ["liver"],
    tests: [
      "liver-function-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "itchy-skin",
    label: "Itchy Skin",
    bodyAreas: ["liver", "blood"],
    tests: [
      "liver-function-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "easy-bruising",
    label: "Easy Bruising",
    bodyAreas: ["blood", "liver"],
    tests: [
      "cbc-test",
      "liver-function-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },
    {
    id: "joint-pain",
    label: "Joint Pain",
    bodyAreas: ["bones"],
    tests: [
      "vitamin-d-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "bone-pain",
    label: "Bone Pain",
    bodyAreas: ["bones"],
    tests: [
      "vitamin-d-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "muscle-weakness",
    label: "Muscle Weakness",
    bodyAreas: ["bones", "legs"],
    tests: [
      "vitamin-d-test",
      "vitamin-b12-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "muscle-cramps",
    label: "Muscle Cramps",
    bodyAreas: ["bones", "legs"],
    tests: [
      "vitamin-d-test",
      "vitamin-b12-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 4,
  },

  {
    id: "back-pain",
    label: "Back Pain",
    bodyAreas: ["bones", "legs"],
    tests: [
      "vitamin-d-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "leg-pain",
    label: "Leg Pain",
    bodyAreas: ["legs", "bones"],
    tests: [
      "vitamin-d-test",
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "calf-pain",
    label: "Calf Pain",
    bodyAreas: ["legs"],
    tests: [
      "cbc-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "restless-legs",
    label: "Restless Legs",
    bodyAreas: ["legs"],
    tests: [
      "vitamin-b12-test",
      "vitamin-d-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "numb-legs",
    label: "Numbness in Legs",
    bodyAreas: ["legs"],
    tests: [
      "vitamin-b12-test",
      "hba1c-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "pale-skin",
    label: "Pale Skin",
    bodyAreas: ["blood"],
    tests: [
      "cbc-test",
      "vitamin-b12-test",
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
      "cbc-test",
      "vitamin-b12-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 5,
  },

  {
    id: "frequent-infections",
    label: "Frequent Infections",
    bodyAreas: ["blood", "general"],
    tests: [
      "cbc-test",
      "esr-test",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 5,
  },

  {
    id: "heat-intolerance",
    label: "Feeling Hot Frequently",
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
    id: "mood-changes",
    label: "Mood Changes",
    bodyAreas: ["thyroid", "head"],
    tests: [
      "thyroid-profile",
      "vitamin-b12-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  {
    id: "excessive-thirst",
    label: "Excessive Thirst",
    bodyAreas: ["general", "kidney"],
    tests: [
      "hba1c-test",
      "blood-sugar-fasting",
      "blood-sugar-pp",
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
      "hba1c-test",
      "blood-sugar-fasting",
    ],
    packages: [
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "frequent-fatigue",
    label: "Always Feeling Tired",
    bodyAreas: ["general", "blood", "thyroid"],
    tests: [
      "cbc-test",
      "thyroid-profile",
      "vitamin-d-test",
      "vitamin-b12-test",
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
      "vitamin-d-test",
      "vitamin-b12-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 2,
  },

  {
    id: "hair-breakage",
    label: "Hair Breakage",
    bodyAreas: ["thyroid"],
    tests: [
      "thyroid-profile",
      "vitamin-d-test",
      "vitamin-b12-test",
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
      "thyroid-profile",
      "vitamin-b12-test",
    ],
    packages: [
      "bhangal-basic-profile",
    ],
    priority: 3,
  },

  // Women's Health

  {
    id: "irregular-periods",
    label: "Irregular Periods",
    bodyAreas: ["women", "thyroid"],
    tests: [
      "thyroid-profile",
      "cbc-test",
    ],
    packages: [
      "bcl-female-4-package",
    ],
    priority: 5,
  },

  {
    id: "heavy-periods",
    label: "Heavy Periods",
    bodyAreas: ["women", "blood"],
    tests: [
      "cbc-test",
      "vitamin-b12-test",
    ],
    packages: [
      "bcl-female-4-package",
    ],
    priority: 5,
  },

  {
    id: "missed-period",
    label: "Missed Period",
    bodyAreas: ["women"],
    tests: [
      "thyroid-profile",
    ],
    packages: [
      "bcl-female-4-package",
    ],
    priority: 5,
  },

  {
    id: "pelvic-pain",
    label: "Pelvic Pain",
    bodyAreas: ["women"],
    tests: [
      "cbc-test",
    ],
    packages: [
      "bcl-female-4-package",
    ],
    priority: 4,
  },

  // Men's Health

  {
    id: "erectile-dysfunction",
    label: "Erectile Dysfunction",
    bodyAreas: ["men"],
    tests: [
      "hba1c-test",
      "lipid-profile",
    ],
    packages: [
      "bcl-med-pro-65-package",
    ],
    priority: 4,
  },

  {
    id: "low-libido",
    label: "Low Libido",
    bodyAreas: ["men", "thyroid"],
    tests: [
      "thyroid-profile",
      "vitamin-d-test",
    ],
    packages: [
      "bcl-med-pro-65-package",
    ],
    priority: 3,
  },

  {
    id: "frequent-night-urination",
    label: "Frequent Night Urination",
    bodyAreas: ["men", "kidney"],
    tests: [
      "routine-urine-analysis",
      "kidney-function-test",
      "hba1c-test",
    ],
    packages: [
      "bcl-med-pro-65-package",
      "bhangal-master-health-screen",
    ],
    priority: 4,
  },

  {
    id: "difficulty-urinating",
    label: "Difficulty Urinating",
    bodyAreas: ["men", "kidney"],
    tests: [
      "routine-urine-analysis",
      "kidney-function-test",
    ],
    packages: [
      "bcl-med-pro-65-package",
    ],
    priority: 4,
  },

  {
    id: "prostate-discomfort",
    label: "Prostate Discomfort",
    bodyAreas: ["men"],
    tests: [
      "routine-urine-analysis",
      "cbc-test",
    ],
    packages: [
      "bcl-med-pro-65-package",
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

  "thyroid-profile": {
    name: "Thyroid Profile",
    slug: "thyroid-profile",
    price: 360,
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

  "hba1c-test": {
    name: "HbA1c Test",
    slug: "hba1c-test",
    price: 450,
  },

  "blood-sugar-fasting": {
    name: "Blood Sugar (Fasting)",
    slug: "blood-sugar-fasting",
    price: 80,
  },

  "blood-sugar-pp": {
    name: "Blood Sugar (PP)",
    slug: "blood-sugar-pp",
    price: 80,
  },

  "vitamin-d-test": {
    name: "Vitamin D Test",
    slug: "vitamin-d-test",
    price: 850,
  },

  "vitamin-b12-test": {
    name: "Vitamin B12 Test",
    slug: "vitamin-b12-test",
    price: 700,
  },

  "routine-urine-analysis": {
    name: "Routine Urine Analysis",
    slug: "routine-urine-analysis",
    price: 110,
  },

  "urine-culture-sensitivity": {
    name: "Urine Culture & Sensitivity",
    slug: "urine-culture-sensitivity",
    price: 350,
  },

  "widal-test": {
    name: "Widal Test",
    slug: "widal-test",
    price: 200,
  },

  "malarial-parasite": {
    name: "Malarial Parasite Test",
    slug: "malarial-parasite",
    price: 150,
  },

  "esr-test": {
    name: "ESR Test",
    slug: "esr-test",
    price: 90,
  },

  "ecg-test": {
    name: "ECG Test",
    slug: "ecg-test",
    price: 250,
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