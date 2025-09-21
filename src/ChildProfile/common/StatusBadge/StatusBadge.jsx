const statusStyles = {
  منخفض: "bg-[#A7F3D0] text-[#065F46] ",
  متوسط: "bg-[#FFEDD5] text-[#9A3412] ",
  مرتفع: "bg-[#FECDD3] text-[#9F1239]",
};

function StatusBadge({ status }) {
  return (
    <span
      className={`px-3 py-1 text-center  rounded-full text-[12px] font-semibold w-fit ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
