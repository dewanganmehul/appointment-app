import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-500 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400">
            We're here to help you. Send us a message or find our details below.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <i className="fas fa-map-marker-alt text-3xl text-blue-500 mb-2"></i>
              <p className="text-lg font-medium">Address</p>
              <p className="text-sm text-gray-400">123 Health Blvd, Wellness City</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-phone-alt text-3xl text-blue-500 mb-2"></i>
              <p className="text-lg font-medium">Phone</p>
              <p className="text-sm text-gray-400">+1 (123) 456-7890</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-envelope text-3xl text-blue-500 mb-2"></i>
              <p className="text-lg font-medium">Email</p>
              <p className="text-sm text-gray-400">info@prescripto.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500 mb-6"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500 mb-8"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;