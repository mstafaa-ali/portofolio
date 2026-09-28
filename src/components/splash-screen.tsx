"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) window.__lenis.stop();

    const progressObj = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.style.overflow = originalOverflow;
        if (window.__lenis) window.__lenis.start();
        setLoadingComplete(true);
        if (onComplete) onComplete();
      },
    });

    tl.set(containerRef.current, { visibility: "visible" })
      .fromTo(
        [topTextRef.current, centerTextRef.current, bottomTextRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      )
      .to(
        progressObj,
        {
          value: 100,
          duration: 1.8,
          ease: "power2.inOut",
          onUpdate: () => {
            const current = Math.round(progressObj.value);
            if (counterRef.current) {
              counterRef.current.textContent = current < 10 ? `0${current}` : `${current}`;
            }
            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${current}%`;
            }
          },
        },
        "-=0.4"
      )
      .to(
        [topTextRef.current, centerTextRef.current, bottomTextRef.current],
        { opacity: 0, y: -30, duration: 0.5, stagger: 0.05, ease: "power2.in" },
        "+=0.1"
      )
      .to(
        curtainRef.current,
        { yPercent: -100, duration: 1, ease: "power4.inOut" },
        "-=0.2"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  if (loadingComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden"
      style={{ visibility: "hidden" }}
      aria-hidden="true"
    >
      <div
        ref={curtainRef}
        className="pointer-events-auto absolute inset-0 bg-[#141414] text-[#F2EDE6] flex flex-col justify-between p-6 sm:p-10 md:p-14"
      >
        <div
          ref={topTextRef}
          className="flex justify-between items-center text-xs md:text-sm uppercase tracking-widest text-[#9C948B] font-primary"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A39080] animate-ping" />
            <span className="font-medium text-[#F2EDE6]">MSTFAA.</span>
          </div>
          <span className="hidden sm:inline-block">Folio / Edition &copy; 2026</span>
          <span>Malang, ID</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center my-auto py-12 px-4">
          <div className="overflow-visible py-2 px-6 sm:px-10">
            <h2
              ref={centerTextRef}
              className="font-clash text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold uppercase tracking-tight text-[#F2EDE6] leading-none"
            >
              Mustafa{" "}
              <span className="text-[#A39080] italic font-normal font-instrument inline-block pr-3 sm:pr-6">
                Ali.
              </span>
            </h2>
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base font-primary tracking-[0.25em] uppercase text-[#8A847E]">
            Web Developer &bull; AI/ML Engineer
          </p>
        </div>

        <div ref={bottomTextRef} className="space-y-4 md:space-y-6">
          <div className="flex justify-between items-end">
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9C948B] font-primary flex items-center gap-2">
              <span>Loading Experience</span>
              <span className="text-[#A39080]">&mdash;</span>
            </div>
            <div className="flex items-baseline gap-1 font-clash">
              <span
                ref={counterRef}
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#F2EDE6] tabular-nums leading-none tracking-tighter"
              >
                00
              </span>
              <span className="text-sm sm:text-xl md:text-2xl text-[#A39080] font-light">
                %
              </span>
            </div>
          </div>
          <div className="relative w-full h-[2px] bg-[#2A2826] overflow-hidden rounded-full">
            <div
              ref={progressLineRef}
              className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-r from-[#8A847E] via-[#A39080] to-[#F2EDE6] transition-all duration-75 ease-out rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

