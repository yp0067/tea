 "use client";
 
 import { motion } from "framer-motion";
 import { Eye, Wind, Flame, Droplets, ScanLine } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 
 const tastingItems: {
   key: keyof TeaData["tasting"];
   icon: typeof Eye;
   label: string;
   color: string;
 }[] = [
   { key: "appearance", icon: Eye, label: "干茶外形", color: "bg-amber-50 text-amber-700" },
   { key: "aroma", icon: Wind, label: "香气", color: "bg-rose-50 text-rose-700" },
   { key: "flavor", icon: Flame, label: "滋味", color: "bg-orange-50 text-orange-700" },
   { key: "liquor", icon: Droplets, label: "汤色", color: "bg-yellow-50 text-yellow-700" },
   { key: "infused", icon: ScanLine, label: "叶底", color: "bg-green-50 text-green-700" },
 ];
 
 export default function TastingGuide({ tea }: { tea: TeaData }) {
   return (
     <motion.section
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
       className="max-w-3xl mx-auto px-6 py-16"
     >
       <div className="space-y-6">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
             <Eye className="w-4 h-4 text-rose-700/60" />
           </div>
           <h3 className="text-lg font-medium text-stone-800">品鉴引导</h3>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
           {tastingItems.map((item) => {
             const Icon = item.icon;
             return (
               <div
                 key={item.key}
                 className="bg-white rounded-xl border border-stone-100 p-5 space-y-3"
               >
                 <div className="flex items-center gap-2">
                   <div
                     className={`w-7 h-7 rounded-lg flex items-center justify-center ${item.color}`}
                   >
                     <Icon className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-xs font-medium text-stone-600">
                     {item.label}
                   </span>
                 </div>
                 <p className="text-sm text-stone-600 leading-relaxed">
                   {tea.tasting[item.key]}
                 </p>
               </div>
             );
           })}
         </div>
 
         {/* Guide note */}
         <div className="bg-amber-50/50 rounded-xl border border-amber-200/30 p-5">
           <p className="text-xs text-amber-800/70 leading-relaxed">
             AI品鉴建议：请按照"观形→闻香→品味→看汤→察底"的顺序逐层体验。
             每一款茶都有自己的性格，慢慢感受，不必急于下结论。
           </p>
         </div>
       </div>
     </motion.section>
   );
 }
