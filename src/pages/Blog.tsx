/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, ChevronRight, BookOpen, Calendar, Clock, User, ArrowLeft, Heart } from 'lucide-react';
import { PageId, BlogArticle } from '../types';
import { BLOG_ARTICLES, FIRM_INFO } from '../data';

interface BlogProps {
  onNavigate: (page: PageId) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Estate Planning' | 'Probate' | 'Real Estate Law' | 'Business Law'>('All');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const categories = ['All', 'Estate Planning', 'Probate', 'Real Estate Law', 'Business Law'] as const;

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesTab = activeTab === 'All' || art.category === activeTab;
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
                          art.content.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Resource Library &amp; Codes
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            The Legal Insight Blog
          </h1>
          <p className="text-sm text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Statutory overviews, planning worksheets, and warning lists prepared by Ms. Patricia H Florence to help protect your East Texas family or business holdings.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC READER VIEW / CATALOG */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedArticle ? (
            /* Immersive Reader Panel */
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in" id="immersive-article-reader">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-brand-gold-600 hover:text-brand-navy-900 transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer pb-2"
              >
                <ArrowLeft size={14} /> Back to Insights Catalog
              </button>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-brand-charcoal/60">
                  <span className="text-[10px] uppercase font-bold text-brand-gold-600 bg-brand-gold-100 px-2.5 py-1 rounded">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {selectedArticle.publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {selectedArticle.readTime}
                  </span>
                </div>

                <h1 className="serif-header text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy-900 leading-tight">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center gap-2.5 pt-2 border-b border-brand-gold-600/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-500 font-bold text-xs">
                    PF
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-navy-900">{selectedArticle.author}</p>
                    <p className="text-[9px] uppercase tracking-wider text-brand-charcoal/50">Lead Strategist Counsel</p>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded overflow-hidden h-72 sm:h-[400px] shadow-lg border border-brand-gold-500/10">
                <img 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Formatted body */}
              <div className="text-sm sm:text-base text-brand-charcoal leading-relaxed font-light space-y-6 max-w-2xl mx-auto">
                {selectedArticle.content.split('\n\n').map((para, i) => {
                  return (
                    <p key={i}>
                      {para}
                    </p>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-brand-gold-600/10 text-center max-w-2xl mx-auto">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-3 bg-brand-warm-cream border border-brand-gold-600/20 text-xs font-semibold uppercase text-brand-navy-900 tracking-wider hover:bg-brand-gold-100 transition-colors rounded cursor-pointer"
                >
                  Return to Articles Index
                </button>
              </div>
            </div>
          ) : (
            /* Catalog layout List */
            <div className="space-y-12">
              
              {/* Search filter panels */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-brand-gold-600/10 pb-6" id="blog-catalog-search-controls">
                
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all border outline-none cursor-pointer ${
                        activeTab === cat
                          ? 'bg-brand-navy-900 text-[#FAF8F5] border-brand-gold-600/20'
                          : 'bg-brand-warm-cream border-brand-gold-600/10 text-brand-navy-900/80 hover:bg-brand-gold-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:max-w-sm">
                  <Search size={15} className="text-brand-gold-500 absolute left-3 top-3.5" />
                  <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search historical insights..."
                    className="w-full bg-brand-warm-cream border border-brand-gold-600/10 rounded-sm py-2.5 pl-9 pr-4 text-xs focus:outline-none focus:border-brand-gold-500"
                  />
                </div>

              </div>

              {/* Grid listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((art) => {
                    return (
                      <div 
                        key={art.id} 
                        className="bg-brand-warm-cream border border-brand-gold-600/10 rounded overflow-hidden shadow-sm flex flex-col justify-between group h-full"
                      >
                        <div className="space-y-4">
                          <div className="h-48 overflow-hidden relative">
                            <img 
                              src={art.imageUrl} 
                              alt={art.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex justify-between text-[10px] text-white">
                              <span className="font-semibold uppercase tracking-wider">{art.category}</span>
                              <span className="font-mono">{art.publishDate}</span>
                            </div>
                          </div>

                          <div className="px-5 pb-5 space-y-3">
                            <h3 className="serif-header text-base sm:text-lg font-bold text-brand-navy-900 group-hover:text-brand-gold-600 transition-colors leading-tight line-clamp-2">
                              {art.title}
                            </h3>
                            <p className="text-xs text-brand-charcoal/85 leading-relaxed font-light line-clamp-3">
                              {art.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="px-5 pb-5 pt-0">
                          <button
                            onClick={() => {
                              setSelectedArticle(art);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="w-full border border-brand-gold-500/20 hover:border-brand-navy-900 hover:bg-brand-navy-900 hover:text-white py-2.5 text-[10.5px] font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1 cursor-pointer text-brand-gold-500"
                          >
                            Read Full Insight <ChevronRight size={12} />
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-16 text-center text-xs text-brand-charcoal/60 bg-brand-warm-cream border border-dashed border-brand-gold-600/20 rounded">
                    No articles currently match your search metrics or category filter. Try clearing query.
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-border-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="serif-header text-2xl sm:text-3xl font-semibold">
            Confidential Legal Consultation Serving Longview
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE5D9]/85 leading-relaxed font-light max-w-xl mx-auto">
            Bring clarity to your questions. Contact our solo practitioner chambers to audit your assets or commercial contract paperwork.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Request Free Strategic Review
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
