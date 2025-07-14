
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
      features: ["Lead Qualification", "Property Search", "Appointment Booking", "Market Updates"],
      color: "from-neon-purple to-neon-blue"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Product recommendations, order tracking, and customer support",
      features: ["Product Discovery", "Order Management", "Support Tickets", "Upselling"],
      color: "from-neon-blue to-neon-teal"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Appointment scheduling, symptom checking, and patient engagement",
      features: ["Appointment Booking", "Health Assessments", "Prescription Reminders", "FAQ Support"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Student support, course guidance, and learning assistance",
      features: ["Course Recommendations", "Study Schedules", "Assignment Help", "Progress Tracking"],
      color: "from-neon-teal to-neon-green"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Instant responses, ticket routing, and satisfaction tracking",
      features: ["Instant Responses", "Ticket Creation", "FAQ Database", "Escalation Management"],
      color: "from-neon-green to-neon-yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 cyber-grid">
      {/* Header */}
      <header className="relative z-50 p-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-neon-purple animate-glow-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              CyberBots AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#niches" className="text-gray-300 hover:text-neon-purple transition-colors">Niches</a>
            <a href="#features" className="text-gray-300 hover:text-neon-purple transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-neon-purple transition-colors">Get Demo</a>
            <Button className="cyber-button">Contact Us</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-transparent to-neon-blue/20 animate-pulse"></div>
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="cyber-title mb-6 animate-neon-flicker">
            Revolutionary AI Chatbots
            <br />
            <span className="bg-gradient-to-r from-neon-pink to-neon-teal bg-clip-text text-transparent">
              For Every Business Niche
            </span>
          </h1>
          <p className="cyber-subtitle mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI chatbots designed specifically for your industry. 
            Boost conversions, automate support, and engage customers 24/7 with our cyberpunk-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="cyber-button text-lg px-12 py-6 group">
              Get Your Custom Bot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 text-lg px-12 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            Why Choose CyberBots AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Deploy in minutes, not months" },
              { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption & compliance" },
              { icon: Users, title: "Multi-Channel", description: "Web, mobile, social media integration" },
              { icon: TrendingUp, title: "Analytics", description: "Real-time performance insights" }
            ].map((feature, index) => (
              <Card key={index} className="cyber-card group hover:animate-float">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto text-neon-purple group-hover:text-neon-blue transition-colors mb-4" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niche Showcases */}
      <section id="niches" className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neon-pink to-neon-teal bg-clip-text text-transparent">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {niches.map((niche, index) => (
              <Card key={index} className="cyber-card group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${niche.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <niche.icon className={`h-8 w-8 bg-gradient-to-r ${niche.color} bg-clip-text text-transparent`} />
                    <CardTitle className="text-white text-xl">{niche.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300">{niche.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {niche.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-neon-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`mt-6 w-full bg-gradient-to-r ${niche.color} hover:shadow-lg transition-all`}>
                    Explore {niche.title} Bots
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="cyber-card p-8 flex items-center justify-center">
                <div className="text-2xl font-bold text-neon-purple">BRAND {i}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "500+", label: "Active Chatbots", icon: Bot },
              { metric: "98%", label: "Customer Satisfaction", icon: Star },
              { metric: "24/7", label: "Support Available", icon: MessageSquare }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto text-neon-purple mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo" className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Get Your Custom Chatbot Demo
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Full Name *</label>
                  <Input
                    className="cyber-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email Address *</label>
                  <Input
                    className="cyber-input"
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
                  <label className="block text-white mb-2">Business Name</label>
                  <Input
                    className="cyber-input"
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    placeholder="Enter your business name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Industry/Niche</label>
                  <select
                    className="cyber-input w-full"
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
                <label className="block text-white mb-2">Tell us about your needs</label>
                <Textarea
                  className="cyber-input min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your chatbot requirements, expected volume, and any specific features you need..."
                />
              </div>
              <Button type="submit" className="cyber-button w-full text-lg py-6">
                Request Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neon-purple/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Bot className="h-8 w-8 text-neon-purple" />
            <span className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              CyberBots AI
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Revolutionizing business communication with AI-powered chatbots
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-neon-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-500">
            © 2024 CyberBots AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
