import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { floatingNavAnimation } from '@/lib/animation';

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
    { id: 'timeline', label: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
  ];

  // Detect scroll position to show/hide the floating nav
  useEffect(() => {
    const checkScroll = () => {
      // Show floating nav after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';
        
        // Add some offset to make the detection more natural
        if (sectionTop < 100) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Scroll to section when clicking nav item
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className={cn(
        "fixed z-50 bottom-6 left-1/2 transform -translate-x-1/2",
        "px-1 py-1 rounded-full bg-background/80 backdrop-blur border border-primary/20",
        "shadow-lg transition-opacity duration-300",
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      variants={floatingNavAnimation}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="flex items-center space-x-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={cn(
              "relative p-3 rounded-full transition-colors",
              "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20",
              activeSection === item.id
                ? "text-primary bg-primary/10"
                : "text-muted-foreground"
            )}
            aria-label={item.label}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
            {activeSection === item.id && (
              <motion.span
                className="absolute inset-0 rounded-full border border-primary/40"
                layoutId="activeSection"
                transition={{ duration: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}