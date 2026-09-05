import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Heart, Shield, Award, MapPin, ExternalLink, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#120F0E] border-t border-[#362A24] text-[#EFE6D5]/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Mandala Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#D4AF37]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter / Call to Action Card */}
        <div className="bg-gradient-to-r from-[#1C1613] via-[#241E1C] to-[#1C1613] rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Delhi Heritage Quest
              </div>
              <h3 className="text-2xl sm:text-3xl font-heritage font-bold text-[#F7F3E9] mb-2">
                Unravel a New Delhi Legend Every Week
              </h3>
              <p className="text-sm text-[#EFE6D5]/70 max-w-xl">
                Subscribe to receive curated audio folklore, secret historical stepwell trails, and exclusive digital relics directly in your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]/60" />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="w-full bg-[#14100E] border border-[#362A24] focus:border-[#D4AF37] text-sm text-[#F7F3E9] rounded-xl pl-11 pr-4 py-3 outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] hover:from-[#E0734C] hover:to-[#C85A32] text-white font-medium text-sm transition-all shadow-md shadow-[#C85A32]/30 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#362A24]/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#241E1C] border border-[#D4AF37]/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="32" stroke="#C85A32" strokeWidth="4"/>
                  <path d="M32 68 V45 C32 32 68 32 68 45 V68 H60 V47 C60 38 40 38 40 47 V68 H32 Z" fill="currentColor"/>
                  <path d="M20 50 H36 L42 36 L50 64 L58 40 L64 50 H80" stroke="#F3E086" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                </svg>
              </div>
              <span className="font-heritage text-2xl font-bold tracking-wider text-[#F7F3E9]">
                VIRASAT <span className="text-[#C85A32]">PULSE</span>
              </span>
            </Link>
            <p className="text-sm text-[#EFE6D5]/70 leading-relaxed pr-4">
              Reimagining Delhi's historic minarets, ancient stepwells, and imperial fortresses into interactive exploration journeys for the next generation.
            </p>
            <div className="inline-block bg-[#1E1815] border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-lg text-xs text-[#D4AF37]">
              Capital Edition: <span className="font-bold text-white">Delhi Heritage Trails</span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="font-heritage text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Delhi Trails
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/trails" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Qutub Minar & Iron Pillar
                </Link>
              </li>
              <li>
                <Link to="/trails" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Red Fort (Lal Qila)
                </Link>
              </li>
              <li>
                <Link to="/trails" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Humayun’s Tomb
                </Link>
              </li>
              <li>
                <Link to="/trails" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Agrasen Ki Baoli
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform Features */}
          <div className="space-y-3">
            <h4 className="font-heritage text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Gamified Features
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/stories" className="hover:text-[#D4AF37] transition-colors">Oral Legends & Audio</Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#D4AF37] transition-colors">Daily Heritage Quizzes</Link>
              </li>
              <li>
                <span className="text-[#EFE6D5]/50 cursor-not-allowed flex items-center gap-1">
                  Digital Relic Badges <span className="text-[10px] bg-[#C85A32]/20 text-[#C85A32] px-1.5 py-0.5 rounded">Soon</span>
                </span>
              </li>
              <li>
                <span className="text-[#EFE6D5]/50 cursor-not-allowed flex items-center gap-1">
                  Artisan Guild Connect <span className="text-[10px] bg-[#C85A32]/20 text-[#C85A32] px-1.5 py-0.5 rounded">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Heritage Focus */}
          <div className="space-y-3">
            <h4 className="font-heritage text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Delhi Heritage
            </h4>
            <p className="text-xs text-[#EFE6D5]/70 leading-relaxed">
              Unearthing over 1,000 years of Delhi's rich history across the Tomar, Sultanate, Mughal, and Modern eras.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#D4AF37]">
              <Shield className="w-4 h-4 text-[#C85A32]" />
              <span>Preserving Living Culture</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE6D5]/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Virasat Pulse. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-[#C85A32]" />
            <span>for Delhi's Living History.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
