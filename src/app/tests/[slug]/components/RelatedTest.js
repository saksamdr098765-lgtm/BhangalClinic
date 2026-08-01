import Link from "next/link";
import {
  FiArrowRight,
} from "react-icons/fi";

export default function RelatedTests({ relatedTests }) {
  return (
    <section className="py-16 lg:py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* Heading */}

        <div className="max-w-3xl">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {relatedTests.title}
          </h2>


          <p className="mt-4 text-lg text-slate-600">
            {relatedTests.description}
          </p>

        </div>



        {/* Cards */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {relatedTests.items.map((test) => (

            <Link
              key={test.name}
              href={test.url}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >


              <h3 className="text-lg font-bold text-slate-900">

                {test.name}

              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-600">

                {test.description}

              </p>



              <div className="mt-5 flex items-center text-sm font-semibold text-sky-600">

                View Test

                <FiArrowRight
                  className="ml-2 transition group-hover:translate-x-1"
                />

              </div>


            </Link>

          ))}


        </div>


      </div>

    </section>
  );
}