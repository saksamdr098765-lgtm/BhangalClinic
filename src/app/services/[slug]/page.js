


import ServiceOverview from "./components/ServiceOverview";
import ServiceIncludes from "./components/ServiceIncludes";
import ServiceProcess from "./components/ServiceProcess";
import WhyChooseLab from "./components/WhyChooseLab";
import RelatedPackages from "./components/RelatedPackages";
import RelatedBlogs from "./components/RelatedBlogs";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceCTA from "./components/ServiceCTA";
import { services } from "@/app/data/services";
import WhyServiceMatters from "./components/WhyServiceMatters";
import WhoNeedsService from "./components/WhoNeedService";
import ServiceHero from "./components/Hero";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seo.title,

    description: service.seo.description,

    keywords: service.seo.keywords,

    alternates: {
      canonical: `https://www.dkbhangallab.com/services/${service.slug}`,
    },

    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://www.dkbhangallab.com/services/${service.slug}`,
      siteName: "DK Bhangal Laboratory",
      images: [
        {
          url: service.coverImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [service.coverImage],
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
const {slug}=await params
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

 

  return (
    <>
    
      <main className="bg-white">
        <ServiceHero service={service} />

        <ServiceOverview service={service} />

        <WhyServiceMatters service={service} />

        <WhoNeedsService service={service} />

        <ServiceIncludes service={service} />

        <ServiceProcess service={service} />

        <WhyChooseLab service={service} />

        <RelatedPackages service={service} />

        <RelatedBlogs service={service} />

        <ServiceFAQ service={service} />

        <ServiceCTA />
      </main>
    </>
  );
}