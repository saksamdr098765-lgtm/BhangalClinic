import { notFound } from "next/navigation";

import SITE_CONFIG from "@/app/SITE_CONFIG";
import { services } from "@/app/data/services";

import { getServiceSchema } from "@/schema/serviceSchema";

import ServiceHero from "./components/Hero";
import ServiceOverview from "./components/ServiceOverview";
import WhyServiceMatters from "./components/WhyServiceMatters";
import WhoNeedsService from "./components/WhoNeedService";
import ServiceIncludes from "./components/ServiceIncludes";
import ServiceProcess from "./components/ServiceProcess";
import WhyChooseLab from "./components/WhyChooseLab";
import RelatedPackages from "./components/RelatedPackages";
import RelatedBlogs from "./components/RelatedBlogs";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceCTA from "./components/ServiceCTA";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  const url = `${SITE_CONFIG.url}/services/${service.slug}`;

  return {
    title: service.seo.title,

    description: service.seo.description,

    keywords: service.seo.keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: service.seo.title,

      description: service.seo.description,

      url,

      siteName: SITE_CONFIG.name,

      type: "website",

      locale: "en_IN",

      images: [
        {
          url: `${SITE_CONFIG.url}${service.coverImage}`,

          width: 1200,

          height: 630,

          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: service.seo.title,

      description: service.seo.description,

      images: [
        `${SITE_CONFIG.url}${service.coverImage}`,
      ],
    },
  };
}

export default async function ServicePage({
  params,
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const schemas = getServiceSchema(service);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-white">
        {/* Hero */}

        <ServiceHero service={service} />

        {/* Content */}

        <ServiceOverview service={service} />

        <WhyServiceMatters service={service} />

        <WhoNeedsService service={service} />

        <ServiceIncludes service={service} />

        <ServiceProcess service={service} />

        <WhyChooseLab service={service} />

        {/* Related */}

        <RelatedPackages service={service} />

        <RelatedBlogs service={service} />

        {/* FAQ */}

        <ServiceFAQ service={service} />

        {/* CTA */}

        <ServiceCTA />
      </main>
    </>
  );
}