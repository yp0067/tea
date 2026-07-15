 import type { Metadata } from "next";
 import { Geist, Geist_Mono } from "next/font/google";
 import "./globals.css";
 
 const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
 });
 
 const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
 });
 
 export const metadata: Metadata = {
   title: "Tea Agent — AI数字茶艺师",
   description:
     "上传茶叶图片，AI识别茶品、讲解历史文化、指导冲泡、陪伴品鉴。让每一杯中国茶都会讲故事。",
 };
 
 export default function RootLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
     <html
       lang="zh-CN"
       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     >
       <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
         {children}
       </body>
     </html>
   );
 }
