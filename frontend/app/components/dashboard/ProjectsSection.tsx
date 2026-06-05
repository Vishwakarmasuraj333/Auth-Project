import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Authentication System",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Secure authentication system with JWT, Login, Register, Protected Routes and User Management.",
    tech: "Next.js • Node.js • MongoDB",
  },
  {
    title: "Developer Portfolio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "Modern portfolio website with animations, responsive design and professional UI.",
    tech: "Next.js • Tailwind CSS",
  },
  {
    title: "Contact Backend API",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    description:
      "Professional contact form backend with validation, database integration and email support.",
    tech: "Express.js • MongoDB",
  },
  {
    title: "Admin Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Analytics dashboard with charts, statistics, user management and responsive design.",
    tech: "React.js • Tailwind CSS",
  },
  {
    title: "Booking App",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Online booking platform with scheduling, authentication and real-time data management.",
    tech: "MERN Stack",
  },
  {
    title: "MERN CRUD App",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Complete CRUD application with API integration, database operations and admin controls.",
    tech: "MongoDB • Express • React • Node",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            A collection of professional full-stack applications built using
            modern technologies and best development practices.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/60"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-cyan-500/30 bg-black/70 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
                  {project.tech}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mb-6 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-bold text-white transition hover:scale-105"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href="#"
                    className="rounded-full border border-cyan-500/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-cyan-500/10"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}