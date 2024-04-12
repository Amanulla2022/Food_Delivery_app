import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "../../images/food_logo.png";
const Footer = () => {
  return (
    <footer className="  py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around md:gap-4 gap-10">
        <div className="">
          <img src={logo} alt="Footer Logo" className="h-24 w-72 " />
          <p>We Provide Best Food with diffrent catogeries...</p>

          <div className="flex md:flex-row flex-col gap-4 mt-4">
            <input
              type="text"
              className="border-2 h-12"
              placeholder="We are open for Feedback..."
            />
            <button className="font-bold uppercase underline text-sm text-purple-600 bg-green-300 hover:bg-white px-4 py-2 rounded-2xl">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col  space-y-4 md:space-y-0 md:space-x-4 md:items-center mb-4 gap-4">
          <h2 className="text-2xl font-semibold underline">Social Icons</h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="cursor-pointer hover:text-green-500 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-green-500 text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-green-500 text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-green-500 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-green-500 text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <h2 className="text-2xl font-semibold underline">
            Contact Information
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:amanmulla167@gmail.com"
              className="flex items-center hover:text-green-500"
            >
              <FaEnvelope className="mr-2" />
              amanmulla167@gmail.com
            </a>
            <a
              href="tel:+9590397339"
              className="flex items-center hover:text-green-500"
            >
              <FaPhone className="mr-2 " />
              +91 9590397339
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-6">
        <span>&copy; {new Date().getFullYear()}</span>
        <span>
          {" "}
          <a href="https://github.com/Amanulla2022" target="_blank">
            Amanulla
          </a>
        </span>
        <span> Indian Food App. All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
