import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const AdminHeader = () => {
  return (
    <div className='py-10 px-6 md:px-16 lg:px-32'>
      
      <div className='flex justify-between items-center'>
        
        <Link href='/'>
          <Image src={assets.logo_dev_transparent} width={130} alt='devdiaries' className='w-[130px] sm:w-auto' />
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
