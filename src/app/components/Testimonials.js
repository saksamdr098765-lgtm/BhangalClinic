"use client";

import { motion } from "framer-motion";

import {
  FiStar,
  FiCheckCircle,
  FiShield,
  FiClock,
  FiHome,
} from "react-icons/fi";

import {
  FaMicroscope,
  FaUserDoctor,
} from "react-icons/fa6";


const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mohali",
    service: "Full Body Checkup",
    text:
      "Home sample collection was smooth and reports were delivered quickly. The entire experience was professional.",
  },
  {
    name: "Priya Verma",
    location: "Chandigarh",
    service: "Thyroid Profile",
    text:
      "Easy booking process with reliable reports. The staff was very helpful and supportive.",
  },
  {
    name: "Aman Singh",
    location: "Zirakpur",
    service: "Health Screening",
    text:
      "Accurate reports and excellent service quality. I recommend it for family health testing.",
  },
];


export default function Testimonials() {

return (

<section
className="
relative
overflow-hidden
bg-gradient-to-b
from-slate-50
via-white
to-teal-50/20
py-20
sm:py-28
"
>


{/* Medical Background */}

<div
className="
absolute
-left-40
top-20
h-[420px]
w-[420px]
rounded-full
bg-sky-100/50
blur-[130px]
"
/>


<div
className="
absolute
-right-40
bottom-0
h-[400px]
w-[400px]
rounded-full
bg-teal-100/40
blur-[140px]
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


{/* Heading */}


<div className="text-center">


<span
className="
inline-flex
items-center
gap-2
rounded-full
border
border-teal-100
bg-teal-50
px-4
py-2
text-sm
font-semibold
text-teal-700
"
>

<FaUserDoctor/>

Patient Trust

</span>




<h2
className="
mt-6
text-4xl
font-black
tracking-tight
text-slate-900

sm:text-5xl
lg:text-6xl
"
>

Trusted Healthcare

<span
className="
block
text-[#0F6CBD]
"
>

Experience

</span>


</h2>



<p
className="
mx-auto
mt-5
max-w-2xl
text-slate-600
"
>

Thousands of patients trust us for
accurate diagnostics, home collection
and reliable healthcare services.

</p>


</div>








{/* Medical Trust Stats */}


<div
className="
mx-auto
mt-12
grid
max-w-5xl
grid-cols-2
gap-4

md:grid-cols-4
"
>


{[

{
icon:FaMicroscope,
value:"15K+",
label:"Tests Completed"
},

{
icon:FiShield,
value:"99%",
label:"Report Accuracy"
},

{
icon:FiHome,
value:"Home",
label:"Sample Collection"
},

{
icon:FiClock,
value:"24-48h",
label:"Report Delivery"
}

].map((item)=>{


const Icon=item.icon;


return (

<div
key={item.label}
className="
rounded-3xl
border
border-slate-200
bg-white
p-5
text-center
shadow-sm
"
>


<div
className="
mx-auto
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-sky-50
"
>


<Icon
className="
text-[#0F6CBD]
"
size={22}
/>


</div>



<h3
className="
mt-3
text-xl
font-black
text-slate-900
"
>

{item.value}

</h3>



<p
className="
text-sm
text-slate-500
"
>

{item.label}

</p>


</div>


)


})}


</div>








{/* Patient Reviews */}


<div
className="
mt-14
grid
gap-6

lg:grid-cols-3
"
>


{
testimonials.map((item,index)=>(


<motion.article

key={item.name}

initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

whileHover={{
y:-5
}}

className="
rounded-3xl
border
border-slate-200
bg-white
p-7
shadow-sm
transition
hover:shadow-xl
"
>


<div
className="
flex
items-center
justify-between
"
>


<div
className="
flex
gap-1
"
>

{
[1,2,3,4,5].map((i)=>(

<FiStar
key={i}
className="
fill-amber-400
text-amber-400
"
/>

))
}


</div>


<div
className="
flex
h-8
w-8
items-center
justify-center
rounded-full
bg-emerald-50
"
>

<FiCheckCircle
className="
text-emerald-600
"
/>

</div>


</div>





<p
className="
mt-5
leading-7
text-slate-600
"
>

"{item.text}"

</p>





<div
className="
mt-5
inline-flex
rounded-full
bg-teal-50
px-3
py-1
text-xs
font-semibold
text-teal-700
"
>

{item.service}

</div>






<div
className="
mt-6
flex
items-center
gap-3
border-t
border-slate-100
pt-5
"
>


<div
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-sky-100
font-bold
text-[#0F6CBD]
"
>

{item.name[0]}

</div>



<div>

<h4
className="
font-bold
text-slate-900
"
>

{item.name}

</h4>


<p
className="
text-sm
text-slate-500
"
>

{item.location}

</p>


</div>


</div>



</motion.article>


))

}


</div>



</div>


</section>

)

}