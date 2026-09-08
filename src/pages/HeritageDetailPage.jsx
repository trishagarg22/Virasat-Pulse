import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SidebarLayout from "../components/SidebarLayout";
import { HERITAGE_SITES } from "../data/heritageSites";
import {
  ArrowLeft,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Video,
  BookOpen,
  Share2,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeritageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview"); // overview | timeline | community | preservation

  // Find site by id or fallback to first site
  const site = HERITAGE_SITES.find((s) => s.id === id) || HERITAGE_SITES[0];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Critical":
        return { label: "🔴 Critical Risk", bg: "bg-red-950/80 border-red-500/50 text-red-300" };
      case "At Risk":
        return { label: "🟠 At Risk", bg: "bg-orange-950/80 border-orange-500/50 text-orange-300" };
      case "Needs Attention":
        return { label: "🟡 Needs Attention", bg: "bg-yellow-950/80 border-yellow-500/50 text-yellow-300" };
      case "Thriving":
      default:
        return { label: "🟢 Thriving", bg: "bg-emerald-950/80 border-emerald-500/50 text-emerald-300" };
    }
  };

  const badge = getStatusBadge(site.status);

  return (
    <SidebarLayout>
      <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/explore")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#132640] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-amber-400 font-bold text-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Heritage Map</span>
          </button>

          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl bg-[#132640] border border-[#1E3A5F] text-slate-300 hover:text-white">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-xl bg-[#132640] border border-[#1E3A5F] text-slate-300 hover:text-red-400">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="lg:col-span-4 h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#1E3A5F] relative">
            <img
              src={site.heroImage || site.thumbnail}
              alt={site.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full border text-xs font-bold backdrop-blur-md ${badge.bg}">
              {badge.label}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <MapPin className="w-4 h-4" />
              <span>{site.location}</span>
              <span>•</span>
              <span>{site.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-tight">
              {site.name}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              "{site.surprisingFact}"
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="px-4 py-2 rounded-xl bg-[#0A1422] border border-[#1E3A5F] text-xs">
                <span className="text-slate-400 block">Vulnerability Risk Score</span>
                <span className="text-amber-400 font-mono font-bold text-lg">{site.riskScore} / 100</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#0A1422] border border-[#1E3A5F] text-xs">
                <span className="text-slate-400 block">Active Lineage</span>
                <span className="text-white font-bold text-sm">{site.practitionersCount || "30 Master Families"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Row Navigation */}
        <div className="flex items-center gap-2 border-b border-[#1E3A5F] pb-2">
          {[
            { id: "overview", label: "Overview & Intelligence" },
            { id: "timeline", label: "Historical Timeline" },
            { id: "community", label: "Community & Lore" },
            { id: "preservation", label: "Preservation Action" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                  : "bg-[#132640]/50 border border-transparent text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB: 3 SIDE-BY-SIDE CARDS + COMMUNITY TESTIMONIAL */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Card 1: About */}
              <div className="glass-panel p-6 rounded-3xl border border-amber-500/20 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <h3>About This Heritage</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {site.surprisingFact} This living heritage represents centuries of regional lineage, master craftsmanship, and architectural geometry.
                </p>
                <div className="pt-4 border-t border-[#1E3A5F] space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Status:</span>
                    <span className="font-bold text-amber-300">{site.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Digitization Score:</span>
                    <span className="font-mono text-white">{site.documentationScore || "45%"}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Key Reasons for Decline */}
              <div className="glass-panel p-6 rounded-3xl border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <h3>Key Reasons for Decline</h3>
                </div>
                <div className="space-y-2.5">
                  {(site.declineReasons || [
                    "Declining master artisan families",
                    "Low youth participation and lack of stipends",
                    "Limited digital documentation and archival records",
                    "Competition from modern commercial mass-production"
                  ]).map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-[#0A1422] border border-[#1E3A5F]">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Suggested Actions */}
              <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h3>Suggested Actions</h3>
                </div>
                <div className="space-y-2.5">
                  {(site.suggestedActions || [
                    "Support local artisan cooperatives directly",
                    "Organize youth skill workshops & apprenticeships",
                    "Create 3D digital archival twin records",
                    "Promote ethical heritage tourism and walking trails"
                  ]).map((action, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-[#0A1422] border border-[#1E3A5F]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Community Stories Section Below Cards */}
            <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl font-serif font-bold text-white">
                    Community Stories & Oral Testimonials
                  </h3>
                </div>
                <Link
                  to="/rescue-mission"
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  + Add Oral Story
                </Link>
              </div>

              {site.communityStory && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#0A1422] p-6 rounded-2xl border border-[#1E3A5F]">
                  <div className="md:col-span-3 flex flex-col items-center text-center space-y-2">
                    <img
                      src={site.communityStory.photo}
                      alt={site.communityStory.author}
                      className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    />
                    <h4 className="font-serif font-bold text-white text-sm">{site.communityStory.author}</h4>
                    <span className="text-[11px] text-amber-400 font-mono">{site.communityStory.relation}</span>
                  </div>

                  <div className="md:col-span-9 space-y-4">
                    <p className="font-serif italic text-base text-slate-100 leading-relaxed">
                      "{site.communityStory.quote}"
                    </p>
                    <button className="px-5 py-2.5 rounded-xl bg-[#132640] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-amber-400 text-xs font-bold flex items-center gap-2 transition-colors">
                      <Video className="w-4 h-4" />
                      <span>Watch Full Oral History Video</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TIMELINE TAB */}
        {activeTab === "timeline" && (
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Historical Evolution</h3>
            <div className="space-y-6">
              {(site.timelineEvents || []).map((event, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-[#0A1422] border border-[#1E3A5F]">
                  <span className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs h-fit font-mono">
                    {event.year}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base mb-1">{event.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMMUNITY / PRESERVATION TABS */}
        {(activeTab === "community" || activeTab === "preservation") && (
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 text-center space-y-4">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-xl font-serif font-bold text-white">Join the Rescue Mission</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Contribute oral recordings, upload archival photographs, or verify heritage coordinates.
            </p>
            <Link
              to="/rescue-mission"
              className="inline-block px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Go to Rescue Mission Hub →
            </Link>
          </div>
        )}

      </div>
    </SidebarLayout>
  );
}
