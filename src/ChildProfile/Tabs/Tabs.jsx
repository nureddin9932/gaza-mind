import { useState } from "react";

export default function Tabs({ tabs, onChange }) {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    onChange(index);
  };

  return (
    <ul className="flex gap-6 border-b border-gray-200 pb-2 mt-6">
      {tabs.map((tab, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer pb-1 ${
            active === index
              ? "text-[#101828] font-medium border border-gray-200 rounded-full px-2"
              : "text-gray-500"
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
