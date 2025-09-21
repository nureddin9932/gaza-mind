import StatusBadge from "../common/StatusBadge/StatusBadge";
import { FaChevronDown } from "react-icons/fa6";

function RecommendationItem({ status, title, description }) {
  return (
    <div className="flex justify-between align-middle gap-2 p-4 border border-gray-200 rounded-xl bg-white ">
      <div className="flex flex-col items-start gap-2">
        <StatusBadge status={status} />
        <div className="flex flex-col pt-6 pb-5">
          <p className="text-[#1D2939] font-medium text-[16px] pb-3">{title}</p>
          <p className="text-[#475467] text-[13px]">{description}</p>
        </div>
      </div>
      <button className="self-center flex  items-center gap-1 h-fit text-[#101828] font-semibold border border-gray-200 px-2 py-1 text-sm rounded-md cursor-pointer">
        تمييز كمكتمل
        <FaChevronDown className="text-[#667085]" />
      </button>
    </div>
  );
}

export default RecommendationItem;
