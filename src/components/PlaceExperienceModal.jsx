import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, MapPin, CheckCircle2, HelpCircle, Image, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";

export default function PlaceExperienceModal({ site, onClose }) {
  const [activeTab, setActiveTab] = useState("quiz"); // quiz | story | gallery
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [activeStoryChapter, setActiveStoryChapter] = useState(0); // 0: THEN, 1: CHANGED, 2: TODAY, 3: LOST

  if (!site) return null;

  const { ageGuessQuiz, storySwipe, galleryImages, thenVsNow } = site;

  const handleOptionSelect = (optionIndex) => {
    setSelectedQuizOption(optionIndex);
  };

  const storyChapters = storySwipe || [
    { title: "THEN", text: site.surprisingFact },
    { title: "WHAT CHANGED?", text: "Over centuries, new imperial dynasties added architectural layers and bazaars." },
    { title: "TODAY", text: "Stands as a cherished symbol of Delhi's living heritage." },
    { title: "WHAT COULD BE LOST?", text: "Unchecked commercial conversion and loss of traditional artisan crafts." }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-stone-950/80 backdrop-blur-md">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 280 }}
          className="w-full max-w-2xl h-full bg-stone-900 border-l border-amber-500/30 text-amber-50 overflow-y-auto flex flex-col justify-between shadow-2xl"
        >
          {/* Top Banner Header */}
          <div className="relative h-64 shrink-0 overflow-hidden">
            <img
              src={site.heroImage || site.thumbnail}
              alt={site.shortName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-950/50 to-transparent"></div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-950/80 hover:bg-stone-900 text-amber-300 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{site.location}</span>
                <span>•</span>
                <span>{site.dynasty?.split("(")[0]}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-amber-100">
                {site.name}
              </h2>
            </div>
          </div>

          {/* Navigation Tab Bar */}
          <div className="flex items-center border-b border-amber-500/20 bg-stone-950 px-6 py-2">
            {[
              { id: "quiz", label: "🎯 Age Mini-Quiz" },
              { id: "story", label: "📖 Story Chapters" },
              { id: "gallery", label: "🖼️ Gallery" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs font-bold transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "border-amber-400 text-amber-300"
                    : "border-transparent text-amber-200/60 hover:text-amber-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Content Body */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {/* TAB 1: AGE GUESSING QUIZ */}
            {activeTab === "quiz" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>Curiosity Mini-Quiz</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">
                    {ageGuessQuiz?.question || `How old do you think ${site.shortName} is?`}
                  </h3>

                  <div className="space-y-3">
                    {ageGuessQuiz?.options ? (
                      ageGuessQuiz.options.map((opt, idx) => {
                        const isSelected = selectedQuizOption === idx;
                        const isCorrect = idx === ageGuessQuiz.correctIndex;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            className={`w-full p-4 rounded-xl text-xs sm:text-sm font-medium text-left border transition-all flex items-center justify-between ${
                              selectedQuizOption === null
                                ? "bg-stone-900 border-amber-500/20 hover:border-amber-400 text-amber-100"
                                : isSelected
                                ? isCorrect
                                  ? "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                                  : "bg-red-950/80 border-red-500 text-red-200"
                                : "bg-stone-950/50 border-stone-800 text-amber-200/40"
                            }`}
                          >
                            <span>{opt}</span>
                            {selectedQuizOption !== null && isSelected && (
                              <span>{isCorrect ? "✅ Correct!" : "❌ Try again"}</span>
                            )}
                          </button>
                        );
                      })
                    ) : (
                      <p className="text-xs text-amber-200/70">
                        {site.surprisingFact}
                      </p>
                    )}
                  </div>

                  {selectedQuizOption !== null && ageGuessQuiz?.explanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-xl bg-amber-900/30 border border-amber-500/30 text-xs text-amber-100 leading-relaxed"
                    >
                      <span className="font-bold text-amber-300 block mb-1">Historical Fact:</span>
                      <p>{ageGuessQuiz.explanation}</p>
                    </motion.div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveTab("story")}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Proceed to Story Chapters</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 2: STORY SWIPE CHAPTERS */}
            {activeTab === "story" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {/* Chapter Pills */}
                <div className="grid grid-cols-4 gap-2">
                  {storyChapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStoryChapter(idx)}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        activeStoryChapter === idx
                          ? "bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md"
                          : "bg-stone-950 border-amber-500/20 text-amber-200/60 hover:text-amber-100"
                      }`}
                    >
                      <span className="text-[10px] font-mono block">CH 0{idx + 1}</span>
                      <span className="text-[11px] truncate block">{ch.title}</span>
                    </button>
                  ))}
                </div>

                {/* Active Chapter Details */}
                <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/30 min-h-[180px] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-2">
                      Chapter 0{activeStoryChapter + 1} — {storyChapters[activeStoryChapter].title}
                    </span>
                    <p className="text-sm text-amber-100 leading-relaxed font-serif italic">
                      "{storyChapters[activeStoryChapter].text}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-amber-500/10 text-xs">
                    <button
                      disabled={activeStoryChapter === 0}
                      onClick={() => setActiveStoryChapter((prev) => prev - 1)}
                      className="text-amber-400 disabled:opacity-30 hover:underline"
                    >
                      ← Previous Chapter
                    </button>
                    <button
                      disabled={activeStoryChapter === storyChapters.length - 1}
                      onClick={() => setActiveStoryChapter((prev) => prev + 1)}
                      className="text-amber-400 disabled:opacity-30 hover:underline"
                    >
                      Next Chapter →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: PHOTO GALLERY */}
            {activeTab === "gallery" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(galleryImages || []).map((img, i) => (
                    <div key={i} className="group relative rounded-2xl overflow-hidden border border-amber-500/20">
                      <img
                        src={img.url}
                        alt={img.caption || site.shortName}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                      <p className="absolute bottom-2 left-2 right-2 text-[11px] text-amber-200/90 font-sans line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Bottom Health Indicator */}
            <div className="p-4 rounded-2xl bg-stone-950 border border-amber-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {site.healthStatus === "NEEDS_ATTENTION" ? "🔴" : site.healthStatus === "WATCH_CLOSELY" ? "🟡" : "🟢"}
                </span>
                <div>
                  <span className="font-bold text-amber-300 block">{site.statusBadge}</span>
                  <span className="text-amber-200/60">{site.practitionersCount || "Protected Heritage Site"}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 font-mono text-[10px]">
                Risk: {site.riskScore}%
              </span>
            </div>
          </div>

          {/* Footer Close Action */}
          <div className="p-4 bg-stone-950 border-t border-amber-500/20 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
            >
              Done Discovering
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
