import React from "react";
import { Link } from "react-router-dom";

export default function SuccessMessage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-[Cairo]">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8 text-center">
        
        {/* الأيقونة ✅ */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* العنوان */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          تم تغيير كلمة المرور بنجاح
        </h2>

        {/* النص الفرعي */}
        <p className="text-gray-600 mb-6 text-sm">
          يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.
        </p>

        {/* زر العودة */}
        <Link
          to="/"
          className="block w-full text-white py-3 rounded-lg transition bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
        >
          العودة لتسجيل الدخول
        </Link>
      </div>
    </div>
  );
}
