import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Mainpage from "./page/MainPage";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* เพิ่ม redirect จาก root path ไปที่ login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/mainpage"
          element={
            <>
              <Navbar />
              <Mainpage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
