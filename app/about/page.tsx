"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#2fdfc7] text-[14px] px-3 py-1 rounded-full ">
              About us
            </span>

            <h1 className="text-4xl md:text-6xl text-slate-900 mt-6">
              Academy + Edit Lab Learn, Build, Launch
            </h1>

            <p className="mt-6 text-slate-700 text-base md:text-lg max-w-xl">
              We're not just a social media marketing agency we're your ticket
              to digital excellence and engagement growth. With a canvas as vast
              as the internet, your business has limitless potential to connect
              with its audience. And we're here to paint that picture of
              success.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center bg-black text-white px-5 py-3 rounded-full text-sm hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition"
              >
                Get in touch
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border border-slate-300 px-5 py-3 rounded-full text-sm hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md transition"
              >
                Book a call
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Office lobby"
              width={900}
              height={900}
              className="rounded-[36px] w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* COMPANY SNAPSHOT SECTION */}
      {/* -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 bg-gray-100 rounded-[36px] mb-20">
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block bg-[#2fdfc7] text-[14px] px-3 py-1 rounded-full">
              About AV Acadey
            </span>

            <h2 className="text-3xl mt-4">Our company snapshot</h2>

            <p className="text-sm text-slate-600 mt-3 max-w-2xl">
              Founded in Lucknow in 2025, AV Academy is a dual-model learning
              and production hub an academy that builds student careers through
              practical training, and an Edit Lab studio that delivers real
              client projects, giving learners genuine industry exposure.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-black text-white text-sm px-3 py-2 rounded-full mt-2 hidden md:inline-flex hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            Get in touch
          </a>
        </div>

        {/* SNAPSHOT GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[220px] lg:auto-rows-[260px]">
          <div className="bg-white rounded-[28px] p-8 shadow-sm border border-slate-100 md:col-span-4 md:row-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-6xl font-semibold text-slate-900">10+</h3>
              <p className="mt-10 text-base font-medium text-slate-800">
                Team members
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Our team plays a key role in shaping every student’s journey
                guiding, mentoring, and supporting them with real industry
                experience to help turn learning challenges into career
                milestones.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] md:col-span-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Studio collaboration"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="bg-slate-900 text-white rounded-[28px] p-8 shadow-sm md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-semibold">98%</h3>
              <p className="mt-6 text-base font-medium">Satisfaction rate</p>
              <p className="mt-3 text-sm text-white/80">
                With a 98% satisfaction rate across our cohorts, AV Academy
                continues to deliver impactful learning experiences and
                industry-ready project exposure.
              </p>
            </div>
          </div>

          <div className="bg-[#2fdfc7] rounded-[28px] p-8 shadow-sm md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-6xl font-semibold text-slate-900">50+</h3>
              <p className="mt-10 text-base font-medium text-slate-900">
                Happy clients
              </p>
              <p className="mt-3 text-sm text-slate-700">
                We support a wide range of students and creators, each with
                unique learning paths and career goals, helping them grow
                through real projects and mentorship.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] md:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1752579664702-e6609516e21a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working session"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* TEAM SECTION */}
      {/* -------------------------------------------------- */}
      <section id="team" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <span className="inline-block bg-[#2fdfc7] text-[14px] px-3 py-1 rounded-full font-medium">
          Meet Your Mentors
        </span>

        <h2 className="text-3xl mt-4">Our team</h2>
        <p className="text-sm text-slate-600 mt-2 mb-10">
          The Team Powering Every Cohort
        </p>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              name: "Virendra Singh",
              role: "Director",
              bio: "Leads AV Academy’s overall vision, partnerships, and strategic growth.",
              image: "/virendra.png",
              linkedin: "https://www.linkedin.com/in/virendra-singh/",
              portfolio: "https://www.linkedin.com/company/company-avacademy",
            },
            {
              name: "Shubham Kumar",
              role: "Team Lead / Senior SDE",
              bio: "Oversees engineering workflows, mentors developers, and architects core systems.",
              image: "/shubham.jpg",
              linkedin: "https://www.linkedin.com/in/shubham-kumar-69958232a/",
              portfolio: "https://shubhamsharma.dev",
            },
            {
              name: "Swapnil Soni",
              role: "3D Designer",
              bio: "Creates high-quality 3D models, animations, and visual assets for academy projects.",
              image: "/swapnil.png",
              linkedin: "https://www.linkedin.com/in/swapnil-3d/",
              portfolio: "https://dribbble.com/swapnil",
            },
            {
              name: "Dheeraj Chauhan",
              role: "Graphic Designer",
              bio: "Designs brand visuals, creative assets, and supports students with design critiques.",
              image: "/dheeraj.png",
              linkedin:
                "https://www.linkedin.com/in/dheeraj-chauhan-4a74a8239/",
            },
            {
              name: "Arush Singh",
              role: "AI Engineer",
              bio: "Builds AI-driven tools, workflows, and automation systems powering academy operations.",
              image: "/arush.png",
              linkedin: "https://www.linkedin.com/in/arushsingh03",
              portfolio: "https://www.dev-arush.info",
            },
          ].map((member, index) => {
            const isMintBackground = index % 2 === 1;
            return (
              <div
                key={member.name}
                className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col h-full"
              >
                <div
                  className={`h-56 rounded-xl overflow-hidden mb-5 ${
                    isMintBackground ? "bg-[#49F4E5]" : "bg-gray-200"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600">{member.role}</p>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 mb-4 flex-1">
                    {member.bio}
                  </p>

                  <div className="mt-auto flex gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#2fdfc7] p-1.5 rounded-full hover:bg-[#33d6c1] transition"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#2fdfc7] p-1.5 rounded-full hover:bg-[#33d6c1] transition"
                        aria-label={`${member.name} portfolio`}
                      >
                        <AssignmentIndIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* VALUES SECTION */}
      {/* -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 bg-gray-50 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
          <div>
            <span className="inline-block bg-[#2fdfc7] text-[14px] px-3 py-1 rounded-full font-medium">
              Why AV Academy
            </span>

            <h2 className="text-3xl md:text-4xl mt-4">
              We train, mentor and launch careers at scale.
            </h2>

            <p className="mt-3 text-slate-700 max-w-xl">
              AV Academy combines a skill-first curriculum with a production
              Edit Lab so students learn by doing and graduate with
              portfolio-ready projects, internships and hiring-ready experience.
            </p>
          </div>

          {/* Studio snapshot (uploaded file path used as-is) */}
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNhZGVteXxlbnwwfHwwfHx8MA%3D%3D"
              alt="AV Academy studio snapshot"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>

        {/* Big brag stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { value: "1.2k+", label: "Learners placed" },
            { value: "98%", label: "Learner satisfaction" },
            { value: "180+", label: "Hiring partners" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-slate-900">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Value cards — short, punchy, academy-focused */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Project-first learning",
              desc: "Every course is built around live briefs and real deliverables students graduate with actual work to show.",
            },
            {
              title: "Industry mentors",
              desc: "Faculty are working professionals they teach the tools, pipelines and judgement used in studios and agencies.",
            },
            {
              title: "Edit Lab access",
              desc: "Students work inside the same production environments we use for client projects the experience is studio-grade.",
            },
            {
              title: "Placement & outcomes",
              desc: "Resume clinics, mock interviews, hiring partner introductions we help students convert skills into jobs.",
            },
            {
              title: "Modern curriculum",
              desc: "Courses updated each term to include latest tools (AI, real-time 3D, advanced VFX, modern stacks) so grads stay relevant.",
            },
            {
              title: "Lifelong community",
              desc: "Alumni access, project collaboration and ongoing mentor hours keep careers moving long after graduation.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/courses"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 transition"
          >
            Explore student tracks
          </a>
          <a
            href="/contact"
            className="inline-flex items-center border border-slate-200 px-6 py-3 rounded-full text-sm hover:bg-slate-900 hover:text-white transition"
          >
            Talk to admissions
          </a>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* FINAL CTA SECTION */}
      {/* -------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 mb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-gray-100 p-8 md:p-10 rounded-2xl">
          {/* LEFT */}
          <div>
            <span className="inline-block bg-[#2fdfc7] text-[14px] px-3 py-1 rounded-full font-medium">
              Get in touch
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold mt-4">
              Ready to learn or build with us?
            </h2>

            <p className="text-sm text-slate-600 mt-4 max-w-md">
              Whether you want to join a cohort, book a demo class, or discuss a
              studio project — our admissions and Edit Lab teams will map a path
              that fits your goals. Quick calls, personalised guidance, and real
              project opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="/courses"
                className="inline-flex items-center bg-black text-white px-5 py-3 rounded-full text-sm font-semibold shadow hover:bg-gray-900 transition"
                aria-label="Explore student tracks"
              >
                Explore courses
              </a>

              <a
                href="/contact"
                className="inline-flex items-center border border-slate-300 px-5 py-3 rounded-full text-sm hover:bg-slate-900 hover:text-white transition"
                aria-label="Contact admissions"
              >
                Talk to admissions
              </a>

              <a
                href="mailto:avacademy1706@gmail.com"
                className="ml-0 sm:ml-2 text-sm text-slate-600 hover:underline"
              >
                or email us
              </a>
            </div>

            {/* small trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="inline-flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#2fdfc7]"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>1.2k+ learners placed</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#2fdfc7]"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2v20M2 12h20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>98% learner satisfaction</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* If using next/image: import Image and replace <img> accordingly */}
            <img
              src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AV Academy studio and student projects"
              width={900}
              height={520}
              className="w-full h-[340px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
