import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check, ChevronDown } from "lucide-react";
import { skillCategories } from "@/data/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 md:py-24 bg-background transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Skills & Expertise
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible>
            {skillCategories.map((category) => (
              <AccordionItem value={category.id} key={category.id}>
                <AccordionTrigger className="text-lg md:text-xl font-semibold">
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
        </div>
      </div>
    </section>
  );
}
