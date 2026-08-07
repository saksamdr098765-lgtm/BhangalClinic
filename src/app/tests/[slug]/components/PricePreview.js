import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowRight,
  FiTag,
} from "react-icons/fi";

export default function PricePreview({ pricePreview }) {
  return (
    <section className="bg-sky-50 py-16 lg:py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-white p-8 shadow-sm lg:flex-row lg:p-12">


          {/* Left */}

          <div>

            <div className="flex items-center gap-2 text-sky-600">

              <FiTag />

              <span className="font-semibold">
                Test Price
              </span>

            </div>


            <h2 className="mt-4 text-3xl font-bold text-slate-900">

              {pricePreview.title}

            </h2>


            <p className="mt-3 max-w-xl text-slate-600">

              {pricePreview.description}

            </p>


          </div>



          {/* Right */}

          <div className="text-center lg:text-right">


            <p className="text-sm text-slate-500">
              Starting From
            </p>


            <p className="mt-2 text-5xl font-extrabold text-sky-600">

              ₹{pricePreview.price}

            </p>


            <TrackingLink
              href={pricePreview.priceUrl}
              tracking="test-price-preview-view-and-book"
              className="mt-6 inline-flex items-center rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
            >

              View Price & Book

              <FiArrowRight className="ml-2" />

            </TrackingLink>


          </div>


        </div>


      </div>

    </section>
  );
}