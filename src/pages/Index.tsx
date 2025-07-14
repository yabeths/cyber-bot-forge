
import React, { useState, useEffect } from 'react';
import { Bot, Zap, Shield, Users, TrendingUp, ArrowRight, Star, CheckCircle, MessageSquare, Building, ShoppingCart, Heart, GraduationCap, Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    niche: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    toast({
      title: "Demo Request Sent!",
      description: "We'll contact you within 24 hours to schedule your custom chatbot demo.",
    });
    setFormData({ name: '', email: '', business: '', niche: '', message: '' });
  };

  const niches = [
    {
      icon: Building,
      title: "Real Estate",
      description: "Lead qualification, property matching, and 24/7 client support",
      features: ["Lead Qualification", "Property Search", "Appointment Booking", "Market Updates"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Product recommendations, order tracking, and customer support",
      features: ["Product Discovery", "Order Management", "Support Tickets", "Upselling"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Appointment scheduling, symptom checking, and patient engagement",
      features: ["Appointment Booking", "Health Assessments", "Prescription Reminders", "FAQ Support"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Student support, course guidance, and learning assistance",
      features: ["Course Recommendations", "Study Schedules", "Assignment Help", "Progress Tracking"]
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Instant responses, ticket routing, and satisfaction tracking",
      features: ["Instant Responses", "Ticket Creation", "FAQ Database", "Escalation Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">
              CyberBots AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#niches" className="text-muted-foreground hover:text-primary transition-colors">Niches</a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">Get Demo</a>
            <Button>Contact Us</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Revolutionary AI Chatbots
            <br />
            <span className="text-primary">
              For Every Business Niche
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Transform your business with cutting-edge AI chatbots designed specifically for your industry. 
            Boost conversions, automate support, and engage customers 24/7 with our intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-12 py-6">
              Get Your Custom Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose CyberBots AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Deploy in minutes, not months" },
              { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption & compliance" },
              { icon: Users, title: "Multi-Channel", description: "Web, mobile, social media integration" },
              { icon: TrendingUp, title: "Analytics", description: "Real-time performance insights" }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niche Showcases */}
      <section id="niches" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {niches.map((niche, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <niche.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{niche.title}</CardTitle>
                  </div>
                  <CardDescription>{niche.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {niche.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full">
                    Explore {niche.title} Bots
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-8 flex items-center justify-center">
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
                <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Get Your Custom Chatbot Demo
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name</label>
                  <Input
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    placeholder="Enter your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Industry/Niche</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.niche}
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                  >
                    <option value="">Select your industry</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your needs</label>
                <Textarea
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your chatbot requirements, expected volume, and any specific features you need..."
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                Request Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">
              CyberBots AI
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            Revolutionizing business communication with AI-powered chatbots
          </p>
          <div className="flex justify-center space-x-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
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
