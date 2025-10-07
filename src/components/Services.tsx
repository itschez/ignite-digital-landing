import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Megaphone, Palette, Search, Share2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our proven SEO strategies that drive organic traffic and qualified leads.",
    color: "text-primary",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build engaged communities and amplify your brand voice across all major social platforms.",
    color: "text-secondary",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Make informed decisions with comprehensive analytics and actionable insights from your campaigns.",
    color: "text-accent",
  },
  {
    icon: Palette,
    title: "Content Creation",
    description: "Captivate your audience with compelling content that tells your brand story and drives conversions.",
    color: "text-primary",
  },
  {
    icon: Share2,
    title: "Paid Advertising",
    description: "Maximize ROI with targeted ad campaigns across Google, Facebook, Instagram, and LinkedIn.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Accelerate business growth with custom strategies tailored to your unique goals and challenges.",
    color: "text-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold backdrop-blur-xl shadow-lg">
            Our Services
          </div>
          <h2 className="font-extrabold mb-6">
            Everything You Need to <span className="gradient-text">Succeed Online</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Comprehensive digital marketing solutions designed to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="hover-lift glass group border-border/50 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
