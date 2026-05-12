"use client";

import React from "react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "TensorFlow",
  "PyTorch",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Figma",
  "GSAP",
];

const Marquee = () => {
  return (
    <section className="py-5 overflow-hidden border-y border-[#E0DBD5]">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate the list for seamless loop */}
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0">
            {techStack.map((tech, index) => (
              <span
                key={`${groupIndex}-${index}`}
                className="mx-8 text-[#A39080] uppercase text-sm font-light tracking-widest flex items-center gap-8"
              >
                {tech}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E0DBD5]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
