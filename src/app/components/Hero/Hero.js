import Background from "./Background";
import BookingPanel from "./BookingPanel";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Background />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <div className="flex justify-center overflow-visible lg:justify-end">
            <BookingPanel />
          </div>
        </div>
      </div>
    </section>
  );
}