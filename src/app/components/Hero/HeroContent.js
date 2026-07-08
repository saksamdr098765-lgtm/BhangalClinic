"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiClock,
  FiHome,
} from "react-icons/fi";

import SearchBar from "./SearchBar";


const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  animate: {
    opacity: 1,
    y: 0,
  },
};


export default function HeroContent() {
  return (
    <div
      className="
        w-full
        max-w-2xl
      "
    >


      {/* Badge */}

      <motion.div
        {...fadeUp}
        transition={{
          duration:.5,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-200
          bg-white/80
          px-3
          py-2
          shadow-sm
          backdrop-blur-xl

          sm:px-4
        "
      >

        <span
          className="
            h-2
            w-2
            shrink-0
            rounded-full
            bg-emerald-500
          "
        />


        <span
          className="
            text-xs
            font-medium
            text-slate-700

            sm:text-sm
          "
        >
          Home Sample Collection Available
        </span>


      </motion.div>





      {/* Heading */}


      <motion.h1
        {...fadeUp}
        transition={{
          delay:.15,
        }}
        className="
          mt-6
          text-[42px]
          font-black
          leading-[0.95]
          tracking-tight
          text-slate-900

          sm:text-5xl

          md:text-6xl

          lg:text-7xl

          xl:text-[82px]
        "
      >

        Know Your
        <br />

        <span
          className="
            bg-gradient-to-r
            from-slate-900
            via-blue-700
            to-violet-600
            bg-clip-text
            text-transparent
          "
        >
          Health.
        </span>


      </motion.h1>





      {/* Description */}


      <motion.p
        {...fadeUp}
        transition={{
          delay:.3,
        }}
        className="
          mt-5
          max-w-xl
          text-base
          leading-7
          text-slate-600

          sm:mt-7
          sm:text-lg
          sm:leading-8
        "
      >

        Book pathology tests online, schedule home sample
        collection, and receive accurate digital reports—
        all from one beautifully simple experience.

      </motion.p>






      {/* Search */}


      <motion.div
        {...fadeUp}
        transition={{
          delay:.45,
        }}
        className="
          mt-6

          sm:mt-10
        "
      >

        <SearchBar />

      </motion.div>






      {/* Buttons */}


      <motion.div
        {...fadeUp}
        transition={{
          delay:.6,
        }}
        className="
          mt-6
          flex
          flex-col
          gap-3

          sm:mt-8
          sm:flex-row
        "
      >


        <button
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            bg-blue-600
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-lg
            shadow-blue-600/20
            transition
            hover:-translate-y-1

            sm:w-auto
            sm:py-4
          "
        >

          Book Test

          <FiArrowRight
            className="
              transition
              group-hover:translate-x-1
            "
          />

        </button>



        <button
          className="
            w-full
            rounded-full
            border
            border-slate-200
            bg-white
            px-7
            py-3.5
            font-semibold
            text-slate-700
            transition
            hover:border-blue-300
            hover:bg-blue-50

            sm:w-auto
            sm:py-4
          "
        >

          Explore Packages

        </button>


      </motion.div>






      {/* Trust Cards */}


      <motion.div
        {...fadeUp}
        transition={{
          delay:.75,
        }}
        className="
          mt-8
          grid
          grid-cols-1
          gap-3

          sm:mt-12
          sm:grid-cols-3
          sm:gap-4
        "
      >


        {[
          {
            icon:FiHome,
            text:"Home Collection",
          },

          {
            icon:FiClock,
            text:"Fast Reports",
          },

          {
            icon:FiShield,
            text:"Accurate Testing",
          },

        ].map((item)=>{


          const Icon=item.icon;


          return (

            <div
              key={item.text}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-100
                bg-white/70
                px-4
                py-3
                backdrop-blur-lg
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                "
              >

                <Icon
                  className="text-blue-600"
                />

              </div>


              <span
                className="
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                {item.text}
              </span>


            </div>

          );


        })}


      </motion.div>


    </div>
  );
}