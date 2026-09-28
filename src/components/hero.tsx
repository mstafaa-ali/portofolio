"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, MapPin } from "lucide-react";
import { scrollToTarget } from "./smooth-scroll";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h3TopRef = useRef<HTMLHeadingElement>(null);
  const h3BottomRef = useRef<HTMLHeadingElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(h1Ref.current, {
        y: 180,
        opacity: 0,
        duration: 1.4,
      })
        .from(
          h3TopRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          h3BottomRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          badgesRef.current?.children || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-end p-4 sm:p-6 md:p-12 bg-[#F2EDE6] overflow-hidden"
    >
      <div className="flex items-end w-full h-auto pb-6 md:pb-4 pt-28 md:pt-0">
        <div className="w-full flex flex-col justify-between gap-10 md:gap-14">
          <div>
            <div className="overflow-hidden">
              <h3
                ref={h3TopRef}
                className="font-primary text-[#6B6560] uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] flex items-center gap-3"
              >
                <span>Web Developer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A39080]" />
                <span>AI/ML Engineer</span>
              </h3>
            </div>
            <div className="overflow-hidden py-1">
              <h1
                ref={h1Ref}
                className="font-clash mt-3 sm:mt-4 md:mt-6 text-[#1A1A1A] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[11.5rem] font-semibold leading-[0.9] tracking-tight"
              >
                mustafa{" "}
                <span className="group relative inline-block cursor-default">
                  <span className="transition-colors duration-300 group-hover:text-[#A39080]">
                    ali.
                  </span>
                  <span className="absolute bottom-2 md:bottom-4 left-0 h-[3px] md:h-[6px] w-0 bg-[#A39080] transition-all duration-500 ease-out group-hover:w-full" />
                </span>
              </h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 border-t border-[#E0DBD5] pt-8">
            <div className="overflow-hidden max-w-xl">
              <h3
                ref={h3BottomRef}
                className="text-[#6B6560] font-primary uppercase font-light text-xs sm:text-sm leading-relaxed tracking-wider"
              >
                Crafting modern digital experiences and scalable intelligent applications at the intersection of clean design, web engineering, and machine learning.
              </h3>
            </div>

            <div
              ref={badgesRef}
              className="flex flex-wrap sm:flex-nowrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded-full font-primary uppercase text-xs tracking-wider px-5 py-3 border border-[#E0DBD5] bg-[#EBE5DE]/60 text-[#1A1A1A] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Work</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full font-primary uppercase text-xs tracking-wider px-5 py-3 border border-[#E0DBD5] text-[#6B6560]">
                <MapPin className="w-3.5 h-3.5 text-[#A39080]" />
                <span>Malang, ID</span>
                {time && <span className="text-[#1A1A1A] font-medium ml-1">[{time} GMT+7]</span>}
              </div>

              <button
                type="button"
                onClick={() => scrollToTarget("#project")}
                aria-label="Scroll to projects"
                className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#E0DBD5] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2EDE6] transition-colors duration-300 cursor-pointer"
              >
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
