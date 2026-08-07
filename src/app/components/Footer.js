import Image from "next/image";
import TrackedLink from "./TrackedLink";
import TrackingLink from "./TrackingLink";
import TrackedPhoneLink from "./TrackedPhoneLink";
import TrackedWhatsappLink from "./TrackedWhatsappLink";

import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHeart,
  FiClock,
  FiHome,
  FiShield,
} from "react-icons/fi";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import SITE_CONFIG from "../SITE_CONFIG";
import { TbDeviceLandlinePhone } from "react-icons/tb";

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
    name: "About Laboratory",
    href: "/about-us",
    icon: FiShield,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FiMail,
  },
];

const badges = [
  { icon: FiShield, text: "Trusted Reports" },
  { icon: FiHome, text: "Home Collection" },
  { icon: FiClock, text: "Quick Results" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-white">
      {/* Medical Background */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* MAIN */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                <Image
                  src={SITE_CONFIG.logo}
                  fill
                  sizes="64px"
                  alt="Bhangal Clinical Laboratory Logo"
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-black text-slate-900">
                  Bhangal Clinical Laboratory
                </h2>
                <p className="mt-1 flex items-center gap-1 text-sm font-medium text-blue-600">
                  <FiHeart className="fill-red-500 text-red-500" />
                  Trusted Healthcare Partner
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Accurate Tests.
              <br />
              <span className="text-blue-600">Better Healthcare Decisions.</span>
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Advanced pathology testing with reliable reports, home sample collection and patient-focused diagnostic services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    <Icon />
                    {item.text}
                  </div>
                );
              })}
            </div>

            <TrackedLink
              href="/packages"
              tracking="footer-explore-packages"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
            >
              Explore Health Packages
              <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </TrackedLink>
          </div>

          {/* RIGHT */}
          <div className="grid gap-10 sm:grid-cols-2">
            {/* LINKS */}
            <div>
              <h4 className="font-bold text-slate-900">Quick Links</h4>
              <nav className="mt-5 space-y-4" aria-label="Footer Navigation">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <TrackedLink
                      key={item.name}
                      href={item.href}
                      tracking={`footer-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600"
                    >
                      <Icon className="text-blue-600" />
                      {item.name}
                    </TrackedLink>
                  );
                })}
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-bold text-slate-900">Contact Us</h4>
              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <FiPhone className="mt-1 text-blue-600" />
                  <TrackedPhoneLink
                    location="footer-phone"
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {SITE_CONFIG.phone}
                  </TrackedPhoneLink>
                </div>
                <div className="flex gap-3">
                  <TbDeviceLandlinePhone className="mt-1 text-blue-600" />
                  <TrackedPhoneLink
                    location="footer-landline"
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {SITE_CONFIG.landLine}
                  </TrackedPhoneLink>
                </div>
                <div className="flex gap-3">
                  <FiMail className="mt-1 text-blue-600" />
                  <TrackingLink
                    href={`mailto:${SITE_CONFIG.email}`}
                    tracking="footer-email"
                    className="break-all text-slate-600 transition hover:text-blue-600"
                  >
                    {SITE_CONFIG.email}
                  </TrackingLink>
                </div>
                <div className="flex gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-red-500" />
                  <address className="not-italic leading-6 text-slate-600">
                    {SITE_CONFIG.address.line1}
                    <br />
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.state}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-16">
          <div className="mb-5">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Visit Laboratory
            </span>
            <h3 className="mt-2 text-2xl font-black text-slate-900">
              Find Our Diagnostic Centre
            </h3>
          </div>

          <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-sm">
            <iframe
              src={SITE_CONFIG.googleMaps.iframe}
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              title="Bhangal Clinical Laboratory Location Map"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <TrackingLink
              href={SITE_CONFIG.social.instagram}
              tracking="footer-social-instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <FaInstagram />
            </TrackingLink>
            <TrackingLink
              href={SITE_CONFIG.social.facebook}
              tracking="footer-social-facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF />
            </TrackingLink>
            <TrackedWhatsappLink
              phone={SITE_CONFIG.whatsapp}
              tracking="social-whatsapp"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <FaWhatsapp />
            </TrackedWhatsappLink>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-700">
              Bhangal Clinical Laboratory
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}