"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
} from "react-icons/fi";

import {
  FaHouseMedical,
  FaMicroscope,
  FaFileMedical,
  FaShieldHeart,
} from "react-icons/fa6";

import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { trackPageNavigation } from "@/app/lib/tracking";


const fadeUp = {
  initial:{
    opacity:0,
    y:25,
  },

  animate:{
    opacity:1,
    y:0,
  },
};



export default function HeroContent(){

const router = useRouter();


const trustItems=[

{
icon:FaHouseMedical,
title:"Home Collection",
desc:"Safe Pickup",
theme:"bg-emerald-50 text-emerald-600"
},

{
icon:FaMicroscope,
title:"Advanced Labs",
desc:"Quality Testing",
theme:"bg-blue-50 text-blue-600"
},

{
icon:FaFileMedical,
title:"Digital Reports",
desc:"Fast Delivery",
theme:"bg-cyan-50 text-cyan-600"
},


];


return (

<div
className="
w-full
max-w-2xl
"
>



{/* Healthcare Badge */}


<motion.div

{...fadeUp}

className="
inline-flex
items-center
gap-2
rounded-full
border
border-emerald-100
bg-emerald-50
px-4
py-2
"

>

<FaShieldHeart
className="
text-emerald-600
"
size={15}
/>


<span
className="
text-xs
font-semibold
text-emerald-700
sm:text-sm
"
>
Trusted Healthcare Partner
</span>


</motion.div>







{/* Heading */}


<motion.h1

{...fadeUp}

transition={{
delay:.15
}}

className="
mt-6
text-[42px]
font-black
leading-[1]
tracking-tight
text-slate-900

sm:text-5xl
md:text-6xl
lg:text-7xl
"

>


Better Health
<br/>


<span
className="
text-blue-700
"
>
Starts With
</span>


<br/>


<span
className="
text-teal-600
"
>
Better Testing
</span>


</motion.h1>







{/* Description */}


<motion.p

{...fadeUp}

transition={{
delay:.3
}}

className="
mt-6
max-w-xl
text-base
leading-7
text-slate-600

sm:text-lg
sm:leading-8
"

>

Comprehensive health checkups, preventive screenings,
and accurate diagnostics with convenient home sample
collection and trusted digital reports.

</motion.p>







{/* Search */}


<motion.div

{...fadeUp}

transition={{
delay:.45
}}

className="
mt-7
"

>

<SearchBar/>

</motion.div>







{/* Buttons */}


<motion.div

{...fadeUp}

transition={{
delay:.6
}}

className="
mt-7
flex
flex-col
gap-3

sm:flex-row
"

>


<button

onClick={()=>{trackPageNavigation("HeroContent-BookHealthTest"); router.push("/contact")}}


className="
group
flex
items-center
justify-center
gap-3
rounded-full
bg-blue-700
px-8
py-4
font-semibold
text-white
shadow-lg
shadow-blue-700/20
transition
hover:-translate-y-1
"

>

Book Health Test


<FiArrowRight
className="
group-hover:translate-x-1
transition
"
/>


</button>




<button

onClick={()=>{trackPageNavigation("HeroContent-ExplorePackages");router.push("/packages")}}

className="
rounded-full
border
border-slate-200
bg-white
px-8
py-4
font-semibold
text-slate-700
transition
hover:border-teal-300
hover:bg-teal-50
"

>

Explore Packages


</button>


</motion.div>








{/* Trust Cards */}


<motion.div

{...fadeUp}

transition={{
delay:.75
}}

className="
mt-10
grid
gap-3

sm:grid-cols-3
"

>


{
trustItems.map((item)=>{


const Icon=item.icon;


return (

<div

key={item.title}

className="
flex
items-center
gap-3
rounded-3xl
border
border-slate-100
bg-white
p-4
shadow-sm
transition
hover:shadow-md
"

>


<div

className={`
flex
h-11
w-11
items-center
justify-center
rounded-2xl
${item.theme}
`}

>

<Icon size={20}/>


</div>



<div>

<p
className="
text-sm
font-bold
text-slate-900
"
>

{item.title}

</p>


<p
className="
text-xs
text-slate-500
"
>

{item.desc}

</p>


</div>



</div>

)

})

}



</motion.div>




</div>

)

}