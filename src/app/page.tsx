import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900 transition-colors">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
