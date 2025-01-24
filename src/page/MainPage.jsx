import React, { useState } from "react";
import { Search } from "lucide-react";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const employees = [
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "268010",
      name: "นายกิตินันท์ คนสอน",
      position: "เจ้าหน้าที่วิเคราะห์ระบบคอมพิวเตอร์",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
  ];

  const fetchEmployee = async (searchValue) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const found = employees.find((employee) =>
        employee.id.startsWith(searchValue)
      );
      setSelectedEmployee(found || null);
    } catch (error) {
      console.error("Search failed:", error);
      // You could add error handling state here
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);

    const searchValue = searchQuery.toLowerCase().trim();
    await fetchEmployee(searchValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาด้วยรหัสพนักงาน"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-gray-200"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="flex-1 sm:flex-none px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 disabled:opacity-50"
            >
              {isLoading ? "กำลังค้นหา..." : "ค้นหา"}
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedEmployee(null);
                setHasSearched(false);
              }}
              disabled={isLoading || (!searchQuery && !selectedEmployee)}
              className="flex-1 sm:flex-none px-6 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ล้างการค้นหา
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 bg-white rounded-xl shadow-sm">
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mb-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-400"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
              กำลังค้นหาข้อมูล
            </h3>
            <p className="text-gray-500 text-center">กรุณารอสักครู่...</p>
          </div>
        ) : selectedEmployee === null && hasSearched ? (
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 bg-white rounded-xl shadow-sm">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
              ไม่พบข้อมูล
            </h3>
            <p className="text-gray-500 text-center">
              กรุณาตรวจสอบรหัสพนักงานและลองค้นหาอีกครั้ง
            </p>
          </div>
        ) : selectedEmployee ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <EmployeeCard employee={selectedEmployee} />
            <EmployeeForm />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MainPage;
