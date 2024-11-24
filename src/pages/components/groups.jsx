import React from "react";

/** @param {{ children: React.ReactNode } & HTMLDivElement} params */
export default function Groups({ title, ariaDescription, className, children }) {
  return (
    <div className={className || "mt-8"}>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-[#a0a0a0] text-sm ml-1">{ariaDescription}</p>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {children}
      </div>
    </div>
  );
}