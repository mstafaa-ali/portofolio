"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "./ui/badge";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Intern Fullstack Web Developer",
    company: "PT. Aksamedia Mulia Digital",
    period: "2025 — 2026",
    description:
      "Building modern web applications with Laravel and React for various clients across Southeast Asia.",
  },
  {
    role: "Front-End Developer",
    company: "POROS Organization of Open Source",
    period: "2024 — 2025",
    description:
      "Designed and developed responsive websites and web applications for Organization Profile",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Laravel",
  "Python",
  "TensorFlow",
  "PyTorch",
  "PostgreSQL",
  "Git",
  "Figma",
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          textRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          experienceRef.current?.querySelectorAll(".experience-item") || [],
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.4",
        )
        .from(
          skillsRef.current?.querySelectorAll(".skill-badge") || [],
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
          },
          "-=0.4",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#F2EDE6] md:p-12 p-6 py-20"
    >
      {/* Heading */}
      <div ref={headingRef} className="mb-12">
        <p className="text-xs font-primary uppercase tracking-widest text-[#1A1A1A] mb-4">
          My Story
        </p>
        <h2 className="font-clash text-[#1A1A1A] uppercase text-5xl md:text-8xl font-semibold">
          <span className="group relative inline-block cursor-default">
            <span className="transition-colors duration-300 group-hover:text-[#A39080]">
              About
            </span>
            <span className="absolute bottom-1 left-0 h-[3px] md:h-[5px] w-0 bg-[#A39080] transition-all duration-500 ease-out group-hover:w-full" />
          </span>
        </h2>
      </div>

      {/* Two columns below heading: Description (left) + Experience (right) */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left — Description */}
        <div className="md:w-1/2">
          <p
            ref={textRef}
            className="text-[#6B6560] font-light text-base md:text-lg leading-relaxed"
          >
            I am a Web Developer and AI/ML Engineer specializing in creating
            intuitive web applications and intelligent systems. Skilled in
            React, TypeScript, CSS, Laravel, and machine learning frameworks, I
            focus on building high-performance, responsive solutions that
            enhance user experience. I am eager to leverage my comprehensive
            skill set in a dynamic role where I can contribute to developing
            innovative, cutting-edge web and AI technologies.
          </p>
          <a
            href="/CV MUSTAFA ALI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-widest font-primary rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
          >
            View CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Right — Experience */}
        <div className="md:w-1/2" ref={experienceRef}>
          <p className="text-xs font-primary uppercase tracking-widest text-[#A39080] mb-8">
            Experience
          </p>
          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-item border-b border-[#E0DBD5] py-6 first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-[#1A1A1A] font-primary uppercase text-sm md:text-base">
                      {exp.role}
                    </h4>
                    <p className="text-[#6B6560] font-light text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[#A39080] font-light text-xs md:text-sm uppercase tracking-wider shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#6B6560] font-extralight text-sm mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="mt-12">
            <p className="text-xs font-primary uppercase tracking-widest text-[#A39080] mb-6">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="skill-badge rounded-full border-[#E0DBD5] text-[#1A1A1A] font-extralight px-4 py-2 h-auto text-xs uppercase tracking-wider hover:bg-[#A39080] hover:text-white hover:border-[#A39080] transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
