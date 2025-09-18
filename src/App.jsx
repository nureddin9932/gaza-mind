import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ForgetPassword from "./auth/ForgetPassword";
import VerifyAccount from "./auth/VerifyAccount";
import ResetPassword from "./auth/ResetPassword";
import SuccessMessage from "./auth/SuccessMessage";
import DrawingDetailsPage from "./UploadingDraw/DrawingDetailsPage";
import MainLayout from "./layout/MainLayout";
import ChildrenManagement from "./ChildrenManagement/ChildrenManagement";
import ChildProfile from "./ChildProfile/ChildProfile";
import SettingsPage from "./SettingsPage/SettingsPage";
import UploadingDraw from "./UploadingDraw/UploadingDraw";
import Dashboard from "./Dashboard/Dashboard";
import GridView from "./GridView/GridView";


function App() {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<SignIn />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verify-account" element={<VerifyAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success-message" element={<SuccessMessage />} />
      <Route path="/drawing-details" element={<DrawingDetailsPage />} />

      {/* Protected Routes with Main Layout */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="childrenManagement" element={<ChildrenManagement />} />
        <Route path="profile" element={<ChildProfile />} />
        <Route path="uploadingDraw" element={<UploadingDraw />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="gridview" element={<GridView />} />
      </Route>

      {/* Redirect / to /dashboard */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
