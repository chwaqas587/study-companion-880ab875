import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-doctors.jpg";

const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="container relative z-10 py-24 lg:py-36">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Free Webinar — April 12th, 2026</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
            Your Pathway to{" "}
            <span className="text-gradient">Medical Practice</span>{" "}
            Abroad
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Expert guidance to pass <strong className="text-foreground">AMC, NZREX, PLAB & Prometric</strong> exams. 
            Join thousands of doctors who've successfully relocated to Australia, UK & Gulf countries.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="btn-gradient text-primary-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              Book Free Seat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8"
            >
              <Play className="mr-2 h-5 w-5 text-primary" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {[
              { value: "15,000+", label: "Students Trained" },
              { value: "92%", label: "Pass Rate" },
              { value: "45+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
