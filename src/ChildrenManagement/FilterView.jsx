// src/components/FilterView.jsx
import React, { useState } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function ChildCard({ name, age, mentalState, riskLevel, image }) {
  const getRiskLevelStyle = (level) => {
    if (level === "متوسط") {
      return "inline-flex items-center justify-center font-semibold text-xs text-center text-[#9A3412] leading-[20px] font-['IBM_Plex_Sans_Arabic'] gap-[3px] rounded-full px-[24px] h-[20px] bg-[#FFEDD5] border border-[#FED7AA]";
    } else if (["منخفض", "منخفض جدا"].includes(level)) {
      return "inline-flex items-center justify-center font-semibold text-xs text-[#065F46] font-['IBM_Plex_Sans_Arabic'] gap-[3px] rounded-full px-[24px] h-[20px] bg-[#D1FAE5] border border-[#A7F3D0]";
    } else if (["مرتفع", "مرتفع جدا"].includes(level)) {
      return "inline-flex items-center justify-center font-semibold text-xs text-[#B42318] font-['IBM_Plex_Sans_Arabic'] gap-[3px] rounded-full px-[24px] h-[20px] bg-[#FFE4E6] border border-[#FECDD3]";
    } else {
      return "font-medium text-sm text-[#667085] font-['IBM_Plex_Sans_Arabic']";
    }
  };

  return (
    <div className="bg-white rounded-[16px] border border-[#EAECF0] p-4 shadow-sm text-right font-['IBM_Plex_Sans_Arabic']">
      <img
        src={image}
        alt={name}
        className="w-full h-[160px] object-cover rounded-[12px] mb-4"
      />
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[16px] text-[#101828]">{name}</h3>
        <p className="text-[#475467] text-[13px] font-semibold">{age} عام</p>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {/* الحالة النفسية */}
        <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] p-2">
          <p className="text-[#667085] text-[13px]">الحالة النفسية</p>
          <div className="flex items-center gap-1">
            <IoMdRadioButtonOn className="text-[#D92D20]" />
            <span>{mentalState}</span>
          </div>
        </div>

        {/* درجة الخطر */}
        <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] p-2">
          <p className="text-[#667085] text-[13px]">درجة الخطر</p>
          <span className={getRiskLevelStyle(riskLevel)}>{riskLevel}</span>
        </div>
      </div>
    </div>
  );
}

  function FilterView({ viewMode, filters, childrenData }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [bulkMenuOpen, setBulkMenuOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const children = childrenData; // ✅ use prop from Main

  // ✅ Apply filters here
  const filteredChildren = children.filter((child) => {
    const matchesSearch =
      !filters?.search ||
      child.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesAge = !filters?.age || String(child.age) === String(filters.age);
    const matchesMental =
      !filters?.mentalState || child.mentalState === filters.mentalState;
    const matchesRisk =
      !filters?.riskLevel || child.riskLevel === filters.riskLevel;

    return matchesSearch && matchesAge && matchesMental && matchesRisk;
  });

  const toggleRowMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleBulkMenuClick = () => {
    if (selectedIds.length > 0) {
      setBulkMenuOpen((prev) => !prev);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit row:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete row:", id);
  };

  const handleBulkEdit = () => {
    console.log("Edit selected rows:", selectedIds);
  };

  const handleBulkDelete = () => {
    console.log("Delete selected rows:", selectedIds);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredChildren.map((child) => child.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className=" bg-[#F9FAFB] rounded-[16px] p-6 flex flex-col gap-6">
      {viewMode === "grid" ? (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredChildren.map((child) => (
            <ChildCard
              key={child.id}
              name={child.name}
              age={child.age}
              mentalState={child.mentalState}
              riskLevel={child.riskLevel}
              image="/src/assets/image.png"
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto space-y-4">
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full text-sm font-['IBM_Plex_Sans_Arabic']">
              <thead>
                <tr>
                  <th className="p-4 text-right w-[40px]">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className="w-[14px] h-[14px]"
                    />
                  </th>

                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    الاسم الكامل
                  </th>
                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    العمر
                  </th>
                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    الحالة النفسية
                  </th>
                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    درجة الخطر
                  </th>
                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    الجنس
                  </th>
                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    آخر تحليل
                  </th>
                  <th className="p-4 text-[#667085] font-bold text-base text-right w-[140px]">
                    عدد الرسومات
                  </th>
                  <th className="p-5 text-right w-[40px] relative">
                    <button onClick={handleBulkMenuClick}>
                      <HiOutlineDotsHorizontal className="w-5 h-5 text-[#667085]" />
                    </button>

                    {selectedIds.length > 0 && bulkMenuOpen && (
                      <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md z-10 w-[100px] text-sm font-['IBM_Plex_Sans_Arabic']">
                        <button
                          onClick={handleBulkEdit}
                          className="block w-full px-3 py-2 text-right hover:bg-gray-50"
                        >
                          تعديل
                        </button>
                        <button
                          onClick={handleBulkDelete}
                          className="block w-full px-3 py-2 text-right hover:bg-gray-50 text-[#B42318]"
                        >
                          حذف
                        </button>
                      </div>
                    )}
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {/* الجسم (الأسطر) */}
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full table-fixed text-sm font-['IBM_Plex_Sans_Arabic']">
              <tbody>
                {filteredChildren.map((child) => (
                  <tr
                    key={child.id}
                    className={`hover:bg-gray-50 ${
                      selectedIds.includes(child.id) ? "bg-[#6eb3fe65]" : ""
                    }`}
                  >
                    <td className="p-4 text-right w-[40px]">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(child.id)}
                        onChange={() => handleSelectRow(child.id)}
                        className="w-[14px] h-[14px]"
                      />
                    </td>

                    <td className="p-4 text-right font-medium text-sm text-[#667085]">
                      <div className="flex items-center gap-2 ">
                        <img
                          src={child.image || "/src/assets/image.png"}
                          alt={child.name}
                          className="w-[24px] h-[24px] rounded-[4px] border border-[#18181B1A] object-cover"
                        />
                        <span>{child.name}</span>
                      </div>
                    </td>

                    <td className="p-4 text-right font-medium text-sm text-[#667085]">
                      {child.age}
                    </td>
                    <td className="p-4 flex items-center gap-2 text-right font-medium text-sm text-[#101828]">
                      <IoMdRadioButtonOn className="text-[#D92D20]" />
                      {child.mentalState}
                    </td>
                    <td className="text-right">{child.riskLevel}</td>

                    <td className="p-4 text-right font-medium text-sm text-[#667085]">
                      {child.gender}
                    </td>
                    <td className="p-4 text-right font-medium text-sm text-[#667085]">
                      {child.lastAnalysis}
                    </td>
                    <td className="p-4 text-right font-medium text-sm text-[#667085]">
                      {child.drawings}
                    </td>
                    <td className=" text-right w-[40px] relative">
                      <button onClick={() => toggleRowMenu(child.id)}>
                        <HiOutlineDotsHorizontal className="w-5 h-5 text-[#667085]" />
                      </button>

                      {openMenuId === child.id && (
                        <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md z-10 w-[100px] text-sm">
                          <button
                            onClick={() => handleEdit(child.id)}
                            className="block w-full px-3 py-2 text-right hover:bg-gray-50"
                          >
                            تعديل
                          </button>
                          <button
                            onClick={() => handleDelete(child.id)}
                            className="block w-full px-3 py-2 text-right hover:bg-gray-50 text-[#B42318]"
                          >
                            حذف
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterView;
