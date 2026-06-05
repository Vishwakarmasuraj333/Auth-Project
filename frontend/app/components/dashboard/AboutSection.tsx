export default function AboutSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Passionate Full Stack Developer
          </h2>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-gray-300">
                Hi, I'm{" "}
                <span className="font-bold text-cyan-400">
                  Suraj Vishwakarma
                </span>
                , a passionate Full Stack Developer dedicated to building
                modern, responsive, secure and high-performance web
                applications.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-300">
                I specialize in creating beautiful user interfaces using
                React.js, Next.js and Tailwind CSS while developing powerful
                backend systems with Node.js, Express.js and MongoDB.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-300">
                My goal is to transform ideas into scalable digital products
                that deliver exceptional user experiences, performance and
                business value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                  React.js
                </span>

                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  Next.js
                </span>

                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
                  Node.js
                </span>

                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                  MongoDB
                </span>

                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                  Tailwind CSS
                </span>
              </div>
            </div>
<div className="grid grid-cols-2 gap-5">

  {/* Projects */}
  <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]">

    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

    <h3 className="relative z-10 text-4xl font-black text-cyan-400">
      🚀 15+
    </h3>

    <p className="relative z-10 mt-2 text-gray-300">
      Projects Built
    </p>
  </div>

  {/* Responsive */}
  <div className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]">

    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

    <h3 className="relative z-10 text-4xl font-black text-blue-400">
      📱 100%
    </h3>

    <p className="relative z-10 mt-2 text-gray-300">
      Responsive Design
    </p>
  </div>

  {/* Technologies */}
  <div className="group relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]">

    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full px-5" />

    <h3 className="relative z-10 text-4xl font-black text-green-400">
      ⚡ 5+
    </h3>

    <p className="relative z-10 mt-2 text-gray-300">
      Technologies
    </p>
  </div>

  {/* Learning */}
  <div className="group relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-6 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-pink-400 hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]">

    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

    <h3 className="relative z-10 text-4xl font-black text-pink-400">
      🧠 24/7
    </h3>

    <p className="relative z-10 mt-2 text-gray-300">
      Learning Mindset
    </p>
  </div>

</div>
          </div>
        </div>
      </div>
    </section>
  );
}