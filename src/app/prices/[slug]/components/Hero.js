import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiShield,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero({ hero, priceCard, slug }) {
  if (!hero || !priceCard) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-6 sm:py-10 lg:py-14">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left */}
          <div>
            {hero.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-2xs">
                <FiShield className="text-sky-600" />
                {hero.badge}
              </span>
            )}

            <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {hero.title}
            </h1>

            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
              {hero.subtitle}
            </p>

            {/* Price Highlight Badge */}
            <div className="mt-4 inline-flex items-baseline gap-2 rounded-xl bg-sky-50 border border-sky-200 px-3.5 py-2 text-slate-900">
              <span className="text-xs font-semibold text-slate-500">Rate:</span>
              <span className="text-2xl font-black text-sky-600">
                ₹{priceCard.offerPrice}
              </span>
              {priceCard.actualPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{priceCard.actualPrice}
                </span>
              )}
              {priceCard.offerText && (
                <span className="ml-1 rounded-md bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-800">
                  {priceCard.offerText}
                </span>
              )}
            </div>

            {/* Highlights (2-column compact grid) */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 rounded-lg bg-white p-2 border border-slate-200 shadow-2xs">
                <FiHome className="text-sky-600 shrink-0" />
                <span className="truncate">Doorstep Collection</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-white p-2 border border-slate-200 shadow-2xs">
                <FiClock className="text-sky-600 shrink-0" />
                <span className="truncate">Report in {priceCard.reportTime}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <TrackedWhatsappLink
                text={`Hi, I want to book the "${hero.title}" test at ₹${priceCard.offerPrice}. Please share collection details.`}
                location={`price-hero-whatsapp-${slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
              >
                <FaWhatsapp className="text-base" />
                Book via WhatsApp
              </TrackedWhatsappLink>

              <TrackedPhoneLink
                location={`price-hero-phone-${slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 sm:text-sm"
              >
                Call Lab
              </TrackedPhoneLink>
            </div>
          </div>

          {/* Right Image */}
          {hero.image && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}