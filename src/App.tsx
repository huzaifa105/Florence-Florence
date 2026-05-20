/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, ConsultationFormState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Attorneys from './pages/Attorneys';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import CaseResults from './pages/CaseResults';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultationSubmit = (formData: ConsultationFormState) => {
    console.log('Secure intake submitted internally:', formData);
    // Real-time backend handler simulation
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onSubmitConsultation={handleConsultationSubmit} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'attorneys':
        return <Attorneys onNavigate={handleNavigate} />;
      case 'practice_areas':
        return <PracticeAreas onNavigate={handleNavigate} />;
      case 'practice_business':
        return <PracticeAreaDetail practiceId="business" onNavigate={handleNavigate} />;
      case 'practice_realestate':
        return <PracticeAreaDetail practiceId="realestate" onNavigate={handleNavigate} />;
      case 'practice_probate':
        return <PracticeAreaDetail practiceId="probate" onNavigate={handleNavigate} />;
      case 'case_results':
        return <CaseResults onNavigate={handleNavigate} />;
      case 'testimonials':
        return <Testimonials onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} onSubmitConsultation={handleConsultationSubmit} />;
      default:
        return <Home onNavigate={handleNavigate} onSubmitConsultation={handleConsultationSubmit} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-warm-white text-brand-navy-950 font-sans selection:bg-brand-gold-500/30 selection:text-brand-navy-950">
      
      {/* Dynamic Header Block */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Core View Area with Framer Motion Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="w-full h-full"
            id={`page-container-${currentPage}`}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer Block with maps frame */}
      <Footer onNavigate={handleNavigate} />
      
    </div>
  );
}

