/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, BookOpen, Clock, Award, ArrowRight, Compass } from 'lucide-react';
import { PageId } from '../types';
import { CASE_RESULTS } from '../data';

interface CaseResultsProps {
  onNavigate: (page: PageId) => void;
}

export default function CaseResults({ onNavigate }: CaseResultsProps) {
  const [filter, setFilter] = useState<'All' | 'Probate Settlement Guidance' | 'Business Dispute Resolutions' | 'Property Transaction Assistance' | 'Estate Planning Success'>('All');

  const categoriesSet = ['All', 'Probate Settlement Guidance', 'Business Dispute Resolutions', 'Property Transaction Assistance', 'Estate Planning Success'] as const;

  const filteredResults = filter === 'All' 
    ? CASE_RESULTS 
    : CASE_RESULTS.filter(r => r.category === filter);

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Ethical Victory Records
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            Case Success Stories
          </h1>
          <p className="text-sm text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Every file presents unique details. While prior victories do not guarantee similar statutory outcomes, they serve as a testament to our detailed legal strategies and meticulous contract execution.
          </p>
        </div>
      </section>

      {/* 2. RESULTS GRID WITH FILTERS */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Diagnostic Category Filter Menu */}
          <div className="flex flex-wrap justify-center gap-2" id="case-results-filter-bar">
            {categoriesSet.map((cat) => {
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all border outline-none cursor-pointer ${
                    filter === cat
                      ? 'bg-brand-navy-900 text-[#FAF8F5] border-brand-gold-600/30'
                      : 'bg-brand-warm-cream border-brand-gold-600/10 text-brand-navy-900/80 hover:bg-brand-gold-100'
                  }`}
                >
                  {cat === 'All' ? 'All Transactions' : cat.split(' ')[0] + ' Matters'}
                </button>
              );
            })}
          </div>

          {/* Results Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {filteredResults.map((res) => {
              return (
                <div 
                  key={res.id} 
                  className="bg-brand-warm-cream border border-brand-gold-600/10 rounded p-6 sm:p-8 hover:shadow-xl hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-brand-gold-600/10 pb-3">
                      <span className="text-[10px] uppercase font-bold text-brand-gold-600 bg-brand-gold-100 px-2.5 py-1 rounded">
                        {res.category}
                      </span>
                      <span className="text-[10px] text-brand-charcoal/60 font-mono italic">
                        {res.confidentialName}
                      </span>
                    </div>

                    <h3 className="serif-header text-xl font-bold text-brand-navy-900 leading-tight">
                      {res.title}
                    </h3>

                    <div className="space-y-2.5 text-xs text-brand-charcoal font-light leading-relaxed">
                      <p>
                        <strong className="text-brand-navy-900 uppercase tracking-wider block text-[10px] font-bold">The Challenge:</strong>
                        {res.challenge}
                      </p>
                      <p>
                        <strong className="text-brand-navy-900 uppercase tracking-wider block text-[10px] font-bold">Our Strategic Execution:</strong>
                        {res.strategy}
                      </p>
                      <p className="bg-brand-warm-white p-3 rounded border border-brand-gold-500/10">
                        <strong className="text-brand-navy-900 uppercase tracking-wider block text-[10px] font-bold">Specialized Story Detail:</strong>
                        {res.detailStory}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-gold-600/10 bg-brand-gold-100/30 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-brand-gold-500" />
                        <span className="font-bold text-brand-navy-900 uppercase tracking-wider">Final Outcome:</span>
                      </div>
                      <span className="font-serif italic font-bold text-xl text-brand-navy-900">{res.outcome}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. ETHICS DISCLAIMER */}
      <section className="py-12 bg-zinc-100 border-t border-b border-zinc-250">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-brand-charcoal/60 space-y-2 leading-relaxed font-light">
          <p className="font-bold text-brand-navy-900 uppercase tracking-widest text-[10px]">Statutory Compliance Disclaimer</p>
          <p>
            The examples and transaction records presented in this section are authentic summaries of resolved files, with all specific names, corporations titles, and unique geolocation parameters altered to satisfy the strict attorney-client privilege codes of Gregg County and the State Bar of Texas.
          </p>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Discuss Your Legal Requirements Today
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE5D9]/85 leading-relaxed font-light">
            Do not let administrative complications freeze your capital. Let Ms. Florence coordinate protective agreements tailored explicitly for your goals.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Start Confidential Inquiries
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
