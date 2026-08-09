"use client";

import { bookingSchema } from "@/app/lib/BookingSchema";
import { trackBookingForm } from "@/app/lib/tracking";
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

export default function InteractiveBookingForm({ tests = [], packages = [] }) {
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
    trackBookingForm();

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
    <form
      onSubmit={handleSubmit}
      className="order-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:order-1 lg:col-span-7 lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="booking-form-name"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Full Name
          </label>

          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="booking-form-name"
              type="text"
              name="name"
              aria-label="Full Name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="booking-form-phone"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Phone
          </label>

          <div className="relative">
            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="booking-form-phone"
              type="tel"
              name="phone"
              aria-label="Phone Number"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="booking-form-email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email
          </label>

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="booking-form-email"
              type="email"
              name="email"
              aria-label="Email Address"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Test */}
        <div>
          <label
            htmlFor="booking-form-test"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Select Test
          </label>

          <select
            id="booking-form-test"
            name="test"
            aria-label="Select Diagnostic Test"
            value={form.test}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
          >
            <option value="">Select Test</option>
            {tests.map((test, index) => (
              <option key={index} value={test.name}>
                {test.name}
              </option>
            ))}
            {packages.map((pkg, index) => (
              <option key={index} value={pkg.name}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="booking-form-date"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Preferred Date
          </label>

          <div className="relative">
            <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="booking-form-date"
              type="date"
              name="preferredDate"
              aria-label="Preferred Appointment Date"
              min={new Date().toISOString().split("T")[0]}
              value={form.preferredDate}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label
            htmlFor="booking-form-time"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Preferred Time
          </label>

          <div className="relative">
            <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              id="booking-form-time"
              name="preferredTime"
              aria-label="Preferred Appointment Time"
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
          <label
            id="home-collection-label"
            className="mb-3 block text-sm font-semibold text-slate-700"
          >
            Home Sample Collection
          </label>

          <div
            className="grid grid-cols-2 gap-3"
            role="group"
            aria-labelledby="home-collection-label"
          >
            <button
              type="button"
              onClick={() => setHomeCollection(true)}
              aria-label="Request Home Sample Collection: Yes"
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
              aria-label="Request Home Sample Collection: No"
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
            <label
              htmlFor="booking-form-address"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Collection Address
            </label>

            <div className="relative">
              <FiMapPin className="absolute left-4 top-5 text-slate-400" />
              <textarea
                id="booking-form-address"
                rows={4}
                name="address"
                aria-label="Collection Address"
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
          <label
            htmlFor="booking-form-notes"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Additional Notes
          </label>

          <textarea
            id="booking-form-notes"
            rows={5}
            name="notes"
            aria-label="Additional Notes"
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
      </div>
    </form>
  );
}
