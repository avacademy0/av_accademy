"use client";

import Image from "next/image";
import { useState } from "react";

import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import logoAsset from "@/public/logo.png";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const mobileLinks = [
  ...primaryLinks,
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const courseHighlights = [
  {
    title: "Digital Marketing Pro",
    description: "Full-funnel performance + storytelling with live briefs.",
    href: "/courses",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "VFX & Motion Suite",
    description: "Compositing, color, and finishing labs with live feedback.",
    href: "/courses",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

const servicesShowcase = [
  {
    heading: "Build with Us",
    title: "Digital Products, Future-Ready Solutions",
    description:
      "From full-scale software development to modern web and mobile applications, we help you build powerful digital products that your users will genuinely love. Our team crafts seamless UI/UX systems, prototypes, dashboards, 2D/3D designs, immersive assets, and production-ready platforms. Whether it's custom tools, apps, websites, 3D models, or interactive experiences we engineer everything with precision, performance, and scalability.",
    href: "/services",
    src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    heading: "Grow with Us",
    title: "Performance, Visibility & Digital Growth Solutions",
    description:
      "We help brands scale through strategic digital marketing, SEO, paid media, influencer collaborations, and high-impact content. From building your online presence to running data-driven campaigns across platforms, we ensure measurable growth and sustained visibility. Whether you need social media management, performance ads, brand strategy, or full-funnel marketing we deliver holistic digital solutions that take your business to the next level.",
    href: "/services",
    src: "https://plus.unsplash.com/premium_photo-1661604346220-5208d18cb34e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-[0_10px_35px_rgba(15,15,15,0.08)] backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-3 md:px-6 py-2 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {/* LEFT: LOGO */}
        <div className="flex w-full items-center justify-between lg:w-auto">
          <a href="#home" className="flex items-center" aria-label="AV Academy">
            <Image
              src={logoAsset}
              alt="AV Academy logo"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition hover:border-slate-900 hover:bg-slate-50 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open navigation</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 rounded-full bg-slate-900 transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-slate-900 transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-slate-900 transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* CENTER: NAVIGATION (unchanged) */}
        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-900 hover:underline hover:underline-offset-8"
            >
              {link.label}
            </a>
          ))}

          {/* Courses + Services mega menu */}
          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 shadow-sm">
            <Menu setActive={setActive}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Courses"
                href="/courses"
              >
                <div className="grid gap-6 p-2 sm:grid-cols-2">
                  {courseHighlights.map((course) => (
                    <ProductItem key={course.title} {...course} />
                  ))}
                </div>
              </MenuItem>

              <MenuItem
                setActive={setActive}
                active={active}
                item="Services"
                href="/services"
              >
                <div className="grid gap-6 p-2 sm:grid-cols-2">
                  {servicesShowcase.map((service) => (
                    <ProductItem key={service.title} {...service} />
                  ))}
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* NEW: BLOG link */}
          <a
            href="/blog"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900 hover:underline hover:underline-offset-8"
          >
            Blog
          </a>
        </div>

        {/* RIGHT: CTA BUTTONS – moved right using ml-auto */}
        <div className="hidden items-center gap-3 lg:flex ml-auto">
          <a
            href="/enroll"
            className="rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Join Now
          </a>
          <a
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-slate-600">
            {mobileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/enroll"
              className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900"
            >
              Join Now
            </a>
            <a
              href="/contact"
              className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
