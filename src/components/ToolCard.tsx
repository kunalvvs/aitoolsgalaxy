
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export interface ToolData {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
  url: string;
  pricing: string;
  tags: string[];
  featured?: boolean;
}

interface ToolCardProps {
  tool: ToolData;
  index?: number;
}

const ToolCard = ({ tool, index = 0 }: ToolCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Staggered effect based on index
    
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Card 
      className={`tool-card h-full flex flex-col card-hover-effect staggered-item ${isVisible ? 'staggered-item-visible' : ''} 
      ${tool.featured ? 'border-galaxy-accent border-opacity-50 shadow-md shadow-galaxy-accent/20' : ''}`}
    >
      {tool.featured && (
        <Badge className="absolute -top-2 -right-2 bg-galaxy-accent text-white">
          Featured
        </Badge>
      )}
      
      <div className="flex-1">
        <div className="h-36 mb-4 relative overflow-hidden rounded-md bg-gradient-to-tr from-galaxy-card to-galaxy-background flex items-center justify-center p-4">
          {tool.imageUrl ? (
            <div className="flex items-center justify-center h-full w-full overflow-hidden">
              <img 
                src={tool.imageUrl} 
                alt={tool.name} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=8B5CF6&color=fff`;
                }}
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-galaxy-primary opacity-50">
                {tool.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-lg mb-2 text-high-contrast">{tool.name}</h3>
        <p className="text-sm text-medium-contrast mb-4 line-clamp-3">{tool.description}</p>
        
        <div className="mb-3">
          <Badge className="bg-galaxy-primary/30 text-white hover:bg-galaxy-primary/40">
            {tool.category}
          </Badge>
          {tool.pricing && (
            <Badge className="ml-2 bg-galaxy-secondary/30 text-white hover:bg-galaxy-secondary/40">
              {tool.pricing}
            </Badge>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {tool.tags.slice(0, 3).map((tag) => (
          <TooltipProvider key={tag}>
            <Tooltip>
              <TooltipTrigger>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-galaxy-card/80 text-gray-300">
                  #{tag}
                </span>
              </TooltipTrigger>
              <TooltipContent>{tag}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        {tool.tags.length > 3 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-galaxy-card/80 text-gray-300">
                  +{tool.tags.length - 3}
                </span>
              </TooltipTrigger>
              <TooltipContent>{tool.tags.slice(3).join(", ")}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      <Button 
        className="mt-auto bg-galaxy-primary hover:bg-galaxy-primary/80 text-white w-full flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:shadow-galaxy-primary/20"
        onClick={() => window.open(tool.url, "_blank", "noopener,noreferrer")}
      >
        Explore Tool <ExternalLink size={14} />
      </Button>
    </Card>
  );
};

export default ToolCard;
