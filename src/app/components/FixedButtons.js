"use client";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import SITE_CONFIG from "../SITE_CONFIG";
import GTranslate from "./Gtanslate";
import LanguageButton from "./LanguageButton";
// import trackEvent from "../Utils/Analytics";

// import trackEvent from "../utils/Analytics";

export default function FloatingButtons() {
  const { whatsapp, phone } = SITE_CONFIG;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition">
   <LanguageButton></LanguageButton>
</div>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        // onClick={()=>{ 
        //      trackEvent("whatsapp_click",{
        //       page_location:window.location.href
        //     })}
        // }
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        // onClick={()=>{ trackEvent(`phone_click`)}}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition"
      >
        <FaPhoneAlt size={22} />
      </a>
<GTranslate />
    </div>
  );
}