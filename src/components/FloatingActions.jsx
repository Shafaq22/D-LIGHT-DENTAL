import React from 'react';
import { PhoneCall } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FloatingActions() {
  const phone = clinicData.contact.phone; // 8688207776
  const whatsappUrl = `https://wa.me/918688207776?text=${encodeURIComponent(
    'Hello D-light Dental Studio, I would like to inquire / book an appointment.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:shadow-[0_0_35px_rgba(16,185,129,0.9)] hover:scale-110 transition-all duration-300 border border-emerald-300/40"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.143-1.087z"/>
        </svg>

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 border border-emerald-500/40 shadow-xl">
          WhatsApp Us
        </span>
      </a>

      {/* Direct Phone Call Floating Action Button */}
      <a
        href={`tel:${phone}`}
        aria-label="Direct Phone Call"
        className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,242,254,0.6)] hover:shadow-[0_0_35px_rgba(0,242,254,0.9)] hover:scale-110 transition-all duration-300 border border-cyan-300/40"
      >
        <PhoneCall className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 border border-cyan-500/40 shadow-xl">
          Call 8688207776
        </span>
      </a>
    </div>
  );
}
