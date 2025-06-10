import { RocketIcon } from "lucide-react";
const Logo = ({
  size = "md",
  showText = true
}) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative ${size === "sm" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : "w-10 h-10"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-galaxy-primary rounded-full opacity-20 animate-pulse-soft"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(RocketIcon, {
    className: `text-galaxy-primary ${size === "sm" ? "w-4 h-4" : size === "md" ? "w-6 h-6" : "w-8 h-8"}`
  }))), showText && /*#__PURE__*/React.createElement("span", {
    className: `font-bold ${sizeClasses[size]} bg-clip-text text-transparent bg-gradient-to-r from-galaxy-primary to-galaxy-accent`
  }, "AI Tools Galaxy"));
};
export default Logo;
