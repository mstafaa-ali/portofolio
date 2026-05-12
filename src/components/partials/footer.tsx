const Footer = () => {
  return (
    <footer className="bg-[#F2EDE6] border-t border-[#E0DBD5] px-4 sm:px-6 md:px-12 py-12 md:py-16">
      <div className="flex flex-col gap-8">
        <h2 className="font-clash uppercase text-[#1A1A1A] text-5xl sm:text-[75px] md:text-[120px] xl:text-[146px] font-semibold leading-none">
          MSTAFAA.
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#E0DBD5] pt-8">
          <p className="font-primary text-[#6B6560] text-xs uppercase tracking-widest font-light">
            © 2025 Mustafa Ali. All rights reserved.
          </p>
          <p className="font-primary text-[#A39080] text-xs uppercase tracking-widest font-light">
            Malang, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
