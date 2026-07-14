import React from 'react'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import FAQ from './components/FAQ'
import SectionBackground from '../components/SectionBackground'
import { contactSchema } from '@/schema/contactSchema'
import SITE_CONFIG from "@/app/SITE_CONFIG";

export const metadata = {
  title: "Contact Bhangal Clinical Laboratories & ECG Center | Book Blood Tests",

  description:
    "Contact Bhangal Clinical Laboratories & ECG Center in Garhshankar to book blood tests, ECG, health checkups, and home sample collection. Call, WhatsApp, or book online.",

  keywords: [
    "Contact Bhangal Clinical Laboratories",
    "Blood Test Booking Garhshankar",
    "ECG Center Garhshankar",
    "Home Sample Collection Garhshankar",
    "Pathology Lab Contact",
    "Diagnostic Centre Garhshankar",
    "Blood Test Near Me",
    "Clinical Laboratory Punjab",
  ],

  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },

  openGraph: {
    title: "Contact Bhangal Clinical Laboratories & ECG Center",
    description:
      "Book blood tests, ECG services, full body checkups, and home sample collection with Bhangal Clinical Laboratories & ECG Center.",

    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Bhangal Clinical Laboratories & ECG Center",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Bhangal Clinical Laboratories & ECG Center",
    description:
      "Contact us to book blood tests, ECG, home sample collection, and health packages in Garhshankar.",
    images: [SITE_CONFIG.ogImage],
  },
};
export default function page() {
  return (
    <div>
       {contactSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <SectionBackground>
      <Hero></Hero>
      <BookingForm></BookingForm>
      <FAQ></FAQ>
     </SectionBackground>
    </div>
  )
}
