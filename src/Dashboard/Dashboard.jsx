import EmotionalChart from "../components/EmotionalChart";
import HeadDash from "../components/HeadDash";
import SummaryDash from "../components/SummaryDash";
import ChartSection from "./ChartSection";

export default function Dashboard() {

  return (
    <div className="w-full min-h-full bg-white border  border-[#E4E7EC] rounded-lg">
      <HeadDash/>
      <SummaryDash/>
      <div className="  border-b border-[#E4E7EC] py-8 px-12">
        <ChartSection/>
      </div>

    </div>
  )
}
