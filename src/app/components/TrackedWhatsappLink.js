"use client";

import { trackWhatsAppClick } from "@/app/lib/tracking";

export default function TrackedWhatsappLink({
  phone,
  text,
  tracking = "whatsapp-click",
  children,
  className,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    trackWhatsAppClick(tracking);
    if (onClick) {
      onClick(e);
    }
  };

  const whatsappUrl = `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
