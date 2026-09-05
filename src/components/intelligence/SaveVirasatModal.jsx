import React, { useState } from 'react';
import { X, Camera, BookOpen, MapPin, CheckCircle2, Sparkles, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SaveVirasatModal({ isOpen, onClose, defaultSiteName = "" }) {
  const [activeTab, setActiveTab] = useState('photo'); // 'photo' | 'story' | 'location'
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    heritageType: 'Places',
    locationName: defaultSiteName || 'Delhi',
    description: '',
    contributorName: '',
    imagePreview: null
  });

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Virasat Contribution Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#1C1613] rounded-3xl border-gold-glow shadow-2xl p-6 sm:p-8 text-[#EFE6D5] space-y-6 max-h-[90vh] overflow-y-auto"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#14100E] border border-[#362A24] text-[#EFE6D5]/70 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A32]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Save Your Virasat Vault
          </div>
          <h3 className="text-2xl font-heritage font-bold text-white">
            Contribute Heritage Record
          </h3>
          <p className="text-xs text-[#EFE6D5]/70">
            Help archive endangered crafts, historical photos, and oral legends. Earn +50 XP upon review.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 3 Action Cards Tabs */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('photo')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                  activeTab === 'photo'
                    ? 'bg-[#C85A32]/20 border-[#D4AF37] text-[#D4AF37]'
                    : 'bg-[#14100E] border-[#362A24] text-[#EFE6D5]/60 hover:text-white'
                }`}
              >
                <Camera className="w-5 h-5 text-[#C85A32]" />
                <span className="text-xs font-bold">Upload Photo</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('story')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                  activeTab === 'story'
                    ? 'bg-[#C85A32]/20 border-[#D4AF37] text-[#D4AF37]'
                    : 'bg-[#14100E] border-[#362A24] text-[#EFE6D5]/60 hover:text-white'
                }`}
              >
                <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs font-bold">Share Story</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('location')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                  activeTab === 'location'
                    ? 'bg-[#C85A32]/20 border-[#D4AF37] text-[#D4AF37]'
                    : 'bg-[#14100E] border-[#362A24] text-[#EFE6D5]/60 hover:text-white'
                }`}
              >
                <MapPin className="w-5 h-5 text-[#10B981]" />
                <span className="text-xs font-bold">Add Location</span>
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Title of Contribution
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Rare 1920 Photo of Old Delhi Zardozi Workshop"
                  className="w-full bg-[#14100E] border border-[#362A24] focus:border-[#D4AF37] text-xs sm:text-sm text-white rounded-xl px-4 py-2.5 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    Heritage Category
                  </label>
                  <select
                    value={formData.heritageType}
                    onChange={(e) => setFormData({ ...formData, heritageType: e.target.value })}
                    className="w-full bg-[#14100E] border border-[#362A24] focus:border-[#D4AF37] text-xs text-white rounded-xl px-3 py-2.5 outline-none"
                  >
                    <option value="Places">Historic Place</option>
                    <option value="Crafts">Ancient Craft</option>
                    <option value="Traditions">Oral Tradition & Music</option>
                    <option value="Art">Performing Art</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    Location / Area
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.locationName}
                    onChange={(e) => setFormData({ ...formData, locationName: e.target.value })}
                    placeholder="e.g. Chandni Chowk, Delhi"
                    className="w-full bg-[#14100E] border border-[#362A24] focus:border-[#D4AF37] text-xs text-white rounded-xl px-4 py-2.5 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Description & Historical Context
                </label>
                <textarea
                  rows="3"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what makes this heritage point significant or at risk..."
                  className="w-full bg-[#14100E] border border-[#362A24] focus:border-[#D4AF37] text-xs text-white rounded-xl p-3 outline-none"
                ></textarea>
              </div>

              {/* File Upload Box */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Image / Document Upload
                </label>
                <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#362A24] hover:border-[#D4AF37]/50 rounded-2xl bg-[#14100E] cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 text-[#C85A32] mb-1" />
                  <span className="text-xs text-[#EFE6D5]/80 font-medium">Click to select photo or drag file</span>
                  <span className="text-[10px] text-[#EFE6D5]/50">PNG, JPG, WEBP up to 10MB</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>

                {formData.imagePreview && (
                  <div className="mt-2 h-24 w-full rounded-xl overflow-hidden border border-[#D4AF37]">
                    <img src={formData.imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C85A32] via-[#B34726] to-[#6B1D2F] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all"
            >
              Submit Contribution (+50 XP)
            </button>
          </form>
        ) : (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-2xl font-heritage font-bold text-white">Record Saved to Virasat Vault!</h4>
            <p className="text-xs text-[#EFE6D5]/80">
              Thank you for helping protect India's heritage. You earned <span className="text-[#D4AF37] font-bold">+50 XP</span>!
            </p>
          </div>
        )}

      </motion.div>
    </div>
  );
}
