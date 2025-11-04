import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { NextResponse } from "next/server";
import { serialize } from "v8";

export async function POST(request) {
    try{
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const attachment = formData.get("attachement");
        // create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        // mail options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name} (${email})`,
            text: message,
            attachments: []
        }
        // if there is an attachment
        if(attachment && attachment.size > 0){
            const attachmentBuffer = await attachment.arrayBuffer();
            const buffer = Buffer.from(attachmentBuffer);
            mailOptions.attachments.push({
                filename: attachment.name,
                content: buffer,
            });
        }
        // send mail
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    }catch (error) {
        console.error("Error processing form data:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}