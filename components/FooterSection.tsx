"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-white w-full mt-10 md:mx-0 lg:mx-0 px-6 md:px-10 lg:px-16 py-10 md:py-16 rounded-none border-t-2 border-gray-200 ">
      <div className="mx-auto w-full">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 items-start">
          {/* Brand intro (left block) */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-black text-[#2fdfc7] flex items-center justify-center text-lg font-semibold tracking-wide">
                <img src="/logo.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-semibold text-black">
                  AV Academy
                </p>
                <p className="text-sm text-gray-500">Learn. Build. Scale.</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We craft industry-ready creators with hands-on mentorship, live
              cohorts, and real client projects across design, tech, and growth.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-800 text-sm md:text-base">
              <div>
                <p className="text-2xl font-semibold text-black">50+</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">
                  Projects shipped
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-black">20+</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">
                  Expert mentors
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black px-5 py-2 text-sm md:text-base font-medium text-black transition hover:bg-black hover:text-white"
            >
              Talk to our team
            </a>
          </div>

          {/* Quick Links */}
          <div className="pt-2 md:ml-40 sm:ml-20">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-black">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="/about"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#2fdfc7] hover:text-slate-900"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#2fdfc7] hover:text-slate-900"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#2fdfc7] hover:text-slate-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#2fdfc7] hover:text-slate-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#2fdfc7] hover:text-slate-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-2 md:ml-5">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-black">
              Contact
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-600">
              <li className="text-sm md:text-base">+91 96759 03348</li>
              <li>
                <a
                  href="mailto:info@avacademy.agency"
                  className="text-sm md:text-base hover:text-black transition-colors"
                >
                  info@avacademy.agency
                </a>
              </li>
              <li className="text-sm md:text-base leading-relaxed">
                3rd Floor, Sai Tower,
                <br />
                Sector 3, Vrindavan Colony,
                <br />
                Lucknow, Uttar Pradesh 226029
              </li>
            </ul>
          </div>

          {/* Follow Us (right column) */}
          <div className="pt-2">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-black">
              Follow us
            </h3>

            <ul className="space-y-3 md:space-y-4">
              {/* Each item: black circular bg, icon with lime color */}
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576712702551"
                  className="flex items-center gap-3 text-sm md:text-base text-gray-600 hover:text-black transition-colors"
                >
                  <div className="bg-black rounded-full p-2 flex items-center justify-center w-9 h-9">
                    <Facebook
                      className="stroke-[2px] text-[#2fdfc7]"
                      size={16}
                    />
                  </div>
                  <span>Facebook</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/av___academy/"
                  className="flex items-center gap-3 text-sm md:text-base text-gray-600 hover:text-black transition-colors"
                >
                  <div className="bg-black rounded-full p-2 flex items-center justify-center w-9 h-9">
                    <Instagram
                      className="stroke-[2px] text-[#2fdfc7]"
                      size={16}
                    />
                  </div>
                  <span>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/company-avacademy/?originalSubdomain=in"
                  className="flex items-center gap-3 text-sm md:text-base text-gray-600 hover:text-black transition-colors"
                >
                  <div className="bg-black rounded-full p-2 flex items-center justify-center w-9 h-9">
                    <Linkedin
                      className="stroke-[2px] text-[#2fdfc7]"
                      size={16}
                    />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-900 mt-6" />

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-600">
          <p className="w-full md:w-auto text-left">
            © 2025 AV Academy –{" "}
            <a href="#licensing" className="underline hover:text-black">
              Licensing
            </a>
          </p>

          <div className="w-full md:w-auto text-right">
            <span>
              Designed by{" "}
              <a href="https://www.dev-arush.info" className="underline hover:text-black">
                Arush®
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
