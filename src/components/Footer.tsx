import { Instagram, Youtube, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Films", href: "#films" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.6em] text-soft-grey">
              Surat · Gujarat
            </p>
            <h3 className="text-3xl font-semibold text-white tracking-[0.2em]">
              Gajera Films
            </h3>
            <p className="text-soft-grey max-w-sm">
              Premium photography & filmmaking collective crafting cinematic
              keepsakes for modern couples and brands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-soft-grey mb-4">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-soft-grey hover:text-white transition text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-soft-grey">
              Contact
            </p>
            <div className="flex items-center gap-3 text-soft-grey">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:hello@gajerafilms.com">
                hello@gajerafilms.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-soft-grey">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+919904113173">+91 99041 13173</a>
            </div>
            <div className="flex items-center gap-3 text-soft-grey">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+918347977413">+91 83479 77413</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs tracking-[0.5em] text-soft-grey uppercase">
          © Gajera Films 2025 · Cinematic Photography & Films
        </div>
      </div>
    </footer>
  );
};

export default Footer;
