import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo and Name */}
          <Link href={'/'} className="flex items-center mb-4 sm:mb-0 space-x-3">
            <Image src={assets.logo_dev_light} alt="Logo" width={40} height={40} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DevDiaries</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright and Social Media Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>© 2023 <a href="/" className="hover:underline">DevDiaries™</a>. All Rights Reserved.</span>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.facebook_icon} alt="Facebook" width={45} height={45} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.twitter_icon} alt="Twitter" width={45} height={45} />
            </a>
            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Plus" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.googleplus_icon} alt="Google Plus" width={45} height={45} />
            </a>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
