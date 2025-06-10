import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Logo from "./Logo";
const Header = ({
  onSearch
}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = e => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "py-6 mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-fade-in"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-auto max-w-md relative animate-fade-in",
    style: {
      animationDelay: '200ms'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Search tools, categories, or tags...",
    value: searchValue,
    onChange: handleSearch,
    className: "pl-10 pr-4 py-2 bg-galaxy-card border-galaxy-primary/20 text-galaxy-text placeholder:text-galaxy-text/50 w-full md:w-80"
  }), /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-galaxy-text/50 w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold mb-2 text-glow bg-clip-text text-transparent bg-gradient-to-r from-galaxy-primary via-galaxy-accent to-galaxy-secondary animate-fade-in",
    style: {
      animationDelay: '400ms'
    }
  }, "Explore the AI Tools Galaxy"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium-contrast max-w-2xl mx-auto animate-fade-in",
    style: {
      animationDelay: '600ms'
    }
  }, "Discover and explore the universe of AI tools to enhance your workflow, creativity, and productivity")));
};
export default Header;
