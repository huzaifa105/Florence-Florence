/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PracticeArea, CaseResult, Testimonial, FAQItem, BlogArticle } from './types';

export const FIRM_INFO = {
  name: "Florence & Florence",
  location: "104 E Hoyt Dr, Longview, TX 75601",
  phone: "(903) 758-5698",
  primaryAttorney: "Patricia H Florence",
  firmType: "Private Law Practice",
  firmSize: "Solo Practice",
  established: 1994,
  rating: 4.8, // Elite, authentic representation
  reviewsCount: 32,
  addressShort: "104 E Hoyt Dr, Longview, TX",
  hours: "Monday – Thursday: 8:30 AM – 5:00 PM | Friday: 8:30 AM – 12:00 PM",
  email: "contact@florencelawtx.com", // Professional layout placeholder
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'business',
    pageId: 'practice_business',
    title: 'Business Law',
    shortDesc: 'Strategic guidance for entities, business successions, and transactional contracts designed to secure your commercial enterprise.',
    icon: 'Briefcase',
    fullDesc: 'Choosing the right legal architecture and maintaining clean operational documentation are the pillars of stable business growth. For decades, Florence & Florence has provided businesses in Longview with detailed, careful legal oversight—ranging from new entity formation to sophisticated contract drafting and succession planning.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    problems: [
      'Unstructured partners\' agreements leading to operational deadlock.',
      'Ambiguous contract clauses driving customer or vendor disputes.',
      'Transitioning businesses across family generations without standard tax-efficient frameworks.',
      'Regulatory compliance issues with Texas corporate filings.',
    ],
    firmSolutions: [
      'Custom LLC and corporate structures tailored specifically for private family-owned businesses.',
      'Bulletproof commercial agreement modeling, vendor agreements, and non-disclosure paperwork.',
      'Comprehensive business succession frameworks aligned with your master estate plans.',
      'Proactive general legal consulting for local business operations and contract defense.',
    ],
    processSteps: [
      { title: '1. Intake Consultation', desc: 'We audit your current organizational agreements, risk variables, and growth expectations to outline structural priorities.' },
      { title: '2. Strategic Drafting', desc: 'Our office meticulously writes or reviews contracts, corporate filings, and buy-sell provisions with transparent clauses.' },
      { title: '3. Execution & Training', desc: 'We coordinate full structural adoption, ensuring all partners understand corporate governance guidelines.' },
    ],
    scenarios: [
      {
        situation: 'Two close colleagues starting an retail operations firm without standard protective guidelines.',
        solution: 'Our office drafted an airtight partnership agreement with clear capital contribution provisions, veto rights, and a predefined buy-sell arrangement, preventing future operational disputes.'
      },
      {
        situation: 'A family-owned logistics firm preparing to transition control from retiring elders to an active sibling.',
        solution: 'Developed a comprehensive generational transfer strategy linking corporate share buybacks to the family trust, avoiding costly internal litigation.'
      }
    ],
    faqs: [
      { q: 'Why is a clean LLC operating agreement necessary in Texas?', a: 'Texas law provides default rules, but they rarely match your actual profit distributions, management boundaries, or member exit desires. A bespoke agreement ensures your personal assets stay strictly shielded and custom processes are clearly outlined.' },
      { q: 'How often should a local business review its standard contracts?', a: 'We highly recommend reviewing master agreements every 24 to 36 months to account for statutory changes in commercial codes, and newer liability precedents.' }
    ]
  },
  {
    id: 'realestate',
    pageId: 'practice_realestate',
    title: 'Real Estate Law',
    shortDesc: 'Diligent deed preparation, title examination, and contractual reviews for commercial and high-value residential property transactions.',
    icon: 'Home',
    fullDesc: 'Property transactions command clear title checks, explicit boundaries, and sound covenants. When acquiring or selling real estate in East Texas, early counsel protects your financial capital. Florence & Florence reviews contracts, drafts deeds, and coordinates title inquiries with trusted regional title companies to ensure complete peace of mind.',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    problems: [
      'Hidden title clouds, old liens, or unresolved easements blocking sales.',
      'Unbalanced commercial lease contracts exposing tenants to sudden financial surcharges.',
      'Ambiguity regarding property partitions among heirs following probate.',
      'Boundary disputes or unrecorded easement restrictions from adjacent holdings.',
    ],
    firmSolutions: [
      'Independent title examinations, curative deed preparations, and clear title resolution filings.',
      'Strategic commercial lease review, negotiation support, and customized residential closing instruments.',
      'Heirship property partition deeds, life estate contracts, and easement agreements.',
      'Legal guidance on physical property boundaries, easements, and municipal land covenants.',
    ],
    processSteps: [
      { title: '1. Title & Document Audit', desc: 'We compile and review the historical record of title covenants, existing lease options, and purchase offer sheets.' },
      { title: '2. Corrective Drafting', desc: 'Our office resolves clouds on title by drafting curatives, clear deeds, or customized real estate instruments.' },
      { title: '3. Secured Closing', desc: 'We guide transaction closings alongside title officers, ensuring all statutory terms in Texas are verified.' },
    ],
    scenarios: [
      {
        situation: 'Buyer purchasing a commercial parcel with an unrecorded 1970 easement that limited access from Hoyt Drive.',
        solution: 'Our office successfully negotiated a curative utility amendment with the adjoining owners, securing the buyer\'s transport corridors before funds cleared.'
      },
      {
        situation: 'Co-heirs inheriting several rural parcels in Gregg County wishing to split the acreage without litigation.',
        solution: 'Prepared unified, mutually agreeable voluntary partition deeds with precise surveyed parameters, preserving family relationships.'
      }
    ],
    faqs: [
      { q: 'Does title insurance replace the need for a real estate lawyer?', a: 'Underwriting insures against historic record defects, but a title insurance company will not advise on transaction terms, zoning, or your personal legal liability. Our legal counsel ensures your deal is structured explicitly in your interest.' },
      { q: 'What is a life estate deed in Texas?', a: 'It is an instrument transferring property rights to an heir while preserving your absolute right to live on and use the land during your lifetime, entirely avoiding traditional probate for that specific asset.' }
    ]
  },
  {
    id: 'probate',
    pageId: 'practice_probate',
    title: 'Wills, Trusts & Probate',
    shortDesc: 'Compassionate estate mapping, clear asset transition planning, and reassuring estate administration during emotional times.',
    icon: 'FileText',
    fullDesc: 'Securing your family\'s legacy calls for gentle legal guidance and detailed planning. We help you establish comprehensive estate plans that reflect your goals, prevent family disputes, and ensure structured transfers. For families grieving a loss, we offer supportive probate administration to settle estates carefully.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    problems: [
      'Absence of a certified Will leading to intestacy distribution under rigid Texas laws.',
      'Prolonged and confusing probate processes that leaves executors stranded without guidance.',
      'Ill-defined healthcare directives creating immense distress among children during medical crises.',
      'Tax exposure or dynamic asset structures that are vulnerable to unnecessary partition fees.',
    ],
    firmSolutions: [
      'Bespoke Last Wills and Testaments, Durable Financial Powers of Attorney, and Living Wills.',
      'Revocable Living Trusts, Special Needs Trusts, and protective assets transfer mechanisms.',
      'Guided independent and dependent administration of estates, muniment of title filing, and small estate affidavits.',
      'Comprehensive healthcare decisions planning, directive declarations, and trusted guardian designations.',
    ],
    processSteps: [
      { title: '1. Compassionate Listening', desc: 'We speak in detail to map your family relationships, financial portfolio, and specific legacy requests.' },
      { title: '2. Bespoke Estate Design', desc: 'Our office prepares an integrated plan, detailing the roles of executors, trustees, and anatomical directives.' },
      { title: '3. Signature & Safeguarding', desc: 'We execute complete estate instruments in our office under high statutory standards, giving you total peace of mind.' },
    ],
    scenarios: [
      {
        situation: 'An estate transition where a family was facing probate confusion without a clear administrator.',
        solution: 'Guided the named executor through a streamlined independent probate administration, cataloging assets under statutory requirements, and completing distributions in less than six months.'
      },
      {
        situation: 'A couple seeking to protect minor children and secure their residential property if they both pass away.',
        solution: 'Developed custom Wills incorporating testamentary trusts for minors, ensuring funds are structured for education and managed by a chosen, trusted guardian.'
      }
    ],
    faqs: [
      { q: 'What is independent administration in Texas probate?', a: 'Texas allows standard probate to run with minimal court supervision if specified in a Will. This cuts down administration costs significantly and expedites asset distribution to beneficiaries.' },
      { q: 'Is a Will valid if it is not notarized?', a: 'Under Texas laws, a Will is technically valid if signed by witnesses, but a self-proving affidavit—which requires notarization—makes the probate process much faster as witnesses are not required to testify in court.' }
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personalized Legal Attention',
    desc: 'You work directly with Ms. Florence, our solo practitioner. Your case will never be handed off to a junior paralegal.',
    icon: 'UserCheck'
  },
  {
    title: 'Compassionate Representation',
    desc: 'We pair deep legal knowledge with absolute patience, understanding that the legal situations you face are highly emotional.',
    icon: 'Heart'
  },
  {
    title: 'Transparent Communication',
    desc: 'No confusing legal jargon. We explain laws, court processes, and fee calculations simply and clearly upfront.',
    icon: 'MessageSquareText'
  },
  {
    title: 'Detail-Oriented Strategy',
    desc: 'Each contract, Will, or real estate deed is carefully written and triple-checked to conform to precise legislative requirements.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Longview Community Focus',
    desc: 'For decades, we have called Longview home. We understand local court rules, municipal codes, and regional concerns deeply.',
    icon: 'MapPin'
  },
  {
    title: 'Trusted Local Reputation',
    desc: 'Our solo practice is built on referral networks, backed by a hard-earned reputation for integrity, trust, and care.',
    icon: 'Award'
  }
];

