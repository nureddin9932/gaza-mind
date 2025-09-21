import {
  FiArrowLeft,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { IoMdArrowDropleft } from "react-icons/io";

import Button from "../common/Button/Button";

function ChildHeader() {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-t-2xl border-b border-gray-200 mb-12">
      {/* Left side: Back + Add */}

      <div className="flex items-center gap-2 text-gray-600 text-sm">
        <span className="text-2xl text-[#98A2B3] font-medium">
          إدارة الأطفال
        </span>
        <IoMdArrowDropleft className="text-gray-500" size={14} />
        <span className="font-medium text-[#101828] text-2xl">عبدالله</span>

        <div className="flex items-center border rounded-lg overflow-hidden ml-2">
          <button className="p-1 hover:bg-gray-100 border-none">
            <FiChevronRight size={14} />
          </button>
          <button className="p-1 hover:bg-gray-100 border-none">
            <FiChevronLeft size={14} />
          </button>
        </div>
      </div>
      {/* Right side: Breadcrumb */}
      <div className="flex items-center gap-3">
        <Button variant="primary">
          <FiPlus size={16} />
          إضافة رسمة
        </Button>
        <Button variant="secondary">عودة</Button>
      </div>
    </div>
  );
}

export default ChildHeader;
