
export default function DashCard({icone , title , counter ,percenteg}) {
  return (
    <div className="w-1/4 rounded-2xl bg-[#F9FAFB] px-5 py-6 flex flex-col gap-5">
        <div className="  rounded-lg w-8 h-8 bg-[#DBEAFE] flex justify-center items-center">
            <img src={icone} alt="" className=" w-[15px] h-[15px]" />
        </div>
        <p className=" text-base font-medium  text-[#475467]">{title}</p>
        <div className=" flex items-center gap-3">
            <p className=" font-semibold text-2xl">{counter}</p>
            <span
                dir="ltr"
                className={`w-[49px] h-5 flex justify-center items-center border  text-xs rounded-full  font-semibold ${
                percenteg < 0 ? 'text-[#9F1239] bg-[#FFE4E6] border-[#FECDD3]' : 'text-[#065F46] bg-[#D1FAE5] border-[#A7F3D0]'
                }`}
            >
                {percenteg}%
            </span>
        </div>
    </div>
  )
}
