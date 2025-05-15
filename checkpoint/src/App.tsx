import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSkillsSection } from "./components/AboutSkillsSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { useActiveSidebar } from "./hooks/use-active-sidebar";

function App() {
  const activeSection = useActiveSidebar();

  return (
    <TooltipProvider>
      <Toaster />
      <div className="font-sans antialiased bg-background text-foreground transition-colors min-h-screen">
        <Navbar activeSection={activeSection} />
        <HeroSection />
        <AboutSkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
