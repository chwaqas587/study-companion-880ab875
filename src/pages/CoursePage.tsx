import { useParams, Link } from "react-router-dom";
import { getCourseBySlug } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Clock,
  Users,
  Calendar,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Award,
  Play,
  BookOpen,
  MessageCircle,
  Monitor,
  Lock,
  ChevronDown,
  Star,
  GraduationCap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import NotFound from "./NotFound";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [openModule, setOpenModule] = useState<number>(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  if (!course) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 border-b border-border">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/#courses" className="hover:text-foreground transition-colors">Courses</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left: Course Info */}
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                <span className="text-sm font-medium text-primary">Learning Format:</span>
                <span className="text-sm font-semibold text-primary">{course.learningFormat}</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {course.title}
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {course.heroDescription}
              </p>

              {/* Stats bar */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{course.students}</p>
                    <p className="text-xs text-muted-foreground">Students Enrolled</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{course.batchStart}</p>
                    <p className="text-xs text-muted-foreground">Batch Starts</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{course.duration}</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-card border border-border p-6 lg:p-8 sticky top-24">
                <h3 className="font-heading text-xl font-bold text-foreground text-center mb-6">
                  Take The First Step Toward Your Career Goals
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Full Name<span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email<span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Phone Number<span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your number"
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <Button className="w-full btn-gradient text-primary-foreground font-semibold text-base py-6 hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Scholarship available! Get your free AI mock test now.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Key <span className="text-gradient">Deliverables</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
            Everything you need to succeed in your {course.title} journey — designed by professionals who've walked the same path.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.keyDeliverables.map((item, i) => {
              const icons = [BookOpen, CheckCircle2, Award, MessageCircle, Users];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg btn-gradient flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {course.whySection.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{course.whySection.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-3xl">{course.whySection.description}</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {course.whySection.stats.map((stat) => {
              const icons = [DollarSign, Briefcase, Award];
              const idx = course.whySection.stats.indexOf(stat);
              const Icon = icons[idx % icons.length];
              return (
                <div key={stat.label} className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About The Course + Who Is It For */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                About The <span className="text-gradient">Course</span>
              </h2>
              <div className="space-y-4">
                {course.aboutCourse.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Who Is The Course <span className="text-gradient">For?</span>
              </h2>
              <ul className="space-y-4">
                {course.whoIsItFor.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's More */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            What's More That Comes With <span className="text-gradient">Our Course?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.extras.map((extra, i) => {
              const icons = [MessageCircle, Monitor, Clock, Users];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{extra.title}</h3>
                  <p className="text-sm text-muted-foreground">{extra.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Explore Our <span className="text-gradient">Curriculum</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {course.curriculum.map((mod, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenModule(openModule === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Module {i + 1}
                    </span>
                    <h3 className="font-heading font-bold text-foreground">{mod.title}</h3>
                  </div>
                  {openModule === i ? (
                    <ChevronDown className="h-5 w-5 text-primary transition-transform rotate-180" />
                  ) : (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
                {openModule === i && (
                  <div className="px-5 pb-5 pt-0">
                    <ul className="space-y-2.5 pl-2">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Meet Our <span className="text-gradient">Faculty</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.faculty.map((member) => (
              <div key={member.name} className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/40 transition-all">
                <div className="w-20 h-20 rounded-full btn-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">{member.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {course.testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The Examination */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
            {course.examInfo.title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">{course.examInfo.title.split(" ").slice(2).join(" ")}</span>
          </h2>
          <div className="space-y-4 mb-10">
            {course.examInfo.description.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Eligibility */}
          <div className="rounded-xl bg-card border border-border p-6 mb-8">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" /> Eligibility Criteria
            </h3>
            <ul className="space-y-3">
              {course.examInfo.eligibility.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedure */}
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">
            Registration <span className="text-gradient">Procedure</span>
          </h3>
          <div className="space-y-4">
            {course.examInfo.procedure.map((step, i) => (
              <div key={i} className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full btn-gradient flex items-center justify-center">
                  <span className="font-heading font-bold text-primary-foreground text-sm">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{step.step}</h4>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Ready to Start Your <span className="text-gradient">Journey?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Join {course.students} students who have already enrolled. Limited seats available for the upcoming batch starting {course.batchStart}.
          </p>
          <Button size="lg" className="btn-gradient text-primary-foreground font-semibold text-base px-10 hover:opacity-90 transition-opacity">
            Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
