import { ExternalLink, Check } from "lucide-react";
import { timelineItems } from "@/data/timeline";

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-16 md:py-24 bg-background transition-colors"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Professional Journey
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={`timeline-${index}`}
                className="relative bg-card rounded-lg shadow-md overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left Column - Time and Company */}
                  <div className="md:w-1/3 bg-muted/20 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-lg md:text-xl font-bold text-primary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-muted-foreground mb-1">{item.subtitle}</p>
                      )}
                      {item.duration && (
                        <p className="text-sm text-muted-foreground">{item.duration}</p>
                      )}
                    </div>
                    
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center mt-4 text-sm"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
