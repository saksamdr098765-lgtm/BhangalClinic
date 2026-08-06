import { tests } from "../data/tests";
import TestCard from "./TestCard";
import TrackedLink from "./TrackedLink";

export default function PopularTests() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-blue-50/40
        to-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-20
            top-10
            h-60
            w-60
            rounded-full
            bg-blue-200/30
            blur-[80px]
            sm:h-80
            sm:w-80
            sm:blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-20
            bottom-0
            h-72
            w-72
            rounded-full
            bg-cyan-200/30
            blur-[90px]
            sm:h-96
            sm:w-96
            sm:blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
              sm:text-sm
            "
          >
            Popular Tests
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:mt-4
              sm:text-4xl
              lg:text-5xl
            "
          >
            Book your test in seconds.
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-8
            "
          >
            Transparent pricing, fast reports, and convenient home sample
            collection.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-8
            grid
            gap-4
            sm:mt-12
            sm:gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {tests.slice(0, 3).map((test) => (
            <TestCard key={test.slug} test={test} location="Home" />
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-10
            flex
            justify-center
            sm:mt-16
          "
        >
          <TrackedLink
            href="/packages#test-grid"
            tracking="Home-PopularTests-viewAll"
            className="
              w-full
              rounded-full
              border
              border-slate-300
              px-8
              py-3.5
              text-center
              font-semibold
              text-slate-700
              transition
              duration-300
              hover:bg-slate-900
              hover:text-white
              sm:w-auto
              sm:py-4
            "
          >
            View All Tests
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}