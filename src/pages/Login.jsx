import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
    if (isLogin) {
      if (!formData.email || !formData.password) {
        alert('Please enter both email and password.');
        return;
      }
      alert('Login successful!');
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        alert('Please fill out all fields.');
        return;
      }
      alert('Account created successfully!');
    }
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {isLogin ? 'Welcome Back!' : 'Create an Account'}
        </h1>
        <p className="text-gray-400 text-center mb-8">
          {isLogin ? 'Log in to book your appointments.' : 'Sign up to get started with our services.'}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            {isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-500 font-medium hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;