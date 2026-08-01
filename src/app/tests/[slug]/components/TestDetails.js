export default function TestDetails({ testDetails }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Heading */}

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {testDetails.title}
        </h2>


        {/* Description */}

        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">

          {testDetails.description.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}

        </div>


        {/* Included Tests */}

        {testDetails.included?.length > 0 && (

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">

            <h3 className="text-xl font-bold text-slate-900">
              What is Included?
            </h3>


            <ul className="mt-5 grid gap-3 sm:grid-cols-2">

              {testDetails.included.map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-700"
                >

                  <span className="h-2 w-2 rounded-full bg-sky-600" />

                  {item}

                </li>

              ))}

            </ul>

          </div>

        )}

      </div>
    </section>
  );
}