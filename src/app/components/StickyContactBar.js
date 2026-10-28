"use client";

import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SITE_CONFIG from "../SITE_CONFIG";
import TrackedPhoneLink from "./TrackedPhoneLink";
import TrackedWhatsappLink from "./TrackedWhatsappLink";

export default function StickyContactBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2.5 border-t border-slate-200/90 bg-white/95 px-3 py-2.5 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur-md md:hidden"
    >
      {/* Call Button */}
      <TrackedPhoneLink
        phone={SITE_CONFIG.phone}
        location="mobile-sticky-call"
        aria-label="Call laboratory directly"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-sm transition active:scale-95"
      >
        <FiPhone size={17} className="shrink-0" />
        <span>Call Lab</span>
      </TrackedPhoneLink>

      {/* WhatsApp Button */}
      <TrackedWhatsappLink
        phone={SITE_CONFIG.whatsapp}
        location="mobile-sticky-whatsapp"
        text="Hi, I would like to book a test at Bhangal Clinical Laboratories & ECG Garhshankar."
        aria-label="Chat with laboratory on WhatsApp"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm transition active:scale-95"
      >
        <FaWhatsapp size={19} className="shrink-0 text-white" />
        <span>WhatsApp</span>
      </TrackedWhatsappLink>
    </aside>
  );
}
