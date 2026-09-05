import React from 'react';
import { CATEGORIES, REGIONS, RISK_FILTERS } from '../../data/heritageSites';
import { Filter, AlertTriangle, ShieldCheck, MapPin, Sparkles, Layers } from 'lucide-react';

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedRisk,
  setSelectedRisk,
  totalCount,
  atRiskCount
}) {
  return (
    <aside className="w-full lg:w-72 bg-[#1C1613] border-b lg:border-b-0 lg:border-r border-[#362A24] p-4 sm:p-5 space-y-6 shrink-0 text-[#EFE6D5]/90">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#362A24]">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#C85A32]" />
          <span className="font-heritage text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
            Intelligence Filters
          </span>
        </div>
        <span className="text-[11px] font-semibold bg-[#241E1C] px-2 py-0.5 rounded border border-[#362A24] text-[#D4AF37]">
          {totalCount} Sites Tracked
        </span>
      </div>

      {/* Category Pills */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#EFE6D5]/70 uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#C85A32]" /> Domain Category
        </label>
        <div className="flex flex-wrap lg:flex-col gap-1.5">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full px-3 py-2 rounded-xl text-xs font-medium transition-all text-left flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#C85A32]/20 text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm'
                    : 'bg-[#14100E] text-[#EFE6D5]/70 border border-[#362A24] hover:border-[#D4AF37]/30 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </span>
                {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Region Selector */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#EFE6D5]/70 uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Delhi Region
        </label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full bg-[#14100E] border border-[#362A24] focus:border-[#D4AF37] text-xs text-[#F7F3E9] rounded-xl px-3 py-2.5 outline-none transition-colors"
        >
          {REGIONS.map(reg => (
            <option key={reg} value={reg} className="bg-[#14100E] text-[#F7F3E9]">
              {reg}
            </option>
          ))}
        </select>
      </div>

      {/* Risk Status Filters */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#EFE6D5]/70 uppercase tracking-wider flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-[#C85A32]" /> Vulnerability Status
        </label>
        <div className="space-y-1.5">
          {RISK_FILTERS.map(risk => {
            const isSelected = selectedRisk === risk.id;
            return (
              <button
                key={risk.id}
                onClick={() => setSelectedRisk(risk.id)}
                className={`w-full px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  isSelected
                    ? 'bg-[#6B1D2F]/30 text-[#D4AF37] border border-[#D4AF37]/40 font-bold'
                    : 'bg-[#14100E] text-[#EFE6D5]/70 border border-[#362A24] hover:border-[#D4AF37]/30'
                }`}
              >
                {risk.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Intelligence Risk Summary Box */}
      <div className="pt-4 border-t border-[#362A24] space-y-3">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#241E1C] to-[#14100E] border border-[#C85A32]/30 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#EFE6D5]/80 font-medium">Critical Risk Warning</span>
            <span className="text-[#C85A32] font-bold">{atRiskCount} High Risk</span>
          </div>
          <p className="text-[11px] text-[#EFE6D5]/60 leading-relaxed">
            2 traditional crafts & music traditions require immediate documentation and youth apprentice support.
          </p>
        </div>
      </div>

    </aside>
  );
}
