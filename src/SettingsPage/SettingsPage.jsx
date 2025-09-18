import React, { useState } from "react";
import box from '../assets/dashIcone/IconBox.png';

export default function SettingsPage() {
  // State لحفظ التاب النشط
  const [activeTab, setActiveTab] = useState("general");

  // تعريف states للفورم
  const [type, setType] = useState("");
  const [avgChildren, setAvgChildren] = useState("");

  return (
    <div className="w-full min-h-full bg-white rounded-lg p-6">
      <main className="flex-1 p-10" dir="rtl">
        {/* العنوان */}
        <h1 className="mb-8 text-2xl font-semibold text-gray-900">الإعدادات</h1>

        {/* التابات */}
        <div className="mb-12 flex gap-6 border-t border-b border-gray-200 py-3">
          <button
            onClick={() => setActiveTab("account")}
            className={`${activeTab === "account"
                ? "rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow"
                : "rounded-lg px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
              }`}
          >
            المعلومات العامة
          </button>
          <button
            onClick={() => setActiveTab("general")}
            className={`${activeTab === "general"
                ? "rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow"
                : "rounded-lg px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
              }`}
          >
            إعدادات الحساب
          </button>
        </div>

        {/* عرض المحتوى بناءً على التاب المحدد */}
        {activeTab === "general" ? 
        (
          <>
            {/* كارت الوصف - المعلومات العامة */}
            <div className="mb-8 max-w-xl mx-auto rounded-xl bg-gray-50 p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col gap-4">
                {/* العنوان والوصف */}
                <div className="flex flex-col items-start text-right">
                  <h2 className="text-sm font-semibold text-gray-900">شعار المؤسسة</h2>
                  <p className="mt-1 text-xs text-gray-500 leading-5">
                    يمكنك تحديث شعار المؤسسة في أي وقت برفع صورة جديدة، أو حذفه. يُفضل استخدام صورة واضحة بصيغة PNG أو JPG.
                  </p>
                </div>

                {/* الصورة على اليمين، الأزرار على الشمال */}
                <div className="flex items-center justify-between mt-2">
                  {/* الصورة - على اليمين بصريًا */}
                  <div className="flex items-center gap-2">
                    {/* الأفاتار */}
                    <img src={box} alt="box" className="w-12 h-12 rounded-md" />
                  </div>

                  {/* الأزرار - على الشمال بصريًا */}
                  <div className="flex gap-3">
                    <button className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 rounded-md shadow-sm transition">
                      تحديث
                    </button>

                    <button className="px-4 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-md shadow-sm transition">
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* الفورم */}
            <div className="mb-8 max-w-xl mx-auto rounded-xl bg-gray-50 p-6 shadow-sm border border-gray-200">
              {/* اسم المؤسسة */}
              <label
                className="block mb-1 font-semibold text-right text-gray-900"
                htmlFor="institutionName"
              >
                اسم المؤسسة
              </label>
              <input
                id="institutionName"
                type="text"
                placeholder="مثال: مركز الأمل للتأهيل النفسي"
                className="w-full mb-4 p-3 rounded-md border border-gray-300 placeholder:text-gray-400 text-gray-800 focus:outline-none focus:border-blue-500"
                dir="rtl"
              />

              {/* نوع المؤسسة */}
              <label
                className="block mb-1 font-semibold text-right text-gray-900"
                htmlFor="institutionType"
              >
                نوع المؤسسة
              </label>
              
<select
                id="avgChildren"
                value={avgChildren}
                onChange={(e) => setAvgChildren(e.target.value)}
                className="w-full mb-4 p-3 rounded-md border border-gray-300 bg-gray text-gray-800 focus:outline-none focus:border-blue-500"
                dir="rtl"        
              >
                <option value="" disabled className="text-gray-400">
                  اختر نوع المؤسسة...
                </option>
                <option value="type1">نوع 1</option>
                <option value="type2">نوع 2</option>
</select>
              {/* متوسط عدد الأطفال */}
              <label
                className="block mb-1 font-semibold text-right text-gray-900"
                htmlFor="avgChildren"
              >
                متوسط عدد الأطفال
              </label>
              <select
                id="avgChildren"
                value={avgChildren}
                onChange={(e) => setAvgChildren(e.target.value)}
                className="w-full mb-4 p-3 rounded-md border border-gray-300 bg-gray text-gray-800 focus:outline-none focus:border-blue-500"
                dir="rtl"
              >
                <option value="" disabled className="text-gray-400">
                  اختر متوسط عدد الأطفال...
                </option>
                <option value="10-20">10-20</option>
                <option value="20-30">20-30</option>
              </select>

              {/* رقم الترخيص */}
              <label
                className="block mb-1 font-semibold text-right text-gray-900"
                htmlFor="licenseNumber"
              >
                رقم الترخيص
              </label>
              <input
                id="licenseNumber"
                type="text"
                placeholder="اكتب عدد الأطفال في المؤسسة"
                className="w-full mb-4 p-3 rounded-md border border-gray-300 placeholder:text-gray-400 text-gray-800 focus:outline-none focus:border-blue-500"
                dir="rtl"
              />

              {/* العنوان */}
              <label
                className="block mb-1 font-semibold text-right text-gray-900"
                htmlFor="address"
              >
                العنوان
              </label>
              <input
                id="address"
                type="text"
                placeholder="مثال: غزة - حي الرمال"
                className="w-full mb-4 p-3 rounded-md border border-gray-300 placeholder:text-gray-400 text-gray-800 focus:outline-none focus:border-blue-500"
                dir="rtl"
              />

              {/* رقم التواصل الرئيسي */}
              <label
                className="block mb-1 font-semibold text-right text-gray-900"
                htmlFor="contactNumber"
              >
                رقم التواصل الرئيسي
              </label>
              <input
                id="contactNumber"
                type="text"
                placeholder="0599 123 456"
                className="w-full p-3 rounded-md border border-gray-300 placeholder:text-gray-400 text-gray-800 focus:outline-none focus:border-blue-500"
                dir="rtl"
              />
            </div>


          </>
        ) :
          (
            <>
              {/* كارت الوصف - إعدادات الحساب */}
              <div className="mb-8 max-w-xl mx-auto rounded-lg bg-gray-50 p-6 shadow-sm border border-gray-200">
                <h2 className="mb-1 text-base font-semibold text-gray-900">
                  معلومات الدخول وإعدادات الأمان
                </h2>
                <p className="text-xs leading-5 text-gray-500">
                  يمكنك من هنا تعديل بيانات الدخول الخاصة بك، وتحديث كلمة المرور لضمان حماية حساب المؤسسة.
                </p>
              </div>

              {/* الفورم - إعدادات الحساب */}
              <form className="w-full max-w-xl mx-auto rounded-lg border border-gray-200 bg-gray-50 p-6 space-y-6">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="الاسم الكامل"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    كلمة المرور الحالية
                  </label>
                  <input
                    type="password"
                    placeholder="أدخل كلمة المرور الحالية لحساب المؤسسة"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    كلمة المرور الجديدة
                  </label>
                  <input
                    type="password"
                    placeholder="اكتب كلمة المرور الجديدة (8 أحرف على الأقل)"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-[#007bff] px-5 py-2 text-sm font-semibold text-white hover:bg-[#006ae6] focus:ring-2 focus:ring-[#007bff]"
                  >
                    حفظ
                  </button>

                  <button
                    type="button"
                    className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </>
          )
          
          }
      </main>
    </div>
  );
}
