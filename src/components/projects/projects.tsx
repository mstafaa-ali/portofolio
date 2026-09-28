"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectData from "@/data/projectData";
import ProjectCard from "@/components/projects/project-card";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".project-card-wrapper > *",
      );

      gsap.set(cards, { y: 100, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#project-list",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="project"
      className="flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-12 py-16 md:py-24 bg-[#F2EDE6]"
    >
      <div className="pb-8 border-b border-[#E0DBD5] flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-primary uppercase tracking-widest text-[#6B6560] mb-3">
            Portfolio / Selected Works
          </p>
          <h2 className="font-clash text-5xl sm:text-7xl md:text-8xl font-semibold text-[#1A1A1A] uppercase tracking-tight">
            <span className="group relative inline-block cursor-default">
              <span className="transition-colors duration-300 group-hover:text-[#A39080]">
                Works
              </span>
              <span className="absolute bottom-1 left-0 h-[3px] md:h-[5px] w-0 bg-[#A39080] transition-all duration-500 ease-out group-hover:w-full" />
            </span>
          </h2>
        </div>
        <span className="font-primary text-xs uppercase tracking-widest text-[#A39080]">
          [ {projectData.length.toString().padStart(2, "0")} Featured Projects ]
        </span>
      </div>

      <div id="project-list" className="flex flex-col gap-8 md:gap-12 mt-12">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card-wrapper overflow-hidden"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
