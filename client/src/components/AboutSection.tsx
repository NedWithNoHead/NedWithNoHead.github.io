import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-muted/30 transition-colors"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          About Me
        </h2>
        <Card className="max-w-3xl mx-auto animate-fade-in">
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
    </section>
  );
}
