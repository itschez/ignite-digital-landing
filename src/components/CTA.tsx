import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
      <div className="absolute inset-0 glass" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-extrabold mb-8">
            Ready to <span className="gradient-text">Transform Your Business?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that trust DigitalFlow to power their growth. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button variant="hero" size="xl" className="hover-glow group shadow-luxury">
              Get Started Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outlineHero" size="xl" className="glass group">
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              Schedule a Call
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
