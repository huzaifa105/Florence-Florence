/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'attorneys'
  | 'practice_areas'
  | 'practice_business'
  | 'practice_realestate'
  | 'practice_probate'
  | 'case_results'
  | 'testimonials'
  | 'faq'
  | 'blog'
  | 'contact';

export interface PracticeArea {
  id: string;
  pageId: PageId;
  title: string;
  shortDesc: string;
  icon: string;
  fullDesc: string;
  problems: string[];
  firmSolutions: string[];
  processSteps: { title: string; desc: string }[];
  scenarios: { situation: string; solution: string }[];
  faqs: { q: string; a: string }[];
  imageUrl: string;
}

export interface CaseResult {
  id: string;
  category: string;
  title: string;
  challenge: string;
  strategy: string;
  outcome: string;
  confidentialName: string;
  detailStory: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  relationship: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  author: string;
  imageUrl: string;
  tags: string[];
}

export interface ConsultationFormState {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
  preferredContact: 'phone' | 'email';
}
