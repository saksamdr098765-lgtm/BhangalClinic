import React, { Suspense } from 'react'
import PackagesHero from './components/Hero'
import PackagesPage from './components/Packages'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import TestGrid from './components/TestGrid'
import { packagesSchema } from '@/schema/packagesSchema'
import SITE_CONFIG from '../SITE_CONFIG'

export const metadata = {
  title:
    "Health Packages | Full Body Checkups | Bhangal Clinical Laboratories",

  description:
    "Explore affordable health packages including full body checkups, diabetes care, thyroid profiles, senior citizen packages, and preventive health screenings at Bhangal Clinical Laboratories & ECG Center.",

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

  alternates: {
    canonical: `${SITE_CONFIG.url}/packages`,
  },

  robots: {
    index: true,
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

export default async function page({ searchParams }) {
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
  )
}
