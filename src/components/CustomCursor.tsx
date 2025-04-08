
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let moveTimeout: number;
    
    const updatePosition = (e: MouseEvent) => {
      setLastPosition(position);
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Set moving state to true
      setIsMoving(true);
      
      // Clear any existing timeouts
      if (moveTimeout) clearTimeout(moveTimeout);
      
      // Set a timeout to detect when movement stops
      moveTimeout = window.setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll("a, button, .tool-card, input, .hoverable");
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
      if (moveTimeout) clearTimeout(moveTimeout);
    };
  }, [position]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        className={`cursor-dot ${clicked ? 'scale-50 bg-galaxy-accent' : ''} ${isMoving ? 'cursor-moving' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-outline ${clicked ? 'scale-75' : ''} ${hovered ? 'scale-150 bg-galaxy-primary/10' : ''} ${isMoving ? 'cursor-outline-moving' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {isMoving && (
        <div
          className="cursor-trail"
          style={{ left: `${lastPosition.x}px`, top: `${lastPosition.y}px` }}
        />
      )}
    </>
  );
};

export default CustomCursor;
