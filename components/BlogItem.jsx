import { blog_data, assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  // image path starts with "/" if it's not an absolute URL
  const imagePath = image.startsWith('/') ? image : `/${image}`;
  return (
    <div className="group max-w-[340px] sm:max-w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Image with Link */}
      <Link href={`/blogs/${id}`} className="relative block overflow-hidden rounded-t-lg">
        <Image
          src={imagePath}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
        />
        {/* Category Tag Overlay */}
        <span className="absolute top-3 left-3 bg-black bg-opacity-75 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md group-hover:bg-opacity-90 transition-all duration-300">
          {category}
        </span>
      </Link>
      {/* Content Section */}
      <div className="p-6">
        {/* Blog Title */}
        <h5 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600 hover:underline">
          <Link href={`/blogs/${id}`} aria-label={`Read more about ${title}`}>{title}</Link>
        </h5>
        {/* Blog Description */}
        <p
          className="text-gray-600 text-sm leading-relaxed mb-4 transition-opacity duration-300 group-hover:opacity-90"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        {/* Read More Link */}
        <Link
          href={`/blogs/${id}`}
          aria-label={`Read more about ${title}`}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-all duration-200"
        >
          <span className="relative">
            Read more
            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-blue-500 opacity-20 rounded-lg group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"></span>
          </span>
          <Image src={assets.arrow} alt="arrow icon" width={12} height={12} style={{ width: 'auto', height: 'auto', objectFit: 'cover' }}/>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
