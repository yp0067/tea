 "use client";
 
 import { useSearchParams } from "next/navigation";
 import { Suspense } from "react";
 import { getTeaById, teas } from "@/data/teas";
 import AnalysisView from "@/components/analysis-view";
 
 function AnalysisContent() {
   const searchParams = useSearchParams();
   const teaId = searchParams.get("tea") || "tieguanyin";
   const tea = getTeaById(teaId) || teas.tieguanyin;
 
   return <AnalysisView tea={tea} />;
 }
 
 export default function AnalysisPage() {
   return (
     <Suspense
       fallback={
         <div className="min-h-screen flex items-center justify-center">
           <div className="w-6 h-6 rounded-full border-2 border-stone-200 border-t-stone-600 animate-spin" />
         </div>
       }
     >
       <AnalysisContent />
     </Suspense>
   );
 }
