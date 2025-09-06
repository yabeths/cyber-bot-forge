import React, { useState } from 'react';
import { Check, Star, ArrowRight, Rocket, Bot, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {

  const packages = [
    {
      id: 'launch-starter',
      name: 'Starter Launch',
      price: 750,
      monthlyHosting: 150,
      description: 'Perfect for small businesses getting online',
      features: [
        'Professional 5-page website',
        'Basic SEO setup',
        '1 month free hosting included',
        'Initial marketing strategy',
        'Contact forms & basic integrations',
        'Mobile-responsive design'
      ],
      popular: false
    },
    {
      id: 'launch-professional',
      name: 'Professional Launch',
      price: 1200,
      monthlyHosting: 175,
      description: 'Complete solution for growing businesses',
      features: [
        'Custom 8-page website',
        'Advanced SEO optimization',
        '2 months free hosting included',
        'Lead generation strategy (first 100 leads)',
        'E-commerce setup (optional)',
        'Blog integration',
        'Advanced analytics setup',
        'Social media integration'
      ],
      popular: true
    },
    {
      id: 'launch-enterprise',
      name: 'Enterprise Launch',
      price: 2000,
      monthlyHosting: 200,
      description: 'Premium solution for established businesses',
      features: [
        'Custom unlimited page website',
        'Premium SEO package',
        '3 months free hosting included',
        'Advanced marketing automation',
        'Custom integrations',
        'Priority support & training',
        'White-label solution',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Leads AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="/pricing" className="text-primary font-medium">Pricing</a>
            <a href="/demo" className="text-muted-foreground hover:text-primary transition-colors">Get Demo</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Launch Package
            <br />
            <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional web development and hosting solutions to get your business online. Choose your launch package and add ongoing hosting support.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Launch Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-lg transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold text-foreground">
                        ${pkg.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        one-time
                      </span>
                    </div>
                    <p className="text-sm text-primary mt-2">
                      + ${pkg.monthlyHosting}/month hosting
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="/signup">
                      Choose {pkg.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-On Services */}
          <div className="bg-muted/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Optional Add-Ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center space-x-4">
                  <Bot className="h-12 w-12 text-primary" />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-foreground">AI Customer Support Chatbot</h4>
                    <p className="text-muted-foreground">24/7 automated customer support and lead capture</p>
                    <p className="text-2xl font-bold text-primary mt-2">$75/month</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center space-x-4">
                  <Search className="h-12 w-12 text-primary" />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-foreground">Advanced SEO Package</h4>
                    <p className="text-muted-foreground">Premium SEO optimization & monthly reporting</p>
                    <p className="text-2xl font-bold text-primary mt-2">$100/month</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "What's included in the launch package?",
                answer: "Each launch package includes a custom website design, hosting setup, basic SEO optimization, and an initial marketing strategy. Higher tiers include additional pages, advanced features, and more comprehensive support."
              },
              {
                question: "What does the monthly hosting fee cover?",
                answer: "Monthly hosting includes reliable web hosting, automatic backups, security updates, performance monitoring, monthly analytics reports, and ongoing technical support."
              },
              {
                question: "Can I upgrade my package later?",
                answer: "Yes! You can upgrade your website and hosting package at any time. We'll work with you to add new features, pages, or functionality as your business grows."
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer: "Yes! If you don't see increased traffic or receive at least 10 qualified leads within the first 30 days, we'll refund your entire launch fee. No questions asked."
              },
              {
                question: "How long does it take to launch my website?",
                answer: "Most websites are completed within 2-4 weeks depending on the package selected and content provided. We'll give you a detailed timeline during your consultation."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Launch Your Business Online?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of successful businesses that have launched with our complete web development and hosting solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Get Your Launch Package</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6" asChild>
              <a href="/demo">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;