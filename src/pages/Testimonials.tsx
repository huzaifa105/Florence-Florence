/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Award, Calendar, ToggleLeft, User } from 'lucide-react';
import { PageId, Testimonial } from '../types';
import { TESTIMONIALS, FIRM_INFO } from '../data';

interface TestimonialsProps {
  onNavigate: (page: PageId) => void;
}

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  
  // Custom mock review addition
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('Longview, TX');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [relationship, setRelationship] = useState('Probate Client');
  
  const [submitted, setSubmitted] = useState(false);

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    const newReview: Testimonial = {
      id: `test-custom-${Date.now()}`,
      author,
      location,
      rating,
      text,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      relationship
    };

    setReviews(prev => [newReview, ...prev]);
    setSubmitted(true);
    
    // reset mock review inputs
    setAuthor('');
    setText('');
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Honest Client Audits
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            Testimonials &amp; Reviews
          </h1>
          <p className="text-sm text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Read authentic reflections on how MS. Patricia H Florence has held families and businesses safe, delivering tranquil results under highly stressful situations.
          </p>
        </div>
      </section>

      {/* 2. REPUTATION SUMMARY BOX */}
      <section className="py-12 bg-brand-warm-cream border-b border-brand-gold-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-warm-white p-6 sm:p-8 rounded border border-brand-gold-500/20 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center">
            
            <div className="space-y-1 sm:border-r border-brand-gold-600/10 py-2">
              <span className="serif-header text-4xl sm:text-5xl font-bold text-brand-navy-900 block">4.8</span>
              <div className="flex justify-center text-brand-gold-500 py-1">
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
              </div>
              <span className="text-[10px] uppercase font-bold text-brand-charcoal/60">Verified Rating Score</span>
            </div>

            <div className="space-y-1 sm:border-r border-brand-gold-600/10 py-2">
              <span className="serif-header text-4xl sm:text-5xl font-bold text-brand-navy-900 block">32</span>
              <span className="text-xs font-semibold text-brand-navy-900 block">Valued Client Reviews</span>
              <span className="text-[10px] uppercase font-bold text-brand-charcoal/60">Gregg County Registrar</span>
            </div>

            <div className="space-y-1 py-2">
              <span className="serif-header text-4xl sm:text-5xl font-bold text-brand-gold-500 block">100%</span>
              <span className="text-xs font-semibold text-brand-navy-900 block">Direct Attorney Care</span>
              <span className="text-[10px] uppercase font-bold text-brand-charcoal/60">Zero Hand-off Pledge</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS CATALOG & REVIEW FORM */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Reviews catalog */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="serif-header text-2xl font-semibold text-brand-navy-900 border-b border-brand-gold-600/10 pb-2">
              Client Experiences Record
            </h2>Option

            <div className="space-y-6">
              {reviews.map((test) => {
                return (
                  <div 
                    key={test.id} 
                    className="bg-brand-warm-cream border border-brand-gold-600/10 p-6 rounded shadow-sm relative group space-y-3.5"
                  >
                    <Quote size={28} className="absolute top-4 right-4 text-brand-gold-500/15" />
                    
                    {/* Stars block */}
                    <div className="flex text-brand-gold-500 items-center gap-0.5">
                      {Array.from({ length: test.rating }).map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" />
                      ))}
                      <span className="text-[10px] text-brand-charcoal/60 ml-2 italic">{test.date}</span>
                    </div>

                    <p className="font-light text-brand-charcoal leading-relaxed text-xs sm:text-sm">
                      "{test.text}"
                    </p>

                    <div className="flex justify-between items-center pt-3 border-t border-brand-gold-600/10">
                      <div>
                        <p className="text-xs font-bold text-brand-navy-900 uppercase tracking-wide">{test.author}</p>
                        <p className="text-[10px] text-brand-gold-600 uppercase tracking-widest mt-0.5">
                          {test.relationship} • {test.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] bg-brand-gold-100 text-brand-gold-600 font-bold px-2.5 py-1 rounded">
                        <CheckCircle2 size={12} />
                        <span>CLIENT VERIFIED</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form to submit review */}
          <div className="lg:col-span-4 self-start sticky top-24">
            <div className="bg-brand-navy-900 text-white p-6 sm:p-8 rounded border border-brand-gold-600/20 shadow-xl space-y-6" id="client-review-submission-portal">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400 block">Feedback Desk</span>
                <h3 className="serif-header text-xl font-bold text-white">Share Your Experience</h3>
                <p className="text-[11px] text-[#EDE5D9]/70 leading-relaxed font-light">
                  Have we accompanied you through Texas probate or property transactions? Submit your reflections below to help others find reassurance.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-brand-navy-950 border border-brand-gold-500/20 rounded text-center space-y-3">
                  <CheckCircle2 size={24} className="text-brand-gold-500 mx-auto" />
                  <p className="text-xs font-semibold text-white">Review Added Dynamic Listing</p>
                  <p className="text-[11px] text-[#EDE5D9]/70">
                    Your reflection has been added to our reviews catalogue above for the duration of this browser session. Thank you for your kindness!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCreateReview} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="block text-[#EDE5D9] font-medium" htmlFor="authorName">Your Name</label>
                    <input 
                      type="text" 
                      id="authorName" 
                      required 
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Sandra K."
                      className="w-full bg-brand-navy-950 border border-brand-gold-600/20 rounded p-2.5 text-white focus:outline-none focus:border-brand-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[#EDE5D9] font-medium" htmlFor="clientLoc">Location</label>
                      <input 
                        type="text" 
                        id="clientLoc" 
                        required 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Longview, TX"
                        className="w-full bg-brand-navy-955 border border-brand-gold-600/20 rounded p-2.5 text-white focus:outline-none focus:border-brand-gold-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[#EDE5D9] font-medium" htmlFor="relationshipType">Legal Matter</label>
                      <select 
                        id="relationshipType" 
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        className="w-full bg-brand-navy-955 border border-brand-gold-600/20 rounded p-2.5 text-white focus:outline-none focus:border-brand-gold-500"
                      >
                        <option value="Probate Matters">Probate Matter</option>
                        <option value="Wills & Trust Clients">Estate Plan</option>
                        <option value="Real Estate Client">Real Estate Deed</option>
                        <option value="Business Consulting Client">Business LLC</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[#EDE5D9] font-medium">Star Rating</label>
                    <div className="flex gap-1.5 text-brand-gold-400 pt-1">
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <button
                          key={stars}
                          type="button"
                          onClick={() => setRating(stars)}
                          className="hover:scale-125 transition-transform"
                        >
                          <Star size={18} fill={rating >= stars ? "currentColor" : "none"} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[#EDE5D9] font-medium" htmlFor="reviewText">Your Testimony</label>
                    <textarea 
                      id="reviewText" 
                      rows={4} 
                      required 
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Discuss how Ms. Florence guided your legal file carefully..."
                      className="w-full bg-brand-navy-950 border border-brand-gold-600/20 rounded p-2.5 text-white focus:outline-none focus:border-brand-gold-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 p-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer animate-pulse"
                  >
                    Post Real-Time Review
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER TRUST BLOCK */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Join Hundreds of Peaceful East Texas Heirs &amp; Business Owners
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE5D9]/85 leading-relaxed font-light">
            We operate on a personal referral framework. If you have any questions regarding how we charge fees or coordinate accounts transitions, contact our offices.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Consult Ms. Florence Directly
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
