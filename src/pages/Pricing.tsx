
import React, { useState } from 'react';
import { Check, Star, ArrowRight, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for small businesses getting started',
      features: [
        '1 Chatbot',
        'Up to 1,000 conversations/month',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: 'Ideal for growing businesses',
      features: [
        '3 Chatbots',
        'Up to 10,000 conversations/month',
        'Advanced analytics & reports',
        'Priority support',
        'All integrations included',
        'Custom branding',
        'Lead management tools'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        'SLA guarantee',
        'Training & onboarding'
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
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Leads.Ai
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
            Choose the perfect plan for your business. Start small and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
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

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative hover:shadow-lg transition-all duration-300 bg-card border-border ${
                  plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold text-foreground">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-primary mt-2">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="/signup">
                      Choose {plan.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
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
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 14-day free trial on all plans. No credit card required to start your trial."
              },
              {
                question: "What happens if I exceed my conversation limit?",
                answer: "We'll notify you as you approach your limit. You can upgrade your plan or purchase additional conversations at any time."
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Yes, we work with large organizations to create custom solutions. Contact us to discuss your specific needs."
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses already using our chatbots to automate their customer interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6" asChild>
              <a href="/demo">Request Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
