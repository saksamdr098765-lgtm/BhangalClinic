import { packages } from "@/app/data/packages";
import { tests } from "@/app/data/tests";
import InteractiveBookingForm from "./InteractiveBookingForm";
const features=[
                  "Home Sample Collection",
                  "Same Day Reports*",
                  "Experienced Laboratory Team",
                  "Affordable Test Packages",
                  "Modern Equipment",
                  "Secure Digital Reports",
                ]
export default function BookingForm() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_45%)] opacity-60" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm sm:text-xs">
            Book Appointment
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Schedule Your
            <span className="block text-blue-600">
              Diagnostic Test
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Fill out the form below. Our team will contact you shortly to
            confirm your appointment or arrange home sample collection.
          </p>
        </div>

        {/* Form Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Interactive Client Form */}
          <InteractiveBookingForm tests={tests} packages={packages} />

          {/* Right: Static Server-Rendered Information Panel */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                ● Booking Open
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                Why Choose Us?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We provide reliable pathology services with modern laboratory
                technology, experienced professionals, and quick digital
                reporting.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {features.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                      ✓
                    </div>

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Working Hours
                </p>

                <h4 className="mt-2 text-xl font-bold text-slate-900">
                  8:00 AM – 8:00 PM
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Our team is available throughout the day to assist with
                  appointments, test selection, and home sample collection.
                </p>
              </div>

              {/* Support Card */}
              <div className="mt-6 rounded-2xl bg-blue-600 p-5 text-white">
                <p className="text-sm text-blue-100">
                  Need Help?
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  We're here for you.
                </h4>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Call our laboratory or submit the booking form. We'll confirm
                  your appointment as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}