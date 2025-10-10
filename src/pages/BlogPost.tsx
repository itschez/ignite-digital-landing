import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Heart, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold gradient-text">Digital Marketing</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              The Future of Digital Marketing: AI-Powered Strategies
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full glass border border-primary/30 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>October 10, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            {/* Social Actions */}
            <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="sm" className="gap-2 hover-lift">
                <Heart className="w-4 h-4" />
                <span className="font-semibold">234</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 hover-lift glass">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2 hover-lift glass">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="container mx-auto px-4 md:px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-luxury hover-lift group animate-fade-in">
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full glass border-2 border-primary/50 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
                  </div>
                  <p className="text-muted-foreground font-medium">Featured Blog Image</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Article Content */}
            <article className="lg:col-span-8 space-y-8">
              {/* Introduction */}
              <div className="glass rounded-3xl p-8 md:p-12 hover-lift animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Introduction</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The digital marketing landscape is evolving at an unprecedented pace. As we move into 2025, 
                  artificial intelligence is no longer a futuristic concept—it's the driving force behind the 
                  most successful marketing campaigns.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In this comprehensive guide, we'll explore how AI is reshaping the industry and what 
                  strategies you need to implement to stay ahead of the competition.
                </p>
              </div>
              
              {/* Main Content Section */}
              <div className="glass rounded-3xl p-8 md:p-12 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The AI Revolution in Marketing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Artificial intelligence has transformed from a buzzword into an essential tool for marketers. 
                  From predictive analytics to personalized content creation, AI is enabling businesses to 
                  understand and engage with their audiences like never before.
                </p>
                
                {/* Quote Block */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-l-4 border-primary my-8 hover-lift">
                  <div className="absolute top-4 left-4 text-primary/20 text-6xl font-serif">"</div>
                  <p className="text-xl font-medium text-foreground italic relative z-10 pl-8">
                    Companies leveraging AI in their marketing strategies are seeing up to 40% increase 
                    in customer engagement and 30% boost in conversion rates.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 pl-8">— Industry Research Report 2025</p>
                </div>
                
                {/* Key Strategies */}
                <div className="mt-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Key AI-Powered Strategies</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Predictive Analytics",
                        description: "Use AI to forecast customer behavior and optimize campaign timing for maximum impact. Machine learning algorithms analyze historical data to predict future trends."
                      },
                      {
                        title: "Hyper-Personalization",
                        description: "Create unique experiences for each user based on their preferences, behavior, and history. AI enables real-time content customization at scale."
                      },
                      {
                        title: "Automated Content Generation",
                        description: "Leverage AI to create compelling copy, visuals, and campaigns at scale. Natural language processing ensures brand consistency across all channels."
                      },
                      {
                        title: "Intelligent Customer Segmentation",
                        description: "AI identifies micro-segments within your audience, allowing for more targeted and effective marketing campaigns with higher ROI."
                      }
                    ].map((strategy, index) => (
                      <div key={index} className="flex gap-4 p-6 rounded-2xl glass hover-lift group border border-transparent hover:border-primary/30 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{strategy.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Implementation */}
              <div className="glass rounded-3xl p-8 md:p-12 hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Best Practices</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Successfully integrating AI into your marketing strategy requires careful planning and execution. 
                  Here are the essential steps to get started:
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Start with small, measurable pilot projects",
                    "Focus on quality data collection and management",
                    "Invest in team training and AI literacy",
                    "Monitor performance metrics continuously",
                    "Scale based on proven results"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Conclusion */}
              <div className="glass rounded-3xl p-8 md:p-12 hover-lift animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Conclusion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The future of digital marketing is here, and it's powered by AI. By embracing these technologies 
                  and strategies, businesses can create more meaningful connections with their audiences, drive 
                  better results, and stay competitive in an increasingly digital world.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The question isn't whether to adopt AI in your marketing—it's how quickly you can get started 
                  and how effectively you can implement these game-changing technologies.
                </p>
              </div>
              
              {/* Author Bio */}
              <Card className="glass border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-24 h-24 rounded-2xl glass border-2 border-primary/50 flex items-center justify-center flex-shrink-0 hover-lift">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-2">Sarah Johnson</h3>
                      <p className="text-primary font-semibold mb-3">Digital Marketing Strategist</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Sarah is a digital marketing expert with over 10 years of experience in AI-powered 
                        marketing strategies. She helps businesses transform their digital presence and 
                        achieve measurable growth through innovative technology solutions.
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-2 glass hover-lift">
                          <Twitter className="w-4 h-4" />
                          Follow
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 glass hover-lift">
                          <Linkedin className="w-4 h-4" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Share Section */}
              <div className="glass rounded-3xl p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="font-bold text-xl mb-4">Share this article</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="gap-2 glass hover-lift">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="gap-2 glass hover-lift">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="gap-2 glass hover-lift">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="gap-2 glass hover-lift">
                    <LinkIcon className="w-4 h-4" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <Card className="glass border-primary/20 hover-lift animate-fade-in">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-6 gradient-text">Table of Contents</h3>
                    <nav className="space-y-3">
                      {[
                        "Introduction",
                        "The AI Revolution",
                        "Key AI Strategies",
                        "Implementation",
                        "Conclusion"
                      ].map((item, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="block text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 group"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            <span className="font-medium">{item}</span>
                          </div>
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
                
                {/* Related Posts */}
                <Card className="glass border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-6">Related Articles</h3>
                    <div className="space-y-4">
                      {[
                        { title: "SEO Trends for 2025", time: "5 min read" },
                        { title: "Social Media Strategy Guide", time: "7 min read" },
                        { title: "Email Marketing Automation", time: "6 min read" }
                      ].map((article, index) => (
                        <Link key={index} to="#" className="block group">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-lg bg-primary/30" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                              </h4>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.time}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Newsletter */}
                <Card className="glass border-primary/20 hover-lift bg-gradient-to-br from-primary/10 to-accent/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <div className="w-6 h-6 rounded-lg bg-white/30" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest insights and trends delivered straight to your inbox every week.
                    </p>
                    <Button className="w-full hover-lift">Subscribe Now</Button>
                  </CardContent>
                </Card>
                
                {/* Tags */}
                <Card className="glass border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["AI", "Marketing", "Digital", "Strategy", "Analytics", "Automation"].map((tag, index) => (
                        <Link 
                          key={index}
                          to="#"
                          className="px-3 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all hover-lift"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
