import React, { Suspense } from "react";
import PackagesHero from "./components/Hero";
import PackagesPage from "./components/Packages";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import TestGrid from "./components/TestGrid";
import { packagesSchema } from "@/schema/packagesSchema";
import SITE_CONFIG from "../SITE_CONFIG";

export async function generateMetadata({ searchParams }) {
  const resolvedParams = await searchParams;

  // Catches ANY query param — tag, category, limit, testLimit, or any
  // future one you add. Only bare /packages (zero params) stays indexable.
  const isFilteredPage = Object.keys(resolvedParams || {}).length > 0;

  return {
   title: "Health Packages | Full Body Checkup Plans",

description:
  "Explore affordable health packages — full body checkups, diabetes care, thyroid & senior citizen screenings — at Bhangal Lab, Garhshankar.",
    keywords: [
      "Health Packages",
      "Full Body Checkup",
      "Preventive Health Checkup",
      "Blood Test Packages",
      "Executive Health Package",
      "Diabetes Package",
      "Thyroid Package",
      "Health Checkup Garhshankar",
      "Diagnostic Packages",
      "Pathology Lab Packages",
    ],

    // Same canonical for EVERY variant: /packages, ?tag=heart,
    // ?category=Biochemistry, ?limit=12, ?testLimit=20, and every combo.
    alternates: {
      canonical: `${SITE_CONFIG.url}/packages`,
    },

    robots: {
      index: !isFilteredPage,
      follow: true,
    },

    openGraph: {
      title: "Health Packages | Bhangal Clinical Laboratories",

      description:
        "Browse comprehensive health checkup packages with home sample collection and accurate diagnostic reports.",

      url: `${SITE_CONFIG.url}/packages`,

      siteName: SITE_CONFIG.name,

      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: "Health Packages",
        },
      ],

      locale: "en_IN",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: "Health Packages | Bhangal Clinical Laboratories",

      description:
        "Affordable preventive health checkup packages for every age group.",

      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default async function Page({ searchParams }) {
  const resolvedParams = await searchParams;

  return (
    <main>
      <Suspense fallback={null}>
        {packagesSchema.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}

        <PackagesHero searchParams={resolvedParams} />

        <PackagesPage searchParams={resolvedParams} />

        <TestGrid searchParams={resolvedParams} />

        <FAQ />

        <CTA />
      </Suspense>
    </main>
  );
}