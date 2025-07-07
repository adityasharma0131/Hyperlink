import React from "react";

// ✨ Stars Generator Component
const Stars = ({ count = 50 }) => {
  const starsArray = Array.from({ length: count });

  return (
    <div className="stars-wrapper">
      {starsArray.map((_, index) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1.5; // 1.5px to 3.5px
        const delay = Math.random() * 5;

        return (
          <div
            key={index}
            className="star"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};
export default Stars;
