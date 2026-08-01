import React from 'react'
import Hero from './components/Hero'
import { prices } from '@/app/data/prices'
import PriceCard from './components/PriceCard'
import WhyChooseUs from './components/WhyChooseUs'
import BookingProcess from './components/BookingProcess'
import ServiceAreas from './components/ServiceAreas'
import FAQ from './components/FAQ'
import RelatedTests from './components/RealtedTests'
import CTA from './components/CTA'

export default async function page({params}) {
const {slug}=await params
const priceData=prices.find((price)=>price.slug===slug)
  return (
  <>
  <Hero hero={priceData.hero} priceCard={priceData.priceCard}></Hero>
  <PriceCard priceCard={priceData.priceCard} ></PriceCard>
  <WhyChooseUs trust={priceData.trust}></WhyChooseUs>
  <BookingProcess booking={priceData.booking}></BookingProcess>
  <ServiceAreas serviceAreas={priceData.serviceAreas}></ServiceAreas>
  <FAQ faqs={priceData.faqs}></FAQ>
  <RelatedTests relatedTests={priceData.relatedTests}></RelatedTests>
  <CTA cta={priceData.cta}></CTA>
  </>
  )
}
