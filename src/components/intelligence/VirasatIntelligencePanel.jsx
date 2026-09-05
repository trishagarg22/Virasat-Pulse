import React from 'react';
import { AlertTriangle, Sparkles, ShieldAlert, CheckCircle2, TrendingDown, Lightbulb, ExternalLink } from 'lucide-react';

export default function VirasatIntelligencePanel({ site, onOpenSaveModal }) {
  const riskScore = site.riskScore || 75;
  const riskFactors = site.riskFactors || [];
  const aiInsight = site.aiInsight || "Virasat AI predicts urgent conservation intervention required within 5 years.";

  // Circular gauge color
  let gaugeColor = "#C85A32"; // Red
  let riskBadgeText = "HIGH CRITICAL RISK";
  if (site.riskLevel === "VULNERABLE") {
    gaugeColor = "#D4AF37"; // Orange/Gold
    riskBadgeText = "MODERATE VULNERABILITY";
  } else if (site.riskLevel === "THRIVING") {
    gaugeColor = "#10B981"; // Green
    riskBadgeText = "STABLE & THRIVING";
  }

  // Calculate SVG stroke offset for 100 max
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (riskScore / 100) * circumference;

  return (
    <div className="space-y-6 text-[#EFE6D5]">
      
      {/* Top Intelligence Header Banner */}
      <div className="bg-gradient-to-r from-[#1C1613] via-[#241E1C] to-[#1C1613] p-5 rounded-2xl border-gold-glow flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Circular Risk Gauge */}
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#14100E"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={gaugeColor}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xl font-heritage font-extrabold text-white leading-none">
                {riskScore}%
              </span>
              <span className="text-[9px] uppercase font-bold text-[#D4AF37] mt-0.5">
                Risk Score
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#D4AF37]">
              {riskBadgeText}
            </span>
            <h4 className="text-lg font-heritage font-bold text-white leading-tight">
              {site.name} Risk Index
            </h4>
            <p className="text-xs text-[#EFE6D5]/60">
              Assessed across 12 physical, economic & intergenerational vectors.
            </p>
          </div>
        </div>

      </div>

      {/* DISTINCTLY STYLED "AI INSIGHT BOX" */}
      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#1C1613] via-[#2A221E] to-[#1C1613] border-2 border-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.15)] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-heritage text-sm font-bold text-[#D4AF37] tracking-wider uppercase">
              Virasat AI Intelligence Summary
            </span>
          </div>
          <span className="text-[10px] text-[#EFE6D5]/50 bg-[#14100E] px-2 py-0.5 rounded border border-[#362A24]">
            Model: Virasat-V2 Risk Engine
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#F7F3E9] leading-relaxed italic bg-[#14100E]/80 p-3.5 rounded-xl border border-[#D4AF37]/20">
          "{aiInsight}"
        </p>
      </div>

      {/* BULLETED "WHY IS THIS HERITAGE AT RISK?" */}
      <div className="space-y-3 bg-[#14100E] p-5 rounded-2xl border border-[#362A24]">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-2">
          <ShieldAlert className="w-4 h-4" /> Why is this Heritage at Risk? (Vulnerability Factors)
        </h4>

        <ul className="space-y-2.5 text-xs text-[#EFE6D5]/80">
          {riskFactors.map((factor, idx) => (
            <li key={idx} className="flex items-start gap-2.5 bg-[#1C1613] p-2.5 rounded-xl border border-[#362A24]">
              <span className="w-5 h-5 rounded-full bg-[#C85A32]/20 text-[#C85A32] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{factor}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA to protect */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#241E1C] p-4 rounded-2xl border border-[#D4AF37]/30">
        <div className="flex items-center gap-2 text-xs">
          <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
          <span>Have photos or stories for this heritage? Contribute to save it.</span>
        </div>
        <button
          onClick={onOpenSaveModal}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-medium text-xs shadow hover:shadow-lg transition-all whitespace-nowrap"
        >
          Contribute Record (+50 XP)
        </button>
      </div>

    </div>
  );
}
