import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Grid2x2, LayoutList } from "lucide-react";
const CategoryList = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  const [viewMode, setViewMode] = useState('grid');
  const [animatedCategories, setAnimatedCategories] = useState([]);
  useEffect(() => {
    // Staggered animation for category buttons
    const timer = setTimeout(() => {
      setAnimatedCategories(['all', ...categories]);
    }, 200);
    return () => clearTimeout(timer);
  }, [categories]);
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-8 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold mb-3 sm:mb-0 text-high-contrast"
  }, "Categories"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setViewMode('grid'),
    className: `${viewMode === 'grid' ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card text-gray-200'} transition-all duration-300`
  }, /*#__PURE__*/React.createElement(Grid2x2, {
    size: 16
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setViewMode('list'),
    className: `${viewMode === 'list' ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card text-gray-200'} transition-all duration-300`
  }, /*#__PURE__*/React.createElement(LayoutList, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: `grid ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' : 'grid-cols-1 sm:grid-cols-2'} gap-2`
  }, /*#__PURE__*/React.createElement(Button, {
    variant: activeCategory === null ? "default" : "outline",
    onClick: () => onSelectCategory(null),
    className: `${activeCategory === null ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card hover:bg-galaxy-card/80 text-gray-200'}
                    transition-all duration-300 opacity-0 animate-[fadeIn_0.3s_ease_forwards]`,
    style: {
      animationDelay: `${0 * 50}ms`
    }
  }, "All"), categories.map((category, index) => /*#__PURE__*/React.createElement(Button, {
    key: category,
    variant: activeCategory === category ? "default" : "outline",
    onClick: () => onSelectCategory(category),
    className: `${activeCategory === category ? 'bg-galaxy-primary text-white' : 'bg-galaxy-card hover:bg-galaxy-card/80 text-gray-200'}
                      transition-all duration-300 opacity-0 animate-[fadeIn_0.3s_ease_forwards]`,
    style: {
      animationDelay: `${(index + 1) * 50}ms`
    }
  }, category))));
};
export default CategoryList;
