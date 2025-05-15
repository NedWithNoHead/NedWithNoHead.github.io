import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { skillCategories } from "@/data/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutSkillsSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-muted/30 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* About Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <Card className="h-full shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  I thrive at the intersection of business and technology, bringing a unique 
                  perspective that combines financial acumen with technical expertise. As a 
                  Computer Information Technology graduate with a strong foundation in Business 
                  Administration, I've built a career translating complex business needs into 
                  elegant technological solutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey from financial analysis to data engineering has equipped me with 
                  the rare ability to communicate effectively across departments, understand 
                  stakeholder requirements at their core, and implement systems that drive 
                  measurable business results.
                </p>
                <p className="text-muted-foreground">
                  Whether optimizing database performance, automating financial processes, or 
                  creating insightful dashboards that inform critical decisions, I'm committed 
                  to delivering solutions that enhance operational efficiency and provide 
                  meaningful business intelligence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Skills & Expertise
            </h2>
            <Card className="h-full shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible defaultValue="data">
                  {skillCategories.map((category) => (
                    <AccordionItem value={category.id} key={category.id}>
                      <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-primary">
                        {category.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
                          {category.skills.map((skill, i) => (
                            <li 
                              className="flex items-center text-muted-foreground" 
                              key={`${category.id}-skill-${i}`}
                            >
                              <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}