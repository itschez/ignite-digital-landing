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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed Online</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="hover-scale hover:shadow-2xl transition-all duration-300 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
