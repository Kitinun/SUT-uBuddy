import { ChevronDown } from "lucide-react";

function EmployeeForm() {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* ข้อมูลการบรรจุ */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="bg-orange-400 text-white px-6 py-3 rounded-t-xl">
          ข้อมูลการบรรจุ
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm mb-2">วันที่บรรจุ</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm mb-2">อัตราเงินเดือน</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">เลขที่คำสั่งบรรจุ</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
        </div>
      </div>

      {/* ข้อมูลที่อยู่ */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="bg-orange-400 text-white px-6 py-3 rounded-t-xl">
          ข้อมูลที่อยู่
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm mb-2">ประเภทที่อยู่อาศัย</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกประเภท</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">ถนน</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm mb-2">ตำบล</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกตำบล</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">อำเภอ</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกอำเภอ</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm mb-2">จังหวัด</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกจังหวัด</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">รหัสไปรษณีย์</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* ข้อมูลธนาคาร */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="bg-orange-400 text-white px-6 py-3 rounded-t-xl">
          ข้อมูลธนาคาร
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm mb-2">ชื่อธนาคาร</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm mb-2">เลขบัญชีธนาคาร</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors">
        บันทึกข้อมูล
      </button>
    </div>
  );
}

export default EmployeeForm;
