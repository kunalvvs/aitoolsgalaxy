
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"; 
import { Grid2x2, LayoutList } from "lucide-react";

interface CategoryListProps {
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryList = ({ 
  categories, 
  activeCategory, 
  onSelectCategory 
}: CategoryListProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [animatedCategories, setAnimatedCategories] = useState<string[]>([]);

  useEffect(() => {
    // Staggered animation for category buttons
    const timer = setTimeout(() => {
      setAnimatedCategories(['all', ...categories]);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [categories]);

  return (
    <div className="mb-8 fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl font-bold mb-3 sm:mb-0 text-high-contrast">Categories</h2>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode('grid')}
            className={`${viewMode === 'grid' ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card text-gray-200'} transition-all duration-300`}
          >
            <Grid2x2 size={16} />
          </Button>
          <Button
            variant="outline" 
            size="sm"
            onClick={() => setViewMode('list')}
            className={`${viewMode === 'list' ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card text-gray-200'} transition-all duration-300`}
          >
            <LayoutList size={16} />
          </Button>
        </div>
      </div>
      
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' : 'grid-cols-1 sm:grid-cols-2'} gap-2`}>
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => onSelectCategory(null)}
          className={`${activeCategory === null ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card hover:bg-galaxy-card/80 text-gray-200'} 
                    transition-all duration-300 opacity-0 animate-[fadeIn_0.3s_ease_forwards]`}
          style={{ animationDelay: `${0 * 50}ms` }}
        >
          All
        </Button>
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onSelectCategory(category)}
            className={`${activeCategory === category ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card hover:bg-galaxy-card/80 text-gray-200'} 
                      transition-all duration-300 opacity-0 animate-[fadeIn_0.3s_ease_forwards]`}
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
