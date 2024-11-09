import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error('Failed to connect to database');
  }
};
