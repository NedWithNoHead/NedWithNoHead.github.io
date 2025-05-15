import { useState, useEffect } from 'react';

export function useActiveSidebar() {
  const [activeSection, setActiveSection] = useState("home");

  // Function to check which section is currently in view
  const checkScroll = () => {
    const sections = ["home", "about", "timeline", "projects", "contact"];
    for (const section of [...sections].reverse()) {
      const el = document.getElementById(section);
      if (el && window.scrollY >= el.offsetTop - 100) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check initially
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return activeSection;
}