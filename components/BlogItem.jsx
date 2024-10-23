import { blog_data, assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  // Ensure the image path starts with "/" if it's not an absolute URL
  const imagePath = image.startsWith('') ? image : `/${image}`;

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-lg overflow-hidden hover:shadow-[-7px_7px_0px_#000] transition-shadow duration-300'>
      <Link href={`/blogs/${id}`}>
        <Image src={imagePath} alt="" width={400} height={400} className='border-b border-black' />
      </Link>
      {/* Category Tag */}
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-xs uppercase'>{category}</p>
      <div className='p-5'>
        {/* Blog Title */}
        <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900'>
          {title}
        </h5>
        {/* Blog Description */}
        <p className='mb-3 text-sm text-gray-700'>
          {description}
        </p>
        {/* Read More */}
        <Link href={`/blogs/${id}`} className='flex items-center gap-1 text-black font-semibold hover:underline cursor-pointer'>
          Read more
          <Image src={assets.arrow} alt='arrow' width={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
