// src/components/FilterView.jsx
import React, { useState } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// ✅ Extracted Risk Level Badge
function RiskLevelBadge({ level }) {
  let className =
    "inline-flex items-center justify-center font-bold text-[12px] rounded-full px-3 py-1 font-['IBM_Plex_Sans_Arabic'] whitespace-nowrap";
  if (level === "متوسط") {
    className += " text-[#9A3412] bg-[#FFEDD5] border border-[#FED7AA]";
  } else if (["منخفض", "منخفض جدا"].includes(level)) {
    className += " text-[#065F46] bg-[#D1FAE5] border border-[#A7F3D0]";
  } else if (["مرتفع", "مرتفع جدا"].includes(level)) {
    className += " text-[#B42318] bg-[#FFE4E6] border border-[#FECDD3]";
  } else {
    className += " text-[#667085] bg-gray-100";
  }
  return <span className={className}>{level}</span>;
}

function ChildCard({ name, age, mentalState, riskLevel, image }) {
  return (
    <div className="w-full  h-[300px] bg-white rounded-[16px] border border-[#EAECF0] p-4 shadow-sm text-right font-['IBM_Plex_Sans_Arabic'] flex flex-col">
      <div className="w-full h-[140px] mb-4 overflow-hidden rounded-[12px]">
        <img
          src={image || "/src/assets/image.png"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-[16px] text-[#101828] ">{name}</h3>
        <p className="text-[#475467] text-[13px] font-semibold">{age} عام</p>
      </div>
      <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] p-2 mb-2">
        <span className="text-[#667085] text-[12px] font-medium">الحالة النفسية</span>
        <div className="flex items-center gap-1">
          <IoMdRadioButtonOn className="text-[#D92D20] w-3 h-3" />
          <span className="text-[#1D2939] text-[12px] font-medium">
            {mentalState}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[8px] p-2">
        <span className="text-[#667085] text-[12px] font-medium">درجة الخطر</span>
        <RiskLevelBadge level={riskLevel} />
      </div>
    </div>
  );
}

function FilterView({ viewMode, filters, childrenData }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [bulkMenuOpen, setBulkMenuOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  // ✅ Apply filters
  const filteredChildren = childrenData.filter((child) => {
    const search = filters?.search?.trim().toLowerCase();
    const matchesSearch = !search || child.name.toLowerCase().includes(search);
    const matchesAge =
      !filters?.age || String(child.age) === String(filters.age);
    const matchesMental =
      !filters?.mentalState || child.mentalState === filters.mentalState;
    const matchesRisk =
      !filters?.riskLevel || child.riskLevel === filters.riskLevel;
    return matchesSearch && matchesAge && matchesMental && matchesRisk;
  });

  const handleSelectAll = (e) => {
    setSelectedIds(e.target.checked ? filteredChildren.map((c) => c.id) : []);
  };
  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-[1172px] mx-auto">
      {viewMode === "grid" ? (
        // Grid View
        <div className="rounded-[16px] border border-[#F2F4F7] bg-[#F9FAFB] p-[18px] flex flex-col gap-[16px] text-right">
          <div className="flex justify-center">
            <div className="w-full max-w-[1038px] grid grid-cols-4 gap-[18px] ">
              {filteredChildren.map((child) => (
                <ChildCard key={child.id} {...child} image={child.image} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Table View
        <div className="rounded-[16px] border border-[#F2F4F7] bg-[#F9FAFB] p-[18px] flex flex-col gap-[16px] text-right">
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full table-auto text-sm font-['IBM_Plex_Sans_Arabic']">
              <thead>
                <tr>
                  {/* Checkbox Column */}
                  <th className="w-[48px] h-[48px] px-2 py-2   ">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className="w-[20px] h-[20px] "
                    />
                  </th>

                  {/* Name Column */}
                  <th className="  w-[140px] h-[48px] px-1 py-2 flex items-center gap-[8px] text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    الاسم الكامل
                  </th>

                  {/* Age Column */}
                  <th className="w-[72px] h-[48px] px-4  py-2 text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    العمر
                  </th>

                  {/* Mental State Column */}
                  <th className=" w-[138px] h-[48px] px-4 py-2 text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    الحالة النفسية
                  </th>

                  {/* Risk Level Column */}
                  <th className=" w-[138px] h-[48px] px-4 py-2 text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    درجة الخطر
                  </th>

                  {/* Gender Column */}
                  <th className="w-[100px] h-[48px]  px-4 py-2 text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    الجنس
                  </th>

                  {/* Last Analysis Column */}
                  <th className=" w-[120px] h-[48px] px-4 py-2 text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    آخر تحليل
                  </th>

                  {/* Drawings Column */}
                  <th className=" w-[120px] h-[48px] px-4 py-2 text-right text-[#667085] font-bold text-base whitespace-nowrap">
                    عدد الرسومات
                  </th>

                  {/* Actions Column */}
                  <th className="w-[48px] h-[48px] px-4 py-2 text-right relative">
                    <button onClick={() => setBulkMenuOpen((p) => !p)}>
                      <HiOutlineDotsHorizontal className="w-5 h-5 text-[#667085]" />
                    </button>
                    {selectedIds.length > 0 && bulkMenuOpen && (
                      <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md z-10 w-[100px] text-sm">
                        <button className="block w-full px-3 py-2 text-right hover:bg-gray-50">
                          تعديل
                        </button>
                        <button className="block w-full px-3 py-2 text-right hover:bg-gray-50 text-[#B42318]">
                          حذف
                        </button>
                      </div>
                    )}
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full table-auto text-sm font-['IBM_Plex_Sans_Arabic']">
              <tbody>
                {filteredChildren.map((child) => (
                  <tr
                    key={child.id}
                    className={`hover:bg-gray-50 ${
                      selectedIds.includes(child.id) ? "bg-[#6eb3fe65]" : ""
                    }`}
                  >
                    <td className="w-[40px] h-[48px] px-2 py-2  ">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(child.id)}
                        onChange={() => handleSelectRow(child.id)}
                        className=" w-[20px] h-[20px]"
                      />
                    </td>
                    <td className=" w-[140px] h-[48px] px-1 py-3 text-right text-[#667085] font-medium text-base whitespace-nowrap ">
  <div className="flex gap-2 justify-start  h-full">
    <img
      src={child.image || "/src/assets/image.png"}
      alt={child.name}
      className=" w-[24px] h-[24px] rounded-[4px]  border-0.6 border-[#18181B1A] object-cover"
    />
    <span>{child.name}</span>
  </div>
</td>

<td className="w-[66px] h-[48px] px-4 py-2 font-medium text-right text-[#667085] text-base whitespace-nowrap">
  {child.age}
</td>
                  <td className=" w-[127px] h-[48px] px-3 py-2 text-right font-medium text-[#101828]">
  <div className="flex items-center gap-2 justify-start h-full">
    <IoMdRadioButtonOn className="text-[#D92D20]" />
    <span>{child.mentalState}</span>
  </div>
</td>

<td className="w-[114px] h-[48px] px-2 py-2 text-right  ">
  <div className="flex items-center justify-start h-full">
    <RiskLevelBadge level={child.riskLevel} />
  </div>
</td>
                    <td className="  w-[83px] h-[48px] px-4 py-2 font-medium text-right text-[#667085]">{child.gender}</td>
                    <td className=" w-[102px] h-[48px] px-2 py-2 font-medium text-right text-[#667085]">{child.lastAnalysis}</td>
                    <td className=" w-[125px] h-[48px] p-4 font-medium text-right text-[#667085]">{child.drawings}</td>
                    <td className="p-4  text-right text-[#667085]">
                      <button
                        onClick={() =>
                          setOpenMenuId((p) =>
                            p === child.id ? null : child.id
                          )
                        }
                      >
                        <HiOutlineDotsHorizontal className="w-5 h-5 text-[#667085]" />
                      </button>
                      {openMenuId === child.id && (
                        <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md z-10 w-[100px] text-sm">
                          <button className="block w-full px-3 py-2 text-right hover:bg-gray-50">
                            تعديل
                          </button>
                          <button className="block w-full px-3 py-2 text-right hover:bg-gray-50 text-[#B42318]">
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
