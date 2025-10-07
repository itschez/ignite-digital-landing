import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "glass border-b border-border/50 shadow-lg" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-6"
      } flex items-center justify-between`}>
        <div className="text-2xl font-extrabold gradient-text tracking-tight">
          DigitalFlow
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#results" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group">
            Results
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#testimonials" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group">
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
          <Button variant="hero" size="lg" className="shadow-lg hover-glow">
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
