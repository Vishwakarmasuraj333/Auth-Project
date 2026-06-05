import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function AboutHeroSection() {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl sm:h-72 sm:w-72" />
            <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl sm:h-72 sm:w-72" />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className="order-2 text-center lg:order-1 lg:text-left">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-cyan-400 sm:text-base">
                        Let&apos;s Build Something Amazing
                    </p>

                    <h2 className="mb-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                        I Build Modern Web Apps as a{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Developer
                        </span>
                    </h2>

   <div className="mb-6 h-12 overflow-hidden">
  <div className="relative flex h-full items-center justify-center">

    <span className="absolute inset-0 flex items-center justify-center animate-[fadeText_12s_infinite] text-center text-xl font-bold text-cyan-300 sm:text-3xl">
      🚀 Full Stack Developer
    </span>

    <span className="absolute inset-0 flex items-center justify-center animate-[fadeText2_12s_infinite] text-center text-xl font-bold text-cyan-300 sm:text-3xl">
      🧠 Problem Solver
    </span>

    <span className="absolute inset-0 flex items-center justify-center animate-[fadeText3_12s_infinite] text-center text-xl font-bold text-cyan-300 sm:text-3xl">
      ⚛️ Frontend Engineer
    </span>

    <span className="absolute inset-0 flex items-center justify-center animate-[fadeText4_12s_infinite] text-center text-xl font-bold text-cyan-300 sm:text-3xl">
      ⚡ Backend Developer
    </span>

  </div>
</div>

                    <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                        I love solving real-world problems with clean UI, secure backend,
                        responsive layouts, authentication systems, API integration and
                        scalable web applications.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <Link
                            href="mailto:itxsurajofficial@gmail.com"
                            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-center font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105"
                        >
                            Hire Me
                        </Link>

                        <Link
                            href="/dashboard"
                            className="rounded-full border border-cyan-500/30 bg-white/10 px-8 py-4 text-center font-bold text-white transition hover:bg-cyan-500/10"
                        >
                            View Portfolio
                        </Link>
                    </div>

                    <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                        {[
                            ["https://github.com/Vishwakarmasuraj333", <FaGithub key="github" />],
                            [
                                "https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a",
                                <FaLinkedin key="linkedin" />,
                            ],
                            [
                                "https://www.instagram.com/surajvishwakarma_bittu",
                                <FaInstagram key="instagram" />,
                            ],
                            ["mailto:itxsurajofficial@gmail.com", <FaEnvelope key="email" />],
                        ].map(([href, icon]) => (
                            <a
                                key={String(href)}
                                href={String(href)}
                                target={String(href).startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-4 text-white transition hover:scale-110 hover:bg-cyan-500"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="order-1 flex justify-center lg:order-2">
                    <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-2xl sm:-inset-4" />

                        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-cyan-400 bg-black shadow-2xl">
                            <Image
                                src="/Surya.png"
                                alt="Suraj Vishwakarma"
                                fill
                                priority
                                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full border border-cyan-500/30 bg-black/80 px-5 py-3 text-xs font-bold text-cyan-300 backdrop-blur-xl sm:text-sm">
                            Available for Work
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}