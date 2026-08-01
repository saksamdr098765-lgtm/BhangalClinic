import React from 'react'
import Hero from './components/Hero'
import { tests } from '@/app/data/tests'
import QuickFacts from './components/QuickFacts'
import WhyChooseUs from './components/WhyChooseUs'
import TestDetails from './components/TestDetails'
import Preparation from './components/Preparation'
import BookingProcess from './components/BookingProcess'
import PricePreview from './components/PricePreview'
import RelatedTests from './components/RelatedTest'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default async function page({params}) {
  const {slug}=await params
  const test=tests.find((test)=>test.slug===slug)
  return (
   <>
   <Hero hero={test.hero}></Hero>
   <QuickFacts quickFacts={test.quickFacts}></QuickFacts>
   <WhyChooseUs whyChooseUs={test.whyChooseUs}/>
   <TestDetails testDetails={test.testDetails}></TestDetails>
   <Preparation preparation={test.preparation}></Preparation>
   <BookingProcess bookingProcess={test.bookingProcess}></BookingProcess>
   <PricePreview pricePreview={test.pricePreview}/>
   <RelatedTests relatedTests={test.relatedTests}></RelatedTests>
   <FAQ faq={test.faq}></FAQ>
   <CTA cta={test.cta}></CTA>

   </>
  )
}
