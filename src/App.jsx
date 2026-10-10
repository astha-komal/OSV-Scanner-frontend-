import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import VulnerabilityCheckPage from "./pages/VulnerabilityCheckPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <VulnerabilityCheckPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}