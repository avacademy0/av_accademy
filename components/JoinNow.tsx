"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JoinNow() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    qualification: "",
    experience: "",
    portfolio: "",
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
      const response = await fetch("/api/enroll", {
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
          qualification: "",
          experience: "",
          portfolio: "",
          message: "",
        });
        toast.success("Enrollment form submitted successfully! We'll contact you soon.");
      } else {
        setStatus("error");
        toast.error("Failed to submit enrollment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      toast.error("An error occurred. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#2fdfc7] text-[14px] px-3 py-1 rounded-full font-medium text-black">
            Student Enrollment
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900">
            Join AV Academy
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Start your journey with hands-on learning, expert mentorship, and real-world projects. Fill out the form below and our admissions team will get in touch with you.
          </p>
        </div>

        {/* Enrollment Form */}
        <div
          className="rounded-[28px] p-6 md:p-8 lg:p-10"
          style={{ backgroundColor: "#2fdfc7" }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                  Full Name <span className="text-red-600">*</span>
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                  required
                />
              </label>

              <label className="block">
                <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                  Email Address <span className="text-red-600">*</span>
                </span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                  required
                />
              </label>
            </div>

            {/* Phone and Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                  Phone Number <span className="text-red-600">*</span>
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                  required
                />
              </label>

              <label className="block">
                <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                  Address
                </span>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  type="text"
                  placeholder="City, State"
                  className="w-full px-4 py-2.5 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                />
              </label>
            </div>

            {/* Course Selection */}
            <label className="block">
              <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                Select Course <span className="text-red-600">*</span>
              </span>
              <Select
                onValueChange={(value) =>
                  setForm((p) => ({ ...p, course: value }))
                }
                value={form.course}
                required
              >
                <SelectTrigger className="w-full px-4 py-2.5 h-auto rounded-full bg-white border border-slate-200 text-sm text-slate-700 focus:ring-2 focus:ring-black shadow-sm cursor-pointer">
                  <SelectValue placeholder="Choose a course to enroll" />
                </SelectTrigger>
                <SelectContent side="bottom">
                  <SelectItem
                    value="Digital Marketing Pro"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    Digital Marketing Pro
                  </SelectItem>
                  <SelectItem
                    value="VFX & Motion Suite"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    VFX & Motion Suite
                  </SelectItem>
                  <SelectItem
                    value="2D Graphics & Designing"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    2D Graphics & Designing
                  </SelectItem>
                  <SelectItem
                    value="3D Graphics & Animation"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    3D Graphics & Animation
                  </SelectItem>
                  <SelectItem
                    value="Video Editing & Post Production"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    Video Editing & Post Production
                  </SelectItem>
                  <SelectItem
                    value="Graphic Design & Branding"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    Graphic Design & Branding
                  </SelectItem>
                  <SelectItem
                    value="MERN Stack Development"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    MERN Stack Development
                  </SelectItem>
                  <SelectItem
                    value="Full-Stack Development"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    Full-Stack Development
                  </SelectItem>
                  <SelectItem
                    value="Data Science"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    Data Science
                  </SelectItem>
                  <SelectItem
                    value="Data Analytics"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    Data Analytics
                  </SelectItem>
                  <SelectItem
                    value="AI Integration & Development"
                    className="cursor-pointer hover:bg-[#2fdfc7]/30"
                  >
                    AI Integration & Development
                  </SelectItem>
                </SelectContent>
              </Select>
            </label>

            {/* Qualification and Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                  Educational Qualification
                </span>
                <input
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g., B.Tech, B.A., High School"
                  className="w-full px-4 py-2.5 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
                />
              </label>

              <label className="block">
                <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                  Experience Level
                </span>
                <Select
                  onValueChange={(value) =>
                    setForm((p) => ({ ...p, experience: value }))
                  }
                  value={form.experience}
                >
                  <SelectTrigger className="w-full px-4 py-2.5 h-auto rounded-full bg-white border border-slate-200 text-sm text-slate-700 focus:ring-2 focus:ring-black shadow-sm cursor-pointer">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent side="bottom">
                    <SelectItem
                      value="Beginner"
                      className="cursor-pointer hover:bg-[#2fdfc7]/30"
                    >
                      Beginner
                    </SelectItem>
                    <SelectItem
                      value="Intermediate"
                      className="cursor-pointer hover:bg-[#2fdfc7]/30"
                    >
                      Intermediate
                    </SelectItem>
                    <SelectItem
                      value="Advanced"
                      className="cursor-pointer hover:bg-[#2fdfc7]/30"
                    >
                      Advanced
                    </SelectItem>
                    <SelectItem
                      value="Professional"
                      className="cursor-pointer hover:bg-[#2fdfc7]/30"
                    >
                      Professional
                    </SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>

            {/* Portfolio Link */}
            <label className="block">
              <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                Portfolio / GitHub / LinkedIn (Optional)
              </span>
              <input
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                type="url"
                placeholder="https://yourportfolio.com or https://github.com/username"
                className="w-full px-4 py-2.5 rounded-full bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
              />
            </label>

            {/* Message */}
            <label className="block">
              <span className="text-[14px] text-black/70 mb-2 inline-block font-medium">
                Additional Information / Questions
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your goals, expectations, or any questions you have..."
                className="w-full min-h-[120px] px-4 py-3 rounded-xl resize-none bg-white border-none text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm"
              />
            </label>

            {/* Submit Button */}
            <div className="flex items-center justify-start pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white rounded-full px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {status === "loading" ? "Submitting..." : "Submit Enrollment"}
              </button>
            </div>

            <p className="text-xs text-black/60 mt-4">
              By submitting this form, you agree to be contacted by AV Academy regarding your enrollment. We respect your privacy and will only use your information for admission purposes.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

