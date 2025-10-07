import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "DigitalFlow transformed our online presence completely. Our leads increased by 400% in just 6 months. Their team is professional, responsive, and truly understands digital marketing.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Working with DigitalFlow has been a game-changer. Their data-driven approach and creative campaigns have helped us achieve ROI we never thought possible.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, BrandBuild",
    content: "The best marketing agency we've ever worked with. They don't just execute campaigns—they become true partners in your success. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold backdrop-blur-xl shadow-lg">
            Client Success Stories
          </div>
          <h2 className="font-extrabold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Don't just take our word for it—hear from the businesses we've helped transform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover-lift glass group border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
