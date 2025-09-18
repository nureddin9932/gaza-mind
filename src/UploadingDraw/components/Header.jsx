export default function Header() {
  return (
    <div
      className="flex items-center justify-between bg-white px-[32px] py-[48px] rounded-xl mb-6 border-b-1 border-[#E4E7EC]"
      dir="rtl"
    >
      <div>
        <span className="text-gray-500 text-[24px]">اسم الطفل</span>
        <span className="mx-2 text-gray-400 text-[24px]">›</span>
        <span className="font-semibold text-gray-800 text-[24px]">
          عنوان الرسمة
        </span>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg text-white btn-gradient hover:opacity-90 transition cursor-pointer">
          + إضافة رسمة
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition cursor-pointer">
          عودة
        </button>
      </div>
    </div>
  );
}
