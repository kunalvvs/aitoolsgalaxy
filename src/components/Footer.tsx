
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ExternalLink, Twitter, Github, Linkedin, Youtube, Discord } from "lucide-react";

const Footer = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const handleSubmitToolClick = () => {
    toast({
      title: "Coming Soon!",
      description: "The tool submission feature will be available soon.",
    });
  };

  const handleAboutUsClick = () => {
    toast({
      title: "About AI Tools Galaxy",
      description: "A comprehensive directory of AI tools across various categories. Discover the perfect tools for your specific needs.",
    });
  };

  // Social media links from innovativedeveloper.bio.link
  const socialLinks = [
    { 
      name: "Twitter", 
      url: "https://twitter.com/thedeveloper001", 
      icon: <Twitter className="w-5 h-5" />
    },
    { 
      name: "GitHub", 
      url: "https://github.com/innovative-developer", 
      icon: <Github className="w-5 h-5" />
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/innovativedeveloper/", 
      icon: <Linkedin className="w-5 h-5" />
    },
    { 
      name: "YouTube", 
      url: "https://www.youtube.com/@InnovativeDeveloper", 
      icon: <Youtube className="w-5 h-5" />
    },
    { 
      name: "Discord", 
      url: "https://discord.gg/kxvDVewZA9", 
      icon: <Discord className="w-5 h-5" />
    }
  ];

  return (
    <footer className="mt-16 py-8 border-t border-galaxy-card">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-galaxy-primary to-galaxy-accent">
              AI Tools Galaxy
            </h3>
            <p className="text-sm text-galaxy-text/70">
              Your ultimate directory for exploring AI tools across the universe.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-galaxy-card text-galaxy-text hover:bg-galaxy-card/80"
              onClick={handleSubmitToolClick}
            >
              Submit a Tool
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-galaxy-card text-galaxy-text hover:bg-galaxy-card/80"
              onClick={handleAboutUsClick}
            >
              About Us
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-galaxy-text hover:text-galaxy-primary transition-colors"
                title={social.name}
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-galaxy-text/50">
            © {new Date().getFullYear()} AI Tools Galaxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
