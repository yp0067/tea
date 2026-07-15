 "use client";
 
 import { useRouter } from "next/navigation";
 import { motion } from "framer-motion";
 import { Leaf } from "lucide-react";
 import { getAllTeas } from "@/data/teas";
 
 const emojiMap: Record<string, string> = {
   tieguanyin: "🍵",
   longjing: "🌿",
   puer: "🍂",
   jinjunmei: "🫖",
   dahongpao: "🏔️",
 };
 
 const colorMap: Record<string, string> = {
   tieguanyin: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
   longjing: "bg-green-50 text-green-700 border-green-200/60",
   puer: "bg-amber-50 text-amber-800 border-amber-200/60",
   jinjunmei: "bg-rose-50 text-rose-700 border-rose-200/60",
   dahongpao: "bg-orange-50 text-orange-700 border-orange-200/60",
 };
 
 export default function SampleTeas() {
   const router = useRouter();
   const teas = getAllTeas();
 
   return (
     <section className="w-full max-w-5xl mx-auto px-6 py-20">
       <div className="text-center mb-12">
         <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">
           试试这些茶
         </p>
         <p className="text-sm text-stone-500">
           点击任意一款，体验 Tea Agent 的完整分析
         </p>
       </div>
 
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
         {teas.map(([id, tea], index) => (
           <motion.button
             key={id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{
               duration: 0.5,
               delay: 0.6 + index * 0.08,
               ease: [0.16, 1, 0.3, 1],
             }}
             onClick={() => router.push(`/analysis?tea=${id}`)}
             className={`group relative rounded-xl border p-5 flex flex-col items-center gap-3 text-left transition-all duration-300 hover:shadow-sm ${colorMap[id]}`}
           >
             <span className="text-2xl">{emojiMap[id] || "🍃"}</span>
             <div className="text-center">
               <p className="text-sm font-medium mb-0.5">{tea.name}</p>
               <p className="text-[11px] opacity-60">{tea.category}</p>
             </div>
             <div className="flex items-center gap-1 text-[11px] opacity-50 mt-1">
               <Leaf className="w-3 h-3" />
               <span>{tea.origin}</span>
             </div>
           </motion.button>
         ))}
       </div>
     </section>
   );
 }
