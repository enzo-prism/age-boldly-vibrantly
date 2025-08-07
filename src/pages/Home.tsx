import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import PillarCard from '@/components/home/PillarCard';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import WelcomePopup from '@/components/home/WelcomePopup';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Home = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);


  // Track carousel current slide
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const handleCloseWelcomePopup = () => {
    setShowWelcomePopup(false);
  };

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
      title: "Health",
      description: "Implement science-backed strategies for vibrant physical health, mental sharpness, and emotional wellbeing as you age.",
      icon: "🌱",
      link: "/pillars/health"
    }
  ];

  const heroImages = [
    "/lovable-uploads/e383e12d-d193-4b00-864e-4593b167f3f4.png",
    "/lovable-uploads/c1463203-92fc-434c-a583-4399bb786c73.png",
    "/lovable-uploads/30b1e0f5-39bd-4e3e-8a1f-6c10d54b384a.png",
    "/lovable-uploads/efa97b78-3cbb-4f8c-b543-050d2d59e578.png",
    "/lovable-uploads/08d809cc-1f8a-475d-b10f-17d66e8b0502.png",
    "/lovable-uploads/e0902678-17f6-460f-be73-3b9521f08fb7.png",
    "/lovable-uploads/8c02e566-3f53-4592-ab46-09bb1ec08c83.png",
    "/lovable-uploads/34f618fe-81a8-41b5-8235-6f432ce55ce7.png",
    "/lovable-uploads/6adf3183-9e2d-4253-98d4-ec336f1daa3e.png"
  ];

  // Preload the second image immediately
  useEffect(() => {
    if (heroImages.length > 1) {
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set(prev).add(1));
      };
      img.src = heroImages[1];
    }
  }, []);

  // Progressive loading function
  const loadImage = (index: number) => {
    if (!loadedImages.has(index) && !preloadedImages.has(index)) {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(index));
      };
      img.src = heroImages[index];
    }
  };

  // Load next images when carousel becomes active
  const handleCarouselSelect = (index: number) => {
    // Load current image if not loaded
    loadImage(index);
    
    // Preload next image
    const nextIndex = (index + 1) % heroImages.length;
    loadImage(nextIndex);
  };

  const scrollToPillars = () => {
    const pillarsSection = document.getElementById('pillars-section');
    if (pillarsSection) {
      pillarsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <WelcomePopup 
        isOpen={showWelcomePopup} 
        onClose={handleCloseWelcomePopup} 
      />

      {/* Hero section */}
      <section className="min-h-[90vh] py-12 lg:py-0">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
                  Age Boldly / Live Loudly
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 animate-fade-in" style={{animationDelay: "0.2s"}}>
                  Ditch the outdated rules. Rebellious aging is where vibrant health, bold confidence, and signature style take center stage.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                  <Button asChild size="lg" className="bg-teal hover:bg-teal-dark text-white shadow-lg">
                    <Link to="/our-story">Our Story</Link>
                  </Button>
                  <Button 
                    onClick={scrollToPillars}
                    variant="outline" 
                    size="lg" 
                    className="border-teal text-teal hover:bg-teal hover:text-white shadow-sm"
                  >
                    Explore the Pillars
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 shadow-sm"
                  >
                    <Link to="/contact">Contact</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Carousel
                  setApi={setApi}
                  className="w-full touch-pan-y"
                  opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                    containScroll: "trimSnaps",
                    skipSnaps: false,
                    watchDrag: true,
                  }}
                  plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                >
                  <CarouselContent className="-ml-0">
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-0 basis-full">
                        <div className="relative w-full">
                          {(loadedImages.has(index) || preloadedImages.has(index) || index === 0) ? (
                            <img 
                              src={image}
                              alt={`Vibrant aging lifestyle ${index + 1}`}
                              className="w-full h-[50vh] lg:h-[60vh] object-cover transition-opacity duration-1000"
                              style={{
                                objectPosition: 'center 30%'
                              }}
                              loading={index === 0 ? "eager" : "lazy"}
                              onLoad={() => {
                                if (index !== 0) {
                                  handleCarouselSelect(index);
                                }
                              }}
                            />
                          ) : (
                            <div className="w-full h-[50vh] lg:h-[60vh] bg-gray-200 animate-pulse flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                
                {/* Progress Bar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-8 bg-white' 
                          : 'w-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
            className="w-10 h-10 flex items-center justify-center bg-teal/20 backdrop-blur-sm rounded-full text-teal hover:bg-teal/30 transition-colors"
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
