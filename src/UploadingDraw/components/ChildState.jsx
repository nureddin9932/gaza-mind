function ChildState({ emoji, state }) {
  // Map emoji to background colors
  const bgColors = {
    "😊": "#D1FAE5",
    "😓": "#FFEDD5",
    "🔴": "#FFE4E6",
  };

  const bgColor = bgColors[emoji];

  return (
    <div className="flex items-center gap-[8px] bg-white w-[92px] shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F] rounded-[70px] p-[4px] pr-[4px] pl-[16px] ">
      <span
        className="rounded-full px-[11px] py-[6px]"
        style={{ backgroundColor: bgColor }}
      >
        {emoji}
      </span>
      <span className="text-[#344054] font-semibold leading-[150%] text-[14px]">
        {state}
      </span>
    </div>
  );
}

export default ChildState;
