"use client";

import { trackPhoneClick } from "@/app/lib/tracking";
import SITE_CONFIG from "@/app/SITE_CONFIG";

export default function TrackedPhoneLink({
  phone,
  tracking = "phone-call",
  location,
  children,
  className,
  onClick,
  ...props
}) {
  // Always sanitize phone number and ensure it falls back to SITE_CONFIG.phone
  let rawPhone = phone || SITE_CONFIG?.phone || "+918968038602";
  if (
    typeof rawPhone !== "string" ||
    rawPhone.trim() === "" ||
    rawPhone === "undefined" ||
    rawPhone === "null"
  ) {
    rawPhone = SITE_CONFIG?.phone || "+918968038602";
  }

  // Strip any accidental 'tel:' prefix
  const cleanPhone = rawPhone.replace(/^tel:/i, "").trim();

  const handleClick = (e) => {
    trackPhoneClick(tracking || location || "phone-call");
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={`tel:${cleanPhone}`}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children || cleanPhone}
    </a>
  );
}
