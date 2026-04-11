import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with backend
    alert("Thank you! We'll reach out shortly.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Book Your <span className="text-gradient">Free Consultation</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Speak with our counselors to find the right exam pathway for your career goals.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full btn-gradient text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Get Free Guidance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Your information is 100% secure and confidential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
