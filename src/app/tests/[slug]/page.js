import React from "react";
import { notFound } from "next/navigation";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import { tests } from "@/app/data/tests";
import Hero from "./components/Hero";
import QuickFacts from "./components/QuickFacts";
import WhyChooseUs from "./components/WhyChooseUs";
import TestDetails from "./components/TestDetails";
import Preparation from "./components/Preparation";
import BookingProcess from "./components/BookingProcess";
import PricePreview from "./components/PricePreview";
import RelatedTests from "./components/RelatedTest";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

// Generate static routes only for published tests
export async function generateStaticParams() {
  return tests
    .filter((test) => test.status === "published")
    .map((test) => ({
      slug: test.slug,
    }));
}

// Generate SEO metadata for published tests
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = tests.find(
    (item) => item.slug === slug && item.status === "published"
  );

  if (!test) {
    return {
      title: "Test Not Found | DK Bhangal Laboratory",
      description: "The requested diagnostic test page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE_CONFIG.url}/tests/${test.slug}`;
  const title = test.seo?.title || test.name;
  const description = test.seo?.description || test.description;
  const image = test.hero?.image
    ? `${SITE_CONFIG.url}${test.hero.image}`
    : SITE_CONFIG.ogImage;

  return {
    title,
    description,
    keywords: test.seo?.keywords || [],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: test.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function TestSlugPage({ params }) {
  const { slug } = await params;
  const test = tests.find(
    (item) => item.slug === slug && item.status === "published"
  );

  if (!test) {
    notFound();
  }

  return (
    <main className="bg-white">
      <Hero hero={test.hero} />
      <QuickFacts quickFacts={test.quickFacts} />
      <WhyChooseUs whyChooseUs={test.whyChooseUs} />
      <TestDetails testDetails={test.testDetails} />
      <Preparation preparation={test.preparation} />
      <BookingProcess bookingProcess={test.bookingProcess} />
      <PricePreview pricePreview={test.pricePreview} />
      <RelatedTests relatedTests={test.relatedTests} />
      <FAQ faq={test.faq} />
      <CTA cta={test.cta} />
    </main>
  );
}
