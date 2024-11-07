import { ConnectDB } from "@/lib/config/db";
import ContactModel from "@/lib/models/ContactModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

export async function GET(request) {
  try {
    await LoadDB();
    const contacts = await ContactModel.find();
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await LoadDB();
    const contentType = request.headers.get('Content-Type') || '';
    let ContactData;

    if (contentType.includes('application/json')) {
      const body = await request.json();
      ContactData = {
        email: body.email,
        name: body.name,
        subject: body.subject,
        message: body.message,
      };
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      ContactData = {
        email: formData.get('email'),
        name: formData.get('name'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };
    } else {
      return NextResponse.json({ success: false, msg: "Unsupported Content-Type" }, { status: 400 });
    }

    await ContactModel.create(ContactData);
    return NextResponse.json({ success: true, msg: "Your message has been received" });
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// DELETE Request
export async function DELETE(request) {
  try {
    await LoadDB();
    const id = request.nextUrl.searchParams.get("id"); 

    if (!id) {
      return NextResponse.json({ success: false, msg: "ID is required" }, { status: 400 });
    }

    const deletedContact = await ContactModel.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json({ success: false, msg: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, msg: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json({ success: false, msg: "Failed to delete contact" }, { status: 500 });
  }
}
