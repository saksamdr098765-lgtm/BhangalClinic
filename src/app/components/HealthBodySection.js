"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FaHeartPulse, FaBone, FaBrain, FaFlask } from "react-icons/fa6";
import { FiActivity, FiDroplet } from "react-icons/fi";


const bodyParts = [
  {
    title: "Heart Health",
    icon: FaHeartPulse,
    slug: "heart",
    color: "rose",
  },
  {
    title: "Thyroid",
    icon: FiActivity,
    slug: "thyroid",
    color: "indigo",
  },
  {
    title: "Blood",
    icon: FiDroplet,
    slug: "blood",
    color: "red",
  },
  {
    title: "Bone & Joint",
    icon: FaBone,
    slug: "arthritis",
    color: "amber",
  },
  {
    title: "Brain Health",
    icon: FaBrain,
    slug: "brain",
    color: "purple",
  },
  {
    title: "Vitamins",
    icon: FaFlask,
    slug: "vitamin",
    color: "emerald",
  },
];


const colors = {
  rose: {
    bg:"from-rose-50 to-white",
    icon:"bg-rose-100 text-rose-600",
  },

  indigo:{
    bg:"from-indigo-50 to-white",
    icon:"bg-indigo-100 text-indigo-600",
  },

  red:{
    bg:"from-red-50 to-white",
    icon:"bg-red-100 text-red-600",
  },

  amber:{
    bg:"from-amber-50 to-white",
    icon:"bg-amber-100 text-amber-600",
  },

  purple:{
    bg:"from-purple-50 to-white",
    icon:"bg-purple-100 text-purple-600",
  },

  emerald:{
    bg:"from-emerald-50 to-white",
    icon:"bg-emerald-100 text-emerald-600",
  },
};


export default function HealthBodySection(){

return (

<section
className="
relative
overflow-hidden
bg-white
py-24
"
>
    <div
className="
absolute
left-0
top-20
h-72
w-72
rounded-full
bg-blue-100/50
blur-[120px]
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
bg-cyan-100/40
blur-[120px]
"
/>

<div className="mx-auto max-w-7xl px-6">


<div className="text-center">

<p className="
text-sm
font-semibold
uppercase
tracking-[0.25em]
text-blue-600
">
Health Packages
</p>


<h2 className="
mt-4
text-4xl
font-black
text-slate-900
md:text-5xl
">
Choose By Body System
</h2>


<p className="
mx-auto
mt-4
max-w-xl
text-slate-600
">
Select a health area to find recommended diagnostic packages.
</p>


</div>



<div className="
mt-14
grid
grid-cols-2
gap-5
md:grid-cols-3
lg:grid-cols-6
">


{
bodyParts.map((part,index)=>{

const Icon = part.icon;
const theme = colors[part.color];


return (

<motion.div

key={part.slug}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.05
}}

viewport={{
once:true
}}

>


<Link

href={`/packages?category=${part.slug}`}

className={`
group
flex
aspect-square
flex-col
items-center
justify-center
rounded-[32px]
border
border-slate-200
bg-gradient-to-br
${theme.bg}
shadow-sm
transition-all
hover:-translate-y-2
hover:shadow-xl
`}

>


<div
className={`
flex
h-24
w-24
items-center
justify-center
rounded-full
${theme.icon}
transition
group-hover:scale-110
`}
>

<Icon size={45}/>

</div>



<h3
className="
mt-6
text-center
text-lg
font-bold
text-slate-900
"
>

{part.title}

</h3>


</Link>


</motion.div>


)

})

}


</div>


</div>


</section>

)

}