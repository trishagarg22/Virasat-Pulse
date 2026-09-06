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
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden text-amber-50 selection:bg-amber-500 selection:text-stone-950">
      
      {/* ========================================================================= */}
      {/* 1. BASE BACKGROUND: Rich Multi-Stop Gradient (Charcoal Ink -> Maroon -> Burnt Umber) */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 35%, #5c1827 0%, #3a101b 30%, #1e0c12 60%, #0a0807 100%)"
        }}
      />
      
      {/* Secondary Burnt Umber Warmth Core Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-60 mix-blend-color-dodge pointer-events-none"
        style={{
          background: "radial-gradient(circle 600px at 50% 40%, rgba(168,67,31,0.35) 0%, rgba(107,29,47,0.2) 50%, transparent 80%)"
        }}
      />

      {/* ========================================================================= */}
      {/* 2. ANCIENT TEXTURE LAYER: Aged Parchment Grain & Jali Lattice Overlay (10% Opacity) */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 z-0 opacity-12 mix-blend-overlay pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 70%),
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.25' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h40v40H40V0zM0 40h40v40H0V40z'/%3E%3Cpath d='M40 0L0 40h80L40 0zm0 80L0 40h80L40 80z'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: "cover, 80px 80px"
        }}
      />

      {/* Sandstone Architecture Photo Texture (Low opacity mix-blend) */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]"
      />

      {/* ========================================================================= */}
      {/* 3. MODERN GLOW ACCENTS: Soft Animated Radial Orbs (Warm Gold & Terracotta) */}
      {/* ========================================================================= */}
      {/* Glow Blob 1: Central Amber/Gold Pulse behind Hero Text */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
          y: [-10, 10, -10]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-500/30 via-amber-400/20 to-terracotta/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* Glow Blob 2: Terracotta Warmth on Left */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
          x: [-15, 15, -15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[15%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#C85A32]/30 via-[#8C2B42]/20 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Glow Blob 3: Golden Shimmer on Right */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [10, -10, 10]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[35%] right-[10%] w-[480px] h-[480px] bg-gradient-to-bl from-[#D4AF37]/25 via-[#A8431F]/20 to-transparent rounded-full blur-[110px] pointer-events-none z-0"
      />

      {/* ========================================================================= */}
      {/* 4. OPTIONAL ACCENT DETAIL: Oversized Translucent Heritage Arch Silhouette */}
      {/* ========================================================================= */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[650px] pointer-events-none opacity-[0.06] z-0 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Classic Indian Arch Silhouette Outline */}
          <path d="M 50 350 L 50 200 C 50 100, 120 50, 200 20 C 280 50, 350 100, 350 200 L 350 350 Z" />
          <path d="M 70 350 L 70 210 C 70 120, 130 70, 200 42 C 270 70, 330 120, 330 210 L 330 350 Z" strokeDasharray="4 4" />
          <circle cx="200" cy="140" r="45" strokeWidth="1" />
          <circle cx="200" cy="140" r="25" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 5. VIGNETTE & CONTRAST SCRIM: Edge Darkening for Focus & Legibility */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,8,7,0.85)_100%)] pointer-events-none z-0" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0807]/90 to-transparent pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* HERO CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-sm font-medium tracking-wide mb-6 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Interactive Heritage Discovery</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-amber-200/90">Delhi Edition</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] leading-none mb-4"
        >
          DILLI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-200/95 font-light tracking-wide max-w-3xl mx-auto mb-6 drop-shadow-md"
        >
          Stories That Still Live
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed font-sans mb-12"
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
              className="group relative p-5 rounded-2xl bg-stone-950/70 hover:bg-amber-950/80 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 text-left shadow-2xl hover:shadow-amber-500/15 hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl p-2 rounded-xl bg-amber-900/50 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  {choice.icon}
                </span>
                <span className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  {choice.label}
                </span>
              </div>
              <p className="text-xs text-amber-200/70 font-sans leading-relaxed group-hover:text-amber-100/90">
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
      <div className="relative z-10 border-t border-amber-500/30 bg-stone-950/90 backdrop-blur-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/80">
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
