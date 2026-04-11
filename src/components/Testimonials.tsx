import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "AMC — Now practicing in Melbourne",
    text: "The structured approach and mock exams were game-changers. I cleared AMC MCQ on my first attempt thanks to the amazing faculty.",
  },
  {
    name: "Dr. Ahmed Hassan",
    role: "Prometric — Practicing in Dubai",
    text: "From exam preparation to DHA licensing, the team guided me through every step. I couldn't have done it without their support.",
  },
  {
    name: "Dr. Fatima Noor",
    role: "PLAB — Now in NHS, London",
    text: "The PLAB 2 clinical simulations were incredibly realistic. The mentors' feedback helped me build confidence for the actual OSCE.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Success Stories</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Doctors Who <span className="text-gradient">Made It</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
