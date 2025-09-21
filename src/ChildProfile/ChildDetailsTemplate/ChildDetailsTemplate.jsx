import { useState } from "react";
import Tabs from "../Tabs/Tabs";
import ChildProfile from "../ChildProfile/ChildProfile";
import RecommendationsList from "../RecommendationsList/RecommendationsList";
import ChildHeader from "../ChildHeader/ChildHeader";
import DrawingsRecords from "../DrawingsRecords";
import Overview from "../Overview";

function ChildDetailsTemplate() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 bg-white min-h-screen border-[1px] border-[#E4E7EC] rounded-[32px]">
      {/* Header */}
      <ChildHeader />

      {/* Profile */}
      <ChildProfile />

      {/* Tabs */}
      <Tabs
        tabs={["نظرة عامة", "سجل الرسومات", "التوصيات الذكية"]}
        onChange={setActiveTab}
      />

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 0 && <Overview />}
        {activeTab === 1 && <DrawingsRecords />}
        {activeTab === 2 && <RecommendationsList />}
      </div>
    </div>
  );
}

export default ChildDetailsTemplate;
