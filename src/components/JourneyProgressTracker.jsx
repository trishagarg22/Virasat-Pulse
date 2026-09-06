import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Compass, CheckCircle2, X, ChevronUp } from "lucide-react";

export default function JourneyProgressTracker({ discoveredSiteIds = [], totalSites = 10, sitesList = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const count = discoveredSiteIds.length;
  const percentage = Math.round((count / totalSites) * 100);

  const getRankTitle = (c) => {
    if (c >= 10) return "👑 Delhi Heritage Sovereign";
    if (c >= 7) return "🌟 Delhi Story Master";
    if (c >= 4) return "📜 Delhi Story Seeker";
    if (c >= 1) return "🧭 Curiosity Explorer";
    return "🌱 Novice Traveler";
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Action Pill */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-bold shadow-2xl border border-amber-300/40 text-xs sm:text-sm backdrop-blur-md"
      >
        <Award className="w-5 h-5 text-stone-950 shrink-0" />
        <span>
          <strong>{count} / {totalSites}</strong> Discovered • {getRankTitle(count)}
        </span>
        <ChevronUp className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      {/* Expanded Progress Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-stone-900 border border-amber-500/40 rounded-3xl p-6 shadow-2xl text-amber-50 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif font-bold text-amber-100 text-sm">
                  Your Delhi Discovery Journey
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-amber-400 hover:bg-stone-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Rank & Progress Bar */}
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 mb-4">
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-amber-300">{getRankTitle(count)}</span>
                <span className="text-amber-400 font-mono">{percentage}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-stone-950 overflow-hidden border border-amber-500/20">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Sites Checklist */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {sitesList.map((site) => {
                const isDiscovered = discoveredSiteIds.includes(site.id);
                return (
                  <div
                    key={site.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                      isDiscovered
                        ? "bg-amber-950/50 border border-amber-500/30 text-amber-200"
                        : "bg-stone-950/40 text-amber-200/40"
                    }`}
                  >
                    <span className="font-medium truncate">{site.shortName}</span>
                    {isDiscovered ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <span className="text-[10px] font-mono text-amber-400/40">Undiscovered</span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
