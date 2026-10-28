import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import SITE_CONFIG from "../SITE_CONFIG";
import LanguageButton from "./LanguageButton";
import GTranslate from "./Gtanslate";
import TrackedWhatsappLink from "./TrackedWhatsappLink";
import TrackedPhoneLink from "./TrackedPhoneLink";

export default function FloatingButtons() {
  const { whatsapp, phone } = SITE_CONFIG;

  return (
    <div className="fixed bottom-16 right-4 z-40 flex flex-col gap-2 md:bottom-5 md:right-5 md:gap-3">
      {/* Language */}
      <LanguageButton />

      {/* WhatsApp */}
      <TrackedWhatsappLink
        phone={whatsapp}
        tracking="fixedButtons"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FaWhatsapp size={26} />
      </TrackedWhatsappLink>

      {/* Call */}
      <TrackedPhoneLink
        phone={phone}
        tracking="FixedButtons"
        aria-label="Call Now"
        className="hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FaPhoneAlt size={22} />
      </TrackedPhoneLink>

      <GTranslate />
    </div>
  );
}