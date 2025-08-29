import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { assets } from "../assets/assets"; // Correct path assuming assets (2).js was renamed

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-blue-50 py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Book Appointment <br />
            <span className="text-blue-600">with 100+ Doctors</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg sm:text-xl max-w-xl mx-auto md:mx-0">
            Find trusted doctors and schedule your appointments in just a few clicks.
          </p>
          <button 
            onClick={() => {
              navigate('/login');
              window.scrollTo(0, 0); // Use window.scrollTo for clarity
            }} 
            className="mt-8 px-8 py-4 text-lg bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={assets.appointment_img}
            alt="Book Appointment with Doctors" // More descriptive alt text
            className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;