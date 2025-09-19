import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import fetchResetPassword from "./api/fetchResetPassword";
import validatePasswords from "./validator/validatePassword";

export default function ResetPassword() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // الانتقال إلى صفحة SuccessMessage
  const handleSubmit = (e) => {
    e.preventDefault();
    validatePasswords(password, confirmPassword) ? fetchResetPassword({ password }) : alert("Passwords do not match or are empty.")
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-[Cairo]">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
        {/* البلوك الفضي */}
        <div className="bg-gray-200 rounded-lg px-6 py-4 mb-6 text-right">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            إعادة تعيين كلمة المرور
          </h2>
          <p className="text-sm text-gray-700">
            يرجى إدخال عنوان البريد الإلكتروني المرتبط بحسابك، وسنرسل لك رابطًا
            لإعادة تعيين كلمة المرور.
          </p>
        </div>

        {/* الفورم */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* كلمة المرور الجديدة */}
          <div className="relative">
            <FiLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور الجديدة"
              className="w-full p-3 pr-10 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              👁
            </button>
          </div>

          {/* تأكيد كلمة المرور */}
          <div className="relative">
            <FiLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="تأكيد كلمة المرور"
              className="w-full p-3 pr-10 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              👁
            </button>
          </div>

          {/* زر التحقق */}
          <button
            type="submit"
            className="w-full text-white py-3 rounded-lg transition bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
          >
            تحقق
          </button>
        </form>

        {/* إعادة إرسال الرمز */}
        <p className="mt-4 text-sm text-blue-600 hover:underline text-center cursor-pointer">
          إعادة إرسال الرمز
        </p>
      </div>
    </div>
  );
}
