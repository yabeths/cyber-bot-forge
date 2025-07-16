
import React from 'react';
import { Bot, Zap, Shield, Users, TrendingUp, MessageSquare, Star, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    { 
      icon: Zap, 
      title: "Industry Expertise", 
      description: "Pre-trained on your industry's common questions and workflows",
      details: "Our chatbots come with industry-specific knowledge bases, understanding terminology, processes, and customer needs unique to your sector."
    },
    { 
      icon: Shield, 
      title: "Compliance Ready", 
      description: "Built with industry regulations and requirements in mind",
      details: "GDPR, HIPAA, and other compliance standards are built into our chatbots, ensuring your customer data is always protected."
    },
    { 
      icon: Users, 
      title: "Customer Language", 
      description: "Speaks your customers' language and understands their needs",
      details: "Natural language processing tailored to your industry's communication style and customer expectations."
    },
    { 
      icon: TrendingUp, 
      title: "Proven Results", 
      description: "Optimized conversion paths based on industry best practices",
      details: "Data-driven conversation flows that have been tested and optimized across thousands of interactions in your industry."
    }
  ];

  const capabilities = [
    {
      title: "Lead Generation",
      description: "Automatically qualify and capture leads 24/7",
      icon: Users
    },
    {
      title: "Customer Support",
      description: "Instant responses to common questions and issues",
      icon: MessageSquare
    },
    {
      title: "Appointment Booking",
      description: "Schedule meetings and appointments seamlessly",
      icon: CheckCircle
    },
    {
      title: "Sales Assistance",
      description: "Guide customers through purchase decisions",
      icon: TrendingUp
    }
  ];

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
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="/features" className="text-primary font-medium">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/demo" className="text-muted-foreground hover:text-primary transition-colors">Get Demo</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Powerful Features for
            <br />
            <span className="text-primary">Every Business</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Our AI chatbots come packed with industry-specific features designed to automate your most important business processes and delight your customers.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose Industry-Specific Chatbots?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What Our Chatbots Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
                <CardHeader>
                  <capability.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-foreground">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Trusted Across Industries</h2>
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
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how our industry-specific chatbots can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/demo">Request Demo</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6" asChild>
              <a href="/pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
