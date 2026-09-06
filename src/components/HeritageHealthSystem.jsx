import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ShieldCheck, Eye, X, ChevronRight, Activity } from "lucide-react";
import { HERITAGE_SITES } from "../data/heritageSites";

export default function HeritageHealthSystem({ onSiteSelect }) {
  const [filter, setFilter] = useState("ALL"); // ALL | NEEDS_ATTENTION | WATCH_CLOSELY | WELL_PROTECTED
  const [selectedThreatSite, setSelectedThreatSite] = useState(null);

  const filteredSites = HERITAGE_SITES.filter((site) => {
    if (filter === "ALL") return true;
    return site.healthStatus === filter;
  });

  const getStatusBadgeUI = (status) => {
    switch (status) {
      case "NEEDS_ATTENTION":
        return {
          icon: <AlertTriangle className="w-4 h-4 text-red-400" />,
          label: "🔴 Needs Attention",
          bg: "bg-red-950/60 border-red-500/40 text-red-300",
          cardBorder: "border-red-500/30 hover:border-red-400"
        };
      case "WATCH_CLOSELY":
        return {
          icon: <Eye className="w-4 h-4 text-amber-400" />,
          label: "🟡 Watch Closely",
          bg: "bg-amber-950/60 border-amber-500/40 text-amber-300",
          cardBorder: "border-amber-500/30 hover:border-amber-400"
        };
      case "WELL_PROTECTED":
      default:
        return {
          icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
          label: "🟢 Well Protected",
          bg: "bg-emerald-950/60 border-emerald-500/40 text-emerald-300",
          cardBorder: "border-emerald-500/30 hover:border-emerald-400"
        };
    }
  };

  return (
    <section id="heritage-health-section" className="py-20 bg-stone-950 text-amber-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Living Heritage Health Index</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            Heritage Health Monitor
          </h2>
          <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Delhi's living heritage isn't static—some sites face active threats from urbanization and loss of traditional knowledge, while others thrive under protection.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
          {[
            { id: "ALL", label: "All 10 Heritage Sites" },
            { id: "NEEDS_ATTENTION", label: "🔴 Needs Attention" },
            { id: "WATCH_CLOSELY", label: "🟡 Watch Closely" },
            { id: "WELL_PROTECTED", label: "🟢 Well Protected" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                filter === btn.id
                  ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-stone-900 border border-amber-500/20 text-amber-200/70 hover:border-amber-500/40 hover:text-amber-100"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Heritage Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => {
            const badge = getStatusBadgeUI(site.healthStatus);
            return (
              <motion.div
                key={site.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`bg-stone-900/80 border rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 ${badge.cardBorder}`}
              >
                <div>
                  {/* Site Image & Health Badge Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={site.thumbnail}
                      alt={site.shortName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-bold flex items-center gap-1.5 backdrop-blur-md ${badge.bg}`}>
                      {badge.icon}
                      <span>{badge.label}</span>
                    </div>
                  </div>

                  {/* Site Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1 text-xs text-amber-400 font-mono">
                      <span>{site.type}</span>
                      <span>•</span>
                      <span>{site.dynasty?.split("(")[0]}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">
                      {site.shortName}
                    </h3>
                    <p className="text-xs text-amber-200/70 line-clamp-2 mb-4 font-sans">
                      {site.surprisingFact}
                    </p>

                    {/* Stats Pill */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-amber-200/70 p-3 rounded-xl bg-amber-950/30 border border-amber-500/10 mb-4">
                      <div>
                        <span className="block text-amber-400 font-bold">Artisans / Craft:</span>
                        <span>{site.practitionersCount || "Protected Site"}</span>
                      </div>
                      <div>
                        <span className="block text-amber-400 font-bold">Risk Index:</span>
                        <span>{site.riskScore}% Risk Level</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-amber-500/10 mt-2">
                  <button
                    onClick={() => setSelectedThreatSite(site)}
                    className="flex-1 py-2 px-3 rounded-xl bg-amber-900/30 hover:bg-amber-900/60 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Why? Threat Breakdown</span>
                  </button>

                  <button
                    onClick={() => onSiteSelect && onSiteSelect(site)}
                    className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Discover</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* "Why?" Threat Breakdown Modal */}
      <AnimatePresence>
        {selectedThreatSite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-amber-50 overflow-hidden"
            >
              <button
                onClick={() => setSelectedThreatSite(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚠️</span>
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                    Heritage Health Analysis
                  </span>
                  <h3 className="text-xl font-serif font-bold text-amber-100">
                    {selectedThreatSite.shortName}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 mb-6 text-xs text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">Status: {selectedThreatSite.statusBadge}</span>
                <p>Risk Score: {selectedThreatSite.riskScore}% vulnerability based on urbanization, environmental exposure, and preservation support.</p>
              </div>

              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                Key Vulnerability Factors:
              </h4>

              <div className="space-y-2.5 mb-6">
                {[
                  "Rapid urban encroachment & commercial warehouse conversions",
                  "Overhead wiring & loss of traditional Lakhori brick haveli facades",
                  "Declining youth apprenticeship in traditional craft skills",
                  "Groundwater table decline and environmental weathering"
                ].map((threat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-amber-100/90 p-2.5 rounded-xl bg-stone-950 border border-amber-500/10">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{threat}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedThreatSite(null)}
                  className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs font-bold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const site = selectedThreatSite;
                    setSelectedThreatSite(null);
                    if (onSiteSelect) onSiteSelect(site);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1"
                >
                  <span>Explore Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
