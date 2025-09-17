import React from 'react'
import { cardData } from '../Data/dashData'
import DashCard from './Cards/DashCard'

export default function SummaryDash() {
  return (
    <section className='border-y border-[#E4E7EC] px-12 py-8'>
       <h2 className=' mb-6 font-semibold text-lg'>ملخص الأسبوع</h2>
       <div className=' gap-6 flex w-full'>
        {cardData.map((item, index) => (
          <DashCard 
            key={index} 
            title={item.title} 
            icone={item.icone} 
            counter={item.counter} 
            percenteg={item.percenteg} 
          />
        ))}
       </div>
    </section>
  )
}
