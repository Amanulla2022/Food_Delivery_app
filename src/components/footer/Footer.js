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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="">
          <img src={logo} alt="Footer Logo" className="h-20 " />
          <p>We Provide Best Food with diffrent catogeries</p>
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
              className="flex items-center"
            >
              <FaEnvelope className="mr-2" />
              amanmulla167@gmail.com
            </a>
            <a href="tel:+9590397339" className="flex items-center">
              <FaPhone className="mr-2" />
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
