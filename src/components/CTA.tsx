import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of successful businesses that trust DigitalFlow to power their growth. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="hover-glow group">
              Get Started Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outlineHero" size="xl">
              <Mail className="mr-2" />
              Schedule a Call
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free consultation • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
