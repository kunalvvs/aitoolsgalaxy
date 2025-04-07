
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  // Add scroll event listener for header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-20 py-6 mb-6 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-galaxy-background/90 shadow-md' : ''}`}>
      <div className={`flex flex-col md:flex-row items-center justify-between gap-4 opacity-0 ${isVisible ? 'animate-[fadeIn_0.6s_ease_forwards]' : ''}`}>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-galaxy-primary to-galaxy-accent mb-2">
            AI Tools Galaxy
          </h1>
          <p className="text-gray-300 max-w-lg">
            Discover the universe of AI tools organized by categories. Explore, compare, and find the perfect tools for your needs.
          </p>
        </div>
        
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-galaxy-primary/70" size={18} />
          <Input 
            type="search"
            placeholder="Search AI tools..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-10 w-full md:w-[300px] bg-galaxy-card/80 border-galaxy-primary/30 focus:border-galaxy-primary text-white placeholder:text-gray-400"
          />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8" 
              onClick={clearSearch}
            >
              <X size={16} className="text-galaxy-text/70" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
