import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MapPin, Heart, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-amber-500/20 text-amber-200/70 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Card */}
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Delhi Heritage Quest
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-2">
                Unravel a New Delhi Secret Every Week
              </h3>
              <p className="text-sm text-amber-200/70 max-w-xl">
                Subscribe to receive curated oral lore, stepwell trails, and artisan craft stories directly in your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full bg-stone-950 border border-amber-500/30 text-sm text-amber-100 rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-500/20">
          
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-serif text-2xl font-bold tracking-wider text-amber-100">
                DILLI <span className="text-amber-400">• Stories That Still Live</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-amber-200/60 leading-relaxed pr-4 font-sans">
              Curiosity-driven digital heritage discovery platform unearthing over 1,000 years of Delhi's living history, artisan guilds, and oral lore.
            </p>
            <div className="inline-block bg-amber-950/40 border border-amber-500/20 px-3 py-1 rounded-lg text-xs text-amber-400 font-mono">
              📍 10 Heritage Locations • 7 Imperial Cities
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Living Heritage Sites
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Chandni Chowk</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Mehrauli Archaeological Park</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Nizamuddin Basti</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Hauz Khas & Purana Qila</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Red Fort & Qutub Minar</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Interactive Features
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>🎯 "Wait... Did You Know?" Curiosity Game</li>
              <li>📜 "Delhi Has Layers" Era Timeline</li>
              <li>↔️ "Same Place. Different Delhi." Then vs Now</li>
              <li>🔴 Living Heritage Health Monitor</li>
              <li>🤖 Ask Delhi AI Guide</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} DILLI — Stories That Still Live. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>for Delhi's Living Heritage.</span>
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
