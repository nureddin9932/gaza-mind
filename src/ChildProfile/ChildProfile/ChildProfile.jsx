import Avatar from "../common/Avatar/Avatar";
import InfoField from "../InfoField/InfoField";
import { FiUsers } from "react-icons/fi";
import { IoCalendarSharp } from "react-icons/io5";

function ChildProfile() {
  return (
    <div className="flex items-center justify-between bg-[#F9FAFB] p-6 rounded-xl">
      {/* Left section: Info fields */}

      <div className="flex items-center gap-6">
        <Avatar src="/images/child.png" alt="عبدالله" />
        <div className="text-right">
          <h2 className="text-2xl font-bold text-[#101828] pb-5">عبدالله</h2>
          <div className="flex items-center gap-2 text-[#667085] text-sm justify-end">
            <span>ذكر</span>
            <span>|</span>
            <IoCalendarSharp size={14} />
            <span>12 - 2 - 2018</span>
          </div>
        </div>
      </div>
      {/* Right section: Child details */}
      <div className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-sm w-1/3">
        <InfoField label="الحالة النفسية" value="قلق" status="قلق" />
        <InfoField label="المرشد المسؤول" value="ليلي محمد" />
        <InfoField
          label="المجموعة"
          value="-"
          editable
          onEdit={() => alert("Edit group clicked")}
          icon={<FiUsers size={14} />}
        />
      </div>
    </div>
  );
}

export default ChildProfile;
