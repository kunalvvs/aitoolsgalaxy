
import { Button } from "@/components/ui/button";

const Footer = () => {
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
            <Button variant="outline" size="sm" className="bg-galaxy-card text-galaxy-text hover:bg-galaxy-card/80">
              Submit a Tool
            </Button>
            <Button variant="outline" size="sm" className="bg-galaxy-card text-galaxy-text hover:bg-galaxy-card/80">
              About Us
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-galaxy-text/50">
          © {new Date().getFullYear()} AI Tools Galaxy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
