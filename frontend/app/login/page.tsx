"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

    if (!API_URL) {
      setError("API URL missing. Add NEXT_PUBLIC_API_URL in Vercel Environment Variables.");
      setLoading(false);
      return;
    }

    if (!siteKey) {
      setError("reCAPTCHA site key missing. Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY in Vercel.");
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
    } catch (err) {
      console.error("LOGIN_ERROR:", err);
      setError("Server connection failed. Backend URL, CORS, or Render service issue.");
      captchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  const socialLogin = (provider: string) => {
    setError(`${provider} login backend route is not configured yet.`);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-24 text-gray-950 transition-colors duration-300 sm:px-4 sm:py-28 dark:text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-white/65 dark:bg-black/75" />

      <div className="absolute -left-20 top-10 h-56 w-56 animate-pulse rounded-full bg-blue-500/20 blur-3xl sm:left-10 sm:h-80 sm:w-80" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 animate-pulse rounded-full bg-cyan-500/20 blur-3xl sm:right-10 sm:h-80 sm:w-80" />

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-[360px] rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 sm:max-w-md sm:rounded-3xl sm:p-8 dark:border-white/20 dark:bg-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-3xl font-bold text-gray-950 sm:text-4xl dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
            Login to access Suraj Vishwakarma Portfolio
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
          type="email"
          placeholder="Email Address"
          className="mb-4 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-blue-500 sm:p-4 sm:text-base dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-5 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-blue-500 sm:p-4 sm:text-base dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {siteKey ? (
          <div className="mb-5 flex w-full justify-center overflow-hidden">
            <div className="origin-top scale-[0.84] sm:scale-100">
              <ReCAPTCHA ref={captchaRef} sitekey={siteKey} />
            </div>
          </div>
        ) : (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-sm text-red-500 dark:text-red-400">
            reCAPTCHA site key missing
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mb-6 w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60 sm:p-4 sm:text-lg"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-white/20" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white/80 px-4 text-xs text-gray-600 backdrop-blur-md sm:text-sm dark:bg-black/40 dark:text-gray-300">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => socialLogin("google")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 sm:h-14 sm:w-14"
          >
            <FcGoogle size={26} />
          </button>

          <button
            type="button"
            onClick={() => socialLogin("facebook")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 sm:h-14 sm:w-14"
          >
            <FaFacebookF size={20} />
          </button>

          <button
            type="button"
            onClick={() => socialLogin("github")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-all duration-300 hover:scale-110 sm:h-14 sm:w-14 dark:bg-white dark:text-gray-950"
          >
            <FaGithub size={22} />
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600 sm:text-base dark:text-gray-300">
          Don&apos;t have an account?
          <Link
            href="/register"
            className="ml-2 font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            Create Account
          </Link>
        </p>
      </form>
    </main>
  );
}
