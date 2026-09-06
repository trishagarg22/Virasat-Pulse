import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Play, Pause, RotateCcw, TrendingDown, Users, Award, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function HeritageJourneyView({ site, currentYear }) {
  const timelineData = site.timelineData || [];
  
  // Timeline Slider State
  const [sliderIndex, setSliderIndex] = useState(timelineData.length - 1);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeEra = timelineData[sliderIndex] || timelineData[0];
  const peakEra = timelineData[0]; // Historical Peak (e.g. 1850)
  const currentEra = timelineData[timelineData.length - 1]; // Present (2026)

  // Auto Playback through eras
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setSliderIndex(prev => {
          if (prev >= timelineData.length - 1) {
            setIsPlaying(false);
            return timelineData.length - 1;
          }
          return prev + 1;
        });
      }, 1800);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timelineData.length]);

  return (
    <div className="space-y-6 text-[#EFE6D5]">
      
      {/* TIMELINE SLIDER CONTROL BAR */}
      <div className="bg-[#14100E] p-4 rounded-2xl border border-[#D4AF37]/30 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C85A32]" />
            <span className="font-heritage font-bold text-sm text-white">
              Era Timeline Slider ({activeEra.year})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center gap-1 hover:bg-[#B34726] transition-colors"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? 'Pause Era Travel' : 'Play Eras'}</span>
            </button>
            <button
              onClick={() => { setIsPlaying(false); setSliderIndex(0); }}
              className="p-1 rounded-full bg-[#1C1613] text-[#EFE6D5]/60 hover:text-white border border-[#362A24]"
              title="Reset to Earliest Era"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="0"
          max={timelineData.length - 1}
          step="1"
          value={sliderIndex}
          onChange={(e) => {
            setIsPlaying(false);
            setSliderIndex(Number(e.target.value));
          }}
          className="w-full h-2 bg-[#1C1613] rounded-lg appearance-none cursor-pointer accent-[#C85A32] border border-[#362A24]"
        />

        {/* Timeline Era Marks */}
        <div className="flex items-center justify-between text-[11px]">
          {timelineData.map((era, idx) => (
            <button
              key={era.year}
              onClick={() => { setIsPlaying(false); setSliderIndex(idx); }}
              className={`font-semibold transition-colors ${
                sliderIndex === idx ? 'text-[#D4AF37] font-bold scale-105' : 'text-[#EFE6D5]/50'
              }`}
            >
              {era.year}
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC ACTIVE ERA CARD WITH HISTORICAL PICTURE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEra.year}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-[#14100E] rounded-2xl border border-[#D4AF37]/40 overflow-hidden shadow-xl"
        >
          {/* Era Picture Header */}
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src={activeEra.image || site.thumbnail}
              alt={activeEra.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-black/30"></div>
            
            <div className="absolute top-3 left-3 bg-[#14100E]/90 px-3 py-1 rounded-full border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{activeEra.label}</span>
            </div>

            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">
                Historical Status
              </span>
              <h4 className="text-lg font-heritage font-bold text-white drop-shadow">
                {activeEra.status}
              </h4>
            </div>
          </div>

          {/* Era Details Content */}
          <div className="p-5 space-y-3">
            <div className="grid grid-cols-2 gap-3 bg-[#1C1613] p-3 rounded-xl border border-[#362A24] text-xs">
              <div>
                <span className="text-[10px] text-[#EFE6D5]/60 uppercase block">Active Practitioners</span>
                <span className="font-bold text-[#D4AF37] text-sm">{activeEra.practitioners}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#EFE6D5]/60 uppercase block">Youth Adoption</span>
                <span className="font-bold text-[#C85A32] text-sm">{activeEra.youthAdoption}</span>
              </div>
            </div>

            <p className="text-xs text-[#EFE6D5]/90 leading-relaxed pt-1">
              {activeEra.summary}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* "THEN vs NOW" STATS COMPARISON */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="bg-[#14100E] p-3.5 rounded-xl border border-[#D4AF37]/30 text-center space-y-1">
          <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">
            🏆 Peak ({peakEra.year})
          </span>
          <span className="text-sm font-bold text-white block">{peakEra.practitioners}</span>
          <span className="text-[10px] text-[#EFE6D5]/60 block">{peakEra.status}</span>
        </div>

        <div className="bg-[#14100E] p-3.5 rounded-xl border border-[#C85A32]/40 text-center space-y-1">
          <span className="text-[10px] text-[#C85A32] font-bold uppercase tracking-wider block">
            ⚠️ Present ({currentEra.year})
          </span>
          <span className="text-sm font-bold text-white block">{currentEra.practitioners}</span>
          <span className="text-[10px] text-[#EFE6D5]/60 block">{currentEra.status}</span>
        </div>
      </div>

    </div>
  );
}
