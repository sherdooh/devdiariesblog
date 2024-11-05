import { NextResponse } from "next/server";
import User from "@/lib/models/User";
import bcrypt from 'bcrypt';
import { ConnectDB } from "@/lib/config/db";





export async function POST(req) {
    try {
        await ConnectDB();
        const {name, email, password} = await req.json();
        const newUser = await User.create( {name, email, password})        



        return NextResponse.json(newUser, { status: 201 });
        
    } catch (error) {
        return NextResponse.json({ message: "Post Error in Sign Up" }, { status: 500 });
    }
}
