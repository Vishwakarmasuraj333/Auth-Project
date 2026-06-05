"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:5000/api/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data.message ||
            "Unable to create your account. Please try again."
        );
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess(
        "Account created successfully. Redirecting to your dashboard..."
      );

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch {
      setError(
        "Server connection failed. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Blur Effects */}
      <div className="absolute left-20 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />

      {/* Register Card */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-gray-300">
            Join Suraj Vishwakarma Portfolio
          </p>
        </div>

        {success && (
          <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center font-medium text-green-400">
            ✅ {success}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center font-medium text-red-400">
            ❌ {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          required
          className="mb-4 w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-300 focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="mb-4 w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-300 focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="mb-6 w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-300 focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="mt-6 text-center text-gray-300">
          Already have an account?
          <a
            href="/login"
            className="ml-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Login
          </a>
        </p>
      </form>
    </main>
  );
}