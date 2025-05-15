import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useSimpleAnimation } from "@/hooks/use-simple-animation";

// Contact social item component
const ContactItem = ({ 
  icon, 
  label, 
  href, 
  color, 
  hoverColor 
}: { 
  icon: React.ReactNode; 
  label: string; 
  href: string; 
  color: string; 
  hoverColor: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-4 rounded-xl ${color} text-white group transition-all duration-300`}
    whileHover={{ 
      scale: 1.05,
      backgroundColor: hoverColor,
    }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="mr-3 bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
      {icon}
    </div>
    <span className="font-medium">{label}</span>
    <Send className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
  </motion.a>
);

export function ContactSection() {
  const { ref, isVisible } = useSimpleAnimation({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-3 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always interested in discussing challenging problems at the intersection 
            of business and technology. Whether you have a project in mind or just want 
            to connect, feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Left side - Contact Info */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center rounded-full bg-primary/10 w-12 h-12 mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                    <p className="text-muted-foreground mb-6">
                      Feel free to reach out through any of these platforms or send me an email directly.
                    </p>
                  </div>
                  
                  <motion.div 
                    className="mt-4 text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="flex justify-center md:justify-start">
                      <div className="h-0.5 w-16 bg-primary rounded-full mb-4"></div>
                    </div>
                    <p className="text-muted-foreground mb-2">Email me directly:</p>
                    <motion.a
                      href="mailto:jackletrungtin@gmail.com"
                      className="text-primary hover:text-primary/80 font-medium transition-colors text-xl inline-flex items-center"
                      whileHover={{ scale: 1.03, x: 5 }}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      jackletrungtin@gmail.com
                    </motion.a>
                  </motion.div>
                </div>
                
                {/* Right side - Contact Links */}
                <div className="md:col-span-3 flex flex-col justify-center space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <ContactItem 
                      icon={<Linkedin className="h-6 w-6" />}
                      label="Connect on LinkedIn"
                      href="https://www.linkedin.com/in/tintrungle/"
                      color="bg-[#0077B5]"
                      hoverColor="#0069a2"
                    />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <ContactItem 
                      icon={<Github className="h-6 w-6" />}
                      label="Follow on GitHub"
                      href="https://github.com/NedWithNoHead"
                      color="bg-gray-800"
                      hoverColor="#262626"
                    />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <ContactItem 
                      icon={<Mail className="h-6 w-6" />}
                      label="Send an Email"
                      href="mailto:jackletrungtin@gmail.com"
                      color="bg-primary"
                      hoverColor="var(--primary)"
                    />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <motion.div 
            className="text-center mt-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p>Let's create something amazing together!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
