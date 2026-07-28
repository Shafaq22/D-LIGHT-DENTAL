import React from 'react';
import { MapPin, Clock, PhoneCall, CreditCard, Globe, Navigation, ShieldCheck, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function LocationContact({ onOpenBooking }) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-4">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              Visit Studio Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Clinic Address & <span className="holo-shimmer-text">Working Hours</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Located conveniently beside More Supermarket on Seethammadhara Road, Visakhapatnam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="holo-card p-6 border-cyan-500/30">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white font-['Outfit']">D-light Dental Studio</h3>
                  <p className="text-xs text-cyan-300 font-medium">Seethammadhara, Visakhapatnam</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Full Address:</strong> {clinicData.contact.fullAddress}
                </p>
                <p>
                  <strong className="text-white">Landmark:</strong> Beside More Supermarket
                </p>
                <p>
                  <strong className="text-white">Pincode:</strong> 530013
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${clinicData.contact.geo.lat},${clinicData.contact.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-gradient-btn flex-1 justify-center py-2.5 text-xs font-bold"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Hours & Phone Card */}
            <div className="holo-card p-6 border-purple-500/30">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white font-['Outfit']">Studio Operating Hours</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Mon-Sat: 10am-8:30pm | Sun: 10am-1pm</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs">
                {Object.entries(clinicData.workingHours).map(([day, hrs]) => (
                  <div key={day} className="flex justify-between items-center py-1 border-b border-white/5 capitalize text-slate-300">
                    <span className="font-semibold">{day}</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                      {hrs}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={`tel:${clinicData.contact.phone}`}
                  className="holo-outline-btn w-full justify-center py-3 text-xs font-bold"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>Direct Hotline: {clinicData.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Payment Options Card */}
            <div className="holo-card p-6 border-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-5 h-5 text-cyan-400" />
                <h4 className="text-sm font-extrabold text-white font-['Outfit']">Accepted Payment Options</h4>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {clinicData.paymentMethods.map((pm, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                    {pm}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Interactive Google Map Embed */}
          <div className="lg:col-span-7 h-full min-h-[500px]">
            <div className="holo-card h-full p-3 border-cyan-500/40 flex flex-col">
              <div className="p-3 flex items-center justify-between border-b border-white/10 mb-3">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Live GPS Map - Seethammadhara Studio
                </span>
                <span className="holo-badge text-[10px]">Vizag 530013</span>
              </div>
              
              <div className="w-full flex-1 rounded-xl overflow-hidden border border-white/10 relative min-h-[420px]">
                <iframe
                  title="D-light Dental Studio Google Map"
                  src={clinicData.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* Studio Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white font-['Outfit']">D-LIGHT DENTAL STUDIO</span>
            <span>• Seethammadhara, Visakhapatnam-530013</span>
          </div>
          <p>© {new Date().getFullYear()} D-light Dental Studio. All Rights Reserved. Laser & Prosthodontic Excellence.</p>
        </footer>

      </div>
    </section>
  );
}
