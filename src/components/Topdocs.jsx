import React from "react";
import { doctors } from "../assets/assets (2)";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Topdocs = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-8 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Top Doctors to Book
        </h2>
        <p className="text-gray-500 mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 bg-white"
          >
            <img
              className="w-full h-40 object-cover bg-blue-50"
              src={item.image}
              alt={item.name}
            />

            <div className="p-4">
              {/* Availability */}
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-green-600 font-medium">Available</span>
              </div>

              {/* Doctor Info */}
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-8">
        <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
          View More
        </button>
      </div>
    </div>
  );
};

export default Topdocs;
