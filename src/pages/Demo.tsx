
import React, { useState } from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { chatbotNiches } from '@/data/chatbotNiches';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    niche: '',
    message: ''
  });
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    toast({
      title: "Demo Request Sent!",
      description: "We'll contact you within 24 hours to schedule your custom chatbot demo.",
    });
    setFormData({ name: '', email: '', business: '', niche: '', message: '' });
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
              Leads AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/demo" className="text-primary font-medium">Get Demo</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            See Your Chatbot
            <br />
            <span className="text-primary">In Action</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Get a personalized demo of how our AI chatbot can transform your business. We'll show you exactly how it works for your industry.
          </p>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Get Your Custom Industry Chatbot Demo
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Full Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    required
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Business Name</label>
                  <Input
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    placeholder="Enter your business name"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Industry/Niche</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                <label className="block text-sm font-medium mb-2 text-foreground">Tell us about your needs</label>
                <Textarea
                  className="min-h-[120px] border-border focus:border-primary focus:ring-primary"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your chatbot requirements, expected volume, and any specific features you need..."
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What to Expect in Your Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Setup",
                description: "We'll configure a demo chatbot specifically for your industry and use case"
              },
              {
                title: "Live Interaction",
                description: "See exactly how customers will interact with your chatbot in real-time"
              },
              {
                title: "Custom Features",
                description: "Explore features and integrations tailored to your business needs"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border">
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
