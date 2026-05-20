/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, Calendar, Shield, BookOpen, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { ATTORNEY_PROFILE, FIRM_INFO } from '../data';

interface AttorneysProps {
  onNavigate: (page: PageId) => void;
}

export default function Attorneys({ onNavigate }: AttorneysProps) {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO TITLE */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Our Practitioner &amp; Counselor
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide animate-fade-in">
            Meet Patricia H. Florence, J.D.
          </h1>
          <p className="text-sm text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Solo Legal Counsel and Advisor specializing in Business formation, Real Estate transactions, and compassionate Wills, Trusts, and Probate administration in East Texas since 1993.
          </p>
        </div>
      </section>

      {/* 2. PROFILE MASTER SECTION */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Portrait and Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded overflow-hidden border-2 border-brand-gold-500/20 shadow-xl bg-brand-navy-900">
              <img 
                src={ATTORNEY_PROFILE.portraitUrl} 
                alt="Patricia H Florence, Lead Attorney" 
                className="w-full h-auto object-cover object-center aspect-[4/5] brightness-95"
              />
            </div>

            <div className="bg-brand-warm-cream border border-brand-gold-600/10 p-5 rounded space-y-4">
              <h3 className="serif-header text-sm sm:text-base font-bold text-brand-navy-900 border-b border-brand-gold-600/20 pb-2">
                Attorney Contact Desk
              </h3>
              <ul className="space-y-3 text-xs text-brand-charcoal font-medium">
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-brand-gold-500" />
                  <a href={`tel:${FIRM_INFO.phone.replace(/\D/g, '')}`} className="hover:text-brand-gold-500 transition-colors">{FIRM_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-brand-gold-500" />
                  <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-brand-gold-500 transition-colors">{FIRM_INFO.email}</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Shield size={14} className="text-brand-gold-500 shrink-0 mt-0.5" />
                  <span>Licensed to practice before all Texas state courts since November 1993.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Details biography and credentials */}
          <div className="lg:col-span-8 space-y-8 text-sm">
            
            <div className="space-y-4">
              <h2 className="serif-header text-2xl sm:text-3xl font-semibold text-brand-navy-900">
                {ATTORNEY_PROFILE.bioHeadline}
              </h2>
              {ATTORNEY_PROFILE.fullBio.split('\n\n').map((para, i) => {
                return (
                  <p key={i} className="text-brand-charcoal font-light leading-relaxed">
                    {para}
                  </p>
                );
              })}
            </div>

            <div className="bg-brand-navy-900 text-white p-6 rounded border border-brand-gold-600/20">
              <h3 className="serif-header text-lg font-bold text-brand-gold-100 mb-2">My Foundational Legal Philosophy</h3>
              <p className="text-xs sm:text-sm font-light italic leading-relaxed text-[#EDE5D9]/95">
                "{ATTORNEY_PROFILE.philosophy}"
              </p>
            </div>

            {/* Structured Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-brand-gold-600/10">
              
              {/* Education */}
              <div className="space-y-4">
                <h3 className="serif-header text-base font-bold text-brand-navy-900 flex items-center gap-2">
                  <GraduationCap size={18} className="text-brand-gold-500" />
                  Academic History
                </h3>
                <ul className="space-y-2.5 text-xs text-brand-charcoal leading-relaxed font-light">
                  {ATTORNEY_PROFILE.credentials.education.map((edu, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-1.5"></span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions */}
              <div className="space-y-4">
                <h3 className="serif-header text-base font-bold text-brand-navy-900 flex items-center gap-2">
                  <Award size={18} className="text-brand-gold-500" />
                  Bar Admissions &amp; Licensures
                </h3>
                <ul className="space-y-2.5 text-xs text-[#2C3539] leading-relaxed font-light">
                  {ATTORNEY_PROFILE.credentials.barAdmissions.map((adm, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-1.5"></span>
                      <span>{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Affiliations / Memberships */}
            <div className="space-y-4 pt-6 border-t border-brand-gold-600/10">
              <h3 className="serif-header text-base font-bold text-brand-navy-900 flex items-center gap-2">
                <BookOpen size={18} className="text-brand-gold-500" />
                Professional Affiliations &amp; Regional Standing
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2C3539] font-light">
                {ATTORNEY_PROFILE.credentials.memberships.map((mem, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-brand-warm-cream p-2.5 border border-brand-gold-600/10 rounded">
                    <CheckCircle2 size={13} className="text-brand-gold-500 shrink-0" />
                    <span>{mem}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PARITY/SUPPORT STAFF SECTION */}
      <section className="py-20 bg-brand-warm-cream border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 block">
              Administrative Execution
            </span>
            <h2 className="serif-header text-3xl font-semibold text-brand-navy-900">
              Our Professional Staff
            </h2>
            <p className="text-xs text-brand-charcoal/80 font-light max-w-sm mx-auto">
              Our clerical integrity and client service are kept meticulous under experienced administrative custody.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {ATTORNEY_PROFILE.supportStaff.map((staff, idx) => {
              return (
                <div key={idx} className="bg-brand-warm-white border border-brand-gold-600/10 p-6 rounded shadow-sm grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
                  <div className="sm:col-span-1 text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-gold-100 flex items-center justify-center text-brand-gold-600 font-bold text-lg mx-auto border border-brand-gold-600/20 shadow">
                      {staff.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                  </div>
                  <div className="sm:col-span-3 space-y-2 text-center sm:text-left">
                    <span className="text-[10px] bg-brand-gold-100 text-brand-gold-600 font-bold px-2 py-0.5 rounded uppercase">
                      {staff.role}
                    </span>
                    <h3 className="serif-header text-base font-bold text-brand-navy-900 mt-1">{staff.name}</h3>
                    <p className="text-xs text-brand-charcoal font-light leading-relaxed">
                      {staff.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Ready to Discuss Your Family or LLC Estate Plan?
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE5D9]/85 leading-relaxed font-light">
            Each contract draft or wills catalog receives direct attorney supervision. Trust our three-decade practice to deliver robust structural peace of mind.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Request A Legal Audit Meeting
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
