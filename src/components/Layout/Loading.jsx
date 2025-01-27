function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white shadow-sm sm:p-12 rounded-xl">
      <div className="flex items-center justify-center w-24 h-24 mb-4 sm:w-32 sm:h-32">
        <div className="w-16 h-16 border-t-2 border-b-2 border-orange-400 rounded-full animate-spin"></div>
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl">
        กำลังค้นหาข้อมูล
      </h3>
      <p className="text-center text-gray-500">กรุณารอสักครู่...</p>
    </div>
  );
}

export default Loading;
