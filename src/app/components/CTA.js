"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiHome,
} from "react-icons/fi";


export default function FooterCTA() {
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
          bg-blue-100/50
          blur-[100px]
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
          bg-cyan-100/50
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


        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-2
            lg:gap-16
          "
        >


          {/* Left Content */}

          <motion.div
            initial={{
              opacity:0,
              x:-40,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
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
                text-blue-600

                sm:text-sm
              "
            >
              Easy Online Booking
            </span>



            <h2
              className="
                mt-5
                text-3xl
                font-black
                leading-tight
                text-slate-900

                sm:text-5xl

                lg:text-6xl
              "
            >
              Take care of your
              <br />

              <span className="text-blue-600">
                health today.
              </span>

            </h2>



            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >
              Book diagnostic tests online, get doorstep sample
              collection and receive accurate reports from trusted
              laboratory professionals.
            </p>



            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >

              <Link
                href="/book-test"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <FiCalendar />

                Book Test

                <FiArrowRight />

              </Link>



              <a
                href="tel:+919999999999"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-blue-300
                "
              >

                <FiPhone />

                Call Now

              </a>


            </div>



            {/* Trust */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              {[
                "Verified Lab",
                "Digital Reports",
                "Home Collection",
              ].map((item)=>(

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-50
                    px-4
                    py-2
                    text-sm
                    text-slate-600
                  "
                >

                  <FiCheckCircle className="text-blue-600" />

                  {item}

                </div>

              ))}

            </div>


          </motion.div>






          {/* Right Appointment Card */}

          <motion.div
            initial={{
              opacity:0,
              x:40,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            className="relative"
          >


            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_30px_80px_rgba(15,23,42,.12)]

                sm:p-8
              "
            >


              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <p className="text-sm text-slate-500">
                    Appointment
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Book Sample
                  </h3>

                </div>


                <div
                  className="
                    rounded-2xl
                    bg-blue-50
                    p-4
                  "
                >

                  <FiCalendar
                    className="text-2xl text-blue-600"
                  />

                </div>

              </div>




              <div className="mt-8 space-y-4">


                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-slate-50
                    p-4
                  "
                >

                  <FiHome className="text-blue-600" />

                  <div>

                    <p className="text-sm text-slate-500">
                      Service
                    </p>

                    <p className="font-semibold">
                      Home Collection
                    </p>

                  </div>

                </div>



                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-slate-50
                    p-4
                  "
                >

                  <FiClock className="text-blue-600" />

                  <div>

                    <p className="text-sm text-slate-500">
                      Reports
                    </p>

                    <p className="font-semibold">
                      Same Day Delivery
                    </p>

                  </div>

                </div>



              </div>




              <div
                className="
                  mt-8
                  rounded-2xl
                  bg-blue-600
                  p-5
                  text-white
                "
              >

                <p className="text-sm text-blue-100">
                  Starting From
                </p>

                <div className="flex items-end justify-between">

                  <h4 className="text-3xl font-black">
                    ₹399
                  </h4>

                  <FiArrowRight size={24}/>

                </div>

              </div>


            </div>



          </motion.div>


        </div>


      </div>


    </section>
  );
}