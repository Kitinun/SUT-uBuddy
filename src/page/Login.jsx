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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = "5uO8AvpX0AJeM9v5X5ciORN17CpZpEI1346x7Hbr3zi8VefN49";
    try {
      setIsLoading(true);
      setShowError(false);
      setShowSuccess(false);

      if (staffCode.length === 6 && /^\d+$/.test(staffCode)) {
        const response = await axios.get(
          `http://192.168.90.63/uBuddyHrApi/API/Fn01_GetStaff`,
          {
            params: {
              staffCode: staffCode,
              kToken: token,
            },
          }
        );

        if (response?.data?.status === true) {
          setShowSuccess(true);
          navigate("/mainpage");
        } else {
          setShowError(true);
          setErrorMessage("ไม่พบข้อมูลผู้ใช้ กรุณาตรวจสอบรหัสพนักงานอีกครั้ง");
        }
      } else {
        setShowError(true);
        setErrorMessage("รหัสพนักงานต้องเป็นตัวเลข 6 หลักเท่านั้น");
      }
    } catch (error) {
      console.error("Login error:", error);
      setShowError(true);
      setErrorMessage("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-[#F9A426] to-[#FA692F]">
      {/* Left Section - Brand */}
      <div className="flex flex-col items-center justify-center w-full p-8 lg:w-1/2 lg:items-start lg:pl-16 xl:pl-32">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white md:text-6xl xl:text-7xl">
            SUT
          </h1>
          <h2 className="text-5xl font-bold text-white md:text-6xl xl:text-7xl">
            uBuddy
          </h2>
        </div>
      </div>

      {/* Right Section - Login Card */}
      <div className="flex items-center justify-center w-full p-6 lg:w-1/2 lg:pr-16 xl:pr-32">
        <div className="w-full max-w-lg p-6 bg-white shadow-xl rounded-3xl sm:p-8 lg:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8 lg:mb-16">
            <div className="text-[#E86A33] text-xl lg:text-2xl font-bold flex items-center">
              <img
                src="/images/SUT_logo.png"
                alt="SUT Logo"
                className="h-16 md:h-20 lg:h-24"
              />
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <label className="block mb-2 text-base text-gray-600 lg:mb-3 lg:text-lg">
                Staffcode
              </label>
              <input
                type="text"
                value={staffCode}
                onChange={(e) => setStaffCode(e.target.value)}
                placeholder="กรอกรหัสบุคลากรของตนเอง"
                disabled={isLoading}
                className="w-full px-3 lg:px-4 py-2.5 lg:py-3 text-base lg:text-lg rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Loading Spinner */}
            {isLoading && (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-b-2 rounded-full animate-spin lg:h-8 lg:w-8 border-neutral-800"></div>
                <span className="ml-3 text-sm text-gray-600 lg:text-base">
                  กำลังเข้าสู่ระบบ...
                </span>
              </div>
            )}

            {/* Alerts */}
            {!isLoading && (showSuccess || showError) && (
              <Alert variant={showSuccess ? "success" : "error"}>
                {showSuccess
                  ? "เข้าสู่ระบบสำเร็จ! กำลังพาคุณไปยังหน้าข้อมูลผู้ใช้..."
                  : errorMessage}
              </Alert>
            )}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-28 lg:w-32 bg-neutral-800 text-white py-2 lg:py-2.5 rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center text-base lg:text-lg"
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
