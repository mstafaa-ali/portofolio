"use client";

import { ArrowUp } from "lucide-react";
import { scrollToTarget } from "@/components/smooth-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scrollToTarget(0);
  };

  return (
    <footer className="bg-[#141414] text-[#F2EDE6] border-t border-[#262422] px-4 sm:px-6 md:px-12 py-12 md:py-16">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <h2 className="font-clash uppercase text-[#F2EDE6] text-5xl sm:text-[75px] md:text-[120px] xl:text-[146px] font-semibold leading-none tracking-tight">
            MSTAFAA<span className="text-[#A39080]">.</span>
          </h2>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 font-primary uppercase text-xs tracking-widest text-[#8A847E] hover:text-[#F2EDE6] transition-colors py-2 border-b border-transparent hover:border-[#A39080]"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-[#2E2B28] flex items-center justify-center group-hover:border-[#A39080] transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#262422] pt-8">
          <p className="font-primary text-[#8A847E] text-xs uppercase tracking-widest font-light">
            © 2026 Mustafa Ali. All rights reserved.
          </p>
          <p className="font-primary text-[#A39080] text-xs uppercase tracking-widest font-light">
            Designed & Engineered with Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
