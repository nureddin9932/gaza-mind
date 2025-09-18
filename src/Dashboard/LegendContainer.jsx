import React from 'react'

export default function LegendContainer() {
  return (
    <div className=' bg-white py-6 px-5 rounded-2xl w-full mt-6 border-[#E4E7EC] border '>
      <h2 className='mb-6 font-semibold text-lg'>مؤشر التحليل العاطفي</h2>
      <div className='  flex w-full justify-between items-center gap-2'>
        <div className=' rounded-lg  bg-[#ECFDF5] text-[#065F46] p-6'>
        <h2 className='mb-2 font-semibold text-base'>+100 إلى +1 ✅</h2>
        <p className=' text-xs font-medium'>حالة عاطفية إيجابية – تشير إلى مشاعر مستقرة أو متحسنة</p>
        </div>
        <div className=' rounded-lg  bg-[#F2F4F7] p-6'>
        <h2 className='mb-2 font-semibold text-base' >⚪ 0 </h2>
        <p className=' text-xs text-gray-500 font-medium'>حالة محايدة – لا توجد إشارات واضحة على تحسّن أو تدهور</p>
        </div>
        <div className=' text-[#9F1239] rounded-lg  bg-[#FFF1F2] py-6 pr-6'>
        <h2 className='mb-2 font-semibold text-base'>-1 إلى -100 🔴</h2>
        <p className=' text-xs font-medium'>حالة عاطفية سلبية – تُظهر مؤشرات قلق، حزن أو اضطراب عاطفي</p>
        </div>

      </div>
    </div>
  )
}
