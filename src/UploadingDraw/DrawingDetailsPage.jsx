import Header from "./components/Header";
import DrawingPreview from "./components/DrawingPreview";
import AnalysisTabView from "./components/AnalysisTabView";

function DrawingDetailsPage() {
  return (
    <div>
      <Header />
      <DrawingPreview />
      <AnalysisTabView />
    </div>
  );
}

export default DrawingDetailsPage;
