function GridView() {
  const drawings = [
    { src: "/images/drawing.png", date: "2018 - 2 - 12" },
    { src: "/images/drawing.png", date: "2019 - 6 - 20" },
    { src: "/images/drawing.png", date: "2020 - 1 - 05" },
    { src: "/images/drawing.png", date: "2021 - 11 - 14" },
    { src: "/images/drawing.png", date: "2021 - 11 - 14" },
    { src: "/images/drawing.png", date: "2021 - 11 - 14" },
    { src: "/images/drawing.png", date: "2021 - 11 - 14" },
    { src: "/images/drawing.png", date: "2021 - 11 - 14" },
  ];

  return (
    <div className="flex gap-[24px] flex-wrap p-[24px] bg-[#F9FAFB] rounded-[16px] mt-[16px]">
      {drawings.map((item, idx) => (
        <div
          key={idx}
          className="relative group w-[239px] border-[8px] border-white rounded-[24px] overflow-hidden shadow-[0_0_0_1px_#20346014,0_1px_2px_0_#2034601F,inset_0_0_0_8px_#FFFFFF]"
        >
          <img src={item.src} alt="" className="w-full h-full rounded-[16px]" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px] bg-[linear-gradient(180deg,rgba(16,24,40,0)_0%,rgba(16,24,40,0.8)_97.78%)]" />

          {/* Date label */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#10182866] px-[12px] py-[8px] rounded-[30px] flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[144px] text-white backdrop-blur-[24px]">
            <img src="/images/calendar.svg" alt="" />
            <span className="font-medium text-[14px] font-inter tracking-normal">
              {item.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridView;
