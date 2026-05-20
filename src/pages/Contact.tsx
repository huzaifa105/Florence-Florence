/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Send, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { PageId, ConsultationFormState } from '../types';
import { FIRM_INFO } from '../data';

interface ContactProps {
  onNavigate: (page: PageId) => void;
  onSubmitConsultation: (formData: ConsultationFormState) => void;
}

export default function Contact({ onNavigate, onSubmitConsultation }: ContactProps) {
  const [form, setForm] = useState<ConsultationFormState>({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: 'Wills, Trusts & Probate',
    message: '',
    preferredContact: 'email'
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Validation
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setValidationError('Please satisfy all mandatory form values prior to transmission.');
      return;
    }

    // Email Check Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setValidationError('Please outline a viable legal email address.');
      return;
    }

    // Phone standard check
    const cleanPhone = form.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setValidationError('Please configure a complete 10-digit callback phone number.');
      return;
    }

    onSubmitConsultation(form);
    setFormSubmitted(true);
    setValidationError(null);

    // reset logic
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
    }, 6000);
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-brand-navy-900 text-[#FAF8F5] py-16 md:py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-brand-gold-600/10 via-brand-navy-950/20 to-brand-navy-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-500 font-semibold">
            Chambers Communications
          </span>
          <h1 className="serif-header text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wide">
            Request A Private Consultation
          </h1>
          <p className="text-sm text-[#EDE5D9]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Begin with a simple conversation. Speak with Ms. Patricia H Florence under absolute attorney-client confidentiality rules to safeguard your assets.
          </p>
        </div>
      </section>

      {/* 2. DUAL COL CONTACT WORKSPACE */}
      <section className="py-20 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-500 block">
                Office Coordinates
              </span>
              <h2 className="serif-header text-2xl sm:text-3xl font-semibold text-brand-navy-900 leading-tight">
                Our Physical Chambers In Longview
              </h2>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed">
                Our legal staff welcomes community members by pre-scheduled appointment to our boutique office chambers, situated on Hoyt Drive near central Longview courts.
              </p>
            </div>

            {/* Direct listings cards */}
            <div className="space-y-4">
              <div className="flex bg-brand-warm-cream border border-brand-gold-650/10 p-4 rounded items-start gap-4 shadow-sm">
                <div className="p-2 bg-brand-navy-900 text-brand-gold-500 rounded-sm shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-xs text-[#2C3539] space-y-0.5">
                  <h4 className="font-bold text-brand-navy-900 uppercase tracking-wider text-[10px]">Physical Location</h4>
                  <p className="font-semibold select-all text-brand-navy-950">{FIRM_INFO.location}</p>
                  <p className="text-[10px] text-brand-charcoal/60">Gregg County, Texas</p>
                </div>
              </div>

              <div className="flex bg-brand-warm-cream border border-brand-gold-650/10 p-4 rounded items-start gap-4 shadow-sm">
                <div className="p-2 bg-brand-navy-900 text-brand-gold-500 rounded-sm shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-xs text-[#2C3539] space-y-0.5">
                  <h4 className="font-bold text-brand-navy-900 uppercase tracking-wider text-[10px]">Telephone Desk</h4>
                  <p className="font-semibold">
                    <a href={`tel:${FIRM_INFO.phone.replace(/\D/g, '')}`} className="hover:text-brand-gold-500 transition-colors select-all text-brand-navy-950">
                      {FIRM_INFO.phone}
                    </a>
                  </p>
                  <p className="text-[10px] text-brand-charcoal/60">Support hours: 8:30 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex bg-brand-warm-cream border border-brand-gold-650/10 p-4 rounded items-start gap-4 shadow-sm">
                <div className="p-2 bg-brand-navy-900 text-brand-gold-500 rounded-sm shrink-0">
                  <Clock size={18} />
                </div>
                <div className="text-xs text-[#2C3539] space-y-0.5">
                  <h4 className="font-bold text-brand-navy-900 uppercase tracking-wider text-[10px]">Office Access Hours</h4>
                  <p className="font-medium text-brand-navy-950">{FIRM_INFO.hours}</p>
                  <p className="text-[10px] text-brand-charcoal/60">Closed on standard state court holidays</p>
                </div>
              </div>
            </div>

            {/* Confident pledges */}
            <div className="border-brand-gold-600/10 border-t pt-6 text-xs text-brand-charcoal/70 space-y-3 font-light leading-relaxed">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold-500 shrink-0" />
                <span className="font-bold text-brand-navy-900">Direct Lawyer Escrow &amp; Filing Care</span>
              </div>
              <p>
                Please do not transmit sensitive, highly classified details before we establish a formal, verified attorney-client contract alignment.
              </p>
            </div>
          </div>

          {/* Form intake block */}
          <div className="lg:col-span-7">
            <div className="bg-brand-warm-cream p-6 sm:p-8 rounded border border-brand-gold-600/15 shadow-xl space-y-6">
              <h3 className="serif-header text-xl font-bold text-brand-navy-900 border-b border-brand-gold-600/15 pb-2">
                Secure Attorney Intake Portal
              </h3>

              {formSubmitted ? (
                <div className="p-10 text-center space-y-4 bg-brand-warm-white rounded border border-brand-gold-600/10">
                  <div className="w-14 h-14 bg-brand-gold-100 rounded-full flex items-center justify-center text-brand-gold-500 mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="serif-header text-xl font-semibold text-brand-navy-900">Request Sent Confirmed</h4>
                  <p className="text-xs text-brand-charcoal leading-relaxed font-light max-w-sm mx-auto">
                    Thank you. Your consultation request details have been securely logged. Patricia H. Florence or Senior Assistant Brenda Rogers will call you at your preferred callback choice within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  
                  {/* Validation Toast */}
                  {validationError && (
                    <div className="flex bg-red-50 text-red-700 p-4 border border-red-200 rounded items-start gap-2 text-xs">
                      <AlertCircle className="shrink-0 mt-0.5" size={15} />
                      <p>{validationError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-brand-navy-900 font-bold uppercase tracking-wider text-[10px]" htmlFor="userFullName">Full Legal Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        id="userFullName" 
                        required 
                        value={form.fullName}
                        onChange={handleInputChange}
                        placeholder="Johnathan Q. Public"
                        className="w-full bg-brand-warm-white border border-brand-gold-600/15 rounded p-3 text-brand-navy-950 focus:outline-none focus:border-brand-gold-400 font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-brand-navy-900 font-bold uppercase tracking-wider text-[10px]" htmlFor="userEmail">Secure Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        id="userEmail" 
                        required 
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-brand-warm-white border border-brand-gold-600/15 rounded p-3 text-brand-navy-950 focus:outline-none focus:border-brand-gold-400 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-brand-navy-900 font-bold uppercase tracking-wider text-[10px]" htmlFor="userPhone">Direct Telephone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        id="userPhone" 
                        required 
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="(903) 555-1212"
                        className="w-full bg-brand-warm-white border border-brand-gold-600/15 rounded p-3 text-brand-navy-950 focus:outline-none focus:border-brand-gold-400 font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-brand-navy-900 font-bold uppercase tracking-wider text-[10px]" htmlFor="userFocusField">Focus Practice Area</label>
                      <select 
                        name="practiceArea"
                        id="userFocusField" 
                        value={form.practiceArea}
                        onChange={handleInputChange}
                        className="w-full bg-brand-warm-white border border-brand-gold-600/15 rounded p-3 text-brand-navy-950 focus:outline-none focus:border-brand-gold-400"
                      >
                        <option value="Business Law">Business Law &amp; LLC Formation</option>
                        <option value="Real Estate Law">Real Estate Law &amp; Deeds</option>
                        <option value="Wills, Trusts & Probate">Wills, Trusts &amp; Probate</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-brand-navy-900 font-bold uppercase tracking-wider text-[10px]">Preferred Consultation Callback Method</label>
                    <div className="flex gap-6 pt-1 text-brand-charcoal">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="preferredContact" 
                          value="phone" 
                          checked={form.preferredContact === 'phone'} 
                          onChange={handleInputChange}
                          className="accent-brand-gold-500 cursor-pointer"
                        />
                        <span>Callback on direct Phone</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="preferredContact" 
                          value="email" 
                          checked={form.preferredContact === 'email'} 
                          onChange={handleInputChange}
                          className="accent-brand-gold-500 cursor-pointer"
                        />
                        <span>Reply through safe Email</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-brand-navy-900 font-bold uppercase tracking-wider text-[10px]" htmlFor="userMessage">Confidential Intake Briefing</label>
                    <textarea 
                      name="message" 
                      id="userMessage" 
                      rows={4} 
                      required 
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Outline details such as surviving family heirs, deed dates, boundary disputes, or partnership deadlines..."
                      className="w-full bg-brand-warm-white border border-brand-gold-600/15 rounded p-3 text-brand-navy-950 focus:outline-none focus:border-brand-gold-400 font-medium"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-navy-900 hover:bg-brand-navy-950 text-white border border-brand-gold-600/30 py-3.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send size={12} className="text-brand-gold-500" />
                    Send Secure Encrypted Inquiries
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. PHYSICAL MAP FRAME */}
      <section className="h-96 w-full relative border-t border-brand-gold-600/10">
        <iframe
          title="Florence & Florence Chambers directions map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.2934091924618!2d-94.7335688!3d32.5028562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363eed5f1e56cf%3A0xc0cd90fbcfa3ef2!2s104%20E%20Hoyt%20Dr%2C%20Longview%2C%20TX%2075601!5e0!3m2!1sen!2sus!4v1716223400000!5m2!1sen!2sus"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  );
}
