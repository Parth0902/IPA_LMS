import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useApi } from '../hooks/useApi';

const ForgotPassword = () => {
      const apiService =useApi()
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
                data: { email},
            });
            console.log(res);
            if (res) {
              toast.success(res.message || 'Password reset link sent to your email!');
            }
          };

  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
           <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
               <input
                 id="email"
                 type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                 required
               />
             </div>
           
             <div className="text-start mt-4 text-gray-500 px-1">
                Enter your email to reset your password.{' '}
             </div>
   
             <button
               type="submit"
               className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition duration-200"
             >
               Submit
             </button>
   
             <div className="text-start mt-4 text-gray-500 px-1">
                Go back to login?{' '}
               <Link to="/login" className="text-blue-600 hover:underline">
                Login
               </Link>
             </div>
           </form>
         </div>
    </div>
  )
}

export default ForgotPassword