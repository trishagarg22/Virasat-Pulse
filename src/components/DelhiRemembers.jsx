import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PEOPLE_STORIES } from "../data/peopleStories";
import { Quote, Sparkles, MapPin, X, BookOpen } from "lucide-react";

export default function DelhiRemembers() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section id="delhi-remembers-section" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Living Oral Histories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            🧓 Delhi Remembers
          </h2>
          <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans">
            History is not just in textbooks—it lives in the memories of families who have called Delhi home for 10 generations.
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PEOPLE_STORIES.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-stone-950/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:border-amber-400/50 transition-all cursor-pointer group"
              onClick={() => setSelectedStory(item)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-2xl bg-amber-900/30 border border-amber-500/20">
                      {item.avatar}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-amber-100 text-base group-hover:text-amber-300 transition-colors">
                        {item.author}
                      </h4>
                      <span className="text-xs text-amber-400 font-mono block">
                        {item.relation}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-950 border border-amber-500/20 text-amber-300">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-amber-200/90 mb-3 italic">
                  "{item.title}"
                </h3>

                <p className="text-amber-200/70 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs text-amber-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Memory</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Oral Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-amber-50"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl p-2 rounded-2xl bg-amber-900/30 border border-amber-500/20">
                  {selectedStory.avatar}
                </span>
                <div>
                  <h3 className="text-xl font-serif font-bold text-amber-100">
                    {selectedStory.author}
                  </h3>
                  <span className="text-xs text-amber-400 font-mono">
                    {selectedStory.relation}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 mb-6 italic text-amber-200 text-xs sm:text-sm">
                "{selectedStory.quote}"
              </div>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans">
                <h4 className="font-bold text-amber-400 uppercase tracking-widest text-xs flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>The Living Memory:</span>
                </h4>
                <p>{selectedStory.fullStory}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-amber-500/10 text-xs text-amber-200/60">
                <span>📍 {selectedStory.location}</span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
