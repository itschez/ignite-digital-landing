import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium gradient-text">Digital Marketing</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              The Future of Digital Marketing: AI-Powered Strategies for 2025
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Oct 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button variant="default" size="sm" className="gap-2 hover-lift">
                <Heart className="w-4 h-4" />
                234
              </Button>
              <Button variant="outline" size="sm" className="gap-2 hover-lift">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2 hover-lift">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="container mx-auto px-4 md:px-6 -mt-10 relative z-10 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-luxury hover-lift group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full glass border-2 border-primary/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-primary/50 animate-pulse" />
                </div>
                <p className="text-muted-foreground">Featured Image</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div className="glass rounded-2xl p-8 md:p-12 mb-8 hover-lift">
                  <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The digital marketing landscape is evolving at an unprecedented pace. As we move into 2025, 
                    artificial intelligence is no longer a futuristic concept—it's the driving force behind the 
                    most successful marketing campaigns. In this comprehensive guide, we'll explore how AI is 
                    reshaping the industry and what strategies you need to stay ahead.
                  </p>
                  
                  <h2 className="text-3xl font-bold mb-4 mt-12">The AI Revolution in Marketing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Artificial intelligence has transformed from a buzzword into an essential tool for marketers. 
                    From predictive analytics to personalized content creation, AI is enabling businesses to 
                    understand and engage with their audiences like never before.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-lg p-6 my-8">
                    <p className="text-foreground font-medium italic">
                      "Companies that leverage AI in their marketing strategies are seeing up to 40% increase 
                      in customer engagement and 30% boost in conversion rates."
                    </p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 mt-8">Key AI-Powered Strategies</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Predictive Analytics:</strong> Use AI to forecast customer behavior 
                        and optimize campaign timing for maximum impact.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Hyper-Personalization:</strong> Create unique experiences for each 
                        user based on their preferences, behavior, and history.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Automated Content Generation:</strong> Leverage AI to create 
                        compelling copy, visuals, and campaigns at scale.
                      </p>
                    </li>
                  </ul>
                  
                  <h2 className="text-3xl font-bold mb-4 mt-12">Implementation Best Practices</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Successfully integrating AI into your marketing strategy requires careful planning and execution. 
                    Start with small, measurable projects and scale based on results. Focus on quality data collection, 
                    as AI is only as good as the data it learns from.
                  </p>
                  
                  <h2 className="text-3xl font-bold mb-4 mt-12">Conclusion</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The future of digital marketing is here, and it's powered by AI. By embracing these technologies 
                    and strategies, businesses can create more meaningful connections with their audiences, drive 
                    better results, and stay competitive in an increasingly digital world. The question isn't whether 
                    to adopt AI in your marketing—it's how quickly you can get started.
                  </p>
                </div>
                
                {/* Author Bio */}
                <Card className="glass border-border/50 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full glass border-2 border-primary/50 flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">Sarah Johnson</h3>
                        <p className="text-sm text-primary mb-2">Digital Marketing Strategist</p>
                        <p className="text-muted-foreground text-sm">
                          Sarah is a digital marketing expert with over 10 years of experience in AI-powered 
                          marketing strategies. She helps businesses transform their digital presence and 
                          achieve measurable growth.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <Card className="glass border-border/50 hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                    <nav className="space-y-3">
                      <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        Introduction
                      </a>
                      <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        The AI Revolution
                      </a>
                      <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        Key AI Strategies
                      </a>
                      <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        Implementation
                      </a>
                      <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>
                
                {/* Related Posts */}
                <Card className="glass border-border/50 hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <a key={i} href="#" className="block group">
                          <div className="flex gap-3">
                            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-105 transition-transform" />
                            <div>
                              <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                Marketing Trends {i}
                              </h4>
                              <p className="text-xs text-muted-foreground">5 min read</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Newsletter */}
                <Card className="glass border-border/50 hover-lift bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
