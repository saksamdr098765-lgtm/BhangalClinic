"use client";

import { useState } from "react";
import TrackedLink from "./TrackedLink";
import TrackedPhoneLink from "./TrackedPhoneLink";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiCalendar, FiPhone, FiHeart, FiInfo, FiMail } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Health Packages",
    href: "/packages",
    icon: FiHeart,
  },
  {
    name: "About Us",
    href: "/about-us",
    icon: FiInfo,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FiMail,
  },
];

export default function MobileNav({ phone }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="rounded-xl border border-blue-100 bg-white p-2 lg:hidden text-slate-700"
      >
        {mobileOpen ? <HiOutlineX size={25} /> : <HiOutlineMenuAlt3 size={25} />}
      </button>

      {mobileOpen && (
        <div className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-blue-100 bg-white p-5 shadow-xl transition-all duration-300 lg:hidden">
          <div className="space-y-3">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <TrackedLink
                  key={item.name}
                  href={item.href}
                  tracking={`navbar-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 rounded-2xl bg-blue-50/50 px-4 py-4 font-semibold text-slate-700 transition hover:bg-blue-100/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="text-blue-600" />
                  </div>
                  {item.name}
                </TrackedLink>
              );
            })}

            <TrackedPhoneLink
              phone={phone}
              tracking="navbar-mobile-phone"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-blue-100 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              <FiPhone />
              Call Now
            </TrackedPhoneLink>

            <TrackedLink
              href="/contact"
              tracking="navbar-booktest-contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <FiCalendar />
              Book Test
            </TrackedLink>
          </div>
        </div>
      )}
    </>
  );
}
