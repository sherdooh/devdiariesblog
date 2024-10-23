'use client';
import { assets } from '@/Assets/assets';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/api/blog', {
          params: { id: params.id }
        });
        setData(response.data.blog);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchBlogData();
  }, [params.id]);

  // Ensure the image path starts with "/" if data is defined
  const imagePath = data?.image ? (data.image.startsWith('/') ? data.image : `/${data.image}`) : '';

  return data ? (
    <>
      <Header />
      <div className='text-center my-24'>

        
        
        <h1 className='text-5xl font-extrabold max-w-[700px] mx-auto tracking-tight text-gray-900 mb-6'>{data.title}</h1>

        
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>



      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        {imagePath && (
          <Image className='border-4 border-white' src={imagePath} width={1280} height={720} alt='' />
        )}
        <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}>

        </div>
        
        


        {/* Social Media */}
        <div className="my-24">
          <p className="text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google Plus" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : null;
};

export default Page;
