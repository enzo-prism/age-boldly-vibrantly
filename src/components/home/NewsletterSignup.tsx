
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally submit to an API
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail('');
  };

  return (
    <section className="bg-teal/10 section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center text-spacing">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Join the Rebellious Aging Movement</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            More rebellious content in the works! Get exclusive tips, resources, and inspiration delivered straight to your inbox.
            We'll help you navigate the journey of aging with purpose and vitality.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row button-spacing max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-teal hover:bg-teal-dark text-white transition-colors h-12 px-8"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-500">
            We respect your privacy and will never share your information.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
