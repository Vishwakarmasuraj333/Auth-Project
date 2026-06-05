import { FaGraduationCap, FaSchool, FaLaptopCode } from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Science in Information Technology (BSc IT)",
    place: "Abhinav College",
    year: "Graduated - 2025",
    icon: <FaGraduationCap />,
  },
  {
    title: "Frontend Development",
    place: "HTML, CSS, JavaScript, React",
    year: "2024 - 2025",
    icon: <FaLaptopCode />,
  },
  {
    title: "Full Stack Development",
    place: "Next.js, Node.js, MongoDB",
    year: "2026",
    icon: <FaSchool />,
  },
];

export default function EducationSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Education Section
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Education & Learning
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            My academic background and continuous learning journey in modern web
            development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/60"
            >
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />

              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                {item.icon}
              </div>

              <h3 className="relative mb-2 text-2xl font-black text-white">
                {item.title}
              </h3>

              <p className="relative text-gray-300">{item.place}</p>

              <p className="relative mt-3 font-semibold text-cyan-300">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}