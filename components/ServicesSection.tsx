"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

const services = [
  {
    title: "Social & Performance",
    description:
      "Always-on growth strategy, channel ops, and paid media to amplify launches and cohorts.",
    points: [
      "Campaign architecture",
      "Content & calendars",
      "Performance reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Design & Product",
    description:
      "Product strategy, UI/UX, and interactive prototypes for web platforms and mobile experiences.",
    points: ["Design systems", "Web + app builds", "No-code handoff"],
    image:
      "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Post, Motion & VFX",
    description:
      "Edit lab, compositing, color, and finishing suites that ship narrative work for founders and brands.",
    points: ["Edit + grade", "3D/2D animation", "On-set supervision"],
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 md:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#48F4DC] px-2 py-[4px] rounded-full inline-block">
            What we do
          </p>

          <h2 className="text-3xl md:text-4xl text-slate-900 mt-3">
            Our Services
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Propel Your Presence with Proven Expertise
          </p>
        </div>
        <a
          href="/services"
          className="hidden md:inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md transition"
        >
          View capabilities
        </a>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {services.map((s, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={s.title} className="relative">
              {/* Collapsed pill (visible even when expanded to keep top border like screenshot) */}
              <button
                className={`w-full flex items-center justify-between rounded-full border border-black/80 bg-white px-5 py-3 hover:shadow-sm hover:-translate-y-0.5 transition ${
                  isOpen ? "ring-1 ring-black/10" : ""
                }`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="text-sm md:text-base font-medium text-slate-900">
                  {s.title}
                </span>

                <span className="ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#48F4DC] text-black">
                  <Plus size={14} />
                </span>
              </button>

              {/* Expanded content area */}
              <div
                className={`overflow-hidden transition-[max-height,margin] duration-300 ${
                  isOpen ? "max-h-[800px] mt-4" : "max-h-0 mt-0"
                }`}
              >
                <div className="rounded-2xl border border-black/20 bg-white p-6 md:p-8 relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Close X in top-right */}
                  <button
                    onClick={() => setOpenIndex(null)}
                    aria-label="Close"
                    className="absolute right-4 top-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#48F4DC] text-black shadow-sm"
                  >
                    <X size={14} />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Image left */}
                    <div className="md:col-span-5">
                      <div className="rounded-xl overflow-hidden h-44 md:h-56 bg-gray-100">
                        {/* Replace Image usage or keep a div placeholder if not using next/image */}
                        <Image
                          src={s.image}
                          alt={s.title}
                          width={800}
                          height={540}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content right */}
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
                        <a
                          href="/services"
                          className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md transition"
                        >
                          Learn more
                        </a>

                        <a
                          className="text-sm text-slate-600 hover:underline hover:text-slate-900 transition-colors"
                          href="/contact"
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

      {/* Mobile view capabilities button */}
      <div className="mt-6 md:hidden flex justify-center">
        <a
          href="/services"
          className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md transition"
        >
          View capabilities
        </a>
      </div>
    </section>
  );
}
