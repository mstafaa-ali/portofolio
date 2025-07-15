"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const About = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Split text into words
    const text = textRef.current.textContent || "";
    const words = text.split(" ");

    // Clear the paragraph
    textRef.current.innerHTML = "";

    // Create spans for each word
    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word + " ";
      wordSpan.style.display = "inline-block";
      wordSpan.style.opacity = "0";
      wordSpan.style.transform = "translateY(50px)";
      wordSpan.style.marginRight = "0.5em";
      textRef.current?.appendChild(wordSpan);
    });

    // Animate words appearing
    const wordSpans = textRef.current.querySelectorAll("span");

    gsap.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.5,
    });

    // Add hover effect for each word
    wordSpans.forEach((span) => {
      span.addEventListener("mouseenter", () => {
        gsap.to(span, {
          scale: 1.1,
          color: "#3b82f6",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      span.addEventListener("mouseleave", () => {
        gsap.to(span, {
          scale: 1,
          color: "#000000",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="flex items-center justify-center h-screen px-6 gap-12"
    >
      <div ref={containerRef} className="">
        <p
          ref={textRef}
          className="text-black text-lg md:text-3xl xl:text-6xl text-center items-center justify-center font-primary font-bold leading-tight"
        >
          I’m a Fullstack Web Developer with a strong interest in AI/ML
          Engineering. I enjoy creating smart, scalable solutions that combine
          clean code, great design, and intelligent systems.
        </p>
      </div>
    </section>
  );
};

export default About;
