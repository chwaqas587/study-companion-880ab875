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

export const courses: CourseData[] = [
  {
    slug: "amc-mcq-preparation",
    title: "AMC MCQ Preparation",
    subtitle: "Australian Medical Council",
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
];

export const getCourseBySlug = (slug: string) => courses.find(c => c.slug === slug);
