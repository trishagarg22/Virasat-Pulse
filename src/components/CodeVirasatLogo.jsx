import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/codevirasat-logo.png";

export default function CodeVirasatLogo({ iconOnly = false, size = "md", className = "" }) {
  const logoDimensions = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14"
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Official CodeVirasat Circular Emblem with Subtle Gold Glow */}
      <div className={`relative ${logoDimensions[size] || "w-11 h-11"} rounded-full p-[1.5px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800 shadow-md group-hover:shadow-amber-400/50 transition-all duration-300`}>
        <img
          src={logoImg}
          alt="CodeVirasat Logo"
          className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 leading-none">
            <span className={`font-serif font-black tracking-wider text-white ${titleSizes[size] || "text-xl"}`}>
              Code
            </span>
            <span className={`font-serif font-black tracking-wider text-amber-400 ${titleSizes[size] || "text-xl"}`}>
              Virasat
            </span>
          </div>
          <span className="text-[9px] tracking-[0.15em] uppercase font-mono text-amber-300/80 font-semibold mt-1">
            Rooted in Heritage, Built in Code
          </span>
        </div>
      )}
    </Link>
  );
}
