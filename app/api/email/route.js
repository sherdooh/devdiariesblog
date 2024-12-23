import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

//Email GET Request
export async function GET(request) {
  try {
    await LoadDB();
    const emails = await EmailModel.find(); 
    return NextResponse.json({ emails });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

//Email POST Request
export async function POST(request) {
  try {
    await LoadDB();
    const formData = await request.formData();
    const emailData = {
      email: `${formData.get('email')}`,
    };
    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscribed" });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
