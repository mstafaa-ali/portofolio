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
      const cards = gsap.utils.toArray<HTMLElement>("#project-list > *");

      gsap.set(cards, { opacity: 0, y: 50 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#project-list",
          start: "top 80%",
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
      className="flex flex-col justify-center min-h-screen px-6 pb-8 md:p-12 bg-[#F2EDE6]"
    >
      <div className="pb-8 border-b border-[#E0DBD5]">
        <h3 className="text-sm font-primary font-light text-[#6B6560] uppercase tracking-widest">
          Selected Projects
        </h3>
        <h1 className="text-8xl font-primary font-bold text-[#1A1A1A] uppercase">
          Works
        </h1>
      </div>

      <div id="project-list" className="flex flex-col gap-8 mt-12">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-end mt-12">
        <h4 className="font-primary text-[#1A1A1A] text-4xl border-b-2 border-[#E0DBD5] uppercase font-light">
          See All
        </h4>
      </div>
    </section>
  );
};

export default Projects;
