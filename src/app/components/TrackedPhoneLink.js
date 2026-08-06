"use client";

import { trackPhoneClick } from "@/app/lib/tracking";

export default function TrackedPhoneLink({
  phone,
  tracking = "phone-call",
  children,
  className,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    trackPhoneClick(tracking);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={`tel:${phone}`}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
