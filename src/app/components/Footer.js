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
  FiActivity,
  FiPackage,
  FiBookOpen,
  FiExternalLink,
} from "react-icons/fi";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import SITE_CONFIG from "../SITE_CONFIG";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Laboratory", href: "/about-us" },
  { name: "Health Packages", href: "/packages" },
  { name: "Health Guides & Blog", href: "/blogs" },
  { name: "Contact & Appointments", href: "/contact" },
];

const topTests = [
  { name: "Complete Blood Count (CBC)", href: "/tests/cbc-test" },
  { name: "Blood Sugar (Fasting & PP)", href: "/tests/blood-sugar-test" },
  { name: "HbA1c Diabetes Test", href: "/prices/blood-sugar-hba1c-test-price-garhshankar" },
  { name: "12-Lead Resting ECG", href: "/prices/ecg-test-price-garhshankar" },
  { name: "Widal Typhoid Test", href: "/tests/widal-test" },
  { name: "Dengue NS1 & Platelet", href: "/tests/dengue-test" },
];

const topPackages = [
  { name: "Blood Test Price List", href: "/prices/blood-test-price-garhshankar" },
  { name: "ECG Test in Garhshankar", href: "/prices/ecg-test-price-garhshankar" },
  { name: "Full Body Checkup Price", href: "/prices/full-body-checkup-price-garhshankar" },
  { name: "Bhangal Basic Profile Plus", href: "/packages/bhangal-basic-profile-plus" },
  { name: "Bhangal Diabetic Profile", href: "/packages/bhangal-diabetic-profile" },
  { name: "Advance Full Body Checkup", href: "/packages/bhangal-advance-full-body-checkup" },
];

const healthGuides = [
  { name: "Complete Blood Tests Guide", href: "/blogs/list-of-blood-tests" },
  { name: "12-Lead ECG Test Guide", href: "/blogs/ecg-test-full-guide" },
  { name: "CBC Normal Ranges & Results", href: "/blogs/cbc-test-full-guide" },
  { name: "Blood Sugar & HbA1c Guide", href: "/blogs/blood-sugar-hba1c-test-full-guide" },
  { name: "Full Body Checkup Guide", href: "/blogs/full-body-checkup-full-guide" },
  { name: "Dengue Fever Blood Tests", href: "/blogs/dengue-test-full-guide" },
];

const serviceAreas = [
  { name: "Blood Test in Garhshankar", href: "/locations/blood-test-in-garhshankar" },
  { name: "CBC Test in Garhshankar", href: "/locations/cbc-test-in-garhshankar" },
  { name: "ECG Test in Garhshankar", href: "/locations/ecg-test-in-garhshankar" },
  { name: "Blood Sugar Test Garhshankar", href: "/locations/blood-sugar-hba1c-test-in-garhshankar" },
  { name: "Full Body Checkup Garhshankar", href: "/locations/full-body-checkup-in-garhshankar" },
  { name: "Dengue Test in Garhshankar", href: "/locations/dengue-test-in-garhshankar" },
];

const badges = [
  { icon: FiShield, text: "Certified Quality" },
  { icon: FiHome, text: "Home Collection" },
  { icon: FiClock, text: "Same-Day Reports" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-white">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* BRAND & INTRO */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] pb-12 border-b border-slate-100">
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
                  Trusted Diagnostics Since 2006
                </p>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
              Accurate Tests.{" "}
              <span className="text-blue-600">Better Healthcare Decisions.</span>
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Bhangal Clinical Laboratories &amp; ECG provides high-accuracy automated blood testing, 12-lead ECG, comprehensive health checkup packages, and doorstep sample collection right opposite Civil Hospital, Garhshankar.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {badges.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700"
                  >
                    <Icon />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7">
            <h4 className="font-bold text-slate-900">Get in Touch</h4>
            <div className="mt-4 space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 shrink-0 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Mobile / WhatsApp</p>
                  <TrackedPhoneLink
                    location="footer-phone"
                    className="font-semibold text-slate-900 hover:text-blue-600"
                  >
                    {SITE_CONFIG.phone}
                  </TrackedPhoneLink>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TbDeviceLandlinePhone className="mt-1 shrink-0 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Lab Landline</p>
                  <TrackedPhoneLink
                    phone={SITE_CONFIG.landLine}
                    location="footer-landline"
                    className="font-semibold text-slate-900 hover:text-blue-600"
                  >
                    {SITE_CONFIG.landLine}
                  </TrackedPhoneLink>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 shrink-0 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Email Address</p>
                  <TrackingLink
                    href={`mailto:${SITE_CONFIG.email}`}
                    tracking="footer-email"
                    className="break-all font-semibold text-slate-900 hover:text-blue-600"
                  >
                    {SITE_CONFIG.email}
                  </TrackingLink>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-red-500" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <address className="not-italic text-xs leading-5 text-slate-700">
                    {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.district}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.postalCode}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-COLUMN RICH LINK DIRECTORY */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1: TOP TESTS */}
          <div>
            <div className="flex items-center gap-2 text-blue-600">
              <FiActivity size={16} />
              <h4 className="font-bold text-slate-900">Popular Tests</h4>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {topTests.map((item) => (
                <li key={item.name}>
                  <TrackedLink
                    href={item.href}
                    tracking={`footer-test-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-600 transition hover:text-blue-600 hover:underline"
                  >
                    {item.name}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: HEALTH PACKAGES & PRICES */}
          <div>
            <div className="flex items-center gap-2 text-teal-600">
              <FiPackage size={16} />
              <h4 className="font-bold text-slate-900">Packages &amp; Prices</h4>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {topPackages.map((item) => (
                <li key={item.name}>
                  <TrackedLink
                    href={item.href}
                    tracking={`footer-pkg-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-600 transition hover:text-blue-600 hover:underline"
                  >
                    {item.name}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: HEALTH GUIDES */}
          <div>
            <div className="flex items-center gap-2 text-indigo-600">
              <FiBookOpen size={16} />
              <h4 className="font-bold text-slate-900">Health Guides</h4>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {healthGuides.map((item) => (
                <li key={item.name}>
                  <TrackedLink
                    href={item.href}
                    tracking={`footer-guide-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-600 transition hover:text-blue-600 hover:underline"
                  >
                    {item.name}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: SERVICE AREAS */}
          <div>
            <div className="flex items-center gap-2 text-rose-600">
              <FiMapPin size={16} />
              <h4 className="font-bold text-slate-900">Service Areas</h4>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {serviceAreas.map((item) => (
                <li key={item.name}>
                  <TrackedLink
                    href={item.href}
                    tracking={`footer-area-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-600 transition hover:text-blue-600 hover:underline"
                  >
                    {item.name}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MAP & DIRECTIONS */}
        <div className="mt-16 rounded-3xl border border-blue-100 bg-slate-50 p-6 sm:p-8">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Visit Laboratory
              </span>
              <h3 className="mt-1 text-2xl font-black text-slate-900">
                Find Our Diagnostic Centre
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Opposite Civil Hospital, Sri Anandpur Sahib Road, Garhshankar, Punjab 144527
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.googleMaps.direction}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
              >
                <span>Get Directions</span>
                <FiExternalLink />
              </a>
              <a
                href={SITE_CONFIG.googleMaps.review}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
              >
                <span>Rate on Google</span>
                <FiExternalLink />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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

        {/* BOTTOM COPYRIGHT */}
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
