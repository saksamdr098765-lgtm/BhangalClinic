"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import {
  FaHeartPulse,
  FaUserDoctor,
  FaMicroscope,
  FaVialCircleCheck,
  FaHouseMedical,
} from "react-icons/fa6";


const steps = [
  {
    title:"Choose Concern",
    icon:FaHeartPulse,
    color:"bg-rose-50 text-rose-600",
  },
  {
    title:"Health Review",
    icon:FaUserDoctor,
    color:"bg-blue-50 text-blue-600",
  },
  {
    title:"Lab Analysis",
    icon:FaMicroscope,
    color:"bg-indigo-50 text-indigo-600",
  },
  {
    title:"Recommended Tests",
    icon:FaVialCircleCheck,
    color:"bg-emerald-50 text-emerald-600",
  },
  {
    title:"Home Collection",
    icon:FaHouseMedical,
    color:"bg-cyan-50 text-cyan-600",
  },
];


export default function SymptomAssessmentSection(){

return (

<section className="
relative
overflow-hidden
py-20
">


<div className="
absolute
inset-0
bg-gradient-to-b
from-white
via-blue-50/40
to-white
"/>


<div className="
relative
mx-auto
max-w-7xl
px-6
">


<div className="
grid
items-center
gap-14

lg:grid-cols-2
">





{/* LEFT */}


<div>


<span className="
inline-flex
items-center
gap-2
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-700
">

<FaUserDoctor/>

Smart Health Assessment

</span>



<h2 className="
mt-6
text-4xl
font-black
leading-tight
text-slate-900

sm:text-6xl
">

Understand Your

<br/>

<span className="
text-blue-700
">
Health Better
</span>

</h2>




<p className="
mt-5
max-w-lg
text-lg
leading-8
text-slate-600
">

Answer simple health questions and get
recommended diagnostic tests based on your
body needs.

</p>




<div className="
mt-8
flex
items-center
gap-4
">


<Link

href="/health-assesment"

className="
flex
items-center
gap-3
rounded-2xl
bg-blue-700
px-7
py-4
font-semibold
text-white
shadow-lg
"

>

Start Assessment

<FiArrowRight/>

</Link>



<div className="
flex
items-center
gap-2
text-sm
text-slate-500
">

<FiCheckCircle
className="text-emerald-500"
/>

2 minutes

</div>


</div>



</div>








{/* RIGHT VISUAL */}



<div className="
relative
">



<div className="
absolute
inset-10
rounded-full
bg-blue-100/50
blur-3xl
"/>





<div className="
relative
rounded-[40px]
border
border-slate-100
bg-white
p-6
shadow-xl
">


<div className="
flex
items-center
justify-between
border-b
border-slate-100
pb-5
">


<div>

<p className="
text-sm
text-slate-400
">
Health Journey
</p>


<h3 className="
text-xl
font-bold
text-slate-900
">
Find Your Test
</h3>


</div>



<div className="
rounded-2xl
bg-blue-50
p-3
">

<FaMicroscope
className="text-blue-600"
size={24}
/>

</div>


</div>





<div className="
mt-6
space-y-4
">

{
steps.map((step,index)=>{


const Icon=step.icon;


return (

<div

key={step.title}

className="
flex
items-center
gap-4
rounded-2xl
border
border-slate-100
bg-slate-50/70
p-4
"

>


<div className={`
flex
h-12
w-12
items-center
justify-center
rounded-2xl
${step.color}
`}>

<Icon size={22}/>

</div>



<div className="flex-1">


<h4 className="
font-bold
text-slate-800
">

{step.title}

</h4>


</div>



<div className="
flex
h-6
w-6
items-center
justify-center
rounded-full
bg-emerald-100
">

<FiCheckCircle
className="text-emerald-600"
size={14}
/>

</div>



</div>


)


})

}

</div>




</div>


</div>




</div>


</div>


</section>

)

}