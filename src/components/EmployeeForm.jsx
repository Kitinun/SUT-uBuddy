import { ChevronDown } from "lucide-react";

function EmployeeForm({ employee }) {
  return (
    <div className="space-y-6 lg:col-span-2">
      {/* ข้อมูลการบรรจุ */}
      <div className="bg-white shadow-sm rounded-xl">
        <div className="px-6 py-3 text-white bg-orange-400 rounded-t-xl">
          ข้อมูลการบรรจุ
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">วันที่บรรจุ</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">อัตราเงินเดือน</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm">เลขที่คำสั่งบรรจุ</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
        </div>
      </div>

      {/* ข้อมูลที่อยู่ */}
      <div className="bg-white shadow-sm rounded-xl">
        <div className="px-6 py-3 text-white bg-orange-400 rounded-t-xl">
          ข้อมูลที่อยู่
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">ประเภทที่อยู่อาศัย</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกประเภท</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm">ถนน</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">บ้านเลขที่</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">ตำบล</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกตำบล</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">หมู่ที่</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">อำเภอ</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกอำเภอ</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">หมู่บ้าน</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">จังหวัด</label>
              <div className="relative">
                <select className="w-full p-2 border rounded-lg appearance-none">
                  <option>เลือกจังหวัด</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">ซอย</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">รหัสไปรษณีย์</label>
              <input
                type="text"
                disabled
                className="w-full p-2 text-gray-500 bg-gray-100 border rounded-lg cursor-not-allowed"
              />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* ข้อมูลธนาคาร */}
      <div className="bg-white shadow-sm rounded-xl">
        <div className="px-6 py-3 text-white bg-orange-400 rounded-t-xl">
          ข้อมูลธนาคาร
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm">ชื่อธนาคาร</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">เลขบัญชีธนาคาร</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2 text-sm">ชื่อบัญชี</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <button className="w-40 py-3 text-white transition-colors bg-orange-400 rounded-lg hover:bg-orange-500">
        บันทึกข้อมูล
      </button>
    </div>
  );
}

export default EmployeeForm;
