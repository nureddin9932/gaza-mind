import { useState } from "react";
import Tabs from "../Tabs/Tabs";
import ChildProfile from "../ChildProfile/ChildProfile";
import RecommendationsList from "../RecommendationsList/RecommendationsList";
import ChildHeader from "../ChildHeader/ChildHeader";
import DrawingsRecords from "../DrawingsRecords";

function ChildDetailsTemplate() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 bg-white min-h-screen">
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
        {activeTab === 0 && <p>هنا تظهر نظرة عامة</p>}
        {activeTab === 1 && <DrawingsRecords />}
        {activeTab === 2 && <RecommendationsList />}
      </div>
    </div>
  );
}

export default ChildDetailsTemplate;
