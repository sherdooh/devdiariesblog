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
        <h1 className='text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        {imagePath && (
          <Image className='border-4 border-white' src={imagePath} width={1280} height={720} alt='' />
        )}
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        {/* Steps */}
        {[1, 2, 3].map(step => (
          <React.Fragment key={step}>
            <h3 className="my-5 text-[18px] font-semibold">Step{step}: Self Lorem ipsum dolor sit.</h3>
            <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. At possimus dicta iste dignissimos id consectetur molestiae perferendis praesentium quam repudiandae?</p>
          </React.Fragment>
        ))}
        <h3 className="my-5 text-[18px] font-semibold">Step4: Conclusion.</h3>
        <p className="my-3">
          “In Helsinki, we can subscribe to green energy from the grid,” Bryon said. “And currently, in one of our two Finnish data centers,
          the waste heat is captured to heat up Helsinki itself. In Iceland, we have the advantage that the ambient air temperature is always low,
          while the energy mix on the grid is already 100% green. So Iceland is pretty much one of the greenest places in the world to have these kinds of operations.”
          This will be a big focal point for the company moving forward. While it plans to offer its services to any company globally, it will mostly remain anchored in the Nordics and Iceland.
          “Perhaps in the future we’ll look at Canada if we can find suitable locations, where we can have a similar advantage in terms of carbon footprint of our operations,” Bryon said.
        </p>
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
