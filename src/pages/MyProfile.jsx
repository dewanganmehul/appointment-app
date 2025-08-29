import React, { useState } from 'react';

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    gender: 'Female',
    age: 34,
    email: 'jane.doe@example.com',
  });

  const [isEditing, setIsEditing] = useState(false);

  const mockAppointmentHistory = [
    { date: 'Oct 26, 2024', doctor: 'Dr. John Smith', speciality: 'General Physician' },
    { date: 'Aug 15, 2024', doctor: 'Dr. Sarah Patel', speciality: 'Dermatologist' },
    { date: 'Jul 20, 2024', doctor: 'Dr. Emily Chen', speciality: 'Pediatrician' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Profile Card */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              >
                Edit
              </button>
            ) : (
              <button 
                onClick={handleSave}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-colors"
              >
                Save
              </button>
            )}
          </div>
          
          <div className="space-y-6">
            {isEditing ? (
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-gray-400 font-medium mb-1">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-gray-400 font-medium mb-1">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-xl font-semibold">{profile.name}</p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-gray-400 text-sm">Gender</p>
                    <p className="text-xl font-semibold">{profile.gender}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Age</p>
                    <p className="text-xl font-semibold">{profile.age}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-xl font-semibold">{profile.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Appointment History</h2>
          <div className="space-y-4">
            {mockAppointmentHistory.map((appointment, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center sm:text-left mb-2 sm:mb-0">
                  <p className="text-lg font-semibold">{appointment.doctor}</p>
                  <p className="text-gray-400 text-sm">{appointment.speciality}</p>
                </div>
                <p className="text-gray-300 font-medium">{appointment.date}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MyProfile;
