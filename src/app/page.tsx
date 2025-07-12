import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
