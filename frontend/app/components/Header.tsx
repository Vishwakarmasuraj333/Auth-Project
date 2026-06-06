"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/login" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-500/20 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:bg-[#050816]/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-110">
            <FaCode className="text-lg text-white" />
          </div>

          <div>
            <h1 className="text-xl font-black text-gray-900 sm:text-2xl dark:text-white">
              Suraj<span className="text-cyan-400">Dev</span>
            </h1>

            <p className="hidden text-[10px] uppercase tracking-[3px] text-gray-500 sm:block dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-medium text-gray-700 transition-all duration-300 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <Link
            href="/register"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 md:block"
          >
            Get Started
          </Link>

          {/* Mobile Theme */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-white/50 text-gray-900 transition-all duration-300 hover:bg-cyan-500/10 dark:bg-white/10 dark:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-cyan-500/20 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out dark:bg-[#050816]/95 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{
                transitionDelay: open ? `${index * 100}ms` : "0ms",
              }}
              className={`rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-center font-semibold text-gray-700 transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-cyan-400 ${
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
            className={`mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-center font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-500 hover:scale-105 ${
              open
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}