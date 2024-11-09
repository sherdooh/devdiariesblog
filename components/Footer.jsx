import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        <div className="sm:flex sm:items-center sm:justify-between">
          
          
          <Link href={'/'} className="flex items-center mb-4 sm:mb-0 space-x-3">
            <Image src={assets.logo_dev_light} alt="Logo" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DevDiaries</span>
          </Link>

     
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/About" className="hover:underline mr-4 md:mr-6">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline mr-4 md:mr-6">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline mr-4 md:mr-6">Licensing</Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>


        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>© 2023 <a href="/" className="hover:underline">DevDiaries™</a>. All Rights Reserved.</span>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://wa.me/0700581448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp: +1234567890" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.whatsapp} alt="WhatsApp" width="40" height="40" />
            </a>

            <a href="https://www.linkedin.com/in/shadrack-kiplangat-4282b9109/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: yourprofile" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.linkedin} alt="LinkedIn" width="40" height="40" />
            </a>


            <a href="mailto:sherkiplah@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail: sherkiplah@gmail.com" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.gmail} alt="Gmail" width="40" height="40" />
            </a>


            <a href="https://www.facebook.com/cherdrerk.kiplangat" target="_blank" rel="noopener noreferrer" aria-label="Facebook: yourusername" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.facebook} alt="Facebook" width="40" height="40" />
            </a>


            <a href="https://github.com/sherdooh" target="_blank" rel="noopener noreferrer" aria-label="Gmail: sherkiplah@gmail.com" className="hover:scale-110 transition-transform duration-200">
              <Image src={assets.github} alt="Github" width="40" height="40" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
