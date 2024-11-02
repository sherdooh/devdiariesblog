import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  const BlogDate = new Date(date);

  return (
    
    <tr className="bg-white border-b hover:bg-gray-100 transition duration-200">
      {/* Author Section */}
      <th
        scope="row"
        className="flex items-center gap-4 px-6 py-4 font-medium text-gray-800 whitespace-nowrap hidden sm:table-cell"
      >
        <Image
          width={40}
          height={40}
          src={authorImg || assets.profile_icon}
          alt="Author Image"
          className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
        />
        <span className="text-gray-900">{author || "No author"}</span>
      </th>

      {/* Title */}
      <td className="px-6 py-4 text-gray-700 font-semibold truncate max-w-xs">
        {title || "No title"}
      </td>

      {/* Date */}
      <td className="px-6 py-4 text-gray-500 text-sm">
        {BlogDate.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
      </td>

      {/* Delete Action */}
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200 text-center"
        title="Delete Blog"
      >
        <Image
          src={assets.delete_icon_1}
          alt="Delete Blog"
          width={20} 
          height={20} // Adjust the height as needed
          className="inline-block"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
