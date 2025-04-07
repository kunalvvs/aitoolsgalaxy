
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header className="relative z-10 py-6 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-galaxy-primary to-galaxy-accent mb-2">
            AI Tools Galaxy
          </h1>
          <p className="text-galaxy-text/70 max-w-lg">
            Discover the universe of AI tools organized by categories. Explore, compare, and find the perfect tools for your needs.
          </p>
        </div>
        
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-galaxy-text/50" size={18} />
          <Input 
            type="search"
            placeholder="Search AI tools..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 w-full md:w-[300px] bg-galaxy-card border-galaxy-primary/20 focus:border-galaxy-primary text-galaxy-text"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
