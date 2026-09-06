import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Compass, Sparkles, Menu, X, HelpCircle, Layers, SlidersHorizontal, Activity, Bot, Quote, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ discoveredCount = 0, totalCount = 10 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navSections = [
    { name: "Curiosity Facts", targetId: "did-you-know-section", icon: HelpCircle },
    { name: "Era Layers", targetId: "delhi-layers-section", icon: Layers },
    { name: "Heritage Map", targetId: "heritage-map-section", icon: Compass },
    { name: "Skill Cards", targetId: "heritage-skills-section", icon: Shield },
    { name: "Then vs Now", targetId: "then-vs-now-section", icon: SlidersHorizontal },
    { name: "Health Monitor", targetId: "heritage-health-section", icon: Activity },
    { name: "Delhi Remembers", targetId: "delhi-remembers-section", icon: Quote },
    { name: "Ask Delhi AI", targetId: "ask-delhi-section", icon: Bot }
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-400/40 transition-all duration-300">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <svg className="w-7 h-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.6"/>
                  <circle cx="50" cy="50" r="32" stroke="#d97706" strokeWidth="4"/>
                  <path d="M32 68 V45 C32 32 68 32 68 45 V68 H60 V47 C60 38 40 38 40 47 V68 H32 Z" fill="currentColor"/>
                  <path d="M20 50 H36 L42 36 L50 64 L58 40 L64 50 H80" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-wider text-amber-100 group-hover:text-amber-300 transition-colors">
                  DILLI
                </span>
                <span className="text-xs sm:text-sm font-serif italic text-amber-400 font-medium">
                  • Stories That Still Live
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-amber-200/60 -mt-1 font-semibold">
                Interactive Heritage Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navSections.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  className="px-3 py-2 rounded-full text-xs font-medium text-amber-100/80 hover:text-amber-300 hover:bg-amber-900/30 transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Discovery Stats Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300 shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>
                <strong>{discoveredCount} / {totalCount}</strong> Discovered
              </span>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-amber-200 bg-stone-900 border border-amber-500/30 hover:border-amber-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-stone-950 border-b border-amber-500/30 px-6 pt-3 pb-6 space-y-2"
          >
            {navSections.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-amber-100 hover:bg-amber-900/40 text-left transition-colors"
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
