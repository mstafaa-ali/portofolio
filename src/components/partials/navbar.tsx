"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const navLinks = [
  { href: "#project", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Latest measured widths (don't trigger re-renders)
  const widthsRef = useRef({ full: 0, pill: 0 });
  // Track current scroll state without re-rendering
  const scrolledRef = useRef(false);
  // Active tween so we can kill it before starting a new one
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const navTweenRef = useRef<gsap.core.Tween | null>(null);

  // Set initial styles + measure widths
  useLayoutEffect(() => {
    if (!innerRef.current || !measureRef.current) return;

    const measure = () => {
      widthsRef.current = {
        full: window.innerWidth,
        pill: measureRef.current?.offsetWidth ?? 580,
      };
    };

    measure();

    // Apply initial state (top of page = full width)
    gsap.set(innerRef.current, {
      width: widthsRef.current.full,
      paddingLeft: 64,
      paddingRight: 64,
      paddingTop: 24,
      paddingBottom: 24,
      borderRadius: 0,
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      borderColor: "rgba(229,231,235,0)",
    });
    gsap.set(navRef.current, { paddingTop: 0 });

    setMounted(true);

    const handleResize = () => {
      const wasScrolled = scrolledRef.current;
      measure();
      // Snap to correct size for the current state on resize
      if (innerRef.current) {
        gsap.set(innerRef.current, {
          width: wasScrolled ? widthsRef.current.pill : widthsRef.current.full,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll listener — animates only when state actually flips
  useEffect(() => {
    if (!mounted) return;

    const animateTo = (toScrolled: boolean) => {
      if (!innerRef.current || !navRef.current) return;
      const { full, pill } = widthsRef.current;

      tweenRef.current?.kill();
      navTweenRef.current?.kill();

      tweenRef.current = gsap.to(innerRef.current, {
        width: toScrolled ? pill : full,
        paddingLeft: toScrolled ? 40 : 64,
        paddingRight: toScrolled ? 40 : 64,
        paddingTop: toScrolled ? 12 : 24,
        paddingBottom: toScrolled ? 12 : 24,
        borderRadius: toScrolled ? 9999 : 0,
        boxShadow: toScrolled
          ? "0 8px 32px rgba(26,26,26,0.08), 0 2px 8px rgba(26,26,26,0.04)"
          : "0 0px 0px rgba(0,0,0,0)",
        borderColor: toScrolled
          ? "rgba(224,219,213,0.8)"
          : "rgba(224,219,213,0)",
        duration: 0.9,
        ease: "expo.inOut",
      });

      navTweenRef.current = gsap.to(navRef.current, {
        paddingTop: toScrolled ? 16 : 0,
        duration: 0.9,
        ease: "expo.inOut",
      });
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        animateTo(isScrolled);
      }
    };

    // Sync state if user already scrolled on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Hidden measurer — replicates pill content + padding to compute target width */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-[9999px] left-0"
        style={{ visibility: "hidden" }}
      >
        <div
          ref={measureRef}
          className="inline-flex items-center"
          style={{ paddingLeft: 40, paddingRight: 40 }}
        >
          <span className="font-bold text-lg md:text-xl font-primary tracking-tight">
            MSTFAA.
          </span>
          <ul className="flex items-center gap-1 md:gap-2 ml-96">
            {navLinks.map((link) => (
              <li key={link.href}>
                <span className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium uppercase tracking-widest">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 flex justify-center"
      >
        <div
          ref={innerRef}
          className="flex items-center justify-between bg-[#F2EDE6]/80 backdrop-blur-md border border-transparent overflow-hidden whitespace-nowrap will-change-[width,padding,border-radius]"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg md:text-xl font-primary tracking-tight text-[#1A1A1A]"
          >
            MSTFAA.
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative inline-block px-3 md:px-4 py-2 text-xs md:text-sm font-medium uppercase tracking-widest text-[#6B6560]"
                >
                  <span className="transition-colors duration-300 group-hover:text-[#1A1A1A]">
                    {link.label}
                  </span>
                  <span className="pointer-events-none absolute bottom-1 left-3 md:left-4 right-3 md:right-4 h-[1.5px] origin-left scale-x-0 bg-[#A39080] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
