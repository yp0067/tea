 "use client";
 
 import { motion } from "framer-motion";
 import { Leaf, Sparkles } from "lucide-react";
 
 const steps = [
   "正在识别茶叶品种...",
   "正在检索知识库...",
   "正在生成文化讲解...",
   "正在分析冲泡参数...",
   "正在生成品鉴报告...",
   "正在准备分享卡片...",
 ];
 
 export default function AnalysisLoading({
   currentStep,
 }: {
   currentStep: number;
 }) {
   return (
     <div className="fixed inset-0 z-50 bg-stone-50/90 backdrop-blur-sm flex items-center justify-center">
       <div className="max-w-sm mx-auto text-center space-y-8">
         {/* Animated icon */}
         <motion.div
           animate={{ rotate: 360 }}
           transition={{
             duration: 3,
             repeat: Infinity,
             ease: "linear",
           }}
           className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center"
         >
           <Leaf className="w-7 h-7 text-amber-700/60" />
         </motion.div>
 
         {/* Steps */}
         <div className="space-y-3">
           {steps.map((step, index) => (
             <motion.div
               key={step}
               initial={{ opacity: 0.3 }}
               animate={{
                 opacity: index <= currentStep ? 1 : 0.3,
               }}
               transition={{ duration: 0.3 }}
               className="flex items-center gap-3"
             >
               <div className="w-5 h-5 flex items-center justify-center">
                 {index < currentStep ? (
                   <motion.div
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center"
                   >
                     <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                   </motion.div>
                 ) : index === currentStep ? (
                   <motion.div
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{
                       duration: 1,
                       repeat: Infinity,
                       ease: "easeInOut",
                     }}
                     className="w-3 h-3 rounded-full bg-amber-500/40"
                   />
                 ) : (
                   <div className="w-3 h-3 rounded-full bg-stone-200" />
                 )}
               </div>
               <span
                 className={`text-sm ${
                   index <= currentStep
                     ? "text-stone-700"
                     : "text-stone-300"
                 }`}
               >
                 {step}
               </span>
             </motion.div>
           ))}
         </div>
       </div>
     </div>
   );
 }
