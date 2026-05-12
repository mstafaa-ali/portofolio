import About from "@/components/about";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
