import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-white border-t border-cyan-500/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-3xl font-black">
            Suraj<span className="text-cyan-400">Dev</span>
          </h2>

          <p className="mt-4 max-w-sm text-gray-400 leading-relaxed">
            Full Stack Developer building modern, secure and scalable web
            applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/Vishwakarmasuraj333"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:scale-110 hover:bg-cyan-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:scale-110 hover:bg-cyan-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/surajvishwakarma_bittu?igsh=NXlyNHBrbjNvbGJ0&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:scale-110 hover:bg-cyan-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link className="transition hover:text-cyan-400" href="/">
              Home
            </Link>
            <Link className="transition hover:text-cyan-400" href="/dashboard">
              Portfolio
            </Link>
            <Link className="transition hover:text-cyan-400" href="/login">
              Login
            </Link>
            <Link className="transition hover:text-cyan-400" href="/register">
              Create Account
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">Tech Stack</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <p>React.js</p>
            <p>Next.js</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">Contact</h3>

          <div className="flex flex-col gap-3 text-gray-300">
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

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-gray-500">
        © 2026 Suraj Vishwakarma. All Rights Reserved.
      </div>
    </footer>
  );
}