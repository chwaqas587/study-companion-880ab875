export interface CourseModule {
  title: string;
  topics: string[];
}

export interface FacultyMember {
  name: string;
  role: string;
  initials: string;
}

export interface CourseData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  speciality: string;
  exam: string;
  country: string;
  tag: string;
  duration: string;
  students: string;
  rating: string;
  description: string;
  heroDescription: string;
  batchStart: string;
  learningFormat: string;
  keyDeliverables: string[];
  whySection: {
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  aboutCourse: string[];
  whoIsItFor: string[];
  extras: { title: string; description: string }[];
  curriculum: CourseModule[];
  faculty: FacultyMember[];
  testimonials: { name: string; quote: string }[];
  examInfo: {
    title: string;
    description: string[];
    eligibility: string[];
    procedure: { step: string; detail: string }[];
  };
}

export const specialities = [
  "All Courses",
  "Doctor",
  "Pharmacist",
  "Nurses",
  "Dentist",
  "Physiotherapist",
  "Medical Laboratory Technologist",
  "Veterinary Doctor",
  "Optometrist",
  "Healthcare Professionals",
];

export const exams = [
  "AMC Exam",
  "PLAB Exam",
  "DHA Exam",
  "MOH Exam",
  "HAAD Exam",
  "SMLE Exam",
  "NZREX Exam",
  "USMLE Exam",
  "NCLEX Exam",
  "APC Exam",
  "KAPS Exam",
  "OET Exam",
  "IELTS Exam",
  "GPAT Exam",
  "ADC Exam",
  "SPLE Exam",
  "AIMS Exam",
  "Gulf Dental Exam",
  "HCPC Registration",
  "PTE Exam",
];

export const countries = [
  "Australia",
  "India",
  "Bahrain",
  "Dubai",
  "UAE",
  "Kuwait",
  "Oman",
  "Qatar",
  "Saudi Arabia",
  "Abu Dhabi",
  "USA",
  "UK",
  "New Zealand",
  "Ireland",
  "Canada",
];

