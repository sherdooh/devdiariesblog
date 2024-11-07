import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Sidebar = () => {

    
  return (
   
    <div className='flex flex-col bg-slate-100 min-h-screen'>
      <div className='px-4 sm:px-12 py-4 border-b border-black'>
       
      </div>

      <div className='w-full sm:w-60 py-6 px-6 border-r border-black'>
        <div className='space-y-6'>
         
         
          <Link href='/admin/AddProduct' className='flex items-center gap-3 px-4 py-3 border border-black rounded-md bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-slate-50'>
            <Image src={assets.add_icon} alt='Add Blogs' width={28} />
            <p className='font-medium'>Add Blogs</p>
          </Link>

          

          <Link href='/admin/BlogList' className='flex items-center gap-3 px-4 py-3 border border-black rounded-md bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-slate-50'>
            <Image src={assets.blog_icon} alt='Blog List' width={28} />
            <p className='font-medium'>Blog Lists</p>
          </Link>

          {/* <Link href='/admin/UpdateBlog' className='flex items-center gap-3 px-4 py-3 border border-black rounded-md bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-slate-50'>
            <Image src={assets.blog_icon} alt='Blog List' width={28} />
            <p className='font-medium'>Update Blog</p>
          </Link> */}

          

          <Link href='/admin/Subscription' className='flex items-center gap-3 px-4 py-3 border border-black rounded-md bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-slate-50'>
            <Image src={assets.email_icon} alt='Subscriptions' width={28} />
            <p className='font-medium'>Subscriptions</p>
          </Link>


          <Link href='/admin/Contacts' className='flex items-center gap-3 px-4 py-3 border border-black rounded-md bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-slate-50'>
            <Image src={assets.blog_icon} alt='contacts' width={28} />
            <p className='font-medium'>Messages</p>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
