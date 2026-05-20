/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, Search, Scale, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';
import { GENERAL_FAQS } from '../data';

interface FAQProps {
  onNavigate: (page: PageId) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'General' | 'Estate Planning' | 'Probate' | 'Real Estate' | 'Consultation' | 'Fees'>('All');
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'Estate Planning', 'Probate', 'Real Estate', 'Consultation', 'Fees'] as const;

  // Filter logic
  const filteredFAQs = GENERAL_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleToggle = (id: string) => {
    setExpandedFAQId(expandedFAQId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col animate-fade-in">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#061026] text-[#FAF3E6] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Common Inquiries Index
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-[#ECE0CA]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Gain initial comfort and clarity about Texas probate, LLC Operating Agreements, deed changes, and consultation steps before scheduling meetings details.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & ACCORDION WORKSPACE */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Dynamic Search bar with category limits */}
          <div className="flex flex-col md:flex-row items-center gap-4 bg-brand-warm-cream p-4 rounded border border-brand-gold-550/15 shadow-sm" id="faq-search-bar">
            <div className="relative w-full md:flex-grow">
              <Search size={16} className="text-[#C5A059] absolute left-3.5 top-3.5" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our FAQ library (e.g. Will, probate, executor fees)..."
                className="w-full bg-brand-warm-white border border-brand-gold-600/10 rounded-sm py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-brand-gold-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-1.5 justify-center w-full md:w-auto">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all border outline-none cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0B1B3D] text-[#FAF3E6] border-brand-gold-600/20'
                      : 'bg-brand-warm-white border-brand-gold-600/10 text-brand-navy-900/80 hover:bg-brand-gold-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isExpanded = expandedFAQId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="bg-brand-warm-cream border border-brand-gold-600/10 rounded overflow-hidden shadow-sm transition-all"
                  >
                    {/* Header trigger */}
                    <button 
                      onClick={() => toggleToggle(faq.id)}
                      className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-brand-gold-100/30 transition-colors font-semibold"
                    >
                      <span className="serif-header text-sm sm:text-base font-bold text-[#0B1B3D] flex items-center gap-2">
                        <HelpCircle size={15} className="text-[#C5A059] shrink-0" />
                        {faq.question}
                      </span>
                      <span className="text-[#C5A059] shrink-0">
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    {/* Expandable answer panel */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 text-xs text-brand-charcoal leading-relaxed font-light pl-11 border-t border-brand-gold-650/5">
                        <p>{faq.answer}</p>
                        <span className="inline-block mt-3 text-[9px] uppercase font-bold text-brand-gold-600 tracking-wider">
                          CATEGORY: {faq.category} MATTERS
                        </span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center rounded bg-brand-warm-cream border border-dashed border-brand-gold-600/20 text-xs text-brand-charcoal/60">
                No legal FAQs match your current search constraints. Try searching "probate" or reset filters.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. SUBTITLE DISCLAIMER */}
      <section className="py-12 bg-zinc-150 border-t border-b border-zinc-250">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-brand-charcoal/65 leading-relaxed font-light space-y-2">
          <p className="font-bold text-brand-navy-900 uppercase tracking-wider text-[10px]">Administrative Billing Statement</p>
          <p>
            The statutory answers presented in this library represent typical administrative processes in the state of Texas. Specific court codes in Gregg, Upshur, or Harrison County can differ based on factors like intestate dynamics.
          </p>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#0B1B3D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Seek Direct, Customized Strategic Advice
          </h2>
          <p className="text-xs sm:text-sm text-[#ECE0CA]/85 leading-relaxed font-light max-w-xl mx-auto">
            Each contract draft or estate transfer commands direct legal scrutiny to protect assets. Contact our solo private chambers for personalized attention.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#C5A059] hover:bg-[#AB8E56] text-brand-navy-950 px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Request Free Initial Intake Review
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
