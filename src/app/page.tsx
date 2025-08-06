import Hero from "@/components/hero";
import About from "@/components/about";
import ProjectsSection from "@/components/projects-section";
import Skills from "@/components/skills";
import ResumeSection from "@/components/resume-section";
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
      <ResumeSection />
      <Contact />
    </main>
  );
}
