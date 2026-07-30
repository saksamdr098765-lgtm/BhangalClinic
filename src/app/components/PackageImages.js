"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

import { FiMessageCircle } from "react-icons/fi";
import SITE_CONFIG from "../SITE_CONFIG";

import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css/navigation";  

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { trackPackageClick } from "../lib/tracking";
const packages = [
  {
    name:"bhangal ayush profile 2.1",
   image:"/carausol/bhangal-ayush-profile-2-1.webp"
  },
  {
    name:"bhangal ayush profile 3.1",
 image:"/carausol/bhangal-ayush-profile-3-1.webp"
  },
  {
    name:"bhangal ayush profile 3",
   image:"/carausol/bhangal-ayush-profile-3.webp"
  },
  {
    name:"bhangal ayush profile 2",
   image:"/carausol/bhangal-ayush-profile-2.webp"
  },
  {
    name:"bhangal dengue profile",
 image:"/carausol/bhangal-dengue-profile.webp"
  },
  {
    name:"bhangal diabetic profile",
  image:"/carausol/bhangal-diabetic-profile.webp"
  },
];



export default function PackageImageCarousel(){



const whatsapp = (pkg)=>{
  trackPackageClick(`whatsapp-${pkg.name}`)

const message =
`Hello, I want details about ${pkg.name} test`;

window.open(
`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`,
"_blank"
);

};



return (

<section
className="
relative
overflow-hidden
bg-white
py-16
"
>


{/* Medical glow */}

<div
className="
absolute
left-1/2
top-0
h-72
w-72
-translate-x-1/2
rounded-full
bg-blue-100/40
blur-[120px]
"
/>



<div
className="
relative
mx-auto
max-w-7xl
px-6
"
>



<div className="mb-8 flex items-end justify-between">
  <div>
    <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
      Health Packages
    </p>

    <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
      Explore Our Packages
    </h2>
  </div>

  <div className="hidden gap-3 md:flex">
    <button
      className="
        package-prev
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-slate-200
        bg-white
        shadow-sm
        transition
        hover:border-blue-500
        hover:bg-blue-50
      "
    >
      <FiChevronLeft size={22} />
    </button>

    <button
      className="
        package-next
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-slate-200
        bg-white
        shadow-sm
        transition
        hover:border-blue-500
        hover:bg-blue-50
      "
    >
      <FiChevronRight size={22} />
    </button>
  </div>
</div>







<Swiper
  modules={[Autoplay, Navigation]}
  navigation={{
    prevEl: ".package-prev",
    nextEl: ".package-next",
  }}
  spaceBetween={18}
  slidesPerView={1.8}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  }}
  className="!overflow-visible"
>


{
packages.map((pkg)=>(


<SwiperSlide key={pkg.name}>


<button

onClick={()=>whatsapp(pkg)}

className="
group
relative
block
w-full
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
shadow-sm
transition
hover:-translate-y-1
hover:shadow-xl
"

>


<div
className="
relative
aspect-[3/4]
overflow-hidden
"
>


<Image

src={pkg.image}

alt={pkg.name}

fill

className="
object-cover
transition
duration-500
group-hover:scale-105
"

/>



{/* Overlay */}

<div
className="
absolute
inset-x-0
bottom-0
h-24
bg-gradient-to-t
from-slate-900/60
to-transparent
"
/>




<div
className="
absolute
bottom-3
left-3
right-3
"
>


<p
className="
text-left
text-sm
font-bold
text-white
"
>

{pkg.name}

</p>


</div>



</div>






{/* WhatsApp */}

<div
className="
absolute
right-3
top-3
flex
h-9
w-9
items-center
justify-center
rounded-full
bg-white
shadow-lg
"
>


<FiMessageCircle
className="
text-emerald-600
"
size={18}
/>


</div>



</button>



</SwiperSlide>


))

}



</Swiper>





</div>


</section>


)

}