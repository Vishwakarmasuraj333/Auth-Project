"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/20 bg-[#050816]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
            <FaCode className="text-white text-lg" />
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              Suraj<span className="text-cyan-400">Dev</span>
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/register"
          className="hidden md:block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white transition hover:scale-105"
        >
          Get Started
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-white/10 text-white transition hover:bg-cyan-500/20"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-cyan-500/20 bg-[#050816]/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{
                transitionDelay: open ? `${index * 100}ms` : "0ms",
              }}
              className={`rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-gray-200 transition-all duration-500 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400 ${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/register"
            onClick={closeMenu}
            style={{
              transitionDelay: open ? `${navLinks.length * 100}ms` : "0ms",
            }}
            className={`mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-center font-bold text-white transition-all duration-500 hover:scale-105 ${
              open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}