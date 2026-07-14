import React from 'react'
import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import Overview from './components/Overview'
import IncludedTests from './components/IncludedTest'
import Benefits from './components/Benefits'
import Eligibility from './components/Eligibility'
import CTA from './components/CTA'
import RelatedPackages from './components/RelatedTest'
import Preparation from './components/Prepration'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import { packages } from '@/app/data/packages'
import { packageSchema } from "./schema";
import SITE_CONFIG from '@/app/SITE_CONFIG'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}
export async function generateMetadata({ params }) {
  const {slug}=await params
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${pkg.name} | Bhangal Clinical Laboratories`,

    description: pkg.description,

    alternates: {
      canonical: `${SITE_CONFIG.url}/packages/${pkg.slug}`,
    },

    openGraph: {
      title: pkg.name,
      description: pkg.description,
      url: `${SITE_CONFIG.url}/packages/${pkg.slug}`,
      images: [SITE_CONFIG.ogImage],
    },

    twitter: {
      card: "summary_large_image",
      title: pkg.name,
      description: pkg.description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}
export default async function page({params}) {
  const {slug}=await params
  const packageData=packages.find((pkg)=>pkg.slug===slug)

const schemas = packageSchema(packageData);


  if(!packageData) {
    notFound()
  } 

  return (
    <div>
      {schemas.map((schema, index) => (
  <script
    key={index}
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
))}
      <Hero pkg={packageData}></Hero>
      <QuickInfo pkg={packageData}></QuickInfo>
      <Overview pkg={packageData}></Overview>
      <IncludedTests pkg={packageData}></IncludedTests>
      <Benefits ></Benefits>
      <Eligibility></Eligibility>
      <Preparation></Preparation>
      <Process></Process>
      <WhyChooseUs></WhyChooseUs>
      <RelatedPackages></RelatedPackages>
      <FAQ ></FAQ>
      {/* <SEOContent pkg={packageData}></SEOContent> */}
    <CTA pkg={packageData}></CTA>
    </div>
  )
}
