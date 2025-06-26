
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
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            gallery
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {content.galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={image}
                          alt={`${content.title} inspiration ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
