 "use client";
 
 import { motion } from "framer-motion";
 import { Leaf } from "lucide-react";
 import Header from "@/components/header";
 import UploadZone from "@/components/upload-zone";
 import SampleTeas from "@/components/sample-teas";
 
 export default function Home() {
   return (
     <>
       <Header />
       <main className="flex-1">
         <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
           >
             <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-100/30 to-amber-50/10 blur-3xl" />
           </motion.div>
 
           <div className="max-w-2xl mx-auto text-center space-y-10 relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/50"
             >
               <Leaf className="w-3 h-3 text-amber-700/60" />
               <span className="text-[11px] text-amber-800/70 tracking-wider uppercase">
                 AI 数字茶艺师
               </span>
             </motion.div>
 
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                 duration: 0.8,
                 delay: 0.15,
                 ease: [0.16, 1, 0.3, 1],
               }}
               className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1]"
             >
               让每一杯中国茶
               <br />
               <span className="text-amber-900/80">都会讲故事</span>
             </motion.h1>
 
             <motion.p
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                 duration: 0.6,
                 delay: 0.3,
                 ease: [0.16, 1, 0.3, 1],
               }}
               className="text-sm text-stone-400 max-w-md mx-auto leading-relaxed"
             >
               拍照识别茶品，AI讲解历史文化，指导冲泡品鉴。
               让每一位爱茶的人，都能像茶艺师一样懂茶。
             </motion.p>
 
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                 duration: 0.7,
                 delay: 0.45,
                 ease: [0.16, 1, 0.3, 1],
               }}
             >
               <UploadZone />
             </motion.div>
 
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               className="text-[11px] text-stone-300"
             >
               或从下方选择一款茶体验
             </motion.p>
           </div>
         </section>
 
         <SampleTeas />
 
         <footer className="py-8 text-center">
           <p className="text-[11px] text-stone-300">
             Tea Agent &middot; 2026 AI先锋未来人才大赛
           </p>
         </footer>
       </main>
     </>
   );
 }
