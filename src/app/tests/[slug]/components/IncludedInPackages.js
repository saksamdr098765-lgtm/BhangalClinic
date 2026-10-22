import TrackingLink from "@/app/components/TrackingLink";
import { FiPackage, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const TEST_PACKAGES_MAP = {
  "cbc-test": [
    {
      slug: "bhangal-basic-profile-plus",
      name: "Bhangal Basic Profile Plus",
      price: 1499,
      parameters: 55,
      description: "Includes CBC + HbA1c, Thyroid (T3, T4, TSH), Lipid, Liver, and Kidney tests with free doorstep home sample collection.",
    },
    {
      slug: "bhangal-advance-full-body-checkup",
      name: "Bhangal Advance Full Body Checkup",
      price: 2499,
      parameters: 68,
      description: "Comprehensive health checkup covering full blood picture, vital organs, Vitamin D, and metabolic screening.",
    },
    {
      slug: "bhangal-basic-profile",
      name: "Bhangal Basic Profile",
      price: 999,
      parameters: 42,
      description: "Essential wellness screening including Complete Blood Count and routine organ function markers.",
    },
  ],
  "blood-sugar-test": [
    {
      slug: "bhangal-diabetic-profile",
      name: "Bhangal Diabetic Profile",
      price: 1499,
      parameters: 45,
      description: "Specialized diabetes monitoring package including Blood Sugar, HbA1c, Urine Microalbumin, and Lipid Profile.",
    },
    {
      slug: "bhangal-basic-profile-plus",
      name: "Bhangal Basic Profile Plus",
      price: 1499,
      parameters: 55,
      description: "Complete preventive checkup including Blood Glucose, HbA1c, and vital metabolic markers.",
    },
  ],
  "widal-test": [
    {
      slug: "bhangal-fever-mini-profile",
      name: "Bhangal Fever Mini Profile",
      price: 799,
      parameters: 15,
      description: "Rapid fever diagnosis covering Widal agglutination test, CBC, Platelet count, and Urine routine.",
    },
    {
      slug: "bhangal-fever-maxi-profile",
      name: "Bhangal Fever Maxi Profile",
      price: 1499,
      parameters: 28,
      description: "Extensive fever workup including Typhoid, Malaria, Dengue screening, CBC, and Liver markers.",
    },
  ],
  "typhidot-test": [
    {
      slug: "bhangal-fever-maxi-profile",
      name: "Bhangal Fever Maxi Profile",
      price: 1499,
      parameters: 28,
      description: "Comprehensive fever assessment including Typhidot IgM/IgG and complete viral/bacterial workup.",
    },
    {
      slug: "bhangal-fever-mini-profile",
      name: "Bhangal Fever Mini Profile",
      price: 799,
      parameters: 15,
      description: "Targeted fever screen for early typhoid and acute febrile illness detection.",
    },
  ],
  "dengue-test": [
    {
      slug: "bhangal-dengue-profile",
      name: "Bhangal Dengue Profile",
      price: 1500,
      parameters: 10,
      description: "Targeted dengue workup including NS1 antigen, Dengue IgM/IgG antibodies, and CBC platelet monitoring.",
    },
    {
      slug: "bhangal-fever-maxi-profile",
      name: "Bhangal Fever Maxi Profile",
      price: 1499,
      parameters: 28,
      description: "Differential diagnosis package for acute fever, dengue, malaria, and enteric infection.",
    },
  ],
};

export default function IncludedInPackages({ testSlug, testName }) {
  const matchingPackages = TEST_PACKAGES_MAP[testSlug] || [];

  if (matchingPackages.length === 0) return null;

  return (
    <section className="bg-slate-50 py-12 sm:py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            <FiPackage className="text-blue-600" />
            Better Value Health Packages
          </span>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            Health Packages Including {testName}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Save up to 50% by choosing a comprehensive health package that includes {testName} along with essential organ screenings and free home sample collection.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {matchingPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    {pkg.parameters} Parameters
                  </span>
                  <span className="text-xl font-black text-blue-700">
                    ₹{pkg.price}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {pkg.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {pkg.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <FiCheckCircle className="shrink-0" />
                  <span>Includes {testName} + Free Home Pickup</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <TrackingLink
                  href={`/packages/${pkg.slug}`}
                  tracking={`test-page-package-${pkg.slug}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600"
                >
                  View Package Details
                  <FiArrowRight />
                </TrackingLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
