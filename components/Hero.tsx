const heroStats = [
  { label: "Learners placed", value: "1.2k+" },
  { label: "Client projects", value: "450+" },
  { label: "Hiring partners", value: "180+" },
];

export function Hero() {
  return (
    <section id="home" className="space-y-10 text-center">
      <div className="space-y-6">
        <span className="inline-flex items-center justify-center rounded-full bg-[#48F4DC] px-6 py-2 text-slate-900 text-sm">
          Welcome to AV Academy!
        </span>

        <h1 className="text-4xl text-slate-900 sm:text-5xl lg:text-6xl">
          Learn skills that take you from classroom to career.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          AV Academy is a training-first school for students who want real,
          market-ready skills. Choose from{" "}
          <span className="font-semibold">Non-IT creative tracks</span> like
          Digital Marketing, 2D &amp; 3D Animation, Video Editing, Motion
          Graphics and VFX or <span className="font-semibold">IT tracks</span>{" "}
          like AI, Full-Stack Development, MERN / MEAN, Data Science and Data
          Analytics. Learn on live briefs, build projects and get
          industry-ready.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/courses"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:bg-black hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore courses
          </a>
          <a
            href="/contact"
            className="rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
          >
            Talk to admissions
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[48px] border border-slate-200 bg-white shadow-xl">
        <div className="absolute inset-x-8 top-6 h-16 rounded-full bg-linear-to-br from-white via-slate-100 to-white blur-3xl" />
        <div className="relative aspect-16/7 w-full overflow-hidden rounded-[48px] transform transition-transform duration-500 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.2),transparent_60%)]" />
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#101828,#0f172a)]">
            <img
              src="https://images.unsplash.com/photo-1585637071663-799845ad5212?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students learning at AV Academy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-3xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
