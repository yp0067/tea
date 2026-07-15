 const fs = require("fs");
 const path = require("path");
 
 function walk(dir) {
   const entries = fs.readdirSync(dir, { withFileTypes: true });
   for (const entry of entries) {
     const full = path.join(dir, entry.name);
     if (entry.isDirectory()) walk(full);
     else if (entry.name.endsWith(".html")) {
       let content = fs.readFileSync(full, "utf8");
       if (content.includes("/tea/_next/")) {
         content = content.replace(/\/tea\/_next\//g, "/tea/public/");
         fs.writeFileSync(full, content, "utf8");
         console.log("Fixed:", full);
       }
     }
   }
 }
 walk("out");
 
 // Clean junk files in out root
 const junk = ["next.svg", "vercel.svg", "globe.svg", "window.svg", "file.svg", "index.txt"];
 junk.forEach((f) => {
   const p = path.join("out", f);
   try { fs.unlinkSync(p); console.log("Removed:", p); } catch (e) {}
 });
 
 // Remove all .txt files recursively
 function cleanTxt(dir) {
   const entries = fs.readdirSync(dir, { withFileTypes: true });
   for (const entry of entries) {
     const full = path.join(dir, entry.name);
     if (entry.isDirectory()) cleanTxt(full);
     else if (entry.name.endsWith(".txt")) { fs.unlinkSync(full); console.log("Removed:", full); }
   }
 }
 cleanTxt("out");
 
 // Create .nojekyll
 fs.writeFileSync("out/.nojekyll", "", "utf8");
 console.log("Created: out/.nojekyll");
 
 console.log("Done!");
