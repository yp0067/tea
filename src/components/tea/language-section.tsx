 "use client";
 
 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Languages, ChevronDown } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 
 const languages: { key: string; label: string; native: string }[] = [
   { key: "en", label: "English", native: "English" },
   { key: "ja", label: "日本語", native: "日本語" },
   { key: "ko", label: "한국어", native: "한국어" },
 ];
 
 export default function LanguageSection({ tea }: { tea: TeaData }) {
   const [activeLang, setActiveLang] = useState("en");
   const [expanded, setExpanded] = useState(false);
 
   const current = languages.find((l) => l.key === activeLang);
 
   return (
     <motion.section
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
       className="max-w-3xl mx-auto px-6 py-16"
     >
       <div className="space-y-6">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
             <Languages className="w-4 h-4 text-blue-700/60" />
           </div>
           <h3 className="text-lg font-medium text-stone-800">多语言介绍</h3>
         </div>
 
         {/* Language selector */}
         <div className="flex items-center gap-2">
           {languages.map((lang) => (
             <button
               key={lang.key}
               onClick={() => {
                 setActiveLang(lang.key);
                 setExpanded(true);
               }}
               className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                 activeLang === lang.key
                   ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                   : "bg-white text-stone-500 border border-stone-200 hover:border-stone-300"
               }`}
             >
               {lang.native}
             </button>
           ))}
         </div>
 
         {/* Translation content */}
         {expanded && (
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-xl border border-stone-100 p-6"
           >
             <div className="flex items-center gap-2 mb-3">
               <Languages className="w-3.5 h-3.5 text-stone-400" />
               <span className="text-[11px] text-stone-400 uppercase tracking-wider">
                 {current?.label}
               </span>
             </div>
             <p className="text-sm text-stone-600 leading-relaxed">
               {tea.translation[activeLang] || "Translation not available."}
             </p>
           </motion.div>
         )}
 
         {!expanded && (
           <p className="text-xs text-stone-400">
             选择上方语言查看多语言介绍
           </p>
         )}
       </div>
     </motion.section>
   );
 }
