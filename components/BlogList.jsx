// BlogList.jsx
'use client';
import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    const standardizedBlogs = response.data.blogs.map(blog => ({
      ...blog,
      image: blog.image.startsWith('/') ? blog.image : `/${blog.image}`,
    }));
    setBlogs(standardizedBlogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
          className={`${menu === 'Technology' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Programming
        </button>
        
        <button
          onClick={() => setMenu('Cloud')}
          className={`${menu === 'Startup' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Cloud&Devops
        </button>
        
        <button
          onClick={() => setMenu('AI')}
          className={`${menu === 'Lifestyle' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          AI&ML
        </button>
        <button
          onClick={() => setMenu('Cybersecurity')}
          className={`${menu === 'Technology' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Cybersecurity
        </button>
        
        <button
          onClick={() => setMenu('Data')}
          className={`${menu === 'Startup' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Data Science
        </button>
        
        <button
          onClick={() => setMenu('Blockchain')}
          className={`${menu === 'Lifestyle' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Blockchain
        </button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs.length > 0 ? (
          blogs
            .filter(item => menu === "All" || item.category === menu)
            .map(item => (
              <BlogItem
                key={item._id}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
