import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, AlertTriangle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

// Custom SVG Markers for Red (At Risk), Orange (Vulnerable), Green (Thriving)
const createRiskIcon = (riskLevel) => {
  let color = '#C85A32'; // Red/Terracotta default
  let glowColor = 'rgba(200, 90, 50, 0.4)';
  let label = '🔴';

  if (riskLevel === 'VULNERABLE') {
    color = '#D4AF37'; // Antique Gold / Orange
    glowColor = 'rgba(212, 175, 55, 0.4)';
    label = '🟠';
  } else if (riskLevel === 'THRIVING') {
    color = '#10B981'; // Emerald Green
    glowColor = 'rgba(16, 185, 129, 0.4)';
    label = '🟢';
  }

  const svgHtml = `
    <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
      <div style="position: absolute; width: 36px; height: 36px; border-radius: 50%; background: ${glowColor}; animation: pulse 2s infinite;"></div>
      <div style="width: 28px; height: 28px; border-radius: 50%; background: #14100E; border: 2.5px solid ${color}; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
        ${label}
      </div>
    </div>
  `;

  return L.divIcon({
    html: svgHtml,
    className: 'custom-risk-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
};

export default function HeritageMap({ sites, selectedSite, onSelectSite, currentYear }) {
  // Delhi center coordinates default
  const center = [28.5800, 77.2200];

  return (
    <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden border border-[#362A24] shadow-2xl bg-[#14100E]">
      
      {/* Top Map Legend Bar */}
      <div className="absolute top-4 left-4 z-[400] bg-[#14100E]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#D4AF37]/30 shadow-lg flex items-center gap-4 text-xs font-semibold text-[#EFE6D5]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32] animate-pulse"></span>
          <span>🔴 High Risk</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
          <span>🟠 Vulnerable</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
          <span>🟢 Thriving</span>
        </div>
        <div className="pl-2 border-l border-[#362A24] text-[#D4AF37] font-bold">
          Year: {currentYear}
        </div>
      </div>

      {/* Leaflet Map */}
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {sites.map((site) => {
          const isSelected = selectedSite?.id === site.id;
          return (
            <Marker
              key={site.id}
              position={site.coordinates}
              icon={createRiskIcon(site.riskLevel)}
              eventHandlers={{
                click: () => onSelectSite(site),
              }}
            >
              <Popup className="custom-heritage-popup">
                <div className="p-3 bg-[#1C1613] text-[#F7F3E9] rounded-xl border border-[#D4AF37]/40 space-y-2 max-w-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#D4AF37]">{site.category}</span>
                    <span className="font-bold text-[#C85A32]">{site.riskScore}% Risk</span>
                  </div>
                  <h4 className="font-heritage font-bold text-sm text-white leading-tight">
                    {site.name}
                  </h4>
                  <p className="text-[11px] text-[#EFE6D5]/80 line-clamp-2">
                    {site.shortDescription}
                  </p>
                  <button
                    onClick={() => onSelectSite(site)}
                    className="w-full mt-1 py-1.5 rounded-lg bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-medium text-xs flex items-center justify-center gap-1 shadow"
                  >
                    <span>Analyze Intelligence</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

    </div>
  );
}
