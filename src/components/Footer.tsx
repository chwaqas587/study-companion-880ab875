const footerLinks = {
  Programs: ["AMC Preparation", "PLAB Course", "Prometric Exams", "NZREX Clinical"],
  Company: ["About Us", "Our Faculty", "Careers", "Blog"],
  Support: ["Contact Us", "FAQs", "Pay Online", "Student Portal"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">EliteMed UK</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier medical exam preparation — empowering doctors to practice medicine anywhere in the world.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
