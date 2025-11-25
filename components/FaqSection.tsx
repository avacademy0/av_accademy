"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Which courses do you offer?",
    answer:
      "We offer career-focused tracks across two streams: Non-IT (Digital Marketing, 2D & 3D Animation, Video Editing, Motion Graphics, VFX) and IT (AI, Full-Stack Development, MERN/MEAN, Data Science & Data Analytics). Each course includes live briefs, hands-on projects and mentor feedback.",
  },
  {
    question: "How are classes delivered?",
    answer:
      "Classes are a mix of live instructor-led sessions, hands-on lab work and self-paced study. Expect project-based briefs, weekly mentor hours, peer reviews and recorded lessons for revision.",
  },
  {
    question: "Who teaches the courses?",
    answer:
      "Our faculty are industry practitioners senior engineers, 3D artists, VFX editors and marketing leads  who teach practical workflows and mentor students on real projects to build professional portfolios.",
  },
  {
    question: "Do you provide placement support?",
    answer:
      "Yes. Students get career services including resume reviews, mock interviews, portfolio guidance and introductions to hiring partners. Top performers are prioritised for placement and internship opportunities.",
  },
  {
    question: "What are the admission requirements?",
    answer:
      "Most courses are open to beginners and professionals. Some advanced tracks may require a short pre-assessment or basic familiarity with the domain. Admissions details are listed per course on the course page.",
  },
  {
    question: "How do I apply or book a counselling session?",
    answer:
      "Use the contact form or book a call via the 'Talk to admissions' link. Share your background and goals our admissions team will recommend the right cohort, course schedule and any scholarship or financing options available.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white/60 rounded-[28px] p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
      {/* Small badge + heading */}
      <div className="text-center mb-8">
        <span className="inline-block bg-[#2fdfc7] text-[14px] md:text-xs px-3 py-1 rounded-full font-medium text-black mb-3">
          Student FAQs
        </span>

        <h2 className="text-2xl md:text-3xl text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          Answers for prospective students & applicants
        </p>
      </div>

      {/* FAQ list */}
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.question} className="relative" aria-live="polite">
              {/* Question pill */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full group flex items-center justify-between rounded-full border-2 border-black/90 bg-white px-5 py-3 text-left hover:shadow-sm transition"
              >
                <span className="text-sm md:text-base font-medium text-gray-900">
                  {f.question}
                </span>

                {/* small lime circle with + / - */}
                <span
                  className="ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2fdfc7] text-black"
                  aria-hidden
                >
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {/* Animated answer area */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[400px] mt-3" : "max-h-0"
                }`}
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-5 text-sm text-gray-600">
                  {f.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-8 md:mt-10">
        <div className="bg-[#2fdfc7] rounded-[20px] p-6 md:p-8 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
            Still unsure which course fits you?
          </h3>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Book a free counselling session we’ll map a learning path that
            suits your goals and timeline.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-black text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md transition"
            >
              Talk to admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
