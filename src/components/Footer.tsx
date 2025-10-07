import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-extrabold gradient-text mb-4 tracking-tight">
              DigitalFlow
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your digital presence with data-driven marketing strategies.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                SEO Optimization
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                Social Media
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                Content Marketing
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                Paid Advertising
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                About Us
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                Careers
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                Blog
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors relative group">
                Contact
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground font-medium">
          <p>&copy; 2025 DigitalFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
