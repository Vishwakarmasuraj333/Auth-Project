import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 pt-28 pb-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 md:py-16">
        <div className="text-center md:text-left">
          <p className="mb-3 font-semibold text-blue-400">
            Suraj Vishwakarma Portfolio
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Welcome to My Professional Portfolio
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:mx-0">
            Please login or create an account to access my full portfolio,
            projects, skills, dashboard and developer profile.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/login"
              className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 sm:px-8"
            >
              Login to View Portfolio
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-gray-950 transition hover:bg-gray-200 sm:px-8"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] sm:p-8">
          <div className="relative mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32">
            <div className="absolute -inset-1 animate-spin rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 [animation-duration:8s]" />

            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-black">
              <Image
                src="/SURAJ.png"
                alt="Suraj Vishwakarma"
                fill
                priority
                sizes="160px"
                className="object-cover transition-all duration-500 hover:scale-110"
              />
            </div>

            <div className="absolute bottom-3 right-3 h-5 w-5 animate-pulse rounded-full border-2 border-white bg-green-500" />
          </div>

          <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
            Suraj Vishwakarma
          </h2>

          <p className="mb-6 text-center font-medium text-cyan-300">
            Full Stack Developer
          </p>

          <div className="space-y-3 text-sm text-gray-300 sm:text-base">
            {[
              ["⚛️", "Next.js & React Developer"],
              ["🚀", "Node.js Backend Developer"],
              ["🍃", "MongoDB + API Integration"],
              ["💎", "Modern Portfolio Projects"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3">
                <span>{icon}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl p-[2px]">
            <div className="absolute inset-0 animate-[borderMove_8s_linear_infinite] rounded-2xl bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#06b6d4)] bg-[length:300%_100%]" />

            <div className="relative rounded-2xl bg-black/80 p-4 backdrop-blur-xl">
              <p className="text-center text-sm font-medium text-gray-300">
                🔒 Secure access enabled with authentication system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}