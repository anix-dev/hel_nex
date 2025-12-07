// src/components/ui/input.jsx
import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 ${className}`}
    />
  );
};
