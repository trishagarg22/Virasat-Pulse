import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, ChevronRight, Zap } from "lucide-react";
import { HERITAGE_SITES } from "../data/heritageSites";

// Map each site to an Image-Led Skill Card
const SKILL_CARD_DATA = HERITAGE_SITES.map((site, index) => {
  let tier = "TIER I • ANCIENT LEGACY";
  let traitName = "Historical Endurance";
  let traitDesc = site.surprisingFact;
  let powerScore = 90 + (index % 10);
  let skillCategory = "Architecture & Engineering";

  if (site.id.includes("mehrauli")) {
    tier = "TIER III • MYSTICAL METALLURGY";
    traitName = "Rust-proof Misawite Armor";
    traitDesc = "1,600 years without rusting in open air; protected by passive iron phosphate.";
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
  };
});

export default function HeritageSkillCards({ onSelectSite }) {
  const [filterCategory, setFilterCategory] = useState("ALL");

  const categories = [
    { id: "ALL", label: "All Relic Cards" },
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
    <section id="heritage-skills-section" className="py-28 sm:py-36 relative overflow-hidden text-amber-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-amber-500/20 text-stone-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Image-Led Relic Deck</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-amber-100 mb-4">
            📜 Heritage Skill Cards
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto text-base font-sans leading-relaxed">
            Discover Delhi's living heritage skills, architectural traits, and ancient lineages.
          </p>
        </div>

        {/* Muted Filter Chips */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                filterCategory === cat.id
                  ? "bg-amber-500 text-stone-950 border-amber-400 shadow-lg scale-105"
                  : "bg-stone-900/90 border-amber-500/20 text-stone-300 hover:text-amber-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* IMAGE-FIRST CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-stone-900/90 border border-amber-500/20 hover:border-amber-400/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all"
            >
              <div>
                {/* DOMINANT HERO IMAGE WITH GRADIENT SCRIM OVERLAY */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={card.heroImage || card.thumbnail}
                    alt={card.shortName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

                  {/* Top Level Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-amber-300 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                      {card.tier}
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-[10px] font-mono text-amber-400 border border-amber-500/30">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>LVL {card.level}</span>
                    </div>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-amber-400 font-mono block mb-1">
                      📍 {card.shortName} • {card.type}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                      {card.name}
                    </h3>
                  </div>
                </div>

                {/* Short Skill Trait Caption */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{card.traitName}</span>
                    </span>
                    <span className="text-stone-400 font-mono text-[11px]">
                      Power: {card.powerScore}/100
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans line-clamp-2">
                    {card.traitDesc}
                  </p>
                </div>
              </div>

              {/* Single Vivid Gold CTA Button per card */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectSite && onSelectSite(card)}
                  className="w-full py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Explore Place Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
