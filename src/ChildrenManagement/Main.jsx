// src/components/Main.jsx
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

  const childrenData = [
    {
      id: 1,
      name: "علياء",
      age: 8,
      mentalState: "قلق",
      riskLevel: "منخفض",
      gender: "أنثى",
      lastAnalysis: "01-03-2025",
      drawings: 4,
    },
    {
      id: 2,
      name: "حسن",
      age: 10,
      mentalState: "ضغط نفسي",
      riskLevel: "منخفض جدا",
      gender: "ذكر",
      lastAnalysis: "15-04-2025",
      drawings: 5,
    },
    {
      id: 3,
      name: "ليلى",
      age: 9,
      mentalState: "اجهاد",
      riskLevel: "متوسط",
      gender: "أنثى",
      lastAnalysis: "15-04-2025",
      drawings: 5,
    },
    {
      id: 4,
      name: "ندى",
      age: 9,
      mentalState: "اجهاد",
      riskLevel: "مرتفع",
      gender: "أنثى",
      lastAnalysis: "15-04-2025",
      drawings: 5,
    },
    {
      id: 5,
      name: "ليلى",
      age: 8,
      mentalState: "قلق",
      riskLevel: "مرتفع جدا",
      gender: "أنثى",
      lastAnalysis: "01-03-2025",
      drawings: 4,
    },
    {
      id: 6,
      name: "عمر",
      age: 8,
      mentalState: "قلق",
      riskLevel: "مرتفع جدا",
      gender: "ذكر",
      lastAnalysis: "01-03-2025",
      drawings: 4,
    },
    {
      id: 7,
      name: "سلوى",
      age: 8,
      mentalState: "قلق",
      riskLevel: "مرتفع جدا",
      gender: "أنثى",
      lastAnalysis: "01-03-2025",
      drawings: 4,
    },
    {
      id: 7,
      name: "سلوى",
      age: 8,
      mentalState: "قلق",
      riskLevel: "مرتفع جدا",
      gender: "أنثى",
      lastAnalysis: "01-03-2025",
      drawings: 4,
    },
  ];

  return (
    <div className="w-full min-h-full bg-white border border-[#E4E7EC] rounded-lg overflow-x-hidden">
      <div className="flex flex-col space-y-8 py-8 px-8">
        <div className="[&>*]:border-none [&>*]:rounded-lg">
          <ChildManagementHeader />
        </div>

        <div className="w-full max-w-[1076px] mx-auto flex flex-col gap-6 rounded-[16px] p-6">
          <ChildrenFilterBar
            viewMode={viewMode}
            setViewMode={setViewMode}
            filters={filters}
            setFilters={setFilters}
          />

          <FilterView
            viewMode={viewMode}
            childrenData={childrenData}
            filters={filters}
          />
        </div>
      </div>
    </div>
  
  );
}
