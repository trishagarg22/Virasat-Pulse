import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DID_YOU_KNOW_FACTS } from "../data/didYouKnowFacts";
import { Sparkles, HelpCircle, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";

export default function DidYouKnowGame({ onFactDiscovered }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const currentFact = DID_YOU_KNOW_FACTS[currentIndex];

  const handleNext = () => {
    setIsRevealed(false);
    setCurrentIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length);
  };

  const handleReveal = () => {
    setIsRevealed(true);
    if (onFactDiscovered) {
      onFactDiscovered(currentFact.id);
    }
  };

  return (
    <section id="did-you-know-section" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      {/* Subtle Background Textures */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-950/40 via-stone-900 to-stone-950 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Curiosity Game</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            Wait… Did You Know?
          </h2>
          <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Delhi holds secrets right beneath millions of feet every single day.
            Click below to uncover what most guidebooks miss.
          </p>
        </div>

        {/* Interactive Fact Card Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFact.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-stone-950/80 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Top Card Info Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-amber-500/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 rounded-2xl bg-amber-900/30 border border-amber-500/20">
                    {currentFact.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                      {currentFact.category}
                    </span>
                    <span className="text-xs text-amber-200/60 font-medium">
                      📍 {currentFact.location}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-mono text-amber-400/80 px-3 py-1 rounded-full bg-amber-900/20 border border-amber-500/20">
                  {currentIndex + 1} of {DID_YOU_KNOW_FACTS.length} Facts
                </div>
              </div>

              {/* Curiosity Statement */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 leading-snug mb-4">
                  "{currentFact.statement}"
                </h3>

                {!isRevealed ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/20 text-amber-300/80 text-sm flex items-center gap-3"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Curious how this was possible? Tap reveal to read the historical truth.</span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="p-5 rounded-2xl bg-amber-900/20 border border-amber-500/30 text-amber-100 text-sm sm:text-base leading-relaxed"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300 block mb-1">The Heritage Truth:</span>
                        <p>{currentFact.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-amber-500/10">
                {!isRevealed ? (
                  <button
                    onClick={handleReveal}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Reveal Secret Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>Story Discovered!</span>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-amber-500/30 text-amber-200 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <span>Another Surprising Fact</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
