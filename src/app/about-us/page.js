import React from 'react'
import Hero from './components/AboutHero'
import OurStory from './components/OurStroy'
import CTA from './components/CTA'
import { aboutSchema } from '@/schema/aboutSchema'
import SITE_CONFIG from '../SITE_CONFIG'
import Founder from './components/Founder'


export const metadata = {
title: "About Us | Diagnostic Lab & ECG in Garhshankar",
// 48 chars

description:
  "Bhangal Clinical Laboratories offers accurate diagnostics in Garhshankar with NABL-quality testing, experienced staff, and home sample collection.",
// 151 chars
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
      <CTA></CTA>
    </div>
  )
}
