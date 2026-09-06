import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shield, Flame, Compass, ChevronRight, RotateCw, CheckCircle, Zap } from "lucide-react";
import { HERITAGE_SITES } from "../data/heritageSites";

// Map each site to a Skill Card concept with unique stats, tiers, and skill traits
const SKILL_CARD_DATA = HERITAGE_SITES.map((site, index) => {
  let tier = "TIER I • ANCIENT LEGACY";
  let traitName = "Historical Endurance";
  let traitDesc = site.surprisingFact;
  let powerScore = 90 + (index % 10);
  let skillCategory = "Architecture & Engineering";

  if (site.id.includes("mehrauli")) {
    tier = "TIER III • MYSTICAL METALLURGY";
    traitName = "Rust-proof Misawite Armor";
    traitDesc = "1,600 years without rusting in open air; protected by passive iron hydrogen phosphate.";
    powerScore = 99;
    skillCategory = "Ancient Craft & Metallurgy";
  } else if (site.id.includes("chandni-chowk")) {
    tier = "TIER I • BAZAAR ALCHEMY";
    traitName = "Ten-Generation Guild Lineage";
    traitDesc = "Asia's largest spice and silver bazaars active since 1650 AD.";
    powerScore = 96;
    skillCategory = "Living Guild Crafts";
  } else if (site.id.includes("nizamuddin")) {
    tier = "TIER II • SUFI SPIRITUAL SONG";
    traitName = "Amir Khusrau's Verse";
    traitDesc = "Continuous Thursday sunset Qawwali performances for 750 years.";
    powerScore = 98;
    skillCategory = "Oral Lore & Sacred Music";
  } else if (site.id.includes("humayun")) {
    tier = "TIER I • CHARBAGH BLUEPRINT";
    traitName = "Taj Mahal Master Blueprint";
    traitDesc = "First monumental garden tomb in South Asia, setting Mughal double-dome standards.";
    powerScore = 95;
    skillCategory = "Imperial Architecture";
  } else if (site.id.includes("hauz-khas")) {
    tier = "TIER II • WATER HYDRAULICS";
    traitName = "Subterranean Aquifer Engineering";
    traitDesc = "13th-century medieval reservoir and royal seminary cooling system.";
    powerScore = 92;
    skillCategory = "Water Hydro-Engineering";
  } else if (site.id.includes("qutub")) {
    tier = "TIER I • STONE MASONRY";
    traitName = "Sandstone Victory Minaret";
    traitDesc = "73-meter fluted tower adorned with intricate red sandstone calligraphy.";
    powerScore = 97;
    skillCategory = "Imperial Architecture";
  }

  return {
    ...site,
    tier,
    traitName,
    traitDesc,
    powerScore,
    skillCategory,
    level: 1000 + (index * 85),
    cardColor: site.healthStatus === "NEEDS_ATTENTION" ? "from-red-900/60 via-amber-950/80 to-stone-950" : "from-amber-900/60 via-stone-900 to-stone-950"
  };
});

export default function HeritageSkillCards({ onSelectSite }) {
  const [filterCategory, setFilterCategory] = useState("ALL");
  const [flippedCardId, setFlippedCardId] = useState(null);

  const categories = [
    { id: "ALL", label: "All Heritage Skill Cards" },
    { id: "Living Guild Crafts", label: "🧵 Living Guilds" },
    { id: "Imperial Architecture", label: "🏛 Imperial Architecture" },
    { id: "Ancient Craft & Metallurgy", label: "⚡ Metallurgy & Secrets" },
    { id: "Oral Lore & Sacred Music", label: "🎵 Sufi Lore & Music" }
  ];

  const filteredCards = SKILL_CARD_DATA.filter((card) => {
    if (filterCategory === "ALL") return true;
    return card.skillCategory === filterCategory;
  });

  return (
    <section id="heritage-skills-section" className="py-24 relative overflow-hidden text-amber-50">
      {/* Background Decorative Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-terracotta/15 to-amber-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Interactive Relic Skill Deck</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            📜 Delhi Heritage Skill Cards
          </h2>
          <p className="text-amber-200/80 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Every historic site in Delhi is a living skill card. Collect knowledge, inspect secret traits, and flip cards to unlock site lore.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                filterCategory === cat.id
                  ? "bg-amber-500 text-stone-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-stone-950/80 border-amber-500/20 text-amber-200/70 hover:border-amber-400/50 hover:text-amber-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => {
            const isFlipped = flippedCardId === card.id;

            return (
              <div
                key={card.id}
                className="perspective-1000 min-h-[460px] relative group"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  {/* FRONT OF SKILL CARD */}
                  <div
                    className={`w-full h-full rounded-3xl p-6 bg-gradient-to-b ${card.cardColor} border-2 border-amber-500/40 hover:border-amber-300 shadow-2xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden group-hover:shadow-amber-500/15`}
                  >
                    {/* Top Tier & Level Badge */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-500/20">
                        <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider">
                          {card.tier}
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-950/80 border border-amber-500/30 text-[10px] font-mono text-amber-300">
                          <Zap className="w-3 h-3 text-amber-400" />
                          <span>LVL {card.level}</span>
                        </div>
                      </div>

                      {/* Card Photo Frame with Golden Border */}
                      <div className="relative h-44 rounded-2xl overflow-hidden border border-amber-500/40 shadow-inner mb-4 group-hover:scale-[1.02] transition-transform">
                        <img
                          src={card.thumbnail}
                          alt={card.shortName}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-amber-300">
                          <span>📍 {card.shortName}</span>
                          <span className="bg-stone-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                            {card.type}
                          </span>
                        </div>
                      </div>

                      {/* Title & Category */}
                      <h3 className="text-xl font-serif font-bold text-amber-100 mb-1">
                        {card.name}
                      </h3>
                      <span className="text-xs font-mono text-amber-400/80 block mb-3">
                        Category: {card.skillCategory}
                      </span>

                      {/* Unique Skill Trait Box */}
                      <div className="p-3.5 rounded-2xl bg-stone-950/80 border border-amber-500/30 mb-4">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-1">
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            Skill Trait: {card.traitName}
                          </span>
                          <span className="text-[10px] text-amber-400 font-mono">
                            Power: {card.powerScore}/100
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-200/80 line-clamp-2 leading-relaxed">
                          {card.traitDesc}
                        </p>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center gap-3 pt-3 border-t border-amber-500/20">
                      <button
                        onClick={() => onSelectSite && onSelectSite(card)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-md"
                      >
                        <span>Unlock Place Lore</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
