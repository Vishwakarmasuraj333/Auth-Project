import {
  FaRobot,
  FaBrain,
  FaCode,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const aiTools = [
  {
    name: "ChatGPT",
    desc: "Used for coding help, debugging, content ideas and problem solving.",
    icon: <FaRobot />,
  },
  {
    name: "Gemini",
    desc: "Used for research, project planning and creative web content.",
    icon: <FaWandMagicSparkles />,
  },
  {
    name: "Claude",
    desc: "Used for clean explanations, documentation and long-form thinking.",
    icon: <FaBrain />,
  },
  {
    name: "Cursor AI",
    desc: "Used for faster development, code generation and refactoring.",
    icon: <FaCode />,
  },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            AI Section
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            AI Tools I Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            I use modern AI tools to improve productivity, solve coding
            problems faster and build professional full-stack projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool, index) => (
            <div
              key={tool.name}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-center opacity-0 backdrop-blur-xl animate-[slideLeft_0.8s_ease_forwards] transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/60 hover:bg-cyan-500/10"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-black/40 text-3xl text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                {tool.icon}
              </div>

              <h3 className="mb-3 text-2xl font-black">{tool.name}</h3>

              <p className="text-sm leading-6 text-gray-300">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}