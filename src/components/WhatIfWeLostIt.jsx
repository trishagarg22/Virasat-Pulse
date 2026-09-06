import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Sparkles, HeartHandshake } from "lucide-react";

export default function WhatIfWeLostIt() {
  const [isLostState, setIsLostState] = useState(false);

  return (
    <section className="py-24 bg-stone-950 text-amber-50 relative overflow-hidden transition-colors duration-700">
      {/* Background overlay changing filter when lost state is toggled */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          isLostState
            ? "bg-gradient-to-b from-stone-950 via-zinc-950 to-black opacity-100"
            : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-stone-950 to-stone-950 opacity-80"
        }`}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Interactive Reflection</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
          What If We Lost It?
        </h2>

        <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans mb-8">
          Delhi is not made of cement. It is made of memories, crafts, music, and stories.
          Toggle the switch below to witness what Delhi becomes if these stories disappear.
        </p>

        {/* Toggle Switch */}
        <div className="inline-flex items-center gap-4 p-2 rounded-2xl bg-stone-900 border border-amber-500/30 mb-12 shadow-xl">
          <button
            onClick={() => setIsLostState(false)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              !isLostState
                ? "bg-amber-500 text-stone-950 shadow-md scale-105"
                : "text-amber-200/60 hover:text-amber-100"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Living Heritage Today</span>
          </button>

          <button
            onClick={() => setIsLostState(true)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              isLostState
                ? "bg-red-600 text-white shadow-md scale-105"
                : "text-amber-200/60 hover:text-amber-100"
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>Visualize Loss</span>
          </button>
        </div>

        {/* Dynamic Card Display */}
        <motion.div
          key={isLostState ? "lost" : "alive"}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`p-8 sm:p-12 rounded-3xl border shadow-2xl backdrop-blur-xl transition-all duration-700 ${
            isLostState
              ? "bg-zinc-950/90 border-red-500/40 grayscale shadow-red-950/50"
              : "bg-stone-900/80 border-amber-500/30 shadow-amber-500/10"
          }`}
        >
          {!isLostState ? (
            <div>
              <div className="text-5xl mb-4">✨ 🧵 🕌</div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-4">
                Delhi is Alive Through You
              </h3>
              <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
                Attar stills vaporize baked monsoon clay into sandalwood. Zardozi masters hand-weave silver threads into silk. Sufi qawwals sing verses written 750 years ago in Nizamuddin.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 p-3 rounded-xl bg-amber-950/40 border border-amber-500/20">
                <HeartHandshake className="w-4 h-4" />
                <span>Every visitor who listens, shares, and respects keeps Delhi's pulse beating.</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-5xl mb-4 opacity-40">🥀 🏛️ 🔇</div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-red-300 mb-4">
                A Silent City of Concrete & Wires
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
                Stepwells fill with rubble. 4th-generation silver bazaars turn into plastic phone accessory stands. Qawwali courtyards go quiet. Old Delhi havelis are demolished for storage units.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 p-3 rounded-xl bg-red-950/40 border border-red-500/30">
                <AlertCircle className="w-4 h-4" />
                <span>When a tradition dies, it cannot be rebuilt with money.</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
