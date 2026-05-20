/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, ShieldAlert, Scale, ArrowUp } from 'lucide-react';
import { PageId } from '../types';
import { FIRM_INFO } from '../data';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-950 text-[#FAF3E6]/90 border-t border-brand-border-beige/30" id="firm-footer">
      
      {/* Google MAP and Call to Action Section */}
      <div className="w-full bg-brand-navy-900 border-b border-brand-border-beige/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-500 block">
              Directions &amp; Hours
            </span>
            <h3 className="serif-header text-3xl sm:text-4xl font-semibold text-[#FAF3E6]">
              Visit Our Longview Office
            </h3>
            <p className="text-sm text-[#ECE0CA]/80 leading-relaxed max-w-xl">
              We welcome clients by appointment to our secure office chambers on Hoyt Drive, just minutes from downtown Longview. Let our tranquil environment provide solid ground for your legal planning or estate matters.
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{FIRM_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-brand-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{FIRM_INFO.hours}</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow hover:shadow-lg inline-block text-center cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Embedded Map Visual Frame */}
          <div className="lg:col-span-6 rounded-sm overflow-hidden shadow-2xl border border-brand-border-beige/20 h-80 relative bg-brand-navy-900 group">
            {/* Real responsive iframe Google Maps pin for Hoyt Dr, Longview TX */}
            <iframe
              title="Florence & Florence Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.2934091924618!2d-94.7335688!3d32.5028562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363eed5f1e56cf%3A0xc0cd90fbcfa3ef2!2s104%20E%20Hoyt%20Dr%2C%20Longview%2C%20TX%2075601!5e0!3m2!1sen!2sus!4v1716223400000!5m2!1sen!2sus"
              className="w-full h-full border-0 grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Directory grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Scale size={20} className="text-brand-gold-500" />
              <span className="serif-header text-xl tracking-wider font-semibold uppercase text-white mt-1">
                Florence &amp; Florence
              </span>
            </div>
            <p className="text-xs text-[#ECE0CA]/70 leading-relaxed">
              Boutique private law office focused on Wills, Trusts, Probate, Estate administration, Real Estate, and Business corporate planning in Gregg County and the surrounding East Texas areas.
            </p>
            <p className="text-xs text-[#ECE0CA]/60 italic">
              "Gentle guidance, meticulous execution, absolute peace of mind."
            </p>
          </div>

          {/* Column 2: Legal Practice Specializations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 border-b border-brand-gold-500/20 pb-2">
              Practice Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('practice_business')} className="hover:text-brand-gold-500 transition-colors">
                  Business Law &amp; LLC Formation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('practice_realestate')} className="hover:text-brand-gold-500 transition-colors">
                  Real Estate &amp; Custom Deeds
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('practice_probate')} className="hover:text-brand-gold-500 transition-colors">
                  Wills, Trusts &amp; Probate
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('practice_areas')} className="hover:text-brand-gold-500 transition-colors text-[#ECE0CA]/60 italic">
                  View Practice Areas Index
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation Directory */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 border-b border-brand-gold-500/20 pb-2">
              Site Index
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-brand-gold-500 transition-colors">Home</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-brand-gold-500 transition-colors">About Firm</button></li>
              <li><button onClick={() => handleLinkClick('attorneys')} className="hover:text-brand-gold-500 transition-colors">Our Attorney</button></li>
              <li><button onClick={() => handleLinkClick('case_results')} className="hover:text-brand-gold-500 transition-colors">Case Results</button></li>
              <li><button onClick={() => handleLinkClick('testimonials')} className="hover:text-brand-gold-500 transition-colors">Reviews</button></li>
              <li><button onClick={() => handleLinkClick('faq')} className="hover:text-brand-gold-500 transition-colors">FAQ Index</button></li>
              <li><button onClick={() => handleLinkClick('blog')} className="hover:text-brand-gold-500 transition-colors">Legal Blog</button></li>
            </ul>
          </div>

          {/* Column 4: Contact Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 border-b border-brand-gold-500/20 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-[#ECE0CA]/85">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-brand-gold-500" />
                <a href={`tel:${FIRM_INFO.phone.replace(/\D/g, '')}`} className="hover:text-brand-gold-500 transition-colors select-all">
                  {FIRM_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-brand-gold-500" />
                <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-brand-gold-500 transition-colors select-all">
                  {FIRM_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-brand-gold-500 shrink-0 mt-0.5" />
                <span className="select-all">{FIRM_INFO.location}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Corporate Legal Footer Disclaimer & Brand Attribution */}
      <div className="bg-brand-navy-950 py-8 text-xs text-[#ECE0CA]/50 px-4 sm:px-6 lg:px-8 border-t border-brand-border-beige/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          
          <div className="space-y-1 md:text-left text-center">
            <p>
              &copy; {currentYear} {FIRM_INFO.name}. All Rights Reserved.
            </p>
            <p className="text-[10px] leading-normal text-[#ECE0CA]/40 max-w-2xl">
              Attributions and Disclaimers: The legal information presented on this site does not constitute formal legal counsel and does not establish an attorney-client relationship. Prior results described herein do not guarantee similar future outcomes. Serving Texas residents exclusively.
            </p>
            <p className="text-[10px] text-brand-gold-500/70 pt-1 font-medium select-none text-center md:text-left">
              Developed by Serwizen.
            </p>
          </div>

          {/* Scroll-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-brand-navy-900 hover:bg-brand-gold-500 hover:text-brand-navy-950 transition-colors border border-brand-border-beige/10 rounded-sm text-brand-gold-500 shrink-0 flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>

        </div>
      </div>

    </footer>
  );
}
