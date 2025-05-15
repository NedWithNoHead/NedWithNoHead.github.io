import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
            to connect, feel free to reach out.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300">
          <CardContent className="pt-6">
            <div className="mb-8 flex justify-center space-x-6">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0077B5] text-white rounded-full hover:bg-[#0069a2] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/NedWithNoHead"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:jackletrungtin@gmail.com"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" type="submit">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Prefer email? Reach me directly at:</p>
              <a
                href="mailto:jackletrungtin@gmail.com"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                jackletrungtin@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
