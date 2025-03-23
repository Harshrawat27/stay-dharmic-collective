
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dharmic-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-serif font-bold text-dharmic-800 mb-6">404</h1>
        <p className="text-xl text-dharmic-600 mb-8">The page you're looking for doesn't exist in our Dharmic journey.</p>
        <a 
          href="/" 
          className="inline-flex px-6 py-3 bg-dharmic-700 text-white rounded-lg font-medium hover:bg-dharmic-800 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
