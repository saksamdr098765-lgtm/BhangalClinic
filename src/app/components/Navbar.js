"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  FiPhone,
  FiActivity,
  FiHeart,
  FiHome,
  FiInfo,
  FiMail,
  FiCalendar,
} from "react-icons/fi";


const navLinks = [
  {
    name: "Tests",
    href: "/tests",
    icon: FiActivity,
    color: "text-blue-600",
  },
  {
    name: "Health Packages",
    href: "/packages",
    icon: FiHeart,
    color: "text-rose-500",
  },
  {
    name: "Home Collection",
    href: "/home-collection",
    icon: FiHome,
    color: "text-emerald-600",
  },
  {
    name: "About",
    href: "/about",
    icon: FiInfo,
    color: "text-violet-600",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FiMail,
    color: "text-orange-500",
  },
];


export default function Navbar() {

  const [scrolled,setScrolled] = useState(false);
  const [mobileOpen,setMobileOpen] = useState(false);


  useEffect(()=>{

    const handleScroll = () =>
      setScrolled(window.scrollY > 20);


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  },[]);



  return (
    <>


      <motion.header
        initial={{
          y:-80,
        }}
        animate={{
          y:0,
        }}
        transition={{
          duration:.6,
        }}
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300

          ${
            scrolled
            ?
            "border-b border-slate-200 bg-white/90 backdrop-blur-xl"
            :
            "bg-white/60 backdrop-blur-md"
          }
        `}
      >


        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-4

            sm:px-6
          "
        >



          {/* Logo */}


          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div
              className="
                relative
                h-11
                w-11
                overflow-hidden
                rounded-full
                border
                border-slate-200
                bg-white
              "
            >

              <Image
                src="/logo.jpg"
                fill
                alt="Bhangal Clinical Laboratory"
                className="object-contain"
              />

            </div>


            <div>

              <h2
                className="
                  text-base
                  font-bold
                  text-slate-900

                  sm:text-lg
                "
              >
                Bhangal Clinical
              </h2>


              <p className="-mt-1 text-xs text-slate-500 sm:text-sm">
                Laboratory
              </p>


            </div>


          </Link>





          {/* Desktop Menu */}


          <nav
            className="
              hidden
              items-center
              gap-7

              lg:flex
            "
          >

            {navLinks.map((item)=>{

              const Icon = item.icon;


              return (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-600
                    transition
                    hover:text-slate-900
                  "
                >

                  <Icon
                    className={`
                      transition
                      group-hover:scale-110
                      ${item.color}
                    `}
                  />

                  {item.name}


                </Link>

              );

            })}


          </nav>





          {/* Desktop Actions */}


          <div
            className="
              hidden
              items-center
              gap-3

              lg:flex
            "
          >


            <a
              href="tel:+919999999999"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-2.5
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:border-blue-300
              "
            >

              <FiPhone className="text-blue-600"/>

              Call Now

            </a>




            <Link
              href="/book-test"
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                hover:-translate-y-1
              "
            >

              <FiCalendar />

              Book Test

            </Link>


          </div>





          {/* Mobile Button */}


          <button
            onClick={()=>setMobileOpen(!mobileOpen)}
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-2

              lg:hidden
            "
          >

            {
              mobileOpen
              ?
              <HiOutlineX size={24}/>
              :
              <HiOutlineMenuAlt3 size={24}/>
            }

          </button>


        </div>


      </motion.header>







      {/* Mobile Menu */}


      <AnimatePresence>

        {
          mobileOpen && (

            <motion.div

              initial={{
                opacity:0,
                y:-20,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              exit={{
                opacity:0,
                y:-20,
              }}

              className="
                fixed
                left-4
                right-4
                top-20
                z-40
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-2xl

                lg:hidden
              "
            >


              <div className="space-y-4">


                {
                  navLinks.map((item)=>{

                    const Icon=item.icon;


                    return (

                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={()=>setMobileOpen(false)}
                        className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          bg-slate-50
                          px-4
                          py-3
                          font-medium
                          text-slate-700
                        "
                      >

                        <Icon
                          className={item.color}
                        />

                        {item.name}

                      </Link>

                    )

                  })
                }



                <a
                  href="tel:+919999999999"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-slate-200
                    py-3
                    font-semibold
                  "
                >

                  <FiPhone className="text-blue-600"/>

                  Call Now

                </a>



                <Link
                  href="/book-test"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-blue-600
                    py-3
                    font-semibold
                    text-white
                  "
                >

                  <FiCalendar/>

                  Book Test

                </Link>


              </div>


            </motion.div>

          )
        }


      </AnimatePresence>


    </>
  );
}