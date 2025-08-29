import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const foundDoctor = doctors.find(doc => doc._id === docId);
    setDocInfo(foundDoctor);
    window.scrollTo(0, 0); // Scroll to top on doctor change
  }, [docId, doctors]);

  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const timeSlots = [
    '10:30 am', '11:30 am', '12:00 pm', '12:30 pm',
    '01:00 pm', '01:30 pm', '02:00 pm'
  ];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked with Dr. ${docInfo.name} on ${selectedDate.toDateString()} at ${selectedTime}`);
    } else {
      alert('Please select a date and time slot.');
    }
  };

  if (!docInfo) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <p>Loading doctor information...</p>
      </div>
    );
  }

  const availableDates = getDates();
  const relatedDoctors = doctors.filter(d =>
    d.speciality === docInfo.speciality && d._id !== docInfo._id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-12 lg:p-16 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Doctor Profile Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 mb-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <img
            src={docInfo.image}
            alt={`Dr. ${docInfo.name}`}
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-600 flex-shrink-0"
          />
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{docInfo.name}</h1>
              <img src={assets.verified_icon} alt="Verified icon" className="w-6 h-6" />
            </div>
            <p className="text-blue-400 text-xl mb-2">{docInfo.speciality}</p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 mb-4">
              <p className="text-lg font-medium">{docInfo.degree}</p>
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                {docInfo.experience}
              </span>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">About</h3>
                <img src={assets.info_icon} alt="Info icon" className="w-5 h-5" />
              </div>
              <p className="text-gray-300 leading-relaxed">{docInfo.about || "A highly experienced and compassionate professional dedicated to providing the best patient care. Known for expertise in their field and a commitment to health and wellness."}</p>
            </div>
          </div>
        </div>

        {/* Booking Slots Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-white">Booking slots</h2>
          
          {/* Date Selection */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            {availableDates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`w-24 h-24 rounded-full flex flex-col items-center justify-center text-lg font-semibold transition-colors
                  ${selectedDate && selectedDate.toDateString() === date.toDateString()
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                <span className="text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</span>
                <span className="text-2xl font-bold">{date.getDate()}</span>
              </button>
            ))}
          </div>

          {/* Time Slot Selection */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(slot)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors
                  ${selectedTime === slot
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            onClick={handleBookAppointment}
            className="w-full px-6 py-4 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-colors text-xl"
          >
            Book an appointment
          </button>
        </div>

        {/* Related Doctors Section */}
        {relatedDoctors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Related Doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedDoctors.map(relatedDoctor => (
                <div
                  key={relatedDoctor._id}
                  onClick={() => navigate(`/appointment/${relatedDoctor._id}`)}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <img
                    src={relatedDoctor.image || assets.default_doctor_img}
                    alt={`Dr. ${relatedDoctor.name}`}
                    className="w-24 h-24 object-cover rounded-full border-2 border-blue-600 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white text-center">{relatedDoctor.name}</h3>
                  <p className="text-gray-400 text-sm text-center">{relatedDoctor.speciality}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;