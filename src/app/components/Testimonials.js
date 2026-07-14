"use client";

import { motion } from "framer-motion";
import { FiStar, FiCheckCircle } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mohali",
    text: "Excellent service. The home sample collection was on time and the reports were delivered the same day. Highly recommended.",
  },
  {
    name: "Priya Verma",
    location: "Chandigarh",
    text: "Very professional staff and quick report delivery. Booking online was simple and the entire experience was smooth.",
  },
  {
    name: "Aman Singh",
    location: "Zirakpur",
    text: "Clean laboratory, courteous staff and accurate reports. I always choose Bhangal Clinical Laboratory for my family's tests.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16

        sm:py-20
        lg:py-28
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          left-0
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-100/40
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-cyan-100/40
          blur-[120px]
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
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            Patient Reviews
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-black
              text-slate-900

              sm:text-5xl
            "
          >
            Trusted by hundreds of
            <br />
            happy patients.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            We focus on accurate diagnostics, professional care and a
            hassle-free experience from booking to report delivery.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
             className="
  flex
  h-full
  flex-col
  rounded-[30px]
  border
  border-slate-200
  bg-white
  p-8
  shadow-[0_20px_60px_rgba(15,23,42,.08)]
  transition
"
            >
              {/* Stars */}

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                "{item.text}"
              </p>

              {/* Divider */}

             <div className="mt-auto pt-8">
  <div className="mb-8 h-px bg-slate-100" />

              {/* User */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-50
                  "
                >
                  <FiCheckCircle className="text-emerald-600" />
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Strip */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-16
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {[
            "1000+ Happy Patients",
            "Accurate Reports",
            "Home Collection",
            "Trusted Laboratory",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-slate-50
                px-5
                py-3
                text-sm
                font-medium
                text-slate-700
              "
            >
              <FiCheckCircle className="text-blue-600" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}