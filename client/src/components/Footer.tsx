import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-muted/10 to-card text-card-foreground pt-12 pb-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-1">Tin Le</h3>
            <p className="text-muted-foreground">
              Business Intelligence & Technology Specialist
            </p>
          </motion.div>

          <div className="flex flex-col items-center mb-6 md:mb-0 md:order-3">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors mb-2"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
            <span className="text-xs text-muted-foreground">Back to top</span>
          </div>

          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/tintrungle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://github.com/NedWithNoHead"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:jackletrungtin@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-6 border-t border-muted text-center text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} Tin Le. All rights reserved.</p>
          <p className="mt-1 text-xs">Designed with passion and modern technology</p>
        </motion.div>
      </div>
    </footer>
  );
}
