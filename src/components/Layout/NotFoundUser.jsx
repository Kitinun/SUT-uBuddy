import { Search } from "lucide-react";

function NotFoundUser() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white shadow-sm sm:p-12 rounded-xl">
      <div className="flex items-center justify-center w-24 h-24 mb-4 bg-gray-100 rounded-full sm:w-32 sm:h-32">
        <Search className="w-12 h-12 text-gray-400 sm:w-16 sm:h-16" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl">
        ไม่พบข้อมูล
      </h3>
      <p className="text-center text-gray-500">
        กรุณาตรวจสอบรหัสพนักงานและลองค้นหาอีกครั้ง
        <br />
        หรือสอบถามส่วนทรัพยากรบุคคล
      </p>
    </div>
  );
}

export default NotFoundUser;
