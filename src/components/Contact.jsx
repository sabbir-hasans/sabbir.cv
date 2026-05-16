import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "service_6wynl1p",
                "template_d90i5yu",
                form.current,
                "UvmvcVWOcSo0j76F-"
            )
            .then(() => {
                toast.success("Message sent successfully 🚀", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });

                form.current.reset();
            })
            .catch((error) => {
                console.log(error);

                toast.error("Failed to send message ❌", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section
            id="contact"
            className="py-24 px-6 bg-slate-950"
        >
            <ToastContainer />

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Contact Me
                    </h2>

                    <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

                    <p className="text-slate-400 mt-5 text-base md:text-lg">
                        Feel free to contact me for collaboration,
                        opportunities, or any questions.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">

                    <h3 className="text-2xl font-semibold text-center mb-8">
                        Let's Connect 🚀
                    </h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col gap-5"
                    >

                        {/* Name */}
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-cyan-400 transition"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-cyan-400 transition"
                        />

                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-cyan-400 transition"
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            required
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-cyan-400 transition resize-none"
                        />

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition duration-300 disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;