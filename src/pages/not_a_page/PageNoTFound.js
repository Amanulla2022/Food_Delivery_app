import React from "react";
import { Link } from "react-router-dom";
import { FaCircleChevronLeft } from "react-icons/fa6";

const PageNoTFound = () => {
  return (
    <div className=" bg-gray-100 h-96 flex flex-col justify-center items-center gap-4">
      <h1 className="header-2">Page Not Found</h1>
      <Link
        to="/"
        className=" mt-8 flex align-middle justify-center items-center gap-4 bg-purple-300 text-xl text-green-700 hover:bg-white font-bold p-2"
      >
        <FaCircleChevronLeft /> Go to Home Page
      </Link>
    </div>
  );
};

export default PageNoTFound;
