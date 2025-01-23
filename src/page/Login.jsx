// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Custom Alert Component
const Alert = ({ children, variant }) => {
  const baseStyle = "rounded-lg p-3 mb-4";
  const styles = {
    success: `${baseStyle} bg-green-100 text-green-800`,
    error: `${baseStyle} bg-red-100 text-red-800`,
  };

  return <div className={styles[variant]}>{children}</div>;
};

function Login() {
  const [staffCode, setStaffCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const token = "5uO8AvpX0AJeM9v5X5ciORN17CpZpEI1346x7Hbr3zi8VefN49";

  const handleLogin = async () => {
    try {
      if (staffCode.length === 6 && /^\d+$/.test(staffCode)) {
        const response = await axios.get(
          `http://192.168.90.63/uBuddyHrApi/API/Fn01_GetStaff?staffCode=${staffCode}&kToken=${token}`
        );

        if (response?.data?.status == true) {
          setShowSuccess(true);
          setShowError(false);
          setErrorMessage("");

          // ไม่ต้องรอ timeout ก็ได้ถ้าไม่ต้องการให้เห็น success message
          navigate("/mainpage");

          // หรือถ้าต้องการให้เห็น success message สักพัก:
          // setTimeout(() => {
          //   navigate("/mainpage");
          // }, 1500);
        } else {
          setShowError(true);
          setShowSuccess(false);
          setErrorMessage("ไม่พบข้อมูลผู้ใช้ กรุณาตรวจสอบรหัสพนักงานอีกครั้ง");
        }
      } else {
        setShowError(true);
        setShowSuccess(false);
        setErrorMessage("รหัสพนักงานต้องเป็นตัวเลข 6 หลักเท่านั้น");
      }
    } catch (error) {
      console.error("Login error:", error);
      setShowError(true);
      setShowSuccess(false);
      setErrorMessage("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#F9A426] to-[#FA692F]">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center pl-32">
        <div className="space-y-2">
          <h1 className="text-white text-7xl font-bold">SUT</h1>
          <h2 className="text-white text-7xl font-bold">uBuddy</h2>
        </div>
      </div>

      {/* Right Section - Login Card */}
      <div className="w-1/2 flex items-center justify-center pr-32">
        <div className="bg-white rounded-3xl p-12 w-full max-w-lg shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <div className="text-[#E86A33] text-2xl font-bold flex items-center">
              <img src="/images/SUT_logo.png" alt="SUT Logo" className="h-24" />
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-8">
            <div>
              <label className="block text-gray-600 mb-3 text-lg">
                Staffcode
              </label>
              <input
                type="text"
                value={staffCode}
                onChange={(e) => setStaffCode(e.target.value)}
                placeholder="267013"
                className="w-full px-4 py-3 text-lg rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300"
              />
            </div>

            {(showSuccess || showError) && (
              <Alert variant={showSuccess ? "success" : "error"}>
                {showSuccess
                  ? "เข้าสู่ระบบสำเร็จ! กำลังพาคุณไปยังหน้าข้อมูลผู้ใช้..."
                  : errorMessage}
              </Alert>
            )}

            <button
              onClick={handleLogin}
              className="w-32 bg-neutral-800 text-white py-2.5 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
