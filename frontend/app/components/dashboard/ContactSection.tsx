"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    if (!API_URL) {
      setError("Backend URL missing. Add NEXT_PUBLIC_BACKEND_URL in Vercel.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Message could not be sent.");
        return;
      }

      setSuccess("Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("CONTACT_ERROR:", err);
      setError("Backend server is not responding. Please check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 text-gray-900 transition-colors duration-300 sm:px-6 sm:py-24 dark:bg-[#050816] dark:text-white">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white shadow-2xl backdrop-blur-xl dark:bg-white/10">
          <div
            className="min-h-[480px] bg-cover bg-center p-6 sm:min-h-[560px] sm:p-8"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(5,8,22,0.25), rgba(5,8,22,0.9)), url('https://i.pinimg.com/736x/38/11/d7/3811d7e9715f4756dfeebdffe2f94ac3.jpg')",
            }}
          >
            <p className="mb-3 font-semibold text-cyan-300">Contact Me</p>

            <h2 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s Build Something Powerful Together
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-300">
              Have a project idea, portfolio work, backend API or full-stack
              app? I&apos;m ready to help you build it professionally.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <FaEnvelope className="shrink-0 text-cyan-400" />
                <span className="break-all text-gray-200">
                  itxsurajofficial@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <FaPhoneAlt className="shrink-0 text-cyan-400" />
                <span className="text-gray-200">+91 9370944696</span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <FaMapMarkerAlt className="shrink-0 text-cyan-400" />
                <span className="text-gray-200">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl backdrop-blur-xl transition-colors duration-300 sm:p-8 dark:border-cyan-500/20 dark:bg-white/10"
        >
          <p className="mb-3 font-semibold text-cyan-500 dark:text-cyan-400">
            Send Message
          </p>

          <h3 className="mb-8 text-3xl font-black text-gray-950 sm:text-4xl dark:text-white">
            Contact Form
          </h3>

          {success && (
            <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center font-medium text-green-600 dark:text-green-400">
              ✅ {success}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center font-medium text-red-600 dark:text-red-400">
              ❌ {error}
            </div>
          )}

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white dark:placeholder:text-gray-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white dark:placeholder:text-gray-400"
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white dark:placeholder:text-gray-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="mb-6 w-full resize-none rounded-xl border border-gray-300 bg-white p-4 text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white dark:placeholder:text-gray-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
