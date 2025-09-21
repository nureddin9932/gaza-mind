import React, { useState } from "react";
import ChildrenFilterBar from "./ChildrenFilterBar";
import ChildManagementHeader from "./ChildrenManagement";
import FilterView from "./FilterView";

export default function Main() {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
  search: "",
  age: "",
  mentalState: "",
  riskLevel: "",
});


  return (
      <div className="w-full min-h-full bg-white border  border-[#E4E7EC] rounded-lg">
      {/* الهيدر */}
      <div className="flex flex-col space-y-8 py-8 px-8">
        <div className="[&>*]:border-none [&>*]:rounded-lg">
          <ChildManagementHeader />
        </div>

        <div className="w-[1076px]  mx-auto flex flex-col gap-6   rounded-[16px]  p-6">
        {/* شريط الفلترة */}
        <ChildrenFilterBar
  viewMode={viewMode}
  setViewMode={setViewMode}
  filters={filters}
  setFilters={setFilters}
/>

        {/* منطقة عرض البيانات */}
        <FilterView viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      </div>
    </div>
  );
}
