import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Users, Award, Globe, GraduationCap } from "lucide-react";
import { useState } from "react";

const BecomeMentorPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "",
    experience: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-[hsl(var(--primary)/0.05)] py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Become an Educationist with <span className="text-gradient">EliteMed UK</span> Today!
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Share your insights and knowledge with the next generation of medical professionals and world leaders.
                </p>
                <a href="#apply">
                  <Button className="btn-gradient text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 transition-opacity">
                    Join Us
                  </Button>
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Earn upto <span className="font-bold text-foreground">$40k per month</span></span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Build a <span className="font-bold text-foreground">network</span> with like minded people</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Flexible schedule — teach from <span className="font-bold text-foreground">anywhere</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "4800+", label: "Students" },
              { icon: Award, value: "36", label: "Mentors" },
              { icon: Globe, value: "60K+", label: "Community" },
              { icon: GraduationCap, value: "3050+", label: "Alumni" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl btn-gradient text-center">
                <p className="font-heading text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Why Partner With <span className="text-gradient">EliteMed UK?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Competitive Earnings", desc: "Earn up to $40,000 per month through our structured compensation model." },
              { title: "Global Reach", desc: "Teach students from 60+ countries and build your international reputation." },
              { title: "Flexible Schedule", desc: "Choose your own hours and teach from anywhere in the world." },
              { title: "Tech Support", desc: "We handle all the technology — you focus on teaching." },
              { title: "Marketing & Promotion", desc: "Your courses promoted to our 60K+ community of healthcare professionals." },
              { title: "Professional Growth", desc: "Enhance your CV with international teaching experience." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all">
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
            Apply To Become A <span className="text-gradient">Mentor</span>
          </h2>
          <div className="rounded-2xl bg-card border border-border p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name<span className="text-destructive">*</span></label>
                  <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email<span className="text-destructive">*</span></label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your email" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone<span className="text-destructive">*</span></label>
                  <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Speciality<span className="text-destructive">*</span></label>
                  <Input value={formData.speciality} onChange={(e) => setFormData({ ...formData, speciality: e.target.value })} placeholder="e.g. Internal Medicine" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Years of Experience<span className="text-destructive">*</span></label>
                <Input value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} placeholder="e.g. 10 years" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Tell us about yourself</label>
                <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Brief description of your experience..." rows={4} />
              </div>
              <Button className="w-full btn-gradient text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeMentorPage;
