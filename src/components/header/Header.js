import React, { useState, useEffect } from "react";
import logo from "../../images/food_logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { HiViewList } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { auth } from "../../firebase/Firebase";
import { useCart } from "./../../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { getTotalItemCount } = useCart();
  const location = useLocation(); // Get current location

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
      <div className="container mx-auto flex  flex-row justify-around items-center">
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
        <div className="flex items-center justify-start mb-4 md:mb-0">
          <nav className="absolute top-24 left-0 w-full bg-gray-100 md:relative md:flex md:items-center md:bg-transparent md:top-auto md:left-auto">
            <hr className="border-yellow-300 border-t md:hidden" />
            <ul
              className={`md:flex ${
                isOpen ? "flex" : "hidden"
              } flex-col ml-4 md:flex-row space-y-2 md:space-y-0 md:space-x-6`}
            >
              <Link
                to="/"
                className={`list-item ${
                  location.pathname === "/" && "text-green-500"
                }`}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className={`list-item  ${
                  location.pathname === "/categories" && "text-green-500"
                }`}
              >
                Categories
              </Link>
              <Link
                to="/order"
                className={`list-item ${
                  location.pathname === "/order" && "text-green-500"
                }`}
              >
                Orders
              </Link>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/cart"
                className="text-green-500 hover:text-green-600  px-4 py-2 rounded-md flex items-center"
              >
                <FaCartShopping className="text-2xl" />
                <sup className="text-purple-500 text-lg">
                  {getTotalItemCount()}
                </sup>
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
