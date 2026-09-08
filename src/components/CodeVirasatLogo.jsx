import React from "react";
import { Link } from "react-router-dom";

export default function CodeVirasatLogo({ iconOnly = false, size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Black & Gold Shield Emblem (Fixed Brand Mark) */}
      <div className={`relative ${sizeClasses[size] || "w-10 h-10"} rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-400/40 transition-all duration-300`}>
        <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* CodeVirasat Shield & Sun Emblem SVG */}
          <svg className="w-6 h-6 text-amber-400 group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.7"/>
            <circle cx="50" cy="50" r="32" stroke="#d97706" strokeWidth="4"/>
            {/* Heritage Arch & Code Bracket Blend */}
            <path d="M32 68 V45 C32 32 68 32 68 45 V68 H60 V47 C60 38 40 38 40 47 V68 H32 Z" fill="currentColor"/>
            <path d="M22 50 L32 38 L32 62 Z" fill="#F59E0B" />
            <path d="M78 50 L68 38 L68 62 Z" fill="#F59E0B" />
            <path d="M20 50 H36 L42 36 L50 64 L58 40 L64 50 H80" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 leading-none">
            <span className={`font-serif font-black tracking-wider text-white ${textClasses[size] || "text-xl"}`}>
              Code
            </span>
            <span className={`font-serif font-black tracking-wider text-amber-400 ${textClasses[size] || "text-xl"}`}>
              Virasat
            </span>
          </div>
          <span className="text-[9px] tracking-[0.2em] uppercase font-mono text-slate-400 font-bold mt-1">
            Living Heritage AI
          </span>
        </div>
      )}
    </Link>
  );
}
