'use client';
import React from 'react';
import Header from './Header';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  return (
    <div className="text-center mb-2">
      <Header />

 
      <h1 className="text-4xl sm:text-6xl font-extrabold text-[#33254f]">
        Explore Our Latest Blogs
      </h1>


      <p className="mt-6 max-w-[740px] mx-auto text-base sm:text-lg text-[#33254f] leading-relaxed font-semibold">
        Stay up-to-date with the latest trends, tips, and insights from industry experts. Read articles on web development, design, and much more.
      </p>

    
      <div className="mt-8">
        <Link href="#cta-section">
          <button className="inline-flex items-center px-6 py-3 text-lg font-medium  text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
