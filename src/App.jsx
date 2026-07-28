import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FloatingGallery from './components/FloatingGallery';
import Doctors from './components/Doctors';
import Reviews from './components/Reviews';
import FAQSection from './components/FAQSection';
import LocationContact from './components/LocationContact';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import { clinicData } from './data/clinicData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500 selection:text-black relative">
      {/* Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Services & Treatments */}
        <Services onOpenBooking={() => setBookingOpen(true)} />

        {/* FLOATING RIGHT TO LEFT DENTAL GALLERY */}
        <FloatingGallery />

        {/* Specialist Doctors */}
        <Doctors onOpenBooking={() => setBookingOpen(true)} />

        {/* Patient Reviews */}
        <Reviews />

        {/* FAQs */}
        <FAQSection />

        {/* Location & Map */}
        <LocationContact onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Sticky Floating Call & WhatsApp Action Buttons */}
      <FloatingActions />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
