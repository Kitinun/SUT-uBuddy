function EmployeeCard({ employee }) {
  console.log("employee", employee);
  //567383

  return (
    <div className="p-6 bg-white shadow-sm rounded-xl">
      <div className="flex flex-col items-center mb-4">
        <img
          src={
            employee.image ||
            `${import.meta.env.BASE_URL}images/NotFoundImage.jpg`
          }
          alt="Image User"
          className="mb-4 rounded-full w-28 h-28 sm:w-28 sm:h-28"
        />
        <h3 className="text-base font-medium text-center sm:text-lg">
          {employee?.firstNameTh} {employee?.lastNameTh}
        </h3>
      </div>
      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-3 gap-2">
          <span className="text-gray-500">รหัสพนักงาน</span>
          <span className="col-span-2">{employee?.staffCode}</span>
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
          <span className="col-span-2">{employee.subDepartment}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
