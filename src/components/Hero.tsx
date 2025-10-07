import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-12 w-[600px] h-[600px] bg-secondary/25 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold backdrop-blur-xl shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 Digital Marketing Agency
            </div>
            
            <h1 className="font-extrabold mb-6">
              Transform Your
              <span className="gradient-text block"> Digital Presence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-xl">
              We help businesses grow through data-driven marketing strategies, 
              cutting-edge technology, and creative excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button variant="hero" size="xl" className="hover-glow group shadow-luxury">
                Start Growing Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outlineHero" size="xl" className="group glass">
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="animate-slide-in group cursor-default" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm font-medium text-muted-foreground/80">Happy Clients</div>
              </div>
              <div className="animate-slide-in group cursor-default" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm font-medium text-muted-foreground/80">Success Rate</div>
              </div>
              <div className="animate-slide-in group cursor-default" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform">2.5x</div>
                <div className="text-sm font-medium text-muted-foreground/80">Avg. ROI</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-4 gradient-bg opacity-30 blur-3xl rounded-3xl animate-glow" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury hover-lift group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={heroImage} 
                alt="Digital Marketing Dashboard"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
