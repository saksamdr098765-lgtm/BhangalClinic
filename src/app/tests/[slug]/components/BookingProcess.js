import {
  FiArrowRight,
} from "react-icons/fi";

export default function BookingProcess({ bookingProcess }) {
  return (
    <section className="py-16 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {bookingProcess.title}
          </h2>


          <p className="mt-5 text-lg leading-8 text-slate-600">
            {bookingProcess.description}
          </p>

        </div>



        {/* Steps */}

        <div className="mt-12 grid gap-6 md:grid-cols-4">


          {bookingProcess.steps.map((step, index) => (

            <div
              key={step.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >


              {/* Number */}

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">

                {index + 1}

              </div>



              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {step.title}
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>



              {index !== bookingProcess.steps.length - 1 && (

                <FiArrowRight
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-sky-500 lg:block"
                  size={24}
                />

              )}


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}