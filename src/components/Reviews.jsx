import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              Verified Patient Experiences
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Patient Stories & <span className="holo-shimmer-text">Testimonials</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Rated 4.9 ★ based on 49+ authentic patient reviews in Visakhapatnam.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {clinicData.reviews.map((rev) => (
            <div key={rev.id} className="holo-card p-6 sm:p-8 border-cyan-500/20 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="holo-badge text-[10px] py-0.5 px-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {rev.badge}
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-cyan-500/20 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="text-sm text-slate-200 leading-relaxed relative z-10 pl-2">
                    "{rev.text}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white font-['Outfit']">{rev.author}</h4>
                  <p className="text-[11px] text-slate-400">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-cyan-400 font-semibold">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Highly Recommended</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
