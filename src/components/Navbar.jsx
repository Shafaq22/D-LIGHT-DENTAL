import React, { useState } from 'react';
import { Sparkles, PhoneCall, Calendar, MapPin, Clock, ShieldCheck, Menu, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#060913]/80 border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,242,254,0.1)]">
      {/* Top Holographic Info Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-1.5 text-xs border-b border-white/5 bg-gradient-to-r from-cyan-950/40 via-purple-950/20 to-slate-950/40">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            Mon-Sat: 10am-8:30pm | Sun: 10am-1pm
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-pink-400" />
            Seethammadhara, Visakhapatnam (Beside More Supermarket)
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            Wheelchair Accessible & Subsidies Available
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${clinicData.contact.phone}`}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors font-semibold"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {clinicData.contact.phone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[1.5px] shadow-[0_0_20px_rgba(0,242,254,0.4)] group-hover:shadow-[0_0_30px_rgba(0,242,254,0.8)] transition-all">
            <div className="w-full h-full bg-[#060913] rounded-[10.5px] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight font-['Outfit'] text-white flex items-center gap-1.5">
              <span>D-LIGHT</span>
              <span className="holo-shimmer-text">DENTAL STUDIO</span>
            </div>
            <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">
              Advanced Laser & Prosthodontics
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About Studio</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Treatments & Laser</a>
          <a href="#doctors" className="hover:text-cyan-400 transition-colors">Specialists</a>
          <a href="#gallery" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <span>Dental Gallery</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          </a>
          <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Location</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${clinicData.contact.phone}`}
            className="holo-outline-btn px-4 py-2 text-xs"
          >
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            <span>Emergency Call</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="holo-gradient-btn px-5 py-2.5 text-xs font-bold"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/30 bg-[#0a0f24] px-6 py-6 space-y-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 text-base font-medium"
          >
            About Studio
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 text-base font-medium"
          >
            Treatments & Laser
          </a>
          <a
            href="#doctors"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 text-base font-medium"
          >
            Specialists
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 text-base font-medium"
          >
            Dental Gallery
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 text-base font-medium"
          >
            Patient Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 text-base font-medium"
          >
            Location & Hours
          </a>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="holo-outline-btn justify-center py-3 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Call {clinicData.contact.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="holo-gradient-btn justify-center py-3 text-sm font-bold"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
