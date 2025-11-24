"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";


const workData = [
  {
    title: "GlowEssence Skincare",
    description: "Illuminating GlowEssence's brand with a clean visual identity and high-converting social campaigns.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
    tags: ["Branding", "Instagram", "Content"],
  },
  {
    title: "BrewZen Coffee",
    description: "Full-funnel content, influencer collaborations and product photography for BrewZen's seasonal launches.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80",
    tags: ["Instagram", "Influencer", "Photo"],
  },
  {
    title: "BurgerHaven Restaurant",
    description: "Local SEO + paid campaigns + mouth-watering creative to boost D2C orders and footfall.",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1400&q=80",
    tags: ["PPC", "SEO", "Creative"],
  },
];

export default function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <span className="inline-block bg-[#48F4DC] text-[14px] px-3 py-1 rounded-full font-medium text-black mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Recent work & student projects
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              A mix of agency campaigns and academy project work from branding and product shoots to paid media funnels and hands-on student briefs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/about"
              className="hidden sm:inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition text-sm whitespace-nowrap"
            >
              View all projects <ArrowUpRight size={16} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-full text-sm hover:shadow-sm transition"
            >
              Talk to us <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workData.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-transform cursor-pointer flex flex-col"
              onClick={() => setActiveIndex(index)}
            >
              {/* Image area */}
              <div className="w-full h-56 md:h-60 rounded-xl overflow-hidden mb-4 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>

              {/* Title & description */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 line-clamp-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#48F4DC] text-black text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-gray-800">View project</span>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="max-w-4xl w-full rounded-2xl bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-96">
              <Image
                src={workData[activeIndex].image}
                alt={workData[activeIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {workData[activeIndex].title}
              </h3>
              <p className="text-gray-700 mb-4">{workData[activeIndex].description}</p>
              <div className="flex flex-wrap gap-2">
                {workData[activeIndex].tags.map((t, i) => (
                  <span key={i} className="bg-[#48F4DC] text-black text-xs px-3 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveIndex(null)}
                  className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
