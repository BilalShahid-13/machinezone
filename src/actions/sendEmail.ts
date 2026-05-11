"use server";

import nodemailer from "nodemailer";

export async function sendEmailAction(formData: any) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            debug: true, // Add this
            logger: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"machinezone Contact" <${process.env.EMAIL_USERNAME}>`,
            to: process.env.EMAIL_USERNAME,
            replyTo: formData.email,
            subject: `New Inquiry: ${formData.subject}`,
            html: `
        <h3>New Message from ${formData.name}</h3>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}