"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    if (nextDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-500/30 dark:border-cyan-500/30 dark:bg-[#0b1220] dark:text-white dark:hover:shadow-cyan-500/30"
    >
      {darkMode ? (
        <FaSun className="text-xl text-yellow-400 transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <FaMoon className="text-xl text-blue-600 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}