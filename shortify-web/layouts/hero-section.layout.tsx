import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center mt-16 overflow-x-hidden">
      <div className="flex justify-between items-center w-11/12 max-w-6xl">
        <div className="max-w-md w-2/3">
          <h1 className="font-bold text-6xl mb-2 leading-tight">
            More than just shorter links
          </h1>
          <p className="text-gray-400 mb-8 max-w-sm">
            Build your brand's recognition and get detailed insights on how
            links are performing
          </p>
          <button className="px-6 py-2 bg-cyan text-white rounded-full outline-none focus:outline-none transition-opacity duration-300 hover:opacity-70 ease-in-out font-bold">Get Started</button>
        </div>
        <div className="relative">
          <img
            src="/images/illustration-working.svg"
            alt="Man working illustration"
            className="relative -right-64"
            width={1200}
          />
        </div>
      </div>
    </div>
  );
};
