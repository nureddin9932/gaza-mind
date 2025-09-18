import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ForgetPassword from "./auth/ForgetPassword";
import VerifyAccount from "./auth/VerifyAccount";
import ResetPassword from "./auth/ResetPassword";
import SuccessMessage from "./auth/SuccessMessage";
import DrawingDetailsPage from "./UploadingDraw/DrawingDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verify-account" element={<VerifyAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success-message" element={<SuccessMessage />} />
      <Route path="/drawing-details" element={<DrawingDetailsPage />} />
    </Routes>
  );
}

export default App;
