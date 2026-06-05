const timeline = [
  {
    year: "2023",
    title: "Started Coding",
    desc: "Began learning programming fundamentals, HTML, CSS and basic JavaScript.",
  },
  {
    year: "2024",
    title: "Learned Frontend",
    desc: "Built responsive websites using HTML5, CSS3, JavaScript and modern UI practices.",
  },
  {
    year: "2025",
    title: "React + Next.js",
    desc: "Created professional projects with React.js, Next.js, Tailwind CSS and API integration.",
  },
  {
    year: "2026",
    title: "Full Stack Developer",
    desc: "Building complete applications with frontend, backend, authentication and database systems.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Experience Timeline
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            My Developer Journey
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-cyan-500/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="ml-12 w-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/60 md:ml-0 md:w-[45%]">
                  <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">
                    {item.year}
                  </span>

                  <h3 className="mb-3 text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-300">{item.desc}</p>
                </div>

                <div className="absolute left-1 top-8 h-7 w-7 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-lg shadow-cyan-500/50 md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}