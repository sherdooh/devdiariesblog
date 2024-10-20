'use client';

import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';


const page = () => { 

  return (
    <>
      <form className='pt-10 px-6 sm:pt-12 sm:px-16 bg-white max-w-2xl mx-auto rounded-lg shadow-md border border-gray-200'>
        {/* Upload Thumbnail Section */}
        <label htmlFor='image' className='block text-xl font-semibold mb-3 cursor-pointer'>
          Upload Thumbnail
        </label>
        <div className='flex items-center justify-center p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition'>
          <label htmlFor='image' className='flex flex-col items-center justify-center cursor-pointer'>
            <Image 
              className='mt-2'

              src={assets.upload_area}

              width={140}
              height={70}
              priority
              alt='Thumbnail Upload'
            />
            <p className='mt-2 text-sm text-gray-600'></p>
          </label>
        </div>
        <input
        
          type='file'
          id='image'
          hidden
          required
        />

        {/* Blog Title */}
        <label htmlFor='title' className='block text-xl font-semibold mt-6 mb-2'>
          Blog Title
        </label>
        <input name='title'  
          className='w-full sm:w-[500px] mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition'
          type='text'
          placeholder='Type here'
          maxLength= '20'
          required
        />

        {/* Blog Description */}
        <label htmlFor='description' className='block text-xl font-semibold mt-6 mb-2'>
          Blog Description
        </label>
        <textarea name='description' 
          className='w-full sm:w-[500px] mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition'
          type='text'
          maxLength= '120'
          placeholder='Write content here..'
          rows={8}
          required
        />

        {/* Blog Category */}
        <label htmlFor='category' className='block text-xl font-semibold mt-6 mb-2'>
          Blog Category
        </label>
        <select
          name='category' 
          className='w-40 mt-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition'
          required
        >
          <option value='Programming'>Programming</option>
          <option value='AI'>AI&ML</option>
          <option value='Cybersecurity'>Cybersecurity</option>
          <option value='Blockchain'>Blockchain</option>
          <option value='Data'>Data</option>
          <option value='Cloud'>Cloud&DevOps</option>
        </select>

        {/* Submit Button */}
        <button
          type='submit'
          className='mt-8 w-40 h-12 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-yellow-300 transition-all duration-300'
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default page;
