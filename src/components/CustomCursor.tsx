
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll("a, button, .tool-card, input");
      hoverables.forEach(element => {
        element.classList.add("hoverable");
        element.addEventListener("mouseenter", () => setHovered(true));
        element.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    // Add hover effects to interactive elements
    setTimeout(addHoverListeners, 1000);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        className={`cursor-dot ${clicked ? 'scale-50' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-outline ${clicked ? 'scale-75' : ''} ${hovered ? 'scale-150 bg-galaxy-primary/10' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
