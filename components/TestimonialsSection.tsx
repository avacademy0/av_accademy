"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with AV Academy's team was a turning point for our brand - our social engagement doubled and footfall rose significantly within three months. Clear strategy, great creative, and measurable results.",
    name: "Rohit Mehra",
    role: "Founder - BrewZen Coffee",
    avatar: undefined,
  },
  {
    quote:
      "The hands-on approach and mentor feedback helped our intern become a productive member of the team in weeks. Practical briefs, honest reviews and project-based learning - highly recommend their academy programs.",
    name: "Nisha Rao",
    role: "Product Manager - TechStart",
    avatar: undefined,
  },
  {
    quote:
      "I learned real-world VFX and editing workflows that I now use daily at my job. The mentors were kind, thorough and pushed me to ship my best work couldn't be happier with the placement support.",
    name: "Priya Sharma",
    role: "Alumni - Motion Designer",
    avatar: undefined,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white/90 rounded-2xl p-8 md:p-12 lg:p-16">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 mb-8 text-center">
          <span className="inline-block bg-[#2fdfc7] text-[14px] md:text-xs px-3 py-1 rounded-full font-medium text-black">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Stories from Clients & Alumni
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-gray-600">
            Real outcomes from placement wins and student projects to
            measurable growth for brands we collaborated with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-transparent hover:shadow-md transition-shadow h-full flex flex-col"
              aria-label={`Testimonial by ${t.name}`}
            >
              <div className="mb-4 flex items-center gap-3">
                {/* Avatar: use provided avatar path or fallback initials */}
                {t.avatar ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#2fdfc7] inline-flex items-center justify-center text-black font-semibold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}

                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="inline-flex items-center bg-black rounded-full px-3 py-1">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="text-[#2fdfc7] stroke-[2px]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-sm md:text-base text-gray-700 mb-6 flex-1">
                “{t.quote}”
              </blockquote>

              <footer className="pt-2">
                <p className="text-xs text-gray-500">Verified feedback</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
