import React, { useState, useMemo } from 'react';
import DashboardTopBar from '../components/dashboard/DashboardTopBar';
import FilterSidebar from '../components/dashboard/FilterSidebar';
import HeritageMap from '../components/dashboard/HeritageMap';
import TimeSlider from '../components/dashboard/TimeSlider';
import HeritageDetailPanel from '../components/intelligence/HeritageDetailPanel';
import SaveVirasatModal from '../components/intelligence/SaveVirasatModal';
import { HERITAGE_SITES } from '../data/heritageSites';

export default function DashboardPage() {
  // Global State for Dashboard Flow: MAP -> PIN -> DETAIL -> SLIDER -> AI RISK -> SAVE
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All Delhi Regions');
  const [selectedRisk, setSelectedRisk] = useState('ALL');
  const [currentYear, setCurrentYear] = useState(2026);
  
  // Selected Heritage Point for Drawer
  const [selectedSite, setSelectedSite] = useState(null);

  // Contribution Modal State
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  // Filtered Sites Computation
  const filteredSites = useMemo(() => {
    return HERITAGE_SITES.filter(site => {
      // Search text match
      const matchesSearch = searchQuery === '' || 
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Category match
      const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory || site.type === selectedCategory;

      // Region match
      const matchesRegion = selectedRegion === 'All Delhi Regions' || site.state.includes(selectedRegion.split(' ')[0]);

      // Risk match
      const matchesRisk = selectedRisk === 'ALL' || site.riskLevel === selectedRisk;

      return matchesSearch && matchesCategory && matchesRegion && matchesRisk;
    });
  }, [searchQuery, selectedCategory, selectedRegion, selectedRisk]);

  const atRiskCount = useMemo(() => {
    return HERITAGE_SITES.filter(s => s.riskLevel === 'AT_RISK').length;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#14100E] text-[#F7F3E9] selection:bg-[#C85A32] selection:text-white font-sans antialiased overflow-hidden">
      
      {/* 1. Top Bar */}
      <DashboardTopBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        onOpenSaveModal={() => setIsSaveModalOpen(true)}
      />

      {/* 2. Main Workspace Layout: Sidebar + Interactive Map & Time Slider */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">
        
        {/* Left Filter Sidebar */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedRisk={selectedRisk}
          setSelectedRisk={setSelectedRisk}
          totalCount={filteredSites.length}
          atRiskCount={atRiskCount}
        />

        {/* Center Canvas: Interactive Leaflet Map & Bottom Time Slider */}
        <main className="flex-1 flex flex-col p-3 sm:p-5 gap-4 relative overflow-hidden">
          
          {/* Leaflet Map Display */}
          <div className="flex-1 relative w-full h-[55vh] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
            <HeritageMap
              sites={filteredSites}
              selectedSite={selectedSite}
              onSelectSite={(site) => setSelectedSite(site)}
              currentYear={currentYear}
            />
          </div>

          {/* Bottom Horizontal Time Slider */}
          <TimeSlider
            currentYear={currentYear}
            setCurrentYear={setCurrentYear}
          />

        </main>

      </div>

      {/* 3. Slide-in Heritage Detail & AI Intelligence Panel Drawer */}
      {selectedSite && (
        <HeritageDetailPanel
          site={selectedSite}
          onClose={() => setSelectedSite(null)}
          currentYear={currentYear}
          onOpenSaveModal={() => setIsSaveModalOpen(true)}
        />
      )}

      {/* 4. "Save Your Virasat" Contribution Modal */}
      <SaveVirasatModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        defaultSiteName={selectedSite?.name || 'Delhi'}
      />

    </div>
  );
}
