import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Compass,
  Clock,
  ShieldAlert,
  Flag,
  User,
  Settings,
  Home as HomeIcon,
  Menu,
  X,
  Search,
  Bell,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CodeVirasatLogo from "./CodeVirasatLogo";

export default function SidebarLayout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Heritage Map", path: "/explore", icon: Compass },
    { name: "Time Machine", path: "/time-machine", icon: Clock },
    { name: "Risk Radar", path: "/risk-radar", icon: ShieldAlert },
    { name: "Rescue Mission", path: "/rescue-mission", icon: Flag },
    { name: "My Contributions", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen flex bg-[#0B1726] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* ========================================================================= */}
      {/* PERSISTENT DESKTOP LEFT SIDEBAR */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex flex-col w-72 shrink-0 bg-[#0A1422]/95 border-r border-[#1E3A5F] p-6 justify-between fixed top-0 bottom-0 left-0 z-40 backdrop-blur-xl">
        <div className="space-y-8">
          {/* Top Logo */}
          <div className="pb-4 border-b border-[#1E3A5F]">
            <CodeVirasatLogo size="md" />
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-bold scale-[1.02]"
                      : "text-slate-300 hover:text-white hover:bg-[#132640]/80"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-slate-950" : "text-amber-400/80"}`} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Pinned "Become a Heritage Guardian" CTA Card */}
        <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 text-xs space-y-3 relative overflow-hidden group">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[10px]">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Join the Mission</span>
          </div>
          <h4 className="font-serif font-bold text-slate-100 text-sm leading-tight">
            Become a Heritage Guardian
          </h4>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Record oral lore, upload old photos, and protect endangered crafts.
          </p>
          <Link
            to="/rescue-mission"
            className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-colors"
          >
            <span>Start Contribution</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* MOBILE SIDEBAR DRAWER OVERLAY */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-80 max-w-[85%] bg-[#0A1422] border-r border-[#1E3A5F] p-6 flex flex-col justify-between z-10 h-full overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1E3A5F]">
                  <CodeVirasatLogo size="md" />
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-xl text-slate-300 hover:bg-[#132640]"
                  >
                    <X className="w-6 h-6 text-amber-400" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                            : "text-slate-300 hover:bg-[#132640]"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? "text-slate-950" : "text-amber-400"}`} />
                        <span>{item.name}</span>
                      </NavLink>
                    );
                  })}
                </nav>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 text-xs space-y-3 mt-6">
                <span className="text-[10px] text-amber-400 font-bold uppercase">Heritage Guardian</span>
                <h4 className="font-serif font-bold text-white">Join the Mission</h4>
                <Link
                  to="/rescue-mission"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs text-center block"
                >
                  Start Contribution
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================================= */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        
        {/* Top Header Bar inside Main Area */}
        <header className="sticky top-0 z-30 bg-[#0B1726]/90 backdrop-blur-md border-b border-[#1E3A5F] px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-[#132640] border border-[#1E3A5F] text-amber-400"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Quick Search */}
            <div className="relative hidden sm:block w-64 md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search heritage location, craft, or story..."
                className="w-full bg-[#132640]/80 border border-[#1E3A5F] focus:border-amber-500/50 rounded-full pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-400 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Right User Actions (Bell + Profile Avatar) */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full bg-[#132640] border border-[#1E3A5F] text-slate-300 hover:text-white transition-colors">
              <Bell className="w-4 h-4 text-amber-400" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
            </button>

            <Link to="/profile" className="flex items-center gap-2.5 group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Guardian Profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-amber-400/80 group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-none">Ananya Sharma</span>
                <span className="text-[10px] text-amber-400 font-mono font-medium">Guardian Lvl 3</span>
              </div>
            </Link>
          </div>
        </header>

        {/* Page Body View */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
