"use client";

import { bookingSchema } from "@/app/lib/BookingSchema";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { toast } from "sonner";

export default function BookingForm() {
 const [homeCollection, setHomeCollection] = useState(true);

const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  test: "",
  preferredDate: "",
  preferredTime: "",
  address: "",
  notes: "",
});
const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const bookingData = {
    ...form,
    homeCollection,
  };

  if (homeCollection && bookingData.address.trim() === "") {
    toast.error("Please enter your collection address.");
    return;
  }

  const result = bookingSchema.safeParse(bookingData);

  if (!result.success) {
    toast.error(result.error.issues[0].message);
    return;
  }

  try {
    const response = await fetch("/api/book-test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message || "Booking failed.");
      return;
    }

    toast.success("Booking submitted successfully.");

    console.log(data);

    setForm({
      name: "",
      phone: "",
      email: "",
      test: "",
      preferredDate: "",
      preferredTime: "",
      address: "",
      notes: "",
    });

    setHomeCollection(true);
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong.");
  }
};
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

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
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
      </motion.div>

      {/* Form Layout */}

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start"
      >
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:order-1 lg:col-span-7 lg:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone
              </label>

              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Test */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Select Test
              </label>

              <select
                name="test"
                value={form.test}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
              >
                <option value="">Select Test</option>
                <option value="CBC Test">CBC Test</option>
                <option value="HbA1c">HbA1c</option>
                <option value="Thyroid Profile">Thyroid Profile</option>
                <option value="Vitamin D">Vitamin D</option>
                <option value="Full Body Checkup">Full Body Checkup</option>
              </select>
            </div>

            {/* Date */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Preferred Date
              </label>

              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="date"
                  name="preferredDate"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.preferredDate}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Time */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Preferred Time
              </label>

              <div className="relative">
                <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <select
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
                >
                  <option value="">Select Time</option>
                  <option>08:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 02:00 PM</option>
                  <option>02:00 PM - 04:00 PM</option>
                  <option>04:00 PM - 06:00 PM</option>
                </select>
              </div>
            </div>

            {/* Home Collection */}

            <div className="sm:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Home Sample Collection
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHomeCollection(true)}
                  className={`h-12 rounded-xl border text-sm font-semibold transition ${
                    homeCollection
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  Yes
                </button>

                <button
                  type="button"
                  onClick={() => setHomeCollection(false)}
                  className={`h-12 rounded-xl border text-sm font-semibold transition ${
                    !homeCollection
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Address */}

            {homeCollection && (
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Collection Address
                </label>

                <div className="relative">
                  <FiMapPin className="absolute left-4 top-5 text-slate-400" />

                  <textarea
                    rows={4}
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter complete address..."
                    className="w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 pt-4 text-sm outline-none transition focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Notes */}

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Notes
              </label>

              <textarea
                rows={5}
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Anything we should know?"
                className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Submit */}

         <div className="sm:col-span-2">
  <button
    type="submit"
    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
  >
    <FiCalendar />
    Book Appointment
  </button>
</div>

</div> {/* End grid */}

</motion.div> {/* End left form card */}
            {/* Right Information Panel */}

<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  className="
    order-1
    lg:order-2
    lg:col-span-5
  "
>
  <div
    className="
      sticky
      top-24
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm

      sm:p-7
    "
  >
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-emerald-50
        px-3
        py-1.5
        text-xs
        font-semibold
        text-emerald-700
      "
    >
      ● Booking Open
    </span>

    <h3
      className="
        mt-5
        text-2xl
        font-bold
        text-slate-900

        sm:text-3xl
      "
    >
      Why Choose Us?
    </h3>

    <p
      className="
        mt-3
        text-sm
        leading-7
        text-slate-600
      "
    >
      We provide reliable pathology services with modern laboratory
      technology, experienced professionals, and quick digital
      reporting.
    </p>

    {/* Features */}

    <div className="mt-8 space-y-4">
      {[
        "Home Sample Collection",
        "Same Day Reports*",
        "Experienced Laboratory Team",
        "Affordable Test Packages",
        "Modern Equipment",
        "Secure Digital Reports",
      ].map((item) => (
        <div
          key={item}
          className="flex items-start gap-3"
        >
          <div
            className="
              mt-0.5
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-blue-50
              text-blue-600
              text-sm
              font-bold
            "
          >
            ✓
          </div>

          <span
            className="
              text-sm
              leading-6
              text-slate-700
            "
          >
            {item}
          </span>
        </div>
      ))}
    </div>

    {/* Working Hours */}

    <div
      className="
        mt-8
        rounded-2xl
        bg-slate-50
        p-5
      "
    >
      <p className="text-xs uppercase tracking-wider text-slate-500">
        Working Hours
      </p>

      <h4
        className="
          mt-2
          text-xl
          font-bold
          text-slate-900
        "
      >
        8:00 AM – 8:00 PM
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-slate-600
        "
      >
        Our team is available throughout the day to assist with
        appointments, test selection, and home sample collection.
      </p>
    </div>

    {/* Support Card */}

    <div
      className="
        mt-6
        rounded-2xl
        bg-blue-600
        p-5
        text-white
      "
    >
      <p className="text-sm text-blue-100">
        Need Help?
      </p>

      <h4
        className="
          mt-2
          text-xl
          font-bold
        "
      >
        We're here for you.
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-blue-100
        "
      >
        Call our laboratory or submit the booking form. We'll confirm
        your appointment as soon as possible.
      </p>
    </div>
  </div>
</motion.div>
</form>

</div>

</section>
 )
}