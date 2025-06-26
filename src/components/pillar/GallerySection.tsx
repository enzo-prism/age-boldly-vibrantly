
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PillarContent } from '@/data/pillarContent';

interface GallerySectionProps {
  content: PillarContent;
}

const GallerySection: React.FC<GallerySectionProps> = ({ content }) => {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            gallery
          </h2>
          <div className="relative">
            <Carousel 
              className="w-full" 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {content.galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="relative group cursor-pointer">
                      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <AspectRatio ratio={4 / 3}>
                          <img
                            src={image}
                            alt={`${content.title} inspiration ${index + 1}`}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                      {/* Gradient overlay on sides to indicate more content */}
                      {index === 0 && (
                        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none lg:hidden" />
                      )}
                      {index === content.galleryImages.length - 1 && (
                        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white/60 to-transparent pointer-events-none lg:hidden" />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Enhanced navigation buttons */}
              <CarouselPrevious className="left-2 md:left-4 h-10 w-10 bg-white/90 hover:bg-white border-2 shadow-lg" />
              <CarouselNext className="right-2 md:right-4 h-10 w-10 bg-white/90 hover:bg-white border-2 shadow-lg" />
            </Carousel>

            {/* Dot indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(content.galleryImages.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor((current - 1) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)) === index
                      ? 'bg-teal w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    if (api) {
                      const itemsPerSlide = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
                      api.scrollTo(index * itemsPerSlide);
                    }
                  }}
                />
              ))}
            </div>

            {/* Swipe indicator for mobile */}
            <div className="flex justify-center mt-4 md:hidden">
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span>swipe for more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
