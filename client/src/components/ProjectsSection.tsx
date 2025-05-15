import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink, Github, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProjectsSection() {
  const { controls, ref } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-3 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore a selection of my technical work, showcasing skills in different technologies, architectures, and problem domains.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card
                className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col relative">
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={`tech-${i}`} 
                        variant="outline"
                        className="bg-primary/5 hover:bg-primary/10 text-primary/80 border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center text-sm shadow-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors inline-flex items-center text-sm shadow-sm"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* More Coming Soon Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="h-full"
          >
            <Card className="overflow-hidden flex flex-col h-full border-2 border-dashed border-muted justify-center items-center p-8 text-center bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <PlusCircle className="h-16 w-16 text-primary/50 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                More Coming Soon
              </h3>
              <p className="text-muted-foreground">
                New projects are currently in development. Check back for updates!
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
