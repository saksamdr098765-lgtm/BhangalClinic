"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiHome,
  FiClock,
  FiShield,
  FiFileText,
  FiCheck,
} from "react-icons/fi";


const features = [
  {
    icon: FiHome,
    title: "Home Sample Collection",
    description:
      "Book online and our trained phlebotomist visits your home at your preferred time.",
    color: "bg-blue-50",
    icon: "text-blue-600",
  },
  {
    icon: FiClock,
    title: "Same Day Reports",
    description:
      "Most routine pathology reports are delivered digitally within the same day.",
    color: "bg-emerald-50",
    icon: "text-emerald-600",
  },
  {
    icon: FiShield,
    title: "Reliable Diagnostics",
    description:
      "Modern laboratory equipment with strict quality control for dependable results.",
    color: "bg-violet-50",
    icon: "text-violet-600",
  },
  {
    icon: FiFileText,
    title: "Online Booking",
    description:
      "Book tests, pay online and download reports anytime from any device.",
    color: "bg-orange-50",
    icon: "text-orange-600",
  },
];


export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
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
          h-60
          w-60
          rounded-full
          bg-blue-200/20
          blur-[90px]

          sm:h-80
          sm:w-80
          sm:blur-[120px]
        "
      />


      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-cyan-200/20
          blur-[100px]

          sm:h-96
          sm:w-96
          sm:blur-[120px]
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
            gap-12

            lg:grid-cols-2
            lg:gap-16
          "
        >


          {/* Content */}

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
                rounded-full
                bg-blue-100
                px-3
                py-2
                text-xs
                font-semibold
                text-blue-700

                sm:px-4
                sm:text-sm
              "
            >
              Why Patients Trust Us
            </span>


            <h2
              className="
                mt-5
                text-3xl
                font-black
                leading-tight
                text-slate-900

                sm:mt-6
                sm:text-4xl

                lg:text-5xl
              "
            >
              Modern diagnostics,
              <br />
              delivered with care.
            </h2>


            <p
              className="
                mt-5
                text-base
                leading-7
                text-slate-600

                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              From online booking to digital reports, we've designed every
              step to make diagnostic testing faster, easier and more reliable.
            </p>



            {/* Points */}

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">

              {[
                "Experienced Pathologists",
                "Advanced Laboratory Equipment",
                "Accurate & Reliable Reports",
                "Fast Home Sample Collection",
              ].map((item)=>(

                <div
                  key={item}
                  className="flex items-center gap-3 sm:gap-4"
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                      text-white

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FiCheck />
                  </div>


                  <span
                    className="
                      text-sm
                      font-medium
                      text-slate-700

                      sm:text-lg
                    "
                  >
                    {item}
                  </span>


                </div>

              ))}

            </div>


          </motion.div>





          {/* Image */}

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
                relative
                h-[360px]
                overflow-hidden
                rounded-[28px]
                shadow-2xl

                sm:h-[460px]

                lg:h-[560px]
                lg:rounded-[36px]
              "
            >

              <Image
                src="/doctor.jpg"
                fill
                alt="Bhangal Clinical Laboratory"
                className="object-cover"
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-black/5
                  to-transparent
                "
              />

            </div>




            {/* Floating Card 1 */}

            <div
              className="
                absolute
                left-3
                top-5
                rounded-2xl
                bg-white
                p-3
                shadow-xl

                sm:left-6
                sm:top-8
                sm:rounded-3xl
                sm:p-5

                lg:-left-10
                lg:top-10
              "
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-50 p-2.5 sm:rounded-2xl sm:p-3">

                  <FiHome className="text-lg text-blue-600 sm:text-xl" />

                </div>


                <div>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Service
                  </p>

                  <h4 className="text-sm font-bold sm:text-base">
                    Home Collection
                  </h4>

                </div>

              </div>

            </div>





            {/* Floating Card 2 */}

            <div
              className="
                absolute
                bottom-5
                right-3
                rounded-2xl
                bg-white
                p-3
                shadow-xl

                sm:right-6
                sm:bottom-8
                sm:rounded-3xl
                sm:p-5

                lg:-right-10
                lg:bottom-12
              "
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-emerald-50 p-2.5 sm:rounded-2xl sm:p-3">

                  <FiClock className="text-lg text-emerald-600 sm:text-xl" />

                </div>


                <div>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Reports
                  </p>

                  <h4 className="text-sm font-bold sm:text-base">
                    Same Day
                  </h4>

                </div>


              </div>

            </div>


          </motion.div>


        </div>


      </div>


    </section>
  );
}