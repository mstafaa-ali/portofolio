import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen md:px-6 pb-6">
      <div className="flex items-end w-full h-full justify-end gap-12">
        <div className="flex w-0 md:w-2/4 invisible md:visible">
          <Image
            src="/images/me.JPG"
            alt="hero"
            width={350}
            height={350}
            className="w-full "
          />
        </div>
        <div>
          <h1 className="font-primary text-black uppercase text-5xl xl:text-8xl md:text-7xl font-semibold">
            Hey, im mustafa ali.
          </h1>
          <h1 className="font-primary text-black uppercase text-xl xl:text-8xl md:text-7xl">
            a web developer and ai/ml engineer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
