import { tests } from "../data/tests";
import TestCard from "./TestCard";
import TrackedLink from "./TrackedLink";

const POPULAR_TESTS = [
  {
    slug: "cbc-test",
    name: "Complete Blood Count",
    shortName: "CBC Test",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 24,
    fasting: false,
    homeCollection: true,
    description: "Evaluates overall health and detects anemia, infections, leukemia, and platelet disorders.",
    price: 250,
    reportTime: "Same Day",
    status: "published",
    href: "/tests/cbc-test",
  },
  {
    slug: "blood-sugar-test",
    name: "Blood Sugar (Fasting & PP)",
    shortName: "Blood Sugar",
    organ: "Pancreas",
    sampleType: "Blood",
    parameterCount: 2,
    fasting: true,
    homeCollection: true,
    description: "Measures fasting and postprandial glucose levels to detect prediabetes and monitor diabetes.",
    price: 70,
    reportTime: "Same Day",
    status: "published",
    href: "/tests/blood-sugar-test",
  },
  {
    slug: "blood-sugar-hba1c-test",
    name: "HbA1c (Glycated Hemoglobin)",
    shortName: "HbA1c Test",
    organ: "Pancreas",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    description: "Gold standard test giving an accurate 3-month average of blood sugar levels.",
    price: 350,
    reportTime: "Same Day",
    href: "/prices/blood-sugar-hba1c-test-price-garhshankar",
  },
  {
    slug: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    shortName: "Thyroid Profile",
    organ: "Thyroid",
    sampleType: "Blood",
    parameterCount: 3,
    fasting: true,
    homeCollection: true,
    description: "Evaluates thyroid gland function, metabolism, and screens for hyper/hypothyroidism.",
    price: 400,
    reportTime: "Same Day",
    href: "/packages?search=Thyroid",
  },
  {
    slug: "lipid-profile",
    name: "Lipid Profile (Cholesterol)",
    shortName: "Lipid Profile",
    organ: "Heart",
    sampleType: "Blood",
    parameterCount: 5,
    fasting: true,
    homeCollection: true,
    description: "Comprehensive cholesterol test (HDL, LDL, Triglycerides) to evaluate heart health.",
    price: 450,
    reportTime: "Same Day",
    href: "/packages/bhangal-basic-profile-plus",
  },
  {
    slug: "ecg-test",
    name: "12-Lead Computerized ECG",
    shortName: "12-Lead ECG",
    organ: "Heart",
    sampleType: "ECG Recording",
    parameterCount: 1,
    fasting: false,
    homeCollection: false,
    description: "High-accuracy resting electrocardiogram for early detection of rhythm disorders and blockages.",
    price: 199,
    reportTime: "Immediate",
    href: "/prices/ecg-test-price-garhshankar",
  },
  {
    slug: "vitamin-d",
    name: "Vitamin D (25-OH)",
    shortName: "Vitamin D Test",
    organ: "Nutrition",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    description: "Essential screening for bone density, fatigue, joint pain, and immune function.",
    price: 900,
    reportTime: "Same Day",
    href: "/packages?search=Vitamin+D",
  },
  {
    slug: "liver-function-test",
    name: "Liver Function Test (LFT)",
    shortName: "Liver Function (LFT)",
    organ: "Liver",
    sampleType: "Blood",
    parameterCount: 6,
    fasting: true,
    homeCollection: true,
    description: "Assesses liver enzymes (SGOT, SGPT), bilirubin, and protein levels for liver health.",
    price: 500,
    reportTime: "Same Day",
    href: "/packages/bhangal-basic-profile-plus",
  },
];

export default function PopularTests() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-blue-50/40
        to-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-20
            top-10
            h-60
            w-60
            rounded-full
            bg-blue-200/30
            blur-[80px]
            sm:h-80
            sm:w-80
            sm:blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-20
            bottom-0
            h-72
            w-72
            rounded-full
            bg-cyan-200/30
            blur-[90px]
            sm:h-96
            sm:w-96
            sm:blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
              sm:text-sm
            "
          >
            Popular Tests
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:mt-4
              sm:text-4xl
              lg:text-5xl
            "
          >
            Book your test in seconds.
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-8
            "
          >
            Transparent pricing, fast reports, and convenient home sample
            collection.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-8
            grid
            gap-4
            sm:mt-12
            sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {POPULAR_TESTS.map((test) => (
            <TestCard key={test.slug} test={test} location="Home" />
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-10
            flex
            justify-center
            sm:mt-16
          "
        >
          <TrackedLink
            href="/packages#test-grid"
            tracking="Home-PopularTests-viewAll"
            className="
              w-full
              rounded-full
              border
              border-slate-300
              px-8
              py-3.5
              text-center
              font-semibold
              text-slate-700
              transition
              duration-300
              hover:bg-slate-900
              hover:text-white
              sm:w-auto
              sm:py-4
            "
          >
            View All Tests
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}