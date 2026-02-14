import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <h1 className="text-4xl font-bold mb-4">
        Product Management System
      </h1>

      <p className="mb-8 text-lg text-center max-w-md">
        Manage your products easily with secure login, real-time API integration,
        and a modern dashboard.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Get Started 🚀
      </button>

    </div>
  );
};

export default LandingPage;
