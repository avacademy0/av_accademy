"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import WorkSection from "@/components/WorkSection";
import FooterSection from "@/components/FooterSection";
import { Navbar } from "@/components/Navbar";

function ServicesAccordion() {
  const services = [
    {
      title: "Social Media Marketing",
      description:
        "Craft a compelling story designed to enthral your audience. We understand the science and art behind viral campaigns, creating strategies that spark conversations and build communities.",
      points: [
        "Creative content & reels",
        "Organic growth systems",
        "Community management",
      ],
      image:
        "https://images.unsplash.com/photo-1676285437320-aa861c6967e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Advertising",
      description:
        "Performance-first ad strategies that scale. We combine creative testing with audience funnels, attribution and optimization to deliver predictable growth.",
      points: [
        "Full-funnel ads",
        "Audience research",
        "Reporting & optimisation",
      ],
      image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Engagement Growth",
      description:
        "Tactical programs that convert attention into long-term customers combining influencer programs, CRO for landing pages, and retention flows.",
      points: [
        "Influencer partnerships",
        "Retention & funnels",
        "CRO experiments",
      ],
      image:
        "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Development & Tech Solutions",
      description:
        "End-to-end development services covering web and mobile apps, AI agent integrations, backend systems, and immersive AR/VR experiences. We build scalable, high-performance digital products tailored for real-world impact.",
      points: [
        "Web & mobile app development",
        "AI agents & automation workflows",
        "AR/VR & Meta Quest experiences",
      ],
      image:
        "https://images.unsplash.com/photo-1726607424623-6d9fee974241?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      <div className="bg-gray-100 rounded-[20px] p-8 md:p-10">
        <span className="inline-block bg-[#48F4DC] text-[14px] px-2.5 py-1 rounded-full font-medium mb-4">
          What we do
        </span>

        <h2 className="text-3xl text-slate-900 mb-2">Our Services</h2>
        <p className="text-sm text-slate-600 mb-6">
          Propel Your Presence with Proven Expertise
        </p>

        <div className="space-y-4">
          {services.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={s.title} className="relative">
                {/* Pill button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between rounded-full border border-black/80 bg-white px-5 py-3 transition ${
                    isOpen ? "ring-1 ring-black/10" : ""
                  }`}
                >
                  <span className="text-sm md:text-base font-medium text-slate-900">
                    {s.title}
                  </span>

                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#48F4DC] text-black">
                    <Plus size={14} />
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-[max-height,margin] duration-300 ${
                    isOpen ? "max-h-[900px] mt-4" : "max-h-0 mt-0"
                  }`}
                >
                  <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 relative">
                    <button
                      onClick={() => setOpenIndex(null)}
                      aria-label="Close"
                      className="absolute right-4 top-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#48F4DC] text-black"
                    >
                      <X size={14} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-5">
                        <div className="rounded-xl overflow-hidden h-44 md:h-56 bg-gray-100">
                          {/* use next/image if desired */}
                          <Image
                            src={s.image}
                            alt={s.title}
                            width={800}
                            height={540}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-7">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                          {s.title}
                        </h3>
                        <p className="text-sm text-slate-700 mb-4">
                          {s.description}
                        </p>

                        <ul className="flex flex-wrap gap-3 mb-6">
                          {s.points.map((p) => (
                            <li
                              key={p}
                              className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-800"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-4">
                          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                            Learn more
                          </button>
                          <a
                            className="text-sm text-slate-600 hover:underline"
                            href="#contact"
                          >
                            Contact us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* ---------------------------
  Company Snapshot (exact tile grid)
----------------------------*/
function CompanySnapshot() {
  const tiles = [
    {
      value: "98%",
      title: "Client Satisfaction Score",
      body: "With a dedicated team across development, design, marketing, and AR/VR production, AV Academy maintains a 98% satisfaction rate by delivering projects that exceed expectations and create real business results.",
      color: "black",
    },
    {
      value: "50+",
      title: "Brands We’ve Worked With",
      body: "From startups to global companies, we’ve helped 236+ clients scale through strategic digital marketing, powerful designs, product development, AI workflows, and immersive 3D/AR/VR solutions.",
      color: "lime",
    },
    {
      value: "100%",
      title: "Commitment to Quality",
      body: "Every project whether it's a website, mobile app, AI agent, 3D model, or a full marketing campaign is executed with complete focus, precision, and craftsmanship. No shortcuts, only excellence.",
      color: "black",
    },
    {
      value: "30+",
      title: "Years in Digital Creation",
      body: "A decade of building products and experiences, from full-stack applications and AI systems to 2D/3D design, branding, digital marketing, and Meta Quest AR/VR experiences for diverse industries.",
      color: "lime",
    },
    {
      value: "4",
      title: "Countries We Serve",
      body: "Our design, development, and marketing teams collaborate with clients across 21 countries, creating culturally adaptive digital products, brand experiences, and cutting-edge immersive solutions.",
      color: "black",
    },
    {
      value: "24/7",
      title: "Always-On Team Support",
      body: "Whether you're launching a campaign, building a product, or experimenting with AI/AR/VR, our team provides round-the-clock support to keep everything running smoothly and at full momentum.",
      color: "lime",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="inline-block bg-[#48F4DC] text-[14px] px-2.5 py-[4px] rounded-full font-medium text-black">
            Some stats
          </span>
          <h2 className="text-3xl font-semibold mt-4">Our company snapshot</h2>
          <p className="text-sm text-slate-600 mt-3 max-w-2xl">
            Founded in Manchester in 2011, AV Academy is a cutting-edge social
            media marketing agency that empowers brands with tailored
            strategies, driving engagement and growth.
          </p>
        </div>
        <div className="hidden md:block">
          <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
            Get in touch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {tiles.map((t, idx) => {
          const isLime = t.color === "lime";
          return (
            <div
              key={idx}
              className={`rounded-2xl p-6 h-full ${
                isLime ? "bg-[#48F4DC] text-black" : "bg-black text-white"
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold">{t.value}</div>
              <div className="mt-4 font-semibold">{t.title}</div>
              <p
                className={`mt-3 text-sm ${
                  isLime ? "text-slate-900" : "text-slate-200"
                }`}
              >
                {t.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------
  Page: combines everything
----------------------------*/
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      {/* HERO — match screenshot: left text, right rounded image */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#48F4DC] text-[14px] px-2.5 py-1 rounded-full text-black">
              Our services
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl text-slate-900">
              AV Edit Lab - Your Full Stack Creative, Tech & Marketing Studio
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-700 max-w-xl">
              We’re a multidisciplinary studio offering end-to-end solutions
              across design, development, marketing, and immersive technologies.
              From web & mobile app development, AI agent integration, and Meta
              Quest AR/VR experiences to 2D/3D design, branding, and full-scale
              digital marketing, Our team turns ideas into high-impact digital
              products and a powerful brand presence.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full text-sm font-semibold transition hover:bg-black hover:-translate-y-0.5 hover:shadow-lg"
                href="/contact"
              >
                Get in touch
              </a>
              <a
                className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-full text-sm font-semibold hover:bg-slate-900 hover:text-white transition hover:-translate-y-0.5 hover:shadow-md"
                href="/contact"
              >
                Book a call
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[36px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Office"
                width={900}
                height={900}
                className="object-cover w-full h-[520px] rounded-[36px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reuse WorkSection (Contact Us) */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12">
        <ServicesAccordion />
        <WorkSection />
      </div>

      {/* Company snapshot */}
      <CompanySnapshot />

      {/* Services accordion */}

      {/* Footer */}
      <div className="mt-12">
        <FooterSection />
      </div>
    </main>
  );
}
