
export default function Spinner() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent mb-4"></div>
          <p className="text-blue-500 text-lg">Loading...</p>
        </div>
      </div>
    );
  }
  