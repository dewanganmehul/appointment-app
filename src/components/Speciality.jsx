import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className="my-16 px-6 md:px-12 lg:px-20">
      
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Find By <span className="text-blue-600">Speciality</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg">
          Simply browse through our extensive list of trusted doctors, <br />
          and schedule your appointment hassle-free.
        </p>
      </div>

      {/* Horizontal Scroll Specialities */}
      <div className="flex gap-30 overflow-x-auto scrollbar-hide py-10">
        {specialityData.map((item, index) => (
          <Link 
            key={index} 
            to={`/doctors/${item.speciality}`} 
            className="flex flex-col items-center min-w-[120px] group"
          >
            <div className="w-50 h-50 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition">
              <img 
                src={item.image} 
                alt={item.speciality} 
                className="w-50 h-50 object-contain"
              />
            </div>
            <p className="mt-3 text-gray-700 font-medium text-sm md:text-base text-center">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Speciality
