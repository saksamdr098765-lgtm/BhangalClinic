
import PackageCard from "@/app/components/PackageCard";
import { packages } from "@/app/data/packages";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";



export default function RelatedPackages({ relatedPackages = [] }) {
  const recommended = packages.filter((pkg) =>
    relatedPackages.includes(pkg.slug)
  );

  if (!recommended.length) return null;

  return (
    <section className="mt-20">
      <div className="mb-12">
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
          Recommended Tests
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Related Health Packages
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Based on this article, these diagnostic tests and health
          packages may help you better understand your health. Please
          consult your healthcare provider before choosing any test.
        </p>
      </div>

      <div className="grid gap-6  xl:grid-cols-2">
        {recommended.map((pkg) => (
         <PackageCard
               key={pkg.id}
               pkg={pkg}
             />
        ))}
      </div>
    </section>
  );
}