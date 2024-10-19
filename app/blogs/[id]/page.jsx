'use client';
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [data, setData] = useState();

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);

        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {

    fetchBlogData();

  }, []);

  return ( data ? <>
    <>
      <Header />

      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>

        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} widht={60} height={60} alt=''/>
        <p className='mt-1 pb-2  text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>

      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">Step1: Self Lorem ipsum dolor sit.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Step2: Self Lorem ipsum dolor sit.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Step3: Self Lorem ipsum dolor sit.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Step4: Conclusion.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laudantium dicta, provident,
          tempore ipsum quibusdam pariatur explicabo nisi rerum sit consequatur animi id excepturi
          eos dolorem quae natus, tenetur sequi voluptatum architecto soluta rem dolorum nobis
          fugiat. Error voluptatibus obcaecati enim facilis est incidunt, molestiae, architecto
          nesciunt nisi nihil reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime accusantium vel ullam tempore beatae molestiae provident doloremque veniam
          sint inventore!
        </p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">Share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>

    </>:<></>









  );
};

export default Page;
