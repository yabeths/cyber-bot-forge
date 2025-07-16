import React, { useState, useEffect } from 'react';
import { Bot, Zap, Shield, Users, TrendingUp, ArrowRight, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { chatbotNiches } from '@/data/chatbotNiches';
import CategorySection from '@/components/CategorySection';

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

  const handleGetBot = (nicheId: string) => {
    console.log('Get bot requested for:', nicheId);
    toast({
      title: "Bot Request Received!",
      description: "We'll prepare a custom demo for your specific niche. Check your email for next steps.",
    });
    
    // Scroll to demo form
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">Get Demo</a>
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
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-primary/20 text-primary hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Industry-Specific Chatbots?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Industry Expertise", description: "Pre-trained on your industry's common questions and workflows" },
              { icon: Shield, title: "Compliance Ready", description: "Built with industry regulations and requirements in mind" },
              { icon: Users, title: "Customer Language", description: "Speaks your customers' language and understands their needs" },
              { icon: TrendingUp, title: "Proven Results", description: "Optimized conversion paths based on industry best practices" }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-gray-200">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Solutions by Industry */}
      <section id="solutions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Chatbot Solutions by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each chatbot is specifically designed for your industry's unique needs, common questions, and business processes.
            </p>
          </div>

          {chatbotNiches.map((category) => (
            <CategorySection 
              key={category.id}
              category={category}
              onGetBot={handleGetBot}
            />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Trusted Across Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-8 flex items-center justify-center bg-white border-gray-200">
                <div className="text-2xl font-bold text-gray-400">BRAND {i}</div>
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
                <stat.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <div className="text-4xl font-bold mb-2 text-gray-900">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Get Your Custom Industry Chatbot Demo
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Business Name</label>
                  <Input
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    placeholder="Enter your business name"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Industry/Niche</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    value={formData.niche}
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                  >
                    <option value="">Select your industry</option>
                    {chatbotNiches.map((category) => (
                      <optgroup key={category.id} label={category.name}>
                        {category.niches.map((niche) => (
                          <option key={niche.id} value={niche.id}>{niche.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Tell us about your needs</label>
                <Textarea
                  className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your chatbot requirements, expected volume, and any specific features you need..."
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 text-white">
                Request Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              CyberBots AI
            </span>
          </div>
          <p className="text-gray-600 mb-6">
            Industry-specific AI chatbots that understand your business
          </p>
          <div className="flex justify-center space-x-8 text-gray-600">
            <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t text-gray-500">
            © 2024 CyberBots AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
