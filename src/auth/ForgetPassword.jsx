import React, { useState } from "react";
import fetchForgetPasswordAPI from "./api/fetchForgetPasswordAPI"
import validateEmail from "./validator/validateEmail";
export default function ForgetPassword() {
  const [ email, setEmail ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email) ? fetchForgetPasswordAPI({email}) : alert("invalid email") 
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-[Cairo]">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8 text-right">
        
        <div className="bg-gray-200 rounded-lg shadow-sm px-6 py-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            إعادة تعيين كلمة المرور
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            يرجى إدخال عنوان البريد الإلكتروني المرتبط بحسابك، وسنرسل لك رابطًا
            لإعادة تعيين كلمة المرور.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full p-3 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full text-white py-3 rounded-lg transition bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
          >
            تحقق
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            إعادة إرسال الرمز
          </a>
        </div>
      </div>
    </div>
  );
}
