import Image from "next/image";

type User = {
  name: string;
  email: string;
} | null;

export default function HeroSection({
  user,
  logout,
}: {
  user: User;
  logout: () => void;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0f1b3d] to-black" />
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-lg font-semibold text-cyan-400">
            Welcome, {user?.name || "Developer"} 👋
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Suraj Vishwakarma
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-300">
            I build modern, fast, secure and scalable web applications using
            Next.js, React, Node.js, Express, MongoDB and Tailwind CSS.
          </p>
<div className="flex flex-wrap gap-4">
  {/* View Projects */}
  <a
    href="#projects"
    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-xl shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-cyan-500/50"
  >
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

    <span className="relative z-10 flex items-center gap-2">
      🚀 View Projects
    </span>
  </a>

  {/* Logout */}
  <button
    onClick={logout}
    className="group relative overflow-hidden rounded-full border border-red-500/40 bg-red-500/5 px-8 py-4 font-bold text-red-400 shadow-lg shadow-red-500/10 transition-all duration-500 hover:-translate-y-1 hover:border-red-400 hover:text-white hover:shadow-red-500/30"
  >
    <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-red-600 to-rose-500 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative z-10 flex items-center gap-2">
      🔓 Logout
    </span>
  </button>
</div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
          <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-400">
            <Image
              src="/login.png"
              alt="Suraj Vishwakarma"
              fill
              priority
              className="object-cover"
            />
          </div>

          <h2 className="text-center text-3xl font-bold">
            {user?.name || "Suraj Vishwakarma"}
          </h2>

          <p className="mt-2 text-center text-cyan-300">
            {user?.email || "Full Stack Developer"}
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-black/30 p-4 text-center text-sm text-gray-300">
            Secure authenticated portfolio access enabled.
          </div>
        </div>
      </div>
    </section>
  );
}