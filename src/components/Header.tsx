/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ChevronDown, MapPin, Briefcase, Home as HomeIcon, FileText } from 'lucide-react';
import { PageId } from '../types';
import { FIRM_INFO } from '../data';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' as PageId },
    { label: 'About', id: 'about' as PageId },
    { label: 'Our Attorney', id: 'attorneys' as PageId },
    { label: 'Practice Areas', id: 'practice_areas' as PageId, hasDropdown: true },
    { label: 'Case Results', id: 'case_results' as PageId },
    { label: 'Testimonials', id: 'testimonials' as PageId },
    { label: 'FAQ', id: 'faq' as PageId },
    { label: 'Legal Blog', id: 'blog' as PageId },
    { label: 'Contact', id: 'contact' as PageId },
  ];

  const practiceSubItems = [
    { label: 'Business Law', id: 'practice_business' as PageId, icon: Briefcase },
    { label: 'Real Estate Law', id: 'practice_realestate' as PageId, icon: HomeIcon },
    { label: 'Wills, Trusts & Probate', id: 'practice_probate' as PageId, icon: FileText },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 flex flex-col">
      {/* Top Announcement Bar */}
      <div className="w-full bg-brand-navy-900 text-brand-gold-500 text-[11px] uppercase tracking-[0.2em] py-2 px-4 flex flex-col sm:flex-row justify-between items-center border-b border-brand-border-beige/10 text-center gap-1 font-semibold">
        <div className="flex items-center gap-1 select-none">
          <MapPin size={12} className="text-brand-gold-500" />
          <span>Trusted Legal Guidance Serving Longview, Texas & Gregg County</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={11} className="text-brand-gold-500" />
          <a href={`tel:${FIRM_INFO.phone.replace(/\D/g, '')}`} className="hover:text-brand-gold-400 transition-colors font-bold">
            {FIRM_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-5'
        } border-b border-brand-border-beige`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Branding */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex flex-col items-start"
            id="header-branding-logo"
          >
            <span className="font-serif text-2xl tracking-tighter text-brand-navy-900 group-hover:text-brand-gold-500 transition-colors uppercase leading-none">
              Florence <span className="text-brand-gold-500 italic">&amp;</span> Florence
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#8C8C8C] uppercase font-bold mt-1.5 ml-0.5">
              Private Law Practice
            </span>
          </div>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.hasDropdown &&
                  ['practice_areas', 'practice_business', 'practice_realestate', 'practice_probate'].includes(
                    currentPage
                  ));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setPracticeDropdownOpen(true)}
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                  >
                    <button
                      className={`px-3 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                        isActive
                          ? 'text-brand-navy-900 border-b-2 border-brand-gold-500'
                          : 'text-[#8C8C8C] hover:text-brand-navy-900'
                      }`}
                      onClick={() => handleNavClick('practice_areas')}
                    >
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${practiceDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Popover Practice Dropdown */}
                    <AnimatePresence>
                      {practiceDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-0 w-64 bg-brand-warm-cream border border-brand-border-beige shadow-xl rounded-b-sm overflow-hidden py-1 z-50"
                        >
                          <div
                            onClick={() => handleNavClick('practice_areas')}
                            className="px-4 py-2 border-b border-brand-border-beige/50 text-xs text-brand-navy-900 hover:text-brand-gold-500 font-bold tracking-wider uppercase cursor-pointer transition-colors"
                          >
                            All Practice Areas Profile
                          </div>
                          {practiceSubItems.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <div
                                key={subItem.id}
                                onClick={() => handleNavClick(subItem.id)}
                                className="px-4 py-3 flex items-start gap-3 hover:bg-brand-gold-100/50 cursor-pointer transition-colors"
                              >
                                <SubIcon className="text-brand-gold-500 shrink-0 mt-0.5" size={16} />
                                <div className="flex flex-col">
                                  <span className="text-xs font-semibold text-brand-navy-900">
                                    {subItem.label}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-brand-navy-900 border-b-2 border-brand-gold-500'
                      : 'text-[#8C8C8C] hover:text-brand-navy-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-navy-900 text-white hover:bg-brand-navy-800 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold ml-4 rounded-sm transition-all duration-250 cursor-pointer shadow-sm hover:shadow"
              id="header-cta-schedule"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Hamburguer Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-navy-900 p-1 bg-brand-gold-100/40 rounded-sm hover:bg-brand-gold-100 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slider Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-warm-cream border-b border-brand-gold-600/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="py-2 border-b border-brand-gold-650/10">
                      <div
                        onClick={() => handleNavClick('practice_areas')}
                        className="text-sm font-bold uppercase tracking-wider text-brand-navy-900 pb-1 cursor-pointer hover:text-brand-gold-600"
                      >
                        {item.label}
                      </div>
                      <div className="pl-4 pt-1 space-y-2.5 mt-1 border-l-2 border-brand-gold-500/40">
                        {practiceSubItems.map((subItem) => (
                          <div
                            key={subItem.id}
                            onClick={() => handleNavClick(subItem.id)}
                            className="text-xs font-semibold text-brand-navy-900/80 hover:text-brand-gold-600 py-0.5 cursor-pointer flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-600"></span>
                            {subItem.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-2.5 border-b border-brand-gold-600/10 text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-brand-gold-600 pl-2' : 'text-brand-navy-900/80'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full mt-4 bg-brand-navy-900 hover:bg-brand-navy-800 text-white px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-center rounded-sm transition-all duration-200 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
