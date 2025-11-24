"use client";

import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing:", email);
    // Add your subscription logic here
    setEmail("");
  };

  return (
    <footer className="bg-white w-full mt-10 md:mx-0 lg:mx-0 px-6 md:px-10 lg:px-16 py-10 md:py-16 rounded-none border-t-2 border-gray-200 ">
      <div className="mx-auto w-full">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 items-start">
          {/* Logo + Newsletter (left block) */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div>
              <img src="/av.png" alt="av" className="w-25 h-25 bg-black mb-10 rounded-2xl" />
            </div>

            {/* Newsletter card (lime rounded rectangle) */}
            <div className="bg-[#48F4DC] md:bg-[#48F4DC] rounded-[28px] p-8 md:w-110">
              <p className="text-black font-medium mb-4 text-sm md:text-base">
                Join our newsletter to stay up to date.
              </p>

              {/* input + button side by side */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full flex-1 rounded-full bg-white placeholder-gray-500 px-5 py-3 text-sm md:text-base border-none outline-none"
                />

                <button
                  onClick={handleSubscribe}
                  className="bg-black text-white rounded-full px-6 py-3 font-medium hover:bg-gray-800 transition-colors text-sm md:text-base whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-black opacity-80 leading-relaxed">
                By subscribing you agree to our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
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
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#48F4DC] hover:text-slate-900"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#48F4DC] hover:text-slate-900"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#48F4DC] hover:text-slate-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#48F4DC] hover:text-slate-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm md:text-base text-gray-600 rounded-full px-3 py-1 transition-colors hover:bg-[#48F4DC] hover:text-slate-900"
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
                      className="stroke-[2px] text-[#48F4DC]"
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
                      className="stroke-[2px] text-[#48F4DC]"
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
                      className="stroke-[2px] text-[#48F4DC]"
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
              <a href="#" className="underline hover:text-black">
                AV Academy®
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
