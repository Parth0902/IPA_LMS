import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //  code for handle submission 
    console.log('Form submitted:', {
      name,
      email,
      phoneNumber,
      projectDescription,
    });
  };

  return (
    <div className='mt-24 flex flex-row'>

      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-6">Let Talk</h1>
        {/* Replace image */}
        <img src="your-image.jpg" alt="Contact Us" className="rounded-lg shadow-lg" />
      </div>

      <div className="w-1/2 mx-auto p-8">
        <div className="mx-auto">
          <form onSubmit={handleSubmit} className="">

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="projectDescription" className="block text-gray-700 font-bold mb-2">
                Describe your project
              </label>
              <textarea
                id="projectDescription"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
