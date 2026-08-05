"use client";

import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import {
  trackPageNavigation,
  trackPhoneClick,
} from "@/app/lib/tracking";

export default function CTAButtons() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/contact"
        onClick={() =>
          trackPageNavigation("about-BookHealthCheckup")
        }
        className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        Book Health Checkup

        <FiArrowRight className="transition group-hover:translate-x-1" />
      </Link>

      <a
        href={`tel:${SITE_CONFIG.phone}`}
        onClick={() =>
          trackPhoneClick("about-schedule-call")
        }
        className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white/10"
      >
        <FiCalendar />

        Schedule Home Collection
      </a>
    </div>
  );
}