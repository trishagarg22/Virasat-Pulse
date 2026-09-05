import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  BookOpen,
  Award,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Flame,
  CheckCircle2,
  HelpCircle,
  Volume2,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { HERITAGE_SITES, CATEGORIES } from '../data/heritageSites';
import { STORIES } from '../data/stories';
import { QUIZZES } from '../data/quizzes';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Trails');
  
  // Interactive Quiz Widget State
  const sampleQuiz = QUIZZES[0].questions[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredSites = selectedCategory === 'All Trails'
    ? HERITAGE_SITES
    : HERITAGE_SITES.filter(site => site.tags.includes(selectedCategory) || site.category.includes(selectedCategory));

  const featureCards = [
    {
      icon: Compass,
      title: 'Interactive Delhi Trails',
      description: 'Explore Delhi’s historic monuments as a story-driven journey with interactive maps, architectural checkpoints, and location-based clues.',
      color: 'from-[#C85A32] to-[#B34726]',
      badge: 'Gamified Map'
    },
    {
      icon: BookOpen,
      title: 'Local Stories & Oral Legends',
      description: 'Listen to authentic folklore of Shahjahanabad, unheard myths of stepwells, and historical chronicles of imperial Delhi.',
      color: 'from-[#D4AF37] to-[#A3811C]',
      badge: 'Audio & Lore'
    },
    {
      icon: Award,
      title: 'Cultural Quizzes & Digital Relics',
      description: 'Test your knowledge on Delhi’s architecture, earn XP, unlock digital relics like the Iron Pillar Badge, and rank up.',
      color: 'from-[#6B1D2F] to-[#4A121E]',
      badge: 'Badges & XP'
    },
    {
      icon: UserCheck,
      title: 'Living Delhi Heritage Connect',
      description: 'Discover living heritage by connecting with Old Delhi master artisans, zardozi embroiderers, and traditional sculptors.',
      color: 'from-[#8C2B42] to-[#6B1D2F]',
      badge: 'Living Heritage'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-mandala-pattern">
        {/* Glow Spheres */}
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
              {/* Badge Pill (Cleaned up, no SIH) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241E1C] border border-[#D4AF37]/40 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-ping"></span>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Capital Edition • Delhi Heritage Trails
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heritage font-extrabold text-[#F7F3E9] leading-tight sm:leading-tight">
                Unfold the Living <span className="text-gold-gradient">Heritage of Delhi</span>
              </h1>

              {/* Subheading / Value Prop */}
              <p className="text-base sm:text-lg text-[#EFE6D5]/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Step into interactive trails across Delhi's ancient citadels, towering minarets, and subterranean stepwells. Unravel 1,000+ years of history through audio lore, spatial quests, and digital relic rewards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/trails"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C85A32] via-[#B34726] to-[#6B1D2F] text-white font-semibold text-base shadow-xl shadow-[#C85A32]/30 hover:shadow-[#C85A32]/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
                >
                  <Compass className="w-5 h-5 text-[#F3E086] group-hover:rotate-45 transition-transform" />
                  <span>Explore Delhi Trails</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/quiz"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#1C1613] border border-[#D4AF37]/50 text-[#F7F3E9] font-medium text-base hover:bg-[#2A221E] hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
                >
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <span>Delhi Heritage Quiz</span>
                </Link>
              </div>

              {/* Micro stats ribbon */}
              <div className="pt-6 border-t border-[#362A24]/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-heritage font-bold text-[#D4AF37]">4 Iconic</div>
                  <div className="text-xs text-[#EFE6D5]/60">Delhi Heritage Sites</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heritage font-bold text-[#C85A32]">1,600 Yrs</div>
                  <div className="text-xs text-[#EFE6D5]/60">Iron Metallurgy History</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heritage font-bold text-[#F7F3E9]">100%</div>
                  <div className="text-xs text-[#EFE6D5]/60">Interactive Quests</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Element - Qutub Minar / Delhi Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 via-[#C85A32]/30 to-[#6B1D2F]/30 blur-xl opacity-70 animate-pulse"></div>
                
                {/* Main Card Container */}
                <div className="relative bg-[#1C1613] rounded-3xl border border-[#D4AF37]/40 overflow-hidden shadow-2xl p-6 space-y-6">
                  
                  {/* Qutub Minar Featured Banner */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group">
                    <img
                      src={HERITAGE_SITES[0].heroImage}
                      alt="Qutub Minar Complex"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-black/40 to-transparent"></div>
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-[#14100E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 flex items-center gap-2">
                      <span className="text-sm">🕌</span>
                      <span className="text-xs font-semibold text-[#D4AF37]">Mehrauli • Trail #01</span>
                    </div>

                    {/* Bottom Info inside image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-heritage font-bold text-white drop-shadow">
                        Qutub Minar & Rustless Pillar
                      </h3>
                      <p className="text-xs text-[#EFE6D5]/80 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Mehrauli, Delhi • 350 XP Reward
                      </p>
                    </div>
                  </div>

                  {/* Floating Mini Interactive Trail Snippet */}
                  <div className="bg-[#241E1C] rounded-xl p-4 border border-[#362A24] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#D4AF37] font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Next Delhi Checkpoint
                      </span>
                      <span className="text-[#EFE6D5]/60">Checkpoint 1 of 4</span>
                    </div>
                    <p className="text-xs text-[#EFE6D5]/90 font-medium leading-relaxed">
                      "Find the 1,600-year-old iron pillar forged during the Gupta Dynasty that never rusts..."
                    </p>
                    <div className="w-full bg-[#14100E] rounded-full h-2 overflow-hidden border border-[#362A24]">
                      <div className="bg-gradient-to-r from-[#C85A32] to-[#D4AF37] h-full w-2/5 rounded-full"></div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION ("WHY VIRASAT PULSE?") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-[#C85A32] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30">
            Delhi Heritage Exploration
          </span>
          <h2 className="text-3xl sm:text-4xl font-heritage font-bold text-[#F7F3E9]">
            Four Pillars of the <span className="text-gold-gradient">Virasat Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[#EFE6D5]/70">
            Tailored for Gen Z heritage explorers and students to experience Delhi’s historic monuments through interactive story-driven quests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, idx) => {
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
                  <span>Explore features</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED DELHI TRAILS PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              Interactive Capital Journeys
            </span>
            <h2 className="text-3xl sm:text-4xl font-heritage font-bold text-[#F7F3E9]">
              Featured <span className="text-terracotta-gradient">Delhi Heritage Trails</span>
            </h2>
            <p className="text-sm text-[#EFE6D5]/70 max-w-xl">
              Select a trail to explore red sandstone fortresses, imperial mausoleums, and ancient subterranean stepwells.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.slice(0, 4).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C85A32] text-white shadow-md shadow-[#C85A32]/30'
                    : 'bg-[#1C1613] text-[#EFE6D5]/70 border border-[#362A24] hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Trail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSites.map((site, idx) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1C1613] rounded-3xl overflow-hidden border-gold-glow group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={site.thumbnail}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613] via-transparent to-black/30"></div>
                  
                  <div className="absolute top-3 left-3 bg-[#14100E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30 text-[11px] font-semibold text-[#D4AF37] flex items-center gap-1.5">
                    <span>{site.badgeIcon}</span>
                    <span>{site.category}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#C85A32] text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                    +{site.xpReward} XP
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#EFE6D5]/60">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span className="truncate">{site.location}</span>
                  </div>

                  <h3 className="text-lg font-heritage font-bold text-[#F7F3E9] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {site.name}
                  </h3>

                  <p className="text-xs text-[#EFE6D5]/70 line-clamp-2 leading-relaxed">
                    {site.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <Link
                  to="/trails"
                  className="w-full py-2.5 rounded-xl bg-[#241E1C] hover:bg-gradient-to-r hover:from-[#C85A32] hover:to-[#B34726] text-[#F7F3E9] font-medium text-xs border border-[#362A24] hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Trail</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DAILY DELHI QUIZ TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1E1815] via-[#2A221E] to-[#1E1815] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Interactive Quiz Challenge
              </div>
              <h2 className="text-3xl font-heritage font-bold text-[#F7F3E9]">
                Test Your <span className="text-gold-gradient">Delhi Heritage IQ</span>
              </h2>
              <p className="text-sm text-[#EFE6D5]/80 leading-relaxed">
                Can you solve the metallurgical mystery of the Iron Pillar? Select an answer right now to claim +100 XP!
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/quiz"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white text-sm font-medium hover:shadow-lg transition-all"
                >
                  View Full Quiz Challenge
                </Link>
              </div>
            </div>

            {/* Quiz Interactive Card */}
            <div className="lg:col-span-7 bg-[#14100E] rounded-2xl p-6 border border-[#362A24] space-y-4">
              <div className="flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="font-semibold flex items-center gap-1">
                  <HelpCircle className="w-4 h-4 text-[#C85A32]" /> Question 1 of 3
                </span>
                <span className="bg-[#C85A32]/20 text-[#C85A32] px-2 py-0.5 rounded font-bold">+100 XP</span>
              </div>

              <h3 className="text-base sm:text-lg font-medium text-[#F7F3E9] leading-snug">
                {sampleQuiz.question}
              </h3>

              <div className="space-y-2.5 pt-1">
                {sampleQuiz.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === sampleQuiz.correctAnswer;
                  
                  let btnStyle = "bg-[#1E1815] text-[#EFE6D5]/90 border-[#362A24] hover:border-[#D4AF37]/40";
                  if (showAnswer) {
                    if (isCorrect) btnStyle = "bg-emerald-950/60 text-emerald-300 border-emerald-500/60";
                    else if (isSelected) btnStyle = "bg-rose-950/60 text-rose-300 border-rose-500/60";
                  } else if (isSelected) {
                    btnStyle = "bg-[#C85A32]/20 text-[#D4AF37] border-[#D4AF37]";
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelectedOption(idx);
                        setShowAnswer(true);
                      }}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {showAnswer && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-[#241E1C] border border-[#D4AF37]/30 text-xs text-[#EFE6D5]/90 leading-relaxed"
                >
                  <span className="font-bold text-[#D4AF37]">Historical Fact: </span>
                  {sampleQuiz.explanation}
                </motion.div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#C85A32] via-[#99371D] to-[#6B1D2F] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-mandala-pattern opacity-20 pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-heritage font-extrabold tracking-wide">
              Become a Delhi <br />Virasat Guardian
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Explore Delhi's historic citadels, stepwells, and ancient minarets through an interactive lens today!
            </p>
            <div className="pt-4">
              <Link
                to="/trails"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#14100E] font-bold text-base shadow-2xl transition-all hover:scale-105"
              >
                <Compass className="w-5 h-5" />
                <span>Launch Interactive Delhi Map</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
