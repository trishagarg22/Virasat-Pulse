import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, Sparkles } from "lucide-react";
import CodeVirasatLogo from "./CodeVirasatLogo";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#050B14]/90 backdrop-blur-xl border-b border-sky-400/15 px-4 sm:px-8 py-3.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <CodeVirasatLogo size="md" />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-xs font-bold text-amber-400">
            Home
          </Link>
          <Link to="/explore" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
            Explore
          </Link>
          <Link to="/explore" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
            Heritage Map
          </Link>
          <Link to="/rescue-mission" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
            Rescue Missions
          </Link>
          <Link to="/settings" className="text-xs font-semibold text-slate-300 hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* Search Bar, Bell & Profile Avatar */}
        <div className="flex items-center gap-3">
          {/* Quick Search Bar */}
          <div className="relative hidden md:block w-56 lg:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search location..."
              className="w-full bg-[#132640]/80 border border-[#1E3A5F] focus:border-amber-500/50 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-100 placeholder-slate-400 outline-none transition-colors"
            />
          </div>

          {/* Notification Bell */}
          <button className="relative p-2 rounded-full bg-[#132640] border border-[#1E3A5F] text-slate-300 hover:text-white transition-colors">
            <Bell className="w-4 h-4 text-amber-400" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
          </button>

          {/* Profile Avatar */}
          <Link to="/profile" className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-amber-400/80 hover:scale-105 transition-transform"
            />
          </Link>
        </div>

      </div>
    </header>
  );
}
