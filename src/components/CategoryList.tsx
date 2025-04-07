
import { useState } from 'react';
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

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl font-semibold mb-3 sm:mb-0">Categories</h2>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode('grid')}
            className={`${viewMode === 'grid' ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card text-galaxy-text'}`}
          >
            <Grid2x2 size={16} />
          </Button>
          <Button
            variant="outline" 
            size="sm"
            onClick={() => setViewMode('list')}
            className={`${viewMode === 'list' ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card text-galaxy-text'}`}
          >
            <LayoutList size={16} />
          </Button>
        </div>
      </div>
      
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' : 'grid-cols-1 sm:grid-cols-2'} gap-2`}>
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => onSelectCategory(null)}
          className={`${activeCategory === null ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card hover:bg-galaxy-card/80 text-galaxy-text'}`}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onSelectCategory(category)}
            className={`${activeCategory === category ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card hover:bg-galaxy-card/80 text-galaxy-text'}`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
