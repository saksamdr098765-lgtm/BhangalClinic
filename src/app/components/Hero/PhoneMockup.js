import {
  FiCalendar,
  FiClock,
  FiHome,
  FiCheck,
} from "react-icons/fi";

export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

      {/* Floating Animation */}
      <div className="relative animate-[bounce_6s_infinite_ease-in-out]">
        {/* Phone */}
        <div className="relative h-[680px] w-[340px] rounded-[48px] bg-slate-950 p-[10px] shadow-[0_40px_80px_rgba(15,23,42,.25)]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="h-full overflow-hidden rounded-[40px] bg-white">
            {/* Header */}
            <div className="border-b border-slate-100 px-6 pb-5 pt-12">
              <p className="text-sm font-medium text-blue-600">
                Book Test
              </p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                CBC Test
              </h3>
            </div>

            {/* Appointment */}
            <div className="space-y-4 p-6">
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-blue-600" />
                  <div>
                    <p className="text-xs text-slate-500">Appointment</p>
                    <p className="font-semibold">Tomorrow</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <FiClock className="text-blue-600" />
                  <div>
                    <p className="text-xs text-slate-500">Time</p>
                    <p className="font-semibold">09:30 AM</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <FiHome className="text-blue-600" />
                  <div>
                    <p className="text-xs text-slate-500">Collection</p>
                    <p className="font-semibold">Home Sample</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Total</p>
                    <span className="mt-1 block text-3xl font-bold">
                      ₹399
                    </span>
                  </div>

                  <div className="rounded-full bg-emerald-500 p-3 text-white">
                    <FiCheck />
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="absolute bottom-8 left-6 right-6">
              <button
                type="button"
                className="w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition duration-300 hover:bg-blue-600"
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>

        {/* Floating Success Card */}
        <div className="absolute -left-24 top-24 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl">
          <p className="text-xs text-slate-500">Booking Status</p>
          <p className="mt-1 font-bold text-emerald-600">Confirmed ✓</p>
        </div>
      </div>
    </div>
  );
}