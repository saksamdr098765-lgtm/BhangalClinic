import {
  FiInfo,
} from "react-icons/fi";

export default function Preparation({ preparation }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {preparation.title}
          </h2>


          <p className="mt-5 text-lg leading-8 text-slate-600">
            {preparation.description}
          </p>


          <div className="mt-10 space-y-4">


            {preparation.items.map((item) => (

              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >

                <div className="mt-1">
                  <FiInfo
                    className="text-sky-600"
                    size={22}
                  />
                </div>


                <div>

                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>


                  <p className="mt-1 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}


          </div>

        </div>


      </div>
    </section>
  );
}