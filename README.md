🏗️ Monitor-Tangkam - Reconstruction Project
🚀 Overview
โปรเจกต์นี้คือการทำ Reverse Software Structure และ System Reconstruction จากระบบเดิมที่สูญเสีย Source Code ไป โดยเป็นการกู้คืนโครงสร้างสถาปัตยกรรม (Architecture Recovery) จาก Static Assets (Production Files) เพื่อนำมาพัฒนาใหม่ในรูปแบบที่ทันสมัยและปรับปรุงต่อได้ง่ายขึ้น

🛠️ The Challenge (Mission)
Status: Original Source Code was lost/deleted.

Source: Production Bundles (Minified JS/CSS) and Live Website.

Goal: Rebuild the "Blueprint" and "Engine" using modern frameworks (Vue 3 + Vite).

🔍 Methodology (กระบวนการทำงาน)
เราไม่ได้แค่คัดลอกไฟล์มาวาง แต่เราใช้กระบวนการทางวิศวกรรมย้อนรอยดังนี้:

Architecture Recovery: แกะโครงสร้างไฟล์จาก Minified Bundle เพื่อค้นหาระบบ Routing และการเชื่อมต่อ Logic หลัก

Structural Reconstruction: สร้าง Component และ UI ขึ้นมาใหม่โดยอิงจากหน้าตาและลำดับชั้น (Hierarchy) เดิม

Refactoring & Enhancement: เขียนโค้ดใหม่ให้สะอาด (Clean Code) และเพิ่มประสิทธิภาพด้วยเทคโนโลยีปัจจุบัน

🏗️ Tech Stack (หุ่นยนต์ตัวใหม่)
Framework: Vue 3 (Composition API)

Build Tool: Vite

Styling: CSS / Tailwind CSS (หรือตัวที่คุณใช้)

Infrastructure: [เช่น Firebase, Node.js]

📂 Project Structure
Plaintext
src/
├── assets/ # ไฟล์ภาพและไอคอนที่กู้คืนมาได้
├── components/ # UI Components ที่ถูก Re-code ขึ้นมาใหม่
├── router/ # ระบบ Routing ที่แกะโครงสร้างมาจากแอปเดิม
└── views/ # หน้าหลักของระบบที่ทำ Structural Reconstruction
👤 Developer
Lead Engineer: Prite (The Architect)

Special Thanks: [ชื่อรุ่นพี่ หรือชื่อ Mentor] สำหรับโอกาสในการทดสอบทักษะการทำ Reverse Structure
