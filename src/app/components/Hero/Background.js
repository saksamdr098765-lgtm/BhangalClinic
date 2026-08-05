
import { FaHeartbeat } from "react-icons/fa";

import {
  FaDna,
  FaMicroscope,
  FaNotesMedical,
} from "react-icons/fa6";



export default function Background(){

return (

<div className="absolute inset-0 overflow-hidden">


{/* Base */}

<div
className="
absolute
inset-0
bg-gradient-to-b
from-white
via-blue-50/40
to-white
"
/>





{/* Healthcare Glow */}


<div



className="
absolute
-left-40
-top-40
h-[600px]
w-[600px]
rounded-full
bg-blue-100/50
blur-[150px]
"

/>





<div



className="
absolute
-right-40
-bottom-20
h-[550px]
w-[550px]
rounded-full
bg-teal-100/40
blur-[150px]
"

/>








{/* Floating Medical Icons */}



<FaDna

className="
absolute
left-[8%]
top-[22%]
text-[180px]
text-blue-100/40
rotate-12
"

 />





<FaHeartbeat

className="
absolute
right-[12%]
top-[18%]
text-[160px]
text-rose-100/40
"

 />





<FaMicroscope

className="
absolute
left-[15%]
bottom-[18%]
text-[130px]
text-cyan-100/40
-rotate-12
"

 />





<FaNotesMedical

className="
absolute
right-[10%]
bottom-[20%]
text-[150px]
text-emerald-100/40
"

 />







{/* Soft Medical Circles */}


<div
className="
absolute
left-1/2
top-1/2
h-[450px]
w-[450px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-blue-50/40
blur-[120px]
"
/>






{/* Very subtle grid */}

<div

className="
absolute
inset-0
opacity-[0.015]
"

style={{
backgroundImage:
`
linear-gradient(to right,#2563eb 1px,transparent 1px),
linear-gradient(to bottom,#2563eb 1px,transparent 1px)
`,
backgroundSize:"90px 90px"
}}

/>






{/* Bottom fade */}

<div
className="
absolute
bottom-0
inset-x-0
h-64
bg-gradient-to-t
from-white
to-transparent
"
/>



</div>

)

}