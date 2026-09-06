import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Users, ShieldAlert, Award, Sparkles, Compass, BookOpen, AlertTriangle, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import HeritageJourneyView from './HeritageJourneyView';
import VirasatIntelligencePanel from './VirasatIntelligencePanel';

export default function HeritageDetailPanel({ site, onClose, currentYear, onOpenSaveModal }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'journey' | 'intelligence'
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  if (!site) return null;

  const gallery = site.galleryImages && site.galleryImages.length > 0 
    ? site.galleryImages 
    : [{ url: site.heroImage || site.thumbnail, caption: site.name }];

  const currentPhoto = gallery[selectedPhotoIndex] || gallery[0];

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 right-0 z-50 w-full sm:w-[560px] bg-[#1C1613] border-l border-[#362A24] shadow-2xl overflow-y-auto flex flex-col text-[#EFE6D5]"
      >
        
        {/* Top Header & Photo Carousel */}
        <div className="relative h-64 sm:h-72 shrink-0 overflow-hidden group">
          <img
            src={currentPhoto.url}
            alt={site.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613] via-[#1C1613]/30 to-black/50"></div>

          {/* Close Drawer Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#14100E]/80 backdrop-blur-md border border-[#362A24] text-[#EFE6D5] hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/20 backdrop-blur-md ${
              site.riskLevel === 'AT_RISK'
                ? 'bg-rose-900/90 text-rose-200'
                : site.riskLevel === 'VULNERABLE'
                ? 'bg-amber-900/90 text-amber-200'
                : 'bg-emerald-900/90 text-emerald-200'
            }`}>
              {site.statusBadge || `${site.riskScore}% Risk`}
            </span>
          </div>

          {/* Image Navigation Arrows */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Caption & Title Overlay */}
          <div className="absolute bottom-4 left-5 right-5 space-y-1 z-10">
            <div className="flex items-center justify-between text-xs text-[#D4AF37]">
              <span className="font-bold uppercase tracking-wider">{site.category} • {site.dynasty}</span>
              {gallery.length > 1 && (
                <span className="bg-black/60 px-2 py-0.5 rounded text-[10px] text-white">
                  Photo {selectedPhotoIndex + 1} of {gallery.length}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-white leading-tight drop-shadow">
              {site.name}
            </h2>
            <p className="text-xs text-[#EFE6D5]/90 flex items-center gap-1 italic">
              <ImageIcon className="w-3.5 h-3.5 text-[#C85A32]" /> {currentPhoto.caption}
            </p>
          </div>
        </div>

        {/* Thumbnail Selector Bar */}
        {gallery.length > 1 && (
          <div className="flex items-center gap-2 px-4 py-2 bg-[#14100E] border-b border-[#362A24] overflow-x-auto">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPhotoIndex(idx)}
                className={`relative h-12 w-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  selectedPhotoIndex === idx ? 'border-[#D4AF37] scale-105 shadow' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center justify-around border-b border-[#362A24] bg-[#14100E] px-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-[#EFE6D5]/60 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" /> Overview
          </button>

          <button
            onClick={() => setActiveTab('journey')}
            className={`py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'journey'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-[#EFE6D5]/60 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" /> Timeline Slider
          </button>

          <button
            onClick={() => setActiveTab('intelligence')}
            className={`py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'intelligence'
                ? 'border-[#C85A32] text-[#C85A32]'
                : 'border-transparent text-[#EFE6D5]/60 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C85A32]" /> AI Risk Engine
          </button>
        </div>

        {/* Panel Content Area */}
        <div className="p-5 sm:p-6 space-y-6 flex-1">
          
          {/* Key Stats Bar */}
          <div className="grid grid-cols-3 gap-2 bg-[#14100E] p-3 rounded-2xl border border-[#362A24] text-center text-xs">
            <div>
              <span className="text-[10px] text-[#EFE6D5]/60 uppercase block">Practitioners</span>
              <span className="font-bold text-[#D4AF37] text-xs sm:text-sm">{site.practitionersCount}</span>
            </div>
            <div className="border-x border-[#362A24]">
              <span className="text-[10px] text-[#EFE6D5]/60 uppercase block">Youth Adoption</span>
              <span className="font-bold text-[#C85A32] text-xs sm:text-sm">{site.youthInvolvement}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#EFE6D5]/60 uppercase block">Digitized Vault</span>
              <span className="font-bold text-emerald-400 text-xs sm:text-sm">{site.documentationScore}</span>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="font-heritage font-bold text-lg text-white">About the Heritage</h3>
                <p className="text-xs sm:text-sm text-[#EFE6D5]/80 leading-relaxed">
                  {site.fullDescription || site.shortDescription}
                </p>
              </div>

              {/* Highlights */}
              {site.highlights && (
                <div className="space-y-2 pt-2 border-t border-[#362A24]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Key Heritage Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {site.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#EFE6D5]/90 bg-[#14100E] p-2.5 rounded-xl border border-[#362A24] flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => setActiveTab('journey')}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-medium text-xs sm:text-sm shadow flex items-center justify-center gap-2"
                >
                  <span>Explore Timeline Slider →</span>
                </button>
                <button
                  onClick={onOpenSaveModal}
                  className="px-4 py-3 rounded-xl bg-[#241E1C] border border-[#D4AF37]/40 text-[#D4AF37] font-medium text-xs hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  + Save
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: HERITAGE TIMELINE SLIDER */}
          {activeTab === 'journey' && (
            <HeritageJourneyView site={site} currentYear={currentYear} />
          )}

          {/* TAB 3: VIRASAT INTELLIGENCE (AI RISK ANALYSIS) */}
          {activeTab === 'intelligence' && (
            <VirasatIntelligencePanel site={site} onOpenSaveModal={onOpenSaveModal} />
          )}

        </div>

      </motion.div>
    </AnimatePresence>
  );
}
