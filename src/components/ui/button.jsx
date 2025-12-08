// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-3 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 ${className}`}
    >
      {children}
    </button>
  );
};
