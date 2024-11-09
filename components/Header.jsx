import '../app/globals.css';
import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 px-6 md:px-16 lg:px-32 shadow-md mb-20">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src={assets.logo_dev_transparent}
            width={180}
            alt="Logo"
            className="w-[130px] sm:w-auto hover:opacity-90 transition-opacity duration-200"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 font-bold text-gray-800">
          <Link href="/About" target="_blank" className="hover:text-blue-600 transition-colors duration-200 ">
            About
          </Link>

          <Link href="/Contact" target="_blank" className="hover:text-blue-600 transition-colors duration-200 ">
            Contact Us
          </Link>

          <Link href="/login">
            <button className="flex items-center gap-2 font-medium py-1 px-4 sm:py-3 sm:px-6 border border-black rounded-md hover:bg-gray-100 transition duration-200">
              Admin Login
              <Image
                src={assets.arrow}
                alt="Arrow"
                width={12}
                height="auto"
                style={{ height: 'auto' }}
              />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
