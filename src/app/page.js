import { homeSchema } from "@/schema/homeSchema";
import FooterCTA from "./components/CTA";
import Hero from "./components/Hero/Hero";
import Packages from "./components/Packages";
import PopularTests from "./components/PopularTest";
import SymptomAssessmentCTA from "./components/SymptomsAssesmentCta";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import SITE_CONFIG from "./SITE_CONFIG";
import PackageImageCarousel from "./components/PackageImages";
import FeaturedOrgansSection from "./components/FeaturedOrganSystem";
import LifestyleWellnessSection from "./components/LifestyleWellnessSection";
import ECGMonitor from "./components/ECGSection";
import HomeBlogsSection from "./components/HomeBlogsSection";

export const metadata = {
  title: "Blood Tests, ECG & Full Body Checkups in Garhshankar",

  description:
    "Book blood tests, ECG, full body checkups, and home sample collection with Bhangal Clinical Laboratories & ECG Center. Accurate reports, affordable pricing, and trusted diagnostic services in Garhshankar.",

  keywords: [
    "Blood Test Garhshankar",
    "ECG Center Garhshankar",
    "Diagnostic Lab Garhshankar",
    "Pathology Lab Garhshankar",
    "Home Sample Collection",
    "Full Body Checkup",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Blood Tests, ECG & Full Body Checkups in Garhshankar",
    description:
      "Book affordable blood tests, ECG, health packages, and home sample collection with Bhangal Clinical Laboratories & ECG Center.",
    url: SITE_CONFIG.url,
    images: [SITE_CONFIG.ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blood Tests, ECG & Full Body Checkups in Garhshankar",
    description:
      "Affordable pathology tests, ECG, and health packages with fast digital reports.",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedOrgansSection />
      <PopularTests />
      <HomeBlogsSection />
      <LifestyleWellnessSection />
      <Packages />
      <SymptomAssessmentCTA />
      <PackageImageCarousel />
      <ECGMonitor />
      <WhyChooseUs />
      <Testimonials />
      <FooterCTA />

      {homeSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </main>
  );
}
