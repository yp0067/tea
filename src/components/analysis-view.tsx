 "use client";
 
 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { useRouter } from "next/navigation";
 import { ArrowLeft, Leaf } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 import AnalysisLoading from "@/components/analysis-loading";
 import TeaIdentity from "@/components/tea/tea-identity";
 import HistorySection from "@/components/tea/history-section";
 import BrewingGuide from "@/components/tea/brewing-guide";
 import TastingGuide from "@/components/tea/tasting-guide";
 import LanguageSection from "@/components/tea/language-section";
 import ShareCard from "@/components/tea/share-card";
 
 export default function AnalysisView({ tea }: { tea: TeaData }) {
   const [loading, setLoading] = useState(true);
   const [loadingStep, setLoadingStep] = useState(0);
   const router = useRouter();
 
   useEffect(() => {
     if (!loading) return;
 
     const timers: ReturnType<typeof setTimeout>[] = [];
     for (let i = 0; i <= 5; i++) {
       timers.push(
         setTimeout(() => setLoadingStep(i), (i + 1) * 600)
       );
     }
 
     timers.push(setTimeout(() => setLoading(false), 4200));
 
     return () => timers.forEach(clearTimeout);
   }, [loading]);
 
   return (
     <>
       <AnimatePresence>
         {loading && <AnalysisLoading currentStep={loadingStep} />}
       </AnimatePresence>
 
       {/* Persistent header during analysis */}
       <motion.header
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
         className="fixed top-0 left-0 right-0 z-40 bg-stone-50/80 backdrop-blur-md"
       >
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
           <button
             onClick={() => router.push("/")}
             className="flex items-center gap-2 text-xs text-stone-400 hover:text-stone-600 transition-colors duration-200"
           >
             <ArrowLeft className="w-3.5 h-3.5" />
             返回首页
           </button>
           <div className="flex items-center gap-2">
             <Leaf className="w-3.5 h-3.5 text-amber-900/40" />
             <span className="text-[11px] text-stone-400">Tea Agent</span>
           </div>
         </div>
       </motion.header>
 
       {/* Main content */}
       <main className="flex-1 pt-16">
         <AnimatePresence mode="wait">
           {!loading && (
             <motion.div
               key="content"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
             >
               <TeaIdentity tea={tea} />
 
               <div className="max-w-5xl mx-auto px-6">
                 <div className="h-px bg-stone-100" />
               </div>
               <HistorySection tea={tea} />
 
               <div className="max-w-5xl mx-auto px-6">
                 <div className="h-px bg-stone-100" />
               </div>
               <BrewingGuide tea={tea} />
 
               <div className="max-w-5xl mx-auto px-6">
                 <div className="h-px bg-stone-100" />
               </div>
               <TastingGuide tea={tea} />
 
               <div className="max-w-5xl mx-auto px-6">
                 <div className="h-px bg-stone-100" />
               </div>
               <LanguageSection tea={tea} />
 
               <div className="max-w-5xl mx-auto px-6">
                 <div className="h-px bg-stone-100" />
               </div>
               <ShareCard tea={tea} />
 
               {/* Footer */}
               <footer className="max-w-3xl mx-auto px-6 py-12 text-center">
                 <p className="text-[11px] text-stone-300">
                   Tea Agent &middot; 2026 AI先锋未来人才大赛
                 </p>
               </footer>
             </motion.div>
           )}
         </AnimatePresence>
       </main>
     </>
   );
 }
