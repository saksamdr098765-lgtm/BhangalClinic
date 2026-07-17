"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiUsers,
  FiClock,
  FiHome,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";


const reasons = [

  {
    icon: FiUsers,
    title: "Experienced Healthcare Team",
    description:
      "Skilled laboratory professionals focused on precision, safety, and patient satisfaction.",
  },
  {
    icon: FiHome,
    title: "Convenient Home Collection",
    description:
      "Safe and hygienic sample collection at your doorstep by trained professionals.",
  },
  {
    icon: FiClock,
    title: "Fast & Secure Reports",
    description:
      "Receive digitally accessible reports within the committed turnaround time.",
  },
];


const highlights = [
  "Advanced laboratory testing standards",
  "Secure digital health reports",
  "Comfortable doorstep sample collection",
  "Affordable preventive healthcare solutions",
];


export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-2
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
            transition={{
              duration:.6,
            }}
            viewport={{
              once:true,
            }}
          >

            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                shadow-sm
              "
            >
              Why Choose Our Laboratory
            </span>


            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900

                lg:text-5xl
              "
            >
              Reliable Diagnostics
              <br />
              You Can Trust
            </h2>


            <p
              className="
                mt-8
                text-lg
                leading-8
                text-slate-600
              "
            >
              Bhangal Clinical Laboratory provides accurate diagnostic
              testing with a strong focus on quality, technology, and
              patient care. Our standardized processes help deliver
              reliable health insights for individuals, families, and
              healthcare providers.
            </p>


            <p
              className="
                mt-5
                text-lg
                leading-8
                text-slate-600
              "
            >
              From preventive health packages to routine investigations,
              we make healthcare simpler with transparent pricing,
              convenient home collection, and secure digital reports.
            </p>



            <div
              className="
                mt-10
                space-y-4
              "
            >

              {highlights.map((item)=>(
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                    "
                  >
                    <FiCheckCircle className="text-blue-600"/>
                  </div>


                  <span
                    className="
                      font-medium
                      text-slate-700
                    "
                  >
                    {item}
                  </span>

                </div>
              ))}

            </div>


          </motion.div>




          {/* Right Cards */}

          <motion.div
            initial={{
              opacity:0,
              x:40,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            transition={{
              duration:.6,
            }}
            viewport={{
              once:true,
            }}
            className="space-y-5"
          >

            {reasons.map((item,index)=>{

              const Icon=item.icon;

              return(
                <motion.div
                  key={item.title}
                  initial={{
                    opacity:0,
                    y:20,
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                  }}
                  transition={{
                    delay:index*.08,
                  }}
                  viewport={{
                    once:true,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >

                  <div className="flex gap-5">


                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                      "
                    >
                      <Icon className="text-2xl text-blue-600"/>
                    </div>



                    <div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>


                      <p
                        className="
                          mt-2
                          leading-7
                          text-slate-600
                        "
                      >
                        {item.description}
                      </p>


                    </div>


                  </div>


                </motion.div>
              );

            })}



            {/* Trust Banner */}

            <div
              className="
                rounded-[30px]
                bg-blue-600
                p-8
                text-white
              "
            >

              <FiShield className="text-3xl"/>


              <h3
                className="
                  mt-5
                  text-2xl
                  font-bold
                "
              >
                Healthcare Built on Trust
              </h3>


              <p
                className="
                  mt-3
                  leading-7
                  text-blue-100
                "
              >
                Every sample is collected safely, processed with
                advanced laboratory procedures, and handled with
                complete care to provide dependable diagnostic results.
              </p>


            </div>


          </motion.div>


        </div>

      </div>

    </section>
  );
}