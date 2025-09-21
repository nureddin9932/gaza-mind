import { useState } from "react";

function TableView() {
  const [selected, setSelected] = useState([]);
  const images = [
    {
      id: 1,
      src: "/images/bed.png",
      analysis: "قلق",
      risk: "منخفض",
      recommendation: "جلسة متابعة",
      action: "/images/eye.svg",
    },
    {
      id: 2,
      src: "/images/bed.png",
      analysis: "مخاوف",
      risk: "مرتفع",
      recommendation: "جلسة متابعة",
      action: "/images/eye.svg",
    },
    {
      id: 3,
      src: "/images/bed.png",
      analysis: "استفسار",
      risk: "متوسط",
      recommendation: "جلسة متابعة",
      action: "/images/eye.svg",
    },
  ];

  // ✅ Toggle all rows
  const toggleAll = (checked) => {
    if (checked) {
      setSelected(images.map((item) => item.id));
    } else {
      setSelected([]);
    }
  };

  // ✅ Toggle single row
  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm bg-white text-right">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3">
              <input
                type="checkbox"
                checked={selected.length === images.length}
                onChange={(e) => toggleAll(e.target.checked)}
                className="appearance-none w-[15px] h-[15px] rounded-[3px] bg-[#FCFCFD] cursor-pointer shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] border-none outline-none checked:bg-[#0A66C2] checked:shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] checked:before:content-['✓'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center relative checked:before:absolute checked:before:inset-0"
              />
            </th>{" "}
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              رقم
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              الصورة المصغرة
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              نتيجة التحليل النفسي
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              درجة الخطر
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              توصية ذكية
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              اجراء
            </th>
          </tr>
        </thead>
        <tbody>
          {images.map((item, index) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selected.includes(item.id)}
                  onChange={() => toggleRow(item.id)}
                  className="appearance-none w-[15px] h-[15px] rounded-[3px] bg-[#FCFCFD] cursor-pointer shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] border-none outline-none checked:bg-[#0A66C2] checked:shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] checked:before:content-['✓'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center checked:before:font-bold relative checked:before:absolute checked:before:inset-0"
                />
              </td>
              <td className="px-4 py-3 text-sm font-medium text-gray-800">
                {index + 1}
              </td>
              <td className="px-4 py-3">
                <img
                  src={item.src}
                  alt={`image-${item.id}`}
                  className="w-[24px] h-[24px] object-cover rounded-[4px] shadow"
                />
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {item.analysis}
              </td>
              <td className="px-4 py-3 text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.risk === "مرتفع"
                      ? "bg-[#FFE4E6] border border-[#FECDD3] text-[#9F1239]"
                      : item.risk === "متوسط"
                      ? "bg-[#FFEDD5] border border-[#FED7AA] text-[#9A3412]"
                      : "bg-[#D1FAE5] border border-[#A7F3D0] text-[#065F46]"
                  }`}
                >
                  {item.risk}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {item.recommendation}
              </td>
              <td className="px-4 py-3">
                <button className="w-[28px] h-[28px] cursor-pointer">
                  <img
                    className="w-full h-full"
                    src={item.action}
                    alt="Details"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
