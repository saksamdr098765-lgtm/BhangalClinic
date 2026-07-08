"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-slate-900">


      {/* Logo Background */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          rounded-full
        "
      >

        <Image
          src="/logo.jpg"
          width={600}
          height={600}
          alt=""
          className="
            opacity-[0.04]
            object-contain
           
          "
        />

      </div>



      {/* Glow */}

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
          right-0
          bottom-0
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
          py-14

          sm:px-6
          sm:py-20
        "
      >



        <div
          className="
            grid
            gap-12
            border-b
            border-slate-200
            pb-12

            lg:grid-cols-2
            lg:gap-16
          "
        >



          {/* Brand */}

          <div>


            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                "
              >

                <Image
                  src="/logo.jpg"
                  width={80}
                  height={80}
                  alt="Bhangal Clinical Laboratory"
                  className="object-contain"
                />

              </div>


              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Bhangal Clinical Laboratory
                </h3>

                <p className="text-sm text-slate-500">
                  Trusted Pathology Services
                </p>

              </div>


            </div>





            <h2
              className="
                mt-8
                text-3xl
                font-black
                leading-tight

                sm:text-5xl
              "
            >
              Accurate diagnostics.
              <br />
              Better healthcare.
            </h2>




            <p
              className="
                mt-5
                max-w-lg
                text-base
                leading-7
                text-slate-600

                sm:text-lg
              "
            >
              Reliable pathology testing with modern laboratory
              technology, home sample collection, and secure
              digital reports.
            </p>


          </div>







          {/* Links */}

          <div
            className="
              grid
              gap-8

              sm:grid-cols-3
            "
          >



            <div>

              <h4 className="font-bold">
                Quick Links
              </h4>


              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <Link className="block hover:text-blue-600" href="/">
                  Home
                </Link>

                <Link className="block hover:text-blue-600" href="/tests">
                  Tests
                </Link>

                <Link className="block hover:text-blue-600" href="/packages">
                  Packages
                </Link>

                <Link className="block hover:text-blue-600" href="/about">
                  About
                </Link>

              </div>

            </div>





            <div>

              <h4 className="font-bold">
                Services
              </h4>


              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <p>Blood Tests</p>
                <p>Home Collection</p>
                <p>Health Packages</p>
                <p>Digital Reports</p>

              </div>

            </div>





            <div>

              <h4 className="font-bold">
                Contact
              </h4>


              <div className="mt-5 space-y-4 text-sm text-slate-500">


                <div className="flex gap-3">
                  <FiPhone className="text-blue-600" />
                  <span>
                    +91 XXXXX XXXXX
                  </span>
                </div>



                <div className="flex gap-3">
                  <FiMail className="text-blue-600" />
                  <span>
                    hello@example.com
                  </span>
                </div>



                <div className="flex gap-3">
                  <FiMapPin className="text-blue-600" />
                  <span>
                    Mohali, Punjab
                  </span>
                </div>


              </div>


            </div>


          </div>



        </div>






        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            pt-8
            text-sm
            text-slate-500

            md:flex-row
          "
        >

          <p>
            © 2026 Bhangal Clinical Laboratory. All rights reserved.
          </p>


          <div className="flex gap-5">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link
              href="/"
              className="flex items-center gap-1"
            >
              Top
              <FiArrowUpRight />
            </Link>

          </div>


        </div>


      </div>


    </footer>
  );
}