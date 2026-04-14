import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Globe, Users, Monitor, Award, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="bg-[hsl(var(--primary)/0.05)] py-20">
          <div className="container text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your One-Stop Destination for International Healthcare Licensing Exams & Global Career Opportunities
            </h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                A Global Healthcare<br />Career Platform
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are a global healthcare education and career platform that supports healthcare professionals
                  who want to work abroad and build international careers. We help professionals navigate complex
                  licensing pathways required for countries such as Australia, New Zealand, Ireland, the UAE,
                  and other global healthcare systems through structured preparation programs, coaching, and career guidance.
                </p>
                <p>
                  EliteMed UK also provides upskilling programs for healthcare professionals, including non-clinical
                  career pathways for doctors such as Medical Affairs, Medical Science Liaison (MSL), Drug Safety
                  Physician, Clinical Trial Physician, Clinical Drug Development, and other pharmaceutical industry roles.
                </p>
                <p>
                  From AMC exam preparation for doctors, ADC coaching for dentists, to DHA and other licensing exams,
                  we offer a structured ecosystem designed to help healthcare professionals successfully achieve
                  their goal of working in international healthcare systems.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, value: "93%", label: "Success Rate" },
                { icon: Globe, value: "60+", label: "Countries" },
                { icon: Users, value: "8000+", label: "Students" },
                { icon: Monitor, value: "30+", label: "Courses" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower healthcare professionals worldwide by providing world-class exam preparation, career guidance,
                and continuous support — enabling them to achieve their dream of practicing medicine internationally.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading healthcare career platform, bridging the gap between qualified healthcare
                professionals and global career opportunities across every continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose <span className="text-gradient">EliteMed UK?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Expert faculty with real-world clinical experience",
              "Structured curriculum aligned with exam standards",
              "Comprehensive mock exams and practice resources",
              "1:1 mentorship and personalized study plans",
              "Career guidance and job placement support",
              "Active alumni network across 60+ countries",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-5 rounded-xl bg-card border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
