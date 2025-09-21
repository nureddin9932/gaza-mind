import React from "react";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.png";
import Header from "../components/Header"; // ✅
import loginFetchAPI  from "./api/fetchLoginApi";
import validateEmail from "./validator/validateEmail";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
  return (
    <div className="flex flex-col min-h-screen font-[Cairo] relative">
      {/* ✅ الهيدر */}
      <Header />

      {/* باقي الصفحة */}
      <div className="flex flex-1">
        {/* العمود اليسار */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-white p-8">
          <div className="text-center max-w-md">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <img
                src={loginImg}
                alt="Login Illustration"
                className="w-80 mx-auto mb-6"
              />
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
            </div>

            {/* النصوص */}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              ارفع رسمة الطفل بسهولة من أي جهاز
            </h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              تعتمد منصتنا على تحليل رسومات الأطفال باعتبارها وسيلة غير تقليدية
              لفهم مشاعرهم.
            </p>
          </div>
        </div>

        {/* العمود اليمين */}
        <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100">
          <div className="w-full max-w-sm px-6">
            <h2 className="text-2xl font-bold mb-1 text-gray-900 text-right">
              تسجيل الدخول إلى حسابك
            </h2>
            <p className="text-gray-500 text-sm mb-4 text-right">
              مرحباً بك، من سجل الدخول للمتابعة
            </p>

            <form className="space-y-3" onSubmit={(e) => {
              e.preventDefault();
              validateEmail(email) ? loginFetchAPI({email, password, remember}) : alert("invalid email") 
              
            }}>
              <div className="relative">
                <FiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full p-3 pr-10 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <FiLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  className="w-full p-3 pr-10 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" onChange={(e) => setRemember(e.target.checked)}/>
                  <span>تذكرني</span>
                </label>
                <Link to="/forget-password" className="text-blue-600 hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg transition bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
              >
                تسجيل الدخول
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-white border py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                الدخول باستخدام Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
