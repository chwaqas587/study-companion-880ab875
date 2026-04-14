import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Award, GraduationCap, Globe, Users } from "lucide-react";
import { useState } from "react";

const ScholarshipsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    course: "",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)]" />
        <div className="container relative py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary font-semibold text-sm mb-6">
                #ASAP
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                EliteMed UK{" "}
                <span className="text-gradient">Scholarship</span> for Abroad Program
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                <span className="text-primary font-semibold">ASAP</span> is EliteMed UK's initiative to offer financial
                assistance to global healthcare professionals aspiring to crack
                foreign registration exams.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium">Scholarship fund of Upto</span>
                <span className="font-heading text-5xl font-bold text-primary">£100K</span>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-card border border-border p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name<span className="text-destructive">*</span></label>
                  <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email<span className="text-destructive">*</span></label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number<span className="text-destructive">*</span></label>
                  <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your Qualification<span className="text-destructive">*</span></label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  >
                    <option value="">Select your qualification</option>
                    <option value="mbbs">MBBS</option>
                    <option value="bds">BDS</option>
                    <option value="bpharm">B.Pharm</option>
                    <option value="bsc-nursing">BSc Nursing</option>
                    <option value="physiotherapy">Physiotherapy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Scholarship Applying for<span className="text-destructive">*</span></label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    <option value="">Select Course</option>
                    <option value="amc">AMC MCQ Preparation</option>
                    <option value="plab">PLAB 1 & 2 Course</option>
                    <option value="prometric">Prometric Exam Prep</option>
                    <option value="nzrex">NZREX Clinical</option>
                    <option value="usmle">USMLE Step 1</option>
                    <option value="nclex">NCLEX-RN</option>
                  </select>
                </div>
                <Button className="w-full btn-gradient text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Immense Opportunities. Huge <span className="text-gradient">Fee-Waivers</span>
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-3xl mx-auto">
            Our scholarship program helps deserving healthcare professionals overcome financial barriers and achieve their international career goals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, value: "£100K+", label: "Total Scholarship Fund" },
              { icon: GraduationCap, value: "500+", label: "Scholars Supported" },
              { icon: Globe, value: "15+", label: "Countries Covered" },
              { icon: Users, value: "93%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Who Can <span className="text-gradient">Apply?</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Healthcare professionals (doctors, nurses, pharmacists, dentists, physiotherapists)",
              "Graduates from recognised medical institutions",
              "Candidates with demonstrated financial need",
              "Students committed to completing their exam preparation",
              "Applicants with a clear career development plan",
              "Those who have not received other full scholarships for the same program",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-card border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipsPage;
