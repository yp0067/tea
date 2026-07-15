 "use client";
 
 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Share2, Check, Download, Leaf } from "lucide-react";
 import type { TeaData } from "@/data/teas";
 
 export default function ShareCard({ tea }: { tea: TeaData }) {
   const [copied, setCopied] = useState(false);
 
   const handleShare = async () => {
     const text = `🍵 ${tea.name}（${tea.nameEn}）\n${tea.category} · ${tea.origin}\n\n${tea.description.slice(0, 80)}...\n\n—— Tea Agent AI数字茶艺师`;
 
     if (navigator.share) {
       await navigator.share({ title: tea.name, text }).catch(() => {});
     } else {
       await navigator.clipboard.writeText(text);
       setCopied(true);
       setTimeout(() => setCopied(false), 2000);
     }
   };
 
   const handleDownload = () => {
     const card = document.getElementById("share-card-content");
     if (!card) return;
 
     const text = `🍵 ${tea.name}（${tea.nameEn}）
 ${tea.category} · ${tea.origin}
 
 ${tea.description}
 
 冲泡水温：${tea.brewing.temperature}
 推荐器具：${tea.brewing.vessel}
 
 —— Tea Agent AI数字茶艺师`;
 
     const blob = new Blob([text], { type: "text/plain" });
     const url = URL.createObjectURL(blob);
     const a = document.createElement("a");
     a.href = url;
     a.download = `${tea.name}_茶品档案.txt`;
     a.click();
     URL.revokeObjectURL(url);
   };
 
   return (
     <motion.section
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
       className="max-w-3xl mx-auto px-6 py-16"
     >
       <div className="space-y-6">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
             <Share2 className="w-4 h-4 text-teal-700/60" />
           </div>
           <h3 className="text-lg font-medium text-stone-800">分享卡片</h3>
         </div>
 
         {/* Card preview */}
         <div
           id="share-card-content"
           className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-200/40 p-8 space-y-5"
         >
           {/* Header */}
           <div className="flex items-start justify-between">
             <div className="space-y-1">
               <div className="flex items-center gap-2">
                 <Leaf className="w-4 h-4 text-amber-700/60" />
                 <span className="text-[10px] text-amber-700/50 uppercase tracking-widest">
                   Tea Agent
                 </span>
               </div>
               <h4 className="text-xl font-medium text-stone-900">
                 {tea.name}
               </h4>
               <p className="text-xs text-stone-400">{tea.nameEn}</p>
             </div>
             <div className="text-right">
               <p className="text-xs text-stone-500">{tea.category}</p>
               <p className="text-[11px] text-stone-400">{tea.origin}</p>
             </div>
           </div>
 
           {/* Divider */}
           <div className="h-px bg-amber-200/40" />
 
           {/* Description */}
           <p className="text-sm text-stone-600 leading-relaxed">
             {tea.description.slice(0, 120)}...
           </p>
 
           {/* Key info */}
           <div className="flex items-center gap-4 text-xs text-stone-500">
             <span>🫖 {tea.brewing.temperature}</span>
             <span>⏱ {tea.brewing.time}</span>
             <span>🏺 {tea.brewing.vessel}</span>
           </div>
 
           {/* Footer */}
           <div className="pt-2 border-t border-amber-200/30">
             <p className="text-[10px] text-stone-400 text-center">
               让每一杯中国茶都会讲故事 · Tea Agent AI数字茶艺师
             </p>
           </div>
         </div>
 
         {/* Actions */}
         <div className="flex items-center gap-3">
           <button
             onClick={handleShare}
             className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors duration-200"
           >
             {copied ? (
               <>
                 <Check className="w-3.5 h-3.5" />
                 已复制
               </>
             ) : (
               <>
                 <Share2 className="w-3.5 h-3.5" />
                 分享
               </>
             )}
           </button>
           <button
             onClick={handleDownload}
             className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 transition-colors duration-200"
           >
             <Download className="w-3.5 h-3.5" />
             保存到本地
           </button>
         </div>
       </div>
     </motion.section>
   );
 }
