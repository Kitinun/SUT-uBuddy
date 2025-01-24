import { UserSearch } from "lucide-react";

function InitialSearchState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 bg-white rounded-xl shadow-sm">
      {/* Icon container */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-orange-50 rounded-full flex items-center justify-center mb-6">
        <UserSearch className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400" />
      </div>

      {/* Text content */}
      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3 text-center">
        กรุณากรอกรหัสบุคลากร
      </h3>
      <p className="text-gray-500 text-center max-w-md">
        เพื่อค้นหาและเพิ่มข้อมูลบุคลากร
        กรุณากรอกรหัสประจำตัวบุคลากรในช่องค้นหาด้านบน
      </p>

      {/* Example section */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">ตัวอย่างรหัสบุคลากร:</p>
        <code className="px-2 py-1 bg-gray-100 rounded text-orange-600">
          267013, 268010
        </code>
      </div>
    </div>
  );
}

export default InitialSearchState;
