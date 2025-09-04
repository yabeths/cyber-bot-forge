
import React, { useState } from 'react';
import { Check, Star, ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { chatbotNiches } from '@/data/chatbotNiches';

const Signup = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: '',
    password: '',
    agreeToTerms: false,
    emailUpdates: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    const element = document.getElementById('signup-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!formData.fullName || !formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    try {
      // Here you would integrate with Supabase for authentication and Stripe for payments
      console.log('Signup data:', {
        ...formData,
        selectedPlan,
        billingCycle,
        planDetails: plans.find(p => p.id === selectedPlan)
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Account Created Successfully!",
        description: "Welcome to LeadsAi! Check your email for next steps.",
      });

      // In a real implementation, you would redirect to a success page
      // window.location.href = '/welcome';
      
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup Failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentPlan = plans.find(p => p.id === selectedPlan);
  const currentPrice = billingCycle === 'monthly' ? currentPlan?.monthlyPrice : currentPlan?.yearlyPrice;
  const savings = currentPlan ? (currentPlan.monthlyPrice * 12) - currentPlan.yearlyPrice : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              LeadsAi
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Back to Home
            </a>
            <Button variant="outline" asChild>
              <a href="/login">Sign In</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your Perfect
            <br />
            <span className="text-primary">Chatbot Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start automating your customer interactions today. Select a plan that fits your business needs and scale as you grow.
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
                className={`relative hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
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
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
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
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Choose {plan.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup-form" className="py-20 px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold">Create Your Account</CardTitle>
              <CardDescription className="text-lg">
                You've selected the <strong>{currentPlan?.name}</strong> plan at ${currentPrice}/{billingCycle === 'monthly' ? 'month' : 'year'}
                {billingCycle === 'yearly' && savings > 0 && (
                  <span className="block text-primary mt-1">Save ${savings} per year!</span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessType" className="text-sm font-medium">Business/Niche Type</Label>
                  <select
                    id="businessType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option value="">Select your business type</option>
                    {chatbotNiches.map((category) => (
                      <optgroup key={category.id} label={category.name}>
                        {category.niches.map((niche) => (
                          <option key={niche.id} value={niche.name}>{niche.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Create a secure password"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="updates"
                      checked={formData.emailUpdates}
                      onCheckedChange={(checked) => setFormData({...formData, emailUpdates: checked as boolean})}
                    />
                    <Label htmlFor="updates" className="text-sm">
                      Send me product updates and marketing emails
                    </Label>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    <span className="font-medium">Secure Payment</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your payment information is encrypted and secure. You can cancel anytime.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Start ${currentPrice}/{billingCycle === 'monthly' ? 'mo' : 'yr'} Plan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-sm text-muted-foreground">Bank-level security with GDPR compliance</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Expert help whenever you need it</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Quick Setup</h3>
              <p className="text-sm text-muted-foreground">Get started in under 10 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
