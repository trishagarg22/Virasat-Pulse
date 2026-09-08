import React, { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import { User, Award, Shield, FileText, Camera, Mic, Sparkles, Heart, Leaf, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("contributions"); // contributions | saved | achievements

  const userStats = [
    { label: "Total Contributions", value: "18 Submissions", icon: FileText, color: "text-amber-400" },
    { label: "Heritage Elements Helped", value: "12 Sites", icon: Shield, color: "text-blue-400" },
    { label: "Stories Documented", value: "6 Audio / Photos", icon: Mic, color: "text-emerald-400" }
  ];

  const recentContributions = [
    {
      id: 1,
      icon: Mic,
      title: "Recorded Oral Lore of Ustad Rahimuddin",
      location: "Kinari Bazaar, Chandni Chowk",
      timeAgo: "2 days ago",
      type: "Audio Story"
    },
    {
      id: 2,
      icon: Camera,
      title: "Uploaded 1960 Archival Haveli Photo",
      location: "Ballimaran, Old Delhi",
      timeAgo: "1 week ago",
      type: "Image Archive"
    },
    {
      id: 3,
      icon: FileText,
      title: "Documented Mitti Attar Copper Distillation Process",
      location: "Dariba Kalan, Delhi",
      timeAgo: "2 weeks ago",
      type: "Craft Notes"
    }
  ];

  const achievements = [
    { id: 1, title: "Heritage Explorer", desc: "Visited 10+ heritage sites on interactive map", completed: true, badge: "🧭" },
    { id: 2, title: "Audio Archivist", desc: "Recorded 5+ oral lore interviews", completed: true, badge: "🎙️" },
    { id: 3, title: "Guardian Champion", desc: "Help preserve 3 critical heritage elements", completed: false, badge: "🛡️" }
  ];

  return (
    <SidebarLayout>
      <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Decorative Handwritten Note */}
        <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="font-serif italic text-sm text-slate-100">
              "Small contributions create a big impact."
            </span>
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold hidden sm:inline">
            CodeVirasat Guardian Network 🇮🇳
          </span>
        </div>

        {/* "My Profile" Header Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Ananya Sharma Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-400 shadow-xl"
            />
            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-serif font-black text-white">Ananya Sharma</h1>
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold font-mono">
                  Lvl 3
                </span>
              </div>
              <p className="text-xs text-amber-400 font-semibold font-mono">
                🛡️ Certified Heritage Guardian • INTACH Youth Affiliate
              </p>
              <p className="text-xs text-slate-400">
                Department of Cultural Studies, Delhi University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-4 rounded-2xl bg-[#0A1422] border border-[#1E3A5F] text-center">
              <span className="text-xs text-slate-400 block">Guardian XP</span>
              <span className="text-amber-400 font-mono font-bold text-lg">750 / 1000</span>
            </div>
          </div>
        </div>

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userStats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="glass-panel p-6 rounded-3xl border border-amber-500/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#132640] border border-[#1E3A5F] flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${st.color}`} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{st.label}</span>
                  <span className="text-xl font-serif font-bold text-white">{st.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab Row Navigation */}
        <div className="flex items-center gap-2 border-b border-[#1E3A5F] pb-2">
          {[
            { id: "contributions", label: "My Contributions" },
            { id: "saved", label: "Saved Places" },
            { id: "achievements", label: "Achievements & Badges" }
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

        {/* MY CONTRIBUTIONS TAB */}
        {activeTab === "contributions" && (
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white">Recent Contributions Log</h3>
            <div className="space-y-3">
              {recentContributions.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-[#0A1422] border border-[#1E3A5F]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#132640] border border-[#1E3A5F] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-white text-sm">{item.title}</h4>
                        <span className="text-xs text-slate-400 font-mono">📍 {item.location}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{item.timeAgo}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === "achievements" && (
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white">Achievements & Guardian Badges</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((ach) => (
                <div key={ach.id} className={`p-6 rounded-2xl border ${
                  ach.completed ? "bg-[#0A1422] border-amber-500/40 text-white" : "bg-[#0A1422]/50 border-slate-800 text-slate-500"
                }`}>
                  <span className="text-4xl block mb-3">{ach.badge}</span>
                  <h4 className="font-serif font-bold text-base mb-1">{ach.title}</h4>
                  <p className="text-xs text-slate-400 mb-3">{ach.desc}</p>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    ach.completed ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-slate-800 text-slate-400"
                  }`}>
                    {ach.completed ? "✅ Completed" : "🔒 In Progress"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SAVED PLACES TAB */}
        {activeTab === "saved" && (
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 text-center space-y-3">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-lg font-serif font-bold text-white">Saved Places Vault</h3>
            <p className="text-xs text-slate-400">You have 4 bookmarked places in your CodeVirasat Vault.</p>
          </div>
        )}

      </div>
    </SidebarLayout>
  );
}
