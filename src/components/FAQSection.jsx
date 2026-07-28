import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#060913] to-[#080d1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              Common Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Frequently Asked <span className="holo-shimmer-text">Questions</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Everything you need to know about visiting D-light Dental Studio in Seethammadhara.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {clinicData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="holo-card border-white/10 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white focus:outline-none"
                >
                  <span className="text-base font-['Outfit']">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isOpen
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 rotate-180'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 border-t border-white/5 leading-relaxed bg-white/[0.02]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
