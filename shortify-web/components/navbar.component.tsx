import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center mt-6">
      <div className="flex justify-between w-11/12 max-w-6xl">
        <div className="flex items-center">
          <a
            href="/"
            className="font-bold text-2xl mx-4 hover:text-gray-500 transition-colors duration-500 ease-in-out"
          >
            Shortify
          </a>
          <a
            href="#features"
            className="mx-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 ease-in"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="mx-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 ease-in"
          >
            Pricing
          </a>
          <a
            href="#resources"
            className="mx-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 ease-in"
          >
            Resources
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="mx-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 ease-in"
          >
            Login
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="mx-4 px-4 py-1.5 bg-cyan text-white  rounded-full transition-opacity hover:opacity-70 duration-300 ease-in-out"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};
