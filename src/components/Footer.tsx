
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ExternalLink } from "lucide-react";

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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-galaxy-text hover:text-galaxy-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-galaxy-text hover:text-galaxy-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-galaxy-text hover:text-galaxy-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
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
