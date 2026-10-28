import {
  FiStar,
  FiCheckCircle,
  FiShield,
  FiClock,
  FiHome,
  FiExternalLink,
} from "react-icons/fi";

import {
  FaMicroscope,
  FaUserDoctor,
} from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import TrackingLink from "./TrackingLink";
import SITE_CONFIG from "../SITE_CONFIG";

const testimonials = [
  {
    name: "Gurpreet Singh",
    location: "Garhshankar",
    service: "Google Review",
    text:
      "Very professional Laboratory with excellent customer service.",
  },
  {
    name: "Amrik Bhangal",
    location: "Garhshankar",
    service: "Google Review",
    text:
      "Excellent service and very professional staff.",
  },
  {
    name: "Jaswinder Kumar",
    location: "Garhshankar",
    service: "Google Review",
    text:
      "Great laboratory with very good, cooperative staff and fast reports.",
  },
];

const stats = [
  {
    icon: FaMicroscope,
    value: "15K+",
    label: "Patients Served",
  },
  {
    icon: FiShield,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: FiHome,
    value: "Home",
    label: "Sample Collection",
  },
  {
    icon: FiClock,
    value: "24-48h",
    label: "Report Delivery",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
      {/* Medical Background */}
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-sky-100/50 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-teal-100/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            <FaGoogle className="text-blue-600" />
            Verified Google Reviews
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Trusted Healthcare
            <span className="block text-[#0F6CBD]">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Thousands of patients trust us for accurate diagnostics, home collection
            and reliable healthcare services.
          </p>
        </div>

        {/* Medical Trust Stats */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
                  <Icon className="text-[#0F6CBD]" size={22} />
                </div>

                <span className="mt-3 block text-xl font-black text-slate-900">
                  {item.value}
                </span>

                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Patient Reviews */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar
                      key={i}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FaGoogle size={14} />
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                "{item.text}"
              </p>

              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                <FiCheckCircle className="text-teal-600" />
                {item.service}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-bold text-[#0F6CBD]">
                  {item.name[0]}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View on Google Maps Link */}
        <div className="mt-12 text-center">
          <TrackingLink
            href={SITE_CONFIG.googleMaps.place || SITE_CONFIG.googleMaps.review}
            target="_blank"
            rel="noopener noreferrer"
            tracking="home-google-reviews-view"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
          >
            <FaGoogle className="text-blue-600" />
            <span>Read More Google Reviews</span>
            <FiExternalLink className="text-slate-400" />
          </TrackingLink>
        </div>
      </div>
    </section>
  );
}