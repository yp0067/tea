 "use client";
 
 import Link from "next/link";
 import { motion } from "framer-motion";
 import { Leaf } from "lucide-react";
 
 export default function Header() {
   return (
     <motion.header
       initial={{ opacity: 0, y: -10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
       className="fixed top-0 left-0 right-0 z-50"
     >
       <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
         <Link href="/" className="flex items-center gap-2.5 group">
           <div className="w-8 h-8 rounded-full bg-amber-900/5 flex items-center justify-center group-hover:bg-amber-900/10 transition-colors duration-300">
             <Leaf className="w-4 h-4 text-amber-900/60" />
           </div>
           <span className="text-sm font-medium tracking-tight text-stone-800">
             Tea Agent
           </span>
         </Link>
         <nav className="flex items-center gap-6">
           <Link
             href="/"
             className="text-xs text-stone-400 hover:text-stone-600 transition-colors duration-200"
           >
             Home
           </Link>
         </nav>
       </div>
     </motion.header>
   );
 }
