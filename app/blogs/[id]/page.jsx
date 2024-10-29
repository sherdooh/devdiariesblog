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

  const imagePath = data?.image ? (data.image.startsWith('/') ? data.image : `/${data.image}`) : '';

  return data ? (
    <>
      <Header />
      <div className="text-center mt-16 px-6 md:px-0">
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-[800px] mx-auto tracking-tight text-gray-900 mb-4 md:mb-6 leading-tight">
          {data.title}
        </h1>

        {/* Author Info */}
        <div className="flex flex-col items-center mb-12">
          <Image className="rounded-full border-4 border-gray-200 shadow-lg" src={data.authorImg} width={64} height={64} alt={data.author} />
          <p className="mt-2 text-lg text-gray-600 font-medium">{data.author}</p>
        </div>
        
      </div>

      {/* Blog Content Container with 80% Width */}
      <div className="mx-auto max-w-[80%] lg:max-w-[800px] mb-12 bg-white p-6 rounded-lg shadow-lg">
        {imagePath && (
          <Image className="w-full border-4 border-gray-200 rounded-lg shadow-md mb-6" src={imagePath} width={1280} height={720} alt="" />
        )}
        <div className="blog-content prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        
        {/* Social Media Sharing */}
        <div className="my-12 text-center">
          <p className="text-lg font-semibold text-gray-700 mb-4">Share this article on social media</p>
          <div className="flex justify-center gap-6">
            <Image src={assets.facebook_icon} width={40} height={40} alt="Facebook" className="hover:scale-110 transition-transform duration-200" />
            <Image src={assets.twitter_icon} width={40} height={40} alt="Twitter" className="hover:scale-110 transition-transform duration-200" />
            <Image src={assets.googleplus_icon} width={40} height={40} alt="Google Plus" className="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : null;
};

export default Page;
