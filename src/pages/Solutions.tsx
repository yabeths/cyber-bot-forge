
import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Solutions = () => {
  const { toast } = useToast();

  const handleGetStarted = (industry: string) => {
    console.log('Get started requested for:', industry);
    toast({
      title: "Great Choice!",
      description: `We'll help you set up the perfect chatbot for ${industry}. Redirecting to signup...`,
    });
    
    setTimeout(() => {
      window.location.href = '/signup';
    }, 1500);
  };

  const industries = [
    {
      name: "Real Estate",
      description: "Qualify leads, schedule viewings, and capture property interests 24/7",
      icon: "🏠",
      features: ["Lead Qualification", "Viewing Scheduler", "Property Matcher"],
      popular: true
    },
    {
      name: "Healthcare",
      description: "Appointment booking, patient screening, and 24/7 support",
      icon: "🏥",
      features: ["Appointment Booking", "Symptom Checker", "Patient Support"]
    },
    {
      name: "E-commerce",
      description: "Product recommendations, order tracking, and abandoned cart recovery",
      icon: "🛒",
      features: ["Product Finder", "Order Support", "Cart Recovery"]
    },
    {
      name: "Professional Services",
      description: "Consultation booking, service inquiries, and client qualification",
      icon: "💼",
      features: ["Consultation Booking", "Service Quotes", "Client Screening"]
    },
    {
      name: "Restaurants",
      description: "Table reservations, menu questions, and delivery support",
      icon: "🍽️",
      features: ["Reservation System", "Menu Assistant", "Order Support"]
    },
    {
      name: "Education",
      description: "Course enrollment, student support, and admission guidance",
      icon: "🎓",
      features: ["Course Enrollment", "Student Support", "Admission Help"]
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
            <a href="/solutions" className="text-blue-600 font-semibold">Solutions</a>
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Industry-Specific Solutions
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            AI Chatbots Built for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Each chatbot is pre-trained with industry knowledge and optimized for your specific business needs.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="relative hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white group">
                {industry.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{industry.name}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleGetStarted(industry.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            Don't See Your Industry?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We create custom solutions for any business. Let's discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl" asChild>
              <a href="/demo">Book Custom Demo</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white/10" asChild>
              <a href="/pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
