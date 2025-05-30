
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import PillarCard from '@/components/home/PillarCard';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import { Button } from '@/components/ui/button';

const Home = () => {
  const pillars = [
    {
      title: "Confidence",
      description: "Develop the mindset and tools to embrace your authentic self, speak your truth, and live boldly in every decade of life.",
      icon: "🌟",
      link: "/pillars/confidence"
    },
    {
      title: "Style",
      description: "Discover how to express yourself through fashion, appearance, and personal presentation that feels true to you.",
      icon: "👗",
      link: "/pillars/style"
    },
    {
      title: "Longevity",
      description: "Implement science-backed strategies for vibrant physical health, mental sharpness, and emotional wellbeing as you age.",
      icon: "🌱",
      link: "/pillars/longevity"
    }
  ];

  const scrollToPillars = () => {
    const pillarsSection = document.getElementById('pillars-section');
    if (pillarsSection) {
      pillarsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/acc306a5-3414-40c3-988d-cfce06dadfe1.png"
            alt="Vibrant seniors being active outdoors" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in drop-shadow-lg">
              Age Boldly / Live Loudly
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in drop-shadow-md" style={{animationDelay: "0.2s"}}>
              Ditch the outdated rules. Rebellious aging is where vibrant health, bold confidence, and signature style take center stage.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button asChild size="lg" className="bg-teal hover:bg-teal-dark text-white shadow-lg">
                <Link to="/movement">Join the Movement</Link>
              </Button>
              <Button 
                onClick={scrollToPillars}
                variant="outline" 
                size="lg" 
                className="bg-white/30 backdrop-blur-sm text-white border-white hover:bg-white/40 shadow-lg"
              >
                Explore the Pillars
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
            className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white"
            aria-label="Scroll down"
          >
            <ArrowUp className="rotate-180 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Pillars section */}
      <section id="pillars-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Three Pillars</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our holistic approach to rebellious aging is built on three foundational pillars that
            work together to help you create a vibrant, fulfilling life at any age.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard 
                key={index}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                link={pillar.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
};

export default Home;
