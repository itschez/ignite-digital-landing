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
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Numbers That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our data-driven approach delivers measurable results that drive real business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="relative overflow-hidden border-border/50 hover-scale hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
