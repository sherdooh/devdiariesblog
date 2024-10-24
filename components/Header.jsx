import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="py-10 px-6 md:px-16 lg:px-32">
  {/* Logo and Navigation Section */}
  <div className="flex justify-between items-center">
    {/* Logo */}
    <Link href="/">
      <Image 
        src={assets.logo_dev_transparent} 
        width={180} 
        alt="Logo" 
        className="w-[130px] sm:w-auto" 
      />
    </Link>
    
    
    <div className="flex items-center gap-6 font-bold">
      <Link href="##" className='text-lg text-[#33254f]'>
        About
      </Link>
      <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black">
        Get Started
        <Image src={assets.arrow} alt="Arrow" />
      </button>
    </div>
  </div>
</div>

  );
};

export default Header;
