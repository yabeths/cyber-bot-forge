
import React, { useState, useEffect } from 'react';
import { Bot, ArrowRight, Star, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              CyberBots AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/demo" className="text-muted-foreground hover:text-primary transition-colors">Get Demo</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 to-background">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            AI Chatbots Tailored for
            <br />
            <span className="text-primary">
              Every Business Niche
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            From real estate to restaurants, healthcare to e-commerce – we create custom AI chatbots that understand your industry and automate your most important customer interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-primary/20 text-primary hover:bg-primary/5" asChild>
              <a href="/demo">Watch Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Business & Professional", 
                description: "Real Estate, Law Firms, Insurance, Financial Advisors",
                icon: Users
              },
              { 
                title: "E-commerce & Retail", 
                description: "Online Stores, Fashion, Electronics, Beauty",
                icon: TrendingUp
              },
              { 
                title: "Healthcare & Wellness", 
                description: "Medical Clinics, Dentists, Therapists, Veterinary",
                icon: MessageSquare
              },
              { 
                title: "Hospitality & Services", 
                description: "Restaurants, Hotels, Salons, Fitness Centers",
                icon: Star
              },
              { 
                title: "Education & Training", 
                description: "Online Courses, Tutors, Schools, Bootcamps",
                icon: Bot
              },
              { 
                title: "Trades & Home Services", 
                description: "Plumbers, Electricians, HVAC, Landscaping",
                icon: Users
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardHeader className="text-center">
                  <category.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/solutions">
                Explore All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Trusted Across Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-8 flex items-center justify-center bg-card border-border">
                <div className="text-2xl font-bold text-muted-foreground">BRAND {i}</div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "500+", label: "Active Chatbots", icon: Bot },
              { metric: "98%", label: "Customer Satisfaction", icon: Star },
              { metric: "24/7", label: "Support Available", icon: MessageSquare }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                <div className="text-4xl font-bold mb-2 text-foreground">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses already using our industry-specific chatbots to automate customer interactions and boost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6" asChild>
              <a href="/demo">Request Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">
              CyberBots AI
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            Industry-specific AI chatbots that understand your business
          </p>
          <div className="flex justify-center space-x-8 text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t text-muted-foreground">
            © 2024 CyberBots AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
