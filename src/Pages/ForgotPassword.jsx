import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useApi } from '../hooks/useApi';

const ForgotPassword = () => {
  const apiService = useApi();
  const [email, setEmail] = useState('');

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warn('Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const res = await apiService({
      method: 'POST',
      endpoint: '/forgot-password',
      data: { email },
    });

    if (res) {
      toast.success(res.message || 'Password reset link sent to your email!');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left panel - form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-200">
        <div className="w-full max-w-md px-6 py-10 bg-white shadow-lg rounded-lg">
          {/* Branding */}
          <div className="mb-12 text-center">
            <div className="text-2xl font-bold mb-5 flex flex-col justify-center items-center gap-2">
              <img alt="logo" src="https://IPA-Images.b-cdn.net/Assets/logo.png" className="h-[20vh]" />
              <h1>IPA EDUCATION ACADEMY</h1>
            </div>
            <p className="text-gray-700 text-sm">Reset Your Password</p>
            <p className="text-gray-500 text-xs">Enter your email to receive a reset link.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
              Remember your password?{' '}
              <Link to="/login" className="text-black font-medium hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right panel - image */}
      <div className="hidden md:flex w-1/2 h-full">
        <div className="relative w-full h-full">
          <img
            src="https://IPA-Images.b-cdn.net/Assets/login.webp"
            alt="Welcome"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center">Welcome Back!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