export const ATTORNEY_PROFILE = {
  name: "Patricia H Florence",
  title: "Founder & Lead Attorney",
  portraitUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  bioHeadline: "A Career Built on Calm, Compassionate Legal Advocacy",
  fullBio: "Patricia H Florence established her solo private law practice in Longview with a singular philosophy: high-quality legal services must be approachable, gentle, and transparent. Over thirty years in practice, Ms. Florence has guided hundreds of families through the complexities of probate administration, estate mapping, and complex land transactions in Gregg, Harrison, and Upshur counties.\n\nShe believes that clear communication is an attorney's absolute duty. Clients facing critical transitions—whether they are incorporating a family-owned trade business, negotiating real estate documents, or mourning a loved one—find calm reassurance and dedicated focus in her chambers.\n\nWhen not reading state property files, Patricia participates in Longview historical preservation projects and supports business literacy workshops.",
  philosophy: "Legal challenges should not divide families or freeze businesses. By planning with foresight and counseling with compassion, we can outline reliable outcomes, giving our clients final peace of mind.",
  credentials: {
    education: [
      "Juris Doctor (J.D.) – Southern Methodist University Dedman School of Law",
      "Bachelor of Arts in English Literature – The University of Texas at Austin"
    ],
    barAdmissions: [
      "State Bar of Texas, Admitted 1993",
      "U.S. District Court for the Eastern District of Texas"
    ],
    memberships: [
      "Gregg County Bar Association",
      "Real Estate, Probate and Trust Law Section, State Bar of Texas",
      "Longview Chamber of Commerce"
    ]
  },
  supportStaff: [
    {
      name: "Brenda K. Rogers",
      role: "Senior Legal Assistant & Probate Coordinator",
      bio: "Brenda manages administrative probate schedules and commercial real estate titles filings. For 14 years, she has kept client files meticulous and provided warm help on the telephone."
    }
  ]
};

