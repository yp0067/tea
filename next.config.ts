 import type { NextConfig } from "next";
 
 const nextConfig: NextConfig = {
   output: "export",
   trailingSlash: true,
   basePath: "/tea",
   assetPrefix: "/tea",
   images: {
     unoptimized: true,
   },
 };
 
 export default nextConfig;
