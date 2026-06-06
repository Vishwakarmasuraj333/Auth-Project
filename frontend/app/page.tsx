import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-100 px-4 pt-28 pb-10 text-gray-950 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 dark:text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 md:py-16">
        <div className="text-center md:text-left">
          <p className="mb-3 text-2xl font-semibold text-blue-600 dark:text-blue-400">
            Suraj Vishwakarma Portfolio
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl md:text-6xl dark:text-white">
            Welcome to My Professional Portfolio
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg md:mx-0 dark:text-gray-300">
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
              className="rounded-xl border border-gray-300 bg-white px-6 py-4 text-center font-semibold text-gray-950 shadow-md transition hover:bg-gray-100 sm:px-8 dark:border-white/20 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl transition-all duration-500 hover:scale-[1.02] sm:p-8 dark:border-white/20 dark:bg-white/10 dark:backdrop-blur-xl">
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

          <h2 className="mb-2 text-center text-2xl font-bold text-gray-950 sm:text-3xl dark:text-white">
            Suraj Vishwakarma
          </h2>

          <p className="mb-6 text-center font-medium text-cyan-600 dark:text-cyan-300">
            Full Stack Developer
          </p>

       <div className="space-y-3 text-sm text-gray-700 sm:text-base dark:text-gray-300">
  {[
    ["⚛️", "Next.js & React Developer"],
    ["🚀", "Node.js Backend Developer"],
    ["🍃", "MongoDB + API Integration"],
    ["💎", "Modern Portfolio Projects"],
  ].map(([icon, text]) => (
    <div
      key={text}
      className="flex items-center justify-center gap-3 text-center"
    >
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  ))}
</div>

          <div className="relative mt-8 overflow-hidden rounded-2xl p-[2px]">
            <div className="absolute inset-0 animate-[borderMove_8s_linear_infinite] rounded-2xl bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#06b6d4)] bg-[length:300%_100%]" />

            <div className="relative rounded-2xl bg-gray-100 p-4 backdrop-blur-xl dark:bg-black/80">
              <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                🔒 Secure access enabled with authentication system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}