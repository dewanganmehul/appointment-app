import React from 'react';
import { assets } from '../assets/assets (2)';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* About Us Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 mb-4">
            About Our Clinic
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your health and well-being are our top priority. We connect you with trusted healthcare professionals for seamless and accessible care.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="md:order-2">
            <img 
              src={assets.about_image} 
              alt="Our Mission" 
              className="rounded-xl shadow-2xl" 
            />
          </div>
          <div className="text-center md:text-left md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To revolutionize healthcare accessibility by creating a simple, reliable, and user-friendly platform where patients can find, connect with, and book appointments with top-tier doctors anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-500 text-5xl mb-4">
                <i className="fas fa-user-md"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
              <p className="text-gray-400">
                Access a network of highly qualified and verified doctors from various specialties.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-500 text-5xl mb-4">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Seamless Booking</h3>
              <p className="text-gray-400">
                Book your appointments in just a few clicks with our intuitive and fast platform.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-500 text-5xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-gray-400">
                Your personal and medical information is kept secure with our robust privacy measures.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16 bg-gray-800 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of satisfied patients and take control of your health today.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors text-lg">
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;