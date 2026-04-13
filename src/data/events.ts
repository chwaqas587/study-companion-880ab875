export interface EventData {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  time: string;
  location: string;
  type: "webinar" | "workshop" | "seminar" | "conference";
  category: string;
  image: string;
  speakers: { name: string; role: string; initials: string }[];
  agenda: { time: string; topic: string }[];
  isFeatured?: boolean;
}

export const events: EventData[] = [
  {
    slug: "amc-exam-strategy-webinar-2026",
    title: "AMC CAT Exam Strategy Webinar",
    description: "Learn proven strategies to crack the AMC CAT MCQ exam with our expert faculty. Free live session with Q&A.",
    fullDescription: "Join our comprehensive webinar designed specifically for international medical graduates preparing for the AMC CAT MCQ examination. Our expert faculty will walk you through the most effective study strategies, time management techniques, and common pitfalls to avoid. This interactive session includes a live Q&A segment where you can get personalized advice for your preparation journey.",
    date: "2026-05-15",
    time: "6:00 PM AEST",
    location: "Online (Zoom)",
    type: "webinar",
    category: "AMC",
    image: "/placeholder.svg",
    isFeatured: true,
    speakers: [
      { name: "Dr. Sarah Mitchell", role: "AMC Expert & Medical Educator", initials: "SM" },
      { name: "Dr. Raj Patel", role: "Senior Faculty, Internal Medicine", initials: "RP" },
    ],
    agenda: [
      { time: "6:00 PM", topic: "Welcome & Introduction" },
      { time: "6:10 PM", topic: "Understanding the AMC CAT Format" },
      { time: "6:30 PM", topic: "High-Yield Topics & Study Planning" },
      { time: "7:00 PM", topic: "Time Management During the Exam" },
      { time: "7:20 PM", topic: "Live Q&A Session" },
      { time: "7:50 PM", topic: "Closing & Next Steps" },
    ],
  },
  {
    slug: "plab-crash-course-workshop",
    title: "PLAB 2 OSCE Workshop — Intensive Prep",
    description: "Hands-on OSCE practice workshop with simulated patients and instant feedback from UK-trained examiners.",
    fullDescription: "This intensive one-day workshop is designed to simulate the real PLAB 2 OSCE experience. You'll rotate through multiple OSCE stations with trained simulated patients, receiving immediate structured feedback from our UK-trained examiners. Perfect for candidates appearing within the next 3 months.",
    date: "2026-06-08",
    time: "9:00 AM GMT",
    location: "London, United Kingdom",
    type: "workshop",
    category: "PLAB",
    image: "/placeholder.svg",
    speakers: [
      { name: "Dr. Emily Clarke", role: "PLAB 2 Examiner & Trainer", initials: "EC" },
    ],
    agenda: [
      { time: "9:00 AM", topic: "Registration & Orientation" },
      { time: "9:30 AM", topic: "OSCE Station Rotations — Block 1" },
      { time: "11:00 AM", topic: "Break & Group Debrief" },
      { time: "11:30 AM", topic: "OSCE Station Rotations — Block 2" },
      { time: "1:00 PM", topic: "Lunch" },
      { time: "2:00 PM", topic: "OSCE Station Rotations — Block 3" },
      { time: "3:30 PM", topic: "Individual Feedback & Closing" },
    ],
  },
  {
    slug: "prometric-gulf-medical-seminar",
    title: "Gulf Medical Licensing: Prometric Exam Seminar",
    description: "Everything you need to know about Prometric exams for DHA, HAAD, MOH, and QCHP licensing.",
    fullDescription: "Considering a medical career in the Gulf? This seminar provides an in-depth overview of the Prometric examination system used across the UAE, Saudi Arabia, Qatar, and Oman. Learn about eligibility, exam structure, passing scores, and post-exam licensing procedures for each authority.",
    date: "2026-05-28",
    time: "4:00 PM GST",
    location: "Online (Microsoft Teams)",
    type: "seminar",
    category: "Prometric",
    image: "/placeholder.svg",
    speakers: [
      { name: "Dr. Ahmed Al-Farsi", role: "Gulf Licensing Consultant", initials: "AA" },
      { name: "Dr. Fatima Khan", role: "Prometric Faculty Lead", initials: "FK" },
    ],
    agenda: [
      { time: "4:00 PM", topic: "Introduction to Gulf Medical Licensing" },
      { time: "4:20 PM", topic: "DHA vs HAAD vs MOH — Key Differences" },
      { time: "4:50 PM", topic: "Prometric Exam Structure & Scoring" },
      { time: "5:20 PM", topic: "Document Preparation & Application Process" },
      { time: "5:50 PM", topic: "Q&A Session" },
    ],
  },
  {
    slug: "img-career-pathways-conference-2026",
    title: "IMG Career Pathways Conference 2026",
    description: "Annual conference exploring career pathways for international medical graduates across Australia, UK, and Gulf.",
    fullDescription: "Our flagship annual conference brings together IMGs, medical educators, licensing authorities, and healthcare employers for a day of learning and networking. Explore career pathways across multiple countries, attend specialty-focused breakout sessions, and connect with peers who have successfully navigated the IMG journey.",
    date: "2026-07-20",
    time: "10:00 AM AEST",
    location: "Melbourne Convention Centre, Australia",
    type: "conference",
    category: "General",
    image: "/placeholder.svg",
    isFeatured: true,
    speakers: [
      { name: "Dr. Sarah Mitchell", role: "AMC Expert & Medical Educator", initials: "SM" },
      { name: "Dr. Emily Clarke", role: "PLAB 2 Examiner & Trainer", initials: "EC" },
      { name: "Dr. Ahmed Al-Farsi", role: "Gulf Licensing Consultant", initials: "AA" },
    ],
    agenda: [
      { time: "10:00 AM", topic: "Opening Keynote — The IMG Journey" },
      { time: "10:45 AM", topic: "Panel: Australia Pathway (AMC, Bridging)" },
      { time: "11:45 AM", topic: "Panel: UK Pathway (PLAB, GMC Registration)" },
      { time: "12:30 PM", topic: "Lunch & Networking" },
      { time: "1:30 PM", topic: "Panel: Gulf Pathway (Prometric, Licensing)" },
      { time: "2:30 PM", topic: "Breakout Sessions by Specialty" },
      { time: "4:00 PM", topic: "Closing & Networking Mixer" },
    ],
  },
  {
    slug: "nzrex-clinical-exam-prep-webinar",
    title: "NZREX Clinical Exam Preparation Webinar",
    description: "Focused webinar on NZREX Clinical exam format, marking criteria, and preparation strategies.",
    fullDescription: "Preparing for the NZREX Clinical examination? This webinar covers everything from exam logistics and station formats to marking criteria and common candidate mistakes. Our faculty includes doctors who have both sat and examined NZREX Clinical stations.",
    date: "2026-06-22",
    time: "7:00 PM NZST",
    location: "Online (Zoom)",
    type: "webinar",
    category: "NZREX",
    image: "/placeholder.svg",
    speakers: [
      { name: "Dr. Liam Chen", role: "NZREX Clinical Examiner", initials: "LC" },
    ],
    agenda: [
      { time: "7:00 PM", topic: "Welcome & NZREX Overview" },
      { time: "7:15 PM", topic: "Station Types & What Examiners Look For" },
      { time: "7:45 PM", topic: "Top 10 Mistakes Candidates Make" },
      { time: "8:05 PM", topic: "Study Plan & Resource Recommendations" },
      { time: "8:25 PM", topic: "Live Q&A" },
    ],
  },
];
