import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await userCredential.user.updateProfile({
        displayName: name,
      });
      navigate("/");
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center ">
      <div className="bg-white p-4 rounded-lg shadow-md z-50 w-full h-full md:h-auto md:w-auto relative">
        <Link
          to="/"
          className="absolute top-2 right-2 bg-none border-none cursor-pointer text-base text-gray-700"
        >
          <GrClose />
        </Link>
        <form
          onSubmit={handleSignUp}
          className="mt-4 border-2 p-4 m-4 flex flex-col justify-center items-center gap-6 max-w-md w-full mx-auto rounded-lg bg-gray-100"
        >
          <h1 className="text-3xl underline text-teal-800 font-semibold">
            Sign Up
          </h1>
          <input
            type="name"
            placeholder="Enter your name"
            className="p-2 border-2  min-w-72 rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email..."
            className="p-2 border-2  min-w-72 rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 border-2  min-w-72 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg p-3 "
          >
            Sign Up
          </button>

          <p>
            already have an account?
            <Link to="/signin" className="text-red-500 ml-1 underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
