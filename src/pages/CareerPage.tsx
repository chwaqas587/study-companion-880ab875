import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const openings = [
  { title: "Academic Counsellor", location: "Remote", type: "Full-time", department: "Student Relations" },
  { title: "Content Writer - Medical", location: "Remote", type: "Full-time", department: "Content" },
  { title: "Digital Marketing Specialist", location: "London, UK", type: "Full-time", department: "Marketing" },
  { title: "Video Editor", location: "Remote", type: "Part-time", department: "Media" },
  { title: "Student Success Manager", location: "Remote", type: "Full-time", department: "Operations" },
  { title: "Medical Course Developer", location: "Remote", type: "Contract", department: "Academic" },
];

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-[hsl(var(--primary)/0.05)] py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Join Our Team At <span className="text-gradient">EliteMed UK</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Be a part of an international healthcare EdTech and get excellent remuneration,
                remote working opportunities and a chance to help global healthcare professionals
                migrate, settle and practice in their preferred country.
              </p>
              <a href="#openings">
                <Button className="btn-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Explore Vacancies
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join EliteMed UK's <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            EliteMed UK, a visionary initiative, is dedicated to empowering healthcare professionals worldwide.
            Our exceptional team, drawn from diverse backgrounds and locations, works tirelessly to support
            students' dreams.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Joining EliteMed UK means adding significant value to your career and life. In this extraordinary team,
            your growth aligns with our advancement. Welcome to a journey where your success is intertwined with ours!
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Team Members" },
              { value: "15+", label: "Countries" },
              { value: "100%", label: "Remote Friendly" },
              { value: "4.8★", label: "Employee Rating" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-card border border-border text-center">
                <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Current <span className="text-gradient">Openings</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all gap-4"
              >
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.department}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex-shrink-0">
                  Apply <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;
