import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from '../assets/assets';

const DoctorsList = () => {
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();
    const { speciality } = useParams();

    const [activeSpeciality, setActiveSpeciality] = useState(speciality || 'All');

    useEffect(() => {
        if (speciality) {
            setActiveSpeciality(speciality);
        }
    }, [speciality]);

    const handleSpecialityClick = (newSpeciality) => {
        setActiveSpeciality(newSpeciality);
        if (newSpeciality === 'All') {
            navigate('/doctors');
        } else {
            navigate(`/doctors/${newSpeciality}`);
        }
    };

    const specialitiesList = [
        'All',
        'General physician',
        'Gynecologist',
        'Dermatologist',
        'Pediatricians',
        'Neurologist',
        'Gastroenterologist',
    ];

    const filteredDoctors = doctors.filter(doctor =>
        activeSpeciality === 'All' || doctor.speciality === activeSpeciality
    );

    return (
        <div className="min-h-screen bg-gray-900 p-6 md:p-12 lg:p-16 text-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-10 text-center">Browse Our Doctors by Specialty</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Speciality Filters */}
                    <div className="w-full lg:w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start">
                        <h3 className="text-2xl font-bold mb-4">Specialities</h3>
                        <div className="w-full space-y-3">
                            {specialitiesList.map((spec) => (
                                <button
                                    key={spec}
                                    onClick={() => handleSpecialityClick(spec)}
                                    className={`w-full text-left py-3 px-4 rounded-md font-medium transition-colors duration-200
                                        ${activeSpeciality === spec
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                                        }`}
                                >
                                    {spec === 'All' ? 'All Doctors' : spec}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Doctor Cards Grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => navigate(`/appointment/${item._id}`)}
                                    className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 relative"
                                >
                                    <img
                                        src={item.image || assets.default_doctor_img}
                                        alt={item.name}
                                        className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                                    />
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                                        <p className="text-sm text-gray-400">{item.speciality}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-400 text-lg py-12">
                                No doctors found for the selected specialty.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsList;