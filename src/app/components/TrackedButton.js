"use client";

import { trackEvent } from "@/app/lib/tracking";

export default function TrackedButton({
  tracking,
  children,
  className,
  onClick,
  type = "button",
  ...props
}) {
  const handleClick = (e) => {
    if (tracking) {
      trackEvent(tracking);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
