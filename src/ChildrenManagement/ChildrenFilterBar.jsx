import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsListUl } from "react-icons/bs";

export default function ChildrenFilterBar({ viewMode, setViewMode, filters, setFilters }) {
  
  return (
    <div className="rounded-[16px] border border-[#F2F4F7] bg-[#F9FAFB] p-[24px] flex flex-col gap-[16px] text-right">
      <div className="flex justify-center">
        <div className="w-full max-w-[1028px] h-[40px] bg-white border border-[#20346014] rounded-[8px] px-4 py-[8px] shadow-[0px_1px_2px_0px_#2034601F] flex items-center gap-1">
          <FiSearch className="text-[#98A2B3] w-[15px] h-[15px] opacity-100 ml-1" />
          <input
            type="text"
            placeholder="بحث"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full h-[20px] bg-transparent outline-none text-right text-[#98A2B3] font-medium text-lg leading-[20px] tracking-normal"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="w-full max-w-[1028px]  text-right text-[#1D2939] font-bold text-base leading-[150%] font-['IBM_Plex_Sans_Arabic']">
          تصفية حسب
        </p>
      </div>

      <div className="flex justify-center mt-1">
        <div className="w-full max-w-[1028px] grid grid-cols-[repeat(3,minmax(0,1fr))_auto] gap-4 items-center pb-4">
          <input
            type="number"
            min="0"
            placeholder="العمر"
            value={filters.age}
            onChange={(e) => setFilters({ ...filters, age: e.target.value })}
            className="w-full h-[40px] bg-white border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-right text-[#344054] font-medium text-base font-['IBM_Plex_Sans_Arabic'] shadow-sm outline-none"
          />

          <select
            value={filters.mentalState}
            onChange={(e) => setFilters({ ...filters, mentalState: e.target.value })}
            className="w-full h-[40px] bg-white border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-right text-[#98A2B3] font-medium text-base font-['IBM_Plex_Sans_Arabic'] shadow-sm outline-none"
          >
            <option value="" disabled hidden>الحالة</option>
            <option value="قلق">قلق</option>
        <option value="ضغط نفسي">ضغط نفسي</option>
        <option value="توتر">توتر</option>
        <option value="أعراض القلق">أعراض قلق</option>
        <option value="استقرار نفسي">استقرار نفسي</option>
        <option value=" قلق مزمن">قلق مزمن</option>
        <option value="اجهاد "> اجهاد</option>
          </select>

          <select
            value={filters.riskLevel}
            onChange={(e) => setFilters({ ...filters, riskLevel: e.target.value })}
            className="w-full h-[40px] bg-white border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-right text-[#98A2B3] font-medium text-base font-['IBM_Plex_Sans_Arabic'] shadow-sm outline-none"
          >
            <option value="" disabled hidden>درجة الخطر</option>
            <option value="منخفض">منخفض</option>
            <option value="متوسط">متوسط</option>
            <option value="مرتفع">مرتفع</option>
            <option value="مرتفع جدا">مرتفع جدا</option>
            <option value="منخفض جدا">منخفض جدا</option>
          </select>

          <div className="flex items-center border border-[#D0D5DD] rounded-[8px] overflow-hidden bg-white">
            <button
              onClick={() => setViewMode("list")}
              className={`w-[44px] h-[40px] flex items-center justify-center hover:bg-gray-50 border-l ${
                viewMode === "list" ? "text-[#007AFF]" : "text-[#98A2B3]"
              }`}
            >
              <BsListUl className="w-[20px] h-[20px]" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`w-[44px] h-[40px] flex items-center justify-center hover:bg-gray-50 ${
                viewMode === "grid" ? "text-[#007AFF]" : "text-[#98A2B3]"
              }`}
            >
              <HiOutlineViewGrid className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}