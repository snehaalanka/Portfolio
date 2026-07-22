import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Me from "@/components/sections/Me";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Me />
      <Contact />
    </main>
  );
}