"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "./ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h3TopRef = useRef<HTMLHeadingElement>(null);
  const h3BottomRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(h1Ref.current, {
        y: 500,
        opacity: 0,
        duration: 2,
      })
        .from(
          h3TopRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          h3BottomRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <>
      {/* Main Hero */}
      <section
        ref={containerRef}
        id="hero"
        className="min-h-screen flex items-end p-4 sm:p-6 md:p-12 bg-[#F2EDE6]"
      >
        <div className="flex items-end w-full h-auto md:h-1/2 pb-6 md:pb-0">
          <div className="w-full h-full flex flex-col justify-between gap-8 md:gap-0">
            <div>
              <div className="overflow-hidden">
                <h3
                  ref={h3TopRef}
                  className="font-primary text-[#6B6560] uppercase text-sm sm:text-base md:text-lg flex items-end"
                >
                  Web developer and AI/ML Engineer
                </h3>
              </div>
              <div className="overflow-hidden">
                <h1
                  ref={h1Ref}
                  className="font-clash mt-3 sm:mt-4 md:mt-6 text-[#1A1A1A] uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem] font-semibold leading-tight"
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
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-4">
              <div className="overflow-hidden">
                <h3
                  ref={h3BottomRef}
                  className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-[#6B6560] uppercase font-light text-xs sm:text-sm flex items-end"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s
                </h3>
              </div>
              <div className="flex flex-row sm:flex-col gap-3">
                <Button
                  variant="outline"
                  className="rounded-full font-extralight px-4 py-3 sm:px-6 sm:py-5 text-xs sm:text-sm border-[#E0DBD5] text-[#1A1A1A] hover:bg-[#A39080] hover:text-white hover:border-[#A39080] transition-colors"
                >
                  Available for Work
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full font-extralight px-4 py-3 sm:px-6 sm:py-5 text-xs sm:text-sm border-[#E0DBD5] text-[#1A1A1A] hover:bg-[#A39080] hover:text-white hover:border-[#A39080] transition-colors"
                >
                  Malang, Indonesia
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Font Comparison Preview - HAPUS SETELAH MEMILIH */}
      {/* <section className="bg-[#F2EDE6] py-20 px-12 border-t border-[#E0DBD5]">
        <p className="text-[#6B6560] uppercase text-sm mb-12 font-primary tracking-widest">
          Font Comparison — Clash Display vs Others
        </p>

        <div className="space-y-16">
          <div className="border-b border-[#E0DBD5] pb-12">
            <p className="text-[#A39080] text-xs uppercase tracking-widest mb-4">
              Clash Display (Semibold) ← AKTIF DI HERO
            </p>
            <h2 className="font-clash text-[#1A1A1A] uppercase text-5xl md:text-8xl xl:text-[10rem] font-semibold">
              mustafa ali.
            </h2>
          </div>

          <div className="border-b border-[#E0DBD5] pb-12">
            <p className="text-[#A39080] text-xs uppercase tracking-widest mb-4">
              Clash Display (Bold)
            </p>
            <h2 className="font-clash text-[#1A1A1A] uppercase text-5xl md:text-8xl xl:text-[10rem] font-bold">
              mustafa ali.
            </h2>
          </div>

          <div className="border-b border-[#E0DBD5] pb-12">
            <p className="text-[#A39080] text-xs uppercase tracking-widest mb-4">
              Clash Display (Medium)
            </p>
            <h2 className="font-clash text-[#1A1A1A] uppercase text-5xl md:text-8xl xl:text-[10rem] font-medium">
              mustafa ali.
            </h2>
          </div>

          <div className="border-b border-[#E0DBD5] pb-12">
            <p className="text-[#A39080] text-xs uppercase tracking-widest mb-4">
              Syne (Extra Bold) — comparison
            </p>
            <h2 className="font-syne text-[#1A1A1A] uppercase text-5xl md:text-8xl xl:text-[10rem] font-extrabold">
              mustafa ali.
            </h2>
          </div>

          <div className="pb-12">
            <p className="text-[#A39080] text-xs uppercase tracking-widest mb-4">
              Playfair Display (Bold Italic) — comparison
            </p>
            <h2 className="font-display text-[#1A1A1A] uppercase text-5xl md:text-8xl xl:text-[10rem] font-bold italic">
              mustafa ali.
            </h2>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
