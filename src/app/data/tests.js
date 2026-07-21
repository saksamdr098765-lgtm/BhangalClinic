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
import { GiKidneys } from "react-icons/gi";
export const tests = [
  {
    slug: "cbc-test",
    name: "Complete Blood Count",
    shortName: "CBC Test",
    category: "Blood Test",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 24,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Detects anemia, infections and blood disorders through a complete blood analysis.",
    price: 250,
    reportTime: "24 Hours",
  },

  {
    slug: "thyroid-profile",
    name: "Thyroid Profile",
    shortName: "T3 • T4 • TSH",
    category: "Hormone Test",
    organ: "Thyroid",
    sampleType: "Blood",
    parameterCount: 3,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Evaluates thyroid hormone levels to diagnose hypo and hyperthyroidism.",
    price: 360,
    reportTime: "24 Hours",
  },

  {
    slug: "liver-function-test",
    name: "Liver Function Test",
    shortName: "LFT",
    category: "Organ Function",
    organ: "Liver",
    sampleType: "Blood",
    parameterCount: 12,
    fasting: true,
    homeCollection: true,
    popular: true,
    description:
      "Measures liver enzymes and proteins to evaluate overall liver health.",
    price: 350,
    reportTime: "24 Hours",
  },

  {
    slug: "routine-urine-analysis",
    name: "Routine Urine Analysis",
    shortName: "Urine Routine",
    category: "Urine Test",
    organ: "Kidney",
    sampleType: "Urine",
    parameterCount: 18,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Screens for urinary infections, kidney disorders and diabetes.",
    price: 110,
    reportTime: "24 Hours",
  },

  {
    slug: "urine-culture-sensitivity",
    name: "Urine Culture & Sensitivity",
    shortName: "Culture Test",
    category: "Urine Test",
    organ: "Kidney",
    sampleType: "Urine",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Identifies bacteria causing urinary infections and suitable antibiotics.",
    price: 350,
    reportTime: "48 Hours",
  },

  {
    slug: "widal-test",
    name: "Widal Test",
    shortName: "Typhoid Test",
    category: "Infection",
    organ: "Immune",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Detects antibodies against Salmonella bacteria causing typhoid fever.",
    price: 200,
    reportTime: "24 Hours",
  },

  {
    slug: "malarial-parasite",
    name: "Malarial Parasite Test",
    shortName: "Malaria Test",
    category: "Infection",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Detects malaria parasites in blood for rapid diagnosis.",
    price: 150,
    reportTime: "24 Hours",
  },

  {
    slug: "esr-test",
    name: "ESR Test",
    shortName: "Inflammation Test",
    category: "Inflammation",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Measures inflammation levels associated with infections and autoimmune disorders.",
    price: 90,
    reportTime: "24 Hours",
  },

  {
    slug: "vitamin-d-b12-combo",
    name: "Vitamin D & B12",
    shortName: "Vitamin Profile",
    category: "Vitamin Test",
    organ: "Nutrition",
    sampleType: "Blood",
    parameterCount: 2,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Checks Vitamin D and B12 deficiencies affecting bones, nerves and immunity.",
    price: 1280,
    reportTime: "24 Hours",
  },

  {
    slug: "fever-screen-urine-analysis",
    name: "Fever Screening Package",
    shortName: "Fever Panel",
    category: "Health Package",
    organ: "General Health",
    sampleType: "Blood + Urine",
    parameterCount: 15,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Comprehensive investigations to identify common causes of fever.",
    price: 900,
    reportTime: "24 Hours",
  },

  {
    slug: "heat-shield-basic",
    name: "Heat Shield Basic",
    shortName: "Preventive Package",
    category: "Health Package",
    organ: "General Health",
    sampleType: "Blood",
    parameterCount: 22,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Preventive health package to monitor hydration, kidney and liver health.",
    price: 960,
    reportTime: "24 Hours",
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

    cardBg:
      "bg-gradient-to-br from-red-50 via-white to-red-100",

    border:
      "hover:border-red-200",

    glow:
      "hover:shadow-red-100",
  },

  Heart: {
    icon: FaHeartPulse,

    color: "rose",

    iconBg: "bg-rose-100",
    iconText: "text-rose-600",

    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",

    cardBg:
      "bg-gradient-to-br from-rose-50 via-white to-rose-100",

    border:
      "hover:border-rose-200",

    glow:
      "hover:shadow-rose-100",
  },

  Kidney: {
    icon: GiKidneys,

    color: "cyan",

    iconBg: "bg-cyan-100",
    iconText: "text-cyan-600",

    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-700",

    cardBg:
      "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",

    border:
      "hover:border-cyan-200",

    glow:
      "hover:shadow-cyan-100",
  },

  Liver: {
    icon: FaBottleDroplet,

    color: "emerald",

    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",

    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",

    cardBg:
      "bg-gradient-to-br from-emerald-50 via-white to-emerald-100",

    border:
      "hover:border-emerald-200",

    glow:
      "hover:shadow-emerald-100",
  },

  Thyroid: {
    icon: FaDna,

    color: "indigo",

    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",

    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",

    cardBg:
      "bg-gradient-to-br from-indigo-50 via-white to-indigo-100",

    border:
      "hover:border-indigo-200",

    glow:
      "hover:shadow-indigo-100",
  },

  Immune: {
    icon: FaShieldVirus,

    color: "orange",

    iconBg: "bg-orange-100",
    iconText: "text-orange-600",

    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",

    cardBg:
      "bg-gradient-to-br from-orange-50 via-white to-orange-100",

    border:
      "hover:border-orange-200",

    glow:
      "hover:shadow-orange-100",
  },

  Infection: {
    icon: FaVirus,

    color: "amber",

    iconBg: "bg-amber-100",
    iconText: "text-amber-600",

    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",

    cardBg:
      "bg-gradient-to-br from-amber-50 via-white to-amber-100",

    border:
      "hover:border-amber-200",

    glow:
      "hover:shadow-amber-100",
  },

  Nutrition: {
    icon: FaCapsules,

    color: "yellow",

    iconBg: "bg-yellow-100",
    iconText: "text-yellow-700",

    badgeBg: "bg-yellow-50",
    badgeText: "text-yellow-700",

    cardBg:
      "bg-gradient-to-br from-yellow-50 via-white to-yellow-100",

    border:
      "hover:border-yellow-200",

    glow:
      "hover:shadow-yellow-100",
  },

  Brain: {
    icon: FaBrain,

    color: "violet",

    iconBg: "bg-violet-100",
    iconText: "text-violet-600",

    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",

    cardBg:
      "bg-gradient-to-br from-violet-50 via-white to-violet-100",

    border:
      "hover:border-violet-200",

    glow:
      "hover:shadow-violet-100",
  },

  Bone: {
    icon: FaBone,

    color: "stone",

    iconBg: "bg-stone-100",
    iconText: "text-stone-600",

    badgeBg: "bg-stone-50",
    badgeText: "text-stone-700",

    cardBg:
      "bg-gradient-to-br from-stone-50 via-white to-stone-100",

    border:
      "hover:border-stone-200",

    glow:
      "hover:shadow-stone-100",
  },

  General: {
    icon: FaStethoscope,

    color: "blue",

    iconBg: "bg-blue-100",
    iconText: "text-blue-600",

    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",

    cardBg:
      "bg-gradient-to-br from-blue-50 via-white to-blue-100",

    border:
      "hover:border-blue-200",

    glow:
      "hover:shadow-blue-100",
  },
};

export const defaultTheme = {
  icon: FaVials,

  iconBg: "bg-slate-100",

  iconText: "text-slate-600",

  badgeBg: "bg-slate-100",

  badgeText: "text-slate-700",

  cardBg:
    "bg-gradient-to-br from-slate-50 via-white to-slate-100",

  border:
    "hover:border-slate-200",

  glow:
    "hover:shadow-slate-100",
};