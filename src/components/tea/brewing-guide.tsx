 "use client";
 
 import { motion } from "framer-motion";
 import { Thermometer, Clock, Beaker, CupSoda, ListChecks } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 
 const paramIcon: Record<string, typeof Thermometer> = {
   temperature: Thermometer,
   time: Clock,
   amount: Beaker,
   vessel: CupSoda,
 };
 
 const paramLabel: Record<string, string> = {
   temperature: "水温",
   time: "冲泡时间",
   amount: "投茶量",
   vessel: "推荐器具",
 };
 
 export default function BrewingGuide({ tea }: { tea: TeaData }) {
   const { brewing } = tea;
 
   return (
     <motion.section
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
       className="max-w-3xl mx-auto px-6 py-16"
     >
       <div className="space-y-6">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
             <CupSoda className="w-4 h-4 text-emerald-700/60" />
           </div>
           <h3 className="text-lg font-medium text-stone-800">冲泡建议</h3>
         </div>
 
         {/* Parameters grid */}
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
           {(["temperature", "time", "amount", "vessel"] as const).map(
             (key) => {
               const Icon = paramIcon[key];
               return (
                 <div
                   key={key}
                   className="bg-white rounded-xl border border-stone-100 p-4 space-y-2"
                 >
                   <Icon className="w-4 h-4 text-stone-400" />
                   <p className="text-[11px] text-stone-400 uppercase tracking-wider">
                     {paramLabel[key]}
                   </p>
                   <p className="text-sm text-stone-700 font-medium leading-snug">
                     {brewing[key]}
                   </p>
                 </div>
               );
             }
           )}
         </div>
 
         {/* Steps */}
         <div className="bg-white rounded-xl border border-stone-100 p-6">
           <div className="flex items-center gap-2 mb-4">
             <ListChecks className="w-4 h-4 text-stone-400" />
             <h4 className="text-xs text-stone-400 uppercase tracking-wider">
               冲泡步骤
             </h4>
           </div>
           <ol className="space-y-3">
             {brewing.steps.map((step, index) => (
               <li key={index} className="flex items-start gap-3">
                 <span className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                   <span className="text-[10px] text-stone-500 font-medium">
                     {index + 1}
                   </span>
                 </span>
                 <span className="text-sm text-stone-600 leading-relaxed">
                   {step}
                 </span>
               </li>
             ))}
           </ol>
         </div>
       </div>
     </motion.section>
   );
 }
