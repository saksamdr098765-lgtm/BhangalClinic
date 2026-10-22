"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import TrackedWhatsappLink from "./TrackedWhatsappLink";
import TrackedLink from "./TrackedLink";
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
            <TrackedLink
              href={pkg.slug ? `/packages/${pkg.slug}` : "/packages"}
              tracking={`carousel-${pkg.slug || pkg.name}`}
              className="group relative block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} - ₹${pkg.price} Diagnostic Package`}
                  fill
                  sizes="(max-width: 640px) 55vw, (max-width: 1024px) 33vw, 220px"
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-left text-sm font-bold text-white line-clamp-1">
                    {pkg.name}
                  </p>
                  <p className="mt-0.5 text-left text-xs font-semibold text-emerald-300">
                    ₹{pkg.price}{" "}
                    {pkg.originalPrice && (
                      <span className="line-through text-slate-300 font-normal">
                        ₹{pkg.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FiArrowRight className="text-slate-700 group-hover:text-white" size={15} />
              </div>
            </TrackedLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
