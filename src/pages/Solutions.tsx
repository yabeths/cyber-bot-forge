
import React from 'react';
import { Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { chatbotNiches } from '@/data/chatbotNiches';
import CategorySection from '@/components/CategorySection';

const Solutions = () => {
  const { toast } = useToast();

  const handleGetBot = (nicheId: string) => {
    console.log('Get bot requested for:', nicheId);
    toast({
      title: "Bot Request Received!",
      description: "We'll prepare a custom demo for your specific niche. Check your email for next steps.",
    });
    
    // Scroll to top or redirect to demo page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <a href="/solutions" className="text-primary font-medium">Solutions</a>
            <a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
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
            Industry-Specific
            <br />
            <span className="text-primary">Chatbot Solutions</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Discover AI chatbots designed specifically for your industry. Each solution is pre-trained with industry knowledge and optimized for your business needs.
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="/demo">Request Custom Demo</a>
          </Button>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Choose Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each chatbot is specifically designed for your industry's unique needs, common questions, and business processes.
            </p>
          </div>

          {chatbotNiches.map((category) => (
            <CategorySection 
              key={category.id}
              category={category}
              onGetBot={handleGetBot}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your plan and launch your industry-specific chatbot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/pricing">View Pricing</a>
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

export default Solutions;
