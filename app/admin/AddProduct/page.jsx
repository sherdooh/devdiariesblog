'use client';

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    title: "",
    description: "",
    author:"Shadrack Kip",
    authorImg: "/author_img.png"
  });


  const onChangeHandler = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}));
    console.log(data);
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('author',data.author);
    formData.append('authorImg',data.authorImg);
    formData.append('image',image);

    const response = await axios.post('/api/blog',formData)

    if (response.data.success) {
      toast.success(response.data.msg)
      
    } else {
      toast.error('Error')

    }


  }


  return (
    <form onSubmit={onSubmitHandler} className="pt-10 px-6 sm:pt-12 sm:px-16 bg-white max-w-2xl mx-auto rounded-lg shadow-md border border-gray-200">
      {/* Upload Thumbnail Section */}
      <div className="mb-6">
        <label htmlFor="image" className="block text-xl font-semibold mb-3">
          Upload Thumbnail
        </label>
        <div className="flex items-center justify-center p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition">
          <label htmlFor="image" className="flex flex-col items-center cursor-pointer">
            <Image 
              src={image ? URL.createObjectURL(image) : assets.upload_area} 
              width={140}
              height={70}
              priority
              alt="Thumbnail Upload"
              className="mt-2"
            />
          </label>
          <input 
            type="file" 
            id="image" 
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            hidden 
            required
          />
        </div>
      </div>

      {/* Blog Title */}
      <div className="mb-6">
        <label htmlFor="title" className="block text-xl font-semibold mb-2">
          Blog Title
        </label>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          className="w-full sm:w-[500px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition"
          placeholder="Type here"
          maxLength={20}
          required
        />
      </div>

      {/* Blog Description */}
      <div className="mb-6">
        <label htmlFor="description" className="block text-xl font-semibold mb-2">
          Blog Description
        </label>
        <textarea 
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition"
          placeholder="Write content here..."
          maxLength={120}
          rows={8}
          required
        />
      </div>

      {/* Blog Category */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-xl font-semibold mb-2">
          Blog Category
        </label>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition"
          required
        >
          <option value="Programming">Programming</option>
          <option value="AI">AI & ML</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Data">Data</option>
          <option value="Cloud">Cloud & DevOps</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-40 h-12 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-yellow-300 transition-all duration-300"
      >
        ADD
      </button>
    </form>
  );
};

export default Page;
