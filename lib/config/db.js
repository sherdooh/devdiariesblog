import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:VGSYhFdAXqubQrP9@booking-db.wyrkc.mongodb.net/dev-app')
    console.log("DB Connected")

}   
