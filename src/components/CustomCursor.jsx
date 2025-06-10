import { useEffect, useState } from "react";
const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100
  });
  const [targetPosition, setTargetPosition] = useState({
    x: -100,
    y: -100
  });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [trailPositions, setTrailPositions] = useState([]);

  // Smoother animation with requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    let prevTimestamp;
    const animate = timestamp => {
      if (!prevTimestamp) prevTimestamp = timestamp;
      const deltaTime = timestamp - prevTimestamp;
      prevTimestamp = timestamp;

      // Smooth interpolation of cursor position (easing)
      const ease = 0.15; // Adjust for faster/slower following (higher = faster)
      const dx = targetPosition.x - position.x;
      const dy = targetPosition.y - position.y;
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        const newX = position.x + dx * ease;
        const newY = position.y + dy * ease;
        setPosition({
          x: newX,
          y: newY
        });

        // Add positions to trail with throttling
        if (trailPositions.length === 0 || Math.abs(trailPositions[0].x - newX) > 10 || Math.abs(trailPositions[0].y - newY) > 10) {
          setTrailPositions(prev => [{
            x: newX,
            y: newY
          }, ...prev.slice(0, 5)]);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, targetPosition, trailPositions]);
  useEffect(() => {
    const updateTargetPosition = e => {
      setTargetPosition({
        x: e.clientX,
        y: e.clientY
      });
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
    window.addEventListener("mousemove", updateTargetPosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects to interactive elements
    setTimeout(addHoverListeners, 1000);
    return () => {
      window.removeEventListener("mousemove", updateTargetPosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  if (typeof window === 'undefined') return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `cursor-dot ${clicked ? 'cursor-dot-clicked' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`,
    style: {
      left: `${position.x}px`,
      top: `${position.y}px`,
      transition: "background-color 0.3s ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: `cursor-outline ${clicked ? 'cursor-outline-clicked' : ''} ${hovered ? 'cursor-outline-hovered' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`,
    style: {
      left: `${position.x}px`,
      top: `${position.y}px`,
      transition: "transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease"
    }
  }), trailPositions.map((pos, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "cursor-trail",
    style: {
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      opacity: 1 - index * 0.2,
      transform: `scale(${1 - index * 0.15})`
    }
  })));
};
export default CustomCursor;
