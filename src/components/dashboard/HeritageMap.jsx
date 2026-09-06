import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ArrowRight, Maximize2, Minimize2, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVG Markers displaying Photo Thumbnail + Risk Ring + Visible Location Name Label
const createRiskIcon = (healthStatus, siteName, thumbnail) => {
  let borderColor = '#EF4444'; // Red default
  let glowColor = 'rgba(239, 68, 68, 0.4)';
  let riskBadge = '🔴';

  if (healthStatus === 'WATCH_CLOSELY' || healthStatus === 'VULNERABLE') {
    borderColor = '#F59E0B'; // Amber / Gold
    glowColor = 'rgba(245, 158, 11, 0.4)';
    riskBadge = '🟡';
  } else if (healthStatus === 'WELL_PROTECTED' || healthStatus === 'THRIVING') {
    borderColor = '#10B981'; // Emerald Green
    glowColor = 'rgba(16, 185, 129, 0.4)';
    riskBadge = '🟢';
  }

  const svgHtml = `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -50%);">
      <!-- Photo Thumbnail Circle -->
      <div style="position: relative; width: 46px; height: 46px; display: flex; items-center; justify-content: center;">
        <div style="position: absolute; width: 46px; height: 46px; border-radius: 50%; background: ${glowColor}; animation: pulse 2s infinite;"></div>
        <div style="position: relative; width: 42px; height: 42px; border-radius: 50%; overflow: hidden; border: 2.5px solid ${borderColor}; box-shadow: 0 4px 14px rgba(0,0,0,0.8); background: #1C1917;">
          <img src="${thumbnail}" style="width: 100%; height: 100%; object-fit: cover;" alt="${siteName}" />
        </div>
        <div style="position: absolute; top: -3px; right: -3px; background: #1C1917; border: 1px solid ${borderColor}; border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; font-size: 10px;">
          ${riskBadge}
        </div>
      </div>
      <!-- Visible Location Name Label -->
      <div style="margin-top: 4px; background: rgba(28, 25, 23, 0.95); border: 1px solid ${borderColor}; border-radius: 8px; padding: 2px 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.8); backdrop-filter: blur(4px); white-space: nowrap; font-family: 'Cinzel', serif; font-size: 11px; font-weight: 700; color: #FEF3C7; letter-spacing: 0.02em;">
        ${siteName}
      </div>
    </div>
  `;

  return L.divIcon({
    html: svgHtml,
    className: 'custom-risk-marker-with-photo',
    iconSize: [120, 65],
    iconAnchor: [60, 32],
    popupAnchor: [0, -32]
  });
};

export default function HeritageMap({ sites = [], selectedSite, onSelectSite }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const center = [28.5800, 77.2200];

  return (
    <div id="heritage-map-section" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Living Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 mb-2">
            Delhi Heritage Map
          </h2>
          <p className="text-amber-200/70 text-sm max-w-xl mx-auto font-sans">
            Click on any location marker photo to open its curiosity experience and story chapters.
          </p>
        </div>

        {/* Map Container Wrapper */}
        <div className={`relative transition-all duration-500 ${
          isExpanded
            ? "fixed inset-4 z-50 rounded-3xl border-2 border-amber-500/60 shadow-2xl bg-stone-950 p-2"
            : "w-full h-[520px] rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-stone-950"
        }`}>
          
          {/* Controls Bar */}
          <div className="absolute top-4 left-4 right-4 z-[400] flex items-center justify-between pointer-events-none">
            <div className="pointer-events-auto bg-stone-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-500/30 shadow-lg flex items-center gap-4 text-xs font-semibold text-amber-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span>🔴 Needs Attention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>🟡 Watch Closely</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>🟢 Well Protected</span>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="pointer-events-auto p-2.5 rounded-2xl bg-stone-950/90 hover:bg-stone-900 border border-amber-500/40 text-amber-300 shadow-xl transition-all flex items-center gap-2 text-xs font-bold"
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span>Exit Fullscreen Map</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  <span>Enlarge Map View</span>
                </>
              )}
            </button>
          </div>

          {/* Leaflet Map */}
          <MapContainer
            center={center}
            zoom={12}
            scrollWheelZoom={true}
            className="w-full h-full z-10 rounded-2xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {sites.map((site) => (
              <Marker
                key={site.id}
                position={site.coordinates}
                icon={createRiskIcon(site.healthStatus || site.riskLevel, site.shortName || site.name, site.thumbnail)}
                eventHandlers={{
                  click: () => onSelectSite && onSelectSite(site),
                }}
              >
                <Popup className="custom-heritage-popup">
                  <div className="p-3 bg-stone-900 text-amber-50 rounded-xl border border-amber-500/40 space-y-2 max-w-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-amber-400">{site.type || site.category}</span>
                      <span className="font-bold text-amber-300">{site.statusBadge}</span>
                    </div>

                    <h4 className="font-serif font-bold text-sm text-amber-100 leading-tight">
                      {site.name}
                    </h4>

                    <div className="h-24 w-full rounded-lg overflow-hidden border border-amber-500/20">
                      <img src={site.thumbnail} alt={site.name} className="w-full h-full object-cover" />
                    </div>

                    <p className="text-[11px] text-amber-200/80 line-clamp-2">
                      {site.surprisingFact || site.shortDescription}
                    </p>

                    <button
                      onClick={() => onSelectSite && onSelectSite(site)}
                      className="w-full mt-1 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1 shadow"
                    >
                      <span>Open Place Experience</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

        </div>
      </div>
    </div>
  );
}
