
import React from 'react';
import { Rocket, ArrowRight, Globe, Shield, Search, Bot, Users, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Solutions = () => {
  const { toast } = useToast();

  const handleGetStarted = (packageType: string) => {
    console.log('Get started requested for:', packageType);
    toast({
      title: "Great Choice!",
      description: `We'll help you launch your ${packageType} business online. Redirecting to signup...`,
    });
    
    setTimeout(() => {
      window.location.href = '/signup';
    }, 1500);
  };

  const packages = [
    {
      name: "Startup Launch",
      description: "Perfect for new businesses ready to go online",
      icon: "🚀",
      features: ["5-Page Website", "Basic SEO Setup", "1 Month Free Hosting", "Marketing Strategy"],
      popular: true,
      price: "$750"
    },
    {
      name: "E-commerce Launch",
      description: "Complete online store setup with payment processing",
      icon: "🛒",
      features: ["Online Store", "Payment Integration", "Product Management", "Inventory System"],
      price: "$1,200"
    },
    {
      name: "Service Business",
      description: "Professional websites for service-based businesses",
      icon: "💼",
      features: ["Booking System", "Client Portal", "Service Showcase", "Contact Forms"],
      price: "$900"
    },
    {
      name: "Restaurant Launch",
      description: "Websites with online ordering and reservation systems",
      icon: "🍽️",
      features: ["Menu Display", "Online Ordering", "Reservation System", "Location Info"],
      price: "$850"
    },
    {
      name: "Professional Services", 
      description: "Websites for consultants, lawyers, and professionals",
      icon: "🎯",
      features: ["Portfolio Showcase", "Appointment Booking", "Client Testimonials", "Blog Integration"],
      price: "$800"
    },
    {
      name: "Creative Portfolio",
      description: "Stunning portfolios for artists and creatives",
      icon: "🎨",
      features: ["Gallery Showcase", "Portfolio Management", "Client Booking", "Creative Tools"],
      price: "$700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Business Launch
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
            <Rocket className="w-4 h-4 mr-2" />
            Launch Packages for Every Business
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Choose Your Perfect
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Launch Package
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From startups to established businesses, we have the perfect solution to get you online quickly and professionally.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white group">
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {pkg.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">{pkg.price}</div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleGetStarted(pkg.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    Choose Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Optional Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-4">
                <Bot className="h-12 w-12 text-blue-600" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">AI Customer Support Chatbot</h3>
                  <p className="text-gray-600">24/7 automated customer support</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">$75/month</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-4">
                <Search className="h-12 w-12 text-blue-600" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Advanced SEO Package</h3>
                  <p className="text-gray-600">Premium SEO optimization & reporting</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">$100/month</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Launch Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            All packages include our Monthly Growth & Hosting package ($150/month) for ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl" asChild>
              <a href="/signup">Start Your Launch</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white/10" asChild>
              <a href="/demo">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
