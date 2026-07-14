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
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-white
        py-20

        lg:py-28
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          left-0
          top-0
          h-80
          w-80
          rounded-full
          bg-blue-100/50
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-cyan-100/40
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4

          sm:px-6
        "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-blue-50
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-700

              sm:text-sm
            "
          >
            Online Appointment
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-slate-900

              sm:text-5xl
            "
          >
            Book Your Test
            <span className="text-blue-600">
              {" "}in Less Than a Minute.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Fill in your details and our team will confirm your
            appointment shortly. Home sample collection is
            available across our service areas.
          </p>
        </motion.div>

        {/* Layout */}

    <form
  onSubmit={handleSubmit}
  className="mt-16 grid gap-10 lg:grid-cols-12"
>
          {/* Left Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              rounded-[36px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_25px_70px_rgba(15,23,42,.08)]

              lg:col-span-7
              lg:p-10
            "
          >
            <div className="grid gap-6 sm:grid-cols-2">

              {/* Name */}

              <div className="sm:col-span-2">
                <label className="mb-3 block font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="relative">
                  <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                     name="name"
  value={form.name}
  onChange={handleChange}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-14
                      pr-5
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:bg-white
                    "
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Phone Number
                </label>

                <div className="relative">
                  <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="tel"
                     name="phone"
  value={form.phone}
  onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-14
                      pr-5
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:bg-white
                    "
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Email
                </label>

                <div className="relative">
                  <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="email"
                     name="email"
  value={form.email}
  onChange={handleChange}
                    placeholder="example@email.com"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-14
                      pr-5
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:bg-white
                    "
                  />
                </div>
              </div>

              {/* Test */}

              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Select Test
                </label>

                <select
                 name="test"
  value={form.test}
  onChange={handleChange}
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    outline-none
                    focus:border-blue-500
                    focus:bg-white
                  "
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
                <label className="mb-3 block font-semibold text-slate-700">
                  Preferred Date
                </label>

                <div className="relative">
                  <FiCalendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="date"
                      name="preferredDate"
                        min={new Date().toISOString().split("T")[0]}
  value={form.preferredDate}
  onChange={handleChange}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-14
                      pr-5
                      outline-none
                      focus:border-blue-500
                      focus:bg-white
                    "
                  />
                </div>
              </div>
                            {/* Preferred Time */}

              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Preferred Time
                </label>

                <div className="relative">
                  <FiClock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                  <select
                    name="preferredTime"
  value={form.preferredTime}
  onChange={handleChange}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-14
                      pr-5
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:bg-white
                    "
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
                <label className="mb-4 block font-semibold text-slate-700">
                  Home Sample Collection
                </label>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setHomeCollection(true)}
                    className={`
                      flex-1
                      rounded-2xl
                      border
                      px-6
                      py-4
                      font-semibold
                      transition-all
                      ${
                        homeCollection
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }
                    `}
                  >
                    Yes
                  </button>

                  <button
                    type="button"
                    onClick={() => setHomeCollection(false)}
                    className={`
                      flex-1
                      rounded-2xl
                      border
                      px-6
                      py-4
                      font-semibold
                      transition-all
                      ${
                        !homeCollection
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }
                    `}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Address */}

              {homeCollection && (
                <div className="sm:col-span-2">
                  <label className="mb-3 block font-semibold text-slate-700">
                    Collection Address
                  </label>

                  <div className="relative">
                    <FiMapPin className="absolute left-5 top-5 text-slate-400" />

                    <textarea
                      rows={4}
                        name="address"
  value={form.address}
  onChange={handleChange}
                      placeholder="Enter your complete address..."
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-14
                        pr-5
                        pt-4
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                      "
                    />
                  </div>
                </div>
              )}

              {/* Notes */}

              <div className="sm:col-span-2">
                <label className="mb-3 block font-semibold text-slate-700">
                  Additional Notes
                </label>

                <textarea
                  rows={5}
                    name="notes"
  value={form.notes}
  onChange={handleChange}
                  placeholder="Any special instructions..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-5
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:bg-white
                  "
                />
              </div>

              {/* Submit */}

              <div className="sm:col-span-2">
                <button
            type="submit"
                  className="
                    flex
                    h-16
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-blue-600
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-500
                    hover:shadow-2xl
                  "
                >
                  Book Appointment

                  <FiCalendar />
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Information Panel */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              lg:col-span-5
            "
          >
            <div
              className="
                sticky
                top-28
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_25px_70px_rgba(15,23,42,.08)]
              "
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-emerald-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-emerald-700
                "
              >
                ● We're Accepting Bookings
              </span>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  text-slate-900
                "
              >
                Why Book With Us?
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Home Sample Collection Available",
                  "Same Day Digital Reports*",
                  "Experienced Laboratory Staff",
                  "Affordable Health Packages",
                  "Modern Diagnostic Equipment",
                  "Secure Online Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        mt-1
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      ✓
                    </div>

                    <p className="font-medium text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-10
                  rounded-3xl
                  bg-blue-600
                  p-6
                  text-white
                "
              >
                <p className="text-sm text-blue-100">
                  Working Hours
                </p>

                <h4 className="mt-2 text-3xl font-black">
                  8:00 AM – 8:00 PM
                </h4>

                <p className="mt-4 leading-7 text-blue-100">
                  Need help choosing the right test? Call our team
                  and we'll guide you through the booking process.
                </p>
              </div>
            </div>
          </motion.div>

        </form>
      </div>
    </section>
  );
}