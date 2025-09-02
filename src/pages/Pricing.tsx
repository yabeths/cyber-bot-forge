import React, { useState } from 'react';
import { Check, Star, ArrowRight, Rocket, Bot, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const launchPackages = [
    {
      id: 'startup',
      name: 'Startup Launch',
      price: 750,
      description: 'Perfect for new businesses ready to go online',
      features: [
        '5-Page Professional Website',
        'Mobile-Responsive Design',
        'Basic SEO Setup',
        '1 Month Free Hosting',
        'Marketing Strategy Plan',
        'Contact Forms & Analytics'
      ],
      popular: true
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Launch',
      price: 1200,
      description: 'Complete online store setup',
      features: [
        'Full E-commerce Website',
        'Payment Gateway Integration',
        'Product Management System',
        'Inventory Tracking',
        'Shopping Cart & Checkout',
        'Order Management'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Service',
      price: 900,
      description: 'For service-based businesses',
      features: [
        'Professional Website Design',
        'Appointment Booking System',
        'Client Portal Access',
        'Service Showcase Pages',
        'Testimonials & Reviews',
        'Lead Capture Forms'
      ],
      popular: false
    }
  ];

  const monthlyServices = [
    {
      id: 'hosting',
      name: 'Growth & Hosting Package',
      monthlyPrice: 150,
      yearlyPrice: 1500,
      description: 'Ongoing support and growth services',
      features: [
        '99.9% Uptime Hosting',
        'Weekly Backups & Security',
        'Monthly Performance Reports',
        'SEO Optimization Updates',
        'Content Updates (2 per month)',
        'Technical Support'
      ],
      required: true
    }
  ];

  const addOnServices = [
    {
      name: 'AI Customer Support Chatbot',
      monthlyPrice: 75,
      yearlyPrice: 750,
      description: '24/7 automated customer support',
      features: [
        '24/7 Customer Support',
        'FAQ Automation',
        'Lead Capture & Qualification',
        'Appointment Scheduling',
        'Multi-language Support',
        'Analytics & Reporting'
      ]
    },
    {
      name: 'Advanced SEO Package',
      monthlyPrice: 100,
      yearlyPrice: 1000,
      description: 'Premium SEO optimization',
      features: [
        'Advanced Keyword Research',
        'Competitor Analysis',
        'Monthly SEO Reports',
        'Link Building Strategy',
        'Local SEO Optimization',
        'Google My Business Management'
      ]
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
              Business Launch
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
            Simple, Transparent
            <br />
            <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            One-time launch packages plus ongoing monthly support. Everything you need to succeed online.
          </p>
        </div>
      </section>

      {/* Launch Packages */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Launch Packages (One-Time)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {launchPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-lg transition-all duration-300 bg-card border-border ${
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
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{pkg.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold text-foreground">${pkg.price}</span>
                      <span className="text-muted-foreground ml-1">one-time</span>
                    </div>
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
                    className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
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
        </div>
      </section>

      {/* Monthly Services */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Monthly Services</h2>
          <p className="text-center text-muted-foreground mb-12">Required for all launch packages</p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    billingCycle === 'yearly'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Yearly
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                    Save 17%
                  </Badge>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {monthlyServices.map((service) => (
              <Card key={service.id} className="bg-card border-border">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground">{service.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold text-foreground">
                        ${billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-primary mt-2">
                        Save ${(service.monthlyPrice * 12) - service.yearlyPrice} per year
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Optional Add-Ons</h2>
          <p className="text-center text-muted-foreground mb-12">Enhance your business with these optional services</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnServices.map((addon, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    {addon.name.includes('AI') ? (
                      <Bot className="h-12 w-12 text-primary" />
                    ) : (
                      <Search className="h-12 w-12 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{addon.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{addon.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-end justify-center">
                      <span className="text-3xl font-bold text-foreground">
                        ${billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {addon.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
                answer: "Each launch package includes a professionally designed website, hosting setup, basic SEO optimization, and a marketing strategy to attract your first 100 leads. The specific features vary by package type."
              },
              {
                question: "Is the Monthly Growth & Hosting Package required?",
                answer: "Yes, all launch packages require the Monthly Growth & Hosting Package ($150/month) for ongoing hosting, maintenance, updates, and support."
              },
              {
                question: "What if I don't get results?",
                answer: "We offer a no-risk guarantee. If you don't see increased traffic or receive at least 10 qualified leads within 30 days, we'll refund your entire launch fee."
              },
              {
                question: "Can I add the AI chatbot later?",
                answer: "Absolutely! The AI Customer Support Chatbot is an optional add-on that you can add at any time for $75/month."
              },
              {
                question: "How long does the launch process take?",
                answer: "Most launch packages are completed within 2-3 weeks. We'll keep you updated throughout the process and ensure everything meets your expectations."
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
            Ready to Launch Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your launch package and get your business online in just 2-3 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Start Your Launch</a>
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