import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted/30 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">
            I'm always interested in discussing challenging problems at the intersection 
            of business and technology. Whether you have a project in mind or just want 
            to connect, feel free to reach out through any of these channels.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300">
          <CardContent className="pt-6 pb-8">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="flex justify-center space-x-8">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0077B5] text-white rounded-full hover:bg-[#0069a2] transition-colors hover:scale-110"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/NedWithNoHead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors hover:scale-110"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="mailto:jackletrungtin@gmail.com"
                  className="p-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors hover:scale-110"
                >
                  <Mail className="h-8 w-8" />
                </a>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-muted-foreground text-lg mb-2">Email me directly:</p>
                <a
                  href="mailto:jackletrungtin@gmail.com"
                  className="text-primary hover:text-primary/80 font-medium transition-colors text-xl"
                >
                  jackletrungtin@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
