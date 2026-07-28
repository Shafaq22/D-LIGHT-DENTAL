import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, ShieldCheck, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    service: 'Laser Dentistry',
    doctor: 'Dr. Neeraja Suvvari',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    isEmergency: false,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="lightbox-content max-w-xl p-6 sm:p-8 bg-[#090f22] border-cyan-500/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-500/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="holo-badge">24/7 Priority Booking</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Instant Confirmation
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
                Book Holographic Consultation
              </h3>
              <p className="text-xs text-slate-300">
                Schedule your appointment at D-light Dental Studio, Seethammadhara Road, Visakhapatnam.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Emergency Checkbox */}
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isEmergency"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="w-4 h-4 accent-pink-500 rounded"
                />
                <label htmlFor="isEmergency" className="text-xs font-bold text-pink-300 cursor-pointer flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-pink-400" />
                  <span>Immediate Emergency Dental Pain? (Priority 24/7 Slot)</span>
                </label>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Patient Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Satya Monish"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Mobile Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 8688207776"
                      value={formData.patientPhone}
                      onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Selection & Doctor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Select Procedure</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0d162c] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {clinicData.services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preferred Specialist</label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full bg-[#0d162c] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Any Specialist">Any Available Doctor</option>
                    <option value="Dr. Neeraja Suvvari">Dr. Neeraja Suvvari (Laser & Restorative)</option>
                    <option value="Dr. Ganesh Kumar Butta">Dr. Ganesh Kumar Butta (Prosthodontist)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Time Window</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#0d162c] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Morning">Morning (9:00 AM - 1:00 PM)</option>
                    <option value="Afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Night Emergency">Late Night Emergency Slot (24/7)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Symptoms or Additional Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Describe any toothache, swelling, bleeding gums, or crown request..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full holo-gradient-btn justify-center py-3.5 text-sm font-bold shadow-[0_0_25px_rgba(0,242,254,0.4)] mt-4"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Appointment Booking</span>
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
              Appointment Request Submitted!
            </h3>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 max-w-md mx-auto space-y-1 text-left">
              <p><strong className="text-white">Patient:</strong> {formData.patientName}</p>
              <p><strong className="text-white">Procedure:</strong> {formData.service}</p>
              <p><strong className="text-white">Doctor:</strong> {formData.doctor}</p>
              <p><strong className="text-white">Slot:</strong> {formData.preferredDate} ({formData.preferredTime})</p>
              <p><strong className="text-white">Location:</strong> Beside More Supermarket, Seethammadhara, Visakhapatnam</p>
            </div>

            <p className="text-xs text-cyan-300">
              Our studio desk will call {formData.patientPhone} within 15 minutes to confirm.
            </p>

            <button
              onClick={handleReset}
              className="holo-gradient-btn px-6 py-2.5 text-xs font-bold"
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
