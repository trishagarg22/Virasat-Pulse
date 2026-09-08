import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Play,
  ArrowRight,
  Sparkles,
  MapPin,
  Building,
  Users,
  ShieldCheck,
  X,
  Eye,
  Camera
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const stats = [
    { label: "10,000+", subtitle: "Heritage Elements", icon: Building },
    { label: "500+", subtitle: "Communities", icon: Users },
    { label: "150+", subtitle: "Cities & Towns", icon: MapPin },
    { label: "1 Mission", subtitle: "Save Our Heritage", icon: ShieldCheck }
  ];

  const heritageGallery = [
    {
      id: "hampi-chariot",
      title: "Hampi Stone Chariot & Vijayanagara Citadel",
      location: "Hampi, Karnataka",
      category: "Monuments",
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=800&q=80",
      tag: "14th Century Imperial Architecture"
    },
    {
      id: "varanasi-ghats",
      title: "Varanasi Ganges Ghats & Evening Ganga Aarti",
      location: "Varanasi, Uttar Pradesh",
      category: "Oral Histories",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
      tag: "Living Sacred Tradition"
    },
    {
      id: "konark-sun-temple",
      title: "Konark Sun Temple Stone Wheels",
      location: "Konark, Odisha",
      category: "Monuments",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      tag: "13th Century Solar Astronomy"
    },
    {
      id: "meenakshi-temple",
      title: "Madurai Meenakshi Gopuram Sculptures",
      location: "Madurai, Tamil Nadu",
      category: "Art & Crafts",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      tag: "Dravidian Polychrome Sculptures"
    },
    {
      id: "humayuns-tomb-delhi",
      title: "Humayun's Tomb Charbagh Gardens",
      location: "Nizamuddin, Delhi",
      category: "Monuments",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      tag: "Mughal Double-Dome Blueprint"
    },
    {
      id: "zardozi-weavers",
      title: "Gold Zardozi Embroidery Looms",
      location: "Chandni Chowk, Delhi",
      category: "Art & Crafts",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      tag: "Endangered Master Craft"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1726] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section with Full-Bleed Golden-Hour Monument Photo Background */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Full-Bleed Heritage Monument Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80')`
          }}
        />

        {/* Gradient Scrim Overlay: Deep Navy on left fading out to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726] via-[#0B1726]/90 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-transparent to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132640]/90 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>India's AI-Powered Living Heritage Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-[1.1]">
                Discover the Past. <br />
                Detect the Change. <br />
                <span className="text-amber-400">Protect the Legacy.</span>
              </h1>

              {/* Subheading */}
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-slate-200">
                  India's AI-Powered Living Heritage Intelligence Map
                </h2>
                <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
                  Turn passive history into active intelligence. Travel across centuries of temporal change, track endangered crafts, and join a nation-wide mission to preserve living culture.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/explore")}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <Compass className="w-5 h-5" />
                  <span>Explore the Heritage Map</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#132640]/80 hover:bg-[#1E3A5F] border border-slate-300/40 text-white font-medium text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Watch How It Works</span>
                </button>
              </div>
            </motion.div>

            {/* Right Side: Handwritten-Style Quote & Visual Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative"
            >
              <div className="glass-panel p-8 rounded-3xl border border-amber-500/40 max-w-md shadow-2xl relative space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>CodeVirasat Philosophy</span>
                  <span className="ml-auto font-bold text-slate-400">🇮🇳 India</span>
                </div>

                <p className="font-serif italic text-lg text-slate-100 leading-relaxed">
                  "Our heritage is not just in the past, it lives in the present and needs you for the future."
                </p>

                <div className="pt-3 border-t border-[#1E3A5F] flex items-center justify-between text-xs text-slate-400">
                  <span>Rooted in Heritage, Built in Code</span>
                  <span className="text-amber-400 font-semibold">Join 500+ Communities</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bottom Stats Bar (4 Stats with Icons) */}
      <section className="bg-[#0A1422] border-t border-b border-[#1E3A5F] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#132640]/40 border border-[#1E3A5F]/60">
                  <Icon className="w-6 h-6 text-amber-400 mb-2" />
                  <span className="text-2xl sm:text-3xl font-serif font-black text-white">
                    {stat.label}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: ATTRACTIVE HERITAGE VISUAL SHOWCASE GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132640] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Living Heritage Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Discover India's <span className="text-amber-400">Timeless Masterpieces</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            From 1,000-year-old carved stone temples to living artisan guilds, explore high-definition visual archives preserved on CodeVirasat.
          </p>
        </div>

        {/* 6 High-Res Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageGallery.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0B1726]/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                  <span className="text-[11px] font-mono text-amber-300 block">
                    📍 {item.location}
                  </span>
                  <h3 className="font-serif font-bold text-xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between border-t border-[#1E3A5F] bg-[#0A1422]">
                <span className="text-xs text-slate-400 font-mono">{item.tag}</span>
                <button
                  onClick={() => navigate("/explore")}
                  className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Access Section linking to Explorer, Time Machine & Rescue Mission */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E3A5F]">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Explore <span className="text-amber-400">CodeVirasat Intelligence</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Choose how you want to interact with India's living cultural legacy today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/explore"
            className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              <span className="text-3xl p-3 rounded-2xl bg-[#132640] border border-[#1E3A5F] inline-block">🗺️</span>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Interactive Heritage Map
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Inspect 6 categories of monuments, crafts, music, and traditions across India with color-coded risk status.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400">
              <span>Launch Map View</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/time-machine"
            className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              <span className="text-3xl p-3 rounded-2xl bg-[#132640] border border-[#1E3A5F] inline-block">⏳</span>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Heritage Time Machine
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Travel from 1800 to 2026 with before/after split image comparison sliders and archival timelines.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400">
              <span>Enter Time Machine</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/rescue-mission"
            className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              <span className="text-3xl p-3 rounded-2xl bg-[#132640] border border-[#1E3A5F] inline-block">🛡️</span>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Rescue Missions
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Become a Heritage Guardian by documenting elder oral stories, uploading old photos, and recording traditions.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400">
              <span>Start Contribution</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Video Modal Demo */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel max-w-2xl w-full rounded-3xl p-6 relative border border-amber-500/40 shadow-2xl"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#132640] text-amber-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-white">How CodeVirasat Works</h3>
                <div className="aspect-video bg-[#0A1422] rounded-2xl flex items-center justify-center border border-[#1E3A5F]">
                  <p className="text-sm text-slate-400">🎥 Demo Walkthrough Video Placeholder</p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                  >
                    Close Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
