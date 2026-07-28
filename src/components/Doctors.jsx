import React from 'react';
import { UserCheck, Award, Sparkles, CheckCircle2, Calendar, GraduationCap, Stethoscope } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Doctors({ onOpenBooking }) {
  return (
    <section id="doctors" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#060913] to-[#0a0f24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md mb-4">
            <UserCheck className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Expert Clinical Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Meet Our Master <span className="holo-shimmer-text">Dental Specialists</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Dedicated prosthodontists, endodontists, and laser dental surgeons bringing world-class oral healthcare to Visakhapatnam.
          </p>
        </div>

        {/* Doctor Cards Grid (Images Removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clinicData.doctors.map((doctor) => (
            <div key={doctor.id} className="holo-card p-6 sm:p-8 flex flex-col justify-between border-cyan-500/30">
              
              <div>
                {/* Header Info without image */}
                <div className="pb-6 border-b border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="holo-badge text-[10px] py-0.5 px-2.5">
                      {doctor.experience}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-['Outfit'] pt-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300">
                    {doctor.title}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    <span>{doctor.degrees}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-300 my-5 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Specialties Checklist */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Clinical Expertise:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {doctor.specialties.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <button
                onClick={onOpenBooking}
                className="w-full holo-gradient-btn justify-center py-3 text-xs font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>Consult with {doctor.name.split(' ')[1]}</span>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
