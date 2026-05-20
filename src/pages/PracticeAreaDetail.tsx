/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertOctagon, HelpCircle, ArrowLeft, ArrowRight, ShieldCheck, ListOrdered } from 'lucide-react';
import { PageId } from '../types';
import { PRACTICE_AREAS, FIRM_INFO } from '../data';

interface PracticeAreaDetailProps {
  practiceId: 'business' | 'realestate' | 'probate';
  onNavigate: (page: PageId) => void;
}

export default function PracticeAreaDetail({ practiceId, onNavigate }: PracticeAreaDetailProps) {
  
  // Find matching content
  const area = PRACTICE_AREAS.find(a => a.id === practiceId);

  if (!area) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="serif-header text-3xl font-semibold text-brand-navy-900">Service Profile Not Found</h2>
        <button onClick={() => onNavigate('practice_areas')} className="text-brand-gold-500 font-bold cursor-pointer hover:underline">
          Return to Practice Index
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden select-none">
        <img 
          src={area.imageUrl} 
          alt={area.title} 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-black/35"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4">
            <button 
              onClick={() => onNavigate('practice_areas')}
              className="text-brand-gold-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Practice Overview
            </button>
            <h1 className="serif-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide">
              {area.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#EDE5D9]/90 max-w-2xl font-light leading-relaxed">
              Serving citizens and corporate clients in Longview, Texas with experienced solo counsel.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & COMMON PITFALLS */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold-500 block">
              Specialized Representation Profile
            </span>
            <h2 className="serif-header text-2xl sm:text-3xl font-semibold text-brand-navy-900 leading-tight">
              A Direct Approach to Resolving Your Legal Needs
            </h2>
            <p className="text-sm text-brand-charcoal font-light leading-relaxed">
              {area.fullDesc}
            </p>

            {/* How We Help (Firm Solutions list) */}
            <div className="space-y-4 pt-4 border-t border-brand-gold-600/10">
              <h3 className="serif-header text-lg font-bold text-brand-navy-900">How Our Chambers Protects You</h3>
              <ul className="space-y-3.5 text-xs text-brand-charcoal font-light">
                {area.firmSolutions.map((sol, index) => (
                  <li key={index} className="flex gap-2.5">
                    <CheckCircle size={16} className="text-brand-gold-600 shrink-0 mt-0.5" />
                    <span className="leading-normal">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pitfalls Panel */}
          <div className="lg:col-span-5">
            <div className="bg-brand-warm-cream border border-brand-gold-600/10 p-6 sm:p-8 rounded shadow-sm space-y-6">
              <h3 className="serif-header text-lg font-bold text-brand-navy-900 flex items-center gap-2 border-b border-brand-gold-600/20 pb-2">
                <AlertOctagon size={18} className="text-brand-gold-650" />
                Common Client Difficulties
              </h3>
              <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
                Operating without custom legal counsel exposes assets to high legislative risks, long administrative processing delays, and expensive disputes:
              </p>
              <ul className="space-y-4 text-xs font-medium text-brand-charcoal">
                {area.problems.map((prob, index) => (
                  <li key={index} className="flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2"></span>
                    <span className="leading-normal">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. LEGAL PROCESS PIPELINE */}
      <section className="py-20 bg-brand-warm-cream border-t border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold-600 block">The Legal Workflow</span>
            <h2 className="serif-header text-3xl font-semibold text-brand-navy-900">Our Strategic Operational Method</h2>
            <p className="text-xs text-brand-charcoal/80 font-light">
              We design structured checklists to verify each files milestones under high statutory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {area.processSteps.map((step, idx) => {
              return (
                <div key={idx} className="bg-brand-warm-white p-6 rounded border border-brand-gold-600/10 shadow-sm space-y-3 relative group">
                  <span className="serif-header text-4xl block font-bold text-brand-gold-600/20 group-hover:text-brand-gold-500/40 transition-colors">
                    0{idx+1}
                  </span>
                  <h3 className="serif-header text-base font-bold text-brand-navy-900">{step.title}</h3>
                  <p className="text-xs text-brand-charcoal/85 leading-relaxed font-light">{step.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. EXAMPLE REAL CASE SCENARIOS */}
      <section className="py-20 bg-brand-warm-white border-b border-brand-gold-600/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 block">Bespoke Case Studies</span>
            <h2 className="serif-header text-3xl font-semibold text-brand-navy-900">Practical Legal Applications</h2>
            <p className="text-xs text-brand-charcoal/80 font-light max-w-sm mx-auto">
              Real scenarios demonstrating how direct legal strategy achieves security and prevents local family conflict.
            </p>
          </div>

          <div className="space-y-6">
            {area.scenarios.map((scene, idx) => {
              return (
                <div key={idx} className="bg-brand-warm-cream border-l-4 border-brand-gold-500 p-6 rounded-r shadow-sm gap-6 grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-brand-navy-900 tracking-wider block">Typical Problem:</span>
                    <p className="text-xs sm:text-sm font-semibold text-brand-navy-900 leading-normal italic">
                      "{scene.situation}"
                    </p>
                  </div>
                  <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-l border-brand-gold-600/10 pt-4 md:pt-0 md:pl-6 text-xs text-brand-charcoal">
                    <span className="text-[10px] uppercase font-bold text-brand-gold-500 tracking-wider block">Our Resolution:</span>
                    <p className="leading-relaxed font-light">
                      {scene.solution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INDIVIDUAL PRACTICAL FAQS */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600 block">Service FAQ</span>
            <h2 className="serif-header text-2xl sm:text-3xl font-semibold text-brand-navy-900">Custom Specialty Questions</h2>
          </div>

          <div className="space-y-4">
            {area.faqs.map((faq, index) => {
              return (
                <div key={index} className="bg-brand-warm-cream border border-brand-gold-600/10 p-5 rounded space-y-2">
                  <h3 className="serif-header text-sm sm:text-base font-bold text-brand-navy-900 flex items-center gap-2">
                    <HelpCircle size={16} className="text-brand-gold-500 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-xs text-brand-charcoal leading-relaxed font-light pl-6">
                    {faq.a}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Speak Directly with Ms. Patricia H. Florence About {area.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE5D9]/85 leading-relaxed font-light max-w-2xl mx-auto">
            Avoid prolonged litigation and transactional errors. Contact our Hoyt Drive law practice for gentle legal guidance and complete documentation verification.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Request Free Strategy Audit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
