import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from 'path';

const fs = require('fs');

const LoadDB = async () => {
  await ConnectDB();
};

// Blogs GET Request
export async function GET(request) {
  try {
    await LoadDB();
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json({ blog });
    } else {
      const blogs = await BlogModel.find();
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
//POST  Request
export async function POST(request) {
  try {
    await LoadDB();
    const formData = await request.formData();
    const image = formData.get('image');
    const timestamp = Date.now();
    const imageName = `${timestamp}_${image.name}`;
    const imagePath = path.resolve(`./public/${imageName}`);
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(imagePath, buffer);
    
    const blogData = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      author: formData.get('author'),
      image: `/${imageName}`,
      authorImg: formData.get('authorImg'),
    };
    
    await BlogModel.create(blogData);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// DELETE Endpoint
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted!!" });
}

// PUT Endpoint Blog Update
export async function PUT(request) {
  const { id } = request.nextUrl.pathname.split('/').slice(-1)[0];  // Extract ID from URL path
  await LoadDB();

  const formData = await request.formData();
  const image = formData.get('image');
  let blogData = {
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    author: formData.get('author'),
    authorImg: formData.get('authorImg'),
  };

  if (image) {
    const timestamp = Date.now();
    const imageName = `${timestamp}_${image.name}`;
    const imagePath = path.resolve(`./public/${imageName}`);
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(imagePath, buffer);
    blogData.image = `/${imageName}`;
  }

  try {
    const result = await BlogModel.findByIdAndUpdate(id, blogData);
    if (result) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}