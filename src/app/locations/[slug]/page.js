import { getLocation, locations } from "@/app/data/locations";
import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import LocationOverview from "./components/LocationOverview";
import CentralHubLinks from "./components/CentralHubLinks";
import DiagnosticServices from "./components/DiagnosticServices";
import PopularTests from "./components/PopularTests";
import WhyChooseUs from "./components/WhyChooseUs";
import HealthPackages from "./components/HealthPackages";
import HomeCollection from "./components/HomeCollection";
import AreasWeServe from "./components/AreasWeServe";
import Process from "./components/Process";
import RelatedBlogs from "./components/RelatedBlogs";
import FAQ from "./components/FAQ";
import MapSection from "./components/MapSection";
import CTA from "./components/CTA";
import { getLocationSchema } from "@/schema/locationSchema";
import SITE_CONFIG from "@/app/SITE_CONFIG";


// Static Params
export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

// Metadata
export async function generateMetadata({ params }) {
  const {slug}=await params
  const location = locations.find((location) => 
    location.slug === slug,
  )

  if (!location) {
    return {
      title: "Location Not Found | DK Bhangal Laboratory",
      description: "The requested location page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE_CONFIG.url}/locations/${location.slug}`;
  const image = `${SITE_CONFIG.url}${location.coverImage}`;

  return {
    title: location.seo.title,

    description: location.seo.description,

    keywords: location.seo.keywords,

    authors: [
      {
        name: SITE_CONFIG.name,
      },
    ],

    creator: SITE_CONFIG.name,

    publisher: SITE_CONFIG.name,

    metadataBase: new URL(SITE_CONFIG.url),

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: image,
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
      images: [image],
    },

    category: "Health",

    other: {
      "geo.region": "IN-PB",
      "geo.placename": location.city,
      "geo.position": `${SITE_CONFIG.latitude};${SITE_CONFIG.longitude}`,
      ICBM: `${SITE_CONFIG.latitude}, ${SITE_CONFIG.longitude}`,
    },
  };
}

export default async function LocationPage({ params }) {
    const {slug}=await params
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }
const locationSchema=getLocationSchema(location)

  return (
    <>
     {locationSchema.map((schema, index) => (
                <script
                  key={index}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                  }}
                />
              ))}

      <main className="overflow-hidden bg-white">
        <Hero location={location} />

        <LocationOverview location={location} />

        <CentralHubLinks location={location} />

        <DiagnosticServices location={location} />

        <PopularTests location={location} />

        <WhyChooseUs location={location} />

        <HealthPackages location={location} />

        <HomeCollection location={location} />

        <AreasWeServe location={location} />

        <Process location={location} />

        <RelatedBlogs location={location} />

        <FAQ location={location} />

        {/* <MapSection location={location} /> */}

        <CTA location={location} />
      </main>
    </>
  );
}