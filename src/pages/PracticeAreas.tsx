/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Home as HomeIcon, FileText, ArrowRight, ShieldCheck, Heart, UserPlus } from 'lucide-react';
import { PageId } from '../types';
import { PRACTICE_AREAS } from '../data';

interface PracticeAreasProps {
  onNavigate: (page: PageId) => void;
}

export default function PracticeAreas({ onNavigate }: PracticeAreasProps) {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Areas of Practice Focus
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            Our Private Legal Directives
          </h1>
          <p className="text-sm text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            By limiting our representation strictly to Business Law, Real Estate Law, and Wills &amp; Probate, we ensure that every client receives meticulous, experienced legal counsel.
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW PANEL */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="serif-header text-3xl font-semibold text-brand-navy-900 leading-tight">
              Meticulous, Expert Advising for East Texas Residents
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light">
              Click any category below to view comprehensive service maps, process timelines, client solutions, and answers to common legislative protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => {
              const IconComp = area.id === 'business' ? Briefcase : area.id === 'realestate' ? HomeIcon : FileText;
              return (
                <div 
                  key={area.id} 
                  className="bg-brand-warm-cream border border-brand-gold-600/10 rounded overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={area.imageUrl} 
                        alt={area.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-brand-navy-950/25"></div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-brand-gold-600">
                        <IconComp size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Boutique Core Service</span>
                      </div>
                      <h3 className="serif-header text-xl font-bold text-brand-navy-900">
                        {area.title}
                      </h3>
                      <p className="text-xs text-brand-charcoal/85 leading-relaxed font-light line-clamp-4">
                        {area.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onNavigate(area.pageId)}
                      className="w-full bg-brand-navy-900 text-[#FAF8F5] hover:bg-brand-gold-500 hover:text-brand-navy-950 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Explore Service Detail <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. COOP / ADHERENCE HIGHLIGHTS */}
      <section className="py-20 bg-brand-warm-cream border-t border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-gold-600">How We Stand Guard</span>
            <h2 className="serif-header text-3xl font-semibold text-brand-navy-900 leading-tight">
              Honest Legal Oversight from the Start
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal font-light leading-relaxed">
              When scheduling appointments, we focus on listening. Ms. Florence compiles a complete audit of your contracts, title files, or family assets to coordinate transparent plans.
            </p>
            <div className="space-y-2 pt-2 text-xs text-brand-navy-900 font-semibold uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold-500" />
                <span>Texas Probate Statutory Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold-500" />
                <span>Clear hourly/flat fees sheets</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-warm-white p-6 rounded-sm border border-brand-gold-600/20 shadow-lg space-y-4">
            <h3 className="serif-header text-lg font-bold text-brand-navy-900 border-b border-brand-gold-600/15 pb-2">
              Our Practice Pledges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-light text-brand-charcoal">
              <div className="space-y-1">
                <p className="font-bold text-brand-navy-900 flex items-center gap-1 uppercase tracking-wide">
                  <Heart size={14} className="text-brand-gold-600" /> No handing off files
                </p>
                <p className="leading-relaxed">Your questions, documents reviews, or filings are overseen directly by Patricia H Florence.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-brand-navy-900 flex items-center gap-1 uppercase tracking-wide">
                  <ShieldCheck size={14} className="text-brand-gold-600" /> Safe storage records
                </p>
                <p className="leading-relaxed">All executed Wills are logged under strict secure systems, safeguarding private documents from leaks.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Confidential Legal Consultation Serving Longview families
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE5D9]/85 leading-relaxed font-light">
            Secure your financial enterprise or plan your legacy coordinates starting today. Speak to our solo practitioner for reliable peace of mind.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Start Formal Request Here
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
