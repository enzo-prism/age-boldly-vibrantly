
import React from 'react';
import { Button } from '@/components/ui/button';

const Movement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Movement</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Rebellious Aging is more than a lifestyle—it's a movement challenging outdated notions of what it means to grow older in today's world.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Origin Story</h2>
              <p className="text-gray-700 mb-4">
                Rebellious Aging began in 2018 when our founder, Elizabeth Chen, found herself facing her 60th birthday with mixed emotions. Despite her vibrant health and zest for life, she felt invisible in a youth-obsessed culture.
              </p>
              <p className="text-gray-700 mb-4">
                After connecting with others who shared similar experiences, she realized there was a need for a community that celebrated aging as a time of growth, wisdom, and new possibilities rather than decline.
              </p>
              <p className="text-gray-700">
                What started as a small blog and local meetup group quickly grew into a global movement, with thousands of people embracing a new paradigm of aging with confidence, style, and purpose.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Woman looking confidently at camera" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-xl text-center italic mb-6">
                "To empower adults in their second half of life to reject limiting stereotypes and embrace aging as a time of continued growth, joy, and purpose through community, education, and advocacy."
              </p>
              <div className="w-20 h-1 bg-coral mx-auto"></div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">What We Stand For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-teal mb-2">Authenticity</h4>
                  <p className="text-gray-700">
                    Embracing who you truly are, with all the wisdom, experience, and unique qualities you've developed over a lifetime.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-teal mb-2">Growth Mindset</h4>
                  <p className="text-gray-700">
                    Believing that learning, development, and transformation continue throughout our entire lives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-teal mb-2">Community</h4>
                  <p className="text-gray-700">
                    Creating connections that provide support, inspiration, and a sense of belonging as we navigate this journey together.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-teal mb-2">Health Optimization</h4>
                  <p className="text-gray-700">
                    Taking an evidence-based approach to maximize physical and cognitive health for vibrant longevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Rebellious Aging Manifesto</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our manifesto outlines the core principles and beliefs that guide our community. Download it for daily inspiration and a reminder of your commitment to aging rebelliously.
            </p>
            <Button className="bg-coral hover:bg-coral-dark text-white">
              Download the Manifesto (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movement;
