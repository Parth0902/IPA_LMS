import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useApi } from '../hooks/useApi';

const SignUp = () => {
  const apiService = useApi();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Name, setName] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.warn('Please enter a valid email');
      return false;
    }

    if (Name.length === 0) {
      toast.warn('Name is can not be empty');
      return false;
    }
    if (password.length < 6) {
      toast.warn('Password must be at least 6 characters');
      return false;
    }

    if (password !== confirmPassword) {
      toast.warn('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) return;

    const res = await apiService({
      method: 'POST',
      endpoint: '/signup',
      data: { name: Name, email, password },
    });

    setLoading(false);
    if (res) {
      toast.success('Signup successful! Please login.');
      navigate('/login');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 bg-slate-200">
        <div className="w-full max-w-md px-6 py-10 bg-white shadow-lg rounded-lg">
          <div className="mb-6 text-center">
            <div className="text-2xl font-bold mb-4 flex flex-col items-center gap-2">
              <img alt='logo' src='https://IPA-Images.b-cdn.net/Assets/logo.png' className='h-[20vh]' />
              <h1>IPA EDUCATION ACADEMY</h1>
            </div>
            <p className="text-gray-700 text-sm">Sign Up to IPA Education Academy</p>
            <p className="text-gray-500 text-xs">The faster you sign up, the faster we get to work.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="Name"
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>
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
            <div>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-md transition ${loading ? 'bg-gray-700 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
            >
              {isLoading && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              )}
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-medium hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
      {/* Right panel - image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-black relative">
        <img
          src="https://IPA-Images.b-cdn.net/Assets/login.webp"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">Welcome Back!</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
