import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
const ToolCard = ({
  tool,
  index = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Staggered effect based on index

    return () => clearTimeout(timeout);
  }, [index]);
  return /*#__PURE__*/React.createElement(Card, {
    className: `tool-card h-full flex flex-col card-animation staggered-item ${isVisible ? 'staggered-item-visible' : ''}
      ${tool.featured ? 'border-galaxy-accent border-opacity-50 shadow-md shadow-galaxy-accent/20' : ''}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, tool.featured && /*#__PURE__*/React.createElement(Badge, {
    className: "absolute -top-2 -right-2 bg-galaxy-accent text-white"
  }, "Featured"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: `h-36 mb-4 relative overflow-hidden rounded-md bg-gradient-to-tr from-galaxy-card to-galaxy-background flex items-center justify-center p-4 transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : ''}`
  }, tool.imageUrl ? /*#__PURE__*/React.createElement("div", {
    className: `flex items-center justify-center h-full w-full overflow-hidden transition-transform duration-700 ${isHovered ? 'scale-110 rotate-animation' : ''}`
  }, /*#__PURE__*/React.createElement("img", {
    src: tool.imageUrl,
    alt: tool.name,
    className: "max-h-full max-w-full object-contain transition-all duration-300",
    onError: e => {
      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=8B5CF6&color=fff`;
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: `w-full h-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'pulse-animation' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold text-galaxy-primary opacity-50"
  }, tool.name.charAt(0))), isHovered && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-galaxy-primary/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"
  })), /*#__PURE__*/React.createElement("h3", {
    className: `font-semibold text-lg mb-2 text-high-contrast transition-colors duration-300 ${isHovered ? 'text-galaxy-primary' : ''}`
  }, tool.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-medium-contrast mb-4 line-clamp-3"
  }, tool.description), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(Badge, {
    className: `bg-galaxy-primary/30 text-white hover:bg-galaxy-primary/40 transition-all duration-300 ${isHovered ? 'bg-galaxy-primary/50' : ''}`
  }, tool.category), tool.pricing && /*#__PURE__*/React.createElement(Badge, {
    className: `ml-2 bg-galaxy-secondary/30 text-white hover:bg-galaxy-secondary/40 transition-all duration-300 ${isHovered ? 'bg-galaxy-secondary/50' : ''}`
  }, tool.pricing))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1 mb-4"
  }, tool.tags.slice(0, 3).map((tag, tagIndex) => /*#__PURE__*/React.createElement(TooltipProvider, {
    key: tag
  }, /*#__PURE__*/React.createElement(Tooltip, null, /*#__PURE__*/React.createElement(TooltipTrigger, null, /*#__PURE__*/React.createElement("span", {
    className: `inline-block px-2 py-1 text-xs rounded-full bg-galaxy-card/80 text-gray-300 transition-all duration-300
                  ${isHovered ? 'transform translate-y-[-2px]' : ''}`,
    style: {
      transitionDelay: `${tagIndex * 50}ms`
    }
  }, "#", tag)), /*#__PURE__*/React.createElement(TooltipContent, null, tag)))), tool.tags.length > 3 && /*#__PURE__*/React.createElement(TooltipProvider, null, /*#__PURE__*/React.createElement(Tooltip, null, /*#__PURE__*/React.createElement(TooltipTrigger, null, /*#__PURE__*/React.createElement("span", {
    className: `inline-block px-2 py-1 text-xs rounded-full bg-galaxy-card/80 text-gray-300 transition-all duration-300
                ${isHovered ? 'transform translate-y-[-2px]' : ''}`
  }, "+", tool.tags.length - 3)), /*#__PURE__*/React.createElement(TooltipContent, null, tool.tags.slice(3).join(", "))))), /*#__PURE__*/React.createElement(Button, {
    className: `mt-auto bg-galaxy-primary hover:bg-galaxy-primary/80 text-white w-full flex items-center gap-2
        transition-all duration-300 hover:shadow-md hover:shadow-galaxy-primary/20 ${isHovered ? 'bg-galaxy-primary/90 pulse-animation' : ''}`,
    onClick: () => window.open(tool.url, "_blank", "noopener,noreferrer")
  }, "Explore Tool ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 14,
    className: `transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`
  })));
};
export default ToolCard;
