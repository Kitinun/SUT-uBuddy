import { useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";
import InitialSearchState from "../components/InitialSearchState";
import NotFoundUser from "../components/NotFoundUser";
import Loading from "../components/Layout/Loading";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // const employees = [
  //   {
  //     id: "267013",
  //     name: "นางสาวศิริตา บุญรุ่งเรือง",
  //     position: "เจ้าหน้าที่บริหารงานทั่วไป",
  //     department: "ส่วนบริหารทรัพยากรบุคคล",
  //     work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
  //     image: "/public/images/user.png",
  //   },
  //   {
  //     id: "268010",
  //     name: "นายกิตินันท์ คนสอน",
  //     position: "เจ้าหน้าที่วิเคราะห์ระบบคอมพิวเตอร์",
  //     department: "ส่วนบริหารทรัพยากรบุคคล",
  //     work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
  //     image: "/public/images/user.png",
  //   },
  // ];

  const fetchEmployee = async (staffCode) => {
    try {
      const token = "5uO8AvpX0AJeM9v5X5ciORN17CpZpEI1346x7Hbr3zi8VefN49"; // ต้องกำหนดค่า token ที่ถูกต้อง
      const response = await axios.get(
        `http://192.168.90.63/uBuddyHrApi/API/Fn02_GetStaff`,
        {
          params: {
            staffCode: staffCode,
            kToken: token,
          },
        }
      );

      // ตรวจสอบว่ามีข้อมูลกลับมาหรือไม่
      if (response.data[0].recordStatus == false) {
        // ปรับโครงสร้างข้อมูลให้ตรงกับที่ component ต้องการ
        const employeeData = response.data[0];
        setSelectedEmployee(employeeData);
      } else {
        setSelectedEmployee(null);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setSelectedEmployee(null);
      // อาจจะเพิ่ม state สำหรับจัดการ error
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
    <div className="min-h-screen p-4 bg-gray-50 sm:p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-4 top-1/2" />
            <input
              type="number"
              placeholder="ค้นหาด้วยรหัสพนักงาน"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="flex-1 px-6 py-3 text-white bg-orange-400 rounded-lg sm:flex-none hover:bg-orange-500 disabled:opacity-50"
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
              className="flex-1 px-6 py-3 text-gray-600 transition-colors bg-gray-200 rounded-lg sm:flex-none hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ล้างการค้นหา
            </button>
          </div>
        </div>

        {isLoading ? (
          //หน้า loading
          <Loading />
        ) : selectedEmployee === null && hasSearched ? (
          //ไม่พบข้อมูล
          <NotFoundUser />
        ) : selectedEmployee ? (
          //พบข้อมูล
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <EmployeeCard employee={selectedEmployee} />
            <EmployeeForm employee={selectedEmployee} />
          </div>
        ) : (
          <InitialSearchState />
        )}
      </div>
    </div>
  );
}

export default MainPage;
