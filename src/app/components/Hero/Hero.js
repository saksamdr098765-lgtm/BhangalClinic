"use client";

import Background from "./Background";
import BookingPanel from "./BookingPanel";
import HeroContent from "./HeroContent";



export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Background />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <HeroContent />

          {/* Right */}

         <BookingPanel></BookingPanel>

        </div>

      </div>
    </section>
  );
}