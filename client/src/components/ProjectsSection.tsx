import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink, Github, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-background transition-colors"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={`project-${index}`}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group transform hover:-translate-y-1 border border-primary/10 hover:border-primary/30"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={`tech-${i}`} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors inline-flex items-center text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors inline-flex items-center text-sm"
                  >
                    <Github className="h-4 w-4 mr-1.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* More Coming Soon Card */}
          <Card className="overflow-hidden flex flex-col h-full border-2 border-dashed border-muted justify-center items-center p-8 text-center">
            <PlusCircle className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              More Coming Soon
            </h3>
            <p className="text-muted-foreground">
              New projects are currently in development. Check back for updates!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
