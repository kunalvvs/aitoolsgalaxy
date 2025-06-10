import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CategoryList from "@/components/CategoryList";
import ToolsGrid from "@/components/ToolsGrid";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import toolsData from "@/data/tools";
import { toast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
const Index = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique categories from tools data
  const categories = Array.from(new Set(toolsData.map(tool => tool.category)));

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to AI Tools Galaxy",
        description: `Explore ${toolsData.length} tools across ${categories.length} categories`
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen galaxy-gradient"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-96 h-96 bg-galaxy-primary opacity-10 rounded-full blur-3xl animate-pulse-soft"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-1/3 left-20 w-64 h-64 bg-galaxy-accent opacity-5 rounded-full blur-3xl animate-pulse-soft",
    style: {
      animationDelay: "1s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/3 right-1/4 w-80 h-80 bg-galaxy-secondary opacity-5 rounded-full blur-3xl animate-pulse-soft",
    style: {
      animationDelay: "2.5s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-40 left-[10%] opacity-5"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "lg",
    showText: false
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-40 right-[15%] opacity-5 rotate-45"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md",
    showText: false
  }))), /*#__PURE__*/React.createElement(CustomCursor, null), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 relative z-10 pb-8"
  }, /*#__PURE__*/React.createElement(Header, {
    onSearch: setSearchQuery
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(CategoryList, {
    categories: categories,
    activeCategory: activeCategory,
    onSelectCategory: setActiveCategory
  }), /*#__PURE__*/React.createElement(ToolsGrid, {
    tools: toolsData,
    filteredCategory: activeCategory,
    searchQuery: searchQuery,
    isLoading: isLoading
  })), /*#__PURE__*/React.createElement(Footer, null)));
};
export default Index;
