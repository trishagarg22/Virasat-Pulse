import React, { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import HeritageMap from "../components/dashboard/HeritageMap";
import { HERITAGE_SITES } from "../data/heritageSites";
import { Search, Layers, Filter, CheckCircle2, AlertTriangle, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ExploreMapPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState({
    "Monuments": true,
    "Art & Crafts": true,
    "Folk Traditions": true,
    "Music & Dance": true,
    "Festivals": true,
    "Oral Histories": true
  });
  const [selectedSiteModal, setSelectedSiteModal] = useState(null);

  const toggleCategory = (cat) => {
    setActiveCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const filteredSites = HERITAGE_SITES.filter((site) => {
    const matchesCategory = activeCategories[site.category] ?? true;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SidebarLayout>
      <div className="p-4 sm:p-8 space-y-6 relative min-h-[calc(100vh-80px)]">
        
        {/* Content Top Bar: Search Input + Layers Toggle Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-amber-500/20">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search location or heritage site..."
              className="w-full bg-[#0A1422] border border-[#1E3A5F] focus:border-amber-500/60 rounded-full pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-400 outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                // Reset categories toggle
                setActiveCategories({
                  "Monuments": true,
                  "Art & Crafts": true,
                  "Folk Traditions": true,
                  "Music & Dance": true,
                  "Festivals": true,
                  "Oral Histories": true
                });
              }}
              className="px-4 py-2 rounded-full bg-[#132640] border border-[#1E3A5F] text-slate-200 text-xs font-semibold hover:border-amber-500/40 transition-colors flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Reset Layers Filter</span>
            </button>
          </div>
        </div>

        {/* Main Map Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
          
          {/* Leaflet Map (Left 8/9 cols) */}
          <div className="lg:col-span-8 xl:col-span-9 h-[620px] rounded-3xl overflow-hidden border border-[#1E3A5F] shadow-2xl relative">
            <HeritageMap
              sites={filteredSites}
              selectedSite={selectedSiteModal}
              onSelectSite={(site) => {
                navigate(`/detail/${site.id}`);
              }}
            />
          </div>

          {/* Right Floating Control Panel: Heritage Categories & Status Legend */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            
            {/* Heritage Categories Toggle Switches Panel */}
            <div className="glass-panel p-6 rounded-3xl border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif font-bold text-white text-sm">
                    Heritage Categories
                  </h3>
                </div>
                <span className="text-[10px] text-amber-400 font-mono font-bold">
                  {Object.values(activeCategories).filter(Boolean).length} Active
                </span>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: "Monuments", icon: "🏛️", color: "#38BDF8" },
                  { name: "Art & Crafts", icon: "🧵", color: "#F59E0B" },
                  { name: "Folk Traditions", icon: "🌾", color: "#A855F7" },
                  { name: "Music & Dance", icon: "🎵", color: "#EC4899" },
                  { name: "Festivals", icon: "✨", color: "#EAB308" },
                  { name: "Oral Histories", icon: "📜", color: "#10B981" }
                ].map((cat) => {
                  const isActive = activeCategories[cat.name] ?? true;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => toggleCategory(cat.name)}
                      className={`w-full p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
                        isActive
                          ? "bg-[#132640] border-amber-500/40 text-white"
                          : "bg-[#0A1422]/60 border-transparent text-slate-500"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </div>
                      <span className={`w-3 h-3 rounded-full ${isActive ? "bg-amber-400" : "bg-slate-700"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Heritage Status Legend Panel */}
            <div className="glass-panel p-6 rounded-3xl border border-amber-500/20 space-y-4">
              <h4 className="font-serif font-bold text-white text-sm border-b border-[#1E3A5F] pb-3">
                Heritage Status Legend
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-emerald-500/30">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold text-emerald-300">Thriving</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Protected / Active</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-yellow-500/30">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="font-bold text-yellow-300">Needs Attention</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Monitored</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-orange-500/30">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="font-bold text-orange-300">At Risk</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Vulnerable</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1422] border border-red-500/30">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold text-red-400">Critical</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Action Required</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </SidebarLayout>
  );
}
