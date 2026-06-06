"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API_URL = "http://localhost:5000/api/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
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
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Unable to create your account. Please try again.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Account created successfully. Redirecting to your dashboard...");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch {
      setError("Server connection failed. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-24 text-gray-900 transition-colors duration-300 sm:px-4 sm:py-28 dark:text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-white/65 dark:bg-black/70" />

      <div className="absolute -left-20 top-10 h-56 w-56 animate-pulse rounded-full bg-blue-500/20 blur-3xl sm:left-20 sm:top-20 sm:h-72 sm:w-72" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 animate-pulse rounded-full bg-purple-500/20 blur-3xl sm:right-20 sm:bottom-20 sm:h-72 sm:w-72" />

      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-[360px] rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 sm:max-w-md sm:rounded-3xl sm:p-8 dark:border-white/20 dark:bg-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-3xl font-bold text-gray-950 sm:text-4xl dark:text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
            Join Suraj Vishwakarma Portfolio
          </p>
        </div>

        {success && (
          <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-center text-sm font-medium text-green-600 sm:p-4 sm:text-base dark:text-green-400">
            ✅ {success}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-sm font-medium text-red-600 sm:p-4 sm:text-base dark:text-red-400">
            ❌ {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          required
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-blue-500 sm:p-4 sm:text-base dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-blue-500 sm:p-4 sm:text-base dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="mb-6 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-blue-500 sm:p-4 sm:text-base dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60 sm:p-4 sm:text-lg"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="mt-6 text-center text-sm text-gray-600 sm:text-base dark:text-gray-300">
          Already have an account?
          <Link
            href="/login"
            className="ml-2 font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}