"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiInfo,
  FiHeart,
} from "react-icons/fi";


import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaGoogle,
  FaHome,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import SITE_CONFIG from "../SITE_CONFIG";
const navLinks = [
    {
    name: "Home",
    href: "/",
    icon: FaHome,
    color: "text-rose-600",
  },
 
  {
    name: "Health Packages",
    href: "/packages",
    icon: FiHeart,
    color: "text-rose-500",
  },
 
  {
    name: "Contact",
    href: "/contact",
    icon: FiMail,
    color: "text-orange-500",
  },
  {
    name: "About",
    href: "/about-us",
    icon: FiInfo,
    color: "text-violet-600",
  },
];

export default function Footer() {
  const router=useRouter()
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

              sm:grid-cols-2
            "
          >



            <div>

              <h4 className="font-bold">
                Quick Links
              </h4>


              <div className="mt-5 space-y-3 text-sm text-slate-500">
{navLinks.map((item)=>{
  const Icon= item.icon
  return    <Link
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
})}
              

              

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
                  {SITE_CONFIG.phone}
                  </span>
                </div>



                <div className="flex gap-3">
                  <FiMail className="text-blue-600 shrink-0" />
                  <span>
                  {SITE_CONFIG.email}
                  </span>
                </div>



                <div className="flex gap-3">
                  <FiMapPin className="text-blue-600 shrink-0" />
                  <span>
                  {SITE_CONFIG.address.line1}, 
                  {SITE_CONFIG.address.street}, 
                  {SITE_CONFIG.address.state}

                  </span>
                </div>


              </div>


            </div>


          </div>



        </div>




{/* Google Map */}

<div className="mt-14">

  <div className="mb-6 flex items-center justify-between">

    <div>

      <h3 className="text-2xl font-bold text-slate-900">
        Visit Our Laboratory
      </h3>

      <p className="mt-2 text-slate-600">
        Easily find us using Google Maps.
      </p>

    </div>

  </div>

  <div
    className="
      overflow-hidden
      rounded-[32px]
      border
      border-slate-200
      shadow-[0_20px_60px_rgba(15,23,42,.08)]
    "
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3412.2673743929913!2d76.1484061!3d31.213321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abf3a872c804b%3A0x3c7889898304438b!2sBhangal%20Clinical%20Laboratories%20%26%20ECG%20Garhshankar!5e0!3m2!1sen!2sin!4v1783939998979!5m2!1sen!2sin"
      width="100%"
      height="380"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

</div>
{/* Social Media */}

<div
  className="
    mt-12
    flex
    flex-col
    items-center
    justify-between
    gap-6

    md:flex-row
  "
>

  <div>

    <h3 className="text-xl font-bold text-slate-900">
      Follow Us
    </h3>

    <p className="mt-2 text-slate-500">
      Stay connected for health updates and announcements.
    </p>

  </div>

  <div className="flex items-center gap-4">

    {[
      {
        icon: <FaInstagram />,
        href: SITE_CONFIG.social.instagram,
      },
      {
        icon: <FaFacebookF />,
        href:  SITE_CONFIG.social.facebook,
      },
      {
        icon: <FaWhatsapp />,
        href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
      },
     
    ].map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-200
          bg-white
          text-xl
          text-slate-700
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:bg-blue-600
          hover:text-white
          hover:shadow-xl
        "
      >
        {item.icon}
      </a>
    ))}

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


        


        </div>


      </div>


    </footer>
  );
}