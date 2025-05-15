import { Button } from "@/components/ui/button";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, pulse } from "@/lib/animation";
import { useSimpleAnimation } from "@/hooks/use-simple-animation";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { ref: textRef, isVisible: textVisible } = useSimpleAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useSimpleAnimation({ threshold: 0.2 });
  
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex flex-col justify-center relative bg-background transition-colors overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute rounded-full bg-primary/20", 
              "w-4 h-4 md:w-6 md:h-6"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1], 
              scale: [0.5, 1, 0.5],
              y: [0, -10, 0],
              x: [0, 5, 0], 
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            ref={textRef}
            variants={{ 
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
            className="md:w-1/2"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block text-primary font-medium mb-2 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">Welcome</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">Tin Le</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-primary/90 mb-6"
            >
              Bridging Business Intelligence & Technology
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-lg mb-8"
            >
              I transform complex business challenges into elegant technical
              solutions. With a background spanning financial analysis and
              computer science, I specialize in translating business
              requirements into data-driven insights that empower
              decision-makers to act with confidence.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Button variant="outline" asChild className="border-primary/20 hover:border-primary/40 group">
                <a
                  href="https://www.linkedin.com/in/tintrungle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all"
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="border-primary/20 hover:border-primary/40 group">
                <a
                  href="https://github.com/NedWithNoHead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={imageRef}
            variants={fadeInRight}
            initial="hidden"
            animate={imageVisible ? "visible" : "hidden"}
            className="md:w-1/2 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="rounded-2xl overflow-hidden shadow-xl w-64 md:w-80 lg:w-96 bg-gradient-to-tr from-primary/20 to-transparent p-1 relative"
            >
              <div className="rounded-xl overflow-hidden shadow-lg relative group">
                <img
                  src="/attached_assets/my_photo.jpg.jpg"
                  alt="Tin Le Professional Portrait"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollDown}
          variants={pulse}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center text-primary/60 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-1">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
