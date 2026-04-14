import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">EliteMed UK</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier medical exam preparation — empowering doctors to practice medicine anywhere in the world.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2.5">
              <li><Link to="/course/amc-mcq-preparation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AMC Preparation</Link></li>
              <li><Link to="/course/plab-preparation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">PLAB Course</Link></li>
              <li><Link to="/course/prometric-exam-prep" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prometric Exams</Link></li>
              <li><Link to="/course/nzrex-clinical" className="text-sm text-muted-foreground hover:text-foreground transition-colors">NZREX Clinical</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/faculty" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Faculty</Link></li>
              <li><Link to="/career" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li><a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
              <li><Link to="/scholarships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Scholarships</Link></li>
              <li><Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Student Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 EliteMed UK. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
