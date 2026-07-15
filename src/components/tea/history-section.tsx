 "use client";
 
 import { motion } from "framer-motion";
 import { ScrollText } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 
 export default function HistorySection({ tea }: { tea: TeaData }) {
   return (
     <motion.section
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
       className="max-w-3xl mx-auto px-6 py-16"
     >
       <div className="space-y-6">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
             <ScrollText className="w-4 h-4 text-amber-700/60" />
           </div>
           <h3 className="text-lg font-medium text-stone-800">历史文化</h3>
         </div>
 
         <div className="space-y-4">
           <div className="bg-white rounded-xl border border-stone-100 p-6">
             <h4 className="text-xs text-stone-400 uppercase tracking-wider mb-3">
               历史源流
             </h4>
             <p className="text-sm text-stone-600 leading-relaxed">
               {tea.history}
             </p>
           </div>
 
           <div className="bg-white rounded-xl border border-stone-100 p-6">
             <h4 className="text-xs text-stone-400 uppercase tracking-wider mb-3">
               文化底蕴
             </h4>
             <p className="text-sm text-stone-600 leading-relaxed">
               {tea.culturalNotes}
             </p>
           </div>
         </div>
       </div>
     </motion.section>
   );
 }
