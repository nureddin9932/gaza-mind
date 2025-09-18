import React from 'react'
import EmotionalChart from '../components/EmotionalChart'
import HeadChart from './HeadChart'
import SortingSection from './SortingSection'
import LegendContainer from './LegendContainer'

export default function ChartSection() {
  return (
    <div className=' p-3 rounded-2xl bg-[#F9FAFB] border border-[#E4E7EC]'>
        <HeadChart/>
        <SortingSection/>
       <EmotionalChart/>
       <LegendContainer/>
    </div>
  )
}
