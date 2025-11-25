import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/Black_and_White_Minimalist_Photography_Logo__1_-removebg-preview.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      if (currentY < 120) {
        setIsHeaderVisible(true);
      } else if (currentY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Films", href: "#films" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-white/10"
          : "bg-transparent"
      } ${isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img src={logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }} alt="Gajera Films" className="w-[250px] h-[70px]" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-soft-grey hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <Button
            className="hidden lg:block bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            onClick={() => handleNavClick("#contact")}
          >
            Book Now
          </Button>

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0b0b0b] border-border w-80">
              <div className="flex flex-col gap-6 mt-8">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#home");
                  }}
                  className="font-display text-2xl text-foreground mb-4"
                >
                  Gajera Films
                </a>
                
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg text-soft-grey hover:text-white transition-colors duration-300 font-medium py-2 border-b border-border hover:border-white"
                  >
                    {link.label}
                  </a>
                ))}
                
                <Button
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full"
                  onClick={() => handleNavClick("#contact")}
                >
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
