import React from 'react'
import HealthAssessmentPage from './HealthAssesmentClient'
import { healthAssessmentSchema } from '@/schema/healthAssessmentSchema'
import SITE_CONFIG from "@/app/SITE_CONFIG";

export const metadata = {
  title:
    "Health Assessment | Find the Right Blood Test | Bhangal Clinical Laboratories",

  description:
    "Choose your symptoms, body part, or illness to receive personalized blood test recommendations and book your diagnostic tests online.",

  keywords: [
    "Health Assessment",
    "Blood Test Finder",
    "Diagnostic Test Recommendation",
    "Symptoms Checker",
    "Find Blood Test",
    "Blood Test Recommendation",
    "Health Packages",
    "Pathology Lab Garhshankar",
    "Medical Test Guide",
  ],

  alternates: {
    canonical: `${SITE_CONFIG.url}/health-assesment`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Health Assessment | Bhangal Clinical Laboratories",
    description:
      "Find the right blood tests based on your symptoms, body part, or health concern.",

    url: `${SITE_CONFIG.url}/health-assesment`,

    siteName: SITE_CONFIG.name,

    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Health Assessment",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Health Assessment | Bhangal Clinical Laboratories",
    description:
      "Discover the right blood tests and health packages based on your symptoms.",
    images: [SITE_CONFIG.ogImage],
  },
};
export default function page() {
  return (
   <>
    {healthAssessmentSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
   <HealthAssessmentPage></HealthAssessmentPage>
   </>
  )
}
