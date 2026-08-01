import {
  FiCheckCircle,
} from "react-icons/fi";

export default function WhyChooseUs({ whyChooseUs }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {whyChooseUs.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {whyChooseUs.description}
          </p>

        </div>


        {/* Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {whyChooseUs.items.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">

                <FiCheckCircle
                  className="text-sky-600"
                  size={26}
                />

              </div>


              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
}