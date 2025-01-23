// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// จำลองข้อมูลผู้ใช้
const mockUserData = {
  267013: {
    name: "John Doe",
    department: "IT",
    role: "Developer",
    email: "john.doe@sut.ac.th",
  },
  267014: {
    name: "Jane Smith",
    department: "HR",
    role: "Manager",
    email: "jane.smith@sut.ac.th",
  },
};

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
  const navigate = useNavigate();

  // ฟังก์ชันสร้าง token แบบง่าย
  const generateToken = (staffCode) => {
    return `mock_token_${staffCode}_${Date.now()}`;
  };

  const handleLogin = () => {
    if (staffCode.length === 6 && /^\d+$/.test(staffCode)) {
      const user = mockUserData[staffCode];

      if (user) {
        const token = generateToken(staffCode);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setShowSuccess(true);
        setShowError(false);

        // แก้ path ให้ตรงกับที่กำหนดใน App.jsx
        setTimeout(() => {
          navigate("/mainpage", { replace: true });
        }, 1500);
      } else {
        setShowError(true);
        setShowSuccess(false);
      }
    } else {
      setShowError(true);
      setShowError(false);
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
              <img
                src="/images/SUT_logo.png"
                alt="SUT Logo"
                className="h-24" // ปรับขนาดตามต้องการ
              />
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
                  : "รหัสพนักงานไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง"}
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
