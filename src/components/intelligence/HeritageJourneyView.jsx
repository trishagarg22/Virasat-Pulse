import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, TrendingDown, Users, Award, ShieldAlert, Sparkles } from 'lucide-react';

export default function HeritageJourneyView({ site, currentYear }) {
  const timelineData = site.timelineData || [];
  const [selectedEraIndex, setSelectedEraIndex] = useState(timelineData.length - 1);

  const activeEra = timelineData[selectedEraIndex] || timelineData[0];
  const peakEra = timelineData[0]; // Historical Peak (e.g. 1850)
  const currentEra = timelineData[timelineData.length - 1]; // Present (2026)

  return (
    <div className="space-y-6 text-[#EFE6D5]">
      
      {/* Timeline Era Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#362A24]">
        {timelineData.map((era, idx) => (
          <button
            key={era.year}
            onClick={() => setSelectedEraIndex(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedEraIndex === idx
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-[#14100E] text-[#EFE6D5]/70 border border-[#362A24] hover:border-[#D4AF37]/40'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{era.year} — {era.label}</span>
          </button>
        ))}
      </div>

      {/* "THEN vs NOW" Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* THEN (Historical Peak) Card */}
        <div className="bg-[#14100E] rounded-2xl p-4 sm:p-5 border border-[#D4AF37]/30 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1">
              <Award className="w-4 h-4 text-[#D4AF37]" /> Historical Peak ({peakEra.year})
            </span>
            <span className="bg-[#D4AF37]/15 text-[#D4AF37] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
              {peakEra.status}
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-heritage font-bold text-white">
              {peakEra.practitioners}
            </h4>
            <p className="text-xs text-[#EFE6D5]/60 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> {peakEra.youthAdoption}
            </p>
          </div>

          <p className="text-xs text-[#EFE6D5]/80 leading-relaxed border-t border-[#362A24] pt-3">
            {peakEra.summary}
          </p>
        </div>

        {/* NOW (Present Status) Card */}
        <div className="bg-[#14100E] rounded-2xl p-4 sm:p-5 border border-[#C85A32]/40 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#C85A32] uppercase tracking-wider flex items-center gap-1">
              <TrendingDown className="w-4 h-4 text-[#C85A32]" /> Present Era ({currentEra.year})
            </span>
            <span className="bg-[#C85A32]/20 text-[#C85A32] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
              {currentEra.status}
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-heritage font-bold text-white">
              {currentEra.practitioners}
            </h4>
            <p className="text-xs text-[#EFE6D5]/60 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#C85A32]" /> {currentEra.youthAdoption}
            </p>
          </div>

          <p className="text-xs text-[#EFE6D5]/80 leading-relaxed border-t border-[#362A24] pt-3">
            {currentEra.summary}
          </p>
        </div>

      </div>

      {/* Active Selected Era Deep Dive */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEra.year}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-4 rounded-2xl bg-[#241E1C] border border-[#362A24] space-y-2"
        >
          <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
            <Sparkles className="w-4 h-4 text-[#C85A32]" />
            <span>Timeline Milestone Insight ({activeEra.year})</span>
          </div>
          <p className="text-xs text-[#EFE6D5]/90 leading-relaxed">
            {activeEra.summary}
          </p>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
