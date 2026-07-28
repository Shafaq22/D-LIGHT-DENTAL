import React from 'react';
import { Star, Sparkles, Zap, ShieldCheck, Clock, Award, ArrowRight, PhoneCall } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background Fullscreen Video - Clean, Raw, No Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/light1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Content Container (Placed Directly Over Video) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 w-full">
        <div className="max-w-3xl space-y-8 text-left">
          
          {/* Holographic Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/80 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(0,242,254,0.4)]">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-widest">
              Visakhapatnam's Premier Dental Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Outfit'] tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
            Experience Painless, <br />
            <span className="holo-shimmer-text">Laser-Powered Dental Care</span>
          </h1>

          {/* Sub-headline Text */}
          <p className="text-lg sm:text-xl text-white font-semibold max-w-2xl leading-relaxed drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)]">
            {clinicData.about?.summary || "At D-light Dental Studio, patients receive top-notch care in a modern and welcoming environment."}
          </p>

          {/* Key Highlights Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs font-bold text-white bg-slate-950/80 border border-cyan-500/40 px-4 py-3 rounded-xl backdrop-blur-md shadow-xl">
              <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Mon-Sat 10am-8:30pm</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-white bg-slate-950/80 border border-pink-500/40 px-4 py-3 rounded-xl backdrop-blur-md shadow-xl">
              <Zap className="w-4 h-4 text-pink-400 flex-shrink-0" />
              <span>Laser Dentistry</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-white bg-slate-950/80 border border-emerald-500/40 px-4 py-3 rounded-xl backdrop-blur-md shadow-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Sterilized</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="holo-gradient-btn px-8 py-4 text-base font-extrabold shadow-[0_0_35px_rgba(0,242,254,0.6)]"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${clinicData.contact.phone}`}
              className="holo-outline-btn px-6 py-4 text-base font-bold bg-slate-950/80 border-cyan-400/60 hover:bg-cyan-500/30 text-white shadow-xl"
            >
              <PhoneCall className="w-5 h-5 text-cyan-400" />
              <span>Call {clinicData.contact.phone}</span>
            </a>
          </div>

          {/* Social Proof & Ratings */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#060913] flex items-center justify-center text-xs font-bold text-white">
                  S
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#060913] flex items-center justify-center text-xs font-bold text-white">
                  V
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 border-2 border-[#060913] flex items-center justify-center text-xs font-bold text-white">
                  R
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-white ml-1 drop-shadow-md">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-white font-medium drop-shadow-md">From 49+ Verified Patient Reviews</p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/30 hidden sm:block"></div>

            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-semibold text-white drop-shadow-md">
                Fixed Prosthodontics & RCT Specialists
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
