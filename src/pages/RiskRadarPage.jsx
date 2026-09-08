import React, { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import HeritageMap from "../components/dashboard/HeritageMap";
import { HERITAGE_SITES } from "../data/heritageSites";
import { ShieldAlert, AlertTriangle, ArrowRight, X, Flame, Sparkles, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RiskRadarPage() {
  const navigate = useNavigate();
  const [isRadarOn, setIsRadarOn] = useState(true);
  const [selectedSite, setSelectedSite] = useState(HERITAGE_SITES[0]); // default to first site

  return (
    <SidebarLayout>
      <div className="p-4 sm:p-8 space-y-6 relative min-h-[calc(100vh-80px)]">
        
        {/* Top Control Bar with Risk Radar Toggle Switch */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-950/80 border border-red-500/40 text-red-400">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-white text-base leading-none">
                AI Heritage Risk Radar
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">
                Real-time vulnerability prediction engine
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-300">Radar Mode:</span>
            <button
              onClick={() => setIsRadarOn(!isRadarOn)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border ${
                isRadarOn
                  ? "bg-red-500 text-white border-red-400 shadow-lg shadow-red-500/30"
                  : "bg-[#132640] text-slate-400 border-[#1E3A5F]"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>{isRadarOn ? "RADAR ON (LIVE PULSE)" : "RADAR OFF"}</span>
            </button>
          </div>
        </div>

        {/* Main Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
          
          {/* Leaflet Map with Pulsing Critical Pins */}
          <div className="lg:col-span-8 xl:col-span-9 h-[620px] rounded-3xl overflow-hidden border border-[#1E3A5F] shadow-2xl relative">
            <HeritageMap
              sites={HERITAGE_SITES}
              selectedSite={selectedSite}
              onSelectSite={(site) => setSelectedSite(site)}
            />
          </div>

          {/* Right Floating Status Legend & Selected Site Risk Analysis */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            
            {/* Status Legend Panel (Top Right) */}
            <div className="glass-panel p-6 rounded-3xl border border-amber-500/20 space-y-3">
              <h4 className="font-serif font-bold text-white text-sm border-b border-[#1E3A5F] pb-3">
                Risk Radar Status Legend
              </h4>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-emerald-500/30">
                  <span className="font-bold text-emerald-300 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Thriving
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">&lt; 30% Risk</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-yellow-500/30">
                  <span className="font-bold text-yellow-300 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" /> Needs Attention
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">31-69% Risk</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-orange-500/30">
                  <span className="font-bold text-orange-300 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> At Risk
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">70-84% Risk</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-red-500/30">
                  <span className="font-bold text-red-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" /> Critical
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">85%+ Risk</span>
                </div>
              </div>
            </div>

            {/* Clicked Pin Risk Detail Slide-In Panel */}
            <AnimatePresence mode="wait">
              {selectedSite && (
                <motion.div
                  key={selectedSite.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="glass-panel p-6 rounded-3xl border border-amber-500/40 shadow-2xl space-y-4 relative"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block mb-1">
                        📍 {selectedSite.location}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-white leading-tight">
                        {selectedSite.name}
                      </h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      selectedSite.status === "Critical" ? "bg-red-950 border-red-500 text-red-300" :
                      selectedSite.status === "At Risk" ? "bg-orange-950 border-orange-500 text-orange-300" :
                      selectedSite.status === "Needs Attention" ? "bg-yellow-950 border-yellow-500 text-yellow-300" :
                      "bg-emerald-950 border-emerald-500 text-emerald-300"
                    }`}>
                      {selectedSite.status === "Critical" ? "🔥 Critical" : selectedSite.status}
                    </span>
                  </div>

                  {/* Risk Score + Progress Bar */}
                  <div className="p-3.5 rounded-2xl bg-[#0A1422] border border-[#1E3A5F] space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Risk Score</span>
                      <span className="text-amber-400 font-mono text-sm">{selectedSite.riskScore} / 100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#132640] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          selectedSite.riskScore >= 85 ? "bg-red-500" :
                          selectedSite.riskScore >= 70 ? "bg-orange-500" :
                          selectedSite.riskScore >= 40 ? "bg-yellow-500" : "bg-emerald-500"
                        }`}
                        style={{ width: `${selectedSite.riskScore}%` }}
                      />
                    </div>
                  </div>

                  {/* "Why?" Risk Factors Bullet List */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Why Is This At Risk?
                    </span>
                    <div className="space-y-2 text-xs text-slate-300">
                      {(selectedSite.declineReasons || [
                        "Fewer master practitioners active in region",
                        "Low youth participation in traditional apprenticeships",
                        "Limited digital documentation and archival records",
                        "Restricted geographic domain exposure"
                      ]).map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-[#0A1422]/60 border border-[#1E3A5F]/50">
                          <span className="text-red-400 font-bold">•</span>
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gold "View Details" Link Button */}
                  <button
                    onClick={() => navigate(`/detail/${selectedSite.id}`)}
                    className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>View Full Heritage Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </SidebarLayout>
  );
}
