import React, { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import { HERITAGE_SITES } from "../data/heritageSites";
import { Clock, ArrowLeftRight, ChevronLeft, ChevronRight, Calendar, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TimeMachinePage() {
  const [selectedSiteIndex, setSelectedSiteIndex] = useState(0);
  const [splitPos, setSplitPos] = useState(50); // percentage 0-100
  const [currentYear, setCurrentYear] = useState(1860);
  const [activeTab, setActiveTab] = useState("events"); // events | places | traditions | photos | stories

  const site = HERITAGE_SITES[selectedSiteIndex] || HERITAGE_SITES[0];
  const { thenVsNow, timelineEvents } = site;

  const presetYears = [1650, 1800, 1860, 1910, 1950, 2026];

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSplitPos(percent);
  };

  const handleStepYear = (direction) => {
    const currIdx = presetYears.indexOf(currentYear);
    if (direction === "next" && currIdx < presetYears.length - 1) {
      setCurrentYear(presetYears[currIdx + 1]);
    } else if (direction === "prev" && currIdx > 0) {
      setCurrentYear(presetYears[currIdx - 1]);
    }
  };

  return (
    <SidebarLayout>
      <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header with Site Switcher Pills */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-amber-500/30">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Clock className="w-4 h-4" />
              <span>Interactive Temporal Simulation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-black text-white">
              {site.name}
            </h1>
            <p className="text-xs text-slate-400">
              Explore how this heritage evolved over 200 years of history.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {HERITAGE_SITES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedSiteIndex(idx);
                  setSplitPos(50);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedSiteIndex === idx
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "bg-[#132640] border border-[#1E3A5F] text-slate-300 hover:text-white"
                }`}
              >
                {s.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Large Before/After Split Image Comparison Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30">
          
          {/* Interactive Drag Image (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div
              className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#1E3A5F] shadow-2xl group"
              onMouseMove={(e) => {
                if (e.buttons === 1) handleSliderMove(e);
              }}
              onClick={handleSliderMove}
            >
              {/* NOW / PRESENT DAY IMAGE (Bottom Layer) */}
              <img
                src={thenVsNow?.nowImage || site.heroImage}
                alt="Present Day"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
                {thenVsNow?.nowYear || "Today (2026)"}
              </div>

              {/* THEN / HISTORICAL IMAGE (Clipped Top Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${splitPos}%` }}
              >
                <img
                  src={thenVsNow?.thenImage || site.thumbnail}
                  alt="Historical Era"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute top-4 left-4 bg-amber-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
                  {thenVsNow?.thenYear || "Historical (1860 AD)"}
                </div>
              </div>

              {/* Slider Split Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.9)] pointer-events-none"
                style={{ left: `${splitPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-slate-950">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 font-mono">
              ↔ Drag or click on the image to slide between Past & Today
            </p>
          </div>

          {/* Key Transformations Text (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Architectural & Cultural Shifts
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Centuries of Transformation
            </h3>
            <div className="space-y-3">
              {(thenVsNow?.changes || [
                "Replacement of central canal and trees with urban traffic",
                "Shift from hand embroidered Zardozi to synthetic factory garments",
                "Conversion of lakhori brick havelis into commercial wholesale storage"
              ]).map((change, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#0A1422] border border-[#1E3A5F] text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{change}</span>
                </div>
              ))}
            </div>

            {/* Quick Jump Widget */}
            <div className="p-4 rounded-2xl bg-[#0A1422] border border-amber-500/20 space-y-2">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Quick Jump Widget
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSplitPos(100)}
                  className="flex-1 py-2 rounded-xl bg-[#132640] hover:bg-[#1E3A5F] text-xs font-bold text-amber-300"
                >
                  Jump to Past (100%)
                </button>
                <button
                  onClick={() => setSplitPos(0)}
                  className="flex-1 py-2 rounded-xl bg-[#132640] hover:bg-[#1E3A5F] text-xs font-bold text-emerald-300"
                >
                  Jump to Today (0%)
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Slider with Draggable Handle & Year Buttons */}
        <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Interactive Year Timeline: {currentYear} AD</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleStepYear("prev")}
                className="p-2 rounded-xl bg-[#132640] border border-[#1E3A5F] text-amber-400 hover:bg-[#1E3A5F]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 rounded-full bg-[#0A1422] border border-amber-500/30">
                {currentYear}
              </span>
              <button
                onClick={() => handleStepYear("next")}
                className="p-2 rounded-xl bg-[#132640] border border-[#1E3A5F] text-amber-400 hover:bg-[#1E3A5F]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Year Range Range Slider */}
          <div className="space-y-2">
            <input
              type="range"
              min={1650}
              max={2026}
              value={currentYear}
              onChange={(e) => setCurrentYear(Number(e.target.value))}
              className="w-full h-2 bg-[#0A1422] rounded-lg appearance-none cursor-pointer accent-amber-400 border border-[#1E3A5F]"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              {presetYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setCurrentYear(yr)}
                  className={`hover:text-amber-400 ${currentYear === yr ? "text-amber-400 font-bold" : ""}`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Row Below Slider */}
          <div className="flex items-center gap-2 border-t border-b border-[#1E3A5F] py-3 overflow-x-auto">
            {[
              { id: "events", label: "📜 Historical Events" },
              { id: "places", label: "🏛 Cultural Places" },
              { id: "traditions", label: "🧵 Traditions" },
              { id: "photos", label: "🖼 Old Photos" },
              { id: "stories", label: "🧓 Community Stories" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                    : "bg-[#132640]/60 border border-[#1E3A5F] text-slate-300 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Selected Year Details Card */}
          <div className="p-6 rounded-2xl bg-[#0A1422] border border-amber-500/20 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>Year {currentYear} Archival Log</span>
            </div>

            <div className="space-y-3 text-xs text-slate-200">
              {(timelineEvents || []).map((ev, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#132640]/60 border border-[#1E3A5F]">
                  <span className="font-bold text-amber-300 block mb-1">{ev.year} — {ev.title}</span>
                  <p className="text-slate-300">{ev.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </SidebarLayout>
  );
}
