import { useState } from "react";
import GridView from "./GridView";
import TableView from "./TableView";

function DrawingsRecords() {
  const [view, setView] = useState("grid"); // default is grid

  return (
    <div dir="rtl">
      <div className="flex gap-[16px] mb-[24px] items-center">
        <h2 className="font-semibold text-[#1D2939] text-[24px] leading-[125%]">
          14 رسمة
        </h2>
        <span className="bg-[#D1FAE5] text-[#065F46] rounded-full px-[8px] text-[12px] font-semibold h-[24px] flex items-center">
          تمت إضافة 3 رسومات جديدة هذا الصباح
        </span>
      </div>

      {/* Filter */}
      <div className="flex flex-col gap-[12px] bg-[#F9FAFB] p-4 rounded-[16px] border-1 border-[#F2F4F7] ">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="بحث"
              className="w-full rounded-lg border border-gray-300 pr-10 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <img
              className="absolute right-3 top-1/2 -translate-y-1/2"
              src="/images/magnifying-glass.svg"
              alt=""
            />
          </div>
        </div>
        <span className="text-[#1D2939] text-[14px] font-semibold">
          تصفية حسب
        </span>

        <div className="flex items-center gap-3 w-full">
          <div className="flex gap-[12px]">
            {/* العمر */}
            <div className="relative w-[308px]">
              <select className="appearance-none rounded-[6px] py-[6px] px-[8px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] w-full font-medium text-[13px] text-[#98A2B3]">
                <option className="font-medium text-[13px] text-[#98A2B3]">
                  العمر
                </option>
              </select>
              <img
                className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2"
                src="/images/triangles-mini.svg"
                alt=""
              />
            </div>

            {/* الحالة */}
            <div className="relative w-[308px]">
              <select className="appearance-none rounded-[6px] py-[6px] px-[8px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] w-full font-medium text-[13px] text-[#98A2B3]">
                <option>الحالة</option>
              </select>
              <img
                className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2"
                src="/images/triangles-mini.svg"
                alt=""
              />
            </div>

            {/* درجة الخطر */}
            <div className="relative w-[308px]">
              <select className="appearance-none rounded-[6px] py-[6px] px-[8px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] w-full font-medium text-[13px] text-[#98A2B3]">
                <option>درجة الخطر</option>
              </select>
              <img
                className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2"
                src="/images/triangles-mini.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex rounded-[7px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F]">
            <button
              onClick={() => setView("list")}
              className={`px-[7.43px] h-[32px] hover:opacity-50 cursor-pointer rounded-r-[7px] ${
                view === "list" ? "bg-gray-100" : ""
              }`}
            >
              <img src="/images/list.svg" alt="list view" />
            </button>
            <button
              onClick={() => setView("grid")}
              className={`px-[7.43px] h-[32px] hover:opacity-50 border-r border-[#f2f4f7] rounded-l-[7px] cursor-pointer ${
                view === "grid" ? "bg-gray-100" : ""
              }`}
            >
              <img src="/images/grid.svg" alt="grid view" />
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-4">
        {view === "grid" ? <GridView /> : <TableView />}
      </div>
      <div className="flex items-center justify-between bg-[#F9FAFB] rounded-[16px] px-4 py-2 font-semibold text-[13px] text-[#667085] mt-[16px]">
        {/* Center (page info) */}

        <div className="flex gap-[16px]">
          {/* Right (item range) */}
          <div className="">
            <span>1 — 10 من 100 رسمة</span>
          </div>

          <div className="">
            <span>1 من 10 صفحات</span>
          </div>

          {/* Left (prev/next buttons) */}
        </div>
        <div className="flex gap-4">
          <button className="text-[#667085] disabled:text-[#D0D5DD] cursor-pointer disabled:cursor-not-allowed">
            التالي
          </button>
          <button
            disabled
            className="text-[#667085] cursor-pointer disabled:text-[#D0D5DD] disabled:cursor-not-allowed"
          >
            السابق
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrawingsRecords;
