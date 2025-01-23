import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#F9A426] to-[#FA692F]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo and Title */}
          <div className="flex-1">
            <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              SUT uBuddy
            </h1>
          </div>

          {/* Logout Button */}
          <button
            className="flex items-center gap-1 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 
                     text-sm sm:text-base text-white hover:bg-white/20 
                     rounded-md transition-colors duration-200"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">ออกจากระบบ</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
