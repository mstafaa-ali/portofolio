"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { ExtendedProject } from "@/data/projectData";

interface ProjectCardProps {
  project: ExtendedProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  const altText = `${project.title} - ${project.description}`.slice(0, 125);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  const leftPanel = (
    <div className="flex flex-col justify-between gap-6 p-6 md:p-8 lg:p-10 w-full md:w-[60%] lg:w-[50%]">
      <div>
        {/* Project Number & Year */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-primary text-xs font-semibold text-[#A39080] tracking-widest uppercase">
            {project.number}
          </span>
          <div className="flex items-center gap-2 font-primary text-xs text-[#6B6560] uppercase tracking-wider">
            <span>{project.company}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A39080]" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Headline */}
        <h3 className="font-clash text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-[#1A1A1A] uppercase transition-colors duration-300 group-hover:text-[#A39080]">
          {project.headline}
        </h3>

        {/* Description snippet if available */}
        {project.description && (
          <p className="mt-3 text-xs sm:text-sm font-primary text-[#6B6560] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>

      <div className="space-y-6 pt-4 border-t border-[#E0DBD5]">
        {/* Tag Badges */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                className="uppercase text-[11px] font-primary px-3 py-1 border border-[#E0DBD5] rounded-full text-[#6B6560] tracking-wider transition-colors duration-300 group-hover:border-[#A39080]/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Stat Metrics */}
        {project.stats.length > 0 && (
          <div className="flex flex-wrap gap-6 pt-2">
            {project.stats.slice(0, 4).map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-clash text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                  {stat.value}
                </span>
                <span className="font-primary text-[11px] uppercase tracking-wider text-[#6B6560]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const rightPanel = (
    <div
      className="relative w-full md:w-[40%] lg:w-[50%] min-h-[260px] md:min-h-0 overflow-hidden bg-[#EAE4DC]"
      style={{ backgroundColor: project.bgColor || undefined }}
    >
      {!imageError ? (
        <Image
          src={project.image}
          alt={altText}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-[#EAE4DC]">
          <ImageOff className="w-10 h-10 text-[#A39080]" />
        </div>
      )}

      {/* Navigation Arrow Pill */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-[#E0DBD5] bg-[#F2EDE6]/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] group-hover:scale-105 shadow-sm">
        <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] transition-all duration-300 group-hover:text-[#F2EDE6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
    "group flex flex-col md:flex-row w-full rounded-2xl overflow-hidden bg-[#F2EDE6] border border-[#E0DBD5] transition-all duration-500 hover:border-[#A39080] hover:shadow-2xl hover:shadow-[#1A1A1A]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A39080]";

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
