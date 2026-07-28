import React, { useState } from 'react';
import { Stethoscope, Zap, ShieldCheck, CheckCircle2, ArrowRight, Activity, Sparkles, Check } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Services({ onOpenBooking }) {
  const [activeServiceId, setActiveServiceId] = useState(clinicData.services[0].id);

  const activeService = clinicData.services.find(s => s.id === activeServiceId) || clinicData.services[0];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-4">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              State-of-the-Art Care
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Specialized Dental <span className="holo-shimmer-text">Treatments & Laser</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            From laser dentistry to fixed prosthodontics and pain-free root canals, discover our comprehensive range of advanced clinical procedures.
          </p>
        </div>

        {/* Tab Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {clinicData.services.map(service => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-32 relative ${
                  isActive
                    ? 'bg-gradient-to-br from-cyan-950/80 to-purple-950/60 border-cyan-400/80 shadow-[0_0_25px_rgba(0,242,254,0.3)]'
                    : 'bg-slate-900/40 border-white/5 hover:border-cyan-500/30 hover:bg-slate-800/40'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {service.category}
                  </span>
                  <p className={`text-sm font-extrabold font-['Outfit'] leading-snug ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {service.title}
                  </p>
                </div>
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe] absolute bottom-3 right-3"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Detailed Service Display Card */}
        <div className="holo-card p-8 lg:p-12 border-cyan-500/30 bg-slate-900/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="holo-badge">{activeService.category}</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> 100% Painless Guarantee
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-white font-['Outfit']">
                {activeService.title}
              </h3>

              <p className="text-sm font-semibold text-cyan-400 italic">
                "{activeService.tagline}"
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Procedure Highlights:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/5 p-3 rounded-lg border border-white/5">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="holo-gradient-btn px-6 py-3 text-sm font-bold"
                >
                  <span>Book {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${clinicData.contact.phone}`}
                  className="holo-outline-btn px-5 py-3 text-sm font-medium"
                >
                  <span>Inquire Details</span>
                </a>
              </div>
            </div>

            {/* Right Holographic Image & Spec Display Card */}
            <div className="lg:col-span-5 relative">
              <div className="holo-card p-3 border-cyan-500/40 bg-slate-950/80 shadow-[0_0_40px_rgba(0,242,254,0.25)] group">
                
                {/* Main Procedure Image */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden border border-cyan-500/30 bg-black">
                  <img
                    src={activeService.image || "/laser-dentistry.png"}
                    alt={activeService.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-75 pointer-events-none" />
                  
                  {/* Badge Overlays */}
                  <div className="absolute top-3 left-3">
                    <span className="holo-badge text-[10px] bg-slate-950/80 backdrop-blur-md">
                      {activeService.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-extrabold text-white font-['Outfit'] text-sm">
                        {activeService.title}
                      </p>
                      <p className="text-[11px] text-cyan-300 font-semibold">
                        D-light Dental Studio, Vizag
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-[10px]">
                      Advanced Tech
                    </span>
                  </div>
                </div>

                {/* Quick Info Specs Bar below image */}
                <div className="mt-3 p-3 bg-white/5 rounded-xl border border-white/10 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Activity className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400">Precision</p>
                      <p className="font-bold text-white text-[11px]">Sub-Millimeter</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400">Recovery</p>
                      <p className="font-bold text-emerald-400 text-[11px]">Instant Relief</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
