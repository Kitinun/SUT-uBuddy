import React, { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 6;

  // ข้อมูลตัวอย่าง
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
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
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
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
      image: "/public/images/user.png",
    },
    {
      id: "267015",
      name: "นายอัครพล จำปาบิด",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
      image: "/public/images/user.png",
    },
    {
      id: "267015",
      name: "นายอัครพล จำปาบิด",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
      image: "/public/images/user.png",
    },
    {
      id: "267015",
      name: "นายอัครพล จำปาบิด",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
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
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
      image: "/public/images/user.png",
    },
    {
      id: "267015",
      name: "นายอัครพล จำปาบิด",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
      image: "/public/images/user.png",
    },
    {
      id: "267015",
      name: "นายอัครพล จำปาบิด",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267013",
      name: "นางสาวศิริตา บุญรุ่งเรือง",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    {
      id: "267014",
      name: "นายทัชพิพล แดงเรือน",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "งานมูลศาสตร์จ",
      image: "/public/images/user.png",
    },
    {
      id: "267015",
      name: "นายอัครพล จำปาบิด",
      position: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "ส่วนบริหารทรัพยากรบุคคล",
      work: "ระบบดิจิทัลเพื่อการบริหารทรัพยากรบุคคล",
      image: "/public/images/user.png",
    },
    //24
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleClear = () => {
    setSearchQuery("");
    setFilteredEmployees([]);
    setHasSearched(false);
    setCurrentPage(1);
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // ป้องกันการ submit form
    setIsLoading(true);
    setCurrentPage(1);

    try {
      // จำลองการเรียก API
      // ในการใช้งานจริง ให้แทนที่ส่วนนี้ด้วยการเรียก API จริง
      await new Promise((resolve) => setTimeout(resolve, 500)); // จำลอง network delay

      if (!searchQuery.trim()) {
        setFilteredEmployees([]);
        setHasSearched(true);
        return;
      }

      const searchValue = searchQuery.toLowerCase().trim();
      const filtered = employees.filter(
        (employee) =>
          employee.id.startsWith(searchValue) ||
          employee.name.toLowerCase().includes(searchValue)
      );

      setFilteredEmployees(filtered);
      setHasSearched(true);
    } catch (error) {
      console.error("Search failed:", error);
      // TODO: แสดง error message ให้ user
    } finally {
      setIsLoading(false);
    }
  };

  const paginatedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredEmployees.slice(startIndex, endIndex);
  }, [filteredEmployees, currentPage]);

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ค้นหาด้วยรหัสประจำตัวบุคลากร หรือ ชื่อ-นามสกุล"
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "กำลังค้นหา..." : "ค้นหา"}
              </button>
              <button
                type="button"
                onClick={handleClear}
                disabled={isLoading || (!searchQuery && !hasSearched)}
                className="px-6 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ล้างการค้นหา
              </button>
            </div>
          </div>
        </form>

        {/* Search Results */}
        {hasSearched && (
          <div className="max-w-7xl mx-auto mb-6">
            <p className="text-gray-600">
              {filteredEmployees.length > 0
                ? `พบ ${filteredEmployees.length} รายการ`
                : "ไม่พบข้อมูลที่ค้นหา"}
            </p>
          </div>
        )}

        {/* Employee Cards */}
        {paginatedEmployees.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedEmployees.map((employee) => (
                <div
                  key={`${employee.id}-${Math.random()}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full"
                >
                  <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4 mb-4">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-3">
                      <h3 className="font-medium text-lg text-center sm:text-left">
                        {employee.name}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="grid grid-cols-1 gap-1">
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-gray-500">รหัสพนักงาน</span>
                            <span className="col-span-2">{employee.id}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-gray-500">ตำแหน่ง</span>
                            <span className="col-span-2">
                              {employee.position}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-gray-500">สังกัด</span>
                            <span className="col-span-2">
                              {employee.department}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-gray-500">งาน</span>
                            <span className="col-span-2">{employee.work}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-auto w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors">
                    เลือก
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? "bg-orange-400 text-white"
                            : "hover:bg-white"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MainPage;
