import mongoose from "mongoose";

const contactschema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
}, {timestamps: true});

export default mongoose.models.Contact  || mongoose.model("Contact", contactschema);