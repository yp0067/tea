 "use client";
 
 import { useCallback, useRef, useState } from "react";
 import { useRouter } from "next/navigation";
 import { motion } from "framer-motion";
 import { Upload, Image, Camera } from "lucide-react";
 
 export default function UploadZone() {
   const [isDragging, setIsDragging] = useState(false);
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [preview, setPreview] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);
   const router = useRouter();
 
   const handleDragOver = useCallback((e: React.DragEvent) => {
     e.preventDefault();
     setIsDragging(true);
   }, []);
 
   const handleDragLeave = useCallback(() => {
     setIsDragging(false);
   }, []);
 
   const handleDrop = useCallback((e: React.DragEvent) => {
     e.preventDefault();
     setIsDragging(false);
     const file = e.dataTransfer.files[0];
     if (file && file.type.startsWith("image/")) {
       handleFile(file);
     }
   }, []);
 
   const handleFile = (file: File) => {
     setSelectedFile(file);
     const reader = new FileReader();
     reader.onloadend = () => {
       setPreview(reader.result as string);
     };
     reader.readAsDataURL(file);
 
     // Navigate to analysis page with a simulated tea match
     setTimeout(() => {
       router.push("/analysis?tea=tieguanyin&source=upload");
     }, 800);
   };
 
   const handleClick = () => {
     fileInputRef.current?.click();
   };
 
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
     if (file) handleFile(file);
   };
 
   return (
     <div className="w-full max-w-lg mx-auto">
       <input
         ref={fileInputRef}
         type="file"
         accept="image/*"
         className="hidden"
         onChange={handleFileChange}
       />
 
       <motion.button
         onClick={handleClick}
         onDragOver={handleDragOver}
         onDragLeave={handleDragLeave}
         onDrop={handleDrop}
         whileHover={{ scale: 1.01 }}
         whileTap={{ scale: 0.99 }}
         className={`w-full relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer
           ${
             isDragging
               ? "border-amber-500 bg-amber-50/50"
               : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/30"
           }`}
       >
         <div className="py-16 px-8 flex flex-col items-center gap-4">
           {preview ? (
             <div className="relative w-24 h-24 rounded-xl overflow-hidden">
               <img
                 src={preview}
                 alt="Preview"
                 className="w-full h-full object-cover"
               />
             </div>
           ) : (
             <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center">
               <Camera className="w-7 h-7 text-amber-700/60" />
             </div>
           )}
 
           <div className="text-center">
             <p className="text-sm font-medium text-stone-700 mb-1">
               {preview ? "点击重新上传" : "上传茶叶图片"}
             </p>
             <p className="text-xs text-stone-400">
               拍摄干茶、茶汤、叶底或包装
             </p>
           </div>
 
           <div className="flex items-center gap-2 text-[11px] text-stone-400">
             <Image className="w-3 h-3" />
             <span>支持 JPG / PNG / WEBP</span>
           </div>
         </div>
       </motion.button>
     </div>
   );
 }
