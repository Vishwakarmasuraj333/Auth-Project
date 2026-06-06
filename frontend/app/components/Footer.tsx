import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-white text-gray-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black">
            Suraj<span className="text-cyan-400">Dev</span>
          </h2>

          <p className="mt-4 max-w-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Full Stack Developer building modern, secure and scalable web
            applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/Vishwakarmasuraj333"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-3 text-amber-500 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white dark:bg-white/10"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-3 text-blue-500 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white dark:bg-white/10"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/surajvishwakarma_bittu?igsh=NXlyNHBrbjNvbGJ0&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-3 text-pink-500 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white dark:bg-white/10"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/people/Vishwakarma-Suraj/pfbid02TJgNhWWsryXvGSSQfEXWbsFcbLbQ8ewDHZWJcBUPUfncHW8ph2cSxAruYqv8DGqLl/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-3 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white dark:bg-white/10"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
            <Link href="/" className="transition hover:text-cyan-400">
              Home
            </Link>

            <Link
              href="/dashboard"
              className="transition hover:text-cyan-400"
            >
              Portfolio
            </Link>

            <Link href="/login" className="transition hover:text-cyan-400">
              Login
            </Link>

            <Link href="/register" className="transition hover:text-cyan-400">
              Create Account
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">
            Tech Stack
          </h3>

          <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
            <p>React.js</p>
            <p>Next.js</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
            <p className="flex items-start gap-3 break-all">
              <FaEnvelope className="mt-1 shrink-0 text-cyan-400" />
              itxsurajofficial@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="shrink-0 text-cyan-400" />
              +91 9370944696
            </p>

            <p>Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-5 text-center text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
        © 2026 Suraj Vishwakarma. All Rights Reserved.
      </div>
    </footer>
  );
}
