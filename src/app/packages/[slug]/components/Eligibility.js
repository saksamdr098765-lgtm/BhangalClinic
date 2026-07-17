"use client";


import { motion } from "framer-motion";
import { FiActivity, FiBriefcase, FiHeart, FiTrendingUp, FiUserCheck, FiUsers } from "react-icons/fi";




export default function Eligibility({pkg}) {
const iconMap = {
  "briefcase": FiBriefcase,
  "users": FiUsers,
  "heart": FiHeart,
  "activity": FiActivity,
  "trending": FiTrendingUp,
  "userCheck": FiUserCheck,
};
  return (
    <section
      className="
        bg-white
        py-16

        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4

          sm:px-6
        "
      >

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-xs
              font-semibold
              text-blue-700

              sm:text-sm
            "
          >
            Who Should Take This Package?
          </span>


          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900

              sm:text-4xl

              lg:text-5xl
            "
          >
            Designed for Every
            <br />
            Stage of Life
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
            Whether you are maintaining a healthy lifestyle, managing
            health risks, or planning an annual checkup, this package
            provides valuable insights into your overall wellness.
          </p>

        </motion.div>


        {/* Cards */}

        <div
          className="
            mt-10
            grid
            gap-5

            sm:mt-14
            sm:gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >

          {pkg?.recommendedFor?.map((item, index) => {

         const Icon = iconMap[item.icon] || FiUsers;

            return (
              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-300

                  sm:p-7

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    transition

                    sm:h-14
                    sm:w-14

                    group-hover:bg-blue-100
                  "
                >
                  <Icon
                    className="
                      text-xl
                      text-blue-600

                      sm:text-2xl
                    "
                  />
                </div>


                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    text-slate-900

                    sm:mt-6
                    sm:text-xl
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600

                    sm:mt-4
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>


        {/* Bottom Note */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="
            mt-10
            rounded-3xl
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            to-cyan-50
            p-6

            sm:mt-16
            sm:p-10
          "
        >

          <h3
            className="
              text-xl
              font-bold
              text-slate-900

              sm:text-2xl
            "
          >
            Not sure if this package is right for you?
          </h3>


          <p
            className="
              mt-3
              text-sm
              leading-7
              text-slate-600

              sm:mt-4
              sm:text-base
              sm:leading-8
            "
          >
            Our healthcare team can help you select the right diagnostic
            package based on your age, lifestyle, medical history, and
            health concerns. Contact us for a personalized recommendation
            before booking.
          </p>

        </motion.div>

      </div>
    </section>
  );
}