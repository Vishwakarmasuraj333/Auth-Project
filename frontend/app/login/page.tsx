"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const API_URL = "http://localhost:5000/api/auth";

export default function LoginPage() {
  const router = useRouter();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    if (!siteKey) {
      setError("reCAPTCHA site key missing. Check frontend .env.local file.");
      setLoading(false);
      return;
    }

    const captchaToken = captchaRef.current?.getValue();

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          captchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password.");
        captchaRef.current?.reset();
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Authentication Successful • Redirecting to your portfolio...");

      captchaRef.current?.reset();

      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    } catch {
      setError("Server not responding. Please check backend is running.");
      captchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  const socialLogin = (provider: string) => {
    setError(`${provider} login backend route is not configured yet.`);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>

          <p className="text-gray-300 mt-2">
            Login to access Suraj Vishwakarma Portfolio
          </p>
        </div>

        {success && (
          <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400 font-medium">
            ✅ {success}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400 font-medium">
            ❌ {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 p-4 rounded-xl mb-4 outline-none focus:border-blue-500 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 p-4 rounded-xl mb-5 outline-none focus:border-blue-500 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {siteKey ? (
          <div className="mb-5 flex justify-center">
            <ReCAPTCHA ref={captchaRef} sitekey={siteKey} />
          </div>
        ) : (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-red-400 text-sm">
            reCAPTCHA site key missing
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white p-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer mb-6"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-black/40 backdrop-blur-md px-4 text-gray-300 text-sm">
              Or continue with
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => socialLogin("google")}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FcGoogle size={28} />
          </button>

          <button
            type="button"
            onClick={() => socialLogin("facebook")}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaFacebookF size={22} />
          </button>

          <button
            type="button"
            onClick={() => socialLogin("github")}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 text-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaGithub size={24} />
          </button>
        </div>

        <p className="text-center text-gray-300 mt-6">
          Don&apos;t have an account?
          <Link
            href="/register"
            className="text-cyan-400 ml-2 hover:text-cyan-300 font-semibold"
          >
            Create Account
          </Link>
        </p>
      </form>
    </main>
  );
}