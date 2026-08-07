"use client";

import Link from "next/link";
import { trackPageNavigation, trackEvent } from "@/app/lib/tracking";

export default function TrackingLink({
  href,
  tracking,
  category,
  action,
  children,
  className,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    if (tracking) {
      if (typeof tracking === "string") {
        trackPageNavigation(tracking);
      } else {
        trackEvent(tracking);
      }
    } else if (category || action) {
      trackEvent(href, category || "Navigation", action || "link_click");
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
