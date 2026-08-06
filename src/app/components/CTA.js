import TrackedLink from "./TrackedLink";
import TrackedPhoneLink from "./TrackedPhoneLink";
import {
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
  FiClock,
  FiHome,
} from "react-icons/fi";

import {
  FaHeartPulse,
  FaMicroscope,
  FaVialCircleCheck,
  FaFileMedical,
} from "react-icons/fa6";

import SITE_CONFIG from "../SITE_CONFIG";

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Medical Background */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-[140px]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <FaVialCircleCheck />
              Trusted Diagnostic Care
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Health,
              <br />
              <span className="text-blue-600">Our Priority.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Book reliable pathology tests with certified professionals, doorstep sample collection and accurate digital reports.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact"
                tracking="home-CTA-BookTEST"
                className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                <FaVialCircleCheck />
                Book Test
                <FiArrowRight />
              </TrackedLink>

              <TrackedPhoneLink
                phone={SITE_CONFIG.phone}
                tracking="home-CTa"
                className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300"
              >
                <FiPhone />
                Call Laboratory
              </TrackedPhoneLink>
            </div>

            {/* Medical Highlights */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-center">
                <FaHeartPulse className="mx-auto text-xl text-red-500" />
                <p className="mt-2 text-xs font-semibold text-slate-700">
                  Health Care
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                <FaMicroscope className="mx-auto text-xl text-blue-600" />
                <p className="mt-2 text-xs font-semibold text-slate-700">
                  Advanced Lab
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-4 text-center">
                <FaFileMedical className="mx-auto text-xl text-yellow-600" />
                <p className="mt-2 text-xs font-semibold text-slate-700">
                  Reports
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT BOOKING CARD */}
          <div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,.10)] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Diagnostic Booking</p>
                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    Home Sample Visit
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <FaVialCircleCheck className="text-2xl text-blue-600" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-blue-50 p-4">
                  <FiHome className="text-blue-600" size={22} />
                  <div>
                    <p className="text-xs text-slate-500">Service</p>
                    <p className="font-bold text-slate-900">
                      Doorstep Collection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-cyan-50 p-4">
                  <FiClock className="text-cyan-600" size={22} />
                  <div>
                    <p className="text-xs text-slate-500">Reports</p>
                    <p className="font-bold text-slate-900">
                      Fast Digital Reports
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-blue-600 p-6 text-white">
                <p className="text-sm text-blue-100">
                  Health Packages Starting From
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-4xl font-black">₹399</span>
                  <TrackedLink
                    href="/packages"
                    tracking="home-CTA-packages"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                    aria-label="View Health Packages starting from ₹399"
                  >
                    <FiArrowRight />
                  </TrackedLink>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <FiCheckCircle />
                Trusted Laboratory Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}