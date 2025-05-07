import React, { useState } from 'react';
import contactUs from '../../Assets/contact.png';
import { useApi } from '../../hooks/useApi';
import { toast } from 'react-toastify';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const apiService = useApi();

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = apiService({
      method: 'POST',
      endpoint: '/contact',
      data: {
        name,
        email,
        phone : phoneNumber,
        message : projectDescription,
      },
    });
    toast.success(response.message);
    setName('');
    setEmail('');
    setPhoneNumber('');
    setProjectDescription('');
  };

  return (
    <div className="mt-20 px-4 md:px-8 max-w-6xl mx-auto py-10">
      <div className="bg-lime-50 rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Image with Top-Left Text */}
        <div className="relative w-full md:w-5/12 h-64 md:h-auto">
          <img
            src={contactUs}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-4 rounded-md">
            <h1 className="text-white text-xl md:text-2xl font-semibold leading-snug">
              Big ideas start
              <br />
              with a simple hello!
            </h1>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-6 md:p-8 bg-white">
          <h1 className='font-semibold text-2xl pb-8'> Contact Us </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Describe your project
              </label>
              <textarea
                id="projectDescription"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
