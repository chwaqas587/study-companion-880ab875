import { BookOpen, Video, Users, Award, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    description: "Curated content aligned with the latest exam patterns and syllabi for all major medical licensing exams.",
  },
  {
    icon: Video,
    title: "Live & Recorded Classes",
    description: "Interactive live sessions with expert faculty plus on-demand recordings you can revisit anytime.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from practicing doctors and medical educators with proven track records in exam preparation.",
  },
  {
    icon: Award,
    title: "Mock Exams & Analytics",
    description: "Realistic practice tests with detailed performance analytics to identify and strengthen weak areas.",
  },
  {
    icon: Globe,
    title: "Visa & Migration Support",
    description: "End-to-end guidance on visa applications, registration processes, and settling abroad.",
  },
  {
    icon: Headphones,
    title: "24/7 Mentor Support",
    description: "Dedicated mentors available round the clock to resolve doubts and keep you motivated.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A complete ecosystem designed to take you from preparation to practice — anywhere in the world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-box"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
