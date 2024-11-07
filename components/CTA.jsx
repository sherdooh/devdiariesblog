'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CTA = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await axios.post('/api/email', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail('');
      } else {
        toast.error('Error');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div id= "cta-section" className="bg-white rounded-lg dark:bg-gray-800 py-12">
      <div className="relative px-4 py-8 overflow-hidden sm:px-6 sm:py-10 lg:p-12 xl:p-16 max-w-3xl mx-auto text-center rounded-lg shadow-lg">
        {/* Title and Description */}
        <h2 className="text-2xl font-semibold text-black dark:text-white sm:text-3xl">
          Stay Updated with the Latest in Tech
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-base text-gray-500 dark:text-gray-400">
          Subscribe to our newsletter to stay updated with the latest tech news, trends, and tutorials. Get insights directly to your inbox.
        </p>

        {/* Subscribe Form */}
        <form onSubmit={onSubmitHandler} className="mt-6 flex flex-col sm:flex-row justify-center w-full sm:w-3/4 lg:w-2/3 mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
          <div className="flex-1">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              className="w-full py-3 px-4 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200 placeholder-gray-400 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Subscribe
          </button>
        </form>
      </div>

      <ToastContainer theme="dark" position="top-right" autoClose={5000} />
    </div>
  );
};

export default CTA;
