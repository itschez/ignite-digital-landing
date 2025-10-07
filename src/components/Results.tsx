import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "350%",
    label: "Average Revenue Growth",
    description: "Our clients see an average 350% increase in revenue within the first year.",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Leads Generated",
    description: "We've helped generate over 2 million qualified leads for our clients.",
  },
  {
    icon: Target,
    value: "94%",
    label: "Client Retention",
    description: "Industry-leading retention rate thanks to our results-driven approach.",
  },
  {
    icon: Zap,
    value: "24h",
    label: "Average Response Time",
    description: "Lightning-fast support to keep your campaigns running smoothly.",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold backdrop-blur-xl shadow-lg">
            Proven Results
          </div>
          <h2 className="font-extrabold mb-6">
            Numbers That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Our data-driven approach delivers measurable results that drive real business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="relative overflow-hidden border-border/50 hover-lift glass group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl font-extrabold gradient-text mb-3">{stat.value}</div>
                <div className="text-base font-bold text-foreground mb-3">{stat.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
