import React, { useState } from "react";
import HeroCinematic from "../components/HeroCinematic";
import DidYouKnowGame from "../components/DidYouKnowGame";
import DelhiLayersTimeline from "../components/DelhiLayersTimeline";
import HeritageMap from "../components/dashboard/HeritageMap";
import HeritageSkillCards from "../components/HeritageSkillCards";
import ThenVsNowSlider from "../components/ThenVsNowSlider";
import HeritageHealthSystem from "../components/HeritageHealthSystem";
import WhatIfWeLostIt from "../components/WhatIfWeLostIt";
import SurpriseMeGenerator from "../components/SurpriseMeGenerator";
import AskDelhiAI from "../components/AskDelhiAI";
import DelhiRemembers from "../components/DelhiRemembers";
import PlaceExperienceModal from "../components/PlaceExperienceModal";
import JourneyProgressTracker from "../components/JourneyProgressTracker";
import { HERITAGE_SITES } from "../data/heritageSites";

export default function Home() {
  const [selectedSiteModal, setSelectedSiteModal] = useState(null);
  const [discoveredSiteIds, setDiscoveredSiteIds] = useState([
    "mehrauli-heritage-traditions",
    "chandni-chowk-living-crafts",
    "qutub-minar-monument"
  ]);

  const handleSiteSelect = (site) => {
    setSelectedSiteModal(site);
    if (!discoveredSiteIds.includes(site.id)) {
      setDiscoveredSiteIds((prev) => [...prev, site.id]);
    }
  };

  const handleFactDiscovered = (factId) => {
    // Increment discovery context if needed
  };

  return (
    <div className="bg-transparent min-h-screen text-amber-50 selection:bg-amber-500 selection:text-stone-950 font-sans">
      {/* 1. CINEMATIC HERO */}
      <HeroCinematic
        onSelectChoice={(targetId) => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        totalSitesCount={HERITAGE_SITES.length}
        discoveredCount={discoveredSiteIds.length}
      />

      {/* 2. "WAIT... DID YOU KNOW?" CURIOSITY GAME */}
      <DidYouKnowGame onFactDiscovered={handleFactDiscovered} />

      {/* 3. "DELHI HAS LAYERS" TIMELINE */}
      <DelhiLayersTimeline onSiteSelect={handleSiteSelect} />

      {/* 4. INTERACTIVE HERITAGE MAP */}
      <div className="bg-stone-900/60 border-t border-b border-amber-500/20 backdrop-blur-md">
        <HeritageMap sites={HERITAGE_SITES} onSelectSite={handleSiteSelect} />
      </div>

      {/* 5. HERITAGE SKILL CARDS DECK */}
      <HeritageSkillCards onSiteSelect={handleSiteSelect} />

      {/* 6. "THEN VS NOW" SLIDER */}
      <ThenVsNowSlider />

      {/* 7. HERITAGE HEALTH MONITOR */}
      <HeritageHealthSystem onSiteSelect={handleSiteSelect} />

      {/* 8. "WHAT IF WE LOST IT?" REFLECTION */}
      <WhatIfWeLostIt />

      {/* 9. 🎲 SURPRISE ME STORY GENERATOR */}
      <SurpriseMeGenerator onSiteSelect={handleSiteSelect} />

      {/* 10. 🤖 ASK DELHI AI GUIDE */}
      <AskDelhiAI />

      {/* 11. 🧓 DELHI REMEMBERS ORAL HISTORIES */}
      <DelhiRemembers />

      {/* EMPOWERING CONCLUSION */}
      <section className="py-20 bg-gradient-to-b from-stone-950/80 via-amber-950/60 to-stone-950/90 text-center relative overflow-hidden border-t border-amber-500/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-5xl mb-4">🕌 ✨ 🇮🇳</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-6">
            You came looking for history.<br />
            You found something still alive.
          </h2>
          <p className="text-amber-200/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 font-sans">
            Delhi's story isn't finished. Every time you walk down a bazaar lane, listen to a Sufi melody, or marvel at ancient stone masonry, you become part of the story.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-base shadow-xl hover:shadow-amber-500/30 transition-all"
          >
            Re-discover DILLI From the Start ↑
          </button>
        </div>
      </section>

      {/* PLACE EXPERIENCE DRAWER / MODAL */}
      <PlaceExperienceModal
        site={selectedSiteModal}
        onClose={() => setSelectedSiteModal(null)}
      />

      {/* FLOATING JOURNEY PROGRESS TRACKER */}
      <JourneyProgressTracker
        discoveredSiteIds={discoveredSiteIds}
        totalSites={HERITAGE_SITES.length}
        sitesList={HERITAGE_SITES}
      />
    </div>
  );
}
