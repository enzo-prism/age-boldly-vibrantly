import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PillarContent {
  title: string;
  description: string;
  quizTitle: string;
  quizDescription: string;
  checklistTitle: string;
  galleryImages: string[];
}

const pillarContent: Record<string, PillarContent> = {
  confidence: {
    title: "Confidence - A Rebel's Superpower",
    description: "Rebels don't shrink back, they rise up. Confidence in your 50's, 60's, 70's, 80's, and beyond is about knowing your worth, owning your story, and most importantly embracing the power of your wisdom. At Rebellious Aging we are here to help you silence the inner critic, shake off limiting, and outdated beliefs and reignite your self-assurance. This is your time to show up boldly, speak your truth, and radiate the kind of confidence that does NOT ask permission.",
    quizTitle: "The Confidence Self-Assessment",
    quizDescription: "Discover your current confidence level and receive personalized recommendations to build unshakeable self-assurance.",
    checklistTitle: "7-Day Confidence Boosting Checklist",
    galleryImages: [
      "/lovable-uploads/5417c997-a5cb-468a-bacf-b4fb5b503c23.png",
      "/lovable-uploads/8e31f2a9-47df-44dc-87ce-c323dba17cf0.png",
      "/lovable-uploads/561e8ebb-46c4-40c8-a487-d7c5dbf1961f.png"
    ],
  },
  style: {
    title: "Style - Dazzle",
    description: "Style is not superficial—it is soulful, it is how you tell the world who you are without saying a word. Whether it is bright red lips, a daring scarf, or the perfect pair of vintage shoes and matching purse, style at Rebellious Aging is about expressing your true self—-bold, bright and unapologetically you. The time is now, so sparkle and shine with personality, play, panache and let your style dreams emerge.",
    quizTitle: "Discover Your Authentic Style Personality",
    quizDescription: "Take this quiz to uncover your unique style personality and learn how to express yourself authentically through fashion.",
    checklistTitle: "The Rebellious Style Essentials Checklist",
    galleryImages: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop"
    ],
  },
  longevity: {
    title: "Longevity - Nourish to Flourish",
    description: "You were not meant to slow down. You were meant to thrive. At Rebellious Aging, we encourage and embrace a Whole- Food, Plant- Based Lifestyle, as a delicious, empowering way to add healthy years to your life AND at the same time easily settle into your best weight and add life to your years. With every healthy bite you are fueling your body with vitality, managing weight naturally (no calorie counting and eating as much as you like) and taking care of your health in the most delicious way. Longevity isn't about living longer—-it is about living better, with purpose, authenticity, and sparkle",
    quizTitle: "The Longevity Lifestyle Assessment",
    quizDescription: "Evaluate your current lifestyle habits and receive a personalized roadmap to optimize your health span.",
    checklistTitle: "Daily Longevity Practices Checklist",
    galleryImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
    ],
  },
};

const PillarPage = () => {
  const { pillarId } = useParams<{ pillarId: string }>();
  
  if (!pillarId || !pillarContent[pillarId]) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6">Pillar Not Found</h1>
        <p>The pillar you're looking for doesn't exist.</p>
      </div>
    );
  }

  const content = pillarContent[pillarId];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
            <p className="text-lg text-gray-700">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={image}
                          alt={`${content.title} inspiration ${index + 1}`}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </AspectRatio>
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

      {/* Nutrition CTA - Only for Longevity */}
      {pillarId === 'longevity' && (
        <section className="py-16 bg-coral/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Fuel Your Longevity Journey</h2>
              <p className="text-lg text-gray-700 mb-8">
                Discover how proper nutrition supports your longevity goals. Learn about foods that promote vitality, brain health, and overall wellness as you age rebelliously.
              </p>
              <Link to="/nutrition">
                <Button className="bg-coral hover:bg-coral-dark text-white">
                  Explore Nutrition for Longevity
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quiz Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.quizTitle}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {content.quizDescription}
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form>
                <div className="space-y-6">
                  <div>
                    <label className="block font-medium mb-2">
                      1. How would you rate your current level of {content.title.toLowerCase()}?
                    </label>
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`q1-${value}`} 
                            name="question1" 
                            value={value}
                            className="mr-3 h-4 w-4 text-teal focus:ring-teal"
                          />
                          <label htmlFor={`q1-${value}`}>
                            {value} - {value === 1 ? 'Very Low' : value === 5 ? 'Very High' : ''}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">
                      2. What is your biggest challenge related to {content.title.toLowerCase()}?
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">
                      3. What would improving your {content.title.toLowerCase()} allow you to do or experience?
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-teal hover:bg-teal-dark text-white w-full md:w-auto">
                    Submit & Get Your Results
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Checklist CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-teal/10 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.checklistTitle}</h2>
              <p className="text-lg text-gray-700 mb-8">
                Download our practical checklist with daily actions you can take to build your {content.title.toLowerCase()} and transform your experience of aging.
              </p>
              <Button className="bg-coral hover:bg-coral-dark text-white">
                Download Free PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillarPage;
