import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Compass, BookOpen, ChevronDown } from "lucide-react";

export default function HeroCinematic({ onSelectChoice, totalSitesCount = 10, discoveredCount = 0 }) {
  const choices = [
    {
      id: "forgotten-place",
      icon: "🏛",
      label: "Forgotten Place",
      subtext: "Stepwells, ruins & secret alcoves hidden in plain sight",
      targetId: "heritage-map-section"
    },
    {
      id: "living-tradition",
      icon: "🧵",
      label: "Living Tradition",
      subtext: "10th-generation artisans, attar stills & Sufi chants",
      targetId: "delhi-remembers-section"
    },
    {
      id: "story-you-never-knew",
      icon: "👀",
      label: "Story You Never Knew",
      subtext: "Unrusting iron, royal blueprints & lost tram lines",
      targetId: "did-you-know-section"
    }
  ];

  const handlePillClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onSelectChoice) {
      onSelectChoice(targetId);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/80 via-stone-900 to-amber-950 text-amber-50">
      {/* Background Decorative Grid & Warm Light Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/80 to-stone-950"></div>

      {/* Floating Sparkles & Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      {/* Hero Header Banner */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-300 text-sm font-medium tracking-wide mb-6 shadow-lg backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Interactive Heritage Discovery</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-amber-200/80">Delhi Edition</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 drop-shadow-md leading-none mb-4"
        >
          DILLI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-200/90 font-light tracking-wide max-w-3xl mx-auto mb-6"
        >
          Stories That Still Live
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-amber-100/70 max-w-2xl mx-auto leading-relaxed font-sans mb-12"
        >
          Every stone in Delhi has a story. Most people just walk past them.
          <br className="hidden sm:inline" />
          Choose what you want to uncover today:
        </motion.p>

        {/* 3 Interactive Choice Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
        >
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handlePillClick(choice.targetId)}
              className="group relative p-5 rounded-2xl bg-amber-950/50 hover:bg-amber-900/60 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 text-left shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl p-2 rounded-xl bg-amber-900/40 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  {choice.icon}
                </span>
                <span className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  {choice.label}
                </span>
              </div>
              <p className="text-xs text-amber-200/60 font-sans leading-relaxed group-hover:text-amber-100/80">
                {choice.subtext}
              </p>
              <div className="mt-3 flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Explore this path</span>
                <span className="ml-1">→</span>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar Stats & Scroll Indicator */}
      <div className="relative z-10 border-t border-amber-500/20 bg-amber-950/80 backdrop-blur-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span><strong>10</strong> Delhi Living Heritage Sites</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span><strong>7</strong> Imperial Eras</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span><strong>{discoveredCount} / {totalSitesCount}</strong> Discovered</span>
            </div>
          </div>

          <button
            onClick={() => handlePillClick("did-you-know-section")}
            className="flex items-center gap-2 text-amber-300 hover:text-amber-100 transition-colors animate-bounce"
          >
            <span>Start discovering below</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
