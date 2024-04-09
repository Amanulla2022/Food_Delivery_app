import React, { useState, useEffect } from "react";
import logo from "../../images/food_logo.png";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiViewList } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Firebase";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className=" ">
      <div className="container mx-auto flex  flex-row justify-between items-center">
        <div className="flex items-center justify-start mb-4 md:mb-0">
          <div className="flex gap-6">
            <button
              className="cursor-pointer md:hidden text-green-600"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <GrClose className="text-3xl" />
              ) : (
                <HiViewList className="text-3xl" />
              )}
            </button>
            <img
              className="md:h-20 h-auto w-40 mr-4"
              src={logo}
              alt="Food App Logo"
            />
          </div>

          <nav className="absolute top-24 left-0 w-full bg-gray-100 md:relative md:flex md:items-center md:bg-transparent md:top-auto md:left-auto">
            <hr className="border-yellow-300 border-t md:hidden" />
            <ul
              className={`md:flex ${
                isOpen ? "flex" : "hidden"
              } flex-col ml-4 md:flex-row space-y-2 md:space-y-0 md:space-x-6`}
            >
              <Link to="/" className="list-item">
                Home
              </Link>
              <Link to="/categories" className="list-item">
                Categories
              </Link>
              <li className="list-item">About</li>
              <li className="list-item">Contact</li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          {user ? (
            <>
              <span className="text-white mr-4">Login successful</span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  handleLogout();
                  setUser(null);
                  alert("Logout Successfully!!!");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              Login
              <AiOutlineArrowRight className="ml-2 " />
            </Link>
          )}
          <FaOpencart className="text-xl ml-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