export const CASE_RESULTS: CaseResult[] = [
  {
    id: 'res-1',
    category: 'Probate Settlement Guidance',
    title: 'Independent Administration with Complicated Assets Split',
    challenge: 'A deceased Longview resident left an estate involving scattered land interests, and historical business investments across three East Texas counties. The heirs were highly anxious about tax liability and court hearings.',
    strategy: 'Our firm initiated independent estate administration in Gregg County, compiled a complete asset catalog, drafted clear partition deeds, and worked closely with land agents to resolve complex title details.',
    outcome: 'Estate resources divided smoothly under the strict parameters of the Will. The family avoided disputes, with all titles transferred within six months, maintaining total emotional stability and peace of mind.',
    confidentialName: 'Estate of M. G. (Gregg County Probate)',
    detailStory: 'The heirs lived outside Texas, which would normally make local execution difficult. By setting up remote signatures and handling Gregg county documents directly, we spared them expensive travel and minimized court contact.'
  },
  {
    id: 'res-2',
    category: 'Business Dispute Resolutions',
    title: 'Resolution of Multi-Partner Corporate Operating Deadlock',
    challenge: 'Two equal owners of a Longview manufacturing business reached a severe deadlock regarding business expansion, risking operational collapse due to the lack of an exit provision in their outdated agreements.',
    strategy: 'Patricia Florence analyzed the historical documents and proposed a structured mediation. We drafted a voluntary buy-sell plan, detailing the precise valuation metrics and asset transfers.',
    outcome: 'One owner completed a structured buy-out without standard court litigation, keeping the plant operating and preserving their hard-earned local relationship.',
    confidentialName: 'In re: Longview Specialty Manufacturing Corp.',
    detailStory: 'Litigation of deadlocks often drains a solid firm\'s cash reserves. Our calm intervention focused on financial separation instead of legal games, preserving jobs and avoiding operational bankruptcy.'
  },
  {
    id: 'res-3',
    category: 'Property Transaction Assistance',
    title: 'Resolving Clouds on Multi-Acre Country Parcel Title',
    challenge: 'An elderly client selling a historical 40-acre rural parcel was blocked when a title company discovered unsigned easements and unreleased mechanics\' liens dating back to the late 1960s.',
    strategy: 'We performed dynamic historical record searches, drafted clear lien release affidavits, located previous easement holders, and finalized corrective titles filings.',
    outcome: 'Cleared the entire tract of historical liens and resolved easement clouds, allowing a highly profitable real estate closing to proceed under strict safety.',
    confidentialName: 'Residential Land Clearance (Gregg County land files)',
    detailStory: 'Title companies often flag complex, ancient documents that buyers don\'t know how to resolve. We solved the problem by researching historical records and drafting curative affidavits that satisfied underwriting.'
  },
  {
    id: 'res-4',
    category: 'Estate Planning Success',
    title: 'Complete Estate Protection Framework for Blended Family',
    challenge: 'An active local couple with children from previous relationships was anxious about securing their residential homestead and keeping heirlooms safe from potential estate disputes.',
    strategy: 'Ms. Florence designed separate custom Wills incorporating a robust trust structure alongside living Wills, durable medical proxies, and clear homestead remainder deeds.',
    outcome: 'The client secured their family interests with absolute precision, protecting all children and eliminating potential future conflicts.',
    confidentialName: 'The Miller Family Protection Estate Drafts',
    detailStory: 'Blended families require highly clear and specific trust stipulations to ensure that children from all lineages are treated fairly. Our client reported that writing these provisions brought them total comfort.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Daniel S.',
    location: 'Longview, TX',
    rating: 5,
    text: 'When my mother passed away, I had absolutely no idea where to begin with Texas probate. Patricia H Florence sat down with us, listened, and spoke to my sister and me like real people. She handled the entire administration flawlessly and was always there to take our calls. Her gentle legal guidance brought us complete calm during our darkest days.',
    date: 'February 12, 2026',
    relationship: 'Probate Client'
  },
  {
    id: 'test-2',
    author: 'Sandra & Robert V.',
    location: 'White Oak, TX',
    rating: 5,
    text: 'We went to Ms. Florence to rewrite our estate documents after 20 years. We were highly impressed with her absolute professionalism and attention to detail. She explained wills and trusts in simple terms and helped us make solid choices. We highly recommend her to anyone looking for premium, compassionate estate planning in East Texas.',
    date: 'April 3, 2026',
    relationship: 'Wills & Trust Clients'
  },
  {
    id: 'test-3',
    author: 'Mark T.',
    location: 'Longview, TX',
    rating: 5,
    text: 'As a local commercial property developer, I rely on clean deeds and solid contracts. Patricia Florence has reviewed our real estate contracts and land lease instruments for over a decade. Her detail-oriented legal strategy and deep understanding of Gregg county records have saved us thousands in potential disputes. An absolute resource for East Texas businesses.',
    date: 'January 20, 2026',
    relationship: 'Real Estate & Business Consulting Client'
  },
  {
    id: 'test-4',
    author: 'Elizabeth M.',
    location: 'Gladewater, TX',
    rating: 5,
    text: 'Ms. Florence represented us in setting up our private family partnership. Her warm, client-friendly demeanor combined with her massive depth of experience was incredible. It is rare to find an experienced attorney who balances strict professional excellence with such genuine compassion.',
    date: 'May 10, 2026',
    relationship: 'Business Succession Client'
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is Florence & Florence located and do you offer in-person meetings?',
    answer: 'Our physical office is located at 104 E Hoyt Dr in Longview, Texas. We welcome clients to our comfortable, secure main hall by appointment, prioritizing individual privacy and dedicated, peaceful legal consultations.'
  },
  {
    id: 'faq-2',
    category: 'Estate Planning',
    question: 'What is the main difference between a Will and a Living Trust in Texas?',
    answer: 'A Last Will and Testament directs how assets are distributed after you pass away and must undergo court probate before executor distribution. A Living Trust actively holds title to your assets during your lifetime, letting those assets pass instantly to your beneficiaries outside of court probate when you pass away, which maintains secure privacy.'
  },
  {
    id: 'faq-3',
    category: 'Probate',
    question: 'How long does the Texas probate process usually take?',
    answer: 'A standard independent probate administration for a clear estate with an established Will usually concludes in four to seven months. However, if a person passes away without a Will (intestacy), finding heirships and securing court approvals can easily extend the process to over a year. Early, compassionate consultation speeds up resolution.'
  },
  {
    id: 'faq-4',
    category: 'Real Estate',
    question: 'How do you help resolve boundary or deed issues during a transaction?',
    answer: 'We draft corrective deeds, file title curative instruments, and work directly with Gregg County surveyors and title companies. By establishing clear physical boundaries and lien releases early, we ensure that you can buy or sell your country land safely.'
  },
  {
    id: 'faq-5',
    category: 'Consultation',
    question: 'What documents should I prepare for our first consultation?',
    answer: 'For estate planning, please bring high-level descriptions of your assets, deeds to real property, and names of executors. For business inquiries, please bring any existing operating agreements or partnership drafts. Having these files makes our initial audit far more precise.'
  },
  {
    id: 'faq-6',
    category: 'Fees',
    question: 'How does Florence & Florence structure its legal fees?',
    answer: 'We believe in clear and honest billing. Most standard estate planning matters (such as complete Wills or Trusts packages) are structured around straightforward flat fees. Complex business negotiations, estate administration, and property litigation are calculated using clear hourly structures, with all details documented clearly prior to engagement.'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'What Happens During Probate in Texas? A Compassionate Guide',
    category: 'Probate',
    excerpt: 'Losing a loved one is emotionally exhausting. Understanding what Texas courts require can help demystify probate and provide peace of mind.',
    content: 'Texas probate law has a built-in advantage: the process of Independent Administration. When a valid Last Will and Testament designates an Independent Executor, the probate process can run with minimal court involvement and oversight. This saves families time and money.\n\nHere is what to expect during a typical Texas probate route:\n\n1. Filing the Application: We file the Will along with a formal probate application in Gregg County Court.\n2. Notices and Postings: A public posting period ensures any creditors or heirs can raise questions.\n3. Court Hearing: Patricia H Florence accompanies you to a brief in-court appearance where the Judge reviews the Will.\n4. Cataloging Assets: The Executor compiles an Inventory and Appraisement of the estate within 90 days.\n5. Distribution: Assets transfer to the beneficiaries directly as written.\n\nMs. Florence focuses on bringing gentle guidance and legal clarity to this entire sequence, sparing you administrative confusion.',
    publishDate: 'May 14, 2026',
    readTime: '5 min read',
    author: 'Patricia H Florence, J.D.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    tags: ['Probate', 'Texas Law', 'Estate Planning']
  },
  {
    id: 'blog-2',
    title: 'Key Real Estate Contract Mistakes to Avoid in East Texas',
    category: 'Real Estate Law',
    excerpt: 'Purchasing commercial or residential land is a major financial step. Review these common contracting pitfalls before finalizing your agreements.',
    content: 'East Texas real estate contracts are full of unique specifications. From oil, gas, and mineral rights to historic easements, standard Texas Real Estate Commission (TREC) forms often need customized modifications to address your specific land usage goals.\n\nAvoid these three widespread errors:\n\n1. Overlooking Mineral and Royalty Rights: In many regional acquisitions, mineral rights are held separately. If these are not specified in your contracts, you could buy land without its associated subsurface rights.\n2. Incomplete Boundary Surveys: Relying on old land surveys can lead to boundary disputes with neighbors over fences or roads.\n3. Vague Contingency Timelines: Unclear escape clauses for financing and physical property inspections can put your earnest money at risk.\n\nOur legal counsel protects your assets by conducting strict contract reviews and crafting terms designed around your goals.',
    publishDate: 'April 19, 2026',
    readTime: '6 min read',
    author: 'Patricia H Florence, J.D.',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    tags: ['Real Estate', 'Texas Contracts', 'Property Law']
  },
  {
    id: 'blog-3',
    title: 'When Should a Small Business Consult an Attorney?',
    category: 'Business Law',
    excerpt: 'Learn why early legal guidance is far cheaper than reactive litigation, and protect your commercial enterprise from structural mistakes.',
    content: 'Many sole proprietors in Longview run their business without structured agreements, relying on default state rules. However, consulting a business lawyer early in your operations shields you from massive risks.\n\nYou should schedule a legal audit when:\n\n- Bringing on a Business Partner: A detailed Operating Agreement prevents deadlocks by outlining buyback programs and decision formulas.\n- Signing a Commercial Lease: Landlords use complex leases that place maintenance burdens entirely on you. Negotiation keeps your business safe.\n- Planning Your Estate: Your commercial business should be linked directly to your revocable trust to ensure operations don\'t freeze if you pass away.\n\nFlorence & Florence offers warm, clear corporate counsel to help your small business thrive under protective legal structures.',
    publishDate: 'March 11, 2026',
    readTime: '4 min read',
    author: 'Patricia H Florence, J.D.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tags: ['Business Protection', 'Contracts', 'Texas LLC']
  },
  {
    id: 'blog-4',
    title: 'Understanding Wills and Trusts in Texas: Which is Right for You?',
    category: 'Estate Planning',
    excerpt: 'Do you need a Last Will or a Revocable Living Trust? Let us explain the different characteristics in simple, clear terms.',
    content: 'We often hear from clients: "I don\'t need a trust, I don\'t have millions." This is a common misconception. Living Trusts are powerful legal vehicles that can help individuals coordinate quick, seamless estate distributions.\n\nA Will is simple, cost-effective to draft, and lists named guardians for minor children. However, a Will must go through probate court before properties transfer.\n\nA Living Trust holds legal title to your assets, and those assets pass immediately to beneficiaries upon your passing without court intervention. This preserves your family\'s privacy, avoids costly court fees, and prevents delays.\n\nWhether you need a Will or a robust Trust framework depends on your specific goals. Contact our Longview office to schedule a compassionate review and outline the right path for you.',
    publishDate: 'February 2, 2026',
    readTime: '7 min read',
    author: 'Patricia H Florence, J.D.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    tags: ['Estate Planning', 'Wills & Trusts', 'Texas Estates']
  }
];
