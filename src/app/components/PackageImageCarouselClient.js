"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";
import TrackedWhatsappLink from "./TrackedWhatsappLink";
import SITE_CONFIG from "../SITE_CONFIG";

export default function PackageImageCarouselClient({ packages }) {
  return (
    <>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Health Packages
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Explore Our Packages
          </h2>
        </div>

        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label="Previous package"
            className="package-prev flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-blue-500 hover:bg-blue-50"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Next package"
            className="package-next flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-blue-500 hover:bg-blue-50"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".package-prev",
          nextEl: ".package-next",
        }}
        spaceBetween={18}
        slidesPerView={1.8}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        className="!overflow-visible"
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.name}>
            <TrackedWhatsappLink
              phone={SITE_CONFIG.whatsapp}
              text={`Hello, I want details about ${pkg.name} test`}
              tracking={`whatsapp-${pkg.name}`}
              className="group relative block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/60 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-left text-sm font-bold text-white">
                    {pkg.name}
                  </p>
                </div>
              </div>

              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg">
                <FiMessageCircle className="text-emerald-600" size={18} />
              </div>
            </TrackedWhatsappLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
