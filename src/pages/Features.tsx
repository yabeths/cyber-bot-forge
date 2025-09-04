import React from 'react';
import { Rocket, Globe, Shield, Search, BarChart3, Bot, Users, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Professional Web Design",
      description: "Custom, mobile-responsive websites designed to showcase your brand and convert visitors into customers.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Reliable Hosting & Maintenance",
      description: "99.9% uptime guarantee with automatic backups, security updates, and ongoing technical support.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built-in search engine optimization to help your business rank higher and attract more customers.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Monthly reports on website traffic, lead generation, and business growth metrics.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Users,
      title: "Lead Generation Strategy",
      description: "Proven marketing strategies designed to attract your first 100 qualified leads.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Bot,
      title: "AI Customer Support (Optional)",
      description: "24/7 automated customer support chatbot to handle inquiries and capture leads.",
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
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Business Launch
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="/solutions" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Solutions</a>
            <a href="/features" className="text-blue-600 font-semibold">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Pricing</a>
            <a href="/demo" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">Get Demo</a>
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
            Complete Business Solutions
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Launch Successfully
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive business launch platform includes professional web design, reliable hosting, SEO optimization, and ongoing support.
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

      {/* Guarantee Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our No-Risk Guarantee</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Results or Full Refund</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              If you don't see increased traffic or receive at least 10 qualified leads within the first 30 days, 
              we'll refund your entire launch fee. No questions asked.
            </p>
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
            Join hundreds of successful businesses that have launched with our complete solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 shadow-2xl" asChild>
              <a href="/signup">Get Your Launch Package</a>
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

export default Features;