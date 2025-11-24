"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const nonItCourses = [
  {
    id: "dm-pro",
    title: "Digital Marketing Pro",
    short:
      "Performance marketing, content strategy, SEO and storytelling through live briefs and portfolio work.",
    tags: ["Paid", "Organic", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "vfx-suite",
    title: "VFX & Motion Suite",
    short:
      "Compositing, motion graphics, finishing and studio workflows used to ship professional reels.",
    tags: ["Motion", "VFX"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "2d-graphics",
    title: "2D Graphics & Designing",
    short:
      "Master illustration, layout design, color theory, typography, and digital drawing to create professional 2D artworks and brand assets.",
    tags: ["2D", "Design"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3d-graphics",
    title: "3D Graphics & Animation",
    short:
      "Modeling, lighting, texturing and animation with real client-style projects and mentor reviews.",
    tags: ["3D", "CG"],
    image:
      "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "video-editing",
    title: "Video Editing & Post Production",
    short:
      "Editing, grading, sound design and production pipelines to build cinematic portfolio pieces.",
    tags: ["Editing", "Post"],
    image:
      "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    short:
      "Design fundamentals, brand systems and campaign production that help you lead creative projects.",
    tags: ["Design", "Brand"],
    image:
      "https://plus.unsplash.com/premium_photo-1661293878449-979990331350?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const itCourses = [
  {
    id: "mern-dev",
    title: "MERN Stack Development",
    short:
      "Build full-stack apps with MongoDB, Express, React and Node using product-focused briefs.",
    tags: ["JS", "React"],
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    short:
      "Modern web architecture, APIs, deployment and industry coding practices for production-ready apps.",
    tags: ["APIs", "Dev"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "data-science",
    title: "Data Science",
    short:
      "Python, ML models and applied workflows to turn data into portfolio-worthy projects.",
    tags: ["ML", "Python"],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    short:
      "SQL, dashboards, Power BI and reporting to answer real business questions with data.",
    tags: ["Analytics", "BI"],
    image:
      "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "ai",
    title: "AI Integration & Development",
    short:
      "Learn to build AI-powered applications using modern LLMs, automation tools, APIs, and real-world integration workflows.",
    tags: ["AI", "ML"],
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const highlighted = [
  {
    id: "dm-pro",
    title: "Digital Marketing Pro",
    short:
      "Digital Marketing is one of the fastest-growing and most impactful skillsets in today’s digital economy. It focuses on understanding how audiences behave online and using that knowledge to promote brands, build communities, and drive measurable business growth. Through platforms like Instagram, Facebook, Google Ads, YouTube, and LinkedIn, marketers plan and execute strategies that increase visibility, generate leads, and convert customers. The field blends creativity with analytics from crafting compelling content, designing engaging campaigns, and building brand identities, to running performance ads, optimizing SEO, analyzing user data, and improving ROI through targeted strategies. As the digital landscape evolves with AI-driven automation, influencers, and advanced tracking tools, digital marketers must stay agile, innovative, and data-driven. It is a career that rewards curiosity, creativity, and strategic thinking, offering endless opportunities in agencies, startups, brands, and freelance careers.",
    tags: ["Paid", "Organic"],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "vfx-suite",
    title: "VFX & Motion Suite",
    short:
      "Compositing, motion graphics and finishing labs studio pipelines and mentor feedback.",
    tags: ["Motion", "VFX"],
    image:
      "https://images.unsplash.com/photo-1501780392773-287d506245a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mern-dev",
    title: "MERN Stack Development",
    short:
      "Build production-ready web apps with real product briefs and deployment workflows.",
    tags: ["Full-stack", "React"],
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "3d-graphics",
    title: "3D Graphics & Animation",
    short:
      "Modeling, lighting and animation for games, films and real-time experiences.",
    tags: ["3D", "CG"],
    image:
      "https://plus.unsplash.com/premium_photo-1682124746623-23f28d0cb7b9?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CoursesPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#48F4DC] text-[14px] px-3 py-1 rounded-full text-black">
            Courses
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl">
            Learn industry skills. Build real projects. Launch your career.
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            AV Academy trains students for creative and technical careers
            through hands-on learning, expert mentorship, live briefs and studio
            production. Choose your track Non-IT (creative) or IT (technical)
            and start building portfolio-grade work from day one.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold transition hover:bg-black hover:-translate-y-0.5 hover:shadow-lg"
            >
              Talk to admissions
            </a>

            <a
              href="/courses#tracks"
              className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-full text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore tracks
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT BENTO GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-12">
        <div className="bg-gray-200 rounded-[20px] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-fr">
            {highlighted.map((c, i) => {
              // layout: featured large card (index 0) + 3 supporting cards
              const layoutConfig = [
                {
                  className: "lg:col-span-6 lg:row-span-2",
                  imgClass: "h-64 md:h-72 lg:h-[420px]",
                },
                {
                  className: "lg:col-span-6 lg:row-span-1",
                  imgClass: "h-44 md:h-56 lg:h-56",
                },
                {
                  className: "lg:col-span-3 lg:col-start-7 lg:row-span-1",
                  imgClass: "h-44 md:h-48 lg:h-48",
                },
                {
                  className: "lg:col-span-3 lg:col-start-10 lg:row-span-1",
                  imgClass: "h-44 md:h-48 lg:h-48",
                },
              ];

              const cfg =
                layoutConfig[i] ?? layoutConfig[layoutConfig.length - 1];

              return (
                <article
                  key={c.id}
                  className={`bg-white rounded-2xl p-5 border shadow-sm flex flex-col overflow-hidden ${cfg.className}`}
                >
                  {/* Image wrapper: fixed predictable height per breakpoint so object-cover works consistently */}
                  <div
                    className={`rounded-xl overflow-hidden mb-5 w-full ${cfg.imgClass} relative`}
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">{c.short}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#48F4DC] text-black text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACKS: Non-IT & IT — Toggleable full grids */}
      <section
        id="tracks"
        className="max-w-6xl mx-auto px-6 md:px-10 pb-20 mt-20"
      >
        {/* Intro */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">Two learning paths</h2>
          <p className="text-sm text-slate-600 mt-2">
            Non-IT (creative) and IT (technical) tracks, each with studio-led
            projects and mentor support.
          </p>
        </div>

        {/* Non-IT */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Non-IT - Creative tracks</h3>
            <p className="text-sm text-slate-500">
              Digital marketing, animation, VFX, editing & more
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonItCourses.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-xl p-4 border shadow-sm flex flex-col overflow-hidden"
              >
                <div className="rounded-lg overflow-hidden mb-4">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={1200}
                    height={800}
                    className="w-full h-44 object-cover"
                  />
                </div>

                <h3 className="text-md font-semibold text-slate-900 mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{c.short}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#48F4DC] text-black text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* IT */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">IT - Technical tracks</h3>
            <p className="text-sm text-slate-500">
              Full-stack, AI, Data Science and analytics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itCourses.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-xl p-4 border shadow-sm flex flex-col overflow-hidden"
              >
                <div className="rounded-lg overflow-hidden mb-4">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={1200}
                    height={800}
                    className="w-full h-44 object-cover"
                  />
                </div>

                <h3 className="text-md font-semibold text-slate-900 mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{c.short}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#48F4DC] text-black text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-28">
        <div className="bg-gray-100 rounded-[20px] p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:flex-1">
            <span className="inline-block bg-[#48F4DC] text-[14px] px-2.5 py-1 rounded-full font-medium text-black">
              Get in touch
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Ready to start?
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl">
              Talk to admissions to pick the right course, cohort or scholarship
              option. Your career transformation starts with the first step.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full text-sm font-semibold transition hover:bg-black hover:-translate-y-0.5 hover:shadow-lg"
                href="/contact"
              >
                Talk to admissions
              </a>

              <a
                className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-full text-sm font-semibold transition hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                href="/contact"
              >
                Book a demo class
              </a>
            </div>
          </div>

          <div className="lg:w-[360px] lg:shrink-0">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1170&auto=format&fit=crop"
                alt="Workspace"
                width={800}
                height={600}
                className="w-full h-44 md:h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
