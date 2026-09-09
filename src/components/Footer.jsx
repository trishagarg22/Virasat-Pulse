import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MapPin, Heart, ShieldCheck } from "lucide-react";
import CodeVirasatLogo from "./CodeVirasatLogo";

export default function Footer() {
  return (
    <footer className="bg-[#050B14] border-t border-sky-400/15 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-400/30 shadow-2xl mb-12 bg-[#0F233F]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081220] border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Join the CodeVirasat Guardian Network</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Unravel a New Heritage Discovery Every Week
              </h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Subscribe to receive curated oral lore, stepwell trails, endangered artisan craft updates, and AI heritage alerts directly in your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full bg-[#081220] border border-sky-400/20 text-sm text-white rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sky-400/15">
          
          <div className="lg:col-span-2 space-y-4">
            <CodeVirasatLogo size="lg" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-4 font-sans">
              India's AI-Powered Living Heritage Intelligence Platform. Unearthing thousands of years of monuments, artisan guilds, folk traditions, and oral histories across India.
            </p>
            <div className="inline-block bg-[#0F233F] border border-sky-400/20 px-3 py-1.5 rounded-lg text-xs text-amber-300 font-mono">
              🇮🇳 10,000+ Heritage Elements • 500+ Communities Saved
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Living Heritage Destinations
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-300">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Taj Mahal & Agra Fort</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Varanasi Ganga Ghats</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Konark Sun Temple</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Hampi Vijayanagara Citadel</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Madurai Meenakshi Temple</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Core Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link to="/explore" className="hover:text-amber-400 transition-colors">🗺️ Interactive Heritage Map</Link></li>
              <li><Link to="/time-machine" className="hover:text-amber-400 transition-colors">⏳ Heritage Time Machine</Link></li>
              <li><Link to="/risk-radar" className="hover:text-amber-400 transition-colors">🛡️ Critical Risk Radar</Link></li>
              <li><Link to="/rescue-mission" className="hover:text-amber-400 transition-colors">🚩 Rescue Missions</Link></li>
              <li><Link to="/profile" className="hover:text-amber-400 transition-colors">👤 Guardian Profile</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} CodeVirasat. Built with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>for India's Living Cultural Heritage.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-amber-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
