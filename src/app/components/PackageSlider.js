"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import PackageCard from "./PackageCard";

export default function PackageSlider({ packages }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1.1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 24,
        },
      }}
      className="mt-16 !overflow-visible"
    >
      {packages.map((pkg, index) => (
        <SwiperSlide key={pkg.id}>
          <PackageCard
            pkg={pkg}
            location="home"
            featured={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
