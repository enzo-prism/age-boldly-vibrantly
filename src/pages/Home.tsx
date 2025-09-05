import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PillarCard from '@/components/home/PillarCard';
import WelcomePopup from '@/components/home/WelcomePopup';
import ConnectCTA from '@/components/common/ConnectCTA';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
// import Autoplay from 'embla-carousel-autoplay'; // Removed to prevent auto-scrolling

const Home = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Prevent auto-scrolling during initial load
  // Removed scroll lock to fix intermittent scrolling issues


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
    "/lovable-uploads/a14b531d-8674-4949-9d29-5db73262868d.png",
    "/lovable-uploads/c1463203-92fc-434c-a583-4399bb786c73.png",
    "/lovable-uploads/30b1e0f5-39bd-4e3e-8a1f-6c10d54b384a.png",
    "/lovable-uploads/efa97b78-3cbb-4f8c-b543-050d2d59e578.png",
    "/lovable-uploads/08d809cc-1f8a-475d-b10f-17d66e8b0502.png",
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


  return (
    <>
      <WelcomePopup 
        isOpen={showWelcomePopup} 
        onClose={handleCloseWelcomePopup} 
      />

      {/* Hero section */}
      <section className="hero-spacing">
        <div className="container mx-auto container-padding h-full">
          <div className="grid lg:grid-cols-2 grid-gap-responsive h-full items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="max-w-2xl text-spacing">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in">
                  Age Boldly / Live Loudly
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 animate-fade-in leading-relaxed" style={{animationDelay: "0.2s"}}>
                  Ditch the outdated rules. Rebellious aging is where vibrant health, bold confidence, and signature style take center stage.
                </p>
                <div className="flex flex-col sm:flex-row button-spacing animate-fade-in" style={{animationDelay: "0.4s"}}>
                  <Button asChild size="lg" className="bg-teal hover:bg-teal-dark text-white shadow-lg min-h-[44px] text-base font-semibold">
                    <Link to="/our-story">Our Story</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-teal text-teal hover:bg-teal hover:text-white shadow-sm min-h-[44px] text-base font-medium"
                    onClick={() => {
                      const pillarsSection = document.getElementById('pillars-section');
                      if (pillarsSection) {
                        pillarsSection.scrollIntoView({ behavior: 'auto' });
                      }
                    }}
                  >
                    Explore the Pillars
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Carousel
                  setApi={setApi}
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                    dragFree: false,
                    containScroll: "trimSnaps",
                    skipSnaps: false,
                    watchDrag: true,
                  }}
                  plugins={[]} // Removed Autoplay to prevent auto-scrolling
                >
                  <CarouselContent className="-ml-0">
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-0 basis-full">
                        <div className="relative w-full">
                          <AspectRatio ratio={1} className="bg-gray-200 overflow-hidden">
                            {(loadedImages.has(index) || preloadedImages.has(index) || index === 0) ? (
                             <img 
                                src={image}
                                alt={`Vibrant aging lifestyle ${index + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-1000"
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
                              <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                                <div className="text-gray-400">Loading...</div>
                              </div>
                            )}
                          </AspectRatio>
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
                      className={`h-2 md:h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentSlide 
                          ? 'w-10 md:w-8 bg-white' 
                          : 'w-2 md:w-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Pillars section */}
      <section id="pillars-section" className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center prose-spacing mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">The Three Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
              Our holistic approach to rebellious aging is built on three foundational pillars that
              work together to help you create a vibrant, fulfilling life at any age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 grid-gap-responsive">
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

      <ConnectCTA />
    </>
  );
};

export default Home;
