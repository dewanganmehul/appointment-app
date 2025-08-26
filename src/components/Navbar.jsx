import React, { useState } from 'react'
import { assets } from '../assets/assets (2)'  // ✅ avoid spaces in file names
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 shadow-md bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 relative">
      
      {/* Logo */}
      <img 
        className="w-40 cursor-pointer" 
        src={assets.logo} 
        alt="logo" 
        onClick={() => navigate('/')} 
      />
      
      {/* Nav Links (Desktop) */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
              ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
              : "hover:text-blue-600 transition"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/doctors" 
            className={({ isActive }) => 
              isActive 
              ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
              : "hover:text-blue-600 transition"
            }
          >
            ALL DOCTORS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
              ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
              : "hover:text-blue-600 transition"
            }
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
              ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
              : "hover:text-blue-600 transition"
            }
          >
            ABOUT
          </NavLink>
        </li>
      </ul>

      {/* Right Section */}
      <div className="relative">
        {token ? (
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => setShowMenu(!showMenu)}
          >
            <img 
              className="w-9 h-9 rounded-full border-2 border-gray-300" 
              src={assets.profile_pic} 
              alt="profile_pic" 
            />
            <img 
              src={assets.dropdown_icon} 
              alt="dropdown" 
              className={`w-4 transition-transform ${showMenu ? "rotate-180" : ""}`} 
            />

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-20">
                <p 
                  onClick={() => {navigate('/my-profile'); setShowMenu(false)}} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </p>
                <p 
                  onClick={() => {navigate('/my-appointments'); setShowMenu(false)}} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Appointments
                </p>
                <p 
                  onClick={() => {setToken(false); setShowMenu(false)}} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
