import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const displayName = user.displayName || user.email;
      alert(`Login successful as ${displayName}`);
      navigate("/");
    } catch (error) {
      console.error("Sign in error:", error);
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
          onSubmit={handleSignIn}
          className="mt-4 border-2 p-4 m-4 flex flex-col justify-center items-center gap-6 max-w-md w-full mx-auto rounded-lg bg-gray-100"
        >
          <h1 className="text-3xl underline text-teal-800 font-semibold">
            Sign In
          </h1>

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
            Sign In
          </button>

          <p>
            Don't have an account?
            <Link to="/signup" className="text-red-500 ml-1 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