export const courses: CourseData[] = [
  {
    slug: "amc-mcq-preparation",
    title: "AMC MCQ Preparation",
    subtitle: "Australian Medical Council",
    category: "Australia",
    speciality: "Doctor",
    exam: "AMC Exam",
    country: "Australia",
    tag: "Most Popular",
    duration: "12 Weeks",
    students: "3,200+",
    rating: "4.9",
    description: "Comprehensive preparation for AMC CAT MCQ examination with 5000+ practice questions.",
    heroDescription: "Qualify for the Australian Medical Council CAT MCQ Exam with expert-led coaching and structured preparation.",
    batchStart: "01 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Expert-curated video lecture modules from Australian medical faculty",
      "Rigorous practice with AMC-aligned clinical questions",
      "High-yield handouts, AI-mock evaluations, and question banks",
      "1:1 personalised feedback from certified mentors",
      "Community support from alumni network",
    ],
    whySection: {
      title: "Why Practice Medicine In Australia?",
      description: "Australia offers one of the best healthcare systems in the world with excellent career opportunities for international medical graduates.",
      stats: [
        { value: "$180,000+", label: "Average Annual Salary" },
        { value: "10,000+", label: "Current Openings" },
        { value: "185,000+", label: "Visas for Skilled Workers" },
      ],
    },
    aboutCourse: [
      "The AMC MCQ Preparation Course is a structured, assessment-focused program designed to help international medical graduates pass the AMC CAT MCQ examination.",
      "Covering all essential clinical topics over 12 weeks, this course aligns with AMC standards and includes adaptive mock tests, clinical reasoning workshops, and high-yield revision material.",
    ],
    whoIsItFor: [
      "International medical graduates planning to practice in Australia",
      "Doctors preparing for the AMC CAT MCQ for the first time",
      "Those who need structured, exam-focused preparation",
      "Working professionals needing flexible study schedules",
    ],
    extras: [
      { title: "1-On-1 Q&A Sessions", description: "Dedicated doubt-clearing sessions with experienced mentors." },
      { title: "Live + Recorded Sessions", description: "Attend live or catch up with high-quality recordings at your pace." },
      { title: "Extended Course Access", description: "Retain access to all materials well beyond the course duration." },
      { title: "Community Building", description: "Join a network of peers and alumni for ongoing support." },
    ],
    curriculum: [
      { title: "Internal Medicine", topics: ["Cardiology fundamentals", "Respiratory medicine", "Endocrinology", "Gastroenterology"] },
      { title: "Surgery", topics: ["General surgery principles", "Orthopaedics basics", "Emergency surgery", "Surgical anatomy"] },
      { title: "Obstetrics & Gynaecology", topics: ["Antenatal care", "Labour management", "Gynaecological conditions", "Reproductive health"] },
      { title: "Paediatrics", topics: ["Growth and development", "Common childhood illnesses", "Neonatal medicine", "Paediatric emergencies"] },
      { title: "Psychiatry & Ethics", topics: ["Common psychiatric disorders", "Psychopharmacology", "Medical ethics", "Patient communication"] },
    ],
    faculty: [
      { name: "Dr. Sarah Mitchell", role: "AMC Examiner & Senior Physician", initials: "SM" },
      { name: "Dr. Raj Patel", role: "Clinical Medicine Specialist", initials: "RP" },
      { name: "Dr. Emily Chen", role: "Surgery & Emergency Medicine", initials: "EC" },
      { name: "Dr. James O'Brien", role: "Paediatrics & Neonatology", initials: "JO" },
    ],
    testimonials: [
      { name: "Dr. Priya Sharma", quote: "The structured approach and mock exams were game-changers. I cleared AMC MCQ on my first attempt." },
      { name: "Dr. Ahmed Khalil", quote: "The faculty's real-world experience made complex topics easy to understand. Highly recommended!" },
    ],
    examInfo: {
      title: "About the AMC CAT MCQ Examination",
      description: [
        "The AMC CAT MCQ is a computer-adaptive test that assesses the medical knowledge and clinical reasoning of international medical graduates seeking to practice in Australia.",
        "The exam covers all major clinical disciplines and uses adaptive technology to adjust question difficulty based on your performance.",
      ],
      eligibility: [
        "Hold a primary medical qualification listed in the World Directory of Medical Schools",
        "Have completed an internship or equivalent",
        "English language proficiency (IELTS/OET)",
      ],
      procedure: [
        { step: "AMC Application", detail: "Submit your application and documents to the Australian Medical Council." },
        { step: "CAT MCQ Examination", detail: "Computer-adaptive test covering clinical medicine, surgery, OB/GYN, paediatrics, and psychiatry." },
        { step: "Clinical Examination", detail: "Multi-station OSCE-style clinical examination testing practical skills." },
        { step: "Registration", detail: "Apply for medical registration with AHPRA after passing both exams." },
      ],
    },
  },
  {
    slug: "plab-preparation",
    title: "PLAB 1 & 2 Course",
    subtitle: "Professional & Linguistic Assessment",
    category: "United Kingdom",
    speciality: "Doctor",
    exam: "PLAB Exam",
    country: "UK",
    tag: "UK Pathway",
    duration: "16 Weeks",
    students: "2,800+",
    rating: "4.8",
    description: "Complete PLAB preparation including clinical skills training for Part 2 OSCE.",
    heroDescription: "Master both PLAB 1 and PLAB 2 with comprehensive theory and clinical OSCE training for UK medical registration.",
    batchStart: "15 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Comprehensive PLAB 1 theory modules with 3000+ practice questions",
      "PLAB 2 OSCE simulation stations with video feedback",
      "Clinical skills workshops with NHS-experienced faculty",
      "1:1 personalised feedback and study plan guidance",
      "Access to PLAB alumni community in the UK",
    ],
    whySection: {
      title: "Why Work In The UK NHS?",
      description: "The UK National Health Service is one of the largest employers in the world, offering structured career progression for international doctors.",
      stats: [
        { value: "£65,000+", label: "Starting Salary" },
        { value: "8,000+", label: "IMG Vacancies" },
        { value: "30,000+", label: "Doctors Recruited Annually" },
      ],
    },
    aboutCourse: [
      "The PLAB 1 & 2 Course is designed to prepare international medical graduates for both parts of the PLAB examination required for GMC registration in the UK.",
      "Over 16 weeks, you'll master clinical theory for Part 1 and develop essential OSCE skills for Part 2 through simulated clinical encounters.",
    ],
    whoIsItFor: [
      "International medical graduates planning to work in the UK NHS",
      "Doctors preparing for PLAB 1, PLAB 2, or both",
      "Those who want structured OSCE practice with expert feedback",
      "Candidates seeking guidance on UK relocation and job placement",
    ],
    extras: [
      { title: "OSCE Practice Stations", description: "Simulated clinical encounters mirroring the actual PLAB 2 format." },
      { title: "Live + Recorded Sessions", description: "Flexible learning with live classes and on-demand recordings." },
      { title: "UK Job Guidance", description: "Support with CV preparation, interview skills, and NHS applications." },
      { title: "Peer Study Groups", description: "Collaborative learning with fellow PLAB candidates worldwide." },
    ],
    curriculum: [
      { title: "Clinical Medicine for PLAB 1", topics: ["Applied clinical scenarios", "Pharmacology essentials", "Investigation interpretation", "Emergency management"] },
      { title: "Surgery & Orthopaedics", topics: ["Acute surgical emergencies", "Trauma management", "Pre/post-operative care", "Common surgical conditions"] },
      { title: "PLAB 2 OSCE Skills", topics: ["History taking stations", "Clinical examination stations", "Communication & counselling", "Practical procedures"] },
      { title: "Ethics & Law (UK)", topics: ["GMC guidelines", "Consent and capacity", "End-of-life decisions", "Safeguarding"] },
      { title: "Speciality Topics", topics: ["Paediatrics scenarios", "Psychiatry stations", "Obstetrics emergencies", "ENT & Ophthalmology"] },
    ],
    faculty: [
      { name: "Dr. Hannah Wilson", role: "GMC-Registered, NHS Consultant", initials: "HW" },
      { name: "Dr. Vikram Singh", role: "PLAB Examiner & Trainer", initials: "VS" },
      { name: "Dr. Olivia Brown", role: "Emergency Medicine, NHS", initials: "OB" },
      { name: "Dr. Faisal Khan", role: "General Practice, London", initials: "FK" },
    ],
    testimonials: [
      { name: "Dr. Fatima Noor", quote: "The PLAB 2 clinical simulations were incredibly realistic. I passed with flying colours on my first attempt!" },
      { name: "Dr. Michael Osei", quote: "From theory to OSCE practice, every session was perfectly structured. The mentors truly care about your success." },
    ],
    examInfo: {
      title: "About the PLAB Examination",
      description: [
        "The Professional and Linguistic Assessments Board (PLAB) test is the main route for international medical graduates to demonstrate competence to practice in the UK.",
        "PLAB 1 is a written exam testing applied medical knowledge. PLAB 2 is an OSCE testing clinical and communication skills.",
      ],
      eligibility: [
        "Recognised primary medical qualification",
        "Acceptable English language test score (IELTS/OET)",
        "Must pass PLAB 1 before attempting PLAB 2",
      ],
      procedure: [
        { step: "GMC Registration", detail: "Create an account and apply through the General Medical Council website." },
        { step: "PLAB 1 (Written)", detail: "180 single best answer questions covering clinical scenarios." },
        { step: "PLAB 2 (OSCE)", detail: "16-station clinical assessment held in Manchester, UK." },
        { step: "Full Registration", detail: "Complete Foundation Programme or acceptable alternative to gain full GMC registration." },
      ],
    },
  },
  {
    slug: "prometric-exam-prep",
    title: "Prometric Exam Prep",
    subtitle: "Gulf Countries Licensing",
    category: "Gulf Countries",
    speciality: "Doctor",
    exam: "DHA Exam",
    country: "UAE",
    tag: "Fast Track",
    duration: "10 Weeks",
    students: "4,100+",
    rating: "4.9",
    description: "Targeted preparation for DHA, HAAD, MOH, SMLE and other Gulf medical exams.",
    heroDescription: "Fast-track your career in the Gulf with expert preparation for DHA, HAAD, MOH, SMLE, and other Prometric exams.",
    batchStart: "10 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Exam-specific question banks for DHA, HAAD, MOH & SMLE",
      "Subject-wise video lectures from Gulf-experienced faculty",
      "AI-powered mock tests with performance analytics",
      "1:1 mentorship and exam strategy sessions",
      "Dataflow and licensing process guidance",
    ],
    whySection: {
      title: "Why Work In Gulf Countries?",
      description: "Gulf nations offer tax-free salaries, world-class healthcare infrastructure, and excellent quality of life for medical professionals.",
      stats: [
        { value: "$90,000+", label: "Tax-Free Salary" },
        { value: "15,000+", label: "Healthcare Vacancies" },
        { value: "6", label: "Countries Covered" },
      ],
    },
    aboutCourse: [
      "The Prometric Exam Prep course is a fast-track program designed to help medical professionals clear Gulf licensing exams including DHA, HAAD, MOH, and SMLE.",
      "With focused 10-week preparation, exam-specific question banks, and experienced faculty, this course maximises your chances of passing on the first attempt.",
    ],
    whoIsItFor: [
      "Doctors and healthcare professionals planning to work in Gulf countries",
      "Those preparing for DHA, HAAD, MOH, SMLE, or OMSB exams",
      "Candidates wanting focused, exam-specific preparation",
      "Professionals seeking guidance on dataflow and licensing",
    ],
    extras: [
      { title: "Exam-Specific Focus", description: "Targeted content for your specific Gulf licensing exam." },
      { title: "Live + Recorded Sessions", description: "Flexible scheduling with live interaction and recorded replays." },
      { title: "Dataflow Assistance", description: "End-to-end guidance on the dataflow verification process." },
      { title: "Job Placement Support", description: "Connect with healthcare recruiters in UAE, Saudi, Qatar, and more." },
    ],
    curriculum: [
      { title: "Internal Medicine", topics: ["Cardiology & respiratory medicine", "Endocrinology & metabolic disorders", "Infectious diseases", "Nephrology & gastroenterology"] },
      { title: "Surgery & Emergency", topics: ["General surgery principles", "Trauma & emergency medicine", "Anaesthesia basics", "Surgical specialities"] },
      { title: "Pharmacology", topics: ["Drug classifications", "Drug interactions", "Dose calculations", "Pharmacokinetics"] },
      { title: "Obstetrics & Paediatrics", topics: ["High-risk pregnancy", "Neonatal care", "Childhood immunisation", "Growth & development"] },
      { title: "Exam Strategy", topics: ["Time management techniques", "Question interpretation", "Elimination strategies", "Mock test review"] },
    ],
    faculty: [
      { name: "Dr. Ali Reza", role: "DHA-Licensed Physician, Dubai", initials: "AR" },
      { name: "Dr. Nadia Ibrahim", role: "MOH Examiner, Oman", initials: "NI" },
      { name: "Dr. Hassan Sheikh", role: "SMLE Trainer, Riyadh", initials: "HS" },
      { name: "Dr. Meera Joshi", role: "HAAD Specialist, Abu Dhabi", initials: "MJ" },
    ],
    testimonials: [
      { name: "Dr. Ahmed Hassan", quote: "From exam preparation to DHA licensing, the team guided me through every step. Now practising in Dubai!" },
      { name: "Dr. Zara Malik", quote: "The mock tests were incredibly close to the actual exam. Cleared MOH on first attempt with a high score." },
    ],
    examInfo: {
      title: "About Prometric Examinations",
      description: [
        "Prometric exams are computer-based assessments required for medical licensing in Gulf countries including UAE, Saudi Arabia, Oman, Qatar, and Bahrain.",
        "Each country has its own licensing authority (DHA, HAAD, MOH, SMLE, OMSB) but exams follow a similar format testing clinical knowledge.",
      ],
      eligibility: [
        "Valid medical degree from a recognised institution",
        "Completed internship or residency",
        "Dataflow verification of credentials",
      ],
      procedure: [
        { step: "Dataflow Verification", detail: "Submit credentials for primary source verification through the dataflow process." },
        { step: "Exam Registration", detail: "Register for your specific licensing exam (DHA/HAAD/MOH/SMLE) through Prometric." },
        { step: "Computer-Based Test", detail: "MCQ-format exam testing clinical knowledge across medical disciplines." },
        { step: "License & Employment", detail: "Upon passing, apply for your medical license and begin your career in the Gulf." },
      ],
    },
  },
  {
    slug: "nzrex-clinical",
    title: "NZREX Clinical",
    subtitle: "New Zealand Registration Exam",
    category: "New Zealand",
    speciality: "Doctor",
    exam: "NZREX Exam",
    country: "New Zealand",
    tag: "New",
    duration: "14 Weeks",
    students: "1,500+",
    rating: "4.7",
    description: "Focused clinical preparation for New Zealand medical registration examination.",
    heroDescription: "Comprehensive preparation for the NZREX Clinical examination to practice medicine in New Zealand.",
    batchStart: "20 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "OSCE-focused clinical training with NZ-experienced faculty",
      "Comprehensive clinical scenario practice across all stations",
      "High-yield study guides and clinical reasoning frameworks",
      "1:1 personalised feedback on clinical performance",
      "Guidance on NZ registration and relocation process",
    ],
    whySection: {
      title: "Why Practice Medicine In New Zealand?",
      description: "New Zealand offers an outstanding work-life balance, beautiful natural environment, and strong demand for international medical graduates.",
      stats: [
        { value: "NZ$150,000+", label: "Average Salary" },
        { value: "3,000+", label: "Current Vacancies" },
        { value: "Top 10", label: "Healthcare System Globally" },
      ],
    },
    aboutCourse: [
      "The NZREX Clinical Preparation Course is a focused 14-week program designed to help international medical graduates pass the NZREX Clinical examination.",
      "Through structured OSCE practice, clinical reasoning workshops, and expert mentorship, you'll develop the skills and confidence needed for examination success.",
    ],
    whoIsItFor: [
      "International medical graduates planning to practice in New Zealand",
      "Doctors preparing for the NZREX Clinical examination",
      "Those who want structured OSCE practice with experienced mentors",
      "Candidates seeking guidance on NZ medical registration",
    ],
    extras: [
      { title: "Clinical Simulations", description: "Realistic OSCE stations mirroring the actual exam format." },
      { title: "Live + Recorded Sessions", description: "Attend live or study at your own pace with recordings." },
      { title: "NZ Registration Guide", description: "Step-by-step guidance through the MCNZ registration process." },
      { title: "Alumni Network", description: "Connect with doctors already practising in New Zealand." },
    ],
    curriculum: [
      { title: "Clinical Medicine Stations", topics: ["Cardiovascular examination", "Respiratory assessment", "Abdominal examination", "Neurological assessment"] },
      { title: "Communication Skills", topics: ["History taking", "Breaking bad news", "Informed consent", "Patient counselling"] },
      { title: "Emergency Medicine", topics: ["Acute presentations", "Resuscitation protocols", "Trauma assessment", "Critical care basics"] },
      { title: "Procedural Skills", topics: ["IV cannulation", "Wound management", "Joint examination", "Fundoscopy"] },
      { title: "Professional Practice", topics: ["NZ healthcare system", "Cultural competency (Hauora Māori)", "Ethical scenarios", "Professional boundaries"] },
    ],
    faculty: [
      { name: "Dr. Kate Thompson", role: "MCNZ-Registered, Wellington Hospital", initials: "KT" },
      { name: "Dr. Arjun Nair", role: "Emergency Medicine, Auckland", initials: "AN" },
      { name: "Dr. Lisa Park", role: "General Practice, Christchurch", initials: "LP" },
      { name: "Dr. David Morrison", role: "Internal Medicine, Dunedin", initials: "DM" },
    ],
    testimonials: [
      { name: "Dr. Samira Akhtar", quote: "The OSCE practice was spot-on. I felt fully prepared walking into the exam. Now working in Auckland!" },
      { name: "Dr. Carlos Rivera", quote: "Excellent course structure and supportive mentors. The NZ registration guidance was invaluable." },
    ],
    examInfo: {
      title: "About the NZREX Clinical Examination",
      description: [
        "The NZREX Clinical is an OSCE-style examination required for international medical graduates seeking registration with the Medical Council of New Zealand.",
        "The exam tests clinical competence across multiple stations including history taking, examination, diagnosis, and management planning.",
      ],
      eligibility: [
        "Primary medical qualification recognised by MCNZ",
        "English language proficiency (IELTS/OET)",
        "Satisfactory professional standing",
      ],
      procedure: [
        { step: "MCNZ Application", detail: "Apply to the Medical Council of New Zealand and submit required documents." },
        { step: "NZREX Clinical Exam", detail: "Multi-station OSCE examination held in New Zealand." },
        { step: "Provisional Registration", detail: "Obtain provisional registration to begin supervised practice." },
        { step: "General Registration", detail: "Complete supervised practice requirements for full registration." },
      ],
    },
  },
  {
    slug: "usmle-step-1-preparation",
    title: "USMLE Step 1 Preparation",
    subtitle: "United States Medical Licensing",
    category: "USA",
    speciality: "Doctor",
    exam: "USMLE Exam",
    country: "USA",
    tag: "High Demand",
    duration: "20 Weeks",
    students: "2,500+",
    rating: "4.8",
    description: "Comprehensive USMLE Step 1 preparation with expert faculty and extensive question banks.",
    heroDescription: "Master the foundational medical sciences and clinical concepts required to pass USMLE Step 1 with confidence.",
    batchStart: "01 June 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Comprehensive coverage of all Step 1 subjects",
      "6000+ practice questions with detailed explanations",
      "Weekly assessment tests and performance tracking",
      "1:1 mentorship with USMLE-qualified physicians",
      "Study schedule and strategy planning",
    ],
    whySection: {
      title: "Why Practice Medicine In The USA?",
      description: "The United States offers world-class residency training, cutting-edge medical facilities, and some of the highest physician salaries globally.",
      stats: [
        { value: "$250,000+", label: "Average Salary" },
        { value: "30,000+", label: "Residency Positions" },
        { value: "#1", label: "Medical Research" },
      ],
    },
    aboutCourse: [
      "The USMLE Step 1 Preparation Course covers all foundational medical sciences tested on the exam including anatomy, physiology, biochemistry, pharmacology, pathology, and microbiology.",
      "Our 20-week structured program includes daily lectures, weekly assessments, and personalized study plans to maximize your score.",
    ],
    whoIsItFor: [
      "International medical graduates aiming for US residency",
      "Medical students preparing for USMLE Step 1",
      "Those seeking structured, high-yield preparation",
      "Candidates wanting personalized mentorship",
    ],
    extras: [
      { title: "Dedicated Mentors", description: "Paired with a USMLE-qualified mentor throughout your preparation." },
      { title: "High-Yield Resources", description: "Curated study materials focusing on the most tested concepts." },
      { title: "Mock Examinations", description: "Full-length simulated exams mirroring actual test conditions." },
      { title: "Residency Guidance", description: "Support with ERAS application, personal statement, and interview prep." },
    ],
    curriculum: [
      { title: "Basic Sciences", topics: ["Anatomy & Embryology", "Biochemistry & Genetics", "Physiology", "Microbiology & Immunology"] },
      { title: "Pathology & Pharmacology", topics: ["General pathology", "Systemic pathology", "Pharmacokinetics", "Drug mechanisms"] },
      { title: "Organ Systems", topics: ["Cardiovascular", "Respiratory", "Renal", "Gastrointestinal"] },
      { title: "Behavioral Sciences", topics: ["Biostatistics", "Epidemiology", "Ethics", "Patient safety"] },
      { title: "Integration & Review", topics: ["High-yield facts", "Clinical vignette practice", "Cross-topic integration", "Test-taking strategies"] },
    ],
    faculty: [
      { name: "Dr. Robert Chang", role: "USMLE Trainer, New York", initials: "RC" },
      { name: "Dr. Maria Santos", role: "Pathology Specialist", initials: "MS" },
      { name: "Dr. Kevin Williams", role: "Pharmacology Expert", initials: "KW" },
      { name: "Dr. Anita Desai", role: "Step 1 Coach", initials: "AD" },
    ],
    testimonials: [
      { name: "Dr. John Lee", quote: "Scored 245 on Step 1 thanks to the structured approach and amazing mentors. Couldn't have done it without them!" },
      { name: "Dr. Priya Menon", quote: "The question banks and mock exams were incredibly close to the real thing." },
    ],
    examInfo: {
      title: "About the USMLE Step 1",
      description: [
        "USMLE Step 1 assesses whether medical students/graduates understand and can apply foundational scientific concepts to the practice of medicine.",
        "The exam is now pass/fail and remains an essential milestone for US residency applications.",
      ],
      eligibility: [
        "Enrolled in or graduated from a medical school listed in the World Directory",
        "ECFMG certification pathway",
        "Valid identification documents",
      ],
      procedure: [
        { step: "ECFMG Registration", detail: "Register with ECFMG and apply for Step 1." },
        { step: "Schedule Exam", detail: "Book your exam at a Prometric test centre." },
        { step: "Step 1 Exam", detail: "7-hour computer-based exam with 280 questions across 7 blocks." },
        { step: "Next Steps", detail: "Proceed to Step 2 CK and clinical experience for residency matching." },
      ],
    },
  },
  {
    slug: "kaps-pharmacy-preparation",
    title: "KAPS Exam Preparation",
    subtitle: "Knowledge Assessment of Pharmaceutical Sciences",
    category: "Australia",
    speciality: "Pharmacist",
    exam: "KAPS Exam",
    country: "Australia",
    tag: "Pharmacist",
    duration: "10 Weeks",
    students: "1,800+",
    rating: "4.8",
    description: "Targeted preparation for KAPS exam for pharmacists seeking Australian registration.",
    heroDescription: "Comprehensive KAPS exam preparation to help pharmacists achieve Australian Pharmacy Board registration.",
    batchStart: "15 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Complete coverage of all KAPS exam domains",
      "Practice questions aligned with Australian pharmacy standards",
      "Pharmacology and therapeutics deep dives",
      "1:1 mentorship with Australian-registered pharmacists",
      "Guidance on AHPRA registration process",
    ],
    whySection: {
      title: "Why Be A Pharmacist In Australia?",
      description: "Australia has a strong demand for pharmacists with competitive salaries and excellent work-life balance.",
      stats: [
        { value: "AU$90,000+", label: "Average Salary" },
        { value: "5,000+", label: "Job Openings" },
        { value: "High", label: "Demand Growth" },
      ],
    },
    aboutCourse: [
      "The KAPS Exam Preparation Course covers pharmaceutical sciences, pharmacology, therapeutics, and pharmacy practice required for Australian pharmacy registration.",
      "Our structured 10-week program ensures thorough preparation with practice exams and expert guidance.",
    ],
    whoIsItFor: [
      "International pharmacists planning to work in Australia",
      "Pharmacy graduates preparing for KAPS examination",
      "Those seeking structured exam-focused preparation",
      "Professionals needing AHPRA registration guidance",
    ],
    extras: [
      { title: "Expert Pharmacist Mentors", description: "Learn from Australian-registered pharmacists." },
      { title: "Practice Exams", description: "Mock tests mirroring the actual KAPS format." },
      { title: "Study Materials", description: "Comprehensive notes and reference guides." },
      { title: "Registration Support", description: "Step-by-step AHPRA registration guidance." },
    ],
    curriculum: [
      { title: "Pharmaceutical Sciences", topics: ["Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacognosy", "Biopharmaceutics"] },
      { title: "Pharmacology", topics: ["General pharmacology", "Systemic pharmacology", "Clinical pharmacology", "Toxicology"] },
      { title: "Therapeutics", topics: ["Disease management", "Drug therapy optimization", "Patient counselling", "Evidence-based practice"] },
      { title: "Pharmacy Practice", topics: ["Dispensing", "Medication management", "Professional ethics", "Australian pharmacy law"] },
    ],
    faculty: [
      { name: "Dr. Rachel Adams", role: "AHPRA-Registered Pharmacist", initials: "RA" },
      { name: "Dr. Sunil Kapoor", role: "Pharmacology Specialist", initials: "SK" },
      { name: "Dr. Amy Nguyen", role: "Clinical Pharmacy Expert", initials: "AN" },
    ],
    testimonials: [
      { name: "Pharmacist Riya Patel", quote: "Cleared KAPS on my first attempt! The course was perfectly structured." },
      { name: "Pharmacist Ali Rahman", quote: "The mentors were incredibly supportive and the mock exams were spot-on." },
    ],
    examInfo: {
      title: "About the KAPS Examination",
      description: [
        "KAPS is the Knowledge Assessment of Pharmaceutical Sciences required for overseas-trained pharmacists seeking registration in Australia.",
        "The exam covers pharmaceutical sciences, pharmacology, and pharmacy practice.",
      ],
      eligibility: [
        "Pharmacy qualification from a recognised institution",
        "English language proficiency",
        "Skills assessment by the Australian Pharmacy Council",
      ],
      procedure: [
        { step: "APC Assessment", detail: "Submit qualifications to the Australian Pharmacy Council." },
        { step: "KAPS Exam", detail: "Computer-based exam covering pharmaceutical sciences." },
        { step: "Intern Year", detail: "Complete supervised practice in an Australian pharmacy." },
        { step: "AHPRA Registration", detail: "Apply for full registration with AHPRA." },
      ],
    },
  },
  {
    slug: "nclex-rn-preparation",
    title: "NCLEX-RN Preparation",
    subtitle: "National Council Licensure Examination",
    category: "USA",
    speciality: "Nurses",
    exam: "NCLEX Exam",
    country: "USA",
    tag: "Nursing",
    duration: "12 Weeks",
    students: "3,500+",
    rating: "4.9",
    description: "Comprehensive NCLEX-RN preparation for nurses seeking US licensure.",
    heroDescription: "Pass the NCLEX-RN exam with confidence through structured preparation and expert nursing faculty.",
    batchStart: "01 June 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Complete NCLEX-RN content review across all domains",
      "4000+ practice questions with rationales",
      "CAT simulation mock exams",
      "Personalised study plans and mentoring",
      "CGFNS and visa screen guidance",
    ],
    whySection: {
      title: "Why Nurse In The USA?",
      description: "The USA has one of the highest demands for registered nurses, offering excellent salaries, career growth, and immigration pathways.",
      stats: [
        { value: "$85,000+", label: "Average Salary" },
        { value: "200,000+", label: "Nursing Vacancies" },
        { value: "Green Card", label: "Immigration Pathway" },
      ],
    },
    aboutCourse: [
      "The NCLEX-RN Preparation Course is a comprehensive 12-week program designed for internationally educated nurses preparing for US nursing licensure.",
      "Covering all NCLEX-RN domains with adaptive practice tests and expert mentorship.",
    ],
    whoIsItFor: [
      "International nurses seeking US RN licensure",
      "BSc Nursing graduates preparing for NCLEX-RN",
      "Those needing structured NCLEX preparation",
      "Nurses seeking USA immigration guidance",
    ],
    extras: [
      { title: "CAT Mock Tests", description: "Adaptive mock tests that simulate the actual NCLEX experience." },
      { title: "Content Review", description: "Comprehensive review of all nursing domains." },
      { title: "CGFNS Guidance", description: "Help with CGFNS certification and visa screen." },
      { title: "Job Placement", description: "Connect with US healthcare employers." },
    ],
    curriculum: [
      { title: "Safe & Effective Care", topics: ["Management of care", "Safety & infection control", "Delegation", "Quality improvement"] },
      { title: "Health Promotion", topics: ["Growth & development", "Prevention & detection", "Health screening", "Lifestyle choices"] },
      { title: "Psychosocial Integrity", topics: ["Mental health concepts", "Crisis intervention", "Coping mechanisms", "Therapeutic communication"] },
      { title: "Physiological Integrity", topics: ["Basic care & comfort", "Pharmacology", "Reduction of risk", "Physiological adaptation"] },
    ],
    faculty: [
      { name: "Nurse Sarah Johnson", role: "NCLEX Trainer, California", initials: "SJ" },
      { name: "Nurse Maria Lopez", role: "ICU Nurse, New York", initials: "ML" },
      { name: "Nurse David Kim", role: "Nursing Educator", initials: "DK" },
    ],
    testimonials: [
      { name: "Nurse Priya Singh", quote: "Passed NCLEX in 75 questions! The mock tests and content review were perfect." },
      { name: "Nurse James Thomas", quote: "The faculty understood exactly what international nurses need. Now working in Texas!" },
    ],
    examInfo: {
      title: "About the NCLEX-RN Examination",
      description: [
        "The NCLEX-RN is a computerized adaptive test required for nursing licensure in the United States.",
        "The exam tests nursing competency across four major domains with a variable number of questions.",
      ],
      eligibility: [
        "Completed nursing education from a recognised program",
        "CGFNS certification or credential evaluation",
        "State Board of Nursing approval",
      ],
      procedure: [
        { step: "Credential Evaluation", detail: "Submit nursing credentials for evaluation through CGFNS." },
        { step: "State Board Application", detail: "Apply to your chosen state's Board of Nursing." },
        { step: "NCLEX-RN Exam", detail: "Computer-adaptive test with 75-145 questions." },
        { step: "Licensure", detail: "Receive your RN license and begin practicing." },
      ],
    },
  },
  {
    slug: "adc-dental-preparation",
    title: "ADC Exam Preparation",
    subtitle: "Australian Dental Council",
    category: "Australia",
    speciality: "Dentist",
    exam: "ADC Exam",
    country: "Australia",
    tag: "Dental",
    duration: "14 Weeks",
    students: "1,200+",
    rating: "4.7",
    description: "Complete ADC exam preparation for dentists seeking Australian dental registration.",
    heroDescription: "Expert-led preparation for the Australian Dental Council examinations to practice dentistry in Australia.",
    batchStart: "01 June 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "Comprehensive ADC Written exam preparation",
      "Clinical exam practice with dental simulators",
      "Case-based learning with Australian dental standards",
      "1:1 mentorship with ADC-qualified dentists",
      "AHPRA dental registration guidance",
    ],
    whySection: {
      title: "Why Practice Dentistry In Australia?",
      description: "Australia offers excellent career opportunities for dentists with high demand, competitive salaries, and world-class facilities.",
      stats: [
        { value: "AU$150,000+", label: "Average Salary" },
        { value: "3,000+", label: "Dental Vacancies" },
        { value: "Growing", label: "Industry Demand" },
      ],
    },
    aboutCourse: [
      "The ADC Exam Preparation Course covers all components of the Australian Dental Council examinations including written and clinical assessments.",
      "Our 14-week program provides structured preparation with experienced dental faculty.",
    ],
    whoIsItFor: [
      "International dentists planning to practice in Australia",
      "Dental graduates preparing for ADC examinations",
      "Those seeking structured clinical exam preparation",
      "Professionals needing AHPRA registration guidance",
    ],
    extras: [
      { title: "Clinical Simulations", description: "Hands-on practice with dental clinical scenarios." },
      { title: "Case Studies", description: "Australian dental case-based learning." },
      { title: "Exam Strategy", description: "Targeted preparation for both written and clinical components." },
      { title: "Registration Guide", description: "Complete AHPRA dental registration support." },
    ],
    curriculum: [
      { title: "Oral Medicine & Pathology", topics: ["Oral diseases", "Diagnostic methods", "Treatment planning", "Radiographic interpretation"] },
      { title: "Restorative Dentistry", topics: ["Operative dentistry", "Endodontics", "Prosthodontics", "Dental materials"] },
      { title: "Oral Surgery", topics: ["Extraction techniques", "Minor oral surgery", "Local anaesthesia", "Emergency management"] },
      { title: "Clinical Practice", topics: ["Patient management", "Infection control", "Australian dental standards", "Ethics & professionalism"] },
    ],
    faculty: [
      { name: "Dr. Mark Stevens", role: "ADC Examiner, Melbourne", initials: "MS" },
      { name: "Dr. Sana Ahmed", role: "Prosthodontist, Sydney", initials: "SA" },
      { name: "Dr. Tom Wilson", role: "Oral Surgeon, Brisbane", initials: "TW" },
    ],
    testimonials: [
      { name: "Dr. Ravi Kumar", quote: "Cleared both ADC written and clinical on first attempt. The course was comprehensive!" },
      { name: "Dr. Anna Schmidt", quote: "The clinical simulations were incredibly helpful. Now practising in Melbourne!" },
    ],
    examInfo: {
      title: "About the ADC Examination",
      description: [
        "The ADC examination is required for overseas-trained dentists to gain registration with the Dental Board of Australia.",
        "The exam consists of a written component and a clinical component testing dental competency.",
      ],
      eligibility: [
        "Dental qualification from a recognised institution",
        "English language proficiency (IELTS/OET)",
        "Primary source verification of credentials",
      ],
      procedure: [
        { step: "ADC Application", detail: "Apply to the Australian Dental Council for assessment." },
        { step: "Written Exam", detail: "MCQ-based written exam covering dental sciences." },
        { step: "Clinical Exam", detail: "Practical clinical assessment with simulated patients." },
        { step: "AHPRA Registration", detail: "Apply for dental registration upon passing all components." },
      ],
    },
  },
  {
    slug: "oet-preparation",
    title: "OET Preparation Course",
    subtitle: "Occupational English Test",
    category: "English Proficiency",
    speciality: "Healthcare Professionals",
    exam: "OET Exam",
    country: "Australia",
    tag: "Language",
    duration: "8 Weeks",
    students: "5,000+",
    rating: "4.8",
    description: "Targeted OET preparation for healthcare professionals seeking international registration.",
    heroDescription: "Master the Occupational English Test with healthcare-specific language training and exam strategies.",
    batchStart: "01 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "All four OET sub-tests covered: Listening, Reading, Writing, Speaking",
      "Healthcare-specific vocabulary and communication practice",
      "Mock tests with detailed feedback",
      "1:1 speaking practice sessions",
      "Score improvement guarantee",
    ],
    whySection: {
      title: "Why Take The OET?",
      description: "OET is accepted in Australia, UK, New Zealand, Ireland, and other countries as proof of English proficiency for healthcare registration.",
      stats: [
        { value: "12+", label: "Countries Accept OET" },
        { value: "350+", label: "Test Locations" },
        { value: "B+", label: "Target Score" },
      ],
    },
    aboutCourse: [
      "The OET Preparation Course provides healthcare-specific English language training designed to help doctors, nurses, pharmacists, and other health professionals pass the OET.",
      "Our 8-week intensive program covers all four sub-tests with mock exams and personalized feedback.",
    ],
    whoIsItFor: [
      "Healthcare professionals needing OET for registration",
      "Doctors, nurses, pharmacists preparing for OET",
      "Those who have previously attempted OET and need improvement",
      "Professionals seeking healthcare-specific English training",
    ],
    extras: [
      { title: "Speaking Practice", description: "1:1 sessions with experienced OET speaking coaches." },
      { title: "Writing Templates", description: "Healthcare-specific writing templates and frameworks." },
      { title: "Mock Tests", description: "Full-length mock tests under exam conditions." },
      { title: "Score Tracking", description: "Track your progress with detailed analytics." },
    ],
    curriculum: [
      { title: "Listening", topics: ["Clinical consultations", "Workplace communication", "Note-taking strategies", "Practice exercises"] },
      { title: "Reading", topics: ["Healthcare texts", "Speed reading", "Comprehension strategies", "Practice passages"] },
      { title: "Writing", topics: ["Referral letters", "Discharge summaries", "Case notes", "Professional correspondence"] },
      { title: "Speaking", topics: ["Role-play scenarios", "Patient communication", "Clinical explanations", "Professional discussions"] },
    ],
    faculty: [
      { name: "Sarah Williams", role: "OET Trainer, Melbourne", initials: "SW" },
      { name: "James Porter", role: "English Language Specialist", initials: "JP" },
      { name: "Dr. Meena Rao", role: "Healthcare Communication Expert", initials: "MR" },
    ],
    testimonials: [
      { name: "Dr. Fatima Zahra", quote: "Scored B+ in all sub-tests on my first attempt! The speaking practice was invaluable." },
      { name: "Nurse Chen Wei", quote: "Improved from C+ to A in writing. The templates and feedback were excellent." },
    ],
    examInfo: {
      title: "About the OET Examination",
      description: [
        "The Occupational English Test (OET) is an English language test designed specifically for healthcare professionals.",
        "It assesses the language proficiency of healthcare workers who wish to register and practice in English-speaking countries.",
      ],
      eligibility: [
        "Healthcare professional or student",
        "Valid identification",
        "Registration at an OET test centre",
      ],
      procedure: [
        { step: "Registration", detail: "Register for OET at an approved test centre or online." },
        { step: "Preparation", detail: "Complete your preparation across all four sub-tests." },
        { step: "Test Day", detail: "Complete Listening, Reading, Writing, and Speaking sub-tests." },
        { step: "Results", detail: "Receive results within 16 business days." },
      ],
    },
  },
  {
    slug: "dha-pharmacy-preparation",
    title: "DHA Pharmacy Exam Prep",
    subtitle: "Dubai Health Authority - Pharmacist",
    category: "Gulf Countries",
    speciality: "Pharmacist",
    exam: "DHA Exam",
    country: "Dubai",
    tag: "Gulf",
    duration: "8 Weeks",
    students: "2,200+",
    rating: "4.8",
    description: "Targeted DHA exam preparation for pharmacists seeking Dubai healthcare licensure.",
    heroDescription: "Fast-track your pharmacy career in Dubai with expert DHA exam preparation.",
    batchStart: "15 May 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "DHA pharmacy-specific question bank",
      "Pharmacology and clinical pharmacy modules",
      "Mock tests mirroring actual DHA format",
      "1:1 mentorship with Dubai-licensed pharmacists",
      "Dataflow and licensing guidance",
    ],
    whySection: {
      title: "Why Be A Pharmacist In Dubai?",
      description: "Dubai offers tax-free salaries, modern healthcare facilities, and growing demand for qualified pharmacists.",
      stats: [
        { value: "$65,000+", label: "Tax-Free Salary" },
        { value: "2,000+", label: "Pharmacy Jobs" },
        { value: "Growing", label: "Healthcare Sector" },
      ],
    },
    aboutCourse: [
      "The DHA Pharmacy Exam Prep course is a focused 8-week program for pharmacists preparing for the Dubai Health Authority licensing examination.",
      "Covers all DHA pharmacy exam domains with practice questions and expert mentorship.",
    ],
    whoIsItFor: [
      "International pharmacists planning to work in Dubai",
      "Pharmacy graduates preparing for DHA exam",
      "Those seeking focused exam preparation",
      "Professionals needing dataflow guidance",
    ],
    extras: [
      { title: "DHA-Specific Content", description: "Content tailored to DHA pharmacy exam format." },
      { title: "Mock Exams", description: "Realistic mock tests with performance analytics." },
      { title: "Dataflow Support", description: "Complete dataflow verification guidance." },
      { title: "Job Support", description: "Connect with pharmacy employers in Dubai." },
    ],
    curriculum: [
      { title: "Pharmacology", topics: ["Drug classifications", "Drug interactions", "Adverse reactions", "Therapeutic drug monitoring"] },
      { title: "Clinical Pharmacy", topics: ["Patient counselling", "Drug therapy management", "Disease management", "Pharmaceutical care"] },
      { title: "Pharmacy Practice", topics: ["Dispensing", "Inventory management", "UAE pharmacy regulations", "Quality assurance"] },
      { title: "Exam Preparation", topics: ["Question types", "Time management", "Key topics review", "Mock exam practice"] },
    ],
    faculty: [
      { name: "Dr. Yasmin Al-Farsi", role: "DHA-Licensed Pharmacist", initials: "YA" },
      { name: "Dr. Rahul Sharma", role: "Clinical Pharmacist, Dubai", initials: "RS" },
    ],
    testimonials: [
      { name: "Pharmacist Aisha Khan", quote: "Cleared DHA on my first attempt. The focused preparation made all the difference!" },
      { name: "Pharmacist Raj Mehta", quote: "Excellent mock tests and mentorship. Now working in a top Dubai pharmacy." },
    ],
    examInfo: {
      title: "About the DHA Pharmacy Exam",
      description: [
        "The DHA licensing exam for pharmacists is a computer-based assessment required for pharmacy practice in Dubai.",
        "The exam tests pharmaceutical sciences, clinical pharmacy, and Dubai-specific regulations.",
      ],
      eligibility: [
        "Pharmacy degree from a recognised institution",
        "Minimum experience requirements",
        "Dataflow verification",
      ],
      procedure: [
        { step: "Dataflow", detail: "Complete primary source verification." },
        { step: "DHA Application", detail: "Apply through the DHA portal." },
        { step: "Exam", detail: "Computer-based MCQ exam." },
        { step: "License", detail: "Obtain DHA pharmacy license." },
      ],
    },
  },
  {
    slug: "hcpc-physiotherapy-registration",
    title: "HCPC Physiotherapy Registration",
    subtitle: "Health & Care Professions Council",
    category: "United Kingdom",
    speciality: "Physiotherapist",
    exam: "HCPC Registration",
    country: "UK",
    tag: "Allied Health",
    duration: "10 Weeks",
    students: "900+",
    rating: "4.6",
    description: "Complete preparation for HCPC registration for international physiotherapists.",
    heroDescription: "Navigate the HCPC registration process and prepare for practice as a physiotherapist in the UK.",
    batchStart: "01 June 2026",
    learningFormat: "Live Classes + Recordings",
    keyDeliverables: [
      "HCPC application portfolio preparation",
      "UK physiotherapy standards and guidelines",
      "Clinical reasoning workshops",
      "1:1 mentorship with UK-registered physiotherapists",
      "NHS job application support",
    ],
    whySection: {
      title: "Why Be A Physiotherapist In The UK?",
      description: "The UK NHS has a high demand for physiotherapists with excellent career progression and working conditions.",
      stats: [
        { value: "£35,000+", label: "Starting Salary" },
        { value: "5,000+", label: "NHS Vacancies" },
        { value: "Band 5-8", label: "Career Bands" },
      ],
    },
    aboutCourse: [
      "The HCPC Physiotherapy Registration course guides international physiotherapists through the UK registration process.",
      "Covers UK practice standards, clinical reasoning, and portfolio preparation for HCPC applications.",
    ],
    whoIsItFor: [
      "International physiotherapists seeking UK registration",
      "Physiotherapy graduates planning NHS careers",
      "Those needing HCPC portfolio guidance",
      "Professionals seeking UK job placement support",
    ],
    extras: [
      { title: "Portfolio Review", description: "Expert review of your HCPC application portfolio." },
      { title: "UK Standards", description: "Comprehensive UK physiotherapy standards training." },
      { title: "Interview Prep", description: "NHS interview preparation and mock sessions." },
      { title: "Peer Network", description: "Connect with physiotherapists working in the UK." },
    ],
    curriculum: [
      { title: "UK Practice Standards", topics: ["HCPC standards of proficiency", "CSP guidelines", "NHS structure", "Clinical governance"] },
      { title: "Clinical Reasoning", topics: ["Evidence-based practice", "Clinical decision making", "Outcome measures", "Patient-centred care"] },
      { title: "Portfolio Development", topics: ["Competency mapping", "Reflective practice", "CPD evidence", "Professional references"] },
      { title: "NHS Preparation", topics: ["Band structure", "Job applications", "Interview skills", "Visa & relocation"] },
    ],
    faculty: [
      { name: "Dr. Emma Clarke", role: "HCPC-Registered Physiotherapist", initials: "EC" },
      { name: "Dr. Arun Mehta", role: "NHS Physiotherapy Lead", initials: "AM" },
    ],
    testimonials: [
      { name: "PT Sarah Ahmed", quote: "Got my HCPC registration and NHS job within 3 months! The portfolio guidance was essential." },
      { name: "PT Carlos Mendes", quote: "The UK standards training prepared me well for NHS practice." },
    ],
    examInfo: {
      title: "About HCPC Registration",
      description: [
        "The HCPC is the regulatory body for physiotherapists and other allied health professionals in the UK.",
        "International applicants must demonstrate they meet UK standards of proficiency through a portfolio-based application.",
      ],
      eligibility: [
        "Physiotherapy qualification from a recognised institution",
        "English language proficiency (IELTS/OET)",
        "Professional experience documentation",
      ],
      procedure: [
        { step: "HCPC Application", detail: "Submit your application with supporting documents." },
        { step: "Portfolio Assessment", detail: "Your qualifications and experience are assessed against UK standards." },
        { step: "Registration", detail: "Receive HCPC registration upon successful assessment." },
        { step: "NHS Employment", detail: "Apply for NHS physiotherapy positions." },
      ],
    },
  },
];

export const getCourseBySlug = (slug: string) => courses.find(c => c.slug === slug);
