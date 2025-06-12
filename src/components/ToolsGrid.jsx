import { useState, useEffect } from 'react';
import ToolCard from './ToolCard';
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ToolsGrid = ({ tools, filteredCategory, searchQuery, isLoading = false }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Reset animation state when filters change
    setAnimateIn(false);
    
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filteredCategory, searchQuery]);

  // Filter tools based on category and search query
  const filteredTools = tools.filter(tool => {
    const matchesCategory = filteredCategory === null || tool.category === filteredCategory;
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Group tools by category
  const toolsByCategory = {};
  
  filteredTools.forEach(tool => {
    if (!toolsByCategory[tool.category]) {
      toolsByCategory[tool.category] = [];
    }
    toolsByCategory[tool.category].push(tool);
  });

  if (isLoading) {
    return (
      <div className="space-y-12 fade-in">
        {Array.from({ length: 3 }).map((_, categoryIndex) => (
          <div key={categoryIndex} className="category-section">
            <Skeleton className="h-8 w-40 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, toolIndex) => (
                <Card key={toolIndex} className="p-6 h-[360px]">
                  <Skeleton className="h-36 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-6 w-20 mb-4" />
                  <Skeleton className="h-10 w-full mt-auto" />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredTools.length === 0) {
    return (
      <Card className="p-8 text-center bg-galaxy-card scale-in">
        <h3 className="text-lg font-medium mb-2 text-high-contrast">No tools found</h3>
        <p className="text-medium-contrast">
          Try changing your search query or filter selection.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-12">
      {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
        <div key={category} className={`category-section ${animateIn ? 'fade-in' : ''}`} style={{animationDelay: '100ms'}}>
          <h2 className="text-2xl font-bold mb-6 text-glow text-galaxy-primary">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryTools.map((tool, index) => (
              <div key={tool.id}>
                <ToolCard tool={tool} index={index} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsGrid;