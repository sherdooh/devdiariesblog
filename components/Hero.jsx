'use client';
import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
    return (
    <div className='text-center mb-20'>
      <Header />
      {/* Main Heading */}
      <h1 className='text-4xl sm:text-6xl font-extrabold text-[#33254f]'>
        Explore Our Latest Blogs
      </h1>
      
      <p className='mt-6 max-w-[740px] mx-auto text-base sm:text-lg text-[#33254f] leading-relaxed font-semibold'>
        Stay up-to-date with the latest trends, tips, and insights from industry experts. Read articles on web development, design, and much more.
      </p>
    </div>
    
  );
};

export default Hero;
