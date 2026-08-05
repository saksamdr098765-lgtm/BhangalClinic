"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import SITE_CONFIG from "../SITE_CONFIG";
import LanguageButton from "./LanguageButton";
import GTranslate from "./Gtanslate";
import {
  trackPhoneClick,
  trackWhatsAppClick,
} from "../lib/tracking";

export default function FloatingButtons() {
  const { whatsapp, phone } = SITE_CONFIG;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Language */}
      <LanguageButton />

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("fixedButtons")}
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        onClick={() => trackPhoneClick("FixedButtons")}
        aria-label="Call Now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FaPhoneAlt size={22} />
      </a>

      <GTranslate />
    </div>
  );
}