import TrackedLink from "./TrackedLink";
import TrackedPhoneLink from "./TrackedPhoneLink";
import MobileNav from "./MobileNav";
import Image from "next/image";

import {
  FiPhone,
  FiHeart,
  FiCalendar,
  FiActivity,
  FiInfo,
  FiMail,
  FiHome,
  FiBookOpen
} from "react-icons/fi";

import SITE_CONFIG from "../SITE_CONFIG";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: FiHome,
  },
  {
    name: "Health Packages",
    href: "/packages",
    icon: FiHeart,
  },
  {
    name: "Blog",
    href: "/blogs",
    icon: FiBookOpen,
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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 border-b border-blue-100 shadow-sm backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* LOGO */}
        <TrackedLink
          href="/"
          tracking="navbar-logo"
          className="flex items-center gap-3"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            <Image
              src={SITE_CONFIG.logo}
              fill
              sizes="48px"
              priority
              alt="Bhangal Clinical Laboratory Logo"
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
              Bhangal Clinical
            </h2>
            <p className="flex items-center gap-1 text-xs font-medium text-blue-600">
              <FiActivity size={12} />
              Diagnostic Laboratory
            </p>
          </div>
        </TrackedLink>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <TrackedLink
                key={item.name}
                href={item.href}
                tracking={`navbar-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
              >
                <Icon className="text-blue-600 transition duration-300 group-hover:scale-110" />
                {item.name}
              </TrackedLink>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <TrackedPhoneLink
            phone={SITE_CONFIG.phone}
            tracking="navbar-call-now"
            className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300"
          >
            <FiPhone className="text-blue-600" />
            Call Now
          </TrackedPhoneLink>

          <TrackedLink
            href="/contact"
            tracking="navbar-booktest"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            <FiCalendar />
            Book Test
          </TrackedLink>
        </div>

        {/* MOBILE MENU ISOLATED CLIENT COMPONENT */}
        <MobileNav phone={SITE_CONFIG.phone} />
      </div>
    </header>
  );
}