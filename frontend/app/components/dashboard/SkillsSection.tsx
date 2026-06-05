"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    desc: "Semantic structure for clean and accessible websites.",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    desc: "Modern layouts, animations and responsive designs.",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    desc: "Interactive web experiences with dynamic logic.",
    icon: <FaJs />,
  },
  {
    name: "TypeScript",
    desc: "Type-safe applications with better code quality.",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    desc: "Component-based modern frontend development.",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    desc: "Fast, SEO-friendly and production-ready web apps.",
    icon: <SiNextdotjs />,
  },
  {
    name: "Node.js",
    desc: "Powerful backend APIs and server-side logic.",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    desc: "Clean REST APIs with scalable backend routing.",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    desc: "Flexible NoSQL database for modern applications.",
    icon: <SiMongodb />,
  },
  {
    name: "Tailwind CSS",
    desc: "Beautiful UI design with utility-first styling.",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git & GitHub",
    desc: "Version control, collaboration and project workflow.",
    icon: <FaGithub />,
  },
  {
    name: "REST API",
    desc: "Frontend-backend connection with secure data flow.",
    icon: <SiPostman />,
  },
];

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden bg-white/5 px-4 py-20 sm:px-6 lg:px-8 text-center justify-center">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            My Professional Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Technologies I use to build modern, responsive, secure and scalable
            full-stack web applications.
          </p>
        </div>

        
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {skills.map((skill, index) => (
    <div
      key={skill.name}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
      className="group animate-[slideLeft_0.8s_ease_forwards] relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-center opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/60 hover:bg-cyan-500/10"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-black/40 text-4xl text-cyan-400 shadow-lg shadow-cyan-500/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
        {skill.icon}
      </div>

      <h3 className="mb-3 text-xl font-black text-white">
        {skill.name}
      </h3>

      <p className="text-sm leading-6 text-gray-300">
        {skill.desc}
      </p>

      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  ))}
</div>
       
      </div>
    </section>
  );
}