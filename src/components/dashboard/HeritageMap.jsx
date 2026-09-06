import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ArrowRight } from 'lucide-react';

// Custom SVG Markers displaying Photo Thumbnail + Risk Ring + Visible Location Name Label
const createRiskIcon = (riskLevel, siteName, thumbnail) => {
  let borderColor = '#C85A32'; // Red default
  let glowColor = 'rgba(200, 90, 50, 0.4)';
  let riskBadge = '🔴';

  if (riskLevel === 'VULNERABLE') {
    borderColor = '#D4AF37'; // Antique Gold
    glowColor = 'rgba(212, 175, 55, 0.4)';
    riskBadge = '🟠';
  } else if (riskLevel === 'THRIVING') {
    borderColor = '#10B981'; // Emerald Green
    glowColor = 'rgba(16, 185, 129, 0.4)';
    riskBadge = '🟢';
  }

  // HTML combining site picture thumbnail + risk status badge + location name tag
  const svgHtml = `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -50%);">
      
      <!-- Photo Thumbnail Button Container -->
      <div style="position: relative; width: 44px; height: 44px; display: flex; items-center; justify-content: center;">
        
        <!-- Pulse Glow Layer -->
        <div style="position: absolute; width: 44px; height: 44px; border-radius: 50%; background: ${glowColor}; animation: pulse 2s infinite;"></div>
        
        <!-- Heritage Site Picture Circle -->
        <div style="position: relative; width: 40px; height: 40px; border-radius: 50%; overflow: hidden; border: 2.5px solid ${borderColor}; box-shadow: 0 4px 14px rgba(0,0,0,0.8); background: #14100E;">
          <img src="${thumbnail}" style="width: 100%; height: 100%; object-fit: cover;" alt="${siteName}" />
        </div>

        <!-- Mini Risk Badge Overlay -->
        <div style="position: absolute; top: -3px; right: -3px; background: #14100E; border: 1px solid ${borderColor}; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; font-size: 9px;">
          ${riskBadge}
        </div>

      </div>

      <!-- Visible Location Name Label Badge -->
      <div style="margin-top: 4px; background: rgba(20, 16, 14, 0.94); border: 1px solid ${borderColor}; border-radius: 8px; padding: 2px 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.8); backdrop-filter: blur(4px); white-space: nowrap; font-family: 'Cinzel', serif; font-size: 11px; font-weight: 700; color: #F7F3E9; letter-spacing: 0.02em;">
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

export default function HeritageMap({ sites, selectedSite, onSelectSite, currentYear }) {
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

        {sites.map((site) => (
          <Marker
            key={site.id}
            position={site.coordinates}
            icon={createRiskIcon(site.riskLevel, site.shortName || site.name, site.thumbnail)}
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

                {/* Picture Preview */}
                <div className="h-24 w-full rounded-lg overflow-hidden border border-[#362A24]">
                  <img src={site.thumbnail} alt={site.name} className="w-full h-full object-cover" />
                </div>

                <p className="text-[11px] text-[#EFE6D5]/80 line-clamp-2">
                  {site.shortDescription}
                </p>

                <button
                  onClick={() => onSelectSite(site)}
                  className="w-full mt-1 py-1.5 rounded-lg bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-medium text-xs flex items-center justify-center gap-1 shadow"
                >
                  <span>Inspect Photos & Intelligence</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  );
}
