"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiShield,
  FiHeart,
  FiActivity,
  FiFileText,
} from "react-icons/fi";
import { FaMicroscope, FaUserDoctor } from "react-icons/fa6";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">


      {/* Healthcare Background */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-white
        via-blue-50/40
        to-white
        "
      />


      <div
        className="
        absolute
        -left-40
        top-20
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-200/30
        blur-[140px]
        "
      />


      <div
        className="
        absolute
        -right-40
        bottom-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-cyan-200/30
        blur-[150px]
        "
      />



      <div
        className="
        relative
        mx-auto
        max-w-7xl
        px-5
        sm:px-6
        "
      >


        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-blue-100
          bg-white
          p-6
          shadow-[0_30px_80px_rgba(37,99,235,.12)]

          sm:p-10
          lg:p-14
          "
        >



          {/* Medical floating icons */}

          <div
            className="
            absolute
            right-8
            top-8
            hidden
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            bg-blue-50
            text-blue-600
            lg:flex
            "
          >
            <FiHeart size={42}/>
          </div>



          <div
            className="
            absolute
            bottom-10
            right-32
            hidden
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-cyan-50
            text-cyan-600
            lg:flex
            "
          >
            <FaMicroscope size={26}/>
          </div>





          <div className="max-w-4xl">


            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
              "
            >

              <FiShield/>

              Trusted Diagnostic Care

            </div>





            <h2
              className="
              mt-6
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900

              sm:text-5xl
              lg:text-6xl
              "
            >

              Your Health.
              <br/>

              <span
                className="
                bg-gradient-to-r
                from-blue-700
                via-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent
                "
              >
                Our Priority.
              </span>


            </h2>





            <p
              className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600

              sm:text-lg
              "
            >

              Get reliable pathology testing with expert care,
              doorstep sample collection and accurate digital reports
              from trusted laboratory professionals.

            </p>






            {/* Medical Trust Items */}


            <div
              className="
              mt-8
              grid
              grid-cols-2
              gap-3

              sm:grid-cols-4
              "
            >


              {[
                {
                  icon:FiShield,
                  title:"Safe Testing"
                },
                {
                  icon:FaMicroscope,
                  title:"Advanced Lab"
                },
                {
                  icon:FiActivity,
                  title:"Accurate Results"
                },
                {
                  icon:FiFileText,
                  title:"Digital Reports"
                }
              ].map((item)=>{


                const Icon=item.icon;


                return (

                  <div
                    key={item.title}
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    px-3
                    py-3
                    "
                  >

                    <div
                      className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-blue-600
                      shadow-sm
                      "
                    >

                      <Icon/>

                    </div>


                    <span
                      className="
                      text-xs
                      font-semibold
                      text-slate-700
                      "
                    >
                      {item.title}
                    </span>


                  </div>

                )


              })}


            </div>






            {/* Buttons */}


            <div
              className="
              mt-10
              flex
              flex-col
              gap-3

              sm:flex-row
              "
            >


              <Link
                href="/contact"
                className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                hover:-translate-y-1
                hover:bg-blue-700
                "
              >

                Book Health Test

                <FiArrowRight
                  className="
                  transition
                  group-hover:translate-x-1
                  "
                />

              </Link>




              <Link
                href="/about-us"
                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
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

                <FaUserDoctor/>

                Know Our Lab

              </Link>



            </div>


          </div>



        </motion.div>


      </div>


    </section>
  );
}