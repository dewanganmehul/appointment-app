import React from 'react'
import { assets } from '../assets/assets (2)'

const Header = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      
      {/* ---------- Left side ---------- */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
          Book appointment <br /> 
          <span className="text-blue-600">With trusted Doctors</span>
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img 
            src={assets.group_profiles} 
            alt="group_profiles" 
            className="w-32 md:w-40" 
          />
          <p className="text-gray-600 text-base md:text-lg">
            Simply browse through our extensive list of trusted doctors, <br /> 
            schedule your appointment hassle-free.
          </p>
        </div>

        <a 
          href="#"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-4" />
        </a>
      </div>

      {/* ---------- Right side ---------- */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img 
          src={assets.header_img} 
          alt="header_img" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-lg" 
        />
      </div>
    </div>
  )
}

export default Header
