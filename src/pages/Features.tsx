import React from 'react';
import { Zap, MessageSquare, Brain, BarChart3, Shield, Clock, Users, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart AI Conversations",
      description: "Advanced natural language processing that understands context and provides human-like responses.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track lead quality, conversion rates, and chatbot performance with detailed insights.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Lead Qualification",
      description: "Automatically qualify leads based on your criteria and route high-quality prospects to your team.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a lead. Your AI assistant works around the clock to engage visitors.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Users,
      title: "Multi-channel Support",
      description: "Deploy across website, social media, and messaging platforms seamlessly.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices with responsive design and fast loading.",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leads AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="/solutions" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Solutions</a>
            <a href="/features" className="text-blue-600 font-semibold">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Pricing</a>
            <a href="/demo" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Get Demo</a>
            <a href="/admin" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Dashboard</a>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Convert More Leads
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our AI chatbot platform comes packed with features designed to maximize your lead generation and conversion rates.
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-2xl" asChild>
            <a href="/demo">See Features in Action</a>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`h-16 w-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how Leads AI can transform your lead generation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white/10" asChild>
              <a href="/demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
