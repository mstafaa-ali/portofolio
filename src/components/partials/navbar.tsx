"use client";
import Link from "next/link";
import { gsap } from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget.querySelectorAll(".slide-text"), {
      yPercent: -100,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget.querySelectorAll(".slide-text"), {
      yPercent: 0,
      duration: 0.4,
      ease: "power2.in",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <ul className="flex text-3xl font-bold  font-primary">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative block h-[32px] px-1 overflow-hidden cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Teks pertama yang terlihat */}
                <span className="slide-text flex items-center text-gray-500 justify-center h-full">
                  {link.label}.
                </span>

                {/* Teks kedua yang muncul dari bawah */}
                <span className="slide-text flex text-black items-center justify-center h-full absolute top-full left-0 w-full">
                  {link.label}.
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
