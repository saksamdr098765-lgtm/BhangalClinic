import Link from "next/link";
import { FaArrowRight, FaCalendarCheck } from "react-icons/fa";

export default function BlogCTA({CTA}) {
  const {
  title ,
  description ,
  serviceName ,
  serviceLink ,
  bookingLink,
  whatsappLink ,
  features,
}=CTA
  return (
    <section className="my-10 overflow-hidden rounded-3xl bg-[#1447E6] shadow-xl">
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:text-sm">
              ✓ Home Sample Collection Available
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-sky-100 sm:text-base">
              {description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white backdrop-blur"
                >
                  <span className="text-green-300">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full flex-col gap-3 lg:w-72">
            <Link
              href={bookingLink}
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-center font-semibold text-sky-700 transition-all hover:bg-slate-100 hover:shadow-lg"
            >
              <FaCalendarCheck />
              Book {serviceName}
            </Link>

            <Link
              href={serviceLink}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-4 text-center font-semibold text-white transition-all hover:bg-white/10"
            >
              View Test Details
              <FaArrowRight className="text-sm" />
            </Link>

            <Link
              href={whatsappLink}
              className="text-center text-sm text-sky-100 underline underline-offset-4 hover:text-white"
            >
              Need help? Chat with our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}