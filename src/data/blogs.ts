export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: { name: string; role: string; initials: string };
  category: string;
  tags: string[];
  readTime: string;
  image: string;
  isFeatured?: boolean;
}

export const blogs: BlogPost[] = [
  {
    slug: "complete-guide-amc-cat-exam-2026",
    title: "The Complete Guide to AMC CAT MCQ Exam in 2026",
    excerpt: "Everything you need to know about the AMC CAT exam — eligibility, format, preparation tips, and common mistakes to avoid.",
    content: [
      "The Australian Medical Council Computer Adaptive Test (AMC CAT) is a critical milestone for international medical graduates seeking to practice medicine in Australia. In this comprehensive guide, we'll walk you through everything you need to know to prepare effectively for the 2026 examination cycle.",
      "## Understanding the AMC CAT Format\n\nThe AMC CAT is a computer-adaptive multiple-choice examination that adjusts difficulty based on your performance. The exam consists of 150 questions covering the breadth of clinical medicine, with a time limit of 3.5 hours. Questions are weighted across medicine, surgery, obstetrics & gynaecology, paediatrics, and psychiatry.",
      "## Eligibility Requirements\n\nTo sit for the AMC CAT, you must hold a primary medical qualification from a recognized medical school and have completed at least 12 months of supervised clinical practice. You'll also need to submit your documents through the AMC portal, including your medical degree, internship certificate, and identity documents.",
      "## High-Yield Study Topics\n\nBased on recent exam trends, the following areas consistently carry high weightage: Emergency medicine presentations, Pharmacology (especially drug interactions and side effects), Clinical investigations and their interpretation, Preventive health and screening guidelines specific to Australia, and Mental health assessment and management.",
      "## Study Timeline & Strategy\n\nWe recommend a minimum of 4-6 months of dedicated preparation. Start with a diagnostic assessment to identify weak areas, then build a structured study plan. Allocate 60% of your time to weak areas and 40% to maintaining strong areas. Practice at least 2,000 MCQs before your exam date.",
      "## Common Mistakes to Avoid\n\nMany candidates fail because they rely solely on international textbooks without studying Australian clinical guidelines. The AMC CAT specifically tests Australian standards of care, so make sure you're familiar with Therapeutic Guidelines, eTG, and Australian prescribing practices.",
    ],
    date: "2026-04-01",
    author: { name: "Dr. Sarah Mitchell", role: "AMC Expert & Medical Educator", initials: "SM" },
    category: "AMC",
    tags: ["AMC", "CAT Exam", "Study Guide", "Australia"],
    readTime: "8 min read",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    slug: "plab-vs-amc-which-pathway",
    title: "PLAB vs AMC: Which Pathway Is Right for You?",
    excerpt: "A detailed comparison of the UK and Australian medical licensing pathways for international medical graduates.",
    content: [
      "Choosing between the UK and Australia as your destination for medical practice is a major career decision. Both countries offer structured pathways for IMGs, but the requirements, timelines, and career prospects differ significantly. Let's break it down.",
      "## The PLAB Pathway (United Kingdom)\n\nThe Professional and Linguistic Assessments Board (PLAB) exam is the route to GMC registration for most IMGs. It consists of two parts: PLAB 1 (MCQ) and PLAB 2 (OSCE). PLAB 1 tests applied medical knowledge, while PLAB 2 assesses clinical and communication skills through simulated patient encounters.",
      "## The AMC Pathway (Australia)\n\nThe Australian Medical Council pathway involves the CAT MCQ exam followed by the Clinical exam. The CAT is computer-adaptive, and the Clinical exam consists of 16 OSCE-style stations. Australia also offers a workplace-based assessment pathway through accredited hospitals.",
      "## Cost Comparison\n\nPLAB 1 costs approximately £259, and PLAB 2 costs £930. The AMC CAT costs AUD $3,340, and the Clinical exam costs AUD $4,850. While the AMC pathway is more expensive upfront, Australian medical salaries are generally higher, especially for junior doctors.",
      "## Timeline Comparison\n\nThe PLAB pathway can be completed in 6-12 months if you pass both parts on the first attempt. The AMC pathway typically takes 8-18 months. However, waiting times for exam dates can vary significantly for both pathways.",
      "## Career Prospects\n\nBoth countries face doctor shortages, particularly in rural areas. Australia offers structured training programs with clear progression, while the UK's NHS provides broad clinical exposure. Consider factors like lifestyle, family, long-term residency goals, and specialty availability when making your decision.",
    ],
    date: "2026-03-18",
    author: { name: "Dr. Emily Clarke", role: "PLAB 2 Examiner & Trainer", initials: "EC" },
    category: "PLAB",
    tags: ["PLAB", "AMC", "Comparison", "Career Guide"],
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    slug: "prometric-exam-preparation-tips",
    title: "Top 10 Prometric Exam Preparation Tips for Gulf Licensing",
    excerpt: "Expert tips to help you ace your DHA, HAAD, MOH, or QCHP Prometric examination on the first attempt.",
    content: [
      "The Prometric exam is your gateway to practicing medicine in the Gulf countries. Whether you're targeting the UAE (DHA/HAAD), Saudi Arabia (MOH), or Qatar (QCHP), these preparation tips will help you maximize your chances of success.",
      "## Tip 1: Know Your Exam Authority\n\nEach licensing authority has slightly different exam formats and passing scores. DHA and HAAD exams tend to focus more on clinical scenarios, while MOH exams may include more basic science questions. Research your specific authority's exam blueprint before starting preparation.",
      "## Tip 2: Use Prometric-Specific Question Banks\n\nGeneric USMLE or PLAB question banks won't fully prepare you for Prometric exams. Invest in question banks specifically designed for Gulf licensing exams, as they reflect the exam's unique emphasis on topics like tropical medicine and regional health concerns.",
      "## Tip 3: Master Time Management\n\nMost Prometric exams give you approximately 1-1.5 minutes per question. Practice under timed conditions regularly. If you can consistently complete practice sets with 20% time remaining, you're in good shape.",
      "## Tip 4: Focus on Clinical Pharmacology\n\nDrug-related questions make up a significant portion of Prometric exams. Focus on first-line treatments, drug interactions, contraindications, and dose adjustments for renal and hepatic impairment.",
      "## Tip 5: Don't Neglect Documentation\n\nMany candidates focus entirely on exam preparation and forget about the documentation required for licensing. Start gathering and attesting your documents early — the process can take 2-3 months in some countries.",
    ],
    date: "2026-03-05",
    author: { name: "Dr. Ahmed Al-Farsi", role: "Gulf Licensing Consultant", initials: "AA" },
    category: "Prometric",
    tags: ["Prometric", "DHA", "Gulf", "Study Tips"],
    readTime: "7 min read",
    image: "/placeholder.svg",
  },
  {
    slug: "img-mental-health-managing-exam-stress",
    title: "Managing Exam Stress: A Guide for International Medical Graduates",
    excerpt: "Practical strategies for managing stress and maintaining mental wellbeing during your medical licensing journey.",
    content: [
      "The journey of an international medical graduate is uniquely stressful. You're not just preparing for an exam — you're navigating a new country, managing finances, dealing with visa uncertainties, and often being away from your support system. Here's how to manage it all.",
      "## Recognise the Signs of Burnout\n\nExam preparation burnout is real. Watch for persistent fatigue, difficulty concentrating, irritability, sleep disturbances, and a growing sense of hopelessness about your exam. These are signals to pause and recalibrate, not push harder.",
      "## Build a Sustainable Study Routine\n\nStudying 12+ hours a day is counterproductive. Research shows that 4-6 hours of focused, high-quality study with proper breaks outperforms marathon sessions. Use the Pomodoro technique: 25 minutes of focused study followed by a 5-minute break.",
      "## Connect with Fellow IMGs\n\nIsolation amplifies stress. Join IMG study groups, online communities, or local meetups. Sharing experiences with people on the same journey provides emotional support and practical study tips you won't find in textbooks.",
      "## Physical Health Matters\n\nRegular exercise, adequate sleep (7-8 hours), and proper nutrition directly impact cognitive performance. Even a 20-minute daily walk can reduce cortisol levels and improve memory consolidation.",
      "## Know When to Seek Help\n\nIf stress is overwhelming your ability to function, seek professional help. Many countries offer free or subsidised mental health services. In Australia, Beyond Blue (1300 22 4636) offers free support. In the UK, the NHS provides free mental health services.",
    ],
    date: "2026-02-20",
    author: { name: "Dr. Raj Patel", role: "Senior Faculty, Internal Medicine", initials: "RP" },
    category: "General",
    tags: ["Mental Health", "Wellbeing", "Study Tips", "IMG Life"],
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
  {
    slug: "nzrex-clinical-exam-what-to-expect",
    title: "NZREX Clinical Exam: What to Expect and How to Prepare",
    excerpt: "A detailed walkthrough of the NZREX Clinical examination format, station types, and proven preparation strategies.",
    content: [
      "The NZREX Clinical examination is the final hurdle for international medical graduates seeking registration with the Medical Council of New Zealand. Here's your comprehensive guide to understanding and preparing for this exam.",
      "## Exam Format Overview\n\nThe NZREX Clinical consists of multiple OSCE-style stations, each lasting 8 minutes with 2 minutes of reading time. Stations cover history taking, physical examination, clinical reasoning, procedural skills, and communication scenarios.",
      "## Station Types\n\nExpect a mix of: focused history stations, examination stations with real or simulated patients, investigation interpretation stations, management planning stations, and communication stations (breaking bad news, consent, discharge planning).",
      "## Marking Criteria\n\nEach station is marked across multiple domains: clinical knowledge, clinical skills, communication, professionalism, and safety. The pass mark is determined by borderline regression methodology, meaning the standard is set by the performance of borderline candidates.",
      "## Preparation Strategy\n\nStart preparation 3-4 months before your exam date. Practice with colleagues using OSCE station templates. Record yourself to identify verbal tics, poor eye contact, or time management issues. Join or form a study group — practising with different 'patients' builds adaptability.",
      "## New Zealand-Specific Knowledge\n\nThe NZREX specifically tests knowledge relevant to New Zealand practice. Familiarise yourself with: Hauora Māori (Māori health perspectives), the Treaty of Waitangi principles in healthcare, New Zealand Formulary (NZF) for prescribing, and ACC (Accident Compensation Corporation) processes.",
    ],
    date: "2026-02-08",
    author: { name: "Dr. Liam Chen", role: "NZREX Clinical Examiner", initials: "LC" },
    category: "NZREX",
    tags: ["NZREX", "Clinical Exam", "New Zealand", "OSCE"],
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    slug: "how-to-choose-right-medical-coaching",
    title: "How to Choose the Right Medical Exam Coaching Institute",
    excerpt: "Key factors to evaluate when selecting a coaching institute for your medical licensing exam preparation.",
    content: [
      "With dozens of coaching institutes offering preparation courses for AMC, PLAB, Prometric, and other medical licensing exams, choosing the right one can be overwhelming. Here's a framework to help you make an informed decision.",
      "## Check Faculty Credentials\n\nThe best coaching institutes employ faculty who have either sat and passed the exam themselves or have been trained as examiners. Ask for faculty bios and verify their credentials. Avoid institutes that are vague about who teaches their courses.",
      "## Look at Pass Rates\n\nReputable institutes publish their pass rates. Be cautious of claims like '95% pass rate' without supporting data. Ask how they calculate it — is it first-attempt pass rate or overall? Do they include students who didn't complete the course?",
      "## Evaluate Course Structure\n\nA good course should have: a structured curriculum aligned with the exam blueprint, regular assessments and mock exams, small group sizes for personalised attention, access to question banks and study materials, and post-course support until your exam date.",
      "## Read Student Reviews\n\nLook beyond testimonials on the institute's website. Check independent review platforms, social media groups, and forums. Reach out to past students directly if possible.",
      "## Consider Value, Not Just Price\n\nThe cheapest course isn't always the worst, and the most expensive isn't always the best. Calculate the total cost including accommodation, travel, and materials. Compare what's included — some courses include mock exams and materials, while others charge extra.",
    ],
    date: "2026-01-25",
    author: { name: "Dr. Sarah Mitchell", role: "AMC Expert & Medical Educator", initials: "SM" },
    category: "General",
    tags: ["Coaching", "Preparation", "Advice", "IMG Life"],
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
];
