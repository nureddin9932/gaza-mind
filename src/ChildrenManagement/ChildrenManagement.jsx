import React from 'react';

function ChildManagementHeader() {
  return (
    <div className="w-full min-h-full bg-white border  border-[#E4E7EC] rounded-lg">
  <div className="flex justify-between items-center p-4">
    <h1 className="text-right text-gray-800 text-2xl font-medium">
      إدارة الأطفال
    </h1>
    <button className="bg-[#007AFF] text-white text-sm px-4 py-2 rounded shadow-md active:shadow-inner transform active:translate-y-[1px] transition">
  + إضافة طفل جديد
</button>

  </div>
  <div className="border-b border-gray-200 w-full"></div>
</div>
  );
}

export default ChildManagementHeader;
