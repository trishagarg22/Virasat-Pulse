import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Info, ArrowLeftRight, CheckCircle } from "lucide-react";
import { HERITAGE_SITES } from "../data/heritageSites";

export default function ThenVsNowSlider() {
  // Filter sites that have thenVsNow property
  const comparisonSites = HERITAGE_SITES.filter((site) => site.thenVsNow);

  const [selectedSiteIndex, setSelectedSiteIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100

  const activeSite = comparisonSites[selectedSiteIndex] || comparisonSites[0];
  const { thenVsNow } = activeSite;

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section id="then-vs-now-section" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Visual Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            Same Place. Different Delhi.
          </h2>
          <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Slide left or right to uncover how centuries of urban transformation, modern markets, and architectural evolution reshaped Delhi.
          </p>
        </div>

        {/* Site Selector Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {comparisonSites.map((site, index) => (
            <button
              key={site.id}
              onClick={() => {
                setSelectedSiteIndex(index);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedSiteIndex === index
                  ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-stone-950 border border-amber-500/20 text-amber-200/70 hover:border-amber-500/40 hover:text-amber-100"
              }`}
            >
              {site.shortName}
            </button>
          ))}
        </div>

        {/* Comparison Image Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-950/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          {/* Interactive Split Drag Image (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className="relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-amber-500/30 shadow-inner group"
              onMouseMove={(e) => {
                if (e.buttons === 1) handleSliderMove(e);
              }}
              onClick={handleSliderMove}
            >
              {/* NOW / PRESENT IMAGE (Bottom Layer) */}
              <img
                src={thenVsNow.nowImage}
                alt="Present Day Delhi"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                TODAY (2026)
              </div>

              {/* THEN / HISTORICAL IMAGE (Clipped Top Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={thenVsNow.thenImage}
                  alt="Historical Delhi"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute top-4 left-4 bg-amber-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 text-amber-200 text-xs font-bold font-mono">
                  THEN (Historical)
                </div>
              </div>

              {/* Slider Handle Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-xl border-2 border-stone-900">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-amber-200/60 mt-3 font-mono">
              ↔ Click or drag left/right on the image to adjust comparison
            </p>
          </div>

          {/* Transformation Story & Bullet Points (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {activeSite.category}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-amber-100 mb-3">
                {activeSite.name}
              </h3>

              <p className="text-amber-200/80 text-sm mb-6 leading-relaxed">
                {activeSite.surprisingFact}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-400" />
                  <span>Key Visual Transformations</span>
                </h4>
                {thenVsNow.changes.map((change, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-500/20 text-xs text-amber-100/90"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{change}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-900/20 border border-amber-500/30 text-amber-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-amber-300 block">Heritage Status</span>
                <span>{activeSite.statusBadge}</span>
              </div>
              <span className="text-2xl">
                {activeSite.healthStatus === "NEEDS_ATTENTION" ? "🔴" : activeSite.healthStatus === "WATCH_CLOSELY" ? "🟡" : "🟢"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
