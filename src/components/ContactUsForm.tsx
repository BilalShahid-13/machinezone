"use client";

import { montserrat } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2, Mail, Send } from "lucide-react";

// shadcn/ui and Radix components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form management and validation
import { sendEmailAction } from "@/actions/sendEmail";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Badge } from "./ui/badge";
import { EMAIL_LINK } from "@/lib/constant";

// Form Schema Validation
const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." }),
    subject: z
        .string()
        .min(5, { message: "Subject must be at least 5 characters." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUs() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });
    const [isPending, startTransition] = useTransition()

    const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
        startTransition(async () => {
            try {
                // Server Action ko call kar rahe hain
                const result = await sendEmailAction(data);

                if (result.success) {
                    toast.success("Email sent successfully! 🚀")
                    form.reset(); // Sirf success hone par hi form clear karein
                } else {
                    alert("Server error: Could not send email. Please try again.");
                }
            } catch (error) {
                console.error("Client side error:", error);
                alert("Something went wrong while connecting to the server.");
            }
        });

        // Console log development ke liye theek hai
        console.log("Form processing started for:", data.email);
    };

    return (
        <div className="bg-[#0d0d00] text-[#f5f0e0] font-sans selection:bg-yellow-500/30 w-full min-h-screen" id="contact-us">

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 prose prose-invert prose-yellow max-w-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl mx-auto text-center mb-16"
                >
                    <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 mb-6 px-4 py-1">
                        <Mail className="w-4 h-4 mr-2" /> Talk to our scaling team
                    </Badge>
                    <h1
                        className={`${montserrat.className} text-4xl md:text-6xl font-black italic uppercase text-yellow-500 mb-4`}
                    >
                        Connect <span className="text-white">With</span> Us
                    </h1>
                    <p className="opacity-60 italic mb-12">
                        Ready to scale your next title or explore our fleet simulation capabilities? Fill out the form below, and our administration team will get back to you shortly.
                    </p>
                </motion.div>

                {/* --- SHADCN/UI CONTACT FORM --- */}
                <section className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem] backdrop-blur-xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden group">

                    <div className="absolute top-0 right-0 p-8 opacity-10 text-yellow-500 -z-10 group-hover:opacity-20 transition-opacity">
                        <Mail size={150} />
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">

                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} className="bg-zinc-900 border-white/10 text-white" />
                                        </FormControl>
                                        <FormDescription className="text-xs opacity-50">Please enter your legal or professional name.</FormDescription>
                                        <FormMessage className="text-yellow-400" />
                                    </FormItem>
                                )}
                            />

                            {/* Email and Phone (2 columns on tablet/desktop) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Email Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john.doe@email.com" type="email" {...field} className="bg-zinc-900 border-white/10 text-white" />
                                            </FormControl>
                                            <FormMessage className="text-yellow-400" />
                                        </FormItem>
                                    )}
                                />

                                {/* Phone Field */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+1 (555) 123-4567" type="tel" {...field} className="bg-zinc-900 border-white/10 text-white" />
                                            </FormControl>
                                            <FormMessage className="text-yellow-400" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Subject Field */}
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Inquiry about Fleet Simulation Tech" {...field} className="bg-zinc-900 border-white/10 text-white" />
                                        </FormControl>
                                        <FormMessage className="text-yellow-400" />
                                    </FormItem>
                                )}
                            />

                            {/* Message Field */}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Your Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your project or inquiry..."
                                                className="bg-zinc-900 border-white/10 text-white min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-yellow-400" />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit"
                                variant={'default'}
                                className="w-full h-16 bg-yellow-500 text-black font-black text-lg rounded-2xl hover:bg-yellow-600 group-hover:scale-[1.02] transition-transform">

                                {isPending ? <div className="flex flex-row justify-center items-center gap-2">
                                    <Loader2 className="animate-spin" />
                                    Sending
                                </div> : <div className="flex flex-row justify-center items-center gap-2">
                                    <Send className="mr-2 h-5 w-5" />
                                    SEND MESSAGE
                                </div>}
                            </Button>

                            <div className="text-center mt-6 pt-6 border-t border-white/5">
                                <p className="text-xs opacity-40">Or email us directly at:</p>
                                <a href={EMAIL_LINK} className="text-yellow-500 font-bold text-sm hover:underline">admin@machinezonepvtltd.com</a>
                            </div>

                        </form>
                    </Form>
                </section>
            </main>
        </div>
    );
}