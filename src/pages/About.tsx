/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Users, Compass, CheckCircle2, Award, Calendar, Heart, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';
import { FIRM_INFO } from '../data';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      title: 'Empathetic Council',
      desc: 'We recognize that legal concerns arise from critical life shifts. We listen first, with patient and compassionate understanding.',
      icon: Heart
    },
    {
      title: 'Structural Precision',
      desc: 'Legal security requires extreme attention to tiny details. We double-verify every clause, deed boundaries, and filings standard.',
      icon: Shield
    },
    {
      title: 'Clear Communications',
      desc: 'We eliminate confusion by translating complex statutory codes into simple, clear choices, ensuring honest fee structures.',
      icon: Users
    },
    {
      title: 'Local Stewardship',
      desc: 'We represent East Texas communities with complete devotion. Our reputations and referral circles are our absolute metrics of success.',
      icon: Award
    }
  ];

  const timelineSteps = [
    { year: '1993', title: 'Admittance & Trial Focus', desc: 'Patricia H Florence gains admittance to the State Bar of Texas, centering on trial defense and rural estate claims.' },
    { year: '1998', title: 'Establishing Private Practice', desc: 'Driven by a vision of personal client-first legal care, she establishes her private chambers in Longview, Texas.' },
    { year: '2008', title: 'East Texas Land Advocacy', desc: 'Expanding titles examination services alongside regional title companies, clearing historic partition clouds.' },
    { year: '2016', title: 'Specialized Solo Practice', desc: 'Transitioned the firm focus entirely to Estate Planning, Probate Administration, Real Estate, and Business corporate formations.' }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Our Chambers &amp; Legacy
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            Over Thirty Years of Legal Integrity
          </h1>
          <p className="text-sm sm:text-base text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Founded on the values of transparent communication, patient support, and detailed statutory strategy, Florence &amp; Florence has been a trusted guide for East Texas residents.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 block">
              The Firm Story
            </span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold text-brand-navy-900 leading-tight">
              A Solo Practice Built Entirely Around Personal Care
            </h2>
            <div className="text-sm text-brand-charcoal space-y-4 leading-relaxed font-light">
              <p>
                In 1994, attorney <strong>Patricia H Florence</strong> set out to design a law practice that was distinctly different from the high-pressure, transactional environments of metropolitan multi-partner firms. She understood that legal issues are rarely just transactional—they represent heavy transitions, family security burdens, and long-term business legacies.
              </p>
              <p>
                Establishing her boutique chambers in Longview, Texas, Ms. Florence chose to limit her caseload to serve business organizations, coordinate property closings, and guide individuals through wills and estate administration with absolute care.
              </p>
              <p>
                For over three decades, our office doors have remained open to citizens desiring <strong>gentle legal guidance</strong> and extreme attention to legal compliance. Because we are a boutique solo practice, your files will never be handed off to an inexperienced associate. You will work side-by-side with Ms. Florence, knowing that your estate, deeds, or leases are reviewed with high legal authority.
              </p>
            </div>

            <div className="border-brand-gold-500/20 border-t pt-6">
              <p className="serif-header text-lg italic text-brand-navy-900 font-medium">
                "Our reputation isn't built on loud court trials, but on the quiet peace of mind of families who leave our building knowing their legacies are fully aligned and protected."
              </p>
              <p className="text-xs text-brand-gold-500 font-bold uppercase mt-2 tracking-wider">
                — Patricia H Florence, J.D.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded border border-brand-gold-600/20 overflow-hidden shadow-2xl bg-brand-navy-900">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Patricia Florence inside Chambers" 
                className="w-full object-cover aspect-[4/5] brightness-90 filter"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSIONS & CORE CORE STANDARDS */}
      <section className="py-20 bg-brand-navy-950 text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-400">Our Foundation</span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold text-white">Our Mission &amp; Professional Values</h2>
            <p className="text-xs sm:text-sm text-[#EDE5D9]/80 font-light">
              We operate under strict moral and regulatory mandates, designing individual and business strategies to promote stability and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-brand-navy-900 border border-brand-gold-600/10 p-6 rounded shadow-sm hover:border-brand-gold-500/30 transition-colors space-y-3">
                  <div className="p-2.5 bg-brand-navy-950 text-brand-gold-500 w-10 h-10 flex items-center justify-center rounded-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="serif-header text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-[#EDE5D9]/75 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. TIMELINE MILESTONES */}
      <section className="py-20 bg-brand-warm-cream border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">The Journey</span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold text-brand-navy-900">Thirty Years of Service Timelines</h2>
          </div>

          <div className="relative border-l border-brand-gold-500/30 ml-4 max-w-3xl mx-auto space-y-10">
            {timelineSteps.map((step, index) => {
              return (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-brand-navy-900 border border-brand-gold-500"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="serif-header text-xl font-bold text-brand-gold-500">{step.year}</span>
                      <span className="text-xs font-bold uppercase text-brand-navy-900 tracking-wider">• {step.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. why clients trust / consultation CTA */}
      <section className="py-20 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-3xl sm:text-4xl font-semibold tracking-wide">
            Need Reassuring, Honest Advice About Your Assets?
          </h2>
          <p className="text-sm text-[#EDE5D9]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Do not let administrative probate, messy partnership disputes, or ambiguous country contracts disrupt your family network. Contact our Longview office to discuss your options details.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              Request Free Consultation
            </button>
            <a 
              href={`tel:${FIRM_INFO.phone.replace(/\D/g, '')}`}
              className="bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Call {FIRM_INFO.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
