import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Mainpage from "./page/MainPage";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import AuthLayout from "./components/Layout/AuthLayout";

function App() {
  // ฟังก์ชันสำหรับเช็คว่ามี authentication หรือไม่
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return token && user;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated() ? <Navigate to="/mainpage" replace /> : <Login />
          }
        />

        <Route
          path="/mainpage"
          element={
            <ProtectedRoute>
              <AuthLayout>
                <Mainpage />
              </AuthLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
