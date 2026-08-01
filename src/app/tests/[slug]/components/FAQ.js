import {
  FiPlus,
} from "react-icons/fi";

export default function FAQ({ faq }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">


        {/* Heading */}

        <div className="text-center">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {faq.title}
          </h2>


          <p className="mt-4 text-lg text-slate-600">
            {faq.description}
          </p>

        </div>



        {/* Questions */}

        <div className="mt-10 space-y-4">


          {faq.items.map((item) => (

            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">

                {item.question}


                <FiPlus
                  className="transition group-open:rotate-45"
                />

              </summary>


              <p className="mt-4 leading-7 text-slate-600">

                {item.answer}

              </p>


            </details>

          ))}


        </div>


      </div>

    </section>
  );
}