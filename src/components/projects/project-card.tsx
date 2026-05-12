"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { ExtendedProject } from "@/data/projectData";

interface ProjectCardProps {
  project: ExtendedProject;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  const altText = `${project.title} - ${project.description}`.slice(0, 125);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  const leftPanel = (
    <div className="flex flex-col justify-between gap-6 p-6 md:p-8 lg:p-10 w-full md:w-[70%] lg:w-[50%]">
      {/* Project Number */}
      <span className="font-primary text-sm text-[#A39080] tracking-widest uppercase">
        {project.number}
      </span>

      {/* Company / Year Row */}
      <div className="flex items-center gap-2 font-primary text-sm text-[#6B6560] font-light">
        <span>{project.company}</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E0DBD5]" />
        <span>{project.year}</span>
      </div>

      {/* Headline */}
      <h3 className="font-primary text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#1A1A1A] uppercase">
        {project.headline}
      </h3>

      {/* Tag Badges - max 5, hidden when empty */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="uppercase text-xs font-primary font-light px-3 py-1 border border-[#E0DBD5] rounded-full text-[#6B6560] tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Stat Metrics - max 4, hidden when empty */}
      {project.stats.length > 0 && (
        <div className="flex flex-wrap gap-6">
          {project.stats.slice(0, 4).map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-primary text-2xl font-semibold text-[#1A1A1A]">
                {stat.value}
              </span>
              <span className="font-primary text-xs font-light text-[#6B6560]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const rightPanel = (
    <div
      className="relative w-full md:w-[30%] lg:w-[50%] min-h-[250px] md:min-h-0"
      style={{ backgroundColor: project.bgColor || "transparent" }}
    >
      {!imageError ? (
        <Image
          src={project.image}
          alt={altText}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-[#F2EDE6]">
          <ImageOff className="w-10 h-10 text-[#A39080]" />
        </div>
      )}

      {/* Navigation Arrow */}
      <div className="absolute bottom-3 right-3 z-10 rounded-full p-2 border border-[#E0DBD5] bg-[#F2EDE6] transition-all duration-300 group-hover:bg-[#A39080] group-hover:border-[#A39080]">
        <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#F2EDE6]" />
      </div>
    </div>
  );

  const cardContent = (
    <>
      {leftPanel}
      {rightPanel}
    </>
  );

  const sharedClasses =
    "group flex flex-col md:flex-row w-full rounded-xl overflow-hidden bg-transparent border border-[#E0DBD5] transition-all duration-300 hover:border-[#A39080] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A39080]";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className={sharedClasses} tabIndex={0} onKeyDown={handleKeyDown}>
      {cardContent}
    </article>
  );
};

export default ProjectCard;
