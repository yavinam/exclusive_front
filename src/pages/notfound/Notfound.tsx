import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-6">
      <h1 className="text-8xl font-poppins text-black">404 Not Found</h1>
      <p className="text-2xl text-gray-600 mt-4">Your visited page not found. You may go home page.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-4 text-2xl bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
      >
        Back to home page
      </button>
    </div>
  );
};

export default NotFound;
