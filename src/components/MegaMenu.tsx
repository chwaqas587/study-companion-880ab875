import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { specialities, exams, countries } from "@/data/courses";

interface MegaMenuProps {
  label: string;
  type: "courses" | "about";
}

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Faculty", href: "/faculty" },
  { label: "Become a Mentor", href: "/become-mentor" },
  { label: "FAQs", href: "/faqs" },
  { label: "Career", href: "/career" },
];

const MegaMenu = ({ label, type }: MegaMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (type === "about") {
    return (
      <div
        ref={menuRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          {label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl p-4 z-50">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Company</p>
            <div className="space-y-1">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Courses mega menu
  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        {label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="fixed left-1/2 -translate-x-1/2 top-16 mt-0 w-[90vw] max-w-5xl bg-card border border-border rounded-xl shadow-2xl z-50">
          <div className="grid grid-cols-4 gap-0">
            {/* Title */}
            <div className="col-span-1 p-6 border-r border-border flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-foreground leading-tight">
                Explore<br />Our Courses
              </h3>
              <Link
                to="/courses"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View All <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Speciality */}
            <div className="col-span-1 p-6 border-r border-border">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Speciality</p>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {specialities.map((spec) => (
                  <Link
                    key={spec}
                    to={spec === "All Courses" ? "/courses" : `/courses?speciality=${encodeURIComponent(spec)}`}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
                  >
                    {spec}
                  </Link>
                ))}
              </div>
            </div>

            {/* Exam */}
            <div className="col-span-1 p-6 border-r border-border">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Exam</p>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {exams.map((exam) => (
                  <Link
                    key={exam}
                    to={`/courses?exam=${encodeURIComponent(exam)}`}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
                  >
                    {exam}
                  </Link>
                ))}
              </div>
            </div>

            {/* Country */}
            <div className="col-span-1 p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Country</p>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {countries.map((country) => (
                  <Link
                    key={country}
                    to={`/courses?country=${encodeURIComponent(country)}`}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
