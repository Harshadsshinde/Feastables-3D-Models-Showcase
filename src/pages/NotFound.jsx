import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#33C7FF] text-black">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page Not Found.</p>
      <Link to="/" className="mt-4 px-6 py-3 bg-blue-500 text-white font-bold rounded-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
