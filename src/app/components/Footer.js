"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiInfo,
  FiHeart,
} from "react-icons/fi";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";

import SITE_CONFIG from "../SITE_CONFIG";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#cffafe,transparent_35%)] opacity-60" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Top */}

        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">

          {/* Left */}

          <div>

            <div className="flex items-center gap-4">

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <Image
                  src="/logo.jpg"
                  width={72}
                  height={72}
                  alt="Bhangal Clinical Laboratory"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Bhangal Clinical Laboratory
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Trusted Pathology & Diagnostic Centre
                </p>

              </div>

            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Accurate
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Diagnostics.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Reliable pathology testing with experienced professionals,
              advanced laboratory equipment, home sample collection and secure
              digital reports.
            </p>

            <Link
              href="/packages"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Explore Health Packages

              <FiArrowRight className="transition group-hover:translate-x-1" />

            </Link>

          </div>

          {/* Right */}

          <div className="grid gap-10 sm:grid-cols-2">

            {/* Quick Links */}

            <div>

              <h4 className="text-lg font-bold text-slate-900">
                Quick Links
              </h4>

              <div className="mt-6 space-y-4">

                {navLinks.map((item) => {

                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-3 text-slate-600 transition hover:text-blue-600"
                    >

                      <Icon className="text-blue-500 transition group-hover:translate-x-1" />

                      <span>{item.name}</span>

                    </Link>
                  );

                })}

              </div>

            </div>

            {/* Contact */}

            <div>

              <h4 className="text-lg font-bold text-slate-900">
                Contact
              </h4>

              <div className="mt-6 space-y-6">

                <div className="flex items-start gap-3">

                  <FiPhone className="mt-1 shrink-0 text-blue-600" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 text-slate-700">
                      {SITE_CONFIG.phone}
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <FiMail className="mt-1 shrink-0 text-blue-600" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 break-all text-slate-700 text-nowrap">
                      {SITE_CONFIG.email}
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <FiMapPin className="mt-1 shrink-0 text-blue-600" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Address
                    </p>

                    <p className="mt-1 leading-7 text-slate-700">
                      {SITE_CONFIG.address.line1}
                      <br />
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.state}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Google Map */}
                <div className="mt-16">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Visit Us
              </span>

              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Find Our Laboratory
              </h3>

              <p className="mt-2 max-w-2xl text-slate-600">
                Conveniently located in Garhshankar with home sample collection
                available across nearby areas.
              </p>
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Book on WhatsApp
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3412.2673743929913!2d76.1484061!3d31.213321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abf3a872c804b%3A0x3c7889898304438b!2sBhangal%20Clinical%20Laboratories%20%26%20ECG%20Garhshankar!5e0!3m2!1sen!2sin!4v1783939998979!5m2!1sen!2sin"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="mt-16 border-t border-slate-200 pt-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Social */}

            <div>

              <h4 className="font-semibold text-slate-900">
                Follow Us
              </h4>

              <div className="mt-4 flex items-center gap-3">

                {[
                  {
                    icon: <FaInstagram />,
                    href: SITE_CONFIG.social.instagram,
                  },
                  {
                    icon: <FaFacebookF />,
                    href: SITE_CONFIG.social.facebook,
                  },
                  {
                    icon: <FaWhatsapp />,
                    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
                  >
                    {item.icon}
                  </a>
                ))}

              </div>

            </div>

            {/* Footer Links */}

          

          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-slate-700">
                Bhangal Clinical Laboratory
              </span>
              . All rights reserved.
            </p>

            <p>
              Designed for better healthcare ❤️
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}