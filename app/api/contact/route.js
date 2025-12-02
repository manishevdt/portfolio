import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact  from "@/lib/contactModel";

export async function POST(req) {
    try {
 await connectDB();
 const {name, email, message } = await req.json();
 if(!name ||  !email || !message) {
    return NextResponse.json({error: "All field are required"}, {status: 400});
 }
 await Contact.create({name, email, message});
 return NextResponse.json({message: "Message received successfully!"}, {status: 200});
    } catch (error) {
         return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
    
}