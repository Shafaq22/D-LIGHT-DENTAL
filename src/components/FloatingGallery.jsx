import React, { useState } from 'react';
import { Camera, Maximize2, X, Sparkles, Filter, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FloatingGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Exterior & Studio Signage',
    'Before & After Transformations',
    'Clinical Equipment & Implants',
    'Clinic Interior & Operatory'
  ];

  // Filter photos based on category
  const filteredPhotos = activeCategory === 'All'
    ? clinicData.photos
    : clinicData.photos.filter(p => p.category === activeCategory);

  // Duplicate for seamless right-to-left infinite marquee
  const marqueePhotos = [...filteredPhotos, ...filteredPhotos];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#060913] via-[#091126] to-[#060913]">
      {/* Background Holographic Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-4">
          <Camera className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
            Visual Clinical Excellence
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
          Dental Gallery <span className="holo-shimmer-text">& Transformations</span>
        </h2>
        <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-base">
          Explore our state-of-the-art clinic operatory, modern laser equipment, and real patient clinical transformations. Hover over photos to pause scrolling.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,242,254,0.4)] border border-cyan-300/40'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CONTINUOUS FLOATING RIGHT-TO-LEFT MARQUEE TRACK */}
      <div className="gallery-marquee-viewport">
        <div className="gallery-marquee-track">
          {marqueePhotos.map((photo, idx) => (
            <div
              key={`${photo.url}-${idx}`}
              onClick={() => setSelectedPhoto(photo)}
              className="floating-photo-card group"
            >
              <img
                src={photo.url}
                alt={photo.alt || "D-light Dental Studio Photo"}
                loading="lazy"
              />
              <div className="photo-overlay-badge flex items-end justify-between">
                <div>
                  <span className="holo-badge text-[10px] py-0.5 px-2 mb-1 inline-block">
                    {photo.category}
                  </span>
                  <p className="text-xs font-semibold text-white line-clamp-1">
                    {photo.alt || "Studio Facility & Treatment"}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Instructions Banner */}
      <div className="text-center mt-6 text-xs text-slate-400 flex items-center justify-center gap-2">
        <Layers className="w-4 h-4 text-cyan-400" />
        <span>Continuous right-to-left floating animation • Click any image to view in full resolution</span>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div
            className="lightbox-content relative p-6 bg-slate-950/90"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-200 hover:text-white hover:bg-pink-500/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="holo-badge">{selectedPhoto.category}</span>
                <span className="text-xs text-slate-400">D-light Dental Studio, Visakhapatnam</span>
              </div>

              {/* Large Image Container */}
              <div className="max-h-[70vh] overflow-hidden rounded-xl border border-cyan-500/30 flex items-center justify-center bg-black/60">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.alt}
                  className="max-h-[68vh] w-auto object-contain"
                />
              </div>

              {/* Caption details */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">
                    {selectedPhoto.alt || "High Precision Dental Procedure & Studio View"}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Location: Seethammadhara, Visakhapatnam • Contact: {clinicData.contact.phone}
                  </p>
                </div>
                <a
                  href="#booking"
                  onClick={() => setSelectedPhoto(null)}
                  className="holo-gradient-btn px-4 py-2 text-xs font-bold"
                >
                  Book Same Treatment
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
