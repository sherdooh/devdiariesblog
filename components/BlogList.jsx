'use client';
import React, { useState } from 'react';
import BlogItem from './BlogItem';
import { blog_data } from '@/Assets/assets';

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className='flex justify-center gap-4 my-10'>
        <button
          onClick={() => setMenu('All')}
          className={`${menu === 'All' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Programming')}
          className={`${menu === 'Programming' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Programming
        </button>
        <button
          onClick={() => setMenu('Cloud')}
          className={`${menu === 'Cloud' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Cloud & DevOps
        </button>
        <button
          onClick={() => setMenu('AI')}
          className={`${menu === 'AI' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          AI & ML
        </button>
        <button
          onClick={() => setMenu('Cybersecurity')}
          className={`${menu === 'Cybersecurity' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Cybersecurity
        </button>
        <button
          onClick={() => setMenu('Data')}
          className={`${menu === 'Data' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Data Science
        </button>
        <button
          onClick={() => setMenu('Blockchain')}
          className={`${menu === 'Blockchain' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Blockchain
        </button>
      </div>
      {/* Blog Items */}
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item)=> menu==="All"?true : item.category===menu) .map((item, key) => {
          return <BlogItem key={key} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
        })}
      </div>
    </div>
  );
};

export default BlogList;
