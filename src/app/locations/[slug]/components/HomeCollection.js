import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiHome,
  FiArrowRight,
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiShield,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeCollection({ location }) {
  const benefits = [
    "Convenient Home Visits",
    "Trained Phlebotomists",
    "Sterile Collection",
    "Fast Digital Reports",
    "Affordable Pricing",
    "Safe Transportation",
  ];

  const steps = [
    {
      icon: FiCalendar,
      title: "Book Appointment",
      text: "Choose a date & time for sample collection.",
    },
    {
      icon: FiHome,
      title: "Home Visit",
      text: "Phlebotomist collects your sample at home.",
    },
    {
      icon: FiShield,
      title: "Safe Processing",
      text: "Secure transport to lab for testing.",
    },
    {
      icon: FiClock,
      title: "Receive Reports",
      text: "Fast digital & print report delivery.",
    },
  ];
if(!location.homeCollection) return
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-10">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              <FiHome className="h-3.5 w-3.5" />
              Home Sample Collection
            </span>

            <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Home Blood Sample Collection in {location.city}
            </h2>

            <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
              Skip the hassle of visiting the lab. Our trained phlebotomists collect blood samples safely from your home with strict hygiene standards.
            </p>

            {/* Benefits (2-column compact grid) */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 shadow-2xs"
                >
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-xs font-medium text-slate-800 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <TrackedWhatsappLink
                text={`Hi, I want to book Home Sample Collection in ${location.city}.`}
                location={`location-home-collection-whatsapp-${location.city}`}
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
              >
                <FaWhatsapp className="text-base" />
                Book via WhatsApp
              </TrackedWhatsappLink>

              <TrackingLink
                href="/services/home-sample-collection"
                tracking={`location-home-collection-learn-more-${location.city}`}
                className="inline-flex items-center gap-2 rounded-xl border border-sky-600 bg-sky-50 px-5 py-3 text-xs font-bold text-sky-700 transition hover:bg-sky-600 hover:text-white sm:text-sm"
              >
                Learn More
                <FiArrowRight />
              </TrackingLink>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-4 text-white shadow-xl sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <FiHome className="h-6 w-6" />
            </div>

            <h3 className="mt-3 text-lg font-bold sm:text-xl">
              How It Works
            </h3>

            <div className="mt-4 space-y-2.5">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex gap-3 rounded-xl bg-white/10 p-2.5 backdrop-blur"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-white sm:text-sm">
                        {step.title}
                      </h4>
                      <p className="mt-0.5 text-[11px] text-sky-100 leading-4">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}