
import { RocketIcon } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${size === "sm" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : "w-10 h-10"}`}>
        <div className="absolute inset-0 bg-galaxy-primary rounded-full opacity-20 animate-pulse-soft"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <RocketIcon className={`text-galaxy-primary ${size === "sm" ? "w-4 h-4" : size === "md" ? "w-6 h-6" : "w-8 h-8"}`} />
        </div>
      </div>
      {showText && (
        <span className={`font-bold ${sizeClasses[size]} bg-clip-text text-transparent bg-gradient-to-r from-galaxy-primary to-galaxy-accent`}>
          AI Tools Galaxy
        </span>
      )}
    </div>
  );
};

export default Logo;
