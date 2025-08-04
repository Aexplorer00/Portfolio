import Hero from "@/components/hero";
import About from "@/components/about";
import ProjectsSection from "@/components/projects-section";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900 transition-colors">
      <Navigation />
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Contact />
    </main>
  );
}
