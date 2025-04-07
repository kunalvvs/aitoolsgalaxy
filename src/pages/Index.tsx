
import { useState } from "react";
import Header from "@/components/Header";
import CategoryList from "@/components/CategoryList";
import ToolsGrid from "@/components/ToolsGrid";
import Footer from "@/components/Footer";
import toolsData from "@/data/toolsData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories from tools data
  const categories = Array.from(new Set(toolsData.map(tool => tool.category)));

  return (
    <div className="min-h-screen galaxy-gradient">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-galaxy-primary opacity-10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 left-20 w-64 h-64 bg-galaxy-accent opacity-5 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-galaxy-secondary opacity-5 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: "2.5s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Header onSearch={setSearchQuery} />
        
        <main>
          <CategoryList 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
          
          <ToolsGrid 
            tools={toolsData} 
            filteredCategory={activeCategory}
            searchQuery={searchQuery}
          />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
