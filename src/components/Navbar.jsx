import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // เพิ่มการ reload หน้าเว็บหลังจาก navigate
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <nav className="bg-gradient-to-r from-[#F9A426] to-[#FA692F] py-2 sm:py-3">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-1 sm:gap-2">
            <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
              SUT uBuddy
            </h1>
          </div>

          {/* Logout Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 rounded-md transition-colors"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            ออกจากระบบ
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
