import React from 'react';
import { HERITAGE_SITES } from '../data/heritageSites';
import { MapPin, Compass, Sparkles, Filter, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExploreTrails() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#362A24] pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Spatial Heritage Explorer
          </div>
          <h1 className="text-3xl sm:text-5xl font-heritage font-bold text-[#F7F3E9]">
            Explore <span className="text-gold-gradient">Heritage Trails</span>
          </h1>
          <p className="text-sm sm:text-base text-[#EFE6D5]/70 max-w-2xl">
            Select a heritage trail below to launch interactive story checkpoints, 3D architectural details, and location-based riddles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-[#1C1613] border border-[#362A24] text-xs font-medium text-[#EFE6D5]/80 hover:border-[#D4AF37]/50 flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#C85A32]" />
            <span>Filter Trails</span>
          </button>
        </div>
      </div>

      {/* Interactive Map Teaser Container */}
      <div className="bg-[#1C1613] rounded-3xl p-6 border-gold-glow relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C85A32] animate-ping"></span>
            <span className="text-sm font-heritage font-bold text-[#D4AF37]">
              Interactive Map Integration Ready
            </span>
          </div>
          <span className="text-xs text-[#EFE6D5]/60 bg-[#14100E] px-3 py-1 rounded-full border border-[#362A24]">
            React-Leaflet Active
          </span>
        </div>

        {/* Map Visual Box */}
        <div className="relative h-80 rounded-2xl overflow-hidden bg-jali-mesh border border-[#362A24] flex items-center justify-center text-center p-6">
          <div className="max-w-md space-y-3 z-10">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C85A32]/20 border border-[#D4AF37]/40 flex items-center justify-center text-2xl">
              🗺️
            </div>
            <h3 className="text-xl font-heritage font-bold text-[#F7F3E9]">
              Spatial Map Ready for Navigation
            </h3>
            <p className="text-xs text-[#EFE6D5]/70">
              Interactive Leaflet maps with custom terracotta marker pins and trail routes will load against all {HERITAGE_SITES.length} heritage sites.
            </p>
          </div>
        </div>
      </div>

      {/* All Heritage Site Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {HERITAGE_SITES.map((site) => (
          <div
            key={site.id}
            className="bg-[#1C1613] rounded-3xl overflow-hidden border border-[#362A24] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48">
                <img src={site.thumbnail} alt={site.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613] via-transparent to-black/30"></div>
                <span className="absolute top-3 left-3 bg-[#14100E]/90 px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                  {site.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-heritage font-bold text-[#F7F3E9]">{site.name}</h3>
                <p className="text-xs text-[#EFE6D5]/70 leading-relaxed">{site.shortDescription}</p>
                <div className="pt-2 text-xs text-[#C85A32] font-semibold">
                  Dynasty: <span className="text-[#EFE6D5]/80 font-normal">{site.dynasty}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button className="w-full py-3 rounded-xl bg-[#241E1C] hover:bg-[#C85A32] text-[#F7F3E9] text-xs font-semibold transition-all">
                Launch Trail ({site.duration})
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
