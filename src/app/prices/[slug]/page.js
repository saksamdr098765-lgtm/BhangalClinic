import React from "react";
import Hero from "./components/Hero";
import PriceOverview from "./components/PriceOverview";
import PriceInterlinking from "./components/PriceInterlinking";
import TestComparison from "./components/TestComparison";
import PackageComparison from "./components/PackageComparison";
import WhyGetThisTest from "./components/WhyGetThisTest";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import { notFound } from "next/navigation";
import { prices } from "@/app/data/prices";
import { getPriceSchema } from "@/schema/priceSchema";
import PriceList from "./components/PriceList";
import Overview from "./components/Overview";

export async function generateStaticParams() {
  return prices.map((price) => ({
    slug: price.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const priceData = prices.find((price)=>price.slug===slug)

  if (!priceData) return {};

  const url = `${SITE_CONFIG.url}${priceData.seo?.canonical || `/prices/${priceData.slug}`}`;
  const imagePath = priceData.hero?.image || priceData.image || SITE_CONFIG.ogImage;
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${SITE_CONFIG.url}${imagePath}`;
  const title = priceData.seo?.title || priceData.hero?.title;
  const description = priceData.seo?.description || priceData.hero?.subtitle;

  return {
    title,
    description,
    keywords: priceData.seo?.keywords || [],
    alternates: {
      canonical: url,
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
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PriceSlugPage({ params }) {
  const { slug } = await params;
  const priceData = prices.find((price)=>price.slug===slug)

  if (!priceData) {
    notFound();
  }

  const testTitle = priceData.hero?.title || priceData.seo?.title || "Blood Test";
  const priceSchemas = getPriceSchema(priceData);

  return (
    <>
      {priceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-white">
      {/* 1. Hero Section */}
      <Hero
        hero={priceData.hero}
        priceCard={priceData.priceCard}
        slug={slug}
        price={priceData}
      />
<Overview data={priceData.overview} />
<PriceList data={priceData.priceList} />
      {/* 2. Overview Section */}
      <PriceOverview
        priceCard={priceData.priceCard}
        testTitle={testTitle}
        slug={slug}
      />

      {/* Interlinking Section */}
      <PriceInterlinking priceData={priceData} />

      {/* 3. Comparison with Some Other Tests Section */}
      <TestComparison
        testTitle={testTitle}
        relatedTests={priceData.relatedTests}
        priceData={priceData}
        slug={slug}
        
      />

      {/* 4. Comparison with a Package Section */}
      <PackageComparison
        testTitle={testTitle}
        offerPrice={priceData.priceCard?.offerPrice}
        slug={slug}
        priceData={priceData}
      />

      {/* 5. Why to Get This Test & Indications Section */}
      <WhyGetThisTest
        testTitle={testTitle}
        whyGetTest={priceData.whyGetTest}
        slug={slug}
      />

      {/* 6. FAQ Section */}
      <FAQ
        faqs={priceData.faqs}
        slug={slug}
      />

      {/* 7. Book Now Test / Final CTA Banner Section */}
      <CTA
        cta={priceData.cta}
        slug={slug}
        testTitle={testTitle}
      />
      </main>
    </>
  );
}
