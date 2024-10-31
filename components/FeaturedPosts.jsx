'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/Assets/assets';

// Utility function to strip HTML tags from a string
const stripHtmlTags = (str) => {
  if (typeof str === 'string') {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  }
  return str;
};

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/blog');
        const allPosts = response.data.blogs;
        const shuffled = allPosts.sort(() => 0.5 - Math.random());
        const selectedPosts = shuffled.slice(0, 3);
        setPosts(selectedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return;
  }

  console.log("Featured Posts: ", posts);

  return (
    <section className="px-4 py-8 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.length > 0 && (
          <>
            {/* Main Featured Post */}
            <Link href={`/blogs/${posts[0]._id}`} passHref>
              <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer h-[500px] w-full">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <span className="bg-black px-3 py-1 rounded-full text-xs font-semibold">{posts[0].category}</span>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600 hover:underline">
                    {posts[0].title}
                  </h5>
                  <p className="text-gray-400 text-sm mt-2">
                    {stripHtmlTags(posts[0].description).slice(0, 100)}...
                  </p>
                </div>
              </div>
            </Link>

            {/* Side Blog Posts */}
            <div className="grid grid-rows-2 gap-6">
              {posts.slice(1).map((post) => (
                <Link href={`/blogs/${post._id}`} key={post._id} passHref>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer h-[240px] w-full">
                    <div className="w-1/3 relative h-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                    <div className="w-2/3 flex flex-col justify-center text-white z-10">
                      <span className="bg-black px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
                      <h5 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600 hover:underline">
                        {post.title}
                      </h5>
                      <p className="text-gray-400 text-sm mt-2">
                        {stripHtmlTags(post.description).slice(0, 100)}...
                      </p>
                      <div className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-all duration-200">
                        Read more
                        <Image src={assets.arrow} alt="arrow icon" width={12} height={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
