import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, BookOpen, Award, Flame, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'Delhi Trails', path: '/trails', icon: MapPin },
    { name: 'Stories & Legends', path: '/stories', icon: BookOpen },
    { name: 'Heritage Quiz', path: '/quiz', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#14100E]/90 backdrop-blur-md border-b border-[#362A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* New Custom Brand Logo: Golden Chakra & Heritage Arch Pulse Emblem */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#C85A32] to-[#6B1D2F] p-[2px] shadow-lg shadow-[#C85A32]/25 group-hover:shadow-[#D4AF37]/40 transition-all duration-300">
              <div className="w-full h-full bg-[#1A1412] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                {/* SVG Heritage Sun Pulse Emblem */}
                <svg className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Radiant Sun Rays */}
                  <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.6"/>
                  {/* Outer Ring */}
                  <circle cx="50" cy="50" r="32" stroke="#C85A32" strokeWidth="4"/>
                  {/* Heritage Arch Silhouette */}
                  <path d="M32 68 V45 C32 32 68 32 68 45 V68 H60 V47 C60 38 40 38 40 47 V68 H32 Z" fill="currentColor"/>
                  {/* Pulse Rhythm Line */}
                  <path d="M20 50 H36 L42 36 L50 64 L58 40 L64 50 H80" stroke="#F3E086" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heritage text-xl sm:text-2xl font-bold tracking-wider text-[#F7F3E9] group-hover:text-[#D4AF37] transition-colors">
                  VIRASAT
                </span>
                <span className="font-heritage text-xl sm:text-2xl font-extrabold text-[#C85A32]">
                  PULSE
                </span>
              </div>
              <span className="text-[10px] tracking-[0.22em] uppercase font-sans text-[#D4AF37]/80 -mt-1 font-semibold">
                Delhi Heritage Journeys
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#C85A32]/15 text-[#D4AF37] border border-[#D4AF37]/40 shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                        : 'text-[#EFE6D5]/80 hover:text-[#F7F3E9] hover:bg-[#2A221E]/60'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-[#C85A32]" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* User Gamification Stats & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1815] border border-[#D4AF37]/30 shadow-inner">
              <Flame className="w-4 h-4 text-[#C85A32] animate-pulse" />
              <div className="flex flex-col text-xs leading-none">
                <span className="text-[10px] text-[#EFE6D5]/60 font-sans uppercase">Level 3</span>
                <span className="font-semibold text-[#D4AF37]">450 XP</span>
              </div>
            </div>

            <Link
              to="/trails"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C85A32] to-[#B34726] hover:from-[#E0734C] hover:to-[#C85A32] text-white font-medium text-sm shadow-md shadow-[#C85A32]/25 hover:shadow-lg hover:shadow-[#C85A32]/40 transition-all flex items-center gap-2 group"
            >
              <span>Explore Delhi</span>
              <Sparkles className="w-4 h-4 text-[#F3E086] group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#EFE6D5] bg-[#221B17] border border-[#362A24] hover:border-[#D4AF37]/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#C85A32]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#1A1412] border-b border-[#362A24] px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex items-center justify-between px-3 py-2 bg-[#241E1C] rounded-lg border border-[#D4AF37]/20">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#C85A32]" />
                <span className="text-xs text-[#EFE6D5]/80 font-medium">Delhi Heritage Explorer</span>
              </div>
              <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                450 XP • Lvl 3
              </span>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#C85A32]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                        : 'text-[#EFE6D5]/80 hover:bg-[#221B17]'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 text-[#C85A32]" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}

            <div className="pt-2">
              <Link
                to="/trails"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#6B1D2F] text-center font-medium text-white shadow-lg flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-[#D4AF37]" />
                <span>Launch Delhi Map</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
