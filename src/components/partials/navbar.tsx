"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  // refs untuk setiap link
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    const el = linkRefs.current[idx];
    if (el) {
      gsap.to(el.querySelectorAll(".slide-text"), {
        y: (i: number) => (i === 0 ? "-100%" : "-100%"),
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (idx: number) => {
    const el = linkRefs.current[idx];
    if (el) {
      gsap.to(el.querySelectorAll(".slide-text"), {
        y: (i: number) => (i === 0 ? "0%" : "0%"),
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md ">
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <ul className="flex space-x-12 text-lg font-medium text-black font-primary">
          {navLinks.map((link, idx) => (
            <li
              key={link.href}
              ref={(el) => {
                linkRefs.current[idx] = el;
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="relative h-[32px] min-w-32 overflow-hidden cursor-pointer"
            >
              <Link href={link.href}>
                <span
                  className="block relative h-[32px] w-full"
                  style={{ display: "block", height: 32, width: "100%" }}
                >
                  <span
                    className="slide-text block w-full"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      transform: "translateY(0%)",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="slide-text block w-full"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "100%",
                      width: "100%",
                      transform: "translateY(0%)",
                    }}
                  >
                    {link.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
