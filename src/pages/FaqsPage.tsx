import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is EliteMed UK and what kind of services are provided?",
    a: "EliteMed UK is a healthcare education and career platform where we offer courses for preparation of exams such as KAPS, AIMS, AMC, ADC, APC, NCLEX, PLAB, USMLE, and more, to help you migrate to your desired country as a registered practitioner.",
  },
  {
    q: "Are the courses fully online?",
    a: "Yes, all our courses are delivered online through live interactive sessions. You can attend from anywhere in the world. We also provide recorded sessions for flexible learning.",
  },
  {
    q: "Can I get recorded sessions of the class?",
    a: "Absolutely! All live sessions are recorded and made available to enrolled students. You can access recordings at any time during and after your course duration.",
  },
  {
    q: "Who can benefit from EliteMed UK's services?",
    a: "Our services are designed for healthcare professionals including doctors, pharmacists, nurses, dentists, physiotherapists, and other allied health professionals who want to practice internationally.",
  },
  {
    q: "Which foreign exams does EliteMed UK cover?",
    a: "We cover a wide range of exams including AMC, PLAB, USMLE, NCLEX, DHA, HAAD, MOH, SMLE, ADC, KAPS, NZREX, OET, IELTS, and many more across Australia, UK, USA, Gulf countries, New Zealand, Ireland, and Canada.",
  },
  {
    q: "What study resources does EliteMed UK provide?",
    a: "We provide comprehensive study materials including video lectures, practice question banks, mock examinations, high-yield notes, clinical scenario practice, and AI-powered assessment tools.",
  },
  {
    q: "Does EliteMed UK give a personalised study plan for each student?",
    a: "Yes! Each student receives a personalised study plan based on their current knowledge level, target exam, available study time, and learning pace. Our mentors regularly review and adjust these plans.",
  },
  {
    q: "How do I enrol in a course?",
    a: "You can enrol by visiting our courses page, selecting your desired program, and filling out the enquiry form. Our team will contact you to guide you through the enrollment process.",
  },
  {
    q: "Is there a scholarship program available?",
    a: "Yes, we offer the ASAP (Abroad Scholarship Assistance Program) which provides financial assistance to deserving healthcare professionals. Visit our Scholarships page to learn more.",
  },
  {
    q: "What is the success rate of EliteMed UK students?",
    a: "We maintain a 93% success rate across all our exam preparation programs, with many students clearing their exams on their first attempt.",
  },
];

const FaqsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ List */}
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/40"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-card border border-border p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  If You Have More Questions?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Our team is always ready to help you with any queries about courses, exams, or career guidance.
                </p>
                <Link to="/#contact">
                  <Button className="btn-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaqsPage;
