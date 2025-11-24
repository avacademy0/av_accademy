"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/**
 * Helper: split text into chunks of N words.
 * Change the default wordsPerLine to control how many words appear per "line" block.
 */
function splitByWords(text: string | undefined, wordsPerLine = 8) {
  if (!text) return [];
  const words = text.trim().split(/\s+/);
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    chunks.push(words.slice(i, i + wordsPerLine).join(" "));
  }
  return chunks;
}

export function MenuItem({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href: string;
  children?: ReactNode;
}) {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onFocus={() => setActive(item)}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -4, color: "#0f172a" }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={href}
          className="cursor-pointer text-white font-semibold tracking-wide hover:opacity-90"
        >
          {item}
        </Link>
      </motion.div>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%+1.2rem)] -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-white/20 bg-black shadow-xl backdrop-blur"
              >
                {/* IMPORTANT: allow shrinking and cap width so long text wraps */}
                <motion.div layout className="h-full p-4 w-max">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export function Menu({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: ReactNode;
}) {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-6 rounded-full border border-white/20 bg-black px-6 py-3 shadow-[0_6px_20px_rgba(255,255,255,0.1)]"
    >
      {children}
    </nav>
  );
}

export function ProductItem({
  heading,
  title,
  description,
  href,
  src,
}: {
  heading?: string;
  title: string;
  description: string;
  href: string;
  src: string;
}) {
  // Change the number (12) below to control words per generated "line"
  const descriptionLines = splitByWords(description, 8);

  return (
    <Link
      href={href}
      className="flex min-w-0 space-x-3 rounded-2xl border border-white/20 bg-black/40 p-3 transition hover:-translate-y-1 hover:border-white/30"
    >
      <Image
        src={src}
        width={140}
        height={90}
        alt={title}
        className="shrink-0 rounded-md object-cover shadow-2xl"
      />

      <div className="min-w-0">
        {heading && (
          <p className="text-sm font-bold uppercase tracking-wide text-neutral-300 mb-0.5">
            {heading}
          </p>
        )}

        <h4 className="mb-1 text-xl font-bold text-white">{title}</h4>

        <p className="text-sm text-neutral-300 leading-snug">
          {descriptionLines.map((line, index) => (
            <span
              key={index}
              className="block whitespace-normal wrap-break-word"
              aria-hidden={false}
            >
              {line}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
}

export function HoveredLink({
  children,
  ...rest
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      {...rest}
      className="text-sm text-neutral-300 transition hover:text-white"
    >
      {children}
    </Link>
  );
}
