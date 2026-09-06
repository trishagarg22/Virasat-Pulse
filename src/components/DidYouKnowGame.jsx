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
    <section id="did-you-know-section" className="py-28 sm:py-36 bg-[#F7F3E9] text-[#1C1613] relative overflow-hidden">
      {/* Background Parchment & Subtle Mandala Texture */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c85a32' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h40v40H40V0zM0 40h40v40H0V40z'/%3E%3Cpath d='M40 0L0 40h80L40 0zm0 80L0 40h80L40 80z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px"
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C85A32]/15 border border-[#C85A32]/30 text-[#A8431F] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#C85A32]" />
            <span>Curiosity Discovery Deck</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1613] tracking-tight mb-4">
            Wait… Did You Know?
          </h2>
          <p className="text-[#594B43] max-w-xl mx-auto text-base sm:text-lg font-sans leading-relaxed">
            Delhi holds secrets right beneath millions of feet every single day.
            Tap below to uncover what most guidebooks miss.
          </p>
        </div>

        {/* Fact Card Container - Image led with high contrast */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFact.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFFFFF] border-2 border-[#E6DDC8] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E6DDC8]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 rounded-2xl bg-[#F7F3E9] border border-[#E6DDC8]">
                    {currentFact.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#C85A32] uppercase tracking-widest block">
                      {currentFact.category}
                    </span>
                    <span className="text-xs text-[#594B43] font-medium">
                      📍 {currentFact.location}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#A8431F] bg-[#F7F3E9] px-3.5 py-1.5 rounded-full border border-[#E6DDC8]">
                  {currentIndex + 1} of {DID_YOU_KNOW_FACTS.length} Facts
                </span>
              </div>

              {/* Curiosity Statement */}
              <div className="mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1C1613] leading-snug mb-6">
                  "{currentFact.statement}"
                </h3>

                {!isRevealed ? (
                  <div className="p-5 rounded-2xl bg-[#F7F3E9] border border-[#E6DDC8] text-[#594B43] text-sm sm:text-base flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#C85A32] shrink-0" />
                    <span>Curious how this was possible? Click reveal to read the historical truth.</span>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="p-6 rounded-2xl bg-[#F4EFE4] border-2 border-[#C85A32]/30 text-[#1C1613] text-base leading-relaxed"
                  >
                    <div className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-6 h-6 text-[#C85A32] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#A8431F] block mb-1">The Heritage Truth:</span>
                        <p className="text-[#362A24]">{currentFact.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E6DDC8]">
                {!isRevealed ? (
                  <button
                    onClick={handleReveal}
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C85A32] hover:bg-[#A8431F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#C85A32]/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Reveal Secret Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-[#A8431F] font-bold">
                    <Sparkles className="w-4 h-4 text-[#C85A32]" />
                    <span>Story Discovered!</span>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#F7F3E9] hover:bg-[#E6DDC8] border border-[#E6DDC8] text-[#1C1613] text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 text-[#C85A32]" />
                  <span>Another Surprising Fact 🎲</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
