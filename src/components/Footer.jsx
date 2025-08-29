import React from "react";
import { assets } from "../assets/assets (2)";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Company Info */}
        <div className="flex flex-col items-start space-y-4">
          <img src={assets.logo} alt="Company Logo" className="h-10" />
          <p className="text-gray-400 text-sm">
            Your trusted partner for health and wellness. Book appointments with ease and connect with top doctors.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Find a Doctor</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal & Help */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-white mb-4">Legal & Help</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Health Ave, Wellness City, 12345</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>info@yourcompany.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;