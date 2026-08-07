import TrackingLink from "@/app/components/TrackingLink";
import {
  FiMapPin,
  FiHome,
  FiNavigation,
  FiArrowRight,
} from "react-icons/fi";

export default function ServiceAreas({ serviceAreas }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Home Collection
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {serviceAreas.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {serviceAreas.description}
          </p>

        </div>

        {/* Cities */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {serviceAreas.areas.map((area) => (
            <TrackingLink
              key={area.name}
              href={area.href}
              tracking={`prices-service-area-${area.name}`}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-lg"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <FiMapPin size={22} />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {area.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Home Sample Collection
                  </p>

                </div>

              </div>

              <FiArrowRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-600" />

            </TrackingLink>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-16 rounded-3xl bg-sky-600 p-8 text-white lg:flex lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-2">

              <FiHome />

              <span className="font-semibold">
                Home Collection Available
              </span>

            </div>

            <h3 className="mt-3 text-3xl font-bold">
              Can't Visit the Lab?
            </h3>

            <p className="mt-4 max-w-2xl text-sky-100">
              Book your CBC Blood Test online and our trained
              phlebotomist will collect your sample from your home
              at your preferred time.
            </p>

          </div>

          <TrackingLink
            href="#booking"
            tracking="prices-service-area-book-home-collection"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-4 font-semibold text-sky-700 transition hover:bg-slate-100 lg:mt-0"
          >
            Book Home Collection

            <FiNavigation className="ml-2" />

          </TrackingLink>

        </div>

      </div>
    </section>
  );
}