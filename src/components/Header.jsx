import React from "react";
import logo from "../assets/logo192.png"; // ✅ استدعاء الصورة من src/assets

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 px-6 py-4 flex justify-end font-[Cairo]">
      <div className="flex items-center gap-2">
        {/* صورة اللوجو */}
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12" // ✅ كبرنا الحجم
        />
        {/* اسم المشروع */}
        <span className="text-xl font-bold text-gray-800">
          GazaKidMindCanvas
        </span>
      </div>
    </header>
  );
}
