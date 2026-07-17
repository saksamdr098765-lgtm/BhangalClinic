import React from 'react'
import Hero from './components/AboutHero'
import OurStory from './components/OurStroy'
import MedicalLeadership from './components/MedicalLeadership'
import CTA from './components/CTA'
import { aboutSchema } from '@/schema/aboutSchema'
import SITE_CONFIG from '../SITE_CONFIG'
import Founder from './components/Founder'


export const metadata = {
  title: "About Bhangal Clinical Laboratories & ECG Center",

  description:
    "Learn about Bhangal Clinical Laboratories & ECG Center, our diagnostic expertise, experienced professionals, advanced equipment, and commitment to quality healthcare.",

  alternates: {
    canonical: "/about-us",
  },

  openGraph: {
    title: "About Bhangal Clinical Laboratories & ECG Center",
    description:
      "Discover our mission, values, experienced team, and commitment to accurate diagnostic services.",
    url: `${SITE_CONFIG.url}/about-us`,
    images: [SITE_CONFIG.ogImage],
  },
};
export default function page() {
  return (
    <div>
       {aboutSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <Hero></Hero>
      <Founder></Founder>
      <OurStory></OurStory>
      {/* <MedicalLeadership></MedicalLeadership> */}
      <CTA></CTA>
    </div>
  )
}
