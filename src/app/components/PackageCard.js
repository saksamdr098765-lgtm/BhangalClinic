"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiHome,
  FiClock,
  FiShield,
} from "react-icons/fi";

import { packageTheme, packageThemeMap } from "../data/packages";


export default function PackageCard({
  pkg,
  featured = false,
}) {

  const savings = pkg.originalPrice - pkg.price;

  const discount = Math.round(
    (savings / pkg.originalPrice) * 100
  );


  const themeKey =
    packageThemeMap[pkg.slug] || "preventive";

  const theme = packageTheme[themeKey];

  const Icon = theme.icon;


  return (

    <motion.article

      initial={{
        opacity:0,
        y:20
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      whileHover={{
        y:-5
      }}

   className={`
relative
flex
w-full
flex-col
overflow-hidden
rounded-3xl
border
border-slate-200
${theme.cardBg}
shadow-sm
transition-all
hover:shadow-xl
`}

    >


      {/* Glow */}

      <div
        className={`
absolute
-right-10
-top-10
h-32
w-32
rounded-full
blur-3xl
opacity-25
${theme.glow}
`}
      />


      {/* Content */}

      <div className="relative flex flex-1 flex-col p-4">


        {/* Header */}

        <div className="flex gap-3">


          <div
            className={`
flex
h-10
w-10
shrink-0
items-center
justify-center
rounded-xl
${theme.iconBg}
`}
          >

            <Icon
              className={`${theme.iconColor} text-lg`}
            />

          </div>



          <div className="min-w-0 flex-1">


            <div className="flex flex-wrap gap-1.5">


              <span
                className={`
rounded-full
px-2
py-0.5
text-[10px]
font-semibold
${theme.badgeBg}
${theme.badgeColor}
`}
              >

                {pkg.tests} Tests

              </span>



              {
                discount > 0 &&
                <span
                  className="
rounded-full
bg-red-50
px-2
py-0.5
text-[10px]
font-semibold
text-red-600
"
                >

                  {discount}% OFF

                </span>
              }


            </div>



            <h3
              className="
mt-2
line-clamp-2
text-base
font-bold
leading-5
text-slate-900
truncate
"
            >

              {pkg.name}

            </h3>



          </div>


        </div>



        {/* Price Box */}


        <div
          className="
mt-4
rounded-2xl
border
border-white/70
bg-white/70
p-4
backdrop-blur
"
        >


          <p
            className="
text-[10px]
font-semibold
uppercase
tracking-widest
text-slate-500
"
          >

            Starting From

          </p>



          <div
            className="
mt-1
flex
items-center
gap-2
"
          >

            <h2
              className="
text-3xl
font-black
text-slate-900
"
            >

              ₹{pkg.price}

            </h2>


            <span
              className="
text-sm
text-slate-400
line-through
"
            >

              ₹{pkg.originalPrice}

            </span>


          </div>



          <div
            className="
mt-2
flex
gap-2
"
          >

            <span
              className="
rounded-full
bg-emerald-100
px-2.5
py-1
text-[10px]
font-bold
text-emerald-700
"
            >

              Save ₹{savings}

            </span>


            <span
              className={`
rounded-full
px-2.5
py-1
text-[10px]
font-bold
${theme.badgeBg}
${theme.badgeColor}
`}
            >

              {discount}% OFF

            </span>


          </div>


        </div>





        {/* Features */}


        <div
          className="
mt-4
grid
grid-cols-3
gap-2
"
        >


          {
            [
              {
                icon:FiHome,
                title:"Home"
              },
              {
                icon:FiClock,
                title:"24-48h"
              },
              {
                icon:FiShield,
                title:"NABL"
              }

            ].map((item,index)=>{


              const ItemIcon=item.icon;


              return (

                <div

                key={index}

                className="
rounded-xl
border
border-white
bg-white/70
p-2
text-center
"

                >

                  <div
                    className={`
mx-auto
flex
h-8
w-8
items-center
justify-center
rounded-lg
${theme.iconBg}
`}
                  >

                    <ItemIcon
                      size={15}
                      className={theme.iconColor}
                    />

                  </div>


                  <p
                    className="
mt-1
text-[10px]
font-bold
text-slate-800
"
                  >

                    {item.title}

                  </p>


                </div>


              )

            })

          }


        </div>





        {/* Tags */}


        <div
          className="
mt-3
flex
flex-wrap
gap-1.5
"
        >

          <span
            className={`
rounded-full
px-2.5
py-1
text-[10px]
font-semibold
${theme.badgeBg}
${theme.badgeColor}
`}
          >

            🧪 {pkg.tests} Tests

          </span>


          <span
            className="
rounded-full
bg-emerald-50
px-2.5
py-1
text-[10px]
font-semibold
text-emerald-700
"
          >

            ✔ Recommended

          </span>


        </div>






        {/* CTA */}


        <Link

          href={`/packages/${pkg.slug}`}

          className={`
mt-4
flex
h-11
items-center
justify-between
rounded-xl
px-4
text-sm
font-semibold
text-white
shadow-md
transition
hover:shadow-lg
${theme.button}
`}

        >


          <span>
            View Package
          </span>


          <span
            className="
flex
h-7
w-7
items-center
justify-center
rounded-full
bg-white/20
"
          >

            <FiArrowRight size={15}/>

          </span>


        </Link>





      



      </div>


    </motion.article>

  );
}