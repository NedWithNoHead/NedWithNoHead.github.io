import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center bg-background transition-colors"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hi, I'm Tin Le
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Bridging Business Intelligence & Technology
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I transform complex business challenges into elegant technical
              solutions. With a background spanning financial analysis and
              computer science, I specialize in translating business
              requirements into data-driven insights that empower
              decision-makers to act with confidence. My passion lies in making
              technology work for people, not the other way around.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                <FileText className="h-5 w-5" />
                View Resume
              </Button>
              <Button variant="outline" asChild className="border-primary/20 hover:border-primary/40">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="border-primary/20 hover:border-primary/40">
                <a
                  href="https://github.com/NedWithNoHead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slide-up">
            <div className="rounded-2xl overflow-hidden shadow-xl w-64 md:w-80 lg:w-96 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl relative group">
              <img
                src="/attached_assets/my_photo.jpg.jpg"
                alt="Tin Le Professional Portrait"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
