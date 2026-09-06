import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Calendar, ChevronLeft, ChevronRight, MapPin, Eye } from "lucide-react";
import { HERITAGE_SITES } from "../data/heritageSites";

export const DELHI_ERAS = [
  {
    id: "era-rajput-sultanate",
    period: "1060 AD – 1290 AD",
    title: "1st & 2nd Cities: Qila Rai Pithora & Mehrauli",
    dynasty: "Tomar Rajputs & Slave Dynasty",
    description: "Delhi's genesis begins in Mehrauli. King Anangpal II builds Lal Kot, and Qutb-ud-din Aibak lays the red sandstone foundation of the Qutub Minar.",
    keySites: ["mehrauli-heritage-traditions", "qutub-minar-monument"],
    architectureNote: "Heavy red sandstone, carved corbelled arches, iron pillar metallurgy.",
    bgImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "era-khilji-tughlaq",
    period: "1296 AD – 1413 AD",
    title: "3rd & 4th Cities: Siri & Tughlaqabad",
    dynasty: "Khilji & Tughlaq Dynasties",
    description: "Alauddin Khilji excavates the giant Hauz Khas water reservoir. Ghiyasuddin Tughlaq erects massive stone fortifications and subterranean stepwells across Delhi.",
    keySites: ["hauz-khas-historical-cultural", "purana-qila-historical-site"],
    architectureNote: "Slanted stone batter walls, royal madrasas, reservoir engineering.",
    bgImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "era-mughal-foundations",
    period: "1526 AD – 1600 AD",
    title: "5th City: Dinpanah & First Mughal Gardens",
    dynasty: "Mughal Empire (Humayun & Akbar)",
    description: "Emperor Humayun raises Purana Qila atop ancient Indraprastha. Empress Bega Begum builds South Asia's first monumental Charbagh garden tomb.",
    keySites: ["humayuns-tomb-monument", "purana-qila-historical-site"],
    architectureNote: "Red sandstone with white marble inlay, double domes, octagonal garden layouts.",
    bgImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "era-shahjahanabad",
    period: "1638 AD – 1857 AD",
    title: "7th City: Walled Shahjahanabad & Living Bazaars",
    dynasty: "High Mughal Era",
    description: "Emperor Shah Jahan builds the grand walled city, Red Fort, and Chandni Chowk. Sufi culture flourishes around Hazrat Nizamuddin Auliya's shrine.",
    keySites: ["shahjahanabad-historic-urban", "red-fort-monument", "chandni-chowk-living-crafts", "nizamuddin-living-cultural"],
    architectureNote: "Lakhori brick havelis, jharokha balconies, moonlit water canals, silver bazaars.",
    bgImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "era-modern-living",
    period: "1911 AD – Today",
    title: "8th City: Lutyens' Capital & Living Crafts",
    dynasty: "Modern Era & Artisan Revival",
    description: "Delhi expands into modern India's capital while preserving ancient craft guilds, street food heritage, and artisan bazaars at Dilli Haat.",
    keySites: ["dilli-haat-crafts-artisans", "chandni-chowk-living-crafts"],
    architectureNote: "Blend of Indo-Saracenic avenues, open-air craft villages, and living heritage markets.",
    bgImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function DelhiLayersTimeline({ onSiteSelect }) {
  const [activeEraIndex, setActiveEraIndex] = useState(0);

  const activeEra = DELHI_ERAS[activeEraIndex];

  const eraSites = HERITAGE_SITES.filter((site) =>
    activeEra.keySites.includes(site.id)
  );

  return (
    <section id="delhi-layers-section" className="py-20 bg-stone-950 text-amber-50 relative overflow-hidden border-t border-b border-amber-500/20">
      {/* Background Image Layer with Dark Gradient Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEra.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url(${activeEra.bgImage})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/90 to-stone-950 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Era Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            Delhi Has Layers
          </h2>
          <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Delhi is not one city—it is 8 cities built on top of each other across 1,000 years.
            Drag or click through time to see how the landscape transformed.
          </p>
        </div>

        {/* Timeline Slider Navigation Buttons */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {DELHI_ERAS.map((era, index) => {
            const isActive = index === activeEraIndex;
            return (
              <button
                key={era.id}
                onClick={() => setActiveEraIndex(index)}
                className={`shrink-0 px-4 py-3 rounded-2xl border transition-all duration-300 text-left ${
                  isActive
                    ? "bg-amber-900/60 border-amber-400 text-amber-100 shadow-lg shadow-amber-500/10 scale-105"
                    : "bg-stone-900/60 border-amber-500/20 text-amber-200/60 hover:border-amber-500/40 hover:text-amber-100"
                }`}
              >
                <span className="text-xs font-mono text-amber-400 font-bold block mb-0.5">
                  {era.period}
                </span>
                <span className="text-sm font-serif font-bold whitespace-nowrap">
                  {era.title.split(":")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Era Details Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-stone-900/80 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            {/* Era Story Info */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
                    {activeEra.period}
                  </span>
                  <span className="text-xs text-amber-200/60 font-medium">
                    👑 {activeEra.dynasty}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-4 leading-snug">
                  {activeEra.title}
                </h3>

                <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {activeEra.description}
                </p>

                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/20 mb-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Architectural Legacy:
                  </span>
                  <p className="text-xs sm:text-sm text-amber-200/90 italic">
                    "{activeEra.architectureNote}"
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-4 border-t border-amber-500/10">
                <button
                  disabled={activeEraIndex === 0}
                  onClick={() => setActiveEraIndex((prev) => prev - 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                    activeEraIndex === 0
                      ? "opacity-30 border-stone-800 text-stone-600 cursor-not-allowed"
                      : "bg-stone-900 border-amber-500/30 text-amber-300 hover:bg-amber-900/40"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Earlier Era</span>
                </button>

                <div className="text-xs font-mono text-amber-400">
                  Era {activeEraIndex + 1} of {DELHI_ERAS.length}
                </div>

                <button
                  disabled={activeEraIndex === DELHI_ERAS.length - 1}
                  onClick={() => setActiveEraIndex((prev) => prev + 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                    activeEraIndex === DELHI_ERAS.length - 1
                      ? "opacity-30 border-stone-800 text-stone-600 cursor-not-allowed"
                      : "bg-stone-900 border-amber-500/30 text-amber-300 hover:bg-amber-900/40"
                  }`}
                >
                  <span>Later Era</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sites Built or Thriving in this Era */}
            <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-amber-500/10 lg:pl-8 pt-6 lg:pt-0">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sites Active In This Era</span>
              </h4>

              <div className="space-y-4">
                {eraSites.map((site) => (
                  <div
                    key={site.id}
                    onClick={() => onSiteSelect && onSiteSelect(site)}
                    className="group flex items-center gap-4 p-3 rounded-2xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/20 hover:border-amber-400/50 cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={site.thumbnail}
                      alt={site.shortName}
                      className="w-16 h-16 rounded-xl object-cover border border-amber-500/30 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-amber-300 truncate">
                          {site.shortName}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-900 border border-amber-500/20 text-amber-400">
                          {site.type}
                        </span>
                      </div>
                      <p className="text-xs text-amber-200/60 line-clamp-1">
                        {site.surprisingFact}
                      </p>
                    </div>
                    <Eye className="w-4 h-4 text-amber-400/60 group-hover:text-amber-300 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
