import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Sparkles } from 'lucide-react';

export default function TimeSlider({ currentYear, setCurrentYear }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const eraMilestones = [
    { year: 1800, label: "1800 (Colonial Survey)" },
    { year: 1850, label: "1850 (Mughal Zenith)" },
    { year: 1900, label: "1900 (Guild Era)" },
    { year: 1950, label: "1950 (Post-Independence)" },
    { year: 2000, label: "2000 (Digital Archiving)" },
    { year: 2026, label: "2026 (Present AI)" }
  ];

  // Auto-play timeline feature
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentYear(prev => {
          if (prev >= 2026) {
            setIsPlaying(false);
            return 2026;
          }
          return prev + 5;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, setCurrentYear]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentYear(1800);
  };

  return (
    <div className="bg-[#1C1613] border border-[#362A24] rounded-3xl p-4 sm:p-5 shadow-2xl space-y-3">
      
      {/* Slider Controls Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center text-[#D4AF37]">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heritage font-bold text-[#F7F3E9] text-sm sm:text-base">
              Time Travel Engine
            </span>
            <span className="text-[#EFE6D5]/60 block text-[10px]">
              Drag slider to observe historical heritage evolution
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Active Year Pill */}
          <div className="bg-[#14100E] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-sm shadow-inner flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Year: {currentYear}</span>
          </div>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#C85A32] to-[#B34726] hover:from-[#E0734C] hover:to-[#C85A32] text-white font-semibold text-xs flex items-center gap-1.5 shadow transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Play Journey</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-[#14100E] text-[#EFE6D5]/70 hover:text-white border border-[#362A24]"
            title="Reset to 1800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Range Input */}
      <div className="space-y-2 pt-1">
        <input
          type="range"
          min="1800"
          max="2026"
          step="1"
          value={currentYear}
          onChange={(e) => {
            setIsPlaying(false);
            setCurrentYear(Number(e.target.value));
          }}
          className="w-full h-2.5 bg-[#14100E] rounded-lg appearance-none cursor-pointer accent-[#C85A32] border border-[#362A24]"
        />

        {/* Milestone Era Marks */}
        <div className="hidden sm:flex items-center justify-between text-[10px] text-[#EFE6D5]/60 pt-1">
          {eraMilestones.map(m => (
            <button
              key={m.year}
              onClick={() => {
                setIsPlaying(false);
                setCurrentYear(m.year);
              }}
              className={`hover:text-[#D4AF37] transition-colors ${
                currentYear >= m.year ? 'text-[#D4AF37] font-bold' : ''
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
