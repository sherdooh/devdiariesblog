'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UpdateBlog = () => {
  const [blogs, setBlogs] = useState([]); // List of blogs for dropdown
  const [selectedBlog, setSelectedBlog] = useState(null); // Currently selected blog for editing
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Programming',
    author: '',
    authorImg: '/author_img.png',
  });

  // Fetch all blogs initially
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
      } catch (error) {
        toast.error('Failed to fetch blogs');
      }
    };
    fetchBlogs();
  }, []);

  // When a blog is selected, populate form fields with the blog's data
  const handleBlogSelect = async (blogId) => {
    const blog = blogs.find((b) => b._id === blogId);
    if (blog) {
      setSelectedBlog(blog); // Set the selected blog
      setData({
        title: blog.title,
        description: blog.description,
        category: blog.category,
        author: blog.author,
        authorImg: blog.authorImg,
      });
      setImage(null); // Reset image to null when a new blog is selected
    }
  };

  // Update field changes in state
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission for updating blog
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!selectedBlog) {
      toast.error('Please select a blog to update.');
      return;
    }
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    if (image) formData.append('image', image);
    try {
      const response = await axios.put(`/api/blog/${selectedBlog._id}`, formData);
      if (response.data.success) {
        toast.success('Blog updated successfully!');
      } else {
        toast.error('Error updating blog');
      }
    } catch (error) {
      console.error('Error response:', error.response || error.message);
      toast.error('An error occurred while updating the blog.');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="pt-10 px-6 sm:pt-12 sm:px-16 bg-white max-w-2xl mx-auto rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6">Update Blog</h2>
      {/* Blog Selection Dropdown */}
      <div className="mb-6">
        <label htmlFor="blog-select" className="block text-xl font-semibold mb-2">
          Select Blog to Edit
        </label>
        <select
          id="blog-select"
          onChange={(e) => handleBlogSelect(e.target.value)}
          className="w-full sm:w-[500px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 outline-none transition"
          required
        >
          <option value="">Select a blog</option>
          {blogs.map((blog) => (
            <option key={blog._id} value={blog._id}>
              {blog.title} - {blog.description.slice(0, 30)}...
            </option>
          ))}
        </select>
      </div>
      {/* Upload Thumbnail */}
      <div className="mb-6">
        <label htmlFor="image" className="block text-xl font-semibold mb-3">
          Update Thumbnail
        </label>
        <div className="flex items-center justify-center p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition">
          <label htmlFor="image" className="flex flex-col items-center cursor-pointer">
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                width={140}
                height={70}
                priority
                alt="Thumbnail Upload"
                className="mt-2"
              />
            ) : (
              selectedBlog?.image && (
                <Image
                  src={selectedBlog.image}
                  width={140}
                  height={70}
                  priority
                  alt="Thumbnail"
                  className="mt-2"
                />
              )
            )}
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            hidden
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
          maxLength={200}
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
          placeholder="Write your blog content here..."
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
        Update
      </button>
    </form>
  );
};

export default UpdateBlog;
