import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, "Please enter a valid email address"],
        },
        subject: {
            type: String,
            default: "",
        },
        message: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

export default mongoose?.models?.Contact || mongoose.model("Contact", ContactSchema);
