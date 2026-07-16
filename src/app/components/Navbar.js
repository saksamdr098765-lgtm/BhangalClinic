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
  FiHeart,
  FiCalendar,
  FiActivity,
  FiInfo,
  FiMail,
} from "react-icons/fi";

import { FaHome } from "react-icons/fa";
import SITE_CONFIG from "../SITE_CONFIG";


const navLinks = [
  {
    name:"Home",
    href:"/",
    icon:FaHome,
  },
  {
    name:"Health Packages",
    href:"/packages",
    icon:FiHeart,
  },
  {
    name:"About Us",
    href:"/about-us",
    icon:FiInfo,
  },
  {
    name:"Contact",
    href:"/contact",
    icon:FiMail,
  },
];


export default function Navbar(){

const [scrolled,setScrolled]=useState(false);
const [mobileOpen,setMobileOpen]=useState(false);


useEffect(()=>{

 const handleScroll=()=>{
  setScrolled(window.scrollY>30)
 }

 window.addEventListener("scroll",handleScroll);

 return ()=>window.removeEventListener("scroll",handleScroll)

},[])



return (

<>

<motion.header

initial={{y:-100}}
animate={{y:0}}

className={`
fixed
top-0
left-0
z-50
w-full
transition-all
duration-300

${
scrolled
?
"bg-white/95 border-b border-blue-100 shadow-sm backdrop-blur-xl"
:
"bg-white/70 backdrop-blur-md"
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
px-5
sm:px-6
"
>


{/* LOGO */}

<Link
href="/"
className="
flex
items-center
gap-3
"
>

<div
className="
relative
h-12
w-12
overflow-hidden
rounded-2xl
border
border-blue-100
bg-white
shadow-sm
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
font-extrabold
tracking-tight
text-slate-900
sm:text-lg
"
>
Bhangal Clinical
</h2>

<p
className="
flex
items-center
gap-1
text-xs
font-medium
text-blue-600
"
>

<FiActivity size={12}/>

Diagnostic Laboratory

</p>


</div>


</Link>





{/* DESKTOP NAV */}

<nav
className="
hidden
items-center
gap-8
lg:flex
"
>


{
navLinks.map((item)=>{

const Icon=item.icon;


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
font-semibold
text-slate-600
transition
hover:text-blue-700
"

>


<Icon
className="
text-blue-600
transition
group-hover:scale-110
"
/>


{item.name}


</Link>

)

})
}


</nav>





{/* ACTIONS */}

<div
className="
hidden
items-center
gap-3
lg:flex
"
>


<a

href={`tel:${SITE_CONFIG.phone}`}

className="
flex
items-center
gap-2
rounded-full
border
border-blue-100
bg-white
px-5
py-3
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

href="/contact"

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
hover:bg-blue-700
"

>

<FiCalendar/>

Book Test

</Link>


</div>





{/* MOBILE */}

<button

onClick={()=>setMobileOpen(!mobileOpen)}

className="
rounded-xl
border
border-blue-100
bg-white
p-2
lg:hidden
"

>

{
mobileOpen
?
<HiOutlineX size={25}/>
:
<HiOutlineMenuAlt3 size={25}/>
}

</button>


</div>


</motion.header>







{/* MOBILE MENU */}

<AnimatePresence>

{
mobileOpen &&

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

className="
fixed
left-4
right-4
top-20
z-40
rounded-3xl
border
border-blue-100
bg-white
p-5
shadow-xl
lg:hidden
"

>


<div
className="
space-y-3
"
>


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
bg-blue-50/50
px-4
py-4
font-semibold
text-slate-700
"

>

<div
className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-blue-100
"
>

<Icon className="text-blue-600"/>

</div>


{item.name}


</Link>

)

})
}



<a

href={`tel:${SITE_CONFIG.phone}`}

className="
flex
items-center
justify-center
gap-2
rounded-2xl
border
border-blue-100
py-4
font-semibold
text-blue-700
"

>

<FiPhone/>

Call Now

</a>



<Link

href="/contact"

className="
flex
items-center
justify-center
gap-2
rounded-2xl
bg-blue-600
py-4
font-semibold
text-white
"

>

<FiCalendar/>

Book Test

</Link>


</div>


</motion.div>

}

</AnimatePresence>



</>

)

}