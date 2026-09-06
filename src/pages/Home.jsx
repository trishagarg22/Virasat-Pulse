import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  BookOpen,
  Award,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Maximize2,
  ChevronRight,
  ShieldAlert,
  Sliders,
  PlusCircle,
  X
} from 'lucide-react';
import { HERITAGE_SITES } from '../data/heritageSites';
import { QUIZZES } from '../data/quizzes';
import HeritageMap from '../components/dashboard/HeritageMap';

export default function Home() {
  const navigate = useNavigate();
  const sampleQuiz = QUIZZES[0].questions[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Hero Enlarge Map Modal State
  const [isMapEnlarged, setIsMapEnlarged] = useState(false);
  const [selectedHeroSite, setSelectedHeroSite] = useState(null);

  const intelligenceFeatures = [
    {
      icon: Sliders,
      title: 'Interactive Time Travel',
      description: 'Travel through 1800 to 2026 with our interactive time slider. Observe how historical empires and modern urban expansion transformed heritage sites.',
      color: 'from-[#C85A32] to-[#B34726]',
      badge: '1800-2026 Timeline'
    },
    {
      icon: ShieldAlert,
      title: 'Virasat AI Risk Analysis',
      description: 'AI-driven vulnerability scoring that predicts practitioner loss, youth adoption rates, and physical structural degradation risks.',
      color: 'from-[#6B1D2F] to-[#4A121E]',
      badge: 'AI Intelligence'
    },
    {
      icon: Clock,
      title: 'Then vs Now Comparison',
      description: 'Side-by-side historical peak vs present status analysis tracking artisan counts, activity levels, and archival documentation scores.',
      color: 'from-[#D4AF37] to-[#A3811C]',
      badge: 'Historical Records'
    },
    {
      icon: PlusCircle,
      title: 'Save Your Virasat Vault',
      description: 'Empowering youth and local communities to upload historical photos, record oral lore, and archive endangered heritage locations.',
      color: 'from-[#8C2B42] to-[#6B1D2F]',
      badge: 'Community Action'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-mandala-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C85A32]/15 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241E1C] border border-[#D4AF37]/40 shadow-inner">
                <Sparkles className="w-4 h-4 text-[#C85A32] animate-pulse" />
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Heritage Intelligence & Conservation Platform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heritage font-extrabold text-[#F7F3E9] leading-tight sm:leading-tight">
                Explore Heritage. <br />
                <span className="text-gold-gradient">Travel Through Time.</span> <br />
                <span className="text-terracotta-gradient">Protect What Matters.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#EFE6D5]/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Turn passive history into active intelligence. Map endangered crafts, travel across 200 years of temporal change, and analyze AI risk scores to protect India's living cultural legacy.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/dashboard"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C85A32] via-[#B34726] to-[#6B1D2F] text-white font-bold text-base shadow-xl shadow-[#C85A32]/30 hover:shadow-[#C85A32]/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
                >
                  <Compass className="w-5 h-5 text-[#F3E086] group-hover:rotate-45 transition-transform" />
                  <span>Launch Intelligence Dashboard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setIsMapEnlarged(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#1C1613] border border-[#D4AF37]/50 text-[#F7F3E9] font-medium text-base hover:bg-[#2A221E] hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
                >
                  <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Enlarge Map View</span>
                </button>
              </div>

              {/* Stats Ribbon */}
              <div className="pt-6 border-t border-[#362A24]/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-heritage font-bold text-[#D4AF37]">4 Delhi Sites</div>
                  <div className="text-xs text-[#EFE6D5]/60">Tracked on Map</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heritage font-bold text-[#C85A32]">1800-2026</div>
                  <div className="text-xs text-[#EFE6D5]/60">Timeline Range</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heritage font-bold text-[#F7F3E9]">AI Engine</div>
                  <div className="text-xs text-[#EFE6D5]/60">Vulnerability Index</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column: INTERACTIVE MAP PREVIEW (Replaces the single hardcoded place image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 via-[#C85A32]/30 to-[#6B1D2F]/30 blur-xl opacity-70 animate-pulse"></div>
                
                {/* Hero Map Card Container */}
                <div className="relative bg-[#1C1613] rounded-3xl border border-[#D4AF37]/40 overflow-hidden shadow-2xl p-5 space-y-4">
                  
                  {/* Embedded Leaflet Map Preview with Location Names */}
                  <div className="relative h-72 rounded-2xl overflow-hidden border border-[#362A24] group cursor-pointer">
                    <HeritageMap
                      sites={HERITAGE_SITES}
                      selectedSite={selectedHeroSite}
                      onSelectSite={(site) => {
                        setSelectedHeroSite(site);
                        setIsMapEnlarged(true);
                      }}
                      currentYear={2026}
                    />

                    {/* Enlarge Map Overlay Button on top of map */}
                    <button
                      onClick={() => setIsMapEnlarged(true)}
                      className="absolute bottom-3 right-3 z-[450] px-3.5 py-1.5 rounded-full bg-[#14100E]/90 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37] hover:text-white hover:bg-[#C85A32] shadow-lg flex items-center gap-1.5 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Enlarge Map</span>
                    </button>
                  </div>

                  {/* AI Risk Teaser snippet below map */}
                  <div className="bg-[#241E1C] rounded-xl p-3.5 border border-[#D4AF37]/30 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-[#D4AF37]">
                      <span className="font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" /> Delhi Heritage Radar
                      </span>
                      <span className="text-[10px] text-[#C85A32] font-bold">2 Sites At Risk</span>
                    </div>
                    <p className="text-[11px] text-[#EFE6D5]/80 leading-relaxed">
                      Click any location marker on the map above to view pictures, travel through time, or expand to full-screen view.
                    </p>
                  </div>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] hover:from-[#E0734C] hover:to-[#C85A32] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-all"
                  >
                    <span>Launch Full Interactive Map & Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FULL-SCREEN ENLARGED MAP MODAL */}
      <AnimatePresence>
        {isMapEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex flex-col space-y-4"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between bg-[#1C1613] p-4 rounded-2xl border border-[#D4AF37]/40 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛕</span>
                <div>
                  <h3 className="font-heritage font-bold text-lg text-white">
                    Enlarged Heritage Intelligence Map
                  </h3>
                  <p className="text-xs text-[#EFE6D5]/70">
                    Click any marker to inspect pictures, timelines, and AI risk scores.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-bold text-xs shadow"
                >
                  Open Full Workspace →
                </Link>
                <button
                  onClick={() => setIsMapEnlarged(false)}
                  className="p-2 rounded-xl bg-[#14100E] border border-[#362A24] text-white hover:bg-rose-900/60"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Expanded Full-Height Leaflet Map Container */}
            <div className="flex-1 w-full rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl relative">
              <HeritageMap
                sites={HERITAGE_SITES}
                selectedSite={selectedHeroSite}
                onSelectSite={(site) => {
                  setSelectedHeroSite(site);
                }}
                currentYear={2026}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-[#C85A32] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30">
            Intelligence Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-heritage font-bold text-[#F7F3E9]">
            Four Pillars of <span className="text-gold-gradient">Virasat Intelligence</span>
          </h2>
          <p className="text-sm sm:text-base text-[#EFE6D5]/70">
            Combining spatial maps, temporal simulation, AI vulnerability scoring, and youth contribution to protect what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {intelligenceFeatures.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#1C1613] rounded-3xl p-6 border-gold-glow relative group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heritage font-bold text-[#F7F3E9] group-hover:text-[#D4AF37] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EFE6D5]/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#362A24]/60 flex items-center text-xs font-semibold text-[#C85A32] group-hover:text-[#D4AF37] transition-colors gap-1">
                  <Link to="/dashboard" className="flex items-center gap-1">
                    <span>Explore in Dashboard</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#C85A32] via-[#99371D] to-[#6B1D2F] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-mandala-pattern opacity-20 pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-heritage font-extrabold tracking-wide">
              Travel Through Time. <br />Protect What Matters.
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Experience the single-screen Heritage Intelligence Dashboard with Leaflet risk maps and time-travel simulation.
            </p>
            <div className="pt-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#14100E] font-bold text-base shadow-2xl transition-all hover:scale-105"
              >
                <Compass className="w-5 h-5" />
                <span>Launch Virasat Intelligence Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
