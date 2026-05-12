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
        className="h-screen flex items-end md:p-12 bg-[#F2EDE6]"
      >
        <div className="flex items-end justify-start w-full h-1/2 justify-end gap-12">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <div className="overflow-hidden">
                <h3
                  ref={h3TopRef}
                  className="font-primary text-[#6B6560] uppercase text-lg flex items-end"
                >
                  Web developer and AI/ML Engineer
                </h3>
              </div>
              <div className="overflow-hidden">
                <h1
                  ref={h1Ref}
                  className="font-clash mt-6 text-[#1A1A1A] uppercase text-5xl xl:text-[12rem] md:text-7xl font-semibold"
                >
                  mustafa ali.
                </h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="overflow-hidden">
                <h3
                  ref={h3BottomRef}
                  className="w-1/3 text-[#6B6560] uppercase font-light text-sm flex items-end"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="rounded-full font-extralight px-6 py-5 border-[#E0DBD5] text-[#1A1A1A] hover:bg-[#A39080] hover:text-white hover:border-[#A39080] transition-colors"
                >
                  Available for Work
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full font-extralight px-6 py-5 border-[#E0DBD5] text-[#1A1A1A] hover:bg-[#A39080] hover:text-white hover:border-[#A39080] transition-colors"
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
