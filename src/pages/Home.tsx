/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Scale, Briefcase, Home as HomeIcon, FileText, 
  Award, ShieldCheck, CheckCircle2, Star, Quote, ChevronRight, HelpCircle 
} from 'lucide-react';
import { PageId, ConsultationFormState } from '../types';
import { PRACTICE_AREAS, WHY_CHOOSE_US, TESTIMONIALS, CASE_RESULTS, BLOG_ARTICLES, GENERAL_FAQS, FIRM_INFO, ATTORNEY_PROFILE } from '../data';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onSubmitConsultation: (formData: ConsultationFormState) => void;
}

export default function Home({ onNavigate, onSubmitConsultation }: HomeProps) {
  // Mock form state
  const [form, setForm] = useState<ConsultationFormState>({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: 'Wills, Trusts & Probate',
    message: '',
    preferredContact: 'email'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitConsultation(form);
    setFormSubmitted(true);
    setTimeout(() => {
      setForm({
        fullName: '',
        email: '',
        phone: '',
        practiceArea: 'Wills, Trusts & Probate',
        message: '',
        preferredContact: 'email'
      });
      setFormSubmitted(false);
    }, 5000);
  };

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] overflow-hidden py-24 md:py-32 shrink-0 select-none">
        
        {/* Subtle Decorative Background Overlays */}
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold-500/45 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold-500"></span>
              Private Solo Practice • Longview, TX
            </span>
            <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white tracking-wide">
              Compassionate Legal Guidance You Can Trust
            </h1>
            <p className="text-base sm:text-lg text-[#EDE5D9]/85 font-light leading-relaxed max-w-2xl">
              Helping families, businesses, and property owners in East Texas navigate heavy legal challenges with final confidence, clear communication, and personalized care.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg text-center cursor-pointer"
              >
                Schedule A Free Consultation
              </button>
              <button 
                onClick={() => onNavigate('practice_areas')}
                className="bg-transparent hover:bg-white/5 text-[#FAF8F5] border border-[#FAF8F5]/30 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all text-center cursor-pointer"
              >
                Our Practice Areas
              </button>
            </div>

            {/* Quick credentials badges in hero */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-gold-600/10 text-xs text-[#EDE5D9]/75">
              <div className="space-y-1">
                <span className="block font-bold text-white text-lg sm:text-xl serif-header">30+ Years</span>
                <span className="text-[10px] tracking-wider uppercase">Active Trial &amp; Advising Experience</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white text-lg sm:text-xl serif-header">4.8 Stars</span>
                <span className="text-[10px] tracking-wider uppercase">32 Valued Client Reviews</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white text-lg sm:text-xl serif-header">Direct Care</span>
                <span className="text-[10px] tracking-wider uppercase">Solo Practitioner Dedication</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-brand-gold-500/30 shadow-2xl skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" 
                alt="Florence & Florence Chambers Layout" 
                className="w-full object-cover aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] object-center brightness-90 filter"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-brand-navy-950/80 backdrop-blur-md p-4 rounded border border-brand-gold-500/20 text-center">
                <p className="text-xs font-semibold uppercase text-[#FAF8F5] tracking-widest">Patricia H Florence, J.D.</p>
                <p className="text-[10px] text-brand-gold-400 uppercase mt-0.5">Licensed State Bar of Texas since 1993</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LAW FIRM INTRODUCTION SECTION */}
      <section className="py-20 bg-brand-warm-cream border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
              Welcome to the Chambers
            </span>
            <h2 className="serif-header text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide text-brand-navy-900">
              Gentle Legal Guidance, Protective Execution
            </h2>
            <div className="space-y-4 text-sm text-brand-charcoal leading-relaxed font-light">
              <p>
                At the private solo practice of <strong>Florence &amp; Florence</strong>, we recognize that contacting an attorney often follows some of life’s most stressful moments. Whether you are dealing with the probate administration of a beloved parent’s estate, establishing clean title boundaries for a multi-acre property, or drafting custom LLC articles for your family business, we are here to provide clear, calm support.
              </p>
              <p>
                Led by Patricia H Florence, we pride ourselves on delivering careful, meticulous legal services without the cold distance of a multi-partner firm. Under our roof, you work directly with your attorney, receiving personalized corporate planning or legacy drafting tailored around your precise emotional and financial needs.
              </p>
              <p>
                We do not deal in complex legal jargon. Our mission is to deliver final <strong>peace of mind</strong> through transparent, comprehensive defense, clear upfront billing outlines, and gentle legal guidance.
              </p>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => onNavigate('about')}
                className="text-brand-gold-600 hover:text-brand-gold-500 font-bold uppercase text-xs tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
              >
                Learn More About Our Philosophy <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded overflow-hidden shadow-md border border-brand-gold-500/10">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" 
                alt="Document reviewing session" 
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="rounded overflow-hidden shadow-md border border-brand-gold-500/10 mt-6 md:mt-10">
              <img 
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80" 
                alt="Private family office meeting" 
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRACTICE AREAS OVERVIEW */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500">
            Our Dedicated Disciplines
          </span>
          <h2 className="serif-header text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy-900 tracking-wide">
            Careful Focus Where It Matters Most
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal max-w-xl mx-auto font-light">
            We exclusively serve three crucial legal areas, bringing immense local depth and experience to every file we accept.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-left">
            {PRACTICE_AREAS.map((area) => {
              const IconComp = area.id === 'business' ? Briefcase : area.id === 'realestate' ? HomeIcon : FileText;
              return (
                <div 
                  key={area.id}
                  className="bg-brand-warm-cream border border-brand-gold-600/10 rounded overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold-500/40 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={area.imageUrl} 
                      alt={area.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-navy-950/20 group-hover:bg-brand-navy-950/10 transition-colors"></div>
                    <div className="absolute top-4 left-4 p-2.5 bg-brand-navy-900 border border-brand-border-beige/20 text-[#FAF8F5] rounded-sm shadow">
                      <IconComp size={18} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <h3 className="serif-header text-xl font-bold text-brand-navy-900">
                      {area.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light flex-grow">
                      {area.shortDesc}
                    </p>
                    <div className="pt-2 border-t border-brand-gold-600/10 flex justify-between items-center text-xs">
                      <button 
                        onClick={() => onNavigate(area.pageId)}
                        className="text-brand-gold-500 group-hover:text-brand-navy-900 transition-colors font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                      >
                        Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE FLORENCE & FLORENCE */}
      <section className="py-20 bg-brand-navy-950 text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-gold-400 font-semibold block">
              Core Client Benefits
            </span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold leading-tight text-white tracking-wide">
              The Security of Having a Dedicated Legal Counsel
            </h2>
            <p className="text-xs sm:text-sm text-[#EDE5D9]/80 leading-relaxed font-light">
              Selecting an attorney is a highly personal decision. We differ from standard commercial law conglomerates because our entire structure is optimized for individual tranquility, high privacy, and strict detail verification.
            </p>
            <div className="p-4 bg-brand-navy-900 border border-brand-border-beige/10 rounded shadow">
              <p className="text-[11px] uppercase tracking-wider text-brand-gold-400 font-semibold mb-1">
                Regional Longview Integration
              </p>
              <p className="text-xs text-[#EDE5D9]/70 leading-relaxed font-light">
                Our practices have been embedded in East Texas court administration, county surveys, and asset evaluations for over three decades, providing immediate regional resources.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              return (
                <div key={index} className="space-y-2.5 p-5 bg-brand-navy-900 border border-brand-border-beige/10 rounded shadow-sm hover:border-brand-gold-500/20 transition-all">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-brand-gold-500 rounded-sm"></div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#EDE5D9]/75 leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. ATTORNEY PREVIEW SECTION */}
      <section className="py-20 bg-brand-warm-cream border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-sm overflow-hidden border-2 border-brand-gold-500/20 shadow-xl max-w-sm mx-auto">
              <img 
                src={ATTORNEY_PROFILE.portraitUrl} 
                alt="Patricia H Florence portrait" 
                className="w-full object-cover aspect-[4/5] object-center brightness-95"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-gold-600 font-bold block">
              Meet Ms. Patricia H. Florence
            </span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold leading-tight text-brand-navy-900">
              Trusted Solo Legal Counsel Serving East Texas
            </h2>
            <p className="text-sm font-light text-brand-charcoal leading-relaxed italic border-l-2 border-brand-gold-500 pl-4">
              "Every estate document is a reflection of a life well lived. Every contract is a shield for future enterprise."
            </p>
            <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed font-light">
              Since starting her law chambers, Patricia H Florence has built her business purely on referral circles and long-term trust. When citizens need an expert legal strategist to draft wills, coordinate heirs administration, or outline titles deeds, she analyzes each transaction personally to eliminate statutory exposure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold uppercase text-brand-navy-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold-500" />
                <span>State Bar of Texas (#1993)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold-500" />
                <span>Dedman School of Law J.D.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button 
                onClick={() => onNavigate('attorneys')}
                className="bg-brand-navy-900 hover:bg-brand-navy-800 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer shadow hover:shadow-md"
              >
                View Full Attorney Credentials
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ETHICAL CASE RESULTS SECTION */}
      <section className="py-20 bg-brand-warm-white border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500">Proven Strategy</span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold text-brand-navy-900 tracking-wide">
              Realistic, Ethical Case Outcomes
            </h2>
            <p className="text-xs text-brand-charcoal/70 max-w-lg mx-auto font-light">
              A record of careful, detail-oriented strategies implemented correctly. Names have been restricted to protect client attorney confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {CASE_RESULTS.slice(0, 3).map((res) => {
              return (
                <div key={res.id} className="bg-brand-warm-cream border border-brand-gold-600/10 p-6 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold-600 font-bold block">
                      {res.category}
                    </span>
                    <h3 className="serif-header text-lg font-bold text-brand-navy-900 leading-tight">
                      {res.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/85 leading-normal font-light">
                      <strong>The Issue:</strong> {res.challenge.slice(0, 115)}...
                    </p>
                    <p className="text-xs text-brand-charcoal/85 leading-normal font-light">
                      <strong>Strategy:</strong> {res.strategy.slice(0, 115)}...
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-brand-gold-600/10">
                    <p className="text-xs font-bold text-brand-navy-900">
                      Outcome: {res.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-8 text-center">
            <button 
              onClick={() => onNavigate('case_results')}
              className="px-6 py-3 bg-transparent hover:bg-brand-gold-100 text-brand-gold-500 border border-brand-gold-500 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              View More Case Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 bg-brand-navy-900 text-[#FAF8F5] border-t border-b border-brand-border-beige/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
            Public Reputation
          </span>
          <div className="flex justify-center items-center gap-1.5 text-brand-gold-500" id="testimonials-review-score">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <span className="text-xs text-white font-bold ml-1">{FIRM_INFO.rating} / 5.0 Rating</span>
            <span className="text-[#EDE5D9]/60 text-xs font-light">({FIRM_INFO.reviewsCount} Valued Reviews)</span>
          </div>

          {/* Slider Layout */}
          <div className="relative py-6 min-h-[220px] flex items-center justify-center">
            <Quote size={40} className="absolute top-0 left-4 text-brand-gold-600/20" />
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="serif-header text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-brand-gold-100">
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  {TESTIMONIALS[activeTestimonial].author}
                </p>
                <p className="text-[10px] text-brand-gold-400 uppercase tracking-widest mt-0.5">
                  {TESTIMONIALS[activeTestimonial].relationship} • {TESTIMONIALS[activeTestimonial].location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            {TESTIMONIALS.map((test, index) => {
              return (
                <button
                  key={test.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeTestimonial === index ? 'bg-brand-gold-500 w-6' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

          <div className="pt-2">
            <button 
              onClick={() => onNavigate('testimonials')}
              className="text-brand-gold-400 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
            >
              Read All Local Patient Reviews <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW SECTION */}
      <section className="py-20 bg-brand-warm-cream border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 block">
              Inquiries Desk
            </span>
            <h2 className="serif-header text-3xl font-semibold text-brand-navy-900">
              Common Texas Legal Questions
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal font-light leading-relaxed">
              Ms. Florence has sat down with citizens to resolve countless queries. We have organized popular probate and estate design answers here to help you begin.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => onNavigate('faq')}
                className="bg-brand-navy-900 text-white hover:bg-brand-navy-800 px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer"
              >
                View Full FAQs Index
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {GENERAL_FAQS.slice(0, 3).map((item) => {
              return (
                <div key={item.id} className="bg-brand-warm-white p-5 rounded border border-brand-gold-600/10 shadow-sm space-y-2">
                  <h3 className="serif-header text-sm sm:text-base font-bold text-brand-navy-900 flex items-center gap-2">
                    <HelpCircle size={15} className="text-brand-gold-500 shrink-0" />
                    {item.question}
                  </h3>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light pl-6">
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. BLOG PREVIEW SECTION */}
      <section className="py-20 bg-brand-warm-white border-b border-brand-gold-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600 block">Resource Library</span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold text-brand-navy-900">
              Latest Insights &amp; Statutory Guidance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.slice(0, 3).map((art) => {
              return (
                <div key={art.id} className="bg-brand-warm-cream border border-brand-gold-600/10 rounded overflow-hidden shadow-sm flex flex-col h-full group">
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={art.imageUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-brand-gold-600 uppercase">
                        {art.category} • {art.publishDate}
                      </span>
                      <h3 className="serif-header text-sm sm:text-base font-bold text-brand-navy-900 group-hover:text-brand-gold-600 transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-brand-charcoal/80 font-light line-clamp-3 leading-relaxed">
                        {art.excerpt}
                      </p>
                    </div>
                    <button 
                      onClick={() => onNavigate('blog')}
                      className="text-brand-navy-900 font-bold uppercase text-[10px] tracking-wider flex items-center gap-1 cursor-pointer pt-2 hover:text-brand-gold-500 transition-colors"
                    >
                      Read Full Article <ArrowRight size={10} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CONSULTATION CTA & APPOINTMENT SCHEDULER */}
      <section className="py-20 bg-brand-navy-900 text-white border-t border-brand-border-beige/10" id="online-consultation-form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-gold-500 font-bold block">
              Confidential Scheduling
            </span>
            <h2 className="serif-header text-3xl sm:text-4xl font-semibold leading-tight text-white">
              Schedule Your Inherent Legal Evaluation
            </h2>
            <p className="text-xs sm:text-sm text-[#EDE5D9]/80 leading-relaxed font-light">
              Submit your inquiry details securely. Once submitted, Ms. Patricia H Florence or our administrative assistant Brenda Rogers will call you back within one commercial business day to discuss appointments details.
            </p>
            <div className="space-y-4 pt-4 border-t border-brand-border-beige/20 text-xs">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-brand-gold-500" />
                <span>Absolute statutory legal confidentiality maintained</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-brand-gold-500" />
                <span>Flexible initial in-office consultations available</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-brand-gold-500" />
                <span>Flat upfront fees schedule presented first</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-brand-navy-950 p-6 sm:p-8 rounded-sm border border-brand-border-beige/10 shadow-2xl relative">
              <h3 className="serif-header text-lg sm:text-xl font-bold mb-6 text-brand-gold-100 border-b border-brand-border-beige/20 pb-2">
                Consultation Request Form
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-gold-500/10 flex items-center justify-center mx-auto text-brand-gold-500">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="serif-header text-lg text-white font-semibold">Thank You, Request Received</h4>
                  <p className="text-xs text-[#EDE5D9]/80 max-w-sm mx-auto">
                    We have securely logged your consultation request. A representative from Florence &amp; Florence will call you at your preferred contact phone or email within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[#EDE5D9] font-medium uppercase tracking-wider" htmlFor="fullName">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        id="fullName" 
                        required 
                        value={form.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-brand-navy-900 border border-brand-border-beige/10 rounded p-3 text-white focus:outline-none focus:border-brand-gold-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[#EDE5D9] font-medium uppercase tracking-wider" htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email" 
                        required 
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-brand-navy-900 border border-brand-border-beige/10 rounded p-3 text-white focus:outline-none focus:border-brand-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[#EDE5D9] font-medium uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        id="phone" 
                        required 
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="(903) 555-0199"
                        className="w-full bg-brand-navy-900 border border-brand-border-beige/10 rounded p-3 text-white focus:outline-none focus:border-brand-gold-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[#EDE5D9] font-medium uppercase tracking-wider" htmlFor="practiceArea">Focus Practice Area</label>
                      <select 
                        name="practiceArea"
                        id="practiceArea" 
                        value={form.practiceArea}
                        onChange={handleInputChange}
                        className="w-full bg-brand-navy-900 border border-brand-border-beige/10 rounded p-3 text-white focus:outline-none focus:border-brand-gold-500"
                      >
                        <option value="Business Law">Business Law &amp; LLC Formation</option>
                        <option value="Real Estate Law">Real Estate Law &amp; Deeds</option>
                        <option value="Wills, Trusts & Probate">Wills, Trusts &amp; Probate</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[#EDE5D9] font-medium uppercase tracking-wider" htmlFor="preferredContact">Preferred Contact Method</label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-[#EDE5D9]">
                        <input 
                           type="radio" 
                           name="preferredContact" 
                           value="phone" 
                           checked={form.preferredContact === 'phone'} 
                           onChange={handleInputChange}
                           className="accent-brand-gold-500"
                        />
                        <span>Telephone Callback</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-[#EDE5D9]">
                        <input 
                           type="radio" 
                           name="preferredContact" 
                           value="email" 
                           checked={form.preferredContact === 'email'} 
                           onChange={handleInputChange}
                           className="accent-brand-gold-500"
                        />
                        <span>Email Correspondence</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[#EDE5D9] font-medium uppercase tracking-wider" htmlFor="message">Brief Situation Overview (Confidential)</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={3} 
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Please outline any deadlines or details regarding probate, contracts, or property instruments..."
                      className="w-full bg-brand-navy-900 border border-brand-border-beige/10 rounded p-3 text-white focus:outline-none focus:border-brand-gold-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer"
                  >
                    Submit Encrypted Information Securely
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
