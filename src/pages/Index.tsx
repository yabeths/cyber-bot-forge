
import React, { useState, useEffect } from 'react';
import { Bot, ArrowRight, Star, MessageSquare, Users, TrendingUp, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <a href="/solutions" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Solutions</a>
            <a href="/features" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Features</a>
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
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        
        <div className={`max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Lead Generation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Turn Visitors Into
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Qualified Leads
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Smart AI chatbots that understand your business, engage your visitors 24/7, and convert them into high-quality leads automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="text-lg px-16 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300" asChild>
              <a href="/signup">
                Start Converting Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-16 py-8 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-lg" asChild>
              <a href="/demo">Watch Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Leads AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI chatbots don't just chat—they qualify, nurture, and convert your website visitors into sales-ready leads.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "24/7 Lead Capture", 
                description: "Never miss a potential customer. Our AI works around the clock to engage visitors and capture leads.",
                icon: MessageSquare,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Smart Qualification", 
                description: "AI automatically qualifies leads based on your criteria, sending only high-quality prospects to your team.",
                icon: Shield,
                gradient: "from-indigo-500 to-purple-500"
              },
              { 
                title: "Instant Analytics", 
                description: "Get real-time insights on lead quality, conversion rates, and chatbot performance.",
                icon: BarChart3,
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-4">
                  <div className={`h-16 w-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Trusted by Growing Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { metric: "500+", label: "Active Chatbots", icon: Bot },
              { metric: "85%", label: "Lead Conversion Rate", icon: TrendingUp },
              { metric: "24/7", label: "Always Available", icon: MessageSquare }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="h-20 w-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stat.metric}</div>
                <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to 10x Your Lead Generation?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of businesses already using Leads AI to automate their lead generation and boost conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-16 py-8 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-16 py-8 border-2 border-white text-white hover:bg-white/10" asChild>
              <a href="/demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leads AI
            </span>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            AI-powered chatbots that turn visitors into qualified leads
          </p>
          <div className="flex justify-center space-x-8 text-gray-500 mb-8">
            <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="/admin" className="hover:text-blue-600 transition-colors">Admin Dashboard</a>
          </div>
          <div className="pt-8 border-t text-gray-500">
            © 2024 Leads AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
