import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MegaMenu from "@/components/MegaMenu";
import { specialities, exams, countries } from "@/data/courses";

const simpleLinks = [
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Contact", href: "/#contact" },
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Faculty", href: "/faculty" },
  { label: "Become a Mentor", href: "/become-mentor" },
  { label: "FAQs", href: "/faqs" },
  { label: "Career", href: "/career" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg btn-gradient flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-lg">E</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground tracking-tight">
            EliteMed UK
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <MegaMenu label="Courses" type="courses" />
          {simpleLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <MegaMenu label="About" type="about" />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link to="/login">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="btn-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
          {/* Mobile Courses Dropdown */}
          <button
            onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground py-2"
          >
            Courses <ChevronDown className={`h-4 w-4 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileCoursesOpen && (
            <div className="pl-4 space-y-1 pb-2">
              <Link to="/courses" onClick={() => setMobileOpen(false)} className="block text-sm text-primary font-medium py-1">
                All Courses
              </Link>
              {specialities.slice(1, 6).map((s) => (
                <Link key={s} to={`/courses?speciality=${encodeURIComponent(s)}`} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground py-1">
                  {s}
                </Link>
              ))}
            </div>
          )}

          {simpleLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link key={link.label} to={link.href} className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          )}

          {/* Mobile About Dropdown */}
          <button
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground py-2"
          >
            About <ChevronDown className={`h-4 w-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileAboutOpen && (
            <div className="pl-4 space-y-1 pb-2">
              {aboutLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground py-1">
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-2">
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="ghost" className="justify-start text-muted-foreground w-full">Login</Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)}>
              <Button className="btn-gradient text-primary-foreground font-semibold w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
