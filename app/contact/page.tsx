"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import FAQSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import { Navbar } from "@/components/Navbar";

export default function ContactPage() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          course: "",
          message: "",
        });
        toast.success("Message sent successfully!");
      } else {
        setStatus("error");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      toast.error("An error occurred. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  const sections = [
    {
      heading: "Talk with admissions",
      body: "Share the skills you want to sharpen and we'll recommend the cohort, mentor hours, or custom sprint that fits best.",
      points: [
        "Email : avacademy1706@gmail.com with your portfolio or goals",
        "WhatsApp or call : +91 96759 03348 (Mon-Sat, 10am-7pm IST)",
        "Expect a response within one business day",
      ],
    },
    {
      heading: "Visit the studio",
      body: "Our Lucknow HQ hosts weekly open hours for prospective learners and partners. Drop by to see the labs, meet mentors, and explore collaboration.",
      points: [
        "3rd Floor, Sai Tower, Sector 3, Vrindavan Colony",
        "Walk-ins welcome on Fridays & Saturday, 12 PM - 4 PM",
        "Book a private walkthrough via calendar link",
      ],
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Contact split (left text + right lime form) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: copy + small contact items */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#48F4DC] text-[14px] px-2.5 py-1 rounded-full font-medium text-black">
              Get in touch
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl text-slate-900">
              Contact us
            </h1>

            <p className="mt-6 text-slate-700 max-w-xl">
              Ready to transform your brand's digital presence and unlock the
              full potential of social media marketing? Reach out today, and
              let's start crafting your success story together.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#48F4DC]">
                  <Mail size={16} className="text-black" />
                </span>
                <a
                  href="mailto:avacademy1706@gmail.com"
                  className="hover:underline"
                >
                  avacademy1706@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#48F4DC]">
                  <Phone size={16} className="text-black" />
                </span>
                <a href="tel:01234567890" className="hover:underline">
                  +91 96759 03348
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#48F4DC]">
                  <MapPin size={16} className="text-black" />
                </span>
                <address className="not-italic">
                  3rd Floor, Sai Tower, <br /> Sector 3, Vrindavan Colony,{" "}
                  <br /> Lucknow, Uttar Pradesh - 226029
                </address>
              </li>
            </ul>
          </div>

          {/* RIGHT: styled lime form card */}
          <div className="lg:col-span-5">
            <div
              className="rounded-[28px] p-6 md:p-8"
              // neon lime background similar to your screenshot
              style={{ backgroundColor: "#48F4DC" }}
            >
              {/* Form header area (optional small row of labels) */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-[14px] text-black/70 mb-2 inline-block">
                      Name
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-[14px] text-black/70 mb-2 inline-block">
                      Email
                    </span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                      required
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-[14px] text-black/70 mb-2 inline-block">
                      Phone
                    </span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[14px] text-black/70 mb-2 inline-block">
                      Address
                    </span>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your address"
                      className="w-full px-4 py-2 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-[14px] text-black/70 mb-2 inline-block">
                      Course
                    </span>
                    <Select
                      onValueChange={(value) =>
                        setForm((p) => ({ ...p, course: value }))
                      }
                      value={form.course}
                    >
                      <SelectTrigger className="w-full px-4 py-2 h-auto rounded-full bg-white border border-slate-200 text-sm text-slate-700 focus:ring-2 focus:ring-black shadow-sm cursor-pointer">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent side="bottom">
                        <SelectItem
                          value="Artificial Intelligence"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          1. Artificial Intelligence
                        </SelectItem>
                        <SelectItem
                          value="Digital Marketing"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          2. Digital Marketing
                        </SelectItem>
                        <SelectItem
                          value="Graphic Design"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          3. Graphic Design
                        </SelectItem>
                        <SelectItem
                          value="3D Animation"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          4. 3D Animation
                        </SelectItem>
                        <SelectItem
                          value="Video Editing"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          5. Video Editing
                        </SelectItem>
                        <SelectItem
                          value="VFX"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          6. VFX
                        </SelectItem>
                        <SelectItem
                          value="Full Stack Development"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          7. Full Stack
                        </SelectItem>
                        <SelectItem
                          value="MERN Stack Development"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          8. MERN Stack
                        </SelectItem>
                        <SelectItem
                          value="MEAN Stack Development"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          9. MEAN Stack
                        </SelectItem>
                        <SelectItem
                          value="Data Science"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          10. Data Science
                        </SelectItem>
                        <SelectItem
                          value="Data Analytics"
                          className="cursor-pointer hover:bg-[#48F4DC]/30"
                        >
                          11. Data Analytics
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-[14px] text-black/70 mb-2 inline-block">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    className="w-full min-h-[140px] px-4 py-3 rounded-xl resize-none bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                  />
                </label>

                <div className="flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-black text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse FAQ section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <FAQSection />
      </div>

      {/* Additional contact sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-slate-200"
            >
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-sm text-slate-700 mb-6">{section.body}</p>
              <ul className="space-y-3">
                {section.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#48F4DC] text-black text-xs font-semibold mt-0.5 shrink-0">
                      {pointIndex + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <FooterSection />
      </footer>
    </main>
  );
}
