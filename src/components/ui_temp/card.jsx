// src/components/ui/card.jsx
import React from "react";

// Main Card container
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 border border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// CardContent wrapper
export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
