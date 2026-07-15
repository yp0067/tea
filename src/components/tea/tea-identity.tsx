 "use client";
 
 import { motion } from "framer-motion";
 import { MapPin, Leaf, Tag } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 
 export default function TeaIdentity({ tea }: { tea: TeaData }) {
   return (
     <motion.section
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
       className="max-w-3xl mx-auto px-6 py-16"
     >
       <div className="space-y-8">
         {/* Header */}
         <div className="space-y-3">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/40">
             <Tag className="w-3 h-3 text-amber-700/60" />
             <span className="text-[11px] text-amber-800/70">AI 识别结果</span>
           </div>
 
           <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900">
             {tea.name}
             <span className="text-base text-stone-400 ml-3 font-normal">
               {tea.nameEn}
             </span>
           </h2>
 
           <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
             <div className="flex items-center gap-1.5">
               <Leaf className="w-3.5 h-3.5 text-stone-400" />
               <span>{tea.category}</span>
             </div>
             <span className="text-stone-300">/</span>
             <div className="flex items-center gap-1.5">
               <MapPin className="w-3.5 h-3.5 text-stone-400" />
               <span>{tea.origin}</span>
             </div>
           </div>
         </div>
 
         {/* Description */}
         <p className="text-sm text-stone-600 leading-relaxed">
           {tea.description}
         </p>
       </div>
     </motion.section>
   );
 }
