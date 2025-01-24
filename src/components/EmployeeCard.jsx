import React from "react";

function EmployeeCard({ employee }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col items-center mb-4">
        <img
          src={employee.image}
          alt={employee.name}
          className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mb-4"
        />
        <h3 className="text-base sm:text-lg font-medium text-center">
          {employee.name}
        </h3>
      </div>
      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-3 gap-2">
          <span className="text-gray-500">รหัสพนักงาน</span>
          <span className="col-span-2">{employee.id}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="text-gray-500">ตำแหน่ง</span>
          <span className="col-span-2">{employee.position}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="text-gray-500">สังกัด</span>
          <span className="col-span-2">{employee.department}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="text-gray-500">งาน</span>
          <span className="col-span-2">{employee.work}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
