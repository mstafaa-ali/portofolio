"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import projectData from "@/data/projectData";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageCache = useRef<{ [key: string]: HTMLImageElement }>({});

  // Preload images
  useEffect(() => {
    projectData.forEach((project) => {
      if (!imageCache.current[project.image]) {
        const img = new window.Image();
        img.src = project.image;
        imageCache.current[project.image] = img;
      }
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If same project, just show it
    if (hoveredProject === index) {
      if (previewRef.current) {
        gsap.to(previewRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      return;
    }

    // If different project, fade out first then fade in new one
    if (previewRef.current && hoveredProject !== null) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setHoveredProject(index);
          // Small delay to ensure state update
          setTimeout(() => {
            if (previewRef.current) {
              gsap.to(previewRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          }, 50);
        },
      });
    } else {
      // First time showing
      setHoveredProject(index);
      setTimeout(() => {
        if (previewRef.current) {
          gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }, 50);
    }
  };

  const handleMouseLeave = () => {
    // Set timeout to hide preview
    timeoutRef.current = setTimeout(() => {
      if (previewRef.current) {
        gsap.to(previewRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.in",
        });
      }
      setTimeout(() => setHoveredProject(null), 300);
    }, 200);
  };

  return (
    <section
      id="project"
      className="flex flex-col justify-center min-h-screen px-6 pb-8 md:pb-0"
    >
      <div id="project-list" className="flex flex-col  gap-12">
        {projectData.map((project, index) =>
          project.url ? (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="flex justify-between border-b-2 border-black cursor-pointer no-underline"
            >
              <div className="font-primary text-black">
                <h5 className="text-4xl">{project.title}</h5>
                <p>{project.description}</p>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={350}
                className="object-cover h-24 w-1/10"
              />
            </a>
          ) : (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="flex justify-between border-b-2 border-black cursor-pointer"
            >
              <div className="font-primary text-black">
                <h5 className="text-4xl">{project.title}</h5>
                <p>{project.description}</p>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={350}
                className="object-cover h-24 w-1/10"
              />
            </div>
          )
        )}
      </div>

      <div className="flex justify-end mt-12">
        <h4 className="font-primary text-black text-4xl border-b-2">See All</h4>
      </div>

      {/* Preview Image */}
      {hoveredProject !== null && (
        <div
          ref={previewRef}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
          className="fixed bottom-8 right-8 z-50 opacity-0 scale-75"
          style={{
            transform: "scale(0.8)",
            opacity: 0,
          }}
        >
          <Image
            src={projectData[hoveredProject].image}
            alt={projectData[hoveredProject].title}
            width={600}
            height={600}
            className="object-cover transition-opacity duration-300"
            priority
          />
        </div>
      )}
    </section>
  );
};
export default Projects;
