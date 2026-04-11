import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "AMC MCQ Preparation",
    subtitle: "Australian Medical Council",
    duration: "12 Weeks",
    students: "3,200+",
    rating: "4.9",
    tag: "Most Popular",
    description: "Comprehensive preparation for AMC CAT MCQ examination with 5000+ practice questions.",
  },
  {
    title: "PLAB 1 & 2 Course",
    subtitle: "Professional & Linguistic Assessment",
    duration: "16 Weeks",
    students: "2,800+",
    rating: "4.8",
    tag: "UK Pathway",
    description: "Complete PLAB preparation including clinical skills training for Part 2 OSCE.",
  },
  {
    title: "Prometric Exam Prep",
    subtitle: "Gulf Countries Licensing",
    duration: "10 Weeks",
    students: "4,100+",
    rating: "4.9",
    tag: "Fast Track",
    description: "Targeted preparation for DHA, HAAD, MOH, SMLE and other Gulf medical exams.",
  },
  {
    title: "NZREX Clinical",
    subtitle: "New Zealand Registration Exam",
    duration: "14 Weeks",
    students: "1,500+",
    rating: "4.7",
    tag: "New",
    description: "Focused clinical preparation for New Zealand medical registration examination.",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Choose Your <span className="text-gradient">Exam Path</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Structured programs designed by medical professionals who've walked the same path.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-box"
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary">
                {course.tag}
              </span>

              <p className="text-sm text-primary font-medium mb-1">{course.subtitle}</p>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {course.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" /> {course.students}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-primary" /> {course.rating}
                </span>
              </div>

              <Button className="btn-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
