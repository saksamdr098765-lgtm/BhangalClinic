import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";

export default function CTA({ cta }) {
  return (
    <section className="py-16 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-600 to-cyan-600 p-8 text-white shadow-2xl lg:p-14">


          <div className="grid items-center gap-10 lg:grid-cols-2">


            {/* Left */}

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                Book Your Test Today
              </span>


              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">

                {cta.title}

              </h2>


              <p className="mt-5 max-w-xl text-lg text-sky-100">

                {cta.description}

              </p>



              <div className="mt-8 space-y-3">

                {cta.highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <FiCheckCircle />

                    <span>
                      {item}
                    </span>

                  </div>

                ))}

              </div>


            </div>



            {/* Right */}

            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl">


              <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                Starting From
              </p>


              <p className="mt-3 text-5xl font-extrabold text-sky-600">

                ₹{cta.price}

              </p>


              <p className="mt-3 text-slate-600">

                {cta.priceText}

              </p>



              <Link
                href={cta.bookingUrl}
                className="mt-8 flex items-center justify-center rounded-xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700"
              >

                {cta.buttonText}

                <FiArrowRight className="ml-2" />

              </Link>



              <Link
                href={cta.phone}
                className="mt-4 flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-semibold transition hover:border-sky-600 hover:text-sky-600"
              >

                <FiPhone className="mr-2" />

                Call Now

              </Link>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}