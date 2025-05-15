import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSkillsSection } from "./components/AboutSkillsSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { ThemeToggle } from "./components/ThemeToggle";
import { useActiveSidebar } from "./hooks/use-active-sidebar";
import { useEffect } from "react";

function App() {
  const activeSection = useActiveSidebar();
  
  // Implement smooth scrolling for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="font-sans antialiased bg-background text-foreground transition-colors min-h-screen">
        <Navbar activeSection={activeSection} />
        <FloatingNav />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <AboutSkillsSection />
          <TimelineSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
