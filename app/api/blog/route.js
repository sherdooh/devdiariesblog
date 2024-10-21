import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from 'path';

const LoadDB = async () => { await ConnectDB(); };

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

export async function POST(request) {
    try {
        await LoadDB();
        const formData = await request.formData();
        const image = formData.get('image');
        const buffer = Buffer.from(await image.arrayBuffer());
        const imagePath = path.resolve(`./public/${Date.now()}_${image.name}`);
        await writeFile(imagePath, buffer);

        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: `/${Date.now()}_${image.name}`,
            authorImg: formData.get('authorImg')
        };

        await BlogModel.create(blogData);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
