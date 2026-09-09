import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
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

// CountUp component for stats bar
function AnimatedStat({ value, subtitle, icon: Icon, targetNum, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && targetNum > 0) {
      let start = 0;
      const duration = 1800; // ms
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = targetNum / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNum]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0F233F]/60 backdrop-blur-md border border-sky-400/20 shadow-lg">
      <Icon className="w-6 h-6 text-amber-400 mb-2" />
      <span className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
        {targetNum > 0 ? `${count.toLocaleString()}${suffix}` : value}
      </span>
      <span className="text-xs text-slate-300 font-medium mt-1">
        {subtitle}
      </span>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const stats = [
    { value: "10,000+", targetNum: 10000, suffix: "+", subtitle: "Heritage Elements", icon: Building },
    { value: "500+", targetNum: 500, suffix: "+", subtitle: "Communities", icon: Users },
    { value: "150+", targetNum: 150, suffix: "+", subtitle: "Cities & Towns", icon: MapPin },
    { value: "1 Mission", targetNum: 1, suffix: " Mission", subtitle: "Save Our Heritage", icon: ShieldCheck }
  ];

  const heritageGallery = [
    {
      id: "taj-mahal",
      title: "Taj Mahal Marble Mausoleum",
      location: "Agra, Uttar Pradesh",
      category: "UNESCO World Heritage",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      tag: "17th Century Mughal Masterpiece"
    },
    {
      id: "qutub-minar",
      title: "Qutub Minar Victory Tower",
      location: "Mehrauli, New Delhi",
      category: "Monuments",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      tag: "12th Century Afghan-Islamic Minaret"
    },
    {
      id: "hawa-mahal",
      title: "Hawa Mahal Palace of Winds",
      location: "Jaipur, Rajasthan",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
      tag: "953 Pink Sandstone Jharokhas"
    },
    {
      id: "konark-sun-temple",
      title: "Konark Sun Temple Stone Wheels",
      location: "Konark, Odisha",
      category: "Astronomical Heritage",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      tag: "13th Century Solar Chariot"
    },
    {
      id: "mysore-palace",
      title: "Mysore Palace Royal Illumination",
      location: "Mysuru, Karnataka",
      category: "Royal Palaces",
      image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=800&q=80",
      tag: "Indo-Saracenic Architecture"
    },
    {
      id: "golden-temple",
      title: "Sri Harmandir Sahib (Golden Temple)",
      location: "Amritsar, Punjab",
      category: "Living Sacred Tradition",
      image: "https://images.unsplash.com/photo-1588096344356-9b626e2e5052?auto=format&fit=crop&w=800&q=80",
      tag: "16th Century Golden Sanctuary"
    }
  ];

  // Hero stagger variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050B14] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden z-10">
        
        {/* Full-Bleed Heritage Monument Photo with Ken Burns Slow Motion */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80')`
          }}
        />

        {/* Multi-layered Gradient Scrim Overlay for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/60 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Badge */}
              <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F233F]/90 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>India's AI-Powered Living Heritage Platform</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={heroItemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-[1.1] drop-shadow-md">
                Discover the Past. <br />
                Detect the Change. <br />
                <span className="text-amber-400">Protect the Legacy.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.div variants={heroItemVariants} className="space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-slate-200">
                  India's AI-Powered Living Heritage Intelligence Map
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  Turn passive history into active intelligence. Travel across centuries of temporal change, track endangered crafts, and join a nation-wide mission to preserve living culture.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/explore")}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <Compass className="w-5 h-5" />
                  <span>Explore the Heritage Map</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#0F233F]/80 hover:bg-[#16335C] border border-sky-400/30 text-white font-medium text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Watch How It Works</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side: Handwritten-Style Quote & Visual Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative"
            >
              <div className="glass-panel p-8 rounded-3xl border border-amber-400/40 max-w-md shadow-2xl relative space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>CodeVirasat Philosophy</span>
                  <span className="ml-auto font-bold text-slate-300">🇮🇳 India</span>
                </div>

                <p className="font-serif italic text-lg text-white leading-relaxed">
                  "Our heritage is not just in the past, it lives in the present and needs you for the future."
                </p>

                <div className="pt-3 border-t border-sky-400/20 flex items-center justify-between text-xs text-slate-300">
                  <span>Rooted in Heritage, Built in Code</span>
                  <span className="text-amber-400 font-semibold">Join 500+ Communities</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bottom Stats Bar with Smooth Count-Up Animations */}
      <section className="bg-[#081220] border-t border-b border-sky-400/20 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <AnimatedStat
                key={idx}
                value={stat.value}
                targetNum={stat.targetNum}
                suffix={stat.suffix}
                subtitle={stat.subtitle}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ATTRACTIVE HERITAGE VISUAL SHOWCASE GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F233F] border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Living Heritage Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Discover India's <span className="text-amber-400">Timeless Masterpieces</span>
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            From 1,000-year-old carved stone temples to living artisan guilds, explore high-definition visual archives preserved on CodeVirasat.
          </p>
        </motion.div>

        {/* 6 High-Res Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-sky-400/20 shadow-2xl flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Bottom dark gradient scrim overlay for high contrast text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#050B14]/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-mono font-bold shadow-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                  <span className="text-[11px] font-mono text-amber-300 flex items-center gap-1 font-semibold">
                    📍 {item.location}
                  </span>
                  <h3 className="font-serif font-bold text-xl leading-tight text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between border-t border-sky-400/20 bg-[#081220]/90">
                <span className="text-xs text-slate-300 font-mono">{item.tag}</span>
                <button
                  onClick={() => navigate("/explore")}
                  className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Access Section linking to Explorer, Time Machine & Rescue Mission */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-sky-400/20 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Explore <span className="text-amber-400">CodeVirasat Intelligence</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Choose how you want to interact with India's living cultural legacy today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/explore"
            className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              <span className="text-3xl p-3 rounded-2xl bg-[#0F233F] border border-sky-400/20 inline-block">🗺️</span>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Interactive Heritage Map
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
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
              <span className="text-3xl p-3 rounded-2xl bg-[#0F233F] border border-sky-400/20 inline-block">⏳</span>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Heritage Time Machine
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
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
              <span className="text-3xl p-3 rounded-2xl bg-[#0F233F] border border-sky-400/20 inline-block">🛡️</span>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Rescue Missions
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
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
              className="glass-panel max-w-2xl w-full rounded-3xl p-6 relative border border-amber-400/40 shadow-2xl"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0F233F] text-amber-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-white">How CodeVirasat Works</h3>
                <div className="aspect-video bg-[#050B14] rounded-2xl flex items-center justify-center border border-sky-400/20">
                  <p className="text-sm text-slate-300">🎥 Demo Walkthrough Video Placeholder</p>
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
