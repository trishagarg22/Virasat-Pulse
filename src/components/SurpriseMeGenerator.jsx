import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dices, Sparkles, X, ChevronRight, MapPin } from "lucide-react";
import { HERITAGE_SITES } from "../data/heritageSites";

export default function SurpriseMeGenerator({ onSiteSelect }) {
  const [randomSite, setRandomSite] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleSurprise = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * HERITAGE_SITES.length);
      setRandomSite(HERITAGE_SITES[randomIndex]);
      setIsRolling(false);
    }, 600);
  };

  return (
    <section className="py-16 bg-stone-900 text-amber-50 relative overflow-hidden border-t border-b border-amber-500/20">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-950/60 via-stone-950 to-amber-950/60 border border-amber-500/30 shadow-2xl backdrop-blur-xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Dices className={`w-8 h-8 ${isRolling ? "animate-spin" : ""}`} />
          </div>

          <h2 className="text-3xl font-serif font-bold text-amber-100 mb-3">
            Can't Decide Where to Start?
          </h2>

          <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto mb-6 font-sans">
            Let fate choose a random corner of Delhi for you. Discover unexpected stepwells, ancient bazaars, or medieval ruins in one click!
          </p>

          <button
            onClick={handleSurprise}
            disabled={isRolling}
            className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-base shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            <span>{isRolling ? "Rolling Delhi's Fate..." : "Surprise Me with a Delhi Story 🎲"}</span>
          </button>
        </div>
      </div>

      {/* Random Story Modal */}
      <AnimatePresence>
        {randomSite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative text-amber-50"
            >
              <button
                onClick={() => setRandomSite(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 hover:bg-stone-900 text-amber-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56">
                <img
                  src={randomSite.heroImage || randomSite.thumbnail}
                  alt={randomSite.shortName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/90 text-stone-950 text-xs font-bold font-mono">
                    🎲 Surprise Selection
                  </span>
                  <span className="text-xs text-amber-200 bg-stone-950/80 px-2.5 py-1 rounded-full border border-amber-500/30">
                    {randomSite.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{randomSite.location}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-amber-100 mb-3">
                  {randomSite.name}
                </h3>

                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 text-xs text-amber-200/90 mb-6 leading-relaxed">
                  <span className="font-bold text-amber-300 block mb-1">Did You Know?</span>
                  <p>"{randomSite.surprisingFact}"</p>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleSurprise}
                    className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs font-bold"
                  >
                    Try Another 🎲
                  </button>
                  <button
                    onClick={() => {
                      const site = randomSite;
                      setRandomSite(null);
                      if (onSiteSelect) onSiteSelect(site);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1"
                  >
                    <span>Open Full Experience</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
