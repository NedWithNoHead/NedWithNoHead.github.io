import { ExternalLink, Check, Briefcase, Calendar } from "lucide-react";
import { timelineItems } from "@/data/timeline";
import { motion } from "framer-motion";
import { useSimpleAnimation } from "@/hooks/use-simple-animation";

export function TimelineSection() {
  const { ref, isVisible } = useSimpleAnimation({ threshold: 0.05 });

  return (
    <section
      id="timeline"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-3 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            A timeline of my career progression and key professional milestones.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline Items */}
          <div className="space-y-12 relative">
            {/* Timeline connector */}
            <div className="absolute top-0 bottom-0 left-1/2 md:left-[95px] w-1 bg-primary/20 -translate-x-1/2 rounded-full hidden md:block"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div 
                key={`timeline-${index}`}
                ref={index === 0 ? ref : undefined}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative bg-card rounded-xl shadow-md overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 transform md:hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left Column - Time and Company */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-transparent p-6 flex flex-col justify-between relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-[-12px] top-8 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 hidden md:block z-10"></div>
                    <div>
                      <div className="flex items-center mb-3">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <div className="text-lg md:text-xl font-bold text-primary">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-primary/80 inline" />
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-muted-foreground mb-2 pl-7">{item.subtitle}</p>
                      )}
                      {item.duration && (
                        <p className="text-sm text-muted-foreground pl-7">{item.duration}</p>
                      )}
                    </div>
                    
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center mt-4 text-sm group"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                      </a>
                    )}
                  </div>

                  {/* Right Column - Content */}
                  <div className="md:w-2/3 p-6">
                    {item.bulletPoints.length > 0 && (
                      <ul className="space-y-3 mb-4">
                        {item.bulletPoints.map((point, i) => (
                          <li className="flex items-start" key={`point-${i}`}>
                            <Check className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.roles && item.roles.length > 0 && (
                      <div className="space-y-6 pt-4 border-t border-border">
                        {item.roles.map((role, i) => (
                          <div key={`role-${i}`} className="mb-6 last:mb-0">
                            <h4 className="font-semibold text-primary mb-3">
                              {role.title}
                            </h4>
                            <ul className="space-y-3">
                              {role.bulletPoints.map((point, j) => (
                                <li className="flex items-start" key={`role-point-${j}`}>
                                  <Check className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}