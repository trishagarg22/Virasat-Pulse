import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, PlusCircle, Sparkles, MapPin } from 'lucide-react';

export default function DashboardTopBar({ searchQuery, setSearchQuery, selectedRegion, setSelectedRegion, onOpenSaveModal }) {
  return (
    <header className="bg-[#14100E]/95 backdrop-blur-md border-b border-[#362A24] sticky top-0 z-40 px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#C85A32] to-[#6B1D2F] p-[2px] shadow-lg shadow-[#C85A32]/25 group-hover:shadow-[#D4AF37]/40 transition-all duration-300">
          <div className="w-full h-full bg-[#1A1412] rounded-[10px] flex items-center justify-center relative overflow-hidden">
            <svg className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.6"/>
              <circle cx="50" cy="50" r="32" stroke="#C85A32" strokeWidth="4"/>
              <path d="M32 68 V45 C32 32 68 32 68 45 V68 H60 V47 C60 38 40 38 40 47 V68 H32 Z" fill="currentColor"/>
              <path d="M20 50 H36 L42 36 L50 64 L58 40 L64 50 H80" stroke="#F3E086" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-heritage text-lg font-bold tracking-wider text-[#F7F3E9]">VIRASAT</span>
            <span className="font-heritage text-lg font-extrabold text-[#C85A32]">PULSE</span>
          </div>
          <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-[#D4AF37]/90 font-bold -mt-0.5">
            Heritage Intelligence Platform
          </span>
        </div>
      </Link>

      {/* Middle: Global Search Input */}
      <div className="flex-1 max-w-md w-full relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]/60" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Delhi heritage sites, crafts, legends..."
          className="w-full bg-[#1C1613] border border-[#362A24] focus:border-[#D4AF37] text-xs sm:text-sm text-[#F7F3E9] placeholder-[#EFE6D5]/40 rounded-full pl-10 pr-4 py-2 outline-none transition-colors shadow-inner"
        />
      </div>

      {/* Right Controls: Region Selector, XP Badge, and "+ Save Heritage" CTA */}
      <div className="flex items-center gap-3">
        
        {/* User Level Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E1815] border border-[#D4AF37]/30">
          <Flame className="w-4 h-4 text-[#C85A32] animate-pulse" />
          <span className="text-xs font-bold text-[#D4AF37]">450 XP • Lvl 3</span>
        </div>

        {/* Contribution Action Button */}
        <button
          onClick={onOpenSaveModal}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C85A32] to-[#B34726] hover:from-[#E0734C] hover:to-[#C85A32] text-white font-medium text-xs sm:text-sm shadow-md shadow-[#C85A32]/25 hover:shadow-lg transition-all flex items-center gap-2 group whitespace-nowrap"
        >
          <PlusCircle className="w-4 h-4 text-[#F3E086] group-hover:rotate-90 transition-transform" />
          <span>Save Your Virasat</span>
        </button>

      </div>

    </header>
  );
}
