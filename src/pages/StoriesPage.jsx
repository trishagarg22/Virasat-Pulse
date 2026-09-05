import React from 'react';
import { STORIES } from '../data/stories';
import { BookOpen, Volume2, Heart, Sparkles, Clock, Share2 } from 'lucide-react';

export default function StoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#362A24] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Oral Traditions & Chronicles
        </div>
        <h1 className="text-3xl sm:text-5xl font-heritage font-bold text-[#F7F3E9]">
          Stories & <span className="text-gold-gradient">Ancient Legends</span>
        </h1>
        <p className="text-sm sm:text-base text-[#EFE6D5]/70 max-w-2xl">
          Listen to authentic oral histories, architect secrets, and folk myths passed down through generations across Bharat.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STORIES.map((story) => (
          <div
            key={story.id}
            className="bg-[#1C1613] rounded-3xl overflow-hidden border-gold-glow group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48">
                <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613] via-transparent to-black/30"></div>
                <div className="absolute top-3 left-3 bg-[#14100E]/90 px-3 py-1 rounded-full text-[11px] font-semibold text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C85A32]" />
                  <span>{story.category}</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#EFE6D5]/60">
                  <span>{story.siteName}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" /> {story.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-heritage font-bold text-[#F7F3E9] group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs text-[#EFE6D5]/70 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-3">
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md">
                <Volume2 className="w-4 h-4 text-[#F3E086]" />
                <span>Listen Audio Folklore ({story.audioDuration})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
