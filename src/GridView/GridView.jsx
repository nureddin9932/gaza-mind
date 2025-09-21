import React from "react";
import ChildManagementHeader from "../ChildrenManagement/ChildrenManagement";
import ChildrenPageLayout from "../ChildrenManagement/ChildrenPageLayout";
import ChildrenFilterBar from "../ChildrenManagement/ChildrenFilterBar";
import { IoMdRadioButtonOn } from "react-icons/io";
function ChildCard({ name, age, mentalState, riskLevel, image }) {
  return (
    <div className="bg-white rounded-[16px] border border-[#EAECF0] p-4 shadow-sm text-right font-['IBM_Plex_Sans_Arabic']">
      <img
        src={image}
        alt={name}
        className="w-full h-[160px] object-cover rounded-[12px] mb-4"
      />
      <div className="w-[207px] h-[20px] flex justify-between items-center px-[4px] opacity-100">
        <h3 className="w-[30px] h-[20px] text-[#101828]  font-bold text-[16px] leading-[20px] font-['IBM_Plex_Sans_Arabic'] opacity-100 tracking-[0]">
          {name}
        </h3>
        <p className="w-[38px] h-[20px] text-[#475467]  font-semibold text-[13px] leading-[20px] font-['IBM_Plex_Sans_Arabic'] tracking-[0] opacity-100">
          {age} عام
        </p>{" "}
      </div>
      <div className="mt-[12px] w-[207px] h-[80px] flex flex-col justify-between gap-[8px] opacity-100">
      <div className="w-[207px] h-[36px] flex justify-between items-center rounded-[8px] px-[12px] py-[8px] bg-[#F9FAFB] opacity-100">
        <p className="w-[71px] h-[20px] text-[#667085]  font-medium text-[13px] leading-[20px] font-['IBM_Plex_Sans_Arabic'] tracking-[0] text-right opacity-100">
          الحالة النفسية
        </p>
        <div className="w-[39px] h-[20px] flex items-center gap-[4px] opacity-100">
          <IoMdRadioButtonOn className="text-[#D92D20]" />
          <p className="w-[20px] h-[20px] text-[#1D2939]  font-medium text-[13px] leading-[20px] font-['IBM_Plex_Sans_Arabic'] tracking-[0] opacity-100">
            {mentalState}
          </p>
        </div>
      </div>
      <div className="w-[207px] h-[36px] flex justify-between items-center rounded-[8px] px-[12px] py-[8px] bg-[#F9FAFB] opacity-100">
        <p className="text-[#667085] font-medium text-[13px] leading-[20px] font-['IBM_Plex_Sans_Arabic'] tracking-[0] text-right">
          درجة الخطر
        </p>
        <div className="w-[54px] h-[20px] flex items-center justify-center gap-[3px] px-[6px] rounded-full bg-[#FFE4E6] border border-[#FECDD3] opacity-100">
          <p className="text-[#B42318] font-medium text-[13px] leading-[20px] font-['IBM_Plex_Sans_Arabic']">
            {riskLevel}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

function GridView() {
  return (
    <ChildrenPageLayout>
      <div className="space-y-6">
        {/*.............ChildManagement Header................. */}

        <div className="mb-2 [&>*]:border-none [&>*]:p-0 ">
          <ChildManagementHeader />
        </div>

        {/* + + + + + + + + + + ChildManagement group + + + + + + + + + +*/}

        {/*.............ChildManagement Filter Bar............. */}
        <ChildrenFilterBar />

        {/*.............Cards Example............. */}
        <div className="p-[24px] flex flex-col gap-[16px] text-right rounded-[16px] border border-[#F2F4F7] bg-[#F9FAFB] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ChildCard
              key={index}
              name="علياء"
              age={12}
              mentalState="قلق"
              riskLevel="منخفض"
              image="/src/assets/image.png"
            />
          ))}
        </div>
      </div>
    </ChildrenPageLayout>
  );
}

export default GridView;
