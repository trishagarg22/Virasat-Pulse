import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PEOPLE_STORIES } from "../data/peopleStories";
import { Quote, MapPin, X, BookOpen, ChevronRight } from "lucide-react";

export default function DelhiRemembers() {
  const [selectedStory, setSelectedStory] = useState(null);

  // High-resolution image placeholders for oral storytellers
  const storyImages = [
    "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80"
  ];

  return (
    <section id="delhi-remembers-section" className="py-28 sm:py-36 bg-[#F7F3E9] text-[#1C1613] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C85A32]/15 border border-[#C85A32]/30 text-[#A8431F] text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-4 h-4 text-[#C85A32]" />
            <span>Living Oral Histories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#1C1613] mb-4">
            🧓 Delhi Remembers
          </h2>
          <p className="text-[#594B43] max-w-xl mx-auto text-base font-sans leading-relaxed">
            History lives in the memories of families who have called Delhi home for ten generations.
          </p>
        </div>

        {/* IMAGE-FIRST ORAL STORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PEOPLE_STORIES.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="bg-[#FFFFFF] border-2 border-[#E6DDC8] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between cursor-pointer group transition-all duration-300"
              onClick={() => setSelectedStory(item)}
            >
              <div>
                {/* DOMINANT HERO IMAGE */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={storyImages[idx % storyImages.length]}
                    alt={item.author}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613] via-[#1C1613]/40 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#F7F3E9] text-[#1C1613] text-xs font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{item.avatar}</span>
                      <div>
                        <h4 className="font-serif font-bold text-lg text-white">
                          {item.author}
                        </h4>
                        <span className="text-xs text-amber-300 font-mono">
                          {item.relation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Short Quote Caption */}
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-[#1C1613] leading-snug">
                    "{item.title}"
                  </h3>

                  <p className="text-[#594B43] text-sm leading-relaxed line-clamp-3">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-8 pb-8 flex items-center justify-between text-xs text-[#A8431F] font-bold">
                <div className="flex items-center gap-1.5 text-[#594B43]">
                  <MapPin className="w-4 h-4 text-[#C85A32]" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Oral Memory</span>
                  <ChevronRight className="w-4 h-4" />
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
              className="bg-[#FFFFFF] border-2 border-[#E6DDC8] rounded-3xl max-w-lg w-full p-8 shadow-2xl relative text-[#1C1613]"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#F7F3E9] hover:bg-[#E6DDC8] text-[#1C1613] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl p-3 rounded-2xl bg-[#F7F3E9] border border-[#E6DDC8]">
                  {selectedStory.avatar}
                </span>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#1C1613]">
                    {selectedStory.author}
                  </h3>
                  <span className="text-xs text-[#A8431F] font-mono">
                    {selectedStory.relation}
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F3E9] border border-[#E6DDC8] mb-6 italic text-[#1C1613] text-sm">
                "{selectedStory.quote}"
              </div>

              <div className="space-y-3 mb-6 text-sm text-[#362A24] leading-relaxed font-sans">
                <h4 className="font-bold text-[#A8431F] uppercase tracking-widest text-xs flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#C85A32]" />
                  <span>The Living Memory:</span>
                </h4>
                <p>{selectedStory.fullStory}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E6DDC8] text-xs text-[#594B43]">
                <span>📍 {selectedStory.location}</span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-6 py-3 rounded-xl bg-[#C85A32] text-white font-bold"
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
