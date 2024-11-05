import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:VGSYhFdAXqubQrP9@booking-db.wyrkc.mongodb.net/dev-app', {
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error('Failed to connect to database');
  }
}

