
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  return (
    <div>
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-700 mb-8">
              We're crafting something special just for you!
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-teal/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're busy creating amazing content about rebellious aging, confidence, style, and longevity. 
                Our blog will be filled with expert advice, practical tips, and inspiring stories to support your journey.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Be the first to know when we launch!</h3>
              <p className="text-gray-600 mb-6">
                Get notified when our blog goes live and receive exclusive early access to our best content.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1"
                  required
                />
                <Button className="bg-coral hover:bg-coral-dark text-white">
                  Notify Me
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
