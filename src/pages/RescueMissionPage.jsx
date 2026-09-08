import React, { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import { Flag, Mic, Camera, FileText, Video, CheckSquare, Award, ArrowRight, X, Sparkles, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RescueMissionPage() {
  const [activeMissionModal, setActiveMissionModal] = useState(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const guardianStages = [
    { name: "Explorer", level: 1, current: false },
    { name: "Documenter", level: 2, current: false },
    { name: "Guardian", level: 3, current: true },
    { name: "Champion", level: 4, current: false }
  ];

  const missionCards = [
    {
      id: "elder-story",
      title: "Record an Elder's Story",
      subtitle: "Audio / Video Oral History",
      icon: Mic,
      iconBg: "bg-purple-950/80 text-purple-400 border-purple-500/30",
      description: "Interview a senior resident about neighborhood memories, old bazaar customs, or ancestral traditions."
    },
    {
      id: "old-photo",
      title: "Upload an Old Photo",
      subtitle: "Archival Image Submission",
      icon: Camera,
      iconBg: "bg-blue-950/80 text-blue-400 border-blue-500/30",
      description: "Scan or upload historical family photographs showing monuments, havelis, festivals, or street scenes before 1990."
    },
    {
      id: "document-tradition",
      title: "Document a Tradition",
      subtitle: "Text & Photo Description",
      icon: FileText,
      iconBg: "bg-amber-950/80 text-amber-400 border-amber-500/30",
      description: "Write step-by-step documentation of a regional craft technique, recipe, or traditional ritual."
    },
    {
      id: "interview-artisan",
      title: "Interview an Artisan",
      subtitle: "Video & Master Notes",
      icon: Video,
      iconBg: "bg-emerald-950/80 text-emerald-400 border-emerald-500/30",
      description: "Record a short video clip with a practicing master artisan sharing their tools and craft challenges."
    },
    {
      id: "verify-info",
      title: "Verify Information",
      subtitle: "Fact Check & Coordinates",
      icon: CheckSquare,
      iconBg: "bg-rose-950/80 text-rose-400 border-rose-500/30",
      description: "Help verify GPS coordinates, current risk status, or practitioner counts for pending heritage entries."
    }
  ];

  const handleSubmitMission = (e) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setActiveMissionModal(null);
    }, 1800);
  };

  return (
    <SidebarLayout>
      <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner: "Become a Heritage Guardian" */}
        <div className="glass-panel rounded-3xl p-8 border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Background image tint */}
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726] via-[#0B1726]/90 to-transparent" />

          {/* Left Text */}
          <div className="lg:col-span-7 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Flag className="w-3.5 h-3.5 text-amber-400" />
              <span>Community Rescue Mission Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white">
              Become a Heritage Guardian
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              Every photograph uploaded, oral story recorded, and craft verified helps protect endangered heritage from disappearing forever.
            </p>
          </div>

          {/* Right Progress Tracker: 4 Guardian Stages */}
          <div className="lg:col-span-5 relative z-10 bg-[#0A1422]/90 p-6 rounded-2xl border border-amber-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Guardian Level Progress</span>
              </span>
              <span className="text-xs text-white font-bold font-mono">Stage 3 / 4</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {guardianStages.map((stg) => (
                <div
                  key={stg.name}
                  className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                    stg.current
                      ? "bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md scale-105"
                      : "bg-[#132640]/60 border-[#1E3A5F] text-slate-400"
                  }`}
                >
                  <span className="text-[10px] font-mono block">LVL {stg.level}</span>
                  <span className="text-xs truncate block">{stg.name}</span>
                </div>
              ))}
            </div>

            <div className="w-full h-2 rounded-full bg-[#132640] overflow-hidden">
              <div className="h-full bg-amber-400 w-[75%] transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* 5 Mission Cards in a Row / Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-white">Available Rescue Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {missionCards.map((mission) => {
              const Icon = mission.icon;
              return (
                <div
                  key={mission.id}
                  className="glass-panel glass-panel-hover p-6 rounded-3xl border border-amber-500/20 flex flex-col justify-between space-y-4 group transition-all"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md ${mission.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                        {mission.title}
                      </h3>
                      <span className="text-[11px] font-mono text-amber-400 block mb-2">
                        {mission.subtitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveMissionModal(mission)}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all"
                  >
                    <span>Start Mission</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Mission Submission Modal */}
        <AnimatePresence>
          {activeMissionModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-panel max-w-lg w-full rounded-3xl p-8 relative border border-amber-500/40 shadow-2xl text-slate-100 space-y-6"
              >
                <button
                  onClick={() => setActiveMissionModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#132640] text-amber-400 hover:bg-[#1E3A5F]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${activeMissionModal.iconBg}`}>
                    <activeMissionModal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                      {activeMissionModal.subtitle}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {activeMissionModal.title}
                    </h3>
                  </div>
                </div>

                {!submittedSuccess ? (
                  <form onSubmit={handleSubmitMission} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">Location / Heritage Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kinari Bazaar, Chandni Chowk"
                        className="w-full bg-[#0A1422] border border-[#1E3A5F] rounded-xl px-4 py-2.5 text-white outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">Title & Summary</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Describe the story, tradition, or photo background..."
                        className="w-full bg-[#0A1422] border border-[#1E3A5F] rounded-xl px-4 py-2.5 text-white outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">Upload File (Image / Audio / Video)</label>
                      <input
                        type="file"
                        className="w-full bg-[#0A1422] border border-[#1E3A5F] rounded-xl p-2 text-slate-400"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveMissionModal(null)}
                        className="px-4 py-2.5 rounded-xl bg-[#132640] text-slate-300 font-bold text-xs"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
                      >
                        Submit Contribution
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                    <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-serif font-bold text-white text-lg">Contribution Submitted!</h4>
                    <p className="text-xs text-emerald-200">
                      Thank you, Guardian! You gained <strong>+150 XP</strong> towards Guardian Champion status.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </SidebarLayout>
  );
}
