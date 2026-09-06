import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Compass, Sparkles, Menu, X, Layers, BookOpen, Award, Home as HomeIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ discoveredCount = 0, totalCount = 10 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 5 CORE NAV ITEMS (Scannable in under 2 seconds)
  const coreNavItems = [
    { name: "Home", targetId: "top", icon: HomeIcon },
    { name: "Explore Map", targetId: "heritage-map-section", icon: Compass },
    { name: "Timeline", targetId: "delhi-layers-section", icon: Layers },
    { name: "Stories", targetId: "delhi-remembers-section", icon: BookOpen },
    { name: "Quiz & Lore", targetId: "heritage-skills-section", icon: Award }
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" onClick={() => scrollToSection("top")} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[2px] shadow-md group-hover:shadow-amber-400/30 transition-all">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400 group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="32" stroke="#d97706" strokeWidth="4"/>
                  <path d="M32 68 V45 C32 32 68 32 68 45 V68 H60 V47 C60 38 40 38 40 47 V68 H32 Z" fill="currentColor"/>
                  <path d="M20 50 H36 L42 36 L50 64 L58 40 L64 50 H80" stroke="#fef08a" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-black tracking-wider text-amber-100 group-hover:text-amber-300 transition-colors">
                DILLI
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-amber-200/60 -mt-1">
                Stories That Still Live
              </span>
            </div>
          </Link>

          {/* 5 Core Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {coreNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.targetId)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-amber-200/70 hover:text-amber-100 hover:bg-stone-900 transition-all flex items-center gap-2"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400/80" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Single Focused Accent CTA: Discovery Progress Pill */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection("heritage-map-section")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{discoveredCount} / {totalCount} Discovered</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-amber-200 bg-stone-900 border border-amber-500/30"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-950 border-b border-amber-500/30 px-6 pt-2 pb-6 space-y-2"
          >
            {coreNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.targetId)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-amber-100 hover:bg-stone-900 text-left transition-colors"
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
