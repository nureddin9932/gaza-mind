import icone from '../assets/dashIcone/chevron-selector-vertical.png'
export default function SortingSection() {
  return (
    <div className="px-8 flex justify-between my-6">
      <div className=" flex items-center gap-6">
        <div className=" w-[220px] ">
            <p className="mb-4 text-base font-semibold">الفترة الزمنية</p>
            <div className=" w-full flex justify-between items-center rounded-[6px] bg-white py-1.5 px-2 border border-[#E4E7EC]">
                <p className=' text-[#98A2B3] text-sm font-medium'>اخر 30 يوم</p>
                <div className=" flex justify-center items-center w-8 h-8">
                    <img src={icone} alt="" />
                </div>
            </div>
        </div>
        <div className=" w-[250px] " >
            <p className="mb-4 text-base font-semibold">حدد الأطفال 
                <span className=" font-medium text-gray-500"> (الحد الأقصي 3 أطفال)</span>
            </p>
            <div className=" w-full flex gap-1 items-center rounded-[6px] bg-white py-1.5 px-2 border border-[#E4E7EC]">
               <div className="flex font-semibold text-[#667085] items-center gap-1 bg-[#F9FAFB] border border-[#F2F4F7] rounded-md px-2 py-1 text-sm ">
                  <span>محمد</span>
                  <button
                    type="button"
                    
                    className=" hover:text-red-500 text-xs"
                  >
                    ✕
                  </button>
                </div>
               <div className="flex font-semibold text-[#667085] items-center gap-1 bg-[#F9FAFB] border border-[#F2F4F7] rounded-md px-2 py-1 text-sm ">
                  <span>ليلى</span>
                  <button
                    type="button"
                    
                    className=" hover:text-red-500 text-xs"
                  >
                    ✕
                  </button>
                </div>
               <div className="flex font-semibold text-[#667085] items-center gap-1 bg-[#F9FAFB] border border-[#F2F4F7] rounded-md px-2 py-1 text-sm ">
                  <span>وليد</span>
                  <button
                    type="button"
                    
                    className=" hover:text-red-500 text-xs"
                  >
                    ✕
                  </button>
                </div>
            </div>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <div className=' flex items-center gap-1'>
           <span className=' w-3 h-3 rounded-sm  bg-[#8B5CF6]'></span>
           <p className=' text-lg font-semibold'>محمد</p>
        </div>
        <div className=' flex items-center gap-1'>
           <span className=' w-3 h-3 rounded-sm  bg-[#3B82F6]'></span>
           <p className=' text-lg font-semibold'>ليلى</p>
        </div>
        <div className=' flex items-center gap-1'>
           <span className=' w-3 h-3 rounded-sm  bg-[#F97316]'></span>
           <p className=' text-lg font-semibold'>وليد</p>
        </div>
      </div>
    </div>
  )
}
