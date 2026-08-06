import TrackedLink from "@/app/components/TrackedLink";
import { FiArrowRight } from "react-icons/fi";

export default function FounderButtons() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <TrackedLink
        href="/contact"
        tracking="about-BookYourTest-founderSection"
        className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-600"
      >
        Book Your Test
        <FiArrowRight />
      </TrackedLink>

      <TrackedLink
        href="/packages"
        tracking="about-founderSection-packages"
        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
      >
        Learn More
      </TrackedLink>
    </div>
  );
}