import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, MapPin, CheckCircle2, HelpCircle, Image, ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, SlidersHorizontal } from "lucide-react";

export default function PlaceExperienceModal({ site, onClose }) {
  const [activeTab, setActiveTab] = useState("all"); // all | quiz | story | gallery | thenVsNow
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [activeStoryChapter, setActiveStoryChapter] = useState(0); // 0: THEN, 1: CHANGED, 2: TODAY, 3: LOST
  const [sliderPos, setSliderPos] = useState(50);

  if (!site) return null;

  const { ageGuessQuiz, storySwipe, galleryImages, thenVsNow } = site;

  const storyChapters = storySwipe || [
    { title: "THEN", text: site.surprisingFact },
    { title: "WHAT CHANGED?", text: "Over centuries, new imperial dynasties added architectural layers and bazaars." },
    { title: "TODAY", text: "Stands as a cherished symbol of Delhi's living heritage." },
    { title: "WHAT COULD BE LOST?", text: "Unchecked commercial conversion and loss of traditional artisan crafts." }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-stone-950 text-amber-50 overflow-y-auto flex flex-col selection:bg-amber-500 selection:text-stone-950"
      >
        {/* Full-Width Top Bar Header */}
        <div className="sticky top-0 z-30 bg-stone-950/90 backdrop-blur-md border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-amber-900/40 border border-amber-500/30 text-amber-300 text-xs font-bold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Delhi Map</span>
            </button>
            <div className="hidden sm:block border-l border-amber-500/20 pl-4">
              <span className="text-xs font-mono text-amber-400 block">{site.type || site.category}</span>
              <h3 className="text-base font-serif font-bold text-amber-100">{site.shortName}</h3>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { id: "all", label: "✨ Full Place Overview" },
              { id: "quiz", label: "🎯 Age Mini-Quiz" },
              { id: "story", label: "📖 Story Chapters" },
              { id: "gallery", label: "🖼️ Gallery" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-stone-950 shadow-md"
                    : "bg-stone-900 border border-amber-500/20 text-amber-200/70 hover:text-amber-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Banner (Full Width Cinematic) */}
        <div className="relative h-72 sm:h-96 w-full shrink-0 overflow-hidden">
          <img
            src={site.heroImage || site.thumbnail}
            alt={site.shortName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>

          <div className="absolute bottom-8 left-6 sm:left-12 right-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-xs font-mono text-amber-400 mb-2">
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30">
                📍 {site.location}
              </span>
              <span>•</span>
              <span className="text-amber-200/80">{site.dynasty}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-amber-100 leading-tight mb-2">
              {site.name}
            </h1>
            <p className="text-amber-200/80 text-sm sm:text-base max-w-3xl leading-relaxed">
              "{site.surprisingFact}"
            </p>
          </div>
        </div>

        {/* Main Content Layout (Full Container) */}
        <div className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full space-y-12">
          {/* TAB CONTENT VIEW */}
          {(activeTab === "all" || activeTab === "quiz") && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Curiosity Quiz */}
              <div className="lg:col-span-7 bg-stone-900/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
                  <HelpCircle className="w-4 h-4" />
                  <span>Curiosity Mini-Quiz</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-amber-100 mb-6">
                  {ageGuessQuiz?.question || `How old do you think ${site.shortName} is?`}
                </h3>

                <div className="space-y-3 mb-6">
                  {ageGuessQuiz?.options ? (
                    ageGuessQuiz.options.map((opt, idx) => {
                      const isSelected = selectedQuizOption === idx;
                      const isCorrect = idx === ageGuessQuiz.correctIndex;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedQuizOption(idx)}
                          className={`w-full p-4 rounded-2xl text-xs sm:text-sm font-medium text-left border transition-all flex items-center justify-between ${
                            selectedQuizOption === null
                              ? "bg-stone-950/80 border-amber-500/20 hover:border-amber-400 text-amber-100"
                              : isSelected
                              ? isCorrect
                                ? "bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold shadow-lg"
                                : "bg-red-950/90 border-red-500 text-red-200 font-bold shadow-lg"
                              : "bg-stone-950/40 border-stone-800 text-amber-200/40"
                          }`}
                        >
                          <span>{opt}</span>
                          {selectedQuizOption !== null && isSelected && (
                            <span className="text-xs font-bold">
                              {isCorrect ? "✅ Correct Answer!" : "❌ Historical Fact Below"}
                            </span>
                          )}
                        </button>
                      );
                    })
                  ) : (
                    <p className="text-sm text-amber-200/80 leading-relaxed p-4 rounded-xl bg-amber-950/30 border border-amber-500/20">
                      {site.surprisingFact}
                    </p>
                  )}
                </div>

                {selectedQuizOption !== null && ageGuessQuiz?.explanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-amber-900/20 border border-amber-500/30 text-xs sm:text-sm text-amber-100 leading-relaxed"
                  >
                    <span className="font-bold text-amber-300 block mb-1">The Heritage Truth:</span>
                    <p>{ageGuessQuiz.explanation}</p>
                  </motion.div>
                )}
              </div>

              {/* Right Column: Health Monitor & Quick Stats */}
              <div className="lg:col-span-5 bg-stone-900/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-1">
                      Heritage Risk Index
                    </span>
                    <h4 className="text-xl font-serif font-bold text-amber-100">
                      {site.statusBadge}
                    </h4>
                  </div>
                  <span className="text-3xl">
                    {site.healthStatus === "NEEDS_ATTENTION" ? "🔴" : site.healthStatus === "WATCH_CLOSELY" ? "🟡" : "🟢"}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-amber-200/80">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-amber-500/10">
                    <span>Practitioners & Lineage</span>
                    <span className="font-bold text-amber-300">{site.practitionersCount || "Protected Monument"}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-amber-500/10">
                    <span>Youth Engagement</span>
                    <span className="font-bold text-amber-300">{site.youthInvolvement || "Active Exploration"}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-amber-500/10">
                    <span>Vulnerability Risk Score</span>
                    <span className="font-bold text-red-400">{site.riskScore}% Level</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 & ALL: STORY CHAPTERS */}
          {(activeTab === "all" || activeTab === "story") && (
            <div className="bg-stone-900/80 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-amber-500/20 pb-6">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-1">
                    Historical Chapters
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
                    The Story Swipe Experience
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {storyChapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStoryChapter(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        activeStoryChapter === idx
                          ? "bg-amber-500 text-stone-950 shadow-md"
                          : "bg-stone-950 border border-amber-500/20 text-amber-200/60 hover:text-amber-100"
                      }`}
                    >
                      CH 0{idx + 1}: {ch.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Chapter Container */}
              <motion.div
                key={activeStoryChapter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-amber-950/40 border border-amber-500/30 min-h-[200px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-3">
                    Chapter 0{activeStoryChapter + 1} — {storyChapters[activeStoryChapter].title}
                  </span>
                  <p className="text-lg sm:text-xl text-amber-100 font-serif italic leading-relaxed">
                    "{storyChapters[activeStoryChapter].text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-6 border-t border-amber-500/10 text-xs font-bold">
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
              </motion.div>
            </div>
          )}

          {/* TAB 3 & ALL: PHOTO GALLERY */}
          {(activeTab === "all" || activeTab === "gallery") && (
            <div className="bg-stone-900/80 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="border-b border-amber-500/20 pb-4">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-1">
                  High-Resolution Relics
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-100">
                  Photo Gallery & Visual Records
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(galleryImages || [
                  { url: site.heroImage || site.thumbnail, caption: site.name }
                ]).map((img, i) => (
                  <div key={i} className="group relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl h-60">
                    <img
                      src={img.url}
                      alt={img.caption || site.shortName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                    <p className="absolute bottom-3 left-3 right-3 text-xs text-amber-100 font-sans leading-snug">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-amber-200/60 font-mono">
              📍 {site.name} • {site.dynasty}
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl transition-all"
            >
              Return to Delhi Map & Explore More
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
