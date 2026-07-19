import { getLocation } from "@/app/data/locations";
import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import LocationOverview from "./components/LocationOverview";
import DiagnosticServices from "./components/DiagnosticServices";
import WhyChooseUs from "./components/WhyChooseUs";
import HealthPackages from "./components/HealthPackages";
import HomeCollection from "./components/HomeCollection";
import AreasWeServe from "./components/AreasWeServe";
import Process from "./components/Process";
import RelatedBlogs from "./components/RelatedBlogs";
import FAQ from "./components/FAQ";
import MapSection from "./components/MapSection";
import CTA from "./components/CTA";

export async function generateMetadata({ params }) {
  const location = getLocation(params.slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  const url = `https://www.dkbhangallab.com/locations/${location.slug}`;

  return {
    title: location.seo.title,

    description: location.seo.description,

    keywords: location.seo.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      url,
      type: "website",
      images: [
        {
          url: location.coverImage,
          width: 1200,
          height: 630,
          alt: location.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: location.seo.title,
      description: location.seo.description,
      images: [location.coverImage],
    },
  };
}

export default async function LocationPage({ params }) {
    const {slug}=await params
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }





  return (
    <>
    

      <main className="overflow-hidden bg-white">
        <Hero location={location} />

        <LocationOverview location={location} />

        <DiagnosticServices location={location} />

        <WhyChooseUs location={location} />

        <HealthPackages location={location} />

        <HomeCollection location={location} />

        <AreasWeServe location={location} />

        <Process location={location} />

        <RelatedBlogs location={location} />

        <FAQ location={location} />

        <MapSection location={location} />

        <CTA location={location} />
      </main>
    </>
  );
}