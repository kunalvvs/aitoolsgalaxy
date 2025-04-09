
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ExternalLink, Linkedin, Youtube, Instagram } from "lucide-react";

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
      name: "Instagram", 
      url: "https://www.instagram.com/innovative.developer/", 
      icon: <Instagram className="w-5 h-5" />
    },
    { 
      name: "Telegram", 
      url: "https://t.me/innovativedeveloper", 
      icon: <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="m15 10-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
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
      icon: <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <circle cx="9" cy="12" r="1"/>
              <circle cx="15" cy="12" r="1"/>
              <path d="M7.5 7.2C8.4 6.5 9.7 6 11 6h2c1.3 0 2.6.5 3.5 1.2"/>
              <path d="M17 14a5 5 0 0 1-4.4 2.6A6 6 0 0 1 7 14"/>
              <path d="M15.5 17c.9.7 1.5 1.7 1.5 3 0 2-2 3-4 3s-4-1-4-3c0-1.3.6-2.3 1.5-3"/>
              <path d="M12 6c3 0 6-1 6-3 0-2-3-3-6-3S6 1 6 3c0 2 3 3 6 3"/>
              <path d="M6 11c-3 0-4-3-4-5 0-1 0-1 1-1h18c1 0 1 0 1 1 0 2-1 5-4 5"/>
              <path d="M6 11v3c0 4.9 2.3 5 6 5s6-.1 6-5v-3"/>
            </svg>
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
